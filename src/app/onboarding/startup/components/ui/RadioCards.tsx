// 2×2 radio card grid — icon, label, sublabel, selected state
'use client';
import type { ReactNode } from 'react';

interface Option {
    value: string;
    label: string;
    sublabel: string;
    icon: ReactNode;
}

interface RadioCardsProps {
    options: Option[];
    value: string;
    onChange: (v: string) => void;
}

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioCards({ options, value, onChange }: RadioCardsProps) {
    return (
        <RadioGroup
            value={value}
            onValueChange={onChange}
            className="grid grid-cols-2 gap-3.5 max-sm:grid-cols-1"
        >
            {options.map(o => {
                const selected = value === o.value;
                return (
                    <div key={o.value} className="relative">
                        <RadioGroupItem
                            value={o.value}
                            id={`radio-${o.value}`}
                            className="absolute opacity-0 w-0 h-0"
                        />
                        <label
                            htmlFor={`radio-${o.value}`}
                            className={[
                                'block p-5 rounded-[0.875rem] text-left transition-all duration-200 font-["DM_Sans"] cursor-pointer w-full h-full border-[1.5px]',
                                'hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(11,18,32,0.08)]',
                                'focus-within:outline-2 focus-within:outline-blue-600 focus-within:outline-offset-2',
                                selected
                                    ? 'bg-blue-600/[0.06] border-blue-600 shadow-[0_4px_16px_rgba(37,99,235,0.12)]'
                                    : 'bg-slate-50/70 border-slate-200 hover:border-slate-300',
                            ].join(' ')}
                        >
                            <div className={[
                                'w-9 h-9 rounded-lg flex items-center justify-center mb-3 transition-colors',
                                selected ? 'bg-blue-600/[0.12] text-blue-600' : 'bg-slate-300/20 text-slate-400',
                            ].join(' ')}>
                                {o.icon}
                            </div>
                            <div className={[
                                "font-['Sora'] font-semibold text-[0.95rem] mb-1",
                                selected ? 'text-[#0B1220]' : 'text-slate-700',
                            ].join(' ')}>{o.label}</div>
                            <div className="text-xs text-slate-400">{o.sublabel}</div>
                        </label>
                    </div>
                );
            })}
        </RadioGroup>
    );
}
