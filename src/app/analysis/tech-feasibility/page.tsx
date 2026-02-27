'use client';
import { BarChart2, Cpu, Banknote, Scale, Target, Calculator, Server, Leaf, Package, Database, Zap, RefreshCw, Activity, CheckCircle, AlertTriangle, XCircle, Info, Monitor, Lock, Layers, GitBranch, TrendingUp, Download, Share2 } from 'lucide-react';

const NAV_AGENTS = [
    { id: 'market', label: 'Market Research', icon: BarChart2, color: '#2563EB', score: 68, href: '/analysis/market-research' },
    { id: 'tech', label: 'Tech Feasibility', icon: Cpu, color: '#06B6D4', score: 54, href: '/analysis/tech-feasibility' },
    { id: 'funding', label: 'Funding', icon: Banknote, color: '#22C55E', score: 76, href: '#' },
    { id: 'legal', label: 'Legal & Compliance', icon: Scale, color: '#EF4444', score: 38, href: '#' },
    { id: 'gtm', label: 'Go-To-Market Strategy', icon: Target, color: '#F59E0B', score: 61, href: '#' },
    { id: 'uniteco', label: 'Unit Economics', icon: Calculator, color: '#06B6D4', score: 55, href: '#' },
    { id: 'scalability', label: 'Scalability & Infra', icon: Layers, color: '#A855F7', score: 70, href: '#' },
    { id: 'impact', label: 'Impact & Sustainability', icon: Leaf, color: '#10B981', score: 82, href: '#' },
    { id: 'supplychain', label: 'Supply Chain & Ops', icon: Package, color: '#F97316', score: 48, href: '#' },
    { id: 'aidata', label: 'Data & AI Risk', icon: Database, color: '#64748B', score: 44, href: '#' },
];

const STACK = [
    { cat: '// Frontend', items: [['framework', 'Next.js 14 (App Router)'], ['styling', 'Tailwind CSS + shadcn/ui'], ['state', 'Zustand / React Query']] },
    { cat: '// Backend', items: [['runtime', 'Node.js + Hono / Express'], ['auth', 'NextAuth.js'], ['db', 'PostgreSQL (Supabase)'], ['cache', 'Redis (Upstash)']] },
    { cat: '// AI Layer', items: [['llm', 'Anthropic Claude API'], ['embeddings', 'OpenAI / Cohere'], ['vector_db', 'Pinecone / pgvector']] },
    { cat: '// Infra', items: [['hosting', 'Vercel + Railway'], ['storage', 'Cloudflare R2'], ['monitoring', 'Sentry + PostHog']] },
];

const LAYERS = [
    { name: 'Frontend Layer', icon: Monitor, risk: 'low', note: 'Standard React/Next.js — no blockers' },
    { name: 'Backend / API', icon: Server, risk: 'medium', note: 'Hono is lean but less community support' },
    { name: 'Database Layer', icon: Database, risk: 'low', note: 'Supabase handles scaling to 100K users' },
    { name: 'Auth System', icon: Lock, risk: 'low', note: 'NextAuth covers all common providers' },
    { name: 'Real-time Features', icon: Zap, risk: 'high', note: 'WebSocket infra not in current stack plan' },
    { name: 'AI Integration', icon: Cpu, risk: 'medium', note: '$0.12/call — needs caching at scale' },
];

const FEATURES = [
    { name: 'User Auth', complexity: 'low', days: 5 }, { name: 'Dashboard UI', complexity: 'medium', days: 10 },
    { name: 'Real-time Notifs', complexity: 'high', days: 14 }, { name: 'AI Engine', complexity: 'high', days: 21 },
    { name: 'File Upload', complexity: 'medium', days: 7 }, { name: 'Payments', complexity: 'medium', days: 8 },
    { name: 'API & Docs', complexity: 'low', days: 4 }, { name: 'Search/Filter', complexity: 'low', days: 5 },
    { name: 'Email System', complexity: 'medium', days: 6 }, { name: 'Admin Panel', complexity: 'low', days: 8 },
    { name: '3rd Party Integ.', complexity: 'high', days: 12 }, { name: 'Analytics', complexity: 'low', days: 3 },
];

