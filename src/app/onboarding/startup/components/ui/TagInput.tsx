// Tag input — type and press Enter/comma to add removable tag chips
'use client';
import { useState } from 'react';

const XIcon = () => (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

interface TagInputProps {
    tags: string[];
    onChange: (tags: string[]) => void;
    placeholder?: string;
    max?: number;
}

export default function TagInput({ tags, onChange, placeholder = 'Type and press Enter…', max }: TagInputProps) {
    const [val, setVal] = useState('');

    const add = () => {
        const v = val.trim();
        if (v && !tags.includes(v) && (!max || tags.length < max)) {
            onChange([...tags, v]);
            setVal('');
        }
    };

    const remove = (t: string) => onChange(tags.filter(x => x !== t));

    return (
        <div className="flex flex-wrap gap-2 p-2.5 min-h-12 bg-slate-50 border border-slate-200 rounded-[0.625rem]
      focus-within:border-blue-600 focus-within:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] focus-within:bg-white
      transition-all duration-200 cursor-text">
            {tags.map(t => (
                <span key={t} className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200
          rounded-md text-sm font-medium text-slate-700 animate-[popIn_0.15s_ease]">
                    {t}
                    <button type="button" onClick={() => remove(t)}
                        className="text-slate-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors p-px">
                        <XIcon />
                    </button>
                </span>
            ))}
            <input
                value={val}
                placeholder={tags.length === 0 ? placeholder : ''}
                onChange={e => setVal(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); add(); } }}
                className="border-none outline-none bg-transparent text-sm text-slate-900 min-w-32 flex-1
          placeholder:text-slate-400 font-['DM_Sans']"
            />
        </div>
    );
}
