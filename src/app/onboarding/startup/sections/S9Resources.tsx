// Section 9 — Resources & Links (file uploads + URL inputs) — collapsible dropdown
'use client';
import { useState } from 'react';
import FieldGroup from '../components/ui/FieldGroup';
import SectionCard from '../components/SectionCard';
import FileUpload from '../components/ui/FileUpload';
import type { FormData } from '../types';
import { Input } from '@/components/ui/input';

const PaperclipIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>;

const ChevronIcon = ({ open }: { open: boolean }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}>
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

const input = 'w-full py-3 px-4 pl-10 bg-slate-50 border border-slate-200 rounded-[0.625rem] text-[0.95rem] text-slate-900 font-["DM_Sans"] transition-all focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] focus:bg-white placeholder:text-slate-400';

type UrlKey = 'website_url' | 'demo_link' | 'github_repo' | 'demo_video';
const URL_FIELDS: { id: UrlKey; label: string; placeholder: string; icon: string }[] = [
    { id: 'website_url', label: 'Website URL', placeholder: 'https://yourstartup.com', icon: '🌐' },
    { id: 'demo_link', label: 'MVP / Demo Link', placeholder: 'https://demo.yourstartup.com or Figma', icon: '▶️' },
    { id: 'github_repo', label: 'GitHub Repository', placeholder: 'https://github.com/yourhandle/repo', icon: '🐙' },
    { id: 'demo_video', label: 'Demo Video Link', placeholder: 'YouTube, Loom, or any public video URL', icon: '🎬' },
];

const DROPDOWNS: { key: string; label: string; icon: string }[] = [
    { key: 'pitch_deck', label: 'Pitch Deck', icon: '📄' },
    { key: 'urls', label: 'Links (Website, Demo, GitHub, Video)', icon: '🔗' },
    { key: 'financial_projections', label: 'Financial Projections', icon: '📊' },
];

interface Props {
    data: Pick<FormData, 'pitch_deck' | 'website_url' | 'demo_link' | 'github_repo' | 'demo_video' | 'financial_projections'>;
    set: (k: keyof FormData, v: unknown) => void;
    onFocus: () => void;
}

export default function S9Resources({ data, set, onFocus }: Props) {
    const [open, setOpen] = useState<Record<string, boolean>>({});

    const toggle = (key: string) => setOpen(prev => ({ ...prev, [key]: !prev[key] }));

    return (
        <SectionCard num={9} title="Resources & Links" icon={<PaperclipIcon />}
            desc="Upload supporting materials — optional but highly valuable." optional delay={0.55} onFocus={onFocus}>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {DROPDOWNS.map(({ key, label, icon }) => (
                    <div key={key} style={{
                        border: '1px solid #e2e8f0',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        background: 'rgba(248,250,252,0.7)',
                    }}>
                        {/* Header row */}
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
                                gap: '10px',
                            }}
                        >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600, fontSize: '0.93rem', color: '#1e293b' }}>
                                <span>{icon}</span>
                                {label}
                                <span style={{
                                    fontSize: '0.7rem', fontWeight: 600, color: '#7c3aed',
                                    background: '#f3e8ff', border: '1px solid #c4b5fd',
                                    borderRadius: '999px', padding: '2px 9px', letterSpacing: '0.02em',
                                }}>Optional</span>
                            </span>
                            <ChevronIcon open={!!open[key]} />
                        </button>

                        {/* Collapsible content */}
                        <div style={{
                            maxHeight: open[key] ? '600px' : '0',
                            overflow: 'hidden',
                            transition: 'max-height 0.35s ease',
                        }}>
                            <div style={{ padding: '4px 18px 18px' }}>
                                {key === 'pitch_deck' && (
                                    <FileUpload label="" accept=".pdf" maxMb={10}
                                        helpText="PDF only • Max 10MB" value={data.pitch_deck}
                                        onChange={v => set('pitch_deck', v)} />
                                )}
                                {key === 'urls' && (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
                                        {URL_FIELDS.map(f => (
                                            <FieldGroup key={f.id} label={f.label} optional htmlFor={f.id}>
                                                <div className="relative">
                                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm z-10">{f.icon}</span>
                                                    <Input id={f.id} type="url" className={`${input} h-auto`} placeholder={f.placeholder}
                                                        value={data[f.id] as string}
                                                        onChange={e => set(f.id, e.target.value)} />
                                                </div>
                                            </FieldGroup>
                                        ))}
                                    </div>
                                )}
                                {key === 'financial_projections' && (
                                    <FileUpload label="" accept=".pdf,.xlsx,.csv" maxMb={5}
                                        helpText="PDF, Excel or CSV • Max 5MB • Shared only with matched investors"
                                        value={data.financial_projections} onChange={v => set('financial_projections', v)} />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionCard>
    );
}
