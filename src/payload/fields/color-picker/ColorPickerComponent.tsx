"use client"

import { FieldLabel, TextInput, useField } from "@payloadcms/ui"
import type { TextFieldClientProps } from "payload"

import "./style.scss"

export const ColorPickerComponent = ({ field, path }: TextFieldClientProps) => {
    const { value, setValue } = useField<string>({ path })

    return (
        <div className="field-type color-picker-field-component">
            <FieldLabel htmlFor={`field-${path}`} label={field.label} required={field.required} />
            <div className="container">
                <input type="color" value={value} onChange={(e) => setValue(e.target.value)} />
                <TextInput
                    path={path || field.name}
                    onChange={(e: { target: { value: string } }) => setValue(e.target.value)}
                    value={value}
                />
            </div>
        </div>
    )
}
