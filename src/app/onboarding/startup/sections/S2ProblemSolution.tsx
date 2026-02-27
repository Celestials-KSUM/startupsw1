// Section 2 — Problem & Solution (3 textareas + info pill)
import FieldGroup from '../components/ui/FieldGroup';
import SectionCard from '../components/SectionCard';
import type { FormData } from '../types';
import { Textarea } from '@/components/ui/textarea';

const LightbulbIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="9" y1="18" x2="15" y2="18" /><line x1="10" y1="22" x2="14" y2="22" /><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" /></svg>;


const ta = 'w-full py-3 px-4 bg-slate-50 border border-slate-200 rounded-[0.625rem] text-[0.95rem] text-slate-900 font-["DM_Sans"] transition-all focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] focus:bg-white placeholder:text-slate-400 resize-y leading-relaxed';

interface Props {
    data: Pick<FormData, 'problem_statement'>;
    errors: Record<string, string>;
    set: (k: keyof FormData, v: unknown) => void;
    onFocus: () => void;
}

export default function S2ProblemSolution({ data, errors, set, onFocus }: Props) {
    return (
        <SectionCard num={2} title="Problem & Solution" icon={<LightbulbIcon />}
            desc="Define the pain point and how your startup solves it uniquely." delay={0.2} onFocus={onFocus}>

            <FieldGroup label="What problem are you solving?" required htmlFor="problem_statement"
                error={errors.problem_statement} charCount={data.problem_statement.length} charMax={500}>
                <Textarea id="problem_statement" rows={4} maxLength={500}
                    className={`${ta} ${errors.problem_statement ? 'border-red-400' : ''}`}
                    placeholder="Describe the core pain point your target users face. Be specific."
                    value={data.problem_statement} onChange={e => set('problem_statement', e.target.value)} />
            </FieldGroup>


        </SectionCard>
    );
}
