"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Loader, Send } from "lucide-react"
import { useForm } from "react-hook-form"
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
    message: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function ContactFormClient() {
    const form = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        reValidateMode: "onBlur",
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    })
    const isSubmitting = form.formState.isSubmitting

    const onSubmit = async (values: ContactFormData) => {
        await new Promise((resolve) => setTimeout(resolve, 5000))

        console.log(values)
        form.reset()
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
