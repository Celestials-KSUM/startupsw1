// Section 6 — Product & MVP Details (tag input, radio cards, toggles with conditional reveal)
'use client';
import FieldGroup from '../components/ui/FieldGroup';
import SectionCard from '../components/SectionCard';
import TagInput from '../components/ui/TagInput';
import RadioCards from '../components/ui/RadioCards';
import Toggle from '../components/ui/Toggle';
import ChipSelect from '../components/ui/ChipSelect';
import type { FormData } from '../types';

const CodeIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>;

const STAGE_OPTIONS = [
    { value: 'idea', label: 'Idea', sublabel: 'Concept not yet validated', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="9" y1="18" x2="15" y2="18" /><line x1="10" y1="22" x2="14" y2="22" /><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" /></svg> },
    { value: 'prototype', label: 'Prototype', sublabel: 'Early mockup or PoC built', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg> },
    { value: 'mvp', label: 'MVP', sublabel: 'Working product, testing with users', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1-1.5 2.5 0 3 1 .5 3.5-.5 4.5-2l1-3-3.5-.5-2 2.5z" /><path d="M19 3s-3.5-.5-7 3.5C9.5 9 9 12 9 12l3 3s3.5-.5 5.5-3.5C21.5 8 19 3 19 3z" /></svg> },
    { value: 'revenue', label: 'Revenue Stage', sublabel: 'Paying customers onboard', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg> },
];

interface Props {
    data: Pick<FormData, 'mvp_features' | 'current_stage' | 'uses_ai' | 'collects_user_data' | 'data_types'>;
    errors: Record<string, string>;
    set: (k: keyof FormData, v: unknown) => void;
    onFocus: () => void;
}

export default function S6MVPDetails({ data, errors, set, onFocus }: Props) {
    return (
        <SectionCard num={6} title="Product & MVP Details" icon={<CodeIcon />}
            desc="Where are you in the build process?" delay={0.4} onFocus={onFocus}>

            <FieldGroup label="Key MVP Features" required helper="Min 3, max 10 — press Enter to add" error={errors.mvp_features}>
                <TagInput tags={data.mvp_features} max={10}
                    placeholder="Type a feature and press Enter…"
                    onChange={v => set('mvp_features', v)} />
            </FieldGroup>

            <FieldGroup label="Current Stage" required error={errors.current_stage}>
                <RadioCards options={STAGE_OPTIONS} value={data.current_stage}
                    onChange={v => set('current_stage', v)} />
            </FieldGroup>

            <Toggle label="Are you using AI in your product? *" value={data.uses_ai} onChange={v => set('uses_ai', v)} />

            <Toggle label="Will you collect user data? *" value={data.collects_user_data} onChange={v => set('collects_user_data', v)} />

            {data.collects_user_data && (
                <div className="overflow-hidden animate-[expandHeight_0.35s_ease_both] pl-4 border-l-2 border-blue-600/20">
                    <FieldGroup label="What kind of data?" optional>
                        <ChipSelect multi
                            options={['Personal Info', 'Behavioral', 'Financial', 'Health', 'Location', 'Usage Analytics']}
                            selected={data.data_types} onChange={v => set('data_types', v)} />
                    </FieldGroup>
                </div>
            )}
        </SectionCard>
    );
}
