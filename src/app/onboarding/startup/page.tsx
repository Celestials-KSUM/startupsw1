// Startup onboarding page — thin orchestrator: state + handlers, renders components
'use client';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { INITIAL, SECTIONS_META, type FormData } from './types';
import { calcStrength, strengthMeta } from './utils';
import ProgressBar from './components/ProgressBar';
import StrengthWidget from './components/StrengthWidget';
import FormFooter from './components/FormFooter';
import S1BasicIdentity from './sections/S1BasicIdentity';
import S2ProblemSolution from './sections/S2ProblemSolution';
import S3TargetMarket from './sections/S3TargetMarket';
import S4Category from './sections/S4Category';
import S5BusinessModel from './sections/S5BusinessModel';
import S6MVPDetails from './sections/S6MVPDetails';
import S8Team from './sections/S8Team';
import S9Resources from './sections/S9Resources';

export default function StartupDetailsPage() {
    const router = useRouter();
    const [form, setForm] = useState<FormData>(INITIAL);
    const [active, setActive] = useState(1);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitting, setSubmitting] = useState(false);

    // Field setter — uses eslint-disable to allow the flexible assignment
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const set = useCallback((key: keyof FormData, val: unknown) => {
        setForm(prev => ({ ...prev, [key]: val as any }));
        setErrors(prev => { const n = { ...prev }; delete n[key]; return n; });
    }, []);

    const scrollToSection = (n: number) => {
        setActive(n);
        document.getElementById(`section-${n}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleSubmit = async () => {
        const errs: Record<string, string> = {};
        if (!form.startup_name) errs.startup_name = 'Required';
        if (!form.idea_description) errs.idea_description = 'Required';
        if (!form.problem_statement) errs.problem_statement = 'Required';
        if (!form.target_users) errs.target_users = 'Required';
        if (!form.business_model_type) errs.business_model_type = 'Required';
        if (!form.startup_category) errs.startup_category = 'Required';
        if (!form.product_type) errs.product_type = 'Required';
        if (form.revenue_model.length === 0) errs.revenue_model = 'Select at least one';
        if (form.mvp_features.length < 3) errs.mvp_features = 'Add at least 3 features';
        if (!form.current_stage) errs.current_stage = 'Required';
        if (!form.previous_experience) errs.previous_experience = 'Required';
        if (!form.team_size) errs.team_size = 'Required';
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }
        setSubmitting(true);
        await new Promise(r => setTimeout(r, 1500));
        setSubmitting(false);
        router.push('/analysis/market-research');
    };

    const pct = calcStrength(form);
    const meta = strengthMeta(pct);

    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_50%_20%,#F8FAFC_0%,#E6ECF5_60%,#DDE5F0_100%)] font-['DM_Sans']">

            <ProgressBar active={active} onStepClick={scrollToSection} />

            {/* Page header */}
            <header className="max-w-[780px] mx-auto px-6 pt-12 pb-8 animate-[fadeUp_0.6s_ease_0.3s_both]">
                <h1 className="font-['Sora'] font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-[#0B1220] mb-3 leading-tight tracking-tight">
                    Tell us about your{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">startup</span>
                </h1>
                <p className="text-[1.05rem] text-slate-500 max-w-lg leading-relaxed mb-2">
                    The more detail you share, the better we can match you with the right resources, mentors, and investors.
                </p>
                <p className="text-xs text-slate-400">Fields marked with * are required</p>

                {/* Mobile strength bar */}
                <div className="lg:hidden mt-5 bg-white/60 backdrop-blur-md border border-white/75 rounded-xl px-4 py-3">
                    <p className="text-xs font-medium text-slate-500 mb-1">Profile Strength</p>
                    <p className="font-['Sora'] font-bold text-2xl mb-1.5" style={{ color: meta.color }}>{pct}%</p>
                    <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden mb-1.5">
                        <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-500"
                            style={{ width: `${pct}%` }} />
                    </div>
                    <p className="text-xs font-medium" style={{ color: meta.color }}>{meta.label}</p>
                </div>
            </header>

            {/* Single unified card containing all 9 sections */}
            <main className="max-w-[780px] mx-auto px-6 pb-32">
                <div className="bg-white/70 backdrop-blur-xl border border-white/80
          shadow-[0_8px_40px_rgba(11,18,32,0.09),0_1px_0_rgba(255,255,255,0.95)_inset]
          rounded-2xl overflow-hidden divide-y divide-slate-200/70
          animate-[fadeUp_0.6s_ease_0.35s_both]">
                    <S1BasicIdentity data={form} errors={errors} set={set} onFocus={() => setActive(1)} />
                    <S2ProblemSolution data={form} errors={errors} set={set} onFocus={() => setActive(2)} />
                    <S3TargetMarket data={form} errors={errors} set={set} onFocus={() => setActive(3)} />
                    <S4Category data={form} errors={errors} set={set} onFocus={() => setActive(4)} />
                    <S5BusinessModel data={form} errors={errors} set={set} onFocus={() => setActive(5)} />
                    <S6MVPDetails data={form} errors={errors} set={set} onFocus={() => setActive(6)} />
                    <S8Team data={form} errors={errors} set={set} onFocus={() => setActive(8)} />
                    <S9Resources data={form} set={set} onFocus={() => setActive(9)} />
                </div>
            </main>

            <StrengthWidget pct={pct} label={meta.label} color={meta.color} />
            <FormFooter submitting={submitting} onSubmit={handleSubmit} />
        </div>
    );
}
