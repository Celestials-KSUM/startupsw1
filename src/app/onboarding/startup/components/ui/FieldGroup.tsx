// Shared FieldGroup wrapper: label row, children, helper/error/char counter
import type { ReactNode } from 'react';
import { Label } from "@/components/ui/label";

const AlertIcon = () => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>;

interface FieldGroupProps {
    label: string;
    htmlFor?: string;
    required?: boolean;
    optional?: boolean;
    helper?: string;
    error?: string;
    charCount?: number;
    charMax?: number;
    children: ReactNode;
}

export default function FieldGroup({
    label, htmlFor, required, optional, helper, error, charCount, charMax, children,
}: FieldGroupProps) {
    return (
        <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
                <Label htmlFor={htmlFor} className="text-sm font-medium text-slate-700">
                    {label}{required && <span className="text-red-500 ml-0.5">*</span>}
                </Label>
                {optional && (
                    <span className="px-2 py-0.5 rounded-full text-[0.72rem] font-medium text-purple-600
            bg-purple-600/[0.08] border border-purple-600/20">
                        Optional
                    </span>
                )}
            </div>
            {children}
            {charMax !== undefined && charCount !== undefined && (
                <span className={[
                    'text-[0.78rem] text-right',
                    charCount > charMax * 0.85 ? 'text-amber-500' : 'text-slate-400',
                ].join(' ')}>
                    {charCount}/{charMax}
                </span>
            )}
            {helper && !error && <span className="text-[0.8rem] text-slate-400">{helper}</span>}
            {error && (
                <span className="flex items-center gap-1.5 text-[0.8rem] text-red-500">
                    <AlertIcon /> {error}
                </span>
            )}
        </div>
    );
}
