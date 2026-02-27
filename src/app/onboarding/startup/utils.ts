import type { FormData } from './types';

export function calcStrength(f: FormData): number {
    const required = [
        f.startup_name, f.tagline, f.idea_description,
        f.problem_statement, f.problem_importance, f.solution_differentiator,
        f.target_users, f.business_model_type, f.market_type,
        f.startup_category, f.product_type,
        f.revenue_model.length > 0 ? 'x' : '',
        f.mvp_features.length >= 3 ? 'x' : '',
        f.current_stage,
        f.uses_ai !== null ? 'x' : '',
        f.collects_user_data !== null ? 'x' : '',
        f.spoken_to_users !== null ? 'x' : '',
        f.previous_experience, f.team_size,
        f.has_tech_cofounder !== null ? 'x' : '',
    ];
    const optional = [
        f.pricing_info,
        f.website_url,
        f.demo_link,
        f.pitch_deck ? 'x' : '',
        f.demo_video,
    ];
    const req = (required.filter(Boolean).length / required.length) * 80;
    const opt = (optional.filter(Boolean).length / optional.length) * 20;
    return Math.round(req + opt);
}

export function strengthMeta(pct: number) {
    if (pct <= 25) return { label: 'Just Started', color: '#EF4444' };
    if (pct <= 50) return { label: 'Getting There', color: '#F59E0B' };
    if (pct <= 75) return { label: 'Looking Good', color: '#3B82F6' };
    return { label: 'Investor Ready', color: '#22C55E' };
}
