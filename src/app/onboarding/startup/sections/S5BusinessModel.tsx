// Section 5 — Business Model (revenue model chips + optional pricing)
import FieldGroup from '../components/ui/FieldGroup';
import SectionCard from '../components/SectionCard';
import ChipSelect from '../components/ui/ChipSelect';
import type { FormData } from '../types';
import { Input } from '@/components/ui/input';

const DollarIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>;
const RupeeIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12M6 8h12M6 13l8.5 8L14 13" /><path d="M6 13h3a4 4 0 0 0 0-5H6" /></svg>;

const REVENUE_MODELS = [
    'Subscription (Monthly/Annual)', 'Commission / Take Rate', 'Advertising',
    'One-Time Payment', 'Freemium', 'Usage-Based / Pay-per-use',
    'Licensing', 'Consulting / Services', 'Data Monetization', 'Transaction Fees',
];

const input = 'w-full py-3 px-4 pl-11 bg-slate-50 border border-slate-200 rounded-[0.625rem] text-[0.95rem] text-slate-900 font-["DM_Sans"] transition-all focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] focus:bg-white placeholder:text-slate-400';

interface Props {
    data: Pick<FormData, 'revenue_model' | 'pricing_info'>;
    errors: Record<string, string>;
    set: (k: keyof FormData, v: unknown) => void;
    onFocus: () => void;
}

export default function S5BusinessModel({ data, errors, set, onFocus }: Props) {
    return (
        <SectionCard num={5} title="Business Model" icon={<DollarIcon />}
            desc="How do you plan to make money?" delay={0.35} onFocus={onFocus}>

            <FieldGroup label="Revenue Model(s)" required helper="Select all that apply" error={errors.revenue_model}>
                <ChipSelect multi
                    options={REVENUE_MODELS}
                    selected={data.revenue_model}
                    onChange={v => set('revenue_model', v)}
                />
            </FieldGroup>

            <FieldGroup label="Expected Pricing" optional htmlFor="pricing_info" helper="Even a rough estimate helps">
                <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                        <RupeeIcon />
                    </span>
                    <Input id="pricing_info" className={input}
                        placeholder="e.g. ₹999/month, $29/seat/month, Free + ₹4999 pro tier"
                        value={data.pricing_info} onChange={e => set('pricing_info', e.target.value)} />
                </div>
            </FieldGroup>
        </SectionCard>
    );
}
