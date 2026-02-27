'use client';
import { BarChart2, Cpu, Banknote, Scale, Target, Calculator, Server, Leaf, Package, Database, CheckCircle, TrendingUp, Zap, Brain, RefreshCw, Download, Rocket, Activity, Users, Globe, AlertTriangle, Shield, Monitor, Lock, Layers, GitBranch, XCircle, Info, Star, Building2, ThumbsUp, ThumbsDown, ArrowRight, Map, FileText, Gavel, Eye, ShieldAlert, Megaphone, Share2, MousePointerClick, MessageSquare, Search, PenTool, ShoppingCart, DollarSign, PieChart, Coins, Network, HardDrive, Cpu as CpuIcon, TreePine, Droplets, Sun, Wind, Recycle, Fingerprint, Bug, LockKeyhole, Truck, Clock, MapPin } from 'lucide-react';

const SUPPLY_CHAIN_RISKS = [
    { area: 'Supplier Concentration', risk: 'High', note: '80% of raw materials rely on a single vendor in Shenzhen.', color: '#EF4444' },
    { area: 'Lead Time Volatility', risk: 'Medium', note: 'Average 45-day ocean freight. Vulnerable to port strikes.', color: '#F59E0B' },
    { area: 'Inventory Holding', risk: 'Low', note: 'Just-in-time approach working well currently.', color: '#10B981' },
];

const WORKING_CAPITAL = [
    { metric: 'Days Sales Outstanding (DSO)', value: '32 Days', target: '< 45', status: 'optimal' },
    { metric: 'Days Inventory Outstanding (DIO)', value: '85 Days', target: '< 60', status: 'warning' },
    { metric: 'Days Payable Outstanding (DPO)', value: '45 Days', target: '> 60', status: 'warning' },
];

const LOGISTICS_SPEED = [
    { step: 'Order Processing', time: '12 hrs', rating: 'Fast' },
    { step: 'Fulfillment & Pack', time: '24 hrs', rating: 'Average' },
    { step: 'Last Mile Delivery', time: '3-4 Days', rating: 'Slow' },
];

const scColor = (risk: string) => risk === 'High' ? '#EF4444' : risk === 'Medium' ? '#F59E0B' : '#10B981';
const scBg = (risk: string) => risk === 'High' ? 'rgba(239,68,68,0.1)' : risk === 'Medium' ? 'rgba(245,158,11,0.1)' : 'rgba(16,185,129,0.1)';

const AI_RISKS = [
    { risk: 'Hallucination Severity', level: 'High', impact: 'Clinical outputs cannot be trusted without human-in-the-loop review.', icon: Bug, color: '#EF4444' },
    { risk: 'Data Privacy (PII)', level: 'Critical', impact: 'User prompts may contain sensitive health data sent to 3rd party APIs.', icon: LockKeyhole, color: '#EF4444' },
    { risk: 'Algorithmic Bias', level: 'Medium', impact: 'Training data skews towards western demographics, reducing accuracy in Asia/Africa.', icon: Scale, color: '#F59E0B' },
];

const DATA_MOAT = [
    { asset: 'Proprietary Dataset', score: 30, note: 'Weak. Relying mostly on public internet data.' },
    { asset: 'User Data Flywheel', score: 75, note: 'Strong. System learns and improves from every expert interaction.' },
    { asset: 'Custom Fine-Tuning', score: 20, note: 'None yet. Standard base model wrappers used.' },
];

const MODEL_DEPENDENCY = [
    { provider: 'OpenAI (GPT-4)', usage: '85%', risk: 'Vendor Lock-in', backup: 'Minimal' },
    { provider: 'Anthropic (Claude 3)', usage: '10%', risk: 'Rate Limits', backup: 'Fallback only' },
    { provider: 'Local/Open Source (Llama)', usage: '5%', risk: 'High Latency', backup: 'Experimental' },
];

const aiRiskColor = (level: string) => level === 'Critical' || level === 'High' ? '#EF4444' : level === 'Medium' ? '#F59E0B' : '#10B981';
const aiRiskBg = (level: string) => level === 'Critical' || level === 'High' ? 'rgba(239,68,68,0.1)' : level === 'Medium' ? 'rgba(245,158,11,0.1)' : 'rgba(16,185,129,0.1)';

const ESG_METRICS = [
    { category: 'Environmental', score: 85, icon: TreePine, color: '#10B981', details: 'Zero-emission cloud infrastructure. 100% renewable energy.' },
    { category: 'Social', score: 72, icon: Users, color: '#3B82F6', details: 'Strong diversity hiring policy. Fair wages for data labelers.' },
    { category: 'Governance', score: 90, icon: Shield, color: '#8B5CF6', details: 'Transparent data policies. Independent board members.' },
];

const SDG_ALIGNMENT = [
    { id: 'SDG 9', title: 'Industry, Innovation & Infrastructure', impact: 'Direct', relevance: 'High' },
    { id: 'SDG 8', title: 'Decent Work & Economic Growth', impact: 'Indirect', relevance: 'Medium' },
    { id: 'SDG 12', title: 'Responsible Consumption', impact: 'Indirect', relevance: 'Low' },
];

const IMPACT_KPI = [
    { metric: 'Carbon Avoided', value: '450 Tons/yr', target: '500 Tons', status: 'on-track' },
    { metric: 'Jobs Created', value: '120 Local', target: '100 Local', status: 'exceeded' },
    { metric: 'Waste Reduced', value: '15%', target: '20%', status: 'lagging' },
];

const esgColor = (score: number) => score >= 80 ? '#10B981' : score >= 60 ? '#3B82F6' : '#EF4444';
const esgBg = (score: number) => score >= 80 ? 'rgba(16,185,129,0.1)' : score >= 60 ? 'rgba(59,130,246,0.1)' : 'rgba(239,68,68,0.1)';

const INFRA_SCALING = [
    { area: 'Database Architecture', status: 'ready', note: 'Supabase scales easily to 100k+ MAU.', icon: Database },
    { area: 'API Rate Limits (LLM)', status: 'warning', note: 'Anthropic Tier 2 limits will hit at 5k daily active users.', icon: CpuIcon },
    { area: 'Frontend CDN', status: 'ready', note: 'Vercel Edge network handles global traffic spikes.', icon: Globe },
    { area: 'Real-time WebSocket', status: 'danger', note: 'Current polling architecture will crash under heavy load.', icon: Zap },
];

const OPS_BOTTLENECKS = [
    { process: 'Customer Onboarding', type: 'Manual', time: '4 hrs/client', scale_limit: '50/month', impact: 'High' },
    { process: 'Data Annotation', type: 'Hybrid', time: '1 hr/dataset', scale_limit: '200/month', impact: 'Medium' },
    { process: 'Support Ticket Prep', type: 'Automated', time: 'Instant', scale_limit: 'Unlimited', impact: 'Low' },
];

const DEPENDENCIES = [
    { name: 'Anthropic Claude API', risk: 'High', reason: 'Core product value relies entirely on a single AI provider.' },
    { name: 'Stripe Billing', risk: 'Low', reason: 'Industry standard, easy to migrate if absolutely necessary.' },
    { name: 'AWS S3 Storage', risk: 'Low', reason: 'Commoditized storage, virtually infinite scale.' },
];

const scaColor = (status: string) => status === 'ready' ? '#10B981' : status === 'warning' ? '#F59E0B' : '#EF4444';
const scaBg = (status: string) => status === 'ready' ? 'rgba(16,185,129,0.1)' : status === 'warning' ? 'rgba(245,158,11,0.1)' : 'rgba(239,68,68,0.1)';

const UNIT_ECONOMICS = [
    { metric: 'Avg Revenue Per User (ARPU)', value: '₹2,500/mo', benchmark: 'Healthy', color: '#10B981' },
    { metric: 'Cost of Goods Sold (COGS)', value: '₹400/mo', benchmark: 'Server/LLM costs', color: '#64748B' },
    { metric: 'Gross Margin', value: '84%', benchmark: 'Target > 80%', color: '#10B981' },
];

const CAP_EFFICIENCY = [
    { label: 'Months of Runway', value: '14 Months', status: 'warning', note: 'Based on current burn rate' },
    { label: 'Burn Multiple', value: '1.2x', status: 'optimal', note: 'Highly efficient growth' },
    { label: 'Revenue/Employee', value: '₹44L', status: 'optimal', note: 'Above industry average' },
];

const PROFIT_TIMELINE = [
    { quarter: 'Q3 2025', phase: 'Trough of Sorrow', rev: '₹4L', cost: '₹12L', flow: '-₹8L' },
    { quarter: 'Q4 2025', phase: 'Growth Phase', rev: '₹15L', cost: '₹18L', flow: '-₹3L' },
    { quarter: 'Q1 2026', phase: 'Break Even Target', rev: '₹25L', cost: '₹22L', flow: '+₹3L' },
];