const BUILD_BUY = [
    { component: 'Authentication', decision: 'buy', tool: 'NextAuth.js + Supabase Auth', cost: '$0' },
    { component: 'Payments', decision: 'buy', tool: 'Stripe / Razorpay', cost: '0.5–2%' },
    { component: 'AI Core Logic', decision: 'build', tool: 'Custom prompt pipeline', cost: 'API cost' },
    { component: 'File Storage', decision: 'buy', tool: 'Cloudflare R2', cost: '$15/TB' },
    { component: 'Email Delivery', decision: 'buy', tool: 'Resend / Postmark', cost: '$20/mo' },
    { component: 'Search', decision: 'hybrid', tool: 'Postgres FTS → Typesense at scale', cost: '$29/mo' },
];

const INSIGHTS = [
    { s: 'critical', color: '#EF4444', text: 'Real-time features need WebSocket infra — not in current plan.' },
    { s: 'warning', color: '#F59E0B', text: 'AI cost ~$0.12/call — unsustainable without response caching.' },
    { s: 'positive', color: '#22C55E', text: 'Next.js + Supabase stack is ideal for solo or small team.' },
    { s: 'positive', color: '#22C55E', text: 'MVP feature set is lean — achievable in 6–8 weeks.' },
    { s: 'neutral', color: '#06B6D4', text: 'No mobile app in MVP scope — correct prioritization.' },
];

const riskColor = (r: string) => r === 'low' ? '#22C55E' : r === 'medium' ? '#F59E0B' : '#EF4444';
const riskBg = (r: string) => r === 'low' ? 'rgba(34,197,94,0.1)' : r === 'medium' ? 'rgba(245,158,11,0.1)' : 'rgba(239,68,68,0.1)';
const cxColor = (c: string) => c === 'low' ? '#16A34A' : c === 'medium' ? '#D97706' : '#DC2626';
const cxBg = (c: string) => c === 'low' ? 'rgba(34,197,94,0.08)' : c === 'medium' ? 'rgba(245,158,11,0.08)' : 'rgba(239,68,68,0.08)';
const decBadge = (d: string) => d === 'buy' ? { c: '#16A34A', bg: 'rgba(34,197,94,0.1)', label: 'Buy / Use' } : d === 'build' ? { c: '#0891B2', bg: 'rgba(6,182,212,0.1)', label: 'Build' } : { c: '#7C3AED', bg: 'rgba(139,92,246,0.1)', label: 'Hybrid' };
const SeverityIcon = ({ s }: { s: string }) => s === 'critical' ? <XCircle size={14} color="#EF4444" /> : s === 'warning' ? <AlertTriangle size={14} color="#F59E0B" /> : s === 'positive' ? <CheckCircle size={14} color="#22C55E" /> : <Info size={14} color="#06B6D4" />;

function ScoreRing({ score, color, size = 72 }: { score: number; color: string; size?: number }) {
    const r = (size - 12) / 2, circ = 2 * Math.PI * r, filled = (score / 100) * circ;
    return (
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
            <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="6" />
            <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="6" strokeDasharray={`${filled} ${circ}`} strokeLinecap="round" style={{ filter: `drop-shadow(0 0 6px ${color}90)` }} />
        </svg>
    );
}

