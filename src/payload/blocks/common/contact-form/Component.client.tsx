"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Loader, Send } from "lucide-react"
import { type SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { Button } from "@/components/ui/Button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/Form"
import Input from "@/components/ui/Input"
import Textarea from "@/components/ui/Textarea"

const contactFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(1, "Subject is required"),
    message: z.string(),
})

type ContactFormType = z.infer<typeof contactFormSchema>

export default function ContactFormClient() {
    const form = useForm({
        // @ts-ignore
        resolver: zodResolver(contactFormSchema),
        mode: "onBlur",
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    })
    const isSubmitting = form.formState.isSubmitting

    const onSubmit: SubmitHandler<ContactFormType> = async (values) => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/form-submission`,
                {
                    method: "POST",
                    credentials: "omit",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: values.name,
                        email: values.email,
                        subject: values.subject,
                        message: values.message,
                    }),
                },
            )

            if (!response.ok) {
                const errorData = await response.json()
                toast.error(`Submission failed: ${errorData.message || "Unknown error"}`)
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
            }

            form.reset()
            toast.success("Your message has been sent successfully!")
        } catch (error) {
            console.error("Submission failed:", error)
            toast.error("There was an error submitting your form. Please try again later.")
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-xl flex-1 space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your name</FormLabel>
                            <FormControl>
                                <Input {...field} />
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
                            <FormLabel>Your email</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <Input {...field} />
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
                            <FormLabel>Your message (optional)</FormLabel>
                            <FormControl>
                                <Textarea rows={5} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    effect="shineHover"
                    size="lg"
                    icon={isSubmitting ? undefined : Send}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? <Loader className="animate-spin" /> : "Submit"}
                </Button>
            </form>
        </Form>
    )
}