const ueColor = (v: number) => v >= 80 ? '#10B981' : v >= 60 ? '#F59E0B' : '#EF4444';
const ueBg = (v: number) => v >= 80 ? 'rgba(16,185,129,0.1)' : v >= 60 ? 'rgba(245,158,11,0.1)' : 'rgba(239,68,68,0.1)';

const CHANNELS = [
    { name: 'SEO & Content', icon: Search, score: 85, cost: 'Low CAC', speed: 'Slow', fit: 'High', note: 'Strong long-term moat for SaaS.' },
    { name: 'Cold Outbound (Email/LI)', icon: MessageSquare, score: 70, cost: 'Med CAC', speed: 'Fast', fit: 'Medium', note: 'Good for early B2B validation.' },
    { name: 'Performance Meta/Google', icon: MousePointerClick, score: 45, cost: 'High CAC', speed: 'Fast', fit: 'Low', note: 'Too expensive for current LTV.' },
    { name: 'Partnerships & Affiliates', icon: Users, score: 60, cost: 'Low CAC', speed: 'Med', fit: 'Medium', note: 'Requires strong initial traction.' },
    { name: 'Product-Led Growth (Virality)', icon: Share2, score: 90, cost: 'Zero CAC', speed: 'Med', fit: 'High', note: 'Ideal. Build invite loops into product.' },
];

const GTM_PHASES = [
    { phase: '01 / Validate', title: 'Founder-Led Sales', target: 'First 10 Paying', actions: ['Warm network outreach', 'Manual LinkedIn prospecting', 'Concierge onboarding'], metric: 'Conversion Rate' },
    { phase: '02 / Build Engine', title: 'Content & SEO', target: 'Next 100 Users', actions: ['Publish 5 bottom-of-funnel posts', 'Set up automated email drip', 'Launch on Product Hunt'], metric: 'Organic Traffic' },
    { phase: '03 / Scale', title: 'Paid & Partnerships', target: '1000+ Users', actions: ['Test LinkedIn Ads ($50/day)', 'Recruit 5 affiliate partners', 'Hire first SDR'], metric: 'CAC : LTV Ratio' },
];

const CAC_METRICS = [
    { label: 'Target CAC', value: '₹1,500', status: 'optimal' },
    { label: 'Estimated LTV', value: '₹12,000', status: 'optimal' },
    { label: 'LTV:CAC Ratio', value: '8.0x', status: 'optimal', note: 'Exceptional (Target is 3x)' },
    { label: 'Payback Period', value: '4 Months', status: 'warning', note: 'Target is < 12 months' },
];

const gtmColor = (s: number) => s >= 80 ? '#8B5CF6' : s >= 60 ? '#10B981' : s >= 40 ? '#F59E0B' : '#EF4444';
const gtmBg = (s: number) => s >= 80 ? 'rgba(139,92,246,0.1)' : s >= 60 ? 'rgba(16,185,129,0.1)' : s >= 40 ? 'rgba(245,158,11,0.1)' : 'rgba(239,68,68,0.1)';

const LEGAL_FLAGS = [
    { severity: 'critical', color: '#EF4444', title: 'Data Privacy Compliance', text: 'User data collection requires DPDP Act 2023 consent mechanisms and a Privacy Notice — not optional in India.' },
    { severity: 'critical', color: '#EF4444', title: 'Terms of Service Missing', text: 'No ToS means zero legal protection against misuse, data disputes, or liability claims from users.' },
    { severity: 'high', color: '#F97316', title: 'IP Ownership Unclear', text: 'If AI-generated outputs are part of the product, copyright ownership of those outputs is legally ambiguous in India.' },
    { severity: 'high', color: '#F97316', title: 'Regulatory Filing (Fintech)', text: 'If payments are facilitated, RBI NBFC / Payment Aggregator license may be required. Non-compliance carries heavy penalties.' },
    { severity: 'medium', color: '#F59E0B', title: 'SaaS Contract Gaps', text: 'B2B SaaS requires NDAs, MSAs, and DPAs with enterprise clients. Absence causes deal friction.' },
    { severity: 'medium', color: '#F59E0B', title: 'Employment / Contractor Agreements', text: 'Contractors must have IP assignment clauses. Missing clauses create ownership disputes at funding.' },
];

const COMPLIANCE_INDIA = [
    { item: 'DPDP Act 2023 — Data Privacy Notice', status: 'missing', risk: 'critical' },
    { item: 'IT Act 2000 — Cybersecurity Compliance', status: 'partial', risk: 'high' },
    { item: 'GST Registration (if revenue > ₹20L)', status: 'ok', risk: 'low' },
    { item: 'Startup India DPIIT Recognition', status: 'ok', risk: 'low' },
    { item: 'MCA Company / LLP Registration', status: 'ok', risk: 'low' },
    { item: 'RBI Compliance (if payments involved)', status: 'missing', risk: 'critical' },
    { item: 'SEBI Compliance (if investor comms)', status: 'partial', risk: 'medium' },
];

const COMPLIANCE_GLOBAL = [
    { item: 'GDPR (EU users)', status: 'missing', risk: 'critical' },
    { item: 'CCPA (California users)', status: 'missing', risk: 'high' },
    { item: 'SOC 2 Type II (Enterprise SaaS)', status: 'partial', risk: 'medium' },
    { item: 'ISO 27001 (Data Security)', status: 'missing', risk: 'medium' },
    { item: 'HIPAA (if health data touched)', status: 'ok', risk: 'low' },
];

const IP_RISKS = [
    { area: 'Brand / Trademark', level: 'medium', note: 'Name not trademarked — search + file before scaling.' },
    { area: 'AI Output Copyright', level: 'high', note: 'Legally ambiguous in India and globally — document policy.' },
    { area: 'Open Source Licenses', level: 'low', note: 'Dependency audit recommended quarterly.' },
    { area: 'Trade Secrets / Code', level: 'low', note: 'NDA with all contractors and employees in place.' },
    { area: 'Domain & Social Handles', level: 'low', note: 'Core domain secured. Social handles registered.' },
    { area: 'Patent (if novel tech)', level: 'medium', note: 'File provisional patent if core algorithm is novel.' },
];

const LEGAL_CHECKLIST = [
    { item: 'Privacy Policy published on website', done: false },
    { item: 'Terms of Service / Terms of Use', done: false },
    { item: 'Cookie consent banner implemented', done: false },
    { item: 'Founder IP assignment agreements', done: true },
    { item: 'Company incorporation completed', done: true },
    { item: 'Contractor NDA + IP clauses signed', done: false },
    { item: 'Data Processing Agreement (DPA) template', done: false },
    { item: 'DPDP Act consent mechanism built', done: false },
];