export default function TechFeasibilityPage() {
    const agent = NAV_AGENTS[1];
    const overall = Math.round(NAV_AGENTS.reduce((s, a) => s + a.score, 0) / NAV_AGENTS.length);
    const totalDays = FEATURES.reduce((s, f) => s + f.days, 0);
    const highRisk = FEATURES.filter(f => f.complexity === 'high').length;
    const quickWins = FEATURES.filter(f => f.complexity === 'low').length;

    return (
        <div style={{ minHeight: '100vh', background: 'radial-gradient(circle at 60% 10%, #F0FDFF 0%, #E6F4F8 45%, #DDE5F0 100%)', backgroundImage: 'radial-gradient(circle at 60% 10%, #F0FDFF 0%, #E6F4F8 45%, #DDE5F0 100%), linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)', backgroundSize: 'auto, 40px 40px, 40px 40px', display: 'flex', fontFamily: 'DM Sans, sans-serif' }}>

            {/* Sidebar */}
            <aside style={{ width: 252, flexShrink: 0, background: 'rgba(11,18,32,0.97)', borderRight: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem 1.25rem', position: 'sticky', top: 0, height: '100vh', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                        <Zap size={16} color="#06B6D4" />
                        <span style={{ fontFamily: 'Sora', fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>StartupSwarm</span>
                    </div>
                    <span style={{ fontSize: '0.7rem', color: '#475569' }}>Analysis / Tech Feasibility</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '0.875rem', padding: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.75rem' }}>
                        <Activity size={11} color="#64748B" /><span style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 500 }}>Intelligence Score</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                        <div style={{ position: 'relative', width: 64, height: 64, flexShrink: 0 }}>
                            <ScoreRing score={overall} color="#06B6D4" size={64} />
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.1rem', color: '#06B6D4' }}>{overall}</span>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.35rem' }}>
                            {NAV_AGENTS.slice(0, 4).map(a => (
                                <div key={a.id} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: a.color, flexShrink: 0 }} />
                                    <span style={{ fontSize: '0.68rem', color: '#94A3B8', fontFamily: 'monospace', fontWeight: 600 }}>{a.score}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.65rem', color: '#334155', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>Agents</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
                        {NAV_AGENTS.map(a => {
                            const Icon = a.icon; const active = a.id === 'tech';
                            return (
                                <a key={a.id} href={a.href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', color: active ? '#fff' : '#64748B', textDecoration: 'none', background: active ? 'rgba(255,255,255,0.06)' : 'transparent', borderLeft: active ? `2px solid ${a.color}` : '2px solid transparent', transition: 'all 0.15s ease' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        <Icon size={13} color={a.color} /><span style={{ fontSize: '0.78rem' }}>{a.label}</span>
                                    </div>
                                    <span style={{ background: `${a.color}20`, color: a.color, borderRadius: '2rem', padding: '0.1rem 0.45rem', fontSize: '0.68rem', fontWeight: 700 }}>{a.score}</span>
                                </a>
                            );
                        })}
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.68rem', color: '#334155' }}>Generated just now</span>
                    <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', padding: '0.5rem', borderRadius: '0.5rem', background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.2)', color: '#06B6D4', fontSize: '0.78rem', cursor: 'pointer' }}>
                        <RefreshCw size={12} /> Re-run Analysis
                    </button>
                </div>
            </aside>

            {/* Main */}
            <main style={{ flex: 1, padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', overflowX: 'hidden' }}>

                {/* Header Band */}
                <div style={{ background: 'rgba(255,255,255,0.58)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.78)', borderTop: '3px solid #06B6D4', borderRadius: '1.25rem', padding: '1.25rem 1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: 44, height: 44, background: 'rgba(6,182,212,0.1)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Cpu size={22} color="#06B6D4" />
                        </div>
                        <div>
                            <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '1.2rem', color: '#0B1220' }}>Tech Feasibility Agent</div>
                            <div style={{ fontSize: '0.82rem', color: '#64748B', fontStyle: 'italic' }}>"Can this be built with reasonable effort?"</div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            {[{ l: 'Stack Risk', s: 42, c: '#06B6D4' }, { l: 'Dev Complexity', s: 61, c: '#F59E0B' }, { l: 'Scalability', s: 70, c: '#A855F7' }].map(m => (
                                <div key={m.l} style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(226,232,240,0.8)', borderRadius: '0.625rem', padding: '0.5rem 0.75rem', textAlign: 'center' }}>
                                    <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '1rem', color: m.c }}>{m.s}</div>
                                    <div style={{ fontSize: '0.65rem', color: '#94A3B8' }}>{m.l}</div>
                                </div>
                            ))}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{ position: 'relative', width: 72, height: 72 }}>
                                <ScoreRing score={agent.score} color="#06B6D4" size={72} />
                                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.35rem', color: '#06B6D4' }}>{agent.score}</span>
                                    <span style={{ fontSize: '0.6rem', color: '#94A3B8' }}>/100</span>
                                </div>
                            </div>
                            <div>
                                <div style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.5rem', color: '#0B1220' }}>6 Weeks</div>
                                <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>MVP Effort · 2-person team</div>
                                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
                                    <button style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', padding: '0.3rem 0.75rem', borderRadius: '0.5rem', background: '#0F172A', border: 'none', color: '#fff', fontSize: '0.75rem', cursor: 'pointer' }}><Download size={12} /> Export</button>
                                    <button style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', padding: '0.3rem 0.75rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(226,232,240,0.8)', color: '#475569', fontSize: '0.75rem', cursor: 'pointer' }}><Share2 size={12} /> Share</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Verdict */}
                <div style={{ background: 'rgba(6,182,212,0.06)', border: '1px solid rgba(6,182,212,0.18)', borderLeft: '3px solid #06B6D4', borderRadius: '0 0.75rem 0.75rem 0', padding: '0.875rem 1.25rem', fontSize: '0.9rem', fontFamily: 'Sora', fontWeight: 600, color: '#0B1220' }}>
                    "MVP is feasible in 6 weeks, but real-time features add high complexity — spike WebSocket before committing."
                </div>

                {/* ── Main Unified Card ── */}
                <div style={{ background: 'rgba(255,255,255,0.62)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.78)', borderTop: '3px solid #06B6D4', borderRadius: '1.25rem', boxShadow: '0 8px 32px rgba(6,182,212,0.08)', overflow: 'hidden' }}>

                    {/* Section 1: Stack + Layer Risk */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderBottom: '1px solid rgba(226,232,240,0.5)' }}>

                        {/* Code Panel */}
                        <div style={{ padding: '1.5rem', borderRight: '1px solid rgba(226,232,240,0.4)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                                <Layers size={15} color="#06B6D4" />
                                <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.9rem', color: '#0B1220' }}>Suggested Tech Stack</span>
                            </div>
                            <div style={{ background: '#0F172A', border: '1px solid rgba(6,182,212,0.18)', borderRadius: '0.875rem', overflow: 'hidden' }}>
                                <div style={{ background: '#1E293B', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                    {['#EF4444', '#F59E0B', '#22C55E'].map(c => <span key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
                                    <span style={{ fontFamily: 'monospace', fontSize: '0.72rem', color: '#64748B', flex: 1, textAlign: 'center' }}>stack.config.ts</span>
                                </div>
                                <div style={{ padding: '1rem 1.25rem', fontFamily: 'monospace', fontSize: '0.78rem', lineHeight: 1.85 }}>
                                    {STACK.map(sec => (
                                        <div key={sec.cat} style={{ marginBottom: '0.5rem' }}>
                                            <div style={{ color: '#475569' }}>{sec.cat}</div>
                                            {sec.items.map(([k, v]) => (
                                                <div key={k}><span style={{ color: '#67E8F9' }}>{k}</span><span style={{ color: '#94A3B8' }}>: </span><span style={{ color: '#4ADE80' }}>"{v}"</span></div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div style={{ marginTop: '0.875rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                                    <span style={{ fontSize: '0.72rem', color: '#64748B' }}>Team–Stack Compatibility</span>
                                    <span style={{ fontFamily: 'monospace', fontSize: '0.72rem', fontWeight: 700, color: '#06B6D4' }}>82%</span>
                                </div>
                                <div style={{ height: 6, background: '#E2E8F0', borderRadius: 3 }}>
                                    <div style={{ width: '82%', height: '100%', borderRadius: 3, background: 'linear-gradient(90deg, #06B6D4, #0891B2)' }} />
                                </div>
                            </div>
                        </div>

                        {/* Layer Risk */}
                        <div style={{ padding: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                                <GitBranch size={15} color="#06B6D4" />
                                <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.9rem', color: '#0B1220' }}>Layer-by-Layer Risk</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {LAYERS.map(l => {
                                    const Icon = l.icon;
                                    return (
                                        <div key={l.name} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(248,250,252,0.6)', border: '1px solid rgba(226,232,240,0.6)', borderRadius: '0.625rem', padding: '0.625rem 0.875rem' }}>
                                            <div style={{ width: 30, height: 30, background: 'rgba(6,182,212,0.08)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                <Icon size={14} color="#06B6D4" />
                                            </div>
                                            <div style={{ flex: 1, minWidth: 0 }}>
                                                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1E293B' }}>{l.name}</div>
                                                <div style={{ fontSize: '0.72rem', color: '#64748B', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{l.note}</div>
                                            </div>
                                            <span style={{ background: riskBg(l.risk), color: riskColor(l.risk), borderRadius: '2rem', padding: '0.15rem 0.625rem', fontSize: '0.7rem', fontWeight: 600, flexShrink: 0 }}>{l.risk}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Feature Complexity Heatmap */}
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(226,232,240,0.5)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Cpu size={15} color="#06B6D4" />
                                <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.9rem', color: '#0B1220' }}>Feature Complexity Heatmap</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.625rem' }}>
                                {[['low', 'Low', '#22C55E'], ['medium', 'Medium', '#F59E0B'], ['high', 'High', '#EF4444']].map(([, l, c]) => (
                                    <div key={l} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                        <span style={{ width: 8, height: 8, borderRadius: 2, background: c }} /><span style={{ fontSize: '0.7rem', color: '#64748B' }}>{l}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '0.625rem', marginBottom: '1rem' }}>
                            {FEATURES.map(f => (
                                <div key={f.name} style={{ background: cxBg(f.complexity), border: `1px solid ${cxColor(f.complexity)}40`, borderRadius: '0.625rem', padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1E293B' }}>{f.name}</div>
                                    <div style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '0.78rem', color: cxColor(f.complexity) }}>{f.days}d</div>
                                </div>
                            ))}
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
                            {[{ label: 'Total Features', value: FEATURES.length, color: '#0B1220', icon: '📦' }, { label: 'Total Est. Days', value: `${totalDays}d`, color: '#06B6D4', icon: '📅' }, { label: 'High Risk Features', value: highRisk, color: '#EF4444', icon: '🚨' }, { label: 'Quick Wins', value: quickWins, color: '#22C55E', icon: '⚡' }].map(s => (
                                <div key={s.label} style={{ background: 'rgba(255,255,255,0.55)', border: '1px solid rgba(226,232,240,0.6)', borderRadius: '0.75rem', padding: '0.875rem 1rem' }}>
                                    <div style={{ fontSize: '0.7rem', color: '#64748B', marginBottom: '0.25rem' }}>{s.icon} {s.label}</div>
                                    <div style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.35rem', color: s.color }}>{s.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 3: Build vs Buy */}
                    <div style={{ borderBottom: '1px solid rgba(226,232,240,0.5)', overflow: 'hidden' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1.25rem 1.5rem', borderBottom: '2px solid #E2E8F0' }}>
                            <Scale size={15} color="#06B6D4" />
                            <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.9rem', color: '#0B1220' }}>Build vs Buy Decision Matrix</span>
                        </div>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr>{['Component', 'Decision', 'Suggested Tool / Service', 'Monthly Cost'].map(h => <th key={h} style={{ padding: '0.5rem 1.25rem', textAlign: 'left', fontSize: '0.7rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>)}</tr>
                            </thead>
                            <tbody>
                                {BUILD_BUY.map((row, i) => {
                                    const b = decBadge(row.decision);
                                    return (
                                        <tr key={row.component} style={{ background: i % 2 === 0 ? 'rgba(248,250,252,0.5)' : 'rgba(255,255,255,0.3)', borderTop: '1px solid rgba(226,232,240,0.4)' }}>
                                            <td style={{ padding: '0.625rem 1.25rem', fontWeight: 600, fontSize: '0.85rem', color: '#0B1220' }}>{row.component}</td>
                                            <td style={{ padding: '0.625rem 1.25rem' }}><span style={{ background: b.bg, color: b.c, borderRadius: '2rem', padding: '0.15rem 0.65rem', fontSize: '0.72rem', fontWeight: 600 }}>{b.label}</span></td>
                                            <td style={{ padding: '0.625rem 1.25rem', fontFamily: 'monospace', fontSize: '0.8rem', color: '#0891B2' }}>{row.tool}</td>
                                            <td style={{ padding: '0.625rem 1.25rem', fontFamily: 'monospace', fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>{row.cost}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* Section 4: Insights + Actions */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
                        <div style={{ padding: '1.5rem', borderRight: '1px solid rgba(226,232,240,0.4)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.875rem' }}>
                                <AlertTriangle size={15} color="#06B6D4" />
                                <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.9rem', color: '#0B1220' }}>Technical Flags</span>
                            </div>
                            {INSIGHTS.map((ins, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', background: `${ins.color}08`, borderLeft: `3px solid ${ins.color}`, borderRadius: '0 0.5rem 0.5rem 0', padding: '0.625rem 0.875rem', marginBottom: '0.5rem' }}>
                                    <div style={{ flexShrink: 0, marginTop: 1 }}><SeverityIcon s={ins.s} /></div>
                                    <span style={{ fontSize: '0.82rem', color: '#334155', lineHeight: 1.45 }}>{ins.text}</span>
                                </div>
                            ))}
                        </div>
                        <div style={{ padding: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.875rem' }}>
                                <TrendingUp size={15} color="#06B6D4" />
                                <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.9rem', color: '#0B1220' }}>Prioritized Actions</span>
                            </div>
                            {[{ pri: 'Do Now', c: '#EF4444', bg: 'rgba(239,68,68,0.1)', title: 'Spike WebSocket architecture before committing to real-time', impact: 'Prevents rebuild at week 6' }, { pri: 'This Week', c: '#F59E0B', bg: 'rgba(245,158,11,0.1)', title: 'Add Redis caching layer for AI response calls', impact: 'Reduce AI cost by ~60%' }, { pri: 'This Week', c: '#F59E0B', bg: 'rgba(245,158,11,0.1)', title: 'Set up BullMQ for async AI job processing', impact: 'Prevents API timeouts' }, { pri: 'Next Sprint', c: '#06B6D4', bg: 'rgba(6,182,212,0.1)', title: 'Define DB indexing strategy before 1K users', impact: 'Prevents query degradation' }, { pri: 'Next Sprint', c: '#06B6D4', bg: 'rgba(6,182,212,0.1)', title: 'Rate-limit all public API endpoints', impact: 'Security + cost control' }].map((a, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', background: 'rgba(248,250,252,0.6)', border: '1px solid rgba(226,232,240,0.6)', borderRadius: '0.625rem', padding: '0.625rem 0.875rem', marginBottom: '0.5rem' }}>
                                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(6,182,212,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Sora', fontWeight: 700, fontSize: '0.75rem', color: '#06B6D4', flexShrink: 0 }}>{i + 1}</div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                                            <span style={{ background: a.bg, color: a.c, borderRadius: '2rem', padding: '0.1rem 0.5rem', fontSize: '0.68rem', fontWeight: 600 }}>{a.pri}</span>
                                        </div>
                                        <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.15rem' }}>{a.title}</div>
                                        <div style={{ fontSize: '0.72rem', color: '#22C55E' }}>↑ {a.impact}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
