"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";
import { Button } from "flowbite-react";

const messageSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters").max(50, "Name must be less than 50 characters"),
    email: z.string().email("Please enter a valid email address"),
    company: z.string().min(1, "Company name is required").max(50, "Company name must be less than 50 characters"),
    message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
    honeypot: z.string().max(0, "Bot detected").optional(), // Honeypot field for bot protection
})

type MessageSchemaType = z.infer<typeof messageSchema>

const SendMessageForm: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({ className }) => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')
    const [retryCount, setRetryCount] = useState(0)
    const [lastSubmitTime, setLastSubmitTime] = useState(0)
    
    const form = useForm<MessageSchemaType>({
        resolver: zodResolver(messageSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            message: "",
            honeypot: "", // Hidden field for bot protection
        },
    })

    async function onSubmit(payload: MessageSchemaType) {
        // Rate limiting: prevent submissions less than 10 seconds apart
        const currentTime = Date.now()
        if (currentTime - lastSubmitTime < 10000) {
            setErrorMessage('Please wait at least 10 seconds between submissions.')
            setSubmitStatus('error')
            return
        }
        
        // Honeypot protection: if honeypot field is filled, it's likely a bot
        if (payload.honeypot && payload.honeypot.trim() !== '') {
            setErrorMessage('Spam detected. Please try again.')
            setSubmitStatus('error')
            return
        }
        
        setIsSubmitting(true)
        setSubmitStatus('idle')
        setErrorMessage('')
        setLastSubmitTime(currentTime)
        
        const maxRetries = 3
        let currentRetry = retryCount
        
        const attemptSubmit = async (): Promise<void> => {
            
            const emailData = {
                name: payload.name,
                email: payload.email,
                company: payload.company,
                message: payload.message
            }
            
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(emailData),
            })
            
            if (!response.ok) {
                let errorMessage = 'Failed to send message'
                try {
                    const errorData = await response.json()
                    errorMessage = errorData.error || errorMessage
                } catch (parseError) {
                    // If we can't parse the error response, use a generic message
                    console.warn('Could not parse error response:', parseError)
                    errorMessage = `Server error (${response.status}): ${response.statusText || 'Unknown error'}`
                }
                throw new Error(errorMessage)
            }
            
            let result
            try {
                result = await response.json()
            } catch (parseError) {
                // If we can't parse the success response, treat as success but with warning
                console.warn('Could not parse success response:', parseError)
                result = { message: 'Request completed but response parsing failed' }
            }
            console.log('Email sent successfully:', result)
            
            setSubmitStatus('success')
            setRetryCount(0) // Reset retry count on success
            form.reset()
        }
        
        try {
            await attemptSubmit()
        } catch (error) {
            console.error('Error sending message:', error)
            
            // Retry logic for network/server errors
            if (currentRetry < maxRetries && (error instanceof Error && (error.message.includes('fetch') || error.message.includes('network')))) {
                currentRetry++
                setRetryCount(currentRetry)
                setErrorMessage(`Attempt ${currentRetry + 1} failed. Retrying...`)
                
                // Wait before retrying (exponential backoff)
                await new Promise(resolve => setTimeout(resolve, Math.pow(2, currentRetry) * 1000))
                
                try {
                    await attemptSubmit()
                } catch (retryError) {
                    setSubmitStatus('error')
                    setErrorMessage(retryError instanceof Error ? retryError.message : 'Failed to send message after retries')
                }
            } else {
                setSubmitStatus('error')
                setErrorMessage(error instanceof Error ? error.message : 'Failed to send message')
            }
        } finally {
            setIsSubmitting(false)
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={cn("flex flex-col justify-between gap-4", className)}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Company</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your company name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea className="min-h-32" placeholder="Enter your message" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Hidden honeypot field for bot protection */}
                <FormField
                    control={form.control}
                    name="honeypot"
                    render={({ field }) => (
                        <div className="hidden">
                            <Input 
                                {...field} 
                                tabIndex={-1}
                                autoComplete="off"
                                aria-hidden="true"
                            />
                        </div>
                    )}
                />
                {/* Success Message */}
                {submitStatus === 'success' && (
                    <div className="p-4 mb-4 text-green-800 bg-green-100 border border-green-200 rounded-md">
                        <p className="font-medium">Message sent successfully!</p>
                        <p className="text-sm">Thank you for your message. We&apos;ll get back to you soon.</p>
                    </div>
                )}
                
                {/* Error Message */}
                {submitStatus === 'error' && (
                    <div className="p-4 mb-4 text-red-800 bg-red-100 border border-red-200 rounded-md">
                        <p className="font-medium">Failed to send message</p>
                        <p className="text-sm">{errorMessage}</p>
                    </div>
                )}
                
                <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={cn(
                        "w-full",
                        isSubmitting && "opacity-50 cursor-not-allowed"
                    )}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
            </form>
        </Form>
    )
}

export default SendMessageForm;