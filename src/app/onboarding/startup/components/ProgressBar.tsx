// Sticky top progress bar with 9 step dots, logo, section counter and Save Draft
'use client';
import Link from 'next/link';

const CheckIcon = () => <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>;
const LogoMark = () => <svg width="26" height="26" viewBox="0 0 36 36"><rect width="36" height="36" rx="9" fill="#0B1220" /><circle cx="18" cy="13" r="3.5" fill="#2563EB" /><circle cx="10" cy="22" r="2.5" fill="#3B82F6" opacity="0.8" /><circle cx="26" cy="22" r="2.5" fill="#8B5CF6" opacity="0.8" /><line x1="18" y1="13" x2="10" y2="22" stroke="#2563EB" strokeWidth="1.2" opacity="0.5" /><line x1="18" y1="13" x2="26" y2="22" stroke="#8B5CF6" strokeWidth="1.2" opacity="0.5" /></svg>;

interface ProgressBarProps {
    active: number;
    onStepClick: (n: number) => void;
}

export default function ProgressBar({ active, onStepClick }: ProgressBarProps) {
    const pct = Math.round(((active - 1) / 8) * 100);

    return (
        <nav className="sticky top-0 z-40 bg-[rgba(248,250,252,0.88)] backdrop-blur-xl
      border-b border-slate-200/60 shadow-[0_4px_24px_rgba(11,18,32,0.06)]
      animate-[slideDown_0.5s_ease_both]"
            aria-label="Form progress">
            <div className="max-w-[780px] mx-auto px-6 py-3.5 flex items-center justify-between gap-4">

                {/* Left: logo */}
                <Link href="/" className="flex items-center gap-2 flex-shrink-0 no-underline">
                    <LogoMark />
                    <div>
                        <div className="font-['Sora'] font-bold text-sm text-[#0B1220] leading-none">StartupSwarm</div>
                        <div className="text-[0.7rem] text-slate-400 font-medium mt-0.5">New Startup</div>
                    </div>
                </Link>

                {/* Center: dots (hidden on mobile) */}
                <div className="hidden md:flex items-center flex-1 justify-center"
                    role="progressbar" aria-valuenow={active} aria-valuemax={9}>
                    {Array.from({ length: 9 }, (_, i) => i + 1).map((n, i) => {
                        const done = active > n;
                        const isActive = active === n;
                        return (
                            <div key={n} className="flex items-center">
                                {i > 0 && (
                                    <div className={`w-7 h-0.5 ${done ? 'bg-green-500' : 'bg-slate-200'} transition-colors duration-300`} />
                                )}
                                <button type="button" onClick={() => onStepClick(n)} title={`Section ${n}`}
                                    className={[
                                        'w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold border-0 cursor-pointer transition-all duration-200',
                                        done ? 'bg-green-500 text-white'
                                            : isActive ? 'bg-blue-600 text-white shadow-[0_0_0_4px_rgba(37,99,235,0.15)]'
                                                : 'bg-slate-200 text-slate-400 hover:bg-slate-300',
                                    ].join(' ')}>
                                    {done ? <CheckIcon /> : n}
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile: thin progress bar */}
                <div className="flex md:hidden flex-1 h-1 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${pct}%` }} />
                </div>

                {/* Right */}
                <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="hidden sm:block text-sm font-medium text-slate-500">Section {active} of 9</span>
                </div>
            </div>
        </nav>
    );
}
