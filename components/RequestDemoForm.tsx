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
import { Button } from "@/components/ui/button";

const requestDemoSchema = z.object({
    name: z.string().min(3).max(50),
    email: z.string().email("Please enter a valid email address"),
    company: z.string().min(1).max(50),
    phone: z
        .string()
        .refine(isValidPhoneNumber, { message: "Invalid phone number" })
        .or(z.literal("")),
    engagement_type: z.enum(["social-media", "friends", "email"]).optional(),
    message: z.string().min(3).max(500),
})

type RequestDemoSchemaType = z.infer<typeof requestDemoSchema>

const RequestDemoForm: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({ className }) => {
    const form = useForm<RequestDemoSchemaType>({
        resolver: zodResolver(requestDemoSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            phone: "",
            engagement_type: undefined,
            message: "",
        },
    })

    const [countryCode, setCountryCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://ipwho.is/')
            .then(res => res.json())
            .then(data => {
                setCountryCode(data.country_code);
            })
            .catch(err => console.error('Failed to get country code', err));
    }, []);

    async function onSubmit(payload: RequestDemoSchemaType) {
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            const response = await fetch('/api/request-demo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit demo request');
            }

            setSuccess(true);
            form.reset();
            
            // Reset success message after 5 seconds
            setTimeout(() => setSuccess(false), 5000);
            
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <div className={cn("w-full max-w-md mx-auto", className)}>
            <div className="bg-gradient-to-br from-[#1a2025] to-[#242a30] rounded-2xl p-6 sm:p-8 border border-[#34383b] shadow-2xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        Get a Demo
                    </h3>
                    <p className="text-[#a8b0b7] text-sm">
                        Experience fabricXai&apos;s AI-powered solutions firsthand
                    </p>
                </div>

                {/* Success Message */}
                {success && (
                    <div className="mb-6 p-4 bg-green-900/20 border border-green-500 rounded-lg">
                        <p className="text-green-400 text-sm">
                            Thank you! Your demo request has been submitted successfully. We&apos;ll get back to you soon.
                        </p>
                    </div>
                )}

                {/* Error Message */}
                {error && (
                    <div className="mb-6 p-4 bg-red-900/20 border border-red-500 rounded-lg">
                        <p className="text-red-400 text-sm">{error}</p>
                    </div>
                )}

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

                        {/* Submit Button */}
                        <div className="pt-4">
                            <Button 
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-[#f2f827] to-[#e0e626] hover:from-[#e0e626] hover:to-[#d4da24] text-[#13191d] font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <span>{loading ? 'Submitting...' : 'Get a Demo'}</span>
                                    {!loading && (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    )}
                                </span>
                            </Button>
                        </div>

                        {/* Footer Note */}
                        <div className="text-center">
                            <p className="text-[#6b7280] text-xs">
                                See how AI can transform your operations
                            </p>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default RequestDemoForm;