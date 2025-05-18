"use client"

import {
    CheckboxInput,
    FieldLabel,
    TextInput,
    useField,
    useForm,
    useFormFields,
} from "@payloadcms/ui"
import type { TextFieldClientProps } from "payload"
import * as React from "react"

import { formatSlug } from "@/lib/utils/formatSlug"
import "./style.scss"

interface SlugComponentProps extends TextFieldClientProps {
    checkboxFieldPath: string
    fieldToUse: string
}

export const SlugComponent = ({
    checkboxFieldPath: checkboxFieldPathFromProps,
    field,
    fieldToUse,
    path,
    readOnly: readOnlyFromProps,
}: SlugComponentProps) => {
    const { label } = field

    const checkboxFieldPath = path?.includes(".")
        ? `${path}.${checkboxFieldPathFromProps}`
        : checkboxFieldPathFromProps

    const { setValue, value } = useField<string>({ path: path || field.name })

    const { dispatchFields } = useForm()

    // The value of the checkbox
    // We're using separate useFormFields to minimise re-renders
    const checkboxValue = useFormFields(([fields]) => {
        return fields[checkboxFieldPath]?.value as string
    })

    // The value of the field we're listening to for the slug
    const targetFieldValue = useFormFields(([fields]) => {
        return fields[fieldToUse]?.value as string
    })

    React.useEffect(() => {
        if (checkboxValue) {
            if (targetFieldValue) {
                const formattedSlug = formatSlug(targetFieldValue)

                if (value !== formattedSlug) {
                    setValue(formattedSlug)
                }
            } else {
                if (value !== "") {
                    setValue("")
                }
            }
        }
    }, [targetFieldValue, checkboxValue, setValue, value])

    const handleLock = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault()

            dispatchFields({
                type: "UPDATE",
                path: checkboxFieldPath,
                value: !checkboxValue,
            })
        },
        [checkboxValue, checkboxFieldPath, dispatchFields],
    )

    const readOnly = readOnlyFromProps || checkboxValue

    return (
        <div className="field-type slug-field-component">
            <FieldLabel htmlFor={`field-${path}`} label={label} />

            <div className="container">
                <TextInput
                    onChange={setValue}
                    path={path || field.name}
                    readOnly={Boolean(readOnly)}
                    value={value}
                />
                <CheckboxInput
                    name={checkboxFieldPath}
                    onToggle={handleLock}
                    checked={!checkboxValue}
                />
            </div>
        </div>
    )
}
