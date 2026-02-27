// Section 7 — Competition & Validation (tag input, toggles, traction grid)
'use client';
import FieldGroup from '../components/ui/FieldGroup';
import SectionCard from '../components/SectionCard';
import TagInput from '../components/ui/TagInput';
import Toggle from '../components/ui/Toggle';
import type { FormData } from '../types';
import { Input } from '@/components/ui/input';

const BarChartIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>;

const inp = 'w-full py-3 px-4 pl-10 bg-slate-50 border border-slate-200 rounded-[0.625rem] text-sm text-slate-900 font-["DM_Sans"] transition-all focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] focus:bg-white placeholder:text-slate-400';

const TRACTION = [
    { id: 'traction_users' as const, label: 'Early Users', placeholder: 'e.g. 200 beta signups', icon: '👥' },
    { id: 'traction_waitlist' as const, label: 'Waitlist', placeholder: 'e.g. 1,200 waitlist', icon: '📋' },
    { id: 'traction_revenue' as const, label: 'Revenue', placeholder: 'e.g. ₹40,000 MRR', icon: '₹' },
];

interface Props {
    data: Pick<FormData, 'competitors' | 'no_competitors' | 'spoken_to_users' | 'user_interviews_count' | 'traction_users' | 'traction_waitlist' | 'traction_revenue'>;
    set: (k: keyof FormData, v: unknown) => void;
    onFocus: () => void;
}

export default function S7Competition({ data, set, onFocus }: Props) {
    return (
        <SectionCard num={7} title="Competition & Validation" icon={<BarChartIcon />}
            desc="Help us understand the landscape you're entering." delay={0.45} onFocus={onFocus}>

            <FieldGroup label="Known Competitors" optional helper="Add up to 8 — even indirect ones">
                <TagInput tags={data.competitors} max={8}
                    placeholder="Competitor name, press Enter…"
                    onChange={v => set('competitors', v)} />
                <label className="flex items-center gap-2 mt-1 cursor-pointer">
                    <input type="checkbox" className="accent-blue-600 w-3.5 h-3.5" checked={data.no_competitors}
                        onChange={e => set('no_competitors', e.target.checked)} />
                    <span className="text-xs text-slate-500">No direct competitors yet</span>
                </label>
            </FieldGroup>

            <Toggle label="Have you spoken to potential users? *" value={data.spoken_to_users}
                onChange={v => set('spoken_to_users', v)} />

            {data.spoken_to_users && (
                <div className="overflow-hidden animate-[expandHeight_0.35s_ease_both] pl-4 border-l-2 border-blue-600/20">
                    <FieldGroup label="How many?" optional htmlFor="user_count">
                        <Input id="user_count" className="w-full py-2.5 px-4 bg-slate-50 border border-slate-200 rounded-[0.625rem] text-sm text-slate-900 font-['DM_Sans'] focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] focus:bg-white placeholder:text-slate-400 transition-all"
                            placeholder="e.g. 15 user interviews" value={data.user_interviews_count}
                            onChange={e => set('user_interviews_count', e.target.value)} />
                    </FieldGroup>
                </div>
            )}

            <FieldGroup label="Any Early Traction?" optional helper="Share whatever you have — every signal counts">
                <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
                    {TRACTION.map(t => (
                        <div key={t.id} className="flex flex-col gap-1">
                            <span className="text-xs font-medium text-slate-500">{t.icon} {t.label}</span>
                            <Input className={inp} placeholder={t.placeholder}
                                value={data[t.id]} onChange={e => set(t.id, e.target.value)} />
                        </div>
                    ))}
                </div>
            </FieldGroup>
        </SectionCard>
    );
}
