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

const earlyBirdSchema = z.object({
    name: z.string().min(3).max(50),
    email: z.string().email("Please enter a valid email address"),
    company: z.string().min(1).max(50),
    phone: z
        .string()
        .refine(isValidPhoneNumber, { message: "Invalid phone number" })
        .or(z.literal("")),
    engagement_type: z.enum(["social-media", "friends", "email"]).optional(),
    message: z.string().min(3).max(500),
    honeypot: z.string().max(0, "Bot detected").optional(), // Honeypot field for bot protection
})

type EarlyBirdSchemaType = z.infer<typeof earlyBirdSchema>

const EarlyBirdForm: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({ className }) => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    const form = useForm<EarlyBirdSchemaType>({
        resolver: zodResolver(earlyBirdSchema),
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

    async function onSubmit(payload: EarlyBirdSchemaType) {
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
            const response = await fetch('/api/early-bird', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })

            if (response.ok) {
                setSubmitStatus('success')
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
            console.error('Error submitting early bird signup:', error)
            setErrorMessage(error instanceof Error ? error.message : 'Failed to submit the form. Please try again.')
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }
    
    return (
        <div className={cn("w-full max-w-md mx-auto", className)}>
            <div className="bg-gradient-to-br from-[#1a2025] to-[#242a30] rounded-2xl p-6 sm:p-8 border border-[#34383b] shadow-2xl">
                {/* Header */}
                <div className="text-center mb-8">
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Be an Early Bird
            </h3>
            <p className="text-[#a8b0b7] text-sm">
              Get exclusive access to fabricXai&apos;s AI-powered solutions
            </p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {/* Name and Email Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input 
                                                placeholder="Full Name*" 
                                                {...field} 
                                                className="bg-[#13191d] border-[#34383b] text-white placeholder-[#6b7280] focus:border-[#f2f827] focus:ring-[#f2f827]/20 transition-all duration-300 h-12 rounded-xl"
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-400 text-xs" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input 
                                                placeholder="Business Email*" 
                                                {...field} 
                                                className="bg-[#13191d] border-[#34383b] text-white placeholder-[#6b7280] focus:border-[#f2f827] focus:ring-[#f2f827]/20 transition-all duration-300 h-12 rounded-xl"
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-400 text-xs" />
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Company and Phone Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="company"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input 
                                                placeholder="Company*" 
                                                {...field} 
                                                className="bg-[#13191d] border-[#34383b] text-white placeholder-[#6b7280] focus:border-[#f2f827] focus:ring-[#f2f827]/20 transition-all duration-300 h-12 rounded-xl"
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-400 text-xs" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <PhoneInput 
                                                defaultCountry={countryCode as Country} 
                                                placeholder="Mobile*" 
                                                {...field} 
                                                className="bg-[#13191d] border-[#34383b] text-white placeholder-[#6b7280] focus:border-[#f2f827] focus:ring-[#f2f827]/20 transition-all duration-300 h-12 rounded-xl"
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-400 text-xs" />
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Engagement Type */}
                        <FormField
                            control={form.control}
                            name="engagement_type"
                            render={({ field }) => (
                                <FormItem>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="bg-[#13191d] border-[#34383b] text-white focus:border-[#f2f827] focus:ring-[#f2f827]/20 transition-all duration-300 h-12 rounded-xl">
                                                <SelectValue placeholder="How did you hear about us?" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="bg-[#1a2025] border-[#34383b] text-white">
                                            <SelectItem value="social-media" className="hover:bg-[#242a30] focus:bg-[#242a30]">Social Media</SelectItem>
                                            <SelectItem value="friends" className="hover:bg-[#242a30] focus:bg-[#242a30]">Friends</SelectItem>
                                            <SelectItem value="email" className="hover:bg-[#242a30] focus:bg-[#242a30]">Email Adverts</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage className="text-red-400 text-xs" />
                                </FormItem>
                            )}
                        />

                        {/* Message */}
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea 
                                            className="h-32 bg-[#13191d] border-[#34383b] text-white placeholder-[#6b7280] focus:border-[#f2f827] focus:ring-[#f2f827]/20 transition-all duration-300 rounded-xl resize-none" 
                                            placeholder="How can we help you?" 
                                            {...field} 
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-400 text-xs" />
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
                {/* </div> */}
                {/* Success Message */}
                {submitStatus === 'success' && (
                    <div className="p-4 mb-4 text-green-800 bg-green-100 border border-green-200 rounded-md">
                        <p className="font-medium">Form submitted successfully!</p>
                        <p className="text-sm">Thank you for signing up. We&apos;ll get back to you soon.</p>
                    </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                    <div className="p-4 mb-4 text-red-800 bg-red-100 border border-red-200 rounded-md">
                        <p className="font-medium">Failed to submit form</p>
                        <p className="text-sm">{errorMessage}</p>
                    </div>
                )}

                        {/* Submit Button */}
                        <div className="pt-4">
                            <Button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-[#f2f827] to-[#e0e626] hover:from-[#e0e626] hover:to-[#d4da24] text-[#13191d] font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <span>Submitting...</span>
                                        <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </span>
                                ) : (
                                <span className="flex items-center justify-center gap-2">
                                    <span>Be an Early Bird</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                                )}
                            </Button>
                        </div>

                        {/* Footer Note */}
                        <div className="text-center">
                            <p className="text-[#6b7280] text-xs">
                                Join the future of RMG operations today
                            </p>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default EarlyBirdForm;