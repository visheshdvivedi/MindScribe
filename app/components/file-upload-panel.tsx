"use client"

import React, { useCallback } from "react";
import { FaFilePdf } from "react-icons/fa6";
import { formatBytes } from "../utils/formating";

const FileUploadIcon = React.memo(() => {
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
            className="lucide lucide-upload w-16 h-16 transition-colors text-muted-foreground"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" x2="12" y1="3" y2="15"></line>
        </svg>
    );
});
FileUploadIcon.displayName = "FileUploadIcon";

type FileUploadPanelProps = {
    onSubmit: (file: File) => void
}

const FileUploadPanel = ({ onSubmit }: FileUploadPanelProps) => {

    const [file, setFile] = React.useState<File | null>(null);
    const fileInputRef = React.useRef<HTMLInputElement>(null);
    const [dragActive, setDragActive] = React.useState<boolean>(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target || !e.target.files || !e.target.files.length)
            return

        const selected = e.target.files[0];
        if (!selected) {
            alert("File not specified");
            return;
        }
        else if (selected.type != 'application/pdf') {
            alert("File specified is not of type PDF");
            return;
        }

        setFile(selected);
    }

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (!e.dataTransfer || !e.dataTransfer.files || !e.dataTransfer.files.length)
            return

        const dropped = e.dataTransfer.files[0];
        if (!dropped) {
            alert("File not specified");
            return;
        }
        else if (dropped.type != 'application/pdf') {
            alert("File specified is not of type PDF");
            return;
        }

        setFile(dropped);

    }, []);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    }

    const handleDragLeave = () => {
        setDragActive(false);
    }

    const handleButtonClick = () => {
        if (fileInputRef && fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    const handleCancelButtonClick = () => {
        setFile(null);
    }

    const handleSubmit = () => {
        if (file && onSubmit) onSubmit(file);
    }

    if (!file) {
        return (
            <div className="flex-2 flex flex-col justify-between items-center gap-5 bg-neutral-50 dark:bg-neutral-900 py-16 border-2 border-gray-200 dark:border-gray-900 hover:border-purple-200 rounded-lg" onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
                <div className="rounded-2xl bg-stone-100 p-6">
                    <FileUploadIcon />
                </div>
                <h2 className="text-xl font-bold">Drop your PDF here</h2>
                <h3>or click to browse files</h3>
                <button onClick={handleButtonClick} className="px-4 py-3 font-medium rounded-lg text-white bg-gradient-to-br from-purple-800 to-purple-600 hover:from-purple-700 hover:to-purple-500">Select PDF</button>
                <input type="file" id="pdf-file-upload" accept="application/pdf" className="hidden" onChange={handleFileChange} ref={fileInputRef} />
            </div>
        )
    }

    return (
        <div className={`flex-2 flex flex-col justify-between items-center gap-5 py-16 border-2 border-gray-200 dark:border-gray-900 hover:border-purple-200 rounded-lg ${dragActive ? 'bg-neutral-200 dark:bg-neutral-800' : 'bg-neutral-50 dark:bg-neutral-900'}`}>
            <FaFilePdf className="w-16 h-16" />
            <span className="text-xl font-bold">{file.name}</span>
            <span>{formatBytes(file.size)}</span>
            <div className="flex flex-row gap-3">
                <button onClick={handleSubmit} className="px-4 py-3 font-medium rounded-lg text-white bg-gradient-to-br from-purple-800 to-purple-600 hover:from-purple-700 hover:to-purple-500">Submit</button>
                <button onClick={handleCancelButtonClick} className="px-3 py-2 font-medium rounded-lg text-white bg-gradient-to-br from-red-800 to-red-600 hover:from-red-700 hover:to-red-500">Cancel</button>
            </div>
        </div>
    )
};

export default FileUploadPanel;
