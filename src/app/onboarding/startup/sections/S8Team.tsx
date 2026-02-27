// Section 8 — Team Information (collapsible dropdowns)
'use client';
import { useState } from 'react';
import FieldGroup from '../components/ui/FieldGroup';
import SectionCard from '../components/SectionCard';
import Stepper from '../components/ui/Stepper';
import Toggle from '../components/ui/Toggle';
import ChipSelect from '../components/ui/ChipSelect';
import type { FormData } from '../types';

const UsersIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;

const ChevronIcon = ({ open }: { open: boolean }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}>
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

const EXPERIENCE = [
    'First-time founder', '1 previous startup', '2+ previous startups',
    'Exited before', 'Former employee at a startup', 'Corporate background only',
];
const TEAM_SIZES = ['Solo (just me)', '2–3 people', '4–5 people', '6–10 people', '10+ people'];

const DROPDOWNS = [
    { key: 'founders_count', label: 'Number of Founders', icon: '👤', required: true },
    { key: 'has_tech_cofounder', label: 'Technical Co-Founder', icon: '💻', required: true },
    { key: 'previous_experience', label: 'Previous Startup Experience', icon: '🚀', required: true },
    { key: 'team_size', label: 'Current Team Size', icon: '👥', required: true },
];

interface Props {
    data: Pick<FormData, 'founders_count' | 'has_tech_cofounder' | 'previous_experience' | 'team_size'>;
    errors: Record<string, string>;
    set: (k: keyof FormData, v: unknown) => void;
    onFocus: () => void;
}

export default function S8Team({ data, errors, set, onFocus }: Props) {
    const [open, setOpen] = useState<Record<string, boolean>>({});
    const toggle = (key: string) => setOpen(prev => ({ ...prev, [key]: !prev[key] }));

    return (
        <SectionCard num={8} title="Team Information" icon={<UsersIcon />}
            desc="Tell us about the people building this." delay={0.5} onFocus={onFocus}>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {DROPDOWNS.map(({ key, label, icon, required }) => (
                    <div key={key} style={{
                        border: '1px solid #e2e8f0',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        background: 'rgba(248,250,252,0.7)',
                        transition: 'border-color 0.2s',
                    }}>
                        {/* Header */}
                        <button
                            type="button"
                            onClick={() => toggle(key)}
                            style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '14px 18px',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600, fontSize: '0.93rem', color: '#1e293b' }}>
                                <span>{icon}</span>
                                {label}
                                {errors[key] && (
                                    <span style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: 500 }}>
                                        — {errors[key]}
                                    </span>
                                )}
                            </span>
                            <ChevronIcon open={!!open[key]} />
                        </button>

                        {/* Collapsible content */}
                        <div style={{
                            maxHeight: open[key] ? '500px' : '0',
                            overflow: 'hidden',
                            transition: 'max-height 0.35s ease',
                        }}>
                            <div style={{ padding: '4px 18px 18px' }}>
                                {key === 'founders_count' && (
                                    <FieldGroup label="" htmlFor="founders_count">
                                        <Stepper value={data.founders_count} min={1} max={10}
                                            onChange={v => set('founders_count', v)} />
                                    </FieldGroup>
                                )}
                                {key === 'has_tech_cofounder' && (
                                    <div style={{ paddingTop: '8px' }}>
                                        <Toggle label="Do you have a technical co-founder?" value={data.has_tech_cofounder}
                                            onChange={v => set('has_tech_cofounder', v)} />
                                    </div>
                                )}
                                {key === 'previous_experience' && (
                                    <FieldGroup label="" htmlFor="previous_experience">
                                        <ChipSelect options={EXPERIENCE} selected={data.previous_experience}
                                            onChange={v => set('previous_experience', v)} />
                                    </FieldGroup>
                                )}
                                {key === 'team_size' && (
                                    <FieldGroup label="" htmlFor="team_size">
                                        <ChipSelect options={TEAM_SIZES} selected={data.team_size}
                                            onChange={v => set('team_size', v)} />
                                    </FieldGroup>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionCard>
    );
}
