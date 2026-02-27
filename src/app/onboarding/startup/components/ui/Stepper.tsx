// Number stepper — increment/decrement between min and max
'use client';

const MinusIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /></svg>;
const PlusIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>;

interface StepperProps {
    value: number;
    onChange: (v: number) => void;
    min?: number;
    max?: number;
}

export default function Stepper({ value, onChange, min = 1, max = 10 }: StepperProps) {
    const btn = 'w-9 h-9 rounded-lg bg-blue-600/[0.08] border border-blue-600/20 text-blue-600 flex items-center justify-center cursor-pointer transition-colors hover:bg-blue-600/[0.15] disabled:opacity-30 disabled:cursor-not-allowed';
    return (
        <div className="flex items-center gap-4">
            <button type="button" className={btn} disabled={value <= min} onClick={() => onChange(value - 1)}>
                <MinusIcon />
            </button>
            <span className="font-['Sora'] font-bold text-2xl text-[#0B1220] min-w-12 text-center">{value}</span>
            <button type="button" className={btn} disabled={value >= max} onClick={() => onChange(value + 1)}>
                <PlusIcon />
            </button>
        </div>
    );
}
