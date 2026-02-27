// Section 3 — Target Market (textarea + chip selects)
import FieldGroup from '../components/ui/FieldGroup';
import SectionCard from '../components/SectionCard';
import ChipSelect from '../components/ui/ChipSelect';
import type { FormData } from '../types';
import { Textarea } from '@/components/ui/textarea';

const TargetIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;

const ta = 'w-full py-3 px-4 bg-slate-50 border border-slate-200 rounded-[0.625rem] text-[0.95rem] text-slate-900 font-["DM_Sans"] transition-all focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] focus:bg-white placeholder:text-slate-400 resize-y leading-relaxed';

interface Props {
    data: Pick<FormData, 'target_users' | 'business_model_type'>;
    errors: Record<string, string>;
    set: (k: keyof FormData, v: unknown) => void;
    onFocus: () => void;
}

export default function S3TargetMarket({ data, errors, set, onFocus }: Props) {
    return (
        <SectionCard num={3} title="Target Market" icon={<TargetIcon />}
            desc="Define exactly who this is for." delay={0.25} onFocus={onFocus}>

            <FieldGroup label="Who are your target users?" required htmlFor="target_users"
                error={errors.target_users} charCount={data.target_users.length} charMax={400}>
                <Textarea id="target_users" rows={3} maxLength={400}
                    className={`${ta} ${errors.target_users ? 'border-red-400' : ''}`}
                    placeholder="Be hyper-specific. e.g. 'Solo founders aged 25–40 in India building SaaS products'"
                    value={data.target_users} onChange={e => set('target_users', e.target.value)} />
            </FieldGroup>

            <FieldGroup label="Business Type" required error={errors.business_model_type}>
                <ChipSelect
                    options={['B2B', 'B2C', 'B2G', 'D2C', 'B2B2C', 'Marketplace']}
                    selected={data.business_model_type}
                    onChange={v => set('business_model_type', v)}
                />
            </FieldGroup>


        </SectionCard>
    );
}
