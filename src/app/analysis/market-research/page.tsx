'use client';
import { BarChart2, Cpu, Banknote, Scale, Target, Calculator, Server, Leaf, Package, Database, CheckCircle, TrendingUp, Zap, Brain, RefreshCw, Download, Rocket, Activity, Users, Globe, AlertTriangle, Shield, Monitor, Lock, Layers, GitBranch, XCircle, Info, Star, Building2, ThumbsUp, ThumbsDown, ArrowRight, Map } from 'lucide-react';

const REVENUE_CRITERIA = [
    { label: 'Monetization Clarity', score: 14, max: 20 },
    { label: 'Pricing Strategy', score: 11, max: 20 },
    { label: 'Unit Economics Viability', score: 13, max: 20 },
    { label: 'Revenue Predictability', score: 15, max: 20 },
    { label: 'Investor Model Familiarity', score: 17, max: 20 },
];

const FUNDING_STAGES = [
    { label: 'Bootstrap', color: '#10B981', raise: '₹0–₹10L', ready: 95 },
    { label: 'Pre-Seed', color: '#94A3B8', raise: '₹10L–₹1Cr', ready: 72 },
    { label: 'Seed', color: '#F59E0B', raise: '₹1Cr–₹5Cr', ready: 54, current: true },
    { label: 'Series A', color: '#3B82F6', raise: '₹5Cr–₹30Cr', ready: 18 },
    { label: 'Series B+', color: '#8B5CF6', raise: '₹30Cr+', ready: 5 },
];

const INVESTOR_TYPES = [
    { type: 'Angel Investor', icon: Star, match: 82, color: '#10B981', likelihood: 'Strong Match', concern: 'Needs 1 more validation milestone' },
    { type: 'Micro VC / Seed Fund', icon: Zap, match: 64, color: '#F59E0B', likelihood: 'Possible Match', concern: 'Revenue model needs more clarity' },
    { type: 'Accelerator (YC / Antler)', icon: Rocket, match: 71, color: '#3B82F6', likelihood: 'Strong Match', concern: 'Improve traction metrics before applying' },
    { type: 'Strategic / Corporate VC', icon: Building2, match: 35, color: '#8B5CF6', likelihood: 'Unlikely', concern: 'Too early — revisit at Series A' },
];

const PITCH_COMPONENTS = [
    { slide: '01', name: 'Problem Statement', score: 8, weight: 'Critical' },
    { slide: '02', name: 'Solution', score: 7, weight: 'Critical' },
    { slide: '03', name: 'Market Size (TAM/SAM)', score: 9, weight: 'High' },
    { slide: '04', name: 'Business Model', score: 5, weight: 'Critical' },
    { slide: '05', name: 'Traction & Metrics', score: 3, weight: 'Critical' },
    { slide: '06', name: 'Competitive Analysis', score: 6, weight: 'High' },
    { slide: '07', name: 'Go-to-Market Plan', score: 6, weight: 'High' },
    { slide: '08', name: 'Team', score: 7, weight: 'Critical' },
    { slide: '09', name: 'Financial Projections', score: 4, weight: 'High' },
    { slide: '10', name: 'The Ask', score: 5, weight: 'Critical' },
];

const GREEN_FLAGS = [
    { text: 'Subscription model — highly attractive to seed investors', impact: 'High' },
    { text: 'AI-native product — strong investor theme alignment in 2025', impact: 'High' },
    { text: 'Clear target persona with measurable pain point', impact: 'Medium' },
    { text: 'B2B focus — faster path to predictable revenue', impact: 'Medium' },
];

const RED_FLAGS = [
    { text: 'Revenue model is unclear — seed investors need a monetization path', severity: 'Critical' },
    { text: 'No traction data — even 10 waitlist users would help', severity: 'Critical' },
    { text: 'Solo non-technical founder for a technical product', severity: 'High' },
    { text: 'Financial projections missing — hard to evaluate raise size', severity: 'Medium' },
];

const ROADMAP_PHASES = [
    { label: 'Days 1–30', title: 'Clarify & Validate', color: '#EF4444', goal: 'Fix critical investor red flags', actions: ['Define and document revenue model clearly', 'Get 5 paid LOIs or user commitments', 'Build basic 3-year financial model', 'Clarify competitive positioning + moat'] },
    { label: 'Days 31–60', title: 'Build Credibility', color: '#F59E0B', goal: 'Create investor-grade materials', actions: ['Build 10-slide pitch deck', 'Set up metrics dashboard (PostHog)', 'Reach 100 active beta users', 'Add 1–2 advisor names to cap table'] },
    { label: 'Days 61–90', title: 'Activate Network', color: '#10B981', goal: 'Initiate investor conversations', actions: ['Apply to 3 accelerator programs', 'Warm intro to 5 angel investors', 'Publish a build-in-public update', 'Set up data room (Notion / Docsend)'] },
];

const pitchColor = (s: number) => s >= 8 ? '#10B981' : s >= 5 ? '#F59E0B' : '#EF4444';
const pitchBg = (s: number) => s >= 8 ? 'rgba(16,185,129,0.08)' : s >= 5 ? 'rgba(245,158,11,0.08)' : 'rgba(239,68,68,0.08)';
const likeColor = (l: string) => l === 'Strong Match' ? '#10B981' : l === 'Possible Match' ? '#F59E0B' : '#EF4444';
const likeBg = (l: string) => l === 'Strong Match' ? 'rgba(16,185,129,0.1)' : l === 'Possible Match' ? 'rgba(245,158,11,0.1)' : 'rgba(239,68,68,0.1)';

const TECH_STACK = [
    { cat: '// Frontend', items: [['framework', 'Next.js 14 (App Router)'], ['styling', 'Tailwind + shadcn/ui'], ['state', 'Zustand / React Query']] },
    { cat: '// Backend', items: [['runtime', 'Node.js + Hono'], ['auth', 'NextAuth.js'], ['db', 'PostgreSQL (Supabase)'], ['cache', 'Redis (Upstash)']] },
    { cat: '// AI Layer', items: [['llm', 'Anthropic Claude API'], ['vector_db', 'Pinecone / pgvector']] },
    { cat: '// Infra', items: [['hosting', 'Vercel + Railway'], ['storage', 'Cloudflare R2']] },
];

const TECH_LAYERS = [
    { name: 'Frontend Layer', icon: Monitor, risk: 'low', note: 'Standard Next.js — no blockers' },
    { name: 'Backend / API', icon: Server, risk: 'medium', note: 'Hono is lean but less community support' },
    { name: 'Database', icon: Database, risk: 'low', note: 'Supabase scales well to 100K users' },
    { name: 'Auth System', icon: Lock, risk: 'low', note: 'NextAuth covers all common providers' },
    { name: 'Real-time Features', icon: Zap, risk: 'high', note: 'WebSocket infra not in current plan' },
    { name: 'AI Integration', icon: Cpu, risk: 'medium', note: '$0.12/call — needs caching at scale' },
];

