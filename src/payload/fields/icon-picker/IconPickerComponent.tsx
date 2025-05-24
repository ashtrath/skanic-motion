/** biome-ignore-all lint/suspicious/noExplicitAny: can't find the proper types */
"use client"

import { FieldLabel, ReactSelect, type ReactSelectOption, useField } from "@payloadcms/ui"
import type { Option } from "@payloadcms/ui/elements/ReactSelect"
import Image from "next/image"
import type { SelectFieldClientComponent } from "payload"
import * as React from "react"
import { areEqual, FixedSizeList as List } from "react-window"

import "./style.scss"

const ICON_BASE_URL = "https://cdn.jsdelivr.net/npm/lucide-static@0.509.0/icons/"

const IconPreview: React.FC<{ name: string }> = React.memo(({ name }) => (
    <Image
        src={`${ICON_BASE_URL}${name}.svg`}
        alt={name}
        width={20}
        height={20}
        loading="lazy"
        className="icon-preview"
    />
))

IconPreview.displayName = "IconPreview"

const CustomOption: React.FC<ReactSelectOption> = ({ data, innerProps, isSelected }: any) => (
    <div {...innerProps} className={`custom-option ${isSelected ? "focused" : ""}`}>
        <IconPreview name={data.value} />
        {data.label}
    </div>
)

const SingleValue: React.FC<ReactSelectOption> = ({ data }: any) => (
    <div className="custom-single-value">
        <IconPreview name={data.value} />
        {data.label}
    </div>
)

const ITEM_HEIGHT = 36

type RowProps = {
    index: number
    style: React.CSSProperties
    data: React.ReactNode[]
}

const Row = React.memo(({ index, style, data }: RowProps) => {
    const child = data[index]
    if (!child) return null

    return (
        <div style={style} key={(child as React.ReactElement).key}>
            {child}
        </div>
    )
}, areEqual)

Row.displayName = "VirtualizedRow"

const VirtualMenuList: React.FC<any> = ({ children, maxHeight }) => {
    const items = React.Children.toArray(children)
    const itemCount = items.length
    const listHeight = Math.min(maxHeight, itemCount * ITEM_HEIGHT)

    return (
        <List
            height={listHeight}
            itemCount={itemCount}
            itemSize={ITEM_HEIGHT}
            width="100%"
            itemData={items}
        >
            {Row}
        </List>
    )
}

const reactSelectComponents = {
    Option: CustomOption,
    SingleValue,
    MenuList: VirtualMenuList,
}

export const IconPickerComponent: SelectFieldClientComponent = ({ field, path }) => {
    const { label, admin, hasMany = false } = field
    const { value, setValue } = useField({ path: path })
    const placeholder =
        typeof admin?.placeholder === "function"
            ? admin?.placeholder(field)
            : admin?.placeholder || "Search for icon..."
    const isClearable = admin?.isClearable === false ? undefined : true
    const className = admin?.className

    const options = React.useMemo(() => field.options as Option[], [field.options])

    const currentOption = React.useMemo(() => {
        return options.find((option) => option.value === value) as Option | undefined
    }, [options, value])

    const handleChange = React.useCallback(
        (selected: Option | null) => {
            setValue(selected ? selected.value : null)
        },
        [setValue],
    )

    return (
        <div
            className="field-type select icon-field-component"
            style={{ "--field-width": field?.admin?.width || undefined } as React.CSSProperties}
        >
            <div className="label-wrapper">
                <FieldLabel htmlFor={`field-${path}`} label={label} />
            </div>

            <ReactSelect
                value={currentOption}
                placeholder={placeholder}
                onChange={(opt) => handleChange(opt as Option | null)}
                isClearable={isClearable}
                options={options}
                components={reactSelectComponents}
                className={className}
                isCreatable={false}
                isMulti={hasMany}
            />
        </div>
    )
}
