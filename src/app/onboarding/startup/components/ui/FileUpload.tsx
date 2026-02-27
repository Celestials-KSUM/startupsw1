'use client';
import { useState, useRef } from 'react';

const UploadIcon = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16" /><line x1="12" y1="12" x2="12" y2="21" /><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" /></svg>;
const CheckIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>;

interface FileUploadProps {
    label: string;
    accept: string;
    maxMb: number;
    helpText: string;
    value: File | null;
    onChange: (f: File | null) => void;
}

export default function FileUpload({ label, accept, maxMb, helpText, value, onChange }: FileUploadProps) {
    const [drag, setDrag] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handle = (f: File) => {
        if (f.size <= maxMb * 1024 * 1024) onChange(f);
    };

    return (
        <div className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-slate-700">{label}</span>
            {value ? (
                <div className="flex flex-col items-center gap-2 p-6 rounded-[0.875rem]
          border border-green-500/30 bg-green-500/[0.06] text-center">
                    <div className="flex items-center gap-2 text-green-600 font-medium text-sm">
                        <CheckIcon /> {value.name}
                        <span className="text-slate-400 font-normal">({(value.size / 1024 / 1024).toFixed(1)}MB)</span>
                    </div>
                    <button type="button" onClick={() => onChange(null)}
                        className="text-xs text-slate-400 hover:text-red-500 px-2 py-1 rounded transition-colors">
                        Remove
                    </button>
                </div>
            ) : (
                <div
                    onClick={() => inputRef.current?.click()}
                    onDragOver={e => { e.preventDefault(); setDrag(true); }}
                    onDragLeave={() => setDrag(false)}
                    onDrop={e => { e.preventDefault(); setDrag(false); const f = e.dataTransfer.files[0]; if (f) handle(f); }}
                    className={[
                        'flex flex-col items-center gap-2 p-8 rounded-[0.875rem] cursor-pointer text-center',
                        'transition-all duration-200 border-2 border-dashed',
                        drag
                            ? 'border-blue-600 bg-blue-600/[0.06] shadow-[0_0_0_4px_rgba(37,99,235,0.08)]'
                            : 'border-slate-300 bg-slate-50/80 hover:border-blue-600 hover:bg-blue-600/[0.04]',
                    ].join(' ')}
                >
                    <span className={drag ? 'text-blue-600' : 'text-slate-400'}>
                        <UploadIcon />
                    </span>
                    <span className="text-sm font-medium text-slate-500">Drag & drop or click to upload</span>
                    <span className="text-xs text-slate-400">{helpText}</span>
                </div>
            )}
            <input ref={inputRef} type="file" accept={accept} className="hidden"
                onChange={e => { const f = e.target.files?.[0]; if (f) handle(f); }} />
        </div>
    );
}