const sevColor = (s: string) => s === 'critical' ? '#EF4444' : s === 'high' ? '#F97316' : s === 'medium' ? '#F59E0B' : '#22C55E';
const sevBg = (s: string) => s === 'critical' ? 'rgba(239,68,68,0.07)' : s === 'high' ? 'rgba(249,115,22,0.07)' : s === 'medium' ? 'rgba(245,158,11,0.07)' : 'rgba(34,197,94,0.07)';
const statusIcon = (s: string) => s === 'ok' ? '✅' : s === 'partial' ? '⚠️' : '❌';

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


                {/* ── Legal & Compliance Agent Card ── */}
                <div id="legal" style={{ background: 'rgba(255,255,255,0.62)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.78)', borderTop: '3px solid #EF4444', borderRadius: '1.25rem', boxShadow: '0 8px 32px rgba(239,68,68,0.08)', overflow: 'hidden' }}>

                    {/* Card Header */}
                    <div style={{ padding: '1.5rem 1.75rem', borderBottom: '1px solid rgba(254,226,226,0.6)', background: 'linear-gradient(135deg, rgba(254,242,242,0.6) 0%, rgba(255,255,255,0.4) 100%)', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                            <div style={{ width: 40, height: 40, borderRadius: '0.75rem', background: 'rgba(239,68,68,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Scale size={20} color="#EF4444" /></div>
                            <div>
                                <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '1.1rem', color: '#0B1220' }}>Legal & Compliance Agent</div>
                                <div style={{ fontSize: '0.8rem', color: '#64748B', fontStyle: 'italic' }}>"Will this cause legal trouble later?"</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                            <div style={{ position: 'relative', width: 72, height: 72 }}>
                                <ScoreRing score={38} color="#EF4444" size={72} />
                                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.35rem', color: '#EF4444' }}>38</span>
                                    <span style={{ fontSize: '0.6rem', color: '#94A3B8' }}>/100</span>
                                </div>
                            </div>
                            <div>
                                <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', color: '#EF4444', borderRadius: '2rem', padding: '0.25rem 0.75rem', fontSize: '0.78rem', fontWeight: 700, marginBottom: '0.35rem', textAlign: 'center' }}>High Legal Risk</div>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    {[{ l: 'Data Privacy', s: 12, c: '#EF4444' }, { l: 'IP Risk', s: 55, c: '#F97316' }, { l: 'Compliance', s: 40, c: '#F59E0B' }].map(m => (
                                        <div key={m.l} style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(254,226,226,0.8)', borderRadius: '0.5rem', padding: '0.4rem 0.5rem', textAlign: 'center' }}>
                                            <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.9rem', color: m.c }}>{m.s}</div>
                                            <div style={{ fontSize: '0.62rem', color: '#94A3B8' }}>{m.l}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Critical Warning */}
                    <div style={{ margin: '1.25rem 1.75rem 0', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderLeft: '3px solid #EF4444', borderRadius: '0 0.625rem 0.625rem 0', padding: '0.875rem 1.25rem', display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                        <ShieldAlert size={16} color="#EF4444" style={{ flexShrink: 0, marginTop: 2 }} />
                        <span style={{ fontFamily: 'Sora', fontWeight: 600, fontSize: '0.9rem', color: '#7F1D1D' }}>User data collection requires DPDP Act 2023 consent and a Privacy Notice — non-compliance is a critical legal blocker before launch.</span>
                    </div>

                    <div style={{ padding: '1.25rem 1.75rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                        {/* Legal Risk Flags */}
                        <div style={{ background: 'rgba(254,242,242,0.4)', border: '1px solid rgba(239,68,68,0.12)', borderRadius: '0.875rem', padding: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.875rem' }}>
                                <Gavel size={14} color="#EF4444" />
                                <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Legal Risk Flags</span>
                                <span style={{ marginLeft: 'auto', background: 'rgba(239,68,68,0.1)', color: '#EF4444', borderRadius: '2rem', padding: '0.1rem 0.625rem', fontSize: '0.7rem', fontWeight: 700 }}>{LEGAL_FLAGS.filter(f => f.severity === 'critical').length} Critical</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {LEGAL_FLAGS.map((flag, i) => (
                                    <div key={i} style={{ background: sevBg(flag.severity), border: `1px solid ${sevColor(flag.severity)}20`, borderLeft: `3px solid ${sevColor(flag.severity)}`, borderRadius: '0 0.625rem 0.625rem 0', padding: '0.75rem 1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                            <span style={{ background: `${sevColor(flag.severity)}15`, color: sevColor(flag.severity), borderRadius: '2rem', padding: '0.1rem 0.5rem', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase' }}>{flag.severity}</span>
                                            <span style={{ fontFamily: 'Sora', fontWeight: 600, fontSize: '0.82rem', color: '#1E293B' }}>{flag.title}</span>
                                        </div>
                                        <div style={{ fontSize: '0.78rem', color: '#475569', lineHeight: 1.5 }}>{flag.text}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Compliance Checklists */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>

                            {/* India Compliance */}
                            <div style={{ background: 'rgba(254,242,242,0.4)', border: '1px solid rgba(239,68,68,0.12)', borderRadius: '0.875rem', overflow: 'hidden' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.875rem 1rem', borderBottom: '1px solid rgba(254,226,226,0.5)', background: 'rgba(254,226,226,0.2)' }}>
                                    <span style={{ fontSize: '0.9rem' }}>🇮🇳</span>
                                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>India Compliance</span>
                                </div>
                                {COMPLIANCE_INDIA.map((row, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.5rem 1rem', background: i % 2 === 0 ? 'rgba(255,255,255,0.3)' : 'transparent', borderBottom: '1px solid rgba(254,226,226,0.3)' }}>
                                        <span style={{ fontSize: '0.85rem', flexShrink: 0 }}>{statusIcon(row.status)}</span>
                                        <span style={{ fontSize: '0.78rem', color: '#1E293B', flex: 1, lineHeight: 1.4 }}>{row.item}</span>
                                        <span style={{ background: `${sevColor(row.risk)}12`, color: sevColor(row.risk), borderRadius: '2rem', padding: '0.08rem 0.45rem', fontSize: '0.62rem', fontWeight: 700, flexShrink: 0 }}>{row.risk}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Global Compliance + IP Risks */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <div style={{ background: 'rgba(254,242,242,0.4)', border: '1px solid rgba(239,68,68,0.12)', borderRadius: '0.875rem', overflow: 'hidden' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.75rem 1rem', borderBottom: '1px solid rgba(254,226,226,0.5)', background: 'rgba(254,226,226,0.2)' }}>
                                        <Globe size={13} color="#EF4444" />
                                        <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.82rem', color: '#0B1220' }}>Global Compliance</span>
                                    </div>
                                    {COMPLIANCE_GLOBAL.map((row, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.45rem 1rem', background: i % 2 === 0 ? 'rgba(255,255,255,0.3)' : 'transparent', borderBottom: i < COMPLIANCE_GLOBAL.length - 1 ? '1px solid rgba(254,226,226,0.3)' : 'none' }}>
                                            <span style={{ fontSize: '0.8rem', flexShrink: 0 }}>{statusIcon(row.status)}</span>
                                            <span style={{ fontSize: '0.75rem', color: '#1E293B', flex: 1, lineHeight: 1.3 }}>{row.item}</span>
                                            <span style={{ background: `${sevColor(row.risk)}12`, color: sevColor(row.risk), borderRadius: '2rem', padding: '0.06rem 0.4rem', fontSize: '0.6rem', fontWeight: 700, flexShrink: 0 }}>{row.risk}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* IP Risk */}
                                <div style={{ background: 'rgba(254,242,242,0.4)', border: '1px solid rgba(239,68,68,0.12)', borderRadius: '0.875rem', overflow: 'hidden' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.75rem 1rem', borderBottom: '1px solid rgba(254,226,226,0.5)', background: 'rgba(254,226,226,0.2)' }}>
                                        <Shield size={13} color="#EF4444" />
                                        <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.82rem', color: '#0B1220' }}>IP Risk Assessment</span>
                                    </div>
                                    {IP_RISKS.map((row, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.45rem 1rem', background: i % 2 === 0 ? 'rgba(255,255,255,0.3)' : 'transparent', borderBottom: i < IP_RISKS.length - 1 ? '1px solid rgba(254,226,226,0.3)' : 'none' }}>
                                            <span style={{ width: 7, height: 7, borderRadius: '50%', background: sevColor(row.level), flexShrink: 0 }} />
                                            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#1E293B', minWidth: 130 }}>{row.area}</span>
                                            <span style={{ fontSize: '0.7rem', color: '#64748B', flex: 1, lineHeight: 1.3 }}>{row.note}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Compliance Checklist + Actions */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>

                            {/* Legal Checklist */}
                            <div style={{ background: 'rgba(254,242,242,0.4)', border: '1px solid rgba(239,68,68,0.12)', borderRadius: '0.875rem', padding: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.875rem' }}>
                                    <FileText size={14} color="#EF4444" />
                                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Legal Compliance Checklist</span>
                                    <span style={{ marginLeft: 'auto', fontFamily: 'monospace', fontWeight: 700, fontSize: '0.8rem', color: '#EF4444' }}>{LEGAL_CHECKLIST.filter(i => i.done).length}/{LEGAL_CHECKLIST.length}</span>
                                </div>
                                <div style={{ height: 6, background: '#E2E8F0', borderRadius: 3, marginBottom: '0.75rem' }}>
                                    <div style={{ width: `${(LEGAL_CHECKLIST.filter(i => i.done).length / LEGAL_CHECKLIST.length) * 100}%`, height: '100%', borderRadius: 3, background: 'linear-gradient(90deg,#EF4444,#F97316)' }} />
                                </div>
                                {LEGAL_CHECKLIST.map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.45rem 0', borderBottom: i < LEGAL_CHECKLIST.length - 1 ? '1px solid rgba(254,226,226,0.4)' : 'none' }}>
                                        {item.done
                                            ? <CheckCircle size={14} color="#22C55E" style={{ flexShrink: 0 }} />
                                            : <XCircle size={14} color="#EF4444" style={{ flexShrink: 0 }} />}
                                        <span style={{ fontSize: '0.8rem', color: item.done ? '#16A34A' : '#1E293B', textDecoration: item.done ? 'line-through' : 'none', opacity: item.done ? 0.7 : 1 }}>{item.item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Priority Actions */}
                            <div style={{ background: '#0F1A2E', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '0.875rem', padding: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.875rem' }}>
                                    <Eye size={14} color="#EF4444" />
                                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#E2E8F0' }}>Priority Legal Actions</span>
                                </div>
                                {[
                                    { pri: 'Do Now', c: '#EF4444', bg: 'rgba(239,68,68,0.12)', title: 'Draft and publish Privacy Policy + Terms of Service', impact: 'Removes biggest legal liability' },
                                    { pri: 'Do Now', c: '#EF4444', bg: 'rgba(239,68,68,0.12)', title: 'Implement DPDP Act 2023 consent banner', impact: 'Mandatory for Indian users' },
                                    { pri: 'This Week', c: '#F97316', bg: 'rgba(249,115,22,0.12)', title: 'Draft contractor NDA with IP assignment clause', impact: 'Protects IP at funding' },
                                    { pri: 'This Week', c: '#F97316', bg: 'rgba(249,115,22,0.12)', title: 'File trademark application for brand name', impact: 'Prevents brand conflicts at scale' },
                                    { pri: 'Next Sprint', c: '#F59E0B', bg: 'rgba(245,158,11,0.1)', title: 'Conduct open-source license audit on all dependencies', impact: 'Avoids GPL copyleft traps' },
                                    { pri: 'Next Sprint', c: '#F59E0B', bg: 'rgba(245,158,11,0.1)', title: 'Prepare GDPR-ready consent flows for EU expansion', impact: 'Required before global launch' },
                                ].map((a, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '0.5rem', padding: '0.6rem 0.75rem', marginBottom: '0.45rem' }}>
                                        <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(239,68,68,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Sora', fontWeight: 700, fontSize: '0.7rem', color: '#EF4444', flexShrink: 0 }}>{i + 1}</div>
                                        <div style={{ flex: 1 }}>
                                            <span style={{ background: a.bg, color: a.c, borderRadius: '2rem', padding: '0.08rem 0.5rem', fontSize: '0.65rem', fontWeight: 600 }}>{a.pri}</span>
                                            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#E2E8F0', marginTop: '0.2rem', lineHeight: 1.35 }}>{a.title}</div>
                                            <div style={{ fontSize: '0.7rem', color: '#22C55E' }}>↑ {a.impact}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>


                {/* ── GTM Strategy Agent Card ── */}
                <div id="gtm" style={{ background: 'rgba(255,255,255,0.62)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.78)', borderTop: '3px solid #8B5CF6', borderRadius: '1.25rem', boxShadow: '0 8px 32px rgba(139,92,246,0.08)', overflow: 'hidden' }}>

                    {/* Card Header */}
                    <div style={{ padding: '1.5rem 1.75rem', borderBottom: '1px solid rgba(23ede9,233,245,0.6)', background: 'linear-gradient(135deg, rgba(2ede3,233,243,0.6) 0%, rgba(255,255,255,0.4) 100%)', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                            <div style={{ width: 40, height: 40, borderRadius: '0.75rem', background: 'rgba(139,92,246,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Target size={20} color="#8B5CF6" /></div>
                            <div>
                                <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '1.1rem', color: '#0B1220' }}>Go-To-Market Agent</div>
                                <div style={{ fontSize: '0.8rem', color: '#64748B', fontStyle: 'italic' }}>"How will this startup acquire customers?"</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                            <div style={{ position: 'relative', width: 72, height: 72 }}>
                                <ScoreRing score={82} color="#8B5CF6" size={72} />
                                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.35rem', color: '#8B5CF6' }}>82</span>
                                    <span style={{ fontSize: '0.6rem', color: '#94A3B8' }}>/100</span>
                                </div>
                            </div>
                            <div>
                                <div style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)', color: '#8B5CF6', borderRadius: '2rem', padding: '0.25rem 0.75rem', fontSize: '0.78rem', fontWeight: 700, marginBottom: '0.35rem', textAlign: 'center' }}>Strong GTM Fit</div>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    {[{ l: 'Channels', s: 85, c: '#8B5CF6' }, { l: 'Unit Economics', s: 90, c: '#10B981' }, { l: 'Virality', s: 72, c: '#F59E0B' }].map(m => (
                                        <div key={m.l} style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(237,233,254,0.8)', borderRadius: '0.5rem', padding: '0.4rem 0.5rem', textAlign: 'center' }}>
                                            <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.9rem', color: m.c }}>{m.s}</div>
                                            <div style={{ fontSize: '0.62rem', color: '#94A3B8' }}>{m.l}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Verdict */}
                    <div style={{ margin: '1.25rem 1.75rem 0', background: 'rgba(139,92,246,0.07)', border: '1px solid rgba(139,92,246,0.18)', borderLeft: '3px solid #8B5CF6', borderRadius: '0 0.625rem 0.625rem 0', padding: '0.875rem 1.25rem', fontFamily: 'Sora', fontWeight: 600, fontSize: '0.9rem', color: '#0B1220' }}>
                        "PLG (Product-Led Growth) combined with SEO is the strongest acquisition path. Avoid paid ads early due to low initial LTV."
                    </div>

                    <div style={{ padding: '1.25rem 1.75rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                        {/* Unit Economics + Distribution */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '1.25rem' }}>

                            {/* CAC / Unit Economics */}
                            <div style={{ background: 'rgba(237,233,254,0.4)', border: '1px solid rgba(139,92,246,0.12)', borderRadius: '0.875rem', padding: '1.25rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
                                    <Calculator size={14} color="#8B5CF6" />
                                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>CAC & Unit Economics</span>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.625rem', marginBottom: '1rem' }}>
                                    {CAC_METRICS.slice(0, 2).map((m, i) => (
                                        <div key={i} style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.5)', borderRadius: '0.5rem', padding: '0.75rem', textAlign: 'center' }}>
                                            <div style={{ fontSize: '0.65rem', color: '#64748B', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{m.label}</div>
                                            <div style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.1rem', color: '#0B1220' }}>{m.value}</div>
                                        </div>
                                    ))}
                                </div>
                                {CAC_METRICS.slice(2).map((m, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.625rem 0', borderTop: '1px solid rgba(139,92,246,0.15)' }}>
                                        <div>
                                            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1E293B' }}>{m.label}</div>
                                            <div style={{ fontSize: '0.65rem', color: '#64748B' }}>{m.note}</div>
                                        </div>
                                        <span style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1rem', color: m.status === 'optimal' ? '#10B981' : '#F59E0B' }}>{m.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Channel Feasibility */}
                            <div style={{ background: 'rgba(255,255,255,0.4)', border: '1px solid rgba(139,92,246,0.12)', borderRadius: '0.875rem', padding: '1.25rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
                                    <Megaphone size={14} color="#8B5CF6" />
                                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Distribution Channels</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                                    {CHANNELS.map((ch, i) => {
                                        const Icon = ch.icon;
                                        return (
                                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', padding: '0.625rem', background: gtmBg(ch.score), border: `1px solid ${gtmColor(ch.score)}20`, borderRadius: '0.625rem' }}>
                                                <div style={{ width: 32, height: 32, borderRadius: '0.5rem', background: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon size={16} color={gtmColor(ch.score)} /></div>
                                                <div style={{ flex: 1 }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                                                        <span style={{ fontFamily: 'Sora', fontWeight: 600, fontSize: '0.8rem', color: '#0B1220' }}>{ch.name}</span>
                                                        <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '0.75rem', color: gtmColor(ch.score) }}>{ch.score}/100</span>
                                                    </div>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                        <span style={{ fontSize: '0.65rem', color: '#64748B', background: 'rgba(255,255,255,0.5)', padding: '0.1rem 0.4rem', borderRadius: 4 }}>{ch.cost}</span>
                                                        <span style={{ fontSize: '0.65rem', color: '#64748B', background: 'rgba(255,255,255,0.5)', padding: '0.1rem 0.4rem', borderRadius: 4 }}>{ch.speed}</span>
                                                        <span style={{ fontSize: '0.68rem', color: '#475569', flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>— {ch.note}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                        </div>

                        {/* Sales Complexity + Roadmap */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.25rem' }}>

                            {/* Sales Complexity */}
                            <div style={{ background: '#0F1A2E', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '0.875rem', padding: '1.25rem', color: '#E2E8F0', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
                                    <Activity size={14} color="#8B5CF6" />
                                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#E2E8F0' }}>Sales Complexity</span>
                                </div>
                                <div style={{ textAlign: 'center', padding: '1rem 0', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.5rem' }}>
                                    <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sales Motion</div>
                                    <div style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.25rem', color: '#8B5CF6' }}>Self-Serve / PLG</div>
                                    <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', margin: '0.5rem 0' }} />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                                        <span style={{ color: '#94A3B8' }}>Sales Cycle:</span>
                                        <span style={{ color: '#E2E8F0', fontWeight: 600 }}>1 - 7 Days</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                                        <span style={{ color: '#94A3B8' }}>Decision Maker:</span>
                                        <span style={{ color: '#E2E8F0', fontWeight: 600 }}>End User (B2C)</span>
                                    </div>
                                </div>
                            </div>

                            {/* Acquisition Roadmap */}
                            <div style={{ background: 'rgba(237,233,254,0.4)', border: '1px solid rgba(139,92,246,0.12)', borderRadius: '0.875rem', padding: '1.25rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
                                    <Target size={14} color="#8B5CF6" />
                                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Customer Acquisition Roadmap</span>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.875rem' }}>
                                    {GTM_PHASES.map((phase, i) => (
                                        <div key={i} style={{ background: 'rgba(255,255,255,0.6)', border: `1px solid rgba(139,92,246,0.2)`, borderTop: `3px solid #8B5CF6`, borderRadius: '0.625rem', padding: '0.875rem' }}>
                                            <div style={{ fontSize: '0.65rem', color: '#8B5CF6', fontWeight: 700, marginBottom: '0.2rem' }}>{phase.phase}</div>
                                            <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220', marginBottom: '0.5rem' }}>{phase.title}</div>
                                            <div style={{ background: 'rgba(139,92,246,0.1)', color: '#6D28D9', fontSize: '0.7rem', fontWeight: 600, padding: '0.2rem 0.5rem', borderRadius: 4, display: 'inline-block', marginBottom: '0.75rem' }}>Target: {phase.target}</div>
                                            <ul style={{ margin: 0, paddingLeft: '1rem', color: '#475569', fontSize: '0.72rem', display: 'flex', flexDirection: 'column', gap: '0.3rem', marginBottom: '0.75rem' }}>
                                                {phase.actions.map((act, j) => <li key={j}>{act}</li>)}
                                            </ul>
                                            <div style={{ fontSize: '0.65rem', color: '#94A3B8', borderTop: '1px solid rgba(139,92,246,0.15)', paddingTop: '0.5rem' }}>Key Metric: <span style={{ color: '#0B1220', fontWeight: 600 }}>{phase.metric}</span></div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>


                {/* ── Unit Economics & Financial Modeling Agent Card ── */}
                <div id="unit-economics" style={{ background: 'rgba(255,255,255,0.62)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.78)', borderTop: '3px solid #10B981', borderRadius: '1.25rem', boxShadow: '0 8px 32px rgba(16,185,129,0.08)', overflow: 'hidden' }}>

                    {/* Card Header */}
                    <div style={{ padding: '1.5rem 1.75rem', borderBottom: '1px solid rgba(209,250,229,0.6)', background: 'linear-gradient(135deg, rgba(209,250,229,0.5) 0%, rgba(255,255,255,0.4) 100%)', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                            <div style={{ width: 40, height: 40, borderRadius: '0.75rem', background: 'rgba(16,185,129,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><DollarSign size={20} color="#10B981" /></div>
                            <div>
                                <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '1.1rem', color: '#0B1220' }}>Unit Economics Agent</div>
                                <div style={{ fontSize: '0.8rem', color: '#64748B', fontStyle: 'italic' }}>"Does this business make financial sense?"</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                            <div style={{ position: 'relative', width: 72, height: 72 }}>
                                <ScoreRing score={88} color="#10B981" size={72} />
                                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.35rem', color: '#10B981' }}>88</span>
                                    <span style={{ fontSize: '0.6rem', color: '#94A3B8' }}>/100</span>
                                </div>
                            </div>
                            <div>
                                <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', color: '#10B981', borderRadius: '2rem', padding: '0.25rem 0.75rem', fontSize: '0.78rem', fontWeight: 700, marginBottom: '0.35rem', textAlign: 'center' }}>Highly Sustainable</div>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    {[{ l: 'Gross Margin', s: 92, c: '#10B981' }, { l: 'LTV/CAC', s: 85, c: '#10B981' }, { l: 'Burn Rate', s: 78, c: '#F59E0B' }].map(m => (
                                        <div key={m.l} style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(209,250,229,0.8)', borderRadius: '0.5rem', padding: '0.4rem 0.5rem', textAlign: 'center' }}>
                                            <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.9rem', color: m.c }}>{m.s}</div>
                                            <div style={{ fontSize: '0.62rem', color: '#94A3B8' }}>{m.l}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Verdict */}
                    <div style={{ margin: '1.25rem 1.75rem 0', background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.18)', borderLeft: '3px solid #10B981', borderRadius: '0 0.625rem 0.625rem 0', padding: '0.875rem 1.25rem', fontFamily: 'Sora', fontWeight: 600, fontSize: '0.9rem', color: '#0B1220' }}>
                        "Unit economics are VC-grade. 84% gross margins allow for aggressive growth spending. Break-even path is clear within 12 months."
                    </div>

                    <div style={{ padding: '1.25rem 1.75rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                        {/* Pricing vs Cost Structure & Capital Efficiency */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1.25rem' }}>

                            {/* Pricing vs Cost Structure */}
                            <div style={{ background: 'rgba(236,253,245,0.4)', border: '1px solid rgba(16,185,129,0.15)', borderRadius: '0.875rem', padding: '1.25rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
                                    <PieChart size={14} color="#10B981" />
                                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Pricing vs Cost Structure</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                                    <div style={{ flex: 1, background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.8)', borderRadius: '0.75rem', padding: '1rem', textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.7rem', color: '#64748B', textTransform: 'uppercase', marginBottom: '0.3rem' }}>COGS Engine</div>
                                        <div style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.25rem', color: '#0B1220' }}>16%</div>
                                        <div style={{ fontSize: '0.65rem', color: '#475569', marginTop: '0.2rem' }}>Hosting & APIs</div>
                                    </div>
                                    <div style={{ width: 1, height: 40, background: 'rgba(16,185,129,0.2)' }} />
                                    <div style={{ flex: 1, background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '0.75rem', padding: '1rem', textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.7rem', color: '#64748B', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Gross Margin</div>
                                        <div style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.25rem', color: '#10B981' }}>84%</div>
                                        <div style={{ fontSize: '0.65rem', color: '#10B981', marginTop: '0.2rem' }}>VC Target: &gt;80%</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                                    {UNIT_ECONOMICS.map((u, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0', borderTop: i === 0 ? 'none' : '1px solid rgba(16,185,129,0.1)' }}>
                                            <div>
                                                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#1E293B' }}>{u.metric}</div>
                                                <div style={{ fontSize: '0.65rem', color: '#64748B' }}>{u.benchmark}</div>
                                            </div>
                                            <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.9rem', color: u.color }}>{u.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Capital Efficiency / Burn */}
                            <div style={{ background: '#0F1A2E', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '0.875rem', padding: '1.25rem', color: '#E2E8F0', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
                                    <Coins size={14} color="#10B981" />
                                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#E2E8F0' }}>Burn & Capital Efficiency</span>
                                </div>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                                    <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '0.625rem', padding: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                                        <div style={{ fontSize: '0.7rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Monthly Burn Rate</div>
                                        <div style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.5rem', color: '#F59E0B', margin: '0.25rem 0' }}>₹4.2L / mo</div>
                                        <div style={{ fontSize: '0.7rem', color: '#CBD5E1' }}>Primarily founders' draw & servers</div>
                                    </div>
                                    {CAP_EFFICIENCY.map((c, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.2rem 0' }}>
                                            <div>
                                                <div style={{ fontSize: '0.78rem', color: '#E2E8F0' }}>{c.label}</div>
                                                <div style={{ fontSize: '0.65rem', color: '#64748B' }}>{c.note}</div>
                                            </div>
                                            <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.9rem', color: c.status === 'optimal' ? '#10B981' : '#F59E0B' }}>{c.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Profitability Timeline */}
                        <div style={{ background: 'rgba(236,253,245,0.3)', border: '1px solid rgba(16,185,129,0.12)', borderRadius: '0.875rem', padding: '1.25rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <BarChart2 size={14} color="#10B981" />
                                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Profitability Timeline & Break-Even</span>
                                </div>
                                <div style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', borderRadius: '2rem', padding: '0.2rem 0.6rem', fontSize: '0.7rem', fontWeight: 700 }}>Target: Q1 2026</div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1.5rem' }}>
                                {PROFIT_TIMELINE.map((p, i) => (
                                    <div key={i} style={{ position: 'relative', background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(16,185,129,0.15)', borderTop: `3px solid ${p.flow.startsWith('+') ? '#10B981' : '#F59E0B'}`, borderRadius: '0.75rem', padding: '1.25rem 1rem 1rem' }}>
                                        <div style={{ position: 'absolute', top: -12, left: 16, background: '#0F1A2E', color: '#E2E8F0', padding: '0.2rem 0.6rem', borderRadius: 4, fontFamily: 'monospace', fontWeight: 700, fontSize: '0.7rem' }}>{p.quarter}</div>
                                        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569', marginBottom: '1rem' }}>{p.phase}</div>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                                                <span style={{ color: '#64748B' }}>Revenue</span>
                                                <span style={{ fontFamily: 'monospace', fontWeight: 600, color: '#0B1220' }}>{p.rev}</span>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                                                <span style={{ color: '#64748B' }}>Fixed Costs</span>
                                                <span style={{ fontFamily: 'monospace', fontWeight: 600, color: '#EF4444' }}>{p.cost}</span>
                                            </div>
                                            <div style={{ height: 1, background: 'rgba(16,185,129,0.15)', margin: '0.2rem 0' }} />
                                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                                                <span style={{ color: '#0B1220', fontWeight: 600 }}>Net Cash Flow</span>
                                                <span style={{ fontFamily: 'Sora', fontWeight: 700, color: p.flow.startsWith('+') ? '#10B981' : '#F59E0B' }}>{p.flow}</span>
                                            </div>
                                        </div>

                                        {i < PROFIT_TIMELINE.length - 1 && (
                                            <ArrowRight size={16} color="#94A3B8" style={{ position: 'absolute', right: -16, top: '50%', transform: 'translateY(-50%)', zIndex: 10 }} />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>


                {/* ── Scalability & Infrastructure Agent Card ── */}
                <div id="scalability" style={{ background: 'rgba(255,255,255,0.62)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.78)', borderTop: '3px solid #6366F1', borderRadius: '1.25rem', boxShadow: '0 8px 32px rgba(99,102,241,0.08)', overflow: 'hidden' }}>

                    {/* Card Header */}
                    <div style={{ padding: '1.5rem 1.75rem', borderBottom: '1px solid rgba(224,231,255,0.6)', background: 'linear-gradient(135deg, rgba(224,231,255,0.5) 0%, rgba(255,255,255,0.4) 100%)', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                            <div style={{ width: 40, height: 40, borderRadius: '0.75rem', background: 'rgba(99,102,241,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Network size={20} color="#6366F1" /></div>
                            <div>
                                <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '1.1rem', color: '#0B1220' }}>Scalability Agent</div>
                                <div style={{ fontSize: '0.8rem', color: '#64748B', fontStyle: 'italic' }}>"Can this scale to 10x or 100x?"</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                            <div style={{ position: 'relative', width: 72, height: 72 }}>
                                <ScoreRing score={64} color="#6366F1" size={72} />
                                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.35rem', color: '#6366F1' }}>64</span>
                                    <span style={{ fontSize: '0.6rem', color: '#94A3B8' }}>/100</span>
                                </div>
                            </div>
                            <div>
                                <div style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)', color: '#D97706', borderRadius: '2rem', padding: '0.25rem 0.75rem', fontSize: '0.78rem', fontWeight: 700, marginBottom: '0.35rem', textAlign: 'center' }}>Ops Bottlenecked</div>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    {[{ l: 'Tech Infra', s: 85, c: '#10B981' }, { l: 'Operations', s: 42, c: '#EF4444' }, { l: 'Dependencies', s: 65, c: '#F59E0B' }].map(m => (
                                        <div key={m.l} style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(224,231,255,0.8)', borderRadius: '0.5rem', padding: '0.4rem 0.5rem', textAlign: 'center' }}>
                                            <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.9rem', color: m.c }}>{m.s}</div>
                                            <div style={{ fontSize: '0.62rem', color: '#94A3B8' }}>{m.l}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Verdict */}
                    <div style={{ margin: '1.25rem 1.75rem 0', background: 'rgba(99,102,241,0.07)', border: '1px solid rgba(99,102,241,0.18)', borderLeft: '3px solid #6366F1', borderRadius: '0 0.625rem 0.625rem 0', padding: '0.875rem 1.25rem', fontFamily: 'Sora', fontWeight: 600, fontSize: '0.9rem', color: '#0B1220' }}>
                        "Codebase and servers will handle 10x growth easily, but manual customer onboarding processes will break long before that."
                    </div>

                    <div style={{ padding: '1.25rem 1.75rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                        {/* Scale Limits mapping */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>

                            {/* Technical Infrastructure */}
                            <div style={{ background: 'rgba(238,242,255,0.4)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '0.875rem', padding: '1.25rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        <Server size={14} color="#6366F1" />
                                        <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Infrastructure Scale Profile</span>
                                    </div>
                                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10B981' }}>10x Ready</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                                    {INFRA_SCALING.map((item, i) => {
                                        const Icon = item.icon;
                                        return (
                                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', background: 'rgba(255,255,255,0.6)', border: `1px solid ${scaColor(item.status)}30`, borderRadius: '0.625rem' }}>
                                                <div style={{ background: scaBg(item.status), borderRadius: '0.3rem', padding: '0.3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                    <Icon size={14} color={scaColor(item.status)} />
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                                                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1E293B' }}>{item.area}</span>
                                                        {item.status === 'danger' && <span style={{ background: '#FEF2F2', color: '#EF4444', fontSize: '0.6rem', padding: '0.1rem 0.3rem', borderRadius: 4, fontWeight: 600 }}>Action Required</span>}
                                                    </div>
                                                    <div style={{ fontSize: '0.7rem', color: '#64748B', lineHeight: 1.3 }}>{item.note}</div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Operations Bottlenecks */}
                            <div style={{ background: '#0F1A2E', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '0.875rem', padding: '1.25rem', color: '#E2E8F0' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        <Users size={14} color="#818CF8" />
                                        <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#E2E8F0' }}>Operational Bottlenecks</span>
                                    </div>
                                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#EF4444' }}>High Friction</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                    {OPS_BOTTLENECKS.map((op, i) => (
                                        <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', padding: '0.75rem' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                                                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#E2E8F0' }}>{op.process}</span>
                                                <span style={{ background: op.type === 'Manual' ? 'rgba(239,68,68,0.2)' : op.type === 'Hybrid' ? 'rgba(245,158,11,0.2)' : 'rgba(16,185,129,0.2)', color: op.type === 'Manual' ? '#FCA5A5' : op.type === 'Hybrid' ? '#FCD34D' : '#6EE7B7', fontSize: '0.65rem', padding: '0.1rem 0.4rem', borderRadius: 4, fontWeight: 600 }}>{op.type}</span>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#94A3B8' }}>
                                                <span>Cost: {op.time}</span>
                                                <span style={{ color: op.scale_limit === 'Unlimited' ? '#6EE7B7' : '#FCA5A5' }}>Cap: {op.scale_limit}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ marginTop: '1rem', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '0.5rem', padding: '0.6rem', fontSize: '0.75rem', color: '#FCA5A5', display: 'flex', gap: '0.5rem' }}>
                                    <AlertTriangle size={14} style={{ flexShrink: 0, marginTop: 2 }} />
                                    <span>Manual onboarding requires a self-serve flow before reaching 100 users/mo, otherwise growth will physically halt.</span>
                                </div>
                            </div>
                        </div>

                        {/* Dependency Risks */}
                        <div style={{ background: 'rgba(238,242,255,0.3)', border: '1px solid rgba(99,102,241,0.12)', borderRadius: '0.875rem', padding: '1.25rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
                                <Layers size={14} color="#6366F1" />
                                <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Third-Party Dependency Risk</span>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                                {DEPENDENCIES.map((dep, i) => (
                                    <div key={i} style={{ background: 'rgba(255,255,255,0.8)', border: `1px solid ${dep.risk === 'High' ? 'rgba(239,68,68,0.3)' : 'rgba(226,232,240,0.8)'}`, borderTop: `3px solid ${dep.risk === 'High' ? '#EF4444' : '#CBD5E1'}`, borderRadius: '0.625rem', padding: '1rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#0B1220' }}>{dep.name}</span>
                                            <span style={{ fontSize: '0.65rem', fontWeight: 700, color: dep.risk === 'High' ? '#EF4444' : '#64748B', background: dep.risk === 'High' ? 'rgba(239,68,68,0.1)' : 'rgba(241,245,249,1)', padding: '0.15rem 0.5rem', borderRadius: 4 }}>{dep.risk} Risk</span>
                                        </div>
                                        <div style={{ fontSize: '0.72rem', color: '#475569', lineHeight: 1.4 }}>{dep.reason}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>


                {/* ── Impact & Sustainability Agent Card ── */}
                <div id="impact" style={{ background: 'rgba(255,255,255,0.62)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.78)', borderTop: '3px solid #059669', borderRadius: '1.25rem', boxShadow: '0 8px 32px rgba(5,150,105,0.08)', overflow: 'hidden' }}>

                    {/* Card Header */}
                    <div style={{ padding: '1.5rem 1.75rem', borderBottom: '1px solid rgba(167,243,208,0.6)', background: 'linear-gradient(135deg, rgba(167,243,208,0.5) 0%, rgba(255,255,255,0.4) 100%)', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                            <div style={{ width: 40, height: 40, borderRadius: '0.75rem', background: 'rgba(5,150,105,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Leaf size={20} color="#059669" /></div>
                            <div>
                                <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '1.1rem', color: '#0B1220' }}>Impact & Sustainability Agent</div>
                                <div style={{ fontSize: '0.8rem', color: '#64748B', fontStyle: 'italic' }}>"What is the ESG impact and social benefit?"</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                            <div style={{ position: 'relative', width: 72, height: 72 }}>
                                <ScoreRing score={82} color="#059669" size={72} />
                                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.35rem', color: '#059669' }}>82</span>
                                    <span style={{ fontSize: '0.6rem', color: '#94A3B8' }}>/100</span>
                                </div>
                            </div>
                            <div>
                                <div style={{ background: 'rgba(5,150,105,0.1)', border: '1px solid rgba(5,150,105,0.25)', color: '#059669', borderRadius: '2rem', padding: '0.25rem 0.75rem', fontSize: '0.78rem', fontWeight: 700, marginBottom: '0.35rem', textAlign: 'center' }}>Strong ESG Profile</div>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    {[{ l: 'Env', s: 85, c: '#10B981' }, { l: 'Social', s: 72, c: '#3B82F6' }, { l: 'Gov', s: 90, c: '#8B5CF6' }].map(m => (
                                        <div key={m.l} style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(167,243,208,0.8)', borderRadius: '0.5rem', padding: '0.4rem 0.5rem', textAlign: 'center', minWidth: 45 }}>
                                            <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.9rem', color: m.c }}>{m.s}</div>
                                            <div style={{ fontSize: '0.62rem', color: '#94A3B8' }}>{m.l}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Verdict */}
                    <div style={{ margin: '1.25rem 1.75rem 0', background: 'rgba(5,150,105,0.07)', border: '1px solid rgba(5,150,105,0.18)', borderLeft: '3px solid #059669', borderRadius: '0 0.625rem 0.625rem 0', padding: '0.875rem 1.25rem', fontFamily: 'Sora', fontWeight: 600, fontSize: '0.9rem', color: '#0B1220' }}>
                        "Highly aligned with sustainable innovation goals. Strong governance practices and measurable environmental benefits make it attractive to impact investors."
                    </div>

                    <div style={{ padding: '1.25rem 1.75rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                        {/* ESG Scorecard + KPIs */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1.25rem' }}>

                            {/* ESG Pillars */}
                            <div style={{ background: 'rgba(236,253,245,0.4)', border: '1px solid rgba(5,150,105,0.15)', borderRadius: '0.875rem', padding: '1.25rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
                                    <Scale size={14} color="#059669" />
                                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>ESG Pillars</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {ESG_METRICS.map((esg, i) => {
                                        const Icon = esg.icon;
                                        return (
                                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.875rem', background: 'rgba(255,255,255,0.7)', border: `1px solid ${esgColor(esg.score)}30`, borderRadius: '0.75rem' }}>
                                                <div style={{ background: esgBg(esg.score), borderRadius: '0.5rem', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Icon size={18} color={esgColor(esg.score)} />
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                                                        <span style={{ fontFamily: 'Sora', fontWeight: 600, fontSize: '0.85rem', color: '#0B1220' }}>{esg.category}</span>
                                                        <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '0.8rem', color: esgColor(esg.score) }}>{esg.score}/100</span>
                                                    </div>
                                                    <div style={{ fontSize: '0.7rem', color: '#64748B' }}>{esg.details}</div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Impact KPIs */}
                            <div style={{ background: '#0F1A2E', border: '1px solid rgba(5,150,105,0.3)', borderRadius: '0.875rem', padding: '1.25rem', color: '#E2E8F0', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
                                    <Activity size={14} color="#10B981" />
                                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#E2E8F0' }}>Real-World Impact KPIs</span>
                                </div>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.875rem' }}>
                                    {IMPACT_KPI.map((kpi, i) => (
                                        <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.625rem', padding: '0.875rem' }}>
                                            <div style={{ fontSize: '0.7rem', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{kpi.metric}</div>
                                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                                                <span style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.25rem', color: kpi.status === 'exceeded' || kpi.status === 'on-track' ? '#10B981' : '#F59E0B' }}>{kpi.value}</span>
                                                <span style={{ fontSize: '0.65rem', color: '#64748B' }}>/ {kpi.target} target</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* SDG Alignment */}
                        <div style={{ background: 'rgba(236,253,245,0.3)', border: '1px solid rgba(5,150,105,0.12)', borderRadius: '0.875rem', padding: '1.25rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
                                <Target size={14} color="#059669" />
                                <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>UN Sustainable Development Goals (SDG) Alignment</span>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                                {SDG_ALIGNMENT.map((sdg, i) => (
                                    <div key={i} style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(167,243,208,0.8)', borderTop: `3px solid #059669`, borderRadius: '0.625rem', padding: '1rem' }}>
                                        <div style={{ background: 'rgba(5,150,105,0.1)', color: '#059669', fontSize: '0.65rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: 4, display: 'inline-block', marginBottom: '0.5rem' }}>{sdg.id}</div>
                                        <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#0B1220', marginBottom: '0.75rem', height: 36 }}>{sdg.title}</div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(5,150,105,0.15)', paddingTop: '0.5rem', fontSize: '0.7rem' }}>
                                            <span style={{ color: '#64748B' }}>Impact: <span style={{ color: '#0B1220', fontWeight: 600 }}>{sdg.impact}</span></span>
                                            <span style={{ color: '#64748B' }}>Rel: <span style={{ color: '#059669', fontWeight: 600 }}>{sdg.relevance}</span></span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>


                {/* ── Supply Chain & Operations Agent Card ── */}
                <div id="supply-chain" style={{ background: 'rgba(255,255,255,0.62)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.78)', borderTop: '3px solid #D97706', borderRadius: '1.25rem', boxShadow: '0 8px 32px rgba(217,119,6,0.08)', overflow: 'hidden', marginBottom: '1.25rem' }}>

                    {/* Card Header */}
                    <div style={{ padding: '1.5rem 1.75rem', borderBottom: '1px solid rgba(253,230,138,0.6)', background: 'linear-gradient(135deg, rgba(253,230,138,0.5) 0%, rgba(255,255,255,0.4) 100%)', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                            <div style={{ width: 40, height: 40, borderRadius: '0.75rem', background: 'rgba(217,119,6,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Truck size={20} color="#D97706" /></div>
                            <div>
                                <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '1.1rem', color: '#0B1220' }}>Supply Chain & Operations Agent</div>
                                <div style={{ fontSize: '0.8rem', color: '#64748B', fontStyle: 'italic' }}>"Can they deliver this consistently?"</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                            <div style={{ position: 'relative', width: 72, height: 72 }}>
                                <ScoreRing score={58} color="#D97706" size={72} />
                                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.35rem', color: '#D97706' }}>58</span>
                                    <span style={{ fontSize: '0.6rem', color: '#94A3B8' }}>/100</span>
                                </div>
                            </div>
                            <div>
                                <div style={{ background: 'rgba(217,119,6,0.1)', border: '1px solid rgba(217,119,6,0.25)', color: '#D97706', borderRadius: '2rem', padding: '0.25rem 0.75rem', fontSize: '0.78rem', fontWeight: 700, marginBottom: '0.35rem', textAlign: 'center' }}>Fragile Supply Line</div>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    {[{ l: 'Logistics', s: 65, c: '#F59E0B' }, { l: 'Suppliers', s: 40, c: '#EF4444' }, { l: 'Cash Cycle', s: 70, c: '#3B82F6' }].map(m => (
                                        <div key={m.l} style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(253,230,138,0.8)', borderRadius: '0.5rem', padding: '0.4rem 0.5rem', textAlign: 'center', minWidth: 45 }}>
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
                        "High supplier concentration risk (80% reliant on 1 vendor). Cash cycle is healthy, but working capital is tied up in slow-moving inventory."
                    </div>

                    <div style={{ padding: '1.25rem 1.75rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>

                            {/* Supplier & Inventory Risk */}
                            <div style={{ background: 'rgba(254,243,199,0.4)', border: '1px solid rgba(245,158,11,0.15)', borderRadius: '0.875rem', padding: '1.25rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
                                    <Package size={14} color="#D97706" />
                                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Supplier & Inventory Risk</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {SUPPLY_CHAIN_RISKS.map((risk, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.875rem', background: 'rgba(255,255,255,0.7)', border: `1px solid ${scColor(risk.risk)}30`, borderRadius: '0.75rem' }}>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                                                    <span style={{ fontFamily: 'Sora', fontWeight: 600, fontSize: '0.85rem', color: '#0B1220' }}>{risk.area}</span>
                                                    <span style={{ fontSize: '0.65rem', fontWeight: 700, color: scColor(risk.risk), background: scBg(risk.risk), padding: '0.15rem 0.5rem', borderRadius: 4 }}>{risk.risk}</span>
                                                </div>
                                                <div style={{ fontSize: '0.7rem', color: '#475569', lineHeight: 1.4 }}>{risk.note}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Working Capital & Cycle */}
                            <div style={{ background: '#0F1A2E', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '0.875rem', padding: '1.25rem', color: '#E2E8F0', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
                                    <RefreshCw size={14} color="#FBBF24" />
                                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#E2E8F0' }}>Cash Conversion Cycle (CCC)</span>
                                </div>
                                <div style={{ textAlign: 'center', marginBottom: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.625rem', padding: '0.875rem' }}>
                                    <div style={{ fontSize: '0.7rem', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Net Cycle Time</div>
                                    <div style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.25rem', color: '#FBBF24' }}>72 Days</div>
                                </div>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.5rem' }}>
                                    {WORKING_CAPITAL.map((wc, i) => (
                                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.4rem 0', borderBottom: i === 2 ? 'none' : '1px solid rgba(255,255,255,0.1)' }}>
                                            <span style={{ fontSize: '0.75rem', color: '#E2E8F0' }}>{wc.metric}</span>
                                            <div style={{ textAlign: 'right' }}>
                                                <div style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '0.85rem', color: wc.status === 'optimal' ? '#10B981' : '#F59E0B' }}>{wc.value}</div>
                                                <div style={{ fontSize: '0.6rem', color: '#64748B' }}>{wc.target}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Logistics Speed */}
                        <div style={{ background: 'rgba(254,243,199,0.3)', border: '1px solid rgba(245,158,11,0.12)', borderRadius: '0.875rem', padding: '1.25rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
                                <Clock size={14} color="#D97706" />
                                <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Logistics & Lead Time Analysis</span>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                                {LOGISTICS_SPEED.map((log, i) => (
                                    <div key={i} style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(253,230,138,0.8)', borderTop: `3px solid ${log.rating === 'Fast' ? '#10B981' : log.rating === 'Average' ? '#F59E0B' : '#EF4444'}`, borderRadius: '0.625rem', padding: '1rem' }}>
                                        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569', marginBottom: '0.5rem' }}>{log.step}</div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                            <span style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.1rem', color: '#0B1220' }}>{log.time}</span>
                                            <span style={{ fontSize: '0.65rem', fontWeight: 700, color: log.rating === 'Fast' ? '#10B981' : log.rating === 'Average' ? '#F59E0B' : '#EF4444' }}>{log.rating}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* ── Data & AI Risk Agent Card ── */}
                <div id="data-ai-risk" style={{ background: 'rgba(255,255,255,0.62)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.78)', borderTop: '3px solid #F59E0B', borderRadius: '1.25rem', boxShadow: '0 8px 32px rgba(245,158,11,0.08)', overflow: 'hidden' }}>

                    {/* Card Header */}
                    <div style={{ padding: '1.5rem 1.75rem', borderBottom: '1px solid rgba(253,230,138,0.6)', background: 'linear-gradient(135deg, rgba(253,230,138,0.5) 0%, rgba(255,255,255,0.4) 100%)', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                            <div style={{ width: 40, height: 40, borderRadius: '0.75rem', background: 'rgba(245,158,11,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Fingerprint size={20} color="#F59E0B" /></div>
                            <div>
                                <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '1.1rem', color: '#0B1220' }}>Data & AI Risk Agent</div>
                                <div style={{ fontSize: '0.8rem', color: '#64748B', fontStyle: 'italic' }}>"Is the model a wrapper, or a true moat?"</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                            <div style={{ position: 'relative', width: 72, height: 72 }}>
                                <ScoreRing score={45} color="#EF4444" size={72} />
                                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.35rem', color: '#EF4444' }}>45</span>
                                    <span style={{ fontSize: '0.6rem', color: '#94A3B8' }}>/100</span>
                                </div>
                            </div>
                            <div>
                                <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', color: '#EF4444', borderRadius: '2rem', padding: '0.25rem 0.75rem', fontSize: '0.78rem', fontWeight: 700, marginBottom: '0.35rem', textAlign: 'center' }}>High Data Risk</div>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    {[{ l: 'Data Moat', s: 42, c: '#F59E0B' }, { l: 'AI Safety', s: 35, c: '#EF4444' }, { l: 'Lock-in', s: 58, c: '#F59E0B' }].map(m => (
                                        <div key={m.l} style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(254,243,199,0.8)', borderRadius: '0.5rem', padding: '0.4rem 0.5rem', textAlign: 'center', minWidth: 45 }}>
                                            <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.9rem', color: m.c }}>{m.s}</div>
                                            <div style={{ fontSize: '0.62rem', color: '#94A3B8' }}>{m.l}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Verdict */}
                    <div style={{ margin: '1.25rem 1.75rem 0', background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.18)', borderLeft: '3px solid #EF4444', borderRadius: '0 0.625rem 0.625rem 0', padding: '0.875rem 1.25rem', fontFamily: 'Sora', fontWeight: 600, fontSize: '0.9rem', color: '#0B1220' }}>
                        "Currently just an OpenAI wrapper with no proprietary data moat. High risk of prompt injection and PII leakage. Needs local model fallback."
                    </div>

                    <div style={{ padding: '1.25rem 1.75rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                        {/* AI Risks + Data Moat */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1.25rem' }}>

                            {/* Hallucinations & Bias */}
                            <div style={{ background: 'rgba(254,243,199,0.3)', border: '1px solid rgba(245,158,11,0.15)', borderRadius: '0.875rem', padding: '1.25rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
                                    <ShieldAlert size={14} color="#F59E0B" />
                                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>AI Safety & Privacy Risks</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {AI_RISKS.map((risk, i) => {
                                        const Icon = risk.icon;
                                        return (
                                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.875rem', background: 'rgba(255,255,255,0.7)', border: `1px solid ${aiRiskColor(risk.level)}30`, borderRadius: '0.75rem' }}>
                                                <div style={{ background: aiRiskBg(risk.level), borderRadius: '0.5rem', padding: '0.4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                                                    <Icon size={16} color={aiRiskColor(risk.level)} />
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                                                        <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>{risk.risk}</span>
                                                        <span style={{ fontSize: '0.65rem', fontWeight: 700, color: aiRiskColor(risk.level), background: aiRiskBg(risk.level), padding: '0.15rem 0.5rem', borderRadius: 4 }}>{risk.level}</span>
                                                    </div>
                                                    <div style={{ fontSize: '0.7rem', color: '#475569', lineHeight: 1.4 }}>{risk.impact}</div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Data Moat Defensibility */}
                            <div style={{ background: '#0F1A2E', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '0.875rem', padding: '1.25rem', color: '#E2E8F0', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
                                    <Database size={14} color="#FBBF24" />
                                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#E2E8F0' }}>Data Moat Defensibility</span>
                                </div>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.875rem' }}>
                                    {DATA_MOAT.map((dm, i) => (
                                        <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.625rem', padding: '0.875rem' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '0.4rem' }}>
                                                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#E2E8F0' }}>{dm.asset}</span>
                                                <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '0.8rem', color: dm.score >= 70 ? '#10B981' : dm.score >= 40 ? '#F59E0B' : '#EF4444' }}>{dm.score}/100</span>
                                            </div>
                                            <div style={{ width: '100%', height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 2, marginBottom: '0.5rem', overflow: 'hidden' }}>
                                                <div style={{ width: `${dm.score}%`, height: '100%', background: dm.score >= 70 ? '#10B981' : dm.score >= 40 ? '#F59E0B' : '#EF4444', borderRadius: 2 }} />
                                            </div>
                                            <div style={{ fontSize: '0.65rem', color: '#94A3B8', lineHeight: 1.3 }}>{dm.note}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Model Dependency Breakdown */}
                        <div style={{ background: 'rgba(254,243,199,0.2)', border: '1px solid rgba(245,158,11,0.12)', borderRadius: '0.875rem', padding: '1.25rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
                                <Brain size={14} color="#F59E0B" />
                                <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.85rem', color: '#0B1220' }}>Model Dependency & Provider Lock-in</span>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                                {MODEL_DEPENDENCY.map((mod, i) => (
                                    <div key={i} style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(253,230,138,0.8)', borderTop: `3px solid ${i === 0 ? '#EF4444' : i === 1 ? '#F59E0B' : '#10B981'}`, borderRadius: '0.625rem', padding: '1rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                                            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0B1220' }}>{mod.provider}</span>
                                            <span style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1rem', color: '#475569' }}>{mod.usage}</span>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.7rem' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span style={{ color: '#64748B' }}>Primary Risk</span>
                                                <span style={{ color: '#0B1220', fontWeight: 600 }}>{mod.risk}</span>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span style={{ color: '#64748B' }}>Contingency</span>
                                                <span style={{ color: '#0B1220', fontWeight: 600 }}>{mod.backup}</span>
                                            </div>
                                        </div>
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
