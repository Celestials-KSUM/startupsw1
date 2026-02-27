// Reusable toggle switch — shows boolean value
'use client';
import { Switch } from "@/components/ui/switch";

interface ToggleProps {
    label: string;
    value: boolean | null;
    onChange: (v: boolean) => void;
}

export default function Toggle({ label, value, onChange }: ToggleProps) {
    return (
        <div className="flex items-center justify-between px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-[0.625rem]">
            <span className="text-sm font-medium text-slate-700">{label}</span>
            <Switch
                checked={!!value}
                onCheckedChange={onChange}
            />
        </div>
    );
}
