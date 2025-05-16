"use client"

import { FieldLabel, TextInput, useField, useFormFields } from "@payloadcms/ui"
import type { TextFieldClientProps } from "payload"
import * as React from "react"

import { formatSlug } from "@/lib/utils/formatSlug"

interface SlugComponentProps extends TextFieldClientProps {
    fieldToUse: string
}

export const SlugComponent = ({ field, fieldToUse, path }: SlugComponentProps) => {
    const { value, setValue } = useField<string>({ path: path || field.name })

    const targetFieldValue = useFormFields(([fields]) => {
        return fields[fieldToUse]?.value as string
    })

    React.useEffect(() => {
        if (targetFieldValue) {
            const formattedSlug = formatSlug(targetFieldValue)
            if (value !== formattedSlug) setValue(formattedSlug)
        } else {
            if (value !== "") setValue("")
        }
    }, [targetFieldValue, setValue, value])

    return (
        <div className="field-type">
            <FieldLabel htmlFor={`field-${path}`} label="Slug" />

            <TextInput
                onChange={setValue}
                path={path || field.name}
                readOnly={true}
                value={value}
            />
        </div>
    )
}