const TECH_FEATURES = [
    { name: 'User Auth', complexity: 'low', days: 5 }, { name: 'Dashboard UI', complexity: 'medium', days: 10 },
    { name: 'Real-time Notifs', complexity: 'high', days: 14 }, { name: 'AI Engine', complexity: 'high', days: 21 },
    { name: 'File Upload', complexity: 'medium', days: 7 }, { name: 'Payments', complexity: 'medium', days: 8 },
    { name: 'API & Docs', complexity: 'low', days: 4 }, { name: 'Search', complexity: 'low', days: 5 },
    { name: 'Email System', complexity: 'medium', days: 6 }, { name: 'Admin Panel', complexity: 'low', days: 8 },
    { name: '3rd Party Integ.', complexity: 'high', days: 12 }, { name: 'Analytics', complexity: 'low', days: 3 },
];

const BUILD_BUY = [
    { component: 'Authentication', decision: 'buy', tool: 'NextAuth.js + Supabase Auth', cost: '$0' },
    { component: 'Payments', decision: 'buy', tool: 'Stripe / Razorpay', cost: '0.5–2%' },
    { component: 'AI Core Logic', decision: 'build', tool: 'Custom prompt pipeline', cost: 'API cost' },
    { component: 'File Storage', decision: 'buy', tool: 'Cloudflare R2', cost: '$15/TB' },
    { component: 'Email', decision: 'buy', tool: 'Resend / Postmark', cost: '$20/mo' },
    { component: 'Search', decision: 'hybrid', tool: 'Postgres FTS → Typesense', cost: '$29/mo' },
];

const TECH_INSIGHTS = [
    { s: 'critical', color: '#EF4444', text: 'Real-time features need WebSocket infra — not in current plan.' },
    { s: 'warning', color: '#F59E0B', text: 'AI cost ~$0.12/call — unsustainable without response caching.' },
    { s: 'positive', color: '#22C55E', text: 'Next.js + Supabase stack is ideal for solo or small team.' },
    { s: 'positive', color: '#22C55E', text: 'MVP feature set achievable in 6–8 weeks.' },
];

const riskColor = (r: string) => r === 'low' ? '#22C55E' : r === 'medium' ? '#F59E0B' : '#EF4444';
const riskBg = (r: string) => r === 'low' ? 'rgba(34,197,94,0.1)' : r === 'medium' ? 'rgba(245,158,11,0.1)' : 'rgba(239,68,68,0.1)';
const cxColor = (c: string) => c === 'low' ? '#16A34A' : c === 'medium' ? '#D97706' : '#DC2626';
const cxBg = (c: string) => c === 'low' ? 'rgba(34,197,94,0.08)' : c === 'medium' ? 'rgba(245,158,11,0.08)' : 'rgba(239,68,68,0.08)';
const decBadge = (d: string) => d === 'buy' ? { c: '#16A34A', bg: 'rgba(34,197,94,0.1)', label: 'Buy / Use' } : d === 'build' ? { c: '#0891B2', bg: 'rgba(6,182,212,0.1)', label: 'Build' } : { c: '#7C3AED', bg: 'rgba(139,92,246,0.1)', label: 'Hybrid' };
const SevIcon = ({ s }: { s: string }) => s === 'critical' ? <XCircle size={13} color="#EF4444" /> : s === 'warning' ? <AlertTriangle size={13} color="#F59E0B" /> : s === 'positive' ? <CheckCircle size={13} color="#22C55E" /> : <Info size={13} color="#06B6D4" />;

const NAV_AGENTS = [
    { id: 'market', label: 'Market Research', icon: BarChart2, color: '#2563EB', score: 68 },
    { id: 'tech', label: 'Tech Feasibility', icon: Cpu, color: '#8B5CF6', score: 54 },
    { id: 'funding', label: 'Funding', icon: Banknote, color: '#22C55E', score: 76 },
    { id: 'legal', label: 'Legal & Compliance', icon: Scale, color: '#EF4444', score: 38 },
    { id: 'gtm', label: 'Go-To-Market Strategy', icon: Target, color: '#F59E0B', score: 61 },
    { id: 'uniteco', label: 'Unit Economics', icon: Calculator, color: '#06B6D4', score: 55 },
    { id: 'scalability', label: 'Scalability & Infra', icon: Server, color: '#A855F7', score: 70 },
    { id: 'impact', label: 'Impact & Sustainability', icon: Leaf, color: '#10B981', score: 82 },
    { id: 'supplychain', label: 'Supply Chain & Ops', icon: Package, color: '#F97316', score: 48 },
    { id: 'aidata', label: 'Data & AI Risk', icon: Database, color: '#64748B', score: 44 },
];

const INSIGHTS = [
    { color: '#EF4444', text: 'No strong moat identified — easy to replicate.' },
    { color: '#F59E0B', text: 'TAM is large but SAM is severely constrained by geography.' },
    { color: '#22C55E', text: 'Underserved micro-segment identified with high willingness to pay.' },
    { color: '#3B82F6', text: '3 direct competitors, none with >$5M ARR yet.' },
];

const COMPETITORS = [
    { name: 'CompetitorA', funding: 'Seed', price: '$29/mo', strength: 'Brand trust', weakness: 'No mobile app' },
    { name: 'CompetitorB', funding: 'Series A', price: '$99/mo', strength: 'Enterprise sales', weakness: 'Complex UX' },
    { name: 'CompetitorC', funding: 'Bootstrapped', price: '$9/mo', strength: 'Lowest price', weakness: 'Feature gaps' },
];

const MARKET = [
    { label: 'TAM', value: '$4.2B', sub: 'Total Addressable' },
    { label: 'SAM', value: '$680M', sub: 'Serviceable' },
    { label: 'SOM', value: '$38M', sub: 'Obtainable' },
];

const PERSONA = [
    { icon: '👤', label: 'Persona', value: 'Priya M., Startup Founder' },
    { icon: '🎯', label: 'Goal', value: 'Launch & grow product fast' },
    { icon: '😣', label: 'Pain', value: 'Lack of market validation tools' },
    { icon: '💸', label: 'WTP', value: '₹4,999–₹9,999/month' },
];

function ScoreRing({ score, color, size = 88 }: { score: number; color: string; size?: number }) {
    const r = (size - 12) / 2, circ = 2 * Math.PI * r, filled = (score / 100) * circ;
    return (
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
            <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="6" />
            <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="6"
                strokeDasharray={`${filled} ${circ}`} strokeLinecap="round" style={{ filter: `drop-shadow(0 0 6px ${color}90)` }} />
        </svg>
    );
}

const glass = { background: 'rgba(255,255,255,0.62)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.78)', borderRadius: '1rem', padding: '1.25rem' };
const scoreColor = (s: number) => s >= 71 ? '#22C55E' : s >= 51 ? '#3B82F6' : s >= 31 ? '#F59E0B' : '#EF4444';
const scoreBand = (s: number) => s >= 71 ? 'Strong' : s >= 51 ? 'Moderate' : 'Needs Work';

