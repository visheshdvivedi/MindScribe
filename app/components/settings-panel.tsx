// app/components/settings-panel.tsx
"use client"

import React from "react";

const SettingsIcon = React.memo(() => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-settings2 w-5 h-5 text-violet-700 dark:text-violet-500 rounded-full"
        >
            <path d="M20 7h-9"></path>
            <path d="M14 17H5"></path>
            <circle cx="17" cy="17" r="3"></circle>
            <circle cx="7" cy="7" r="3"></circle>
        </svg>
    );
});

type SettingsDropdownInputType = {
    label: string,
    name: string,
    options: Array<string>,
    value: string,
    setValue: (val: string) => void
}

type SettingsCheckboxInputType = {
    label: string,
    name: string,
    checked: boolean,
    setValue: (val: boolean) => void
}

type SettingsSliderInputType = {
    label: string,
    name: string,
    min: number,
    max: number,
    value: number,
    setValue: (val: number) => void
}

const SettingsDropdownInput = ({ label, name, options, value, setValue }: SettingsDropdownInputType) => {
    return (
        <div className="flex flex-col gap-3 items-start">
            <label htmlFor="" className="text-sm font-bold">{label}</label>
            <select name={name} className="flex h-10 w-full items-center justify-between border border-input bg-neutral-50 dark:bg-neutral-800 px-3 py-2 text-sm ring-offset-neutral-100 placeholder:text-muted-purple-800 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 rounded-xl" value={value} onChange={(e) => setValue(e.target.value)}>
                <option value="" selected disabled hidden>Select {label} ...</option>
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

const SettingsCheckboxInput = ({ label, name, checked, setValue }: SettingsCheckboxInputType) => {
    return (
        <div className="flex flex-row gap-2 items-center ">
            <input type="checkbox" name={name} checked={checked} onChange={(e) => setValue(e.target.checked)} className="rounded-full" />
            <label htmlFor="" className="text-sm">{label}</label>
        </div>
    )
}

const SettingsSliderInput = ({ label, name, min, max, value, setValue }: SettingsSliderInputType) => {
    return (
        <div className="flex flex-col gap-2 ">
            <div className="flex flex-row justify-between">
                <label htmlFor="" className="text-sm font-bold">{label}</label>
                <span className="text-sm">{value}%</span>
            </div>
            <input type="range" min={min} max={max} step={10} name={name} value={value} onChange={(e) => setValue(parseInt(e.target.value))} className="rounded-full" />
        </div>
    )
}

const SettingsPanel = () => {

    // summary type input
    const summaryTypeLabel = "Summary Type"
    const summaryTypeName = 'summary_type'
    const summaryTypeOptions = [
        'Detailed', 'Concise', 'Thematic'
    ]

    // tone input
    const toneLabel = "Tone"
    const toneName = 'tone'
    const toneOptions = [
        'Formal', 'Conversational', 'Academic', 'Simplified'
    ]

    // perspective input
    const perspectiveLabel = "Perspective"
    const perspectiveName = 'perspective'
    const perspectiveOptions = [
        'Objective', 'Interpretive'
    ]

    // key idea checkbox
    const keyIdeaLabel = "Key Ideas"
    const keyIdeaName = 'key_ideas'
    
    // quotes checkbox
    const quotesLabel = "Quotes"
    const quotesName = "quotes"

    // examples checkbox
    const examplesLabel = "Examples"
    const examplesName = "examples"

    // definitions checkbox
    const definitionsLabel = "Definitions"
    const definitionsName = "definitions"

    // compression ratio range
    const compressionRatioLabel = "Compression Ratio"
    const compressionRatioName = "compression_ratio"

    // output format input
    const outputFormatLabel = "Output Format"
    const outputFormatName = "output_format"
    const outputFormatOptions = [
        'Markdown', 'JSON', 'PDF', 'Plaintext'
    ]

    // settings state
    const [settings, setSettings] = React.useState({
        summary_type: "",
        tone: "",
        perspective: "",
        key_ideas: false,
        quotes: false,
        examples: false,
        definitions: false,
        compression_ratio: 50,
        output_format: ""
    })

    // function to update settings
    const updateSettings = (key: string, value: any) => {
        setSettings({
            ...settings,
            [key]: value
        })
    }

    // todo: remove before push to repo
    React.useEffect(() => {
        console.log("Settings:", settings);
    }, [settings])

    return (
        <div className="flex-1 bg-white dark:bg-neutral-900 dark:hover:outline-purple-900 dark:hover:outline-1 rounded-lg shadow-lg transition-colors duration-500">
            <div className="flex flex-row items-center gap-3 px-3 py-2 lg:py-6 lg:px-8">
                <div className="rounded-full bg-purple-100 dark:bg-violet-950 p-2">
                    <SettingsIcon />
                </div>
                <h2 className="text-xl font-bold">Settings</h2>
            </div>
            <hr className="border-b-2" />
            <div className="p-6 flex flex-col gap-5">
                <SettingsDropdownInput value={settings.summary_type} setValue={(val: string) => updateSettings(summaryTypeName, val)} name={summaryTypeName} label={summaryTypeLabel} options={summaryTypeOptions} />
                <SettingsDropdownInput value={settings.tone} name={toneName} setValue={(val: string) => updateSettings(toneName, val)} label={toneLabel} options={toneOptions} />
                <SettingsDropdownInput value={settings.perspective} setValue={(val: string) => updateSettings(perspectiveName, val)} name={perspectiveName} label={perspectiveLabel} options={perspectiveOptions} />
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-sm">Focus Areas</h2>
                    <SettingsCheckboxInput label={keyIdeaLabel} name={keyIdeaName} checked={settings.key_ideas} setValue={(val: boolean) => updateSettings(keyIdeaName, val)} />
                    <SettingsCheckboxInput label={quotesLabel} name={quotesName} checked={settings.quotes} setValue={(val: boolean) => updateSettings(quotesName, val)} />
                    <SettingsCheckboxInput label={examplesLabel} name={examplesName} checked={settings.examples} setValue={(val: boolean) => updateSettings(examplesName, val)} />
                    <SettingsCheckboxInput label={definitionsLabel} name={definitionsName} checked={settings.definitions} setValue={(val: boolean) => updateSettings(definitionsName, val)} />
                </div>
                <SettingsSliderInput label={compressionRatioLabel} name={compressionRatioName} min={10} max={100} value={settings.compression_ratio} setValue={(val: number) => updateSettings(compressionRatioName, val)} />
                <SettingsDropdownInput label={outputFormatLabel} name={outputFormatName} options={outputFormatOptions} value={settings.output_format} setValue={(val: string) => updateSettings(outputFormatName, val)} />
            </div>
        </div>
    );
};

export default SettingsPanel;
