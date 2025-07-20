"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Country, isValidPhoneNumber } from "react-phone-number-input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";
import { PhoneInput } from "./ui/phone-input";
import { useEffect, useState } from "react";
import { Button } from "flowbite-react";

const requestDemoSchema = z.object({
    name: z.string().min(3).max(50),
    email: z.email("Please enter a valid email address"),
    company: z.string().min(1).max(50),
    phone: z
        .string()
        .refine((val) => !val || val === "" || isValidPhoneNumber(val), { message: "Invalid phone number" }),
    engagement_type: z.enum(["social-media", "friends", "email"]).optional(),
    message: z.string().min(3).max(500),
    honeypot: z.string().max(0, "Bot detected").optional(), // Honeypot field for bot protection
})

type RequestDemoSchemaType = z.infer<typeof requestDemoSchema>

const RequestDemoForm: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({ className }) => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    const form = useForm<RequestDemoSchemaType>({
        resolver: zodResolver(requestDemoSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            phone: "",
            engagement_type: undefined,
            message: "",
            honeypot: "", // Hidden field for bot protection
        },
    })

    const [countryCode, setCountryCode] = useState('');

    useEffect(() => {
        fetch('https://ipwho.is/')
            .then(res => res.json())
            .then(data => {
                setCountryCode(data.country_code);
            })
            .catch(err => console.error('Failed to get country code', err));
    }, []);

    async function onSubmit(payload: RequestDemoSchemaType) {
        console.log('Demo form onSubmit called with payload:', payload);
        
        // Honeypot protection: if honeypot field is filled, it's likely a bot
        if (payload.honeypot && payload.honeypot.trim() !== '') {
            setErrorMessage('Spam detected. Please try again.')
            setSubmitStatus('error')
            return
        }
        
        setIsSubmitting(true)
        setSubmitStatus('idle')
        setErrorMessage('')

        try {
            const response = await fetch('/api/request-demo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })

            if (response.ok) {
                setSubmitStatus('success')
                const result = await response.json()
                console.log("email sent ok: ", result)
                form.reset()
            } else {
                let errorMessage = 'Failed to submit the form. Please try again.'
                try {
                    const errorData = await response.json()
                    errorMessage = errorData.error || errorMessage
                } catch (parseError) {
                    // If we can't parse the error response, use a generic message
                    console.warn('Could not parse error response:', parseError)
                    errorMessage = `Server error (${response.status}): ${response.statusText || 'Unknown error'}`
                }
                setErrorMessage(errorMessage)
                setSubmitStatus('error')
            }
        } catch (error) {
            console.error('Error submitting demo request:', error)
            setErrorMessage(error instanceof Error ? error.message : 'Failed to submit the form. Please try again.')
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={cn("flex flex-col gap-2", className)}>
                <div className="flex flex-col gap-2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Full Name*" {...field} />
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

                                <FormControl>
                                    <Input placeholder="Business Email*" {...field} />
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

                                <FormControl>
                                    <Input placeholder="Company*" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem className="flex flex-col items-start">
                                <FormControl className="w-full">
                                    <PhoneInput defaultCountry={countryCode as Country} placeholder="Mobile*" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="engagement_type"
                        render={({ field }) => (
                            <FormItem>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl className="w-full">
                                        <SelectTrigger>
                                            <SelectValue placeholder="How did you hear about us?" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="social-media">Social Media</SelectItem>
                                        <SelectItem value="friends">Friends</SelectItem>
                                        <SelectItem value="email">Email Adverts</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea className="h-36" placeholder="How can we help you?" {...field} />
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
                </div>
                {/* Success Message */}
                {submitStatus === 'success' && (
                    <div className="p-4 mb-4 text-green-800 bg-green-100 border border-green-200 rounded-md">
                        <p className="font-medium">Form submitted successfully!</p>
                        <p className="text-sm">Thank you for requesting a demo. We&apos;ll get back to you soon.</p>
                    </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                    <div className="p-4 mb-4 text-red-800 bg-red-100 border border-red-200 rounded-md">
                        <p className="font-medium">Failed to submit form</p>
                        <p className="text-sm">{errorMessage}</p>
                    </div>
                )}

                <div className="flex items-center justify-center mt-4">

                    <Button 
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                            isSubmitting && "opacity-50 cursor-not-allowed"
                        )}
                    >
                        {isSubmitting ? 'Submitting...' : 'Get a Demo'}
                    </Button>

                </div>
            </form>
        </Form>
    )
}

export default RequestDemoForm;