export default function MarketResearchPage() {
    const overall = Math.round(NAV_AGENTS.reduce((s, a) => s + a.score, 0) / NAV_AGENTS.length);
    const agent = NAV_AGENTS[0];

    return (
        <div style={{ minHeight: '100vh', background: 'radial-gradient(circle at 30% 20%, #F0F4FF 0%, #E6ECF5 50%, #DDE5F0 100%)', display: 'flex', fontFamily: 'DM Sans, sans-serif' }}>

            {/* Sidebar */}
            <aside style={{ width: 252, flexShrink: 0, background: 'rgba(11,18,32,0.97)', borderRight: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem 1.25rem', position: 'sticky', top: 0, height: '100vh', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                        <Zap size={16} color="#2563EB" />
                        <span style={{ fontFamily: 'Sora', fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>StartupSwarm</span>
                    </div>
                    <span style={{ fontSize: '0.7rem', color: '#475569' }}>Analysis / Market Research</span>
                </div>

                {/* Health Widget */}
                <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '0.875rem', padding: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.75rem' }}>
                        <Activity size={11} color="#64748B" />
                        <span style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 500 }}>Intelligence Score</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                        <div style={{ position: 'relative', width: 64, height: 64, flexShrink: 0 }}>
                            <ScoreRing score={overall} color="#2563EB" size={64} />
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.1rem', color: '#2563EB' }}>{overall}</span>
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

                {/* Agent Nav */}
                <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.65rem', color: '#334155', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>Agents</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
                        {NAV_AGENTS.map(a => {
                            const Icon = a.icon;
                            const active = a.id === 'market';
                            return (
                                <a key={a.id} href={`#${a.id}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', color: active ? '#fff' : '#64748B', textDecoration: 'none', background: active ? 'rgba(255,255,255,0.06)' : 'transparent', borderLeft: active ? `2px solid ${a.color}` : '2px solid transparent', transition: 'all 0.15s ease' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        <Icon size={13} color={a.color} />
                                        <span style={{ fontSize: '0.78rem' }}>{a.label}</span>
                                    </div>
                                    <span style={{ background: `${a.color}20`, color: a.color, borderRadius: '2rem', padding: '0.1rem 0.45rem', fontSize: '0.68rem', fontWeight: 700 }}>{a.score}</span>
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.68rem', color: '#334155' }}>Generated just now</span>
                    <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', padding: '0.5rem', borderRadius: '0.5rem', background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.2)', color: '#3B82F6', fontSize: '0.78rem', cursor: 'pointer' }}>
                        <RefreshCw size={12} /> Re-run Analysis
                    </button>
                </div>
            </aside>

            {/* Main */}
            <main style={{ flex: 1, padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', overflowX: 'hidden' }}>

                {/* Header */}
                <div style={{ ...glass, padding: '1.25rem 1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                            <Rocket size={16} color="#2563EB" />
                            <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '1.25rem', color: '#0B1220' }}>Your Startup</span>
                            <span style={{ background: 'rgba(37,99,235,0.07)', border: '1px solid rgba(37,99,235,0.18)', color: '#2563EB', borderRadius: '2rem', padding: '0.15rem 0.75rem', fontSize: '0.75rem', fontWeight: 500 }}>SaaS · B2B · India</span>
                        </div>
                        <p style={{ fontSize: '0.82rem', color: '#475569', margin: 0 }}>10 agents · 47 signals analyzed</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '2rem', padding: '0.35rem 0.875rem' }}>
                            <CheckCircle size={13} color="#22C55E" />
                            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#22C55E' }}>Analysis Complete</span>
                        </div>
                        <button style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0.4rem 0.875rem', borderRadius: '0.625rem', background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(226,232,240,0.8)', color: '#475569', fontSize: '0.8rem', cursor: 'pointer' }}>
                            <Download size={13} /> Export PDF
                        </button>
                    </div>
                </div>

                {/* ── Market Research Agent — Single Unified Card ── */}
                <div id="market" style={{ background: 'rgba(255,255,255,0.62)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.78)', borderTop: `3px solid ${agent.color}`, borderRadius: '1.25rem', boxShadow: '0 8px 32px rgba(37,99,235,0.08)', overflow: 'hidden' }}>

                    {/* Card Header */}
                    <div style={{ padding: '1.5rem 1.75rem', borderBottom: '1px solid rgba(226,232,240,0.5)', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                            <div style={{ width: 40, height: 40, borderRadius: '0.75rem', background: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <BarChart2 size={20} color="#2563EB" />
                            </div>
                            <div>
                                <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '1.1rem', color: '#0B1220' }}>Market Research Agent</div>
                                <div style={{ fontSize: '0.8rem', color: '#64748B' }}>"Will anyone actually buy this?"</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                            <div style={{ position: 'relative', width: 72, height: 72 }}>
                                <ScoreRing score={agent.score} color={agent.color} size={72} />
                                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.35rem', color: agent.color }}>{agent.score}</span>
                                    <span style={{ fontSize: '0.6rem', color: '#94A3B8' }}>/100</span>
                                </div>
                            </div>
                            <div>
                                <div style={{ background: `${scoreColor(agent.score)}15`, border: `1px solid ${scoreColor(agent.score)}30`, color: scoreColor(agent.score), borderRadius: '2rem', padding: '0.25rem 0.75rem', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.35rem', textAlign: 'center' }}>{scoreBand(agent.score)}</div>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    {[{ l: 'Market Size', s: 72, c: '#2563EB' }, { l: 'Demand', s: 65, c: '#22C55E' }, { l: 'Diff.', s: 48, c: '#F59E0B' }].map(m => (
                                        <div key={m.l} style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(226,232,240,0.8)', borderRadius: '0.5rem', padding: '0.4rem 0.5rem', textAlign: 'center' }}>
                                            <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.9rem', color: m.c }}>{m.s}</div>
                                            <div style={{ fontSize: '0.62rem', color: '#94A3B8' }}>{m.l}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Verdict Banner */}
                    <div style={{ margin: '1.25rem 1.75rem 0', background: 'rgba(37,99,235,0.06)', borderLeft: '3px solid #2563EB', borderRadius: '0 0.625rem 0.625rem 0', padding: '0.875rem 1.25rem', fontFamily: 'Sora', fontWeight: 600, fontSize: '0.9rem', color: '#0B1220' }}>
                        "Market demand exists, but competitors already dominate. Differentiation is weak."
                    </div>

                    {/* Grid Body */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.25rem', padding: '1.25rem 1.75rem 1.75rem' }}>

                        {/* Target Customer */}
                        <div style={{ background: 'rgba(37,99,235,0.03)', border: '1px solid rgba(37,99,235,0.1)', borderRadius: '0.875rem', padding: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.875rem' }}>
                                <Users size={14} color="#2563EB" />
                                <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Target Customer</span>
                            </div>
                            {PERSONA.map(p => (
                                <div key={p.label} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', alignItems: 'flex-start' }}>
                                    <span style={{ fontSize: '0.8rem', flexShrink: 0 }}>{p.icon}</span>
                                    <div>
                                        <div style={{ fontSize: '0.65rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{p.label}</div>
                                        <div style={{ fontSize: '0.82rem', color: '#334155', fontWeight: 500 }}>{p.value}</div>
                                    </div>
                                </div>
                            ))}
                            <div style={{ marginTop: '0.75rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                                    <span style={{ fontSize: '0.72rem', color: '#64748B' }}>Persona Clarity</span>
                                    <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', fontWeight: 700, color: '#2563EB' }}>74%</span>
                                </div>
                                <div style={{ height: 6, background: '#E2E8F0', borderRadius: 3 }}>
                                    <div style={{ width: '74%', height: '100%', borderRadius: 3, background: 'linear-gradient(90deg, #2563EB, #3B82F6)' }} />
                                </div>
                            </div>
                        </div>

                        {/* Market Size */}
                        <div style={{ background: 'rgba(37,99,235,0.03)', border: '1px solid rgba(37,99,235,0.1)', borderRadius: '0.875rem', padding: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.875rem' }}>
                                <Globe size={14} color="#2563EB" />
                                <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Market Size</span>
                            </div>
                            {/* Concentric rings SVG */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.875rem' }}>
                                <svg width="120" height="120" viewBox="0 0 120 120">
                                    <circle cx="60" cy="60" r="55" fill="rgba(37,99,235,0.06)" stroke="#2563EB" strokeWidth="1" strokeDasharray="4 3" />
                                    <circle cx="60" cy="60" r="38" fill="rgba(37,99,235,0.12)" stroke="#2563EB" strokeWidth="1.5" />
                                    <circle cx="60" cy="60" r="21" fill="rgba(37,99,235,0.25)" stroke="#2563EB" strokeWidth="2" />
                                    <text x="60" y="57" textAnchor="middle" fill="#2563EB" fontSize="7" fontWeight="700">SOM</text>
                                    <text x="60" y="66" textAnchor="middle" fill="#2563EB" fontSize="6">$38M</text>
                                </svg>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
                                {MARKET.map(m => (
                                    <div key={m.label} style={{ textAlign: 'center' }}>
                                        <div style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '0.95rem', color: '#0B1220' }}>{m.value}</div>
                                        <div style={{ fontSize: '0.62rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{m.label}</div>
                                    </div>
                                ))}
                            </div>
                            <div style={{ marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '0.5rem', padding: '0.4rem 0.75rem' }}>
                                <TrendingUp size={12} color="#22C55E" />
                                <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', fontWeight: 700, color: '#22C55E' }}>CAGR 18.4%</span>
                            </div>
                        </div>

                        {/* Insights */}
                        <div style={{ background: 'rgba(37,99,235,0.03)', border: '1px solid rgba(37,99,235,0.1)', borderRadius: '0.875rem', padding: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.875rem' }}>
                                <Brain size={14} color="#2563EB" />
                                <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Agent Insights</span>
                            </div>
                            {INSIGHTS.map((ins, i) => (
                                <div key={i} style={{ background: `${ins.color}08`, borderLeft: `3px solid ${ins.color}`, borderRadius: '0 0.5rem 0.5rem 0', padding: '0.6rem 0.75rem', fontSize: '0.8rem', color: '#334155', marginBottom: '0.5rem', lineHeight: 1.4 }}>
                                    {ins.text}
                                </div>
                            ))}
                        </div>

                        {/* Competitor Table — spans full width */}
                        <div style={{ gridColumn: '1 / -1', background: 'rgba(248,250,252,0.7)', border: '1px solid rgba(226,232,240,0.6)', borderRadius: '0.875rem', overflow: 'hidden' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.875rem 1.25rem', borderBottom: '2px solid #E2E8F0' }}>
                                <Shield size={14} color="#2563EB" />
                                <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Competitor Landscape</span>
                            </div>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr>
                                        {['Competitor', 'Funding', 'Pricing', 'Key Strength', 'Vulnerability'].map(h => (
                                            <th key={h} style={{ padding: '0.5rem 1rem', textAlign: 'left', fontSize: '0.7rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>
                                        ))}
                                        <th style={{ padding: '0.5rem 1rem', textAlign: 'left', fontSize: '0.7rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>vs. You</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {COMPETITORS.map((c, i) => (
                                        <tr key={c.name} style={{ background: i % 2 === 0 ? 'rgba(248,250,252,0.5)' : 'rgba(255,255,255,0.3)', borderTop: '1px solid rgba(226,232,240,0.4)' }}>
                                            <td style={{ padding: '0.625rem 1rem', fontWeight: 600, fontSize: '0.85rem', color: '#0B1220' }}>{c.name}</td>
                                            <td style={{ padding: '0.625rem 1rem' }}><span style={{ background: 'rgba(59,130,246,0.08)', color: '#3B82F6', borderRadius: '2rem', padding: '0.15rem 0.6rem', fontSize: '0.72rem', fontWeight: 600 }}>{c.funding}</span></td>
                                            <td style={{ padding: '0.625rem 1rem', fontSize: '0.82rem', color: '#334155', fontFamily: 'monospace' }}>{c.price}</td>
                                            <td style={{ padding: '0.625rem 1rem', fontSize: '0.82rem', color: '#334155' }}>{c.strength}</td>
                                            <td style={{ padding: '0.625rem 1rem', fontSize: '0.82rem', color: '#F59E0B' }}>{c.weakness}</td>
                                            <td style={{ padding: '0.625rem 1rem' }}>
                                                <div style={{ display: 'flex', gap: '0.25rem' }}>
                                                    {['Price', 'UX', 'Speed'].map((d, j) => (
                                                        <div key={d} style={{ width: 28, height: 28, borderRadius: '0.375rem', background: j === 1 ? 'rgba(37,99,235,0.15)' : 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', color: j === 1 ? '#2563EB' : '#22C55E', fontWeight: 700 }}>{d[0]}</div>
                                                    ))}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    {/* You row */}
                                    <tr style={{ background: 'rgba(37,99,235,0.04)', borderTop: '2px solid rgba(37,99,235,0.15)' }}>
                                        <td style={{ padding: '0.625rem 1rem' }}><span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#2563EB' }}>★ You</span></td>
                                        <td style={{ padding: '0.625rem 1rem' }}><span style={{ background: 'rgba(34,197,94,0.1)', color: '#22C55E', borderRadius: '2rem', padding: '0.15rem 0.6rem', fontSize: '0.72rem', fontWeight: 600 }}>Pre-Seed</span></td>
                                        <td style={{ padding: '0.625rem 1rem', fontSize: '0.82rem', color: '#2563EB', fontFamily: 'monospace', fontWeight: 700 }}>TBD</td>
                                        <td style={{ padding: '0.625rem 1rem', fontSize: '0.82rem', color: '#22C55E', fontWeight: 500 }}>AI-native, India-first</td>
                                        <td style={{ padding: '0.625rem 1rem', fontSize: '0.82rem', color: '#64748B' }}>Early, no brand yet</td>
                                        <td style={{ padding: '0.625rem 1rem', fontSize: '0.75rem', color: '#2563EB', fontWeight: 600 }}>Positioning gap 🟢</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Differentiators */}
                        <div style={{ gridColumn: '1 / 3', background: 'rgba(37,99,235,0.03)', border: '1px solid rgba(37,99,235,0.1)', borderRadius: '0.875rem', padding: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.875rem' }}>
                                <Zap size={14} color="#2563EB" />
                                <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Differentiation Strength</span>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.625rem', marginBottom: '0.875rem' }}>
                                {[{ axis: 'Price Advantage', you: 70, them: 40 }, { axis: 'Feature Depth', you: 45, them: 80 }, { axis: 'UX Quality', you: 60, them: 70 }, { axis: 'Market Timing', you: 80, them: 55 }, { axis: 'Brand', you: 20, them: 75 }, { axis: 'Distribution', you: 30, them: 65 }].map(d => (
                                    <div key={d.axis}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                                            <span style={{ fontSize: '0.72rem', color: '#64748B' }}>{d.axis}</span>
                                            <span style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: d.you > d.them ? '#22C55E' : '#EF4444', fontWeight: 700 }}>{d.you > d.them ? '▲' : '▼'} {d.you}</span>
                                        </div>
                                        <div style={{ height: 5, background: '#E2E8F0', borderRadius: 3, position: 'relative' }}>
                                            <div style={{ position: 'absolute', height: '100%', borderRadius: 3, background: 'rgba(139,92,246,0.35)', width: `${d.them}%` }} />
                                            <div style={{ position: 'absolute', height: '100%', borderRadius: 3, background: '#2563EB', width: `${d.you}%`, opacity: 0.8 }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {['AI-native core', 'India-first pricing', 'Local language support', 'Founder-mode UX'].map(tag => (
                                    <span key={tag} style={{ background: 'rgba(37,99,235,0.07)', border: '1px solid rgba(37,99,235,0.2)', color: '#2563EB', borderRadius: '2rem', padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: 500 }}>{tag}</span>
                                ))}
                            </div>
                        </div>

                        {/* Risk Summary */}
                        <div style={{ background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.15)', borderRadius: '0.875rem', padding: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.875rem' }}>
                                <AlertTriangle size={14} color="#F59E0B" />
                                <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Key Risks</span>
                            </div>
                            {[{ t: 'No clear moat yet', s: 'high' }, { t: 'Geography-limited SAM', s: 'medium' }, { t: 'Competitor funding gap', s: 'high' }, { t: 'Pricing not validated', s: 'medium' }].map(r => (
                                <div key={r.t} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: r.s === 'high' ? '#EF4444' : '#F59E0B', flexShrink: 0 }} />
                                    <span style={{ fontSize: '0.8rem', color: '#334155' }}>{r.t}</span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* ── Tech Feasibility Agent Card ── */}
                <div id="tech" style={{ background: 'rgba(255,255,255,0.62)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.78)', borderTop: '3px solid #06B6D4', borderRadius: '1.25rem', boxShadow: '0 8px 32px rgba(6,182,212,0.08)', overflow: 'hidden' }}>

                    {/* Card Header */}
                    <div style={{ padding: '1.5rem 1.75rem', borderBottom: '1px solid rgba(226,232,240,0.5)', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                            <div style={{ width: 40, height: 40, borderRadius: '0.75rem', background: 'rgba(6,182,212,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Cpu size={20} color="#06B6D4" /></div>
                            <div>
                                <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '1.1rem', color: '#0B1220' }}>Tech Feasibility Agent</div>
                                <div style={{ fontSize: '0.8rem', color: '#64748B' }}>"Can this be built with reasonable effort?"</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                            <div style={{ position: 'relative', width: 72, height: 72 }}>
                                <ScoreRing score={54} color="#06B6D4" size={72} />
                                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.35rem', color: '#06B6D4' }}>54</span>
                                    <span style={{ fontSize: '0.6rem', color: '#94A3B8' }}>/100</span>
                                </div>
                            </div>
                            <div>
                                <div style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)', color: '#3B82F6', borderRadius: '2rem', padding: '0.25rem 0.75rem', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.35rem', textAlign: 'center' }}>Moderate</div>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    {[{ l: 'Stack Risk', s: 42, c: '#06B6D4' }, { l: 'Complexity', s: 61, c: '#F59E0B' }, { l: 'Scalability', s: 70, c: '#A855F7' }].map(m => (
                                        <div key={m.l} style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(226,232,240,0.8)', borderRadius: '0.5rem', padding: '0.4rem 0.5rem', textAlign: 'center' }}>
                                            <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.9rem', color: m.c }}>{m.s}</div>
                                            <div style={{ fontSize: '0.62rem', color: '#94A3B8' }}>{m.l}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Verdict */}
                    <div style={{ margin: '1.25rem 1.75rem 0', background: 'rgba(6,182,212,0.06)', borderLeft: '3px solid #06B6D4', borderRadius: '0 0.625rem 0.625rem 0', padding: '0.875rem 1.25rem', fontFamily: 'Sora', fontWeight: 600, fontSize: '0.9rem', color: '#0B1220' }}>
                        "MVP is feasible in 6 weeks, but real-time features add high complexity — spike WebSocket before committing."
                    </div>

                    {/* Grid Body */}
                    <div style={{ padding: '1.25rem 1.75rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                        {/* Stack + Layer Risk */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                            {/* Code Panel */}
                            <div style={{ background: 'rgba(6,182,212,0.03)', border: '1px solid rgba(6,182,212,0.1)', borderRadius: '0.875rem', padding: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.875rem' }}>
                                    <Layers size={14} color="#06B6D4" />
                                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Suggested Tech Stack</span>
                                </div>
                                <div style={{ background: '#0F172A', border: '1px solid rgba(6,182,212,0.18)', borderRadius: '0.75rem', overflow: 'hidden' }}>
                                    <div style={{ background: '#1E293B', padding: '0.4rem 0.875rem', display: 'flex', alignItems: 'center', gap: '0.4rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        {['#EF4444', '#F59E0B', '#22C55E'].map(c => <span key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />)}
                                        <span style={{ fontFamily: 'monospace', fontSize: '0.68rem', color: '#64748B', flex: 1, textAlign: 'center' }}>stack.config.ts</span>
                                    </div>
                                    <div style={{ padding: '0.875rem 1.1rem', fontFamily: 'monospace', fontSize: '0.75rem', lineHeight: 1.9 }}>
                                        {TECH_STACK.map(sec => (
                                            <div key={sec.cat} style={{ marginBottom: '0.4rem' }}>
                                                <div style={{ color: '#475569' }}>{sec.cat}</div>
                                                {sec.items.map(([k, v]) => <div key={k}><span style={{ color: '#67E8F9' }}>{k}</span><span style={{ color: '#94A3B8' }}>: </span><span style={{ color: '#4ADE80' }}>&#34;{v}&#34;</span></div>)}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div style={{ marginTop: '0.75rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                        <span style={{ fontSize: '0.72rem', color: '#64748B' }}>Team–Stack Compatibility</span>
                                        <span style={{ fontFamily: 'monospace', fontSize: '0.72rem', fontWeight: 700, color: '#06B6D4' }}>82%</span>
                                    </div>
                                    <div style={{ height: 6, background: '#E2E8F0', borderRadius: 3 }}><div style={{ width: '82%', height: '100%', borderRadius: 3, background: 'linear-gradient(90deg,#06B6D4,#0891B2)' }} /></div>
                                </div>
                            </div>

                            {/* Layer Risk */}
                            <div style={{ background: 'rgba(6,182,212,0.03)', border: '1px solid rgba(6,182,212,0.1)', borderRadius: '0.875rem', padding: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.875rem' }}>
                                    <GitBranch size={14} color="#06B6D4" />
                                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Layer-by-Layer Risk</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                                    {TECH_LAYERS.map(l => {
                                        const Icon = l.icon;
                                        return (
                                            <div key={l.name} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', background: 'rgba(248,250,252,0.7)', border: '1px solid rgba(226,232,240,0.6)', borderRadius: '0.5rem', padding: '0.5rem 0.75rem' }}>
                                                <div style={{ width: 26, height: 26, background: 'rgba(6,182,212,0.08)', borderRadius: '0.375rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon size={13} color="#06B6D4" /></div>
                                                <div style={{ flex: 1, minWidth: 0 }}>
                                                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1E293B' }}>{l.name}</div>
                                                    <div style={{ fontSize: '0.68rem', color: '#64748B', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l.note}</div>
                                                </div>
                                                <span style={{ background: riskBg(l.risk), color: riskColor(l.risk), borderRadius: '2rem', padding: '0.1rem 0.5rem', fontSize: '0.65rem', fontWeight: 600, flexShrink: 0 }}>{l.risk}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Feature Heatmap */}
                        <div style={{ background: 'rgba(6,182,212,0.03)', border: '1px solid rgba(6,182,212,0.1)', borderRadius: '0.875rem', padding: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.875rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <Cpu size={14} color="#06B6D4" />
                                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Feature Complexity Heatmap</span>
                                </div>
                                <div style={{ display: 'flex', gap: '0.625rem' }}>
                                    {[['Low', '#22C55E'], ['Medium', '#F59E0B'], ['High', '#EF4444']].map(([l, c]) => (
                                        <div key={l} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><span style={{ width: 8, height: 8, borderRadius: 2, background: c }} /><span style={{ fontSize: '0.7rem', color: '#64748B' }}>{l}</span></div>
                                    ))}
                                </div>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px,1fr))', gap: '0.5rem', marginBottom: '0.875rem' }}>
                                {TECH_FEATURES.map(f => (
                                    <div key={f.name} style={{ background: cxBg(f.complexity), border: `1px solid ${cxColor(f.complexity)}40`, borderRadius: '0.5rem', padding: '0.625rem 0.75rem' }}>
                                        <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#1E293B' }}>{f.name}</div>
                                        <div style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '0.75rem', color: cxColor(f.complexity) }}>{f.days}d</div>
                                    </div>
                                ))}
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0.625rem' }}>
                                {[{ label: 'Total Features', value: TECH_FEATURES.length, color: '#0B1220', e: '📦' }, { label: 'Total Days', value: `${TECH_FEATURES.reduce((s, f) => s + f.days, 0)}d`, color: '#06B6D4', e: '📅' }, { label: 'High Risk', value: TECH_FEATURES.filter(f => f.complexity === 'high').length, color: '#EF4444', e: '🚨' }, { label: 'Quick Wins', value: TECH_FEATURES.filter(f => f.complexity === 'low').length, color: '#22C55E', e: '⚡' }].map(s => (
                                    <div key={s.label} style={{ background: 'rgba(255,255,255,0.55)', border: '1px solid rgba(226,232,240,0.6)', borderRadius: '0.625rem', padding: '0.75rem' }}>
                                        <div style={{ fontSize: '0.68rem', color: '#64748B', marginBottom: '0.2rem' }}>{s.e} {s.label}</div>
                                        <div style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.25rem', color: s.color }}>{s.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Build vs Buy */}
                        <div style={{ background: 'rgba(6,182,212,0.03)', border: '1px solid rgba(6,182,212,0.1)', borderRadius: '0.875rem', overflow: 'hidden' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.875rem 1.25rem', borderBottom: '2px solid rgba(6,182,212,0.12)' }}>
                                <Scale size={14} color="#06B6D4" />
                                <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Build vs Buy Decision Matrix</span>
                            </div>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead><tr>{['Component', 'Decision', 'Tool / Service', 'Monthly Cost'].map(h => <th key={h} style={{ padding: '0.45rem 1.25rem', textAlign: 'left', fontSize: '0.68rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>)}</tr></thead>
                                <tbody>
                                    {BUILD_BUY.map((row, i) => {
                                        const b = decBadge(row.decision); return (
                                            <tr key={row.component} style={{ background: i % 2 === 0 ? 'rgba(248,250,252,0.5)' : 'rgba(255,255,255,0.3)', borderTop: '1px solid rgba(226,232,240,0.4)' }}>
                                                <td style={{ padding: '0.5rem 1.25rem', fontWeight: 600, fontSize: '0.82rem', color: '#0B1220' }}>{row.component}</td>
                                                <td style={{ padding: '0.5rem 1.25rem' }}><span style={{ background: b.bg, color: b.c, borderRadius: '2rem', padding: '0.12rem 0.6rem', fontSize: '0.7rem', fontWeight: 600 }}>{b.label}</span></td>
                                                <td style={{ padding: '0.5rem 1.25rem', fontFamily: 'monospace', fontSize: '0.78rem', color: '#0891B2' }}>{row.tool}</td>
                                                <td style={{ padding: '0.5rem 1.25rem', fontFamily: 'monospace', fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>{row.cost}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                        {/* Insights + Actions */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                            <div style={{ background: 'rgba(6,182,212,0.03)', border: '1px solid rgba(6,182,212,0.1)', borderRadius: '0.875rem', padding: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.875rem' }}>
                                    <AlertTriangle size={14} color="#06B6D4" />
                                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Technical Flags</span>
                                </div>
                                {TECH_INSIGHTS.map((ins, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', background: `${ins.color}08`, borderLeft: `3px solid ${ins.color}`, borderRadius: '0 0.5rem 0.5rem 0', padding: '0.5rem 0.75rem', marginBottom: '0.45rem' }}>
                                        <div style={{ flexShrink: 0, marginTop: 1 }}><SevIcon s={ins.s} /></div>
                                        <span style={{ fontSize: '0.8rem', color: '#334155', lineHeight: 1.4 }}>{ins.text}</span>
                                    </div>
                                ))}
                            </div>
                            <div style={{ background: 'rgba(6,182,212,0.03)', border: '1px solid rgba(6,182,212,0.1)', borderRadius: '0.875rem', padding: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.875rem' }}>
                                    <TrendingUp size={14} color="#06B6D4" />
                                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Prioritized Actions</span>
                                </div>
                                {[{ pri: 'Do Now', c: '#EF4444', bg: 'rgba(239,68,68,0.1)', title: 'Spike WebSocket before committing to real-time features', impact: 'Prevents rebuild at week 6' }, { pri: 'This Week', c: '#F59E0B', bg: 'rgba(245,158,11,0.1)', title: 'Add Redis caching for AI response calls', impact: 'Reduce AI cost by ~60%' }, { pri: 'This Week', c: '#F59E0B', bg: 'rgba(245,158,11,0.1)', title: 'Set up BullMQ for async AI job processing', impact: 'Prevents API timeouts' }, { pri: 'Next Sprint', c: '#06B6D4', bg: 'rgba(6,182,212,0.1)', title: 'Define DB indexing strategy before 1K users', impact: 'Prevents query degradation' }].map((a, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', background: 'rgba(248,250,252,0.6)', border: '1px solid rgba(226,232,240,0.6)', borderRadius: '0.5rem', padding: '0.5rem 0.75rem', marginBottom: '0.45rem' }}>
                                        <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(6,182,212,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Sora', fontWeight: 700, fontSize: '0.7rem', color: '#06B6D4', flexShrink: 0 }}>{i + 1}</div>
                                        <div style={{ flex: 1 }}>
                                            <span style={{ background: a.bg, color: a.c, borderRadius: '2rem', padding: '0.08rem 0.5rem', fontSize: '0.65rem', fontWeight: 600 }}>{a.pri}</span>
                                            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1E293B', marginTop: '0.2rem' }}>{a.title}</div>
                                            <div style={{ fontSize: '0.7rem', color: '#22C55E' }}>↑ {a.impact}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>


                {/* ── Funding Agent Card ── */}
                <div id="funding" style={{ background: 'rgba(255,255,255,0.62)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.78)', borderTop: '3px solid #D97706', borderRadius: '1.25rem', boxShadow: '0 8px 32px rgba(217,119,6,0.1)', overflow: 'hidden' }}>

                    {/* Card Header */}
                    <div style={{ padding: '1.5rem 1.75rem', borderBottom: '1px solid rgba(254,243,199,0.6)', background: 'linear-gradient(135deg, rgba(255,251,235,0.6) 0%, rgba(255,255,255,0.4) 100%)', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                            <div style={{ width: 40, height: 40, borderRadius: '0.75rem', background: 'rgba(217,119,6,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Banknote size={20} color="#D97706" /></div>
                            <div>
                                <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '1.1rem', color: '#0B1220' }}>Funding Agent</div>
                                <div style={{ fontSize: '0.8rem', color: '#64748B', fontStyle: 'italic' }}>"Is this fundable and investable?"</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                            <div style={{ position: 'relative', width: 72, height: 72 }}>
                                <ScoreRing score={76} color="#D97706" size={72} />
                                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.35rem', color: '#D97706' }}>76</span>
                                    <span style={{ fontSize: '0.6rem', color: '#94A3B8' }}>/100</span>
                                </div>
                            </div>
                            <div>
                                <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', color: '#10B981', borderRadius: '2rem', padding: '0.25rem 0.75rem', fontSize: '0.78rem', fontWeight: 700, marginBottom: '0.35rem', textAlign: 'center' }}>Fundable</div>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    {[{ l: 'Revenue Model', s: 70, c: '#D97706' }, { l: 'Pitch Strength', s: 60, c: '#F59E0B' }, { l: 'Investor Match', s: 82, c: '#10B981' }].map(m => (
                                        <div key={m.l} style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(254,243,199,0.8)', borderRadius: '0.5rem', padding: '0.4rem 0.5rem', textAlign: 'center' }}>
                                            <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.9rem', color: m.c }}>{m.s}</div>
                                            <div style={{ fontSize: '0.62rem', color: '#94A3B8' }}>{m.l}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Verdict */}
                    <div style={{ margin: '1.25rem 1.75rem 0', background: 'rgba(217,119,6,0.07)', border: '1px solid rgba(217,119,6,0.18)', borderLeft: '3px solid #D97706', borderRadius: '0 0.625rem 0.625rem 0', padding: '0.875rem 1.25rem', fontFamily: 'Sora', fontWeight: 600, fontSize: '0.9rem', color: '#0B1220' }}>
                        "Fundable at Seed stage — strong idea and AI theme alignment. Revenue clarity and traction data are the blockers."
                    </div>

                    <div style={{ padding: '1.25rem 1.75rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                        {/* Revenue Scorecard + Stage Journey */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '1.25rem' }}>

                            {/* Revenue Model Scorecard */}
                            <div style={{ background: 'rgba(255,251,235,0.5)', border: '1px solid rgba(217,119,6,0.15)', borderRadius: '0.875rem', overflow: 'hidden' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.875rem 1rem', borderBottom: '1px solid rgba(254,243,199,0.6)' }}>
                                    <TrendingUp size={14} color="#D97706" />
                                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Revenue Model Scorecard</span>
                                </div>
                                {REVENUE_CRITERIA.map((c, i) => (
                                    <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.625rem 1rem', background: i % 2 === 0 ? 'rgba(255,251,235,0.5)' : 'rgba(255,255,255,0.3)', borderBottom: '1px solid rgba(254,243,199,0.4)' }}>
                                        <span style={{ fontSize: '0.8rem', color: '#1E293B', flex: 1 }}>{c.label}</span>
                                        <div style={{ width: 80, height: 6, background: '#E2E8F0', borderRadius: 3 }}>
                                            <div style={{ width: `${(c.score / c.max) * 100}%`, height: '100%', borderRadius: 3, background: 'linear-gradient(90deg,#D97706,#F59E0B)' }} />
                                        </div>
                                        <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '0.78rem', color: '#D97706', minWidth: 32, textAlign: 'right' }}>{c.score}/{c.max}</span>
                                    </div>
                                ))}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', background: 'rgba(217,119,6,0.07)', borderTop: '2px solid rgba(217,119,6,0.15)' }}>
                                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#92400E' }}>Total Revenue Score</span>
                                    <span style={{ fontFamily: 'monospace', fontWeight: 800, fontSize: '1.1rem', color: '#D97706' }}>{REVENUE_CRITERIA.reduce((s, c) => s + c.score, 0)}/100</span>
                                </div>
                            </div>

                            {/* Funding Stage Journey */}
                            <div style={{ background: '#0F1A2E', border: '1px solid rgba(217,119,6,0.18)', borderRadius: '0.875rem', padding: '1.25rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
                                    <Map size={14} color="#D97706" />
                                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#E2E8F0' }}>Funding Stage Readiness</span>
                                </div>
                                {FUNDING_STAGES.map((stage) => (
                                    <div key={stage.label} style={{ marginBottom: '0.625rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <span style={{ width: 8, height: 8, borderRadius: '50%', background: stage.color, flexShrink: 0, boxShadow: (stage as any).current ? `0 0 8px ${stage.color}` : 'none' }} />
                                                <span style={{ fontSize: '0.8rem', fontWeight: (stage as any).current ? 700 : 400, color: (stage as any).current ? stage.color : '#94A3B8' }}>{stage.label}</span>
                                                {(stage as any).current && <span style={{ background: 'rgba(217,119,6,0.2)', color: '#D97706', borderRadius: '2rem', padding: '0.08rem 0.5rem', fontSize: '0.65rem', fontWeight: 700 }}>You Are Here</span>}
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <span style={{ fontFamily: 'monospace', fontSize: '0.68rem', color: '#64748B' }}>{stage.raise}</span>
                                                <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '0.75rem', color: stage.color }}>{stage.ready}%</span>
                                            </div>
                                        </div>
                                        <div style={{ height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 3 }}>
                                            <div style={{ width: `${stage.ready}%`, height: '100%', borderRadius: 3, background: stage.color, opacity: (stage as any).current ? 1 : 0.5 }} />
                                        </div>
                                    </div>
                                ))}
                                <div style={{ marginTop: '0.875rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                                    {[{ l: 'Ideal Raise', v: '₹1.5–₹3 Cr', c: '#D97706' }, { l: 'Valuation Range', v: '₹8–₹15 Cr', c: '#F59E0B' }].map(m => (
                                        <div key={m.l} style={{ background: 'rgba(217,119,6,0.08)', border: '1px solid rgba(217,119,6,0.15)', borderRadius: '0.5rem', padding: '0.625rem 0.75rem' }}>
                                            <div style={{ fontSize: '0.65rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{m.l}</div>
                                            <div style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '0.95rem', color: m.c }}>{m.v}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Investor Types */}
                        <div style={{ background: 'rgba(255,251,235,0.4)', border: '1px solid rgba(217,119,6,0.12)', borderRadius: '0.875rem', padding: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.875rem' }}>
                                <Users size={14} color="#D97706" />
                                <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Investor Type Compatibility</span>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0.75rem' }}>
                                {INVESTOR_TYPES.map(inv => {
                                    const Icon = inv.icon;
                                    return (
                                        <div key={inv.type} style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.78)', borderRadius: '0.875rem', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <div style={{ width: 32, height: 32, background: `${inv.color}12`, borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon size={15} color={inv.color} /></div>
                                                <span style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.1rem', color: inv.color }}>{inv.match}</span>
                                            </div>
                                            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#0B1220', lineHeight: 1.3 }}>{inv.type}</div>
                                            <span style={{ background: likeBg(inv.likelihood), color: likeColor(inv.likelihood), borderRadius: '2rem', padding: '0.15rem 0.625rem', fontSize: '0.68rem', fontWeight: 600, alignSelf: 'flex-start' }}>{inv.likelihood}</span>
                                            <div style={{ fontSize: '0.72rem', color: '#64748B', fontStyle: 'italic', lineHeight: 1.35 }}>{inv.concern}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Pitch Deck Components */}
                        <div style={{ background: 'rgba(255,251,235,0.4)', border: '1px solid rgba(217,119,6,0.12)', borderRadius: '0.875rem', padding: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.875rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <Rocket size={14} color="#D97706" />
                                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Pitch Deck Component Audit</span>
                                </div>
                                <div style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.1rem', color: '#D97706' }}>{PITCH_COMPONENTS.reduce((s, c) => s + c.score, 0)}/100</div>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '0.625rem' }}>
                                {PITCH_COMPONENTS.map(p => (
                                    <div key={p.slide} style={{ background: pitchBg(p.score), border: `1px solid ${pitchColor(p.score)}30`, borderRadius: '0.625rem', padding: '0.75rem 0.625rem' }}>
                                        <div style={{ fontFamily: 'monospace', fontSize: '0.62rem', color: '#94A3B8', marginBottom: '0.25rem' }}>{p.slide}</div>
                                        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#1E293B', lineHeight: 1.3, marginBottom: '0.35rem' }}>{p.name}</div>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <span style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1rem', color: pitchColor(p.score) }}>{p.score}</span>
                                            <span style={{ background: p.weight === 'Critical' ? 'rgba(239,68,68,0.08)' : 'rgba(245,158,11,0.08)', color: p.weight === 'Critical' ? '#EF4444' : '#F59E0B', borderRadius: '2rem', padding: '0.08rem 0.4rem', fontSize: '0.6rem', fontWeight: 600 }}>{p.weight}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Green + Red Flags */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                            <div style={{ background: 'rgba(255,255,255,0.62)', border: '1px solid rgba(255,255,255,0.78)', borderTop: '3px solid #10B981', borderRadius: '0.875rem', padding: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                                    <ThumbsUp size={14} color="#10B981" />
                                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Investor Green Flags</span>
                                </div>
                                {GREEN_FLAGS.map((f, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)', borderRadius: '0.5rem', padding: '0.625rem 0.75rem', marginBottom: '0.4rem' }}>
                                        <CheckCircle size={13} color="#10B981" style={{ flexShrink: 0, marginTop: 2 }} />
                                        <div style={{ flex: 1 }}>
                                            <span style={{ fontSize: '0.8rem', color: '#1E293B', lineHeight: 1.4 }}>{f.text}</span>
                                            <span style={{ marginLeft: '0.5rem', background: f.impact === 'High' ? 'rgba(16,185,129,0.12)' : 'rgba(245,158,11,0.1)', color: f.impact === 'High' ? '#10B981' : '#F59E0B', borderRadius: '2rem', padding: '0.08rem 0.45rem', fontSize: '0.65rem', fontWeight: 600 }}>{f.impact}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.62)', border: '1px solid rgba(255,255,255,0.78)', borderTop: '3px solid #EF4444', borderRadius: '0.875rem', padding: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                                    <ThumbsDown size={14} color="#EF4444" />
                                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Investor Red Flags</span>
                                </div>
                                {RED_FLAGS.map((f, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: '0.5rem', padding: '0.625rem 0.75rem', marginBottom: '0.4rem' }}>
                                        <XCircle size={13} color="#EF4444" style={{ flexShrink: 0, marginTop: 2 }} />
                                        <div style={{ flex: 1 }}>
                                            <span style={{ fontSize: '0.8rem', color: '#1E293B', lineHeight: 1.4 }}>{f.text}</span>
                                            <span style={{ marginLeft: '0.5rem', background: f.severity === 'Critical' ? 'rgba(239,68,68,0.12)' : f.severity === 'High' ? 'rgba(249,115,22,0.1)' : 'rgba(245,158,11,0.1)', color: f.severity === 'Critical' ? '#EF4444' : f.severity === 'High' ? '#F97316' : '#F59E0B', borderRadius: '2rem', padding: '0.08rem 0.45rem', fontSize: '0.65rem', fontWeight: 700 }}>{f.severity}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 30/60/90 Roadmap */}
                        <div style={{ background: '#0F1A2E', border: '1px solid rgba(217,119,6,0.18)', borderRadius: '0.875rem', padding: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.25rem' }}>
                                <ArrowRight size={14} color="#D97706" />
                                <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.9rem', color: '#E2E8F0' }}>30 / 60 / 90 Day Funding Prep Plan</span>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                                {ROADMAP_PHASES.map((phase) => (
                                    <div key={phase.label} style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid rgba(255,255,255,0.07)`, borderTop: `3px solid ${phase.color}`, borderRadius: '0.75rem', padding: '1.1rem' }}>
                                        <div style={{ fontFamily: 'monospace', fontWeight: 600, fontSize: '0.72rem', color: phase.color, marginBottom: '0.25rem' }}>{phase.label}</div>
                                        <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.95rem', color: '#E2E8F0', marginBottom: '0.25rem' }}>{phase.title}</div>
                                        <div style={{ fontSize: '0.75rem', color: '#64748B', fontStyle: 'italic', marginBottom: '0.875rem' }}>{phase.goal}</div>
                                        {phase.actions.map((action, i) => (
                                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', marginBottom: '0.4rem', paddingBottom: '0.4rem', borderBottom: i < phase.actions.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                                                <span style={{ color: phase.color, fontSize: '0.7rem', flexShrink: 0, marginTop: 2 }}>›</span>
                                                <span style={{ fontSize: '0.78rem', color: '#CBD5E1', lineHeight: 1.4 }}>{action}</span>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </main>
        </div>
    );
}
