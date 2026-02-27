// Section 1 — Basic Startup Identity (name, tagline, description)
import FieldGroup from '../components/ui/FieldGroup';
import SectionCard from '../components/SectionCard';
import type { FormData } from '../types';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const RocketIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1-1.5 2.5 0 3 1 .5 3.5-.5 4.5-2l1-3-3.5-.5-2 2.5z" /><path d="M19 3s-3.5-.5-7 3.5C9.5 9 9 12 9 12l3 3s3.5-.5 5.5-3.5C21.5 8 19 3 19 3z" /><circle cx="12.5" cy="11.5" r="1.5" /></svg>;
const TagIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>;


const input = 'w-full py-3 px-4 bg-slate-50 border border-slate-200 rounded-[0.625rem] text-[0.95rem] text-slate-900 font-["DM_Sans"] transition-all focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] focus:bg-white placeholder:text-slate-400';
const inputErr = 'border-red-400 shadow-[0_0_0_3px_rgba(239,68,68,0.08)]';

interface Props {
    data: Pick<FormData, 'startup_name' | 'idea_description'>;
    errors: Record<string, string>;
    set: (k: keyof FormData, v: unknown) => void;
    onFocus: () => void;
}

export default function S1BasicIdentity({ data, errors, set, onFocus }: Props) {
    return (
        <SectionCard num={1} title="Basic Startup Identity" icon={<RocketIcon />}
            desc="Let's start with the basics — your startup's name and what it does." delay={0.15} onFocus={onFocus}>

            <FieldGroup label="Startup Name" required htmlFor="startup_name" error={errors.startup_name}>
                <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none z-10"><TagIcon /></span>
                    <Input id="startup_name" className={`${input} pl-11 h-auto ${errors.startup_name ? inputErr : ''}`}
                        placeholder="e.g. StartupSwarm" maxLength={60}
                        value={data.startup_name} onChange={e => set('startup_name', e.target.value)} />
                </div>
            </FieldGroup>



            <FieldGroup label="Brief Idea Description" required htmlFor="idea_description" error={errors.idea_description}
                charCount={data.idea_description.length} charMax={400}>
                <Textarea id="idea_description" rows={4} maxLength={400}
                    className={`${input} resize-y min-h-[96px] leading-relaxed ${errors.idea_description ? inputErr : ''}`}
                    placeholder="Describe what your startup does in 2–3 sentences. Focus on what it is and who it's for."
                    value={data.idea_description} onChange={e => set('idea_description', e.target.value)} />
            </FieldGroup>
        </SectionCard>
    );
}
