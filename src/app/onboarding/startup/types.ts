export type FormData = {
    startup_name: string; tagline: string; idea_description: string;
    problem_statement: string; problem_importance: string; solution_differentiator: string;
    target_users: string; business_model_type: string; target_geography: string[];
    market_type: string; startup_category: string; product_type: string;
    revenue_model: string[]; pricing_info: string;
    mvp_features: string[]; current_stage: string;
    uses_ai: boolean | null; collects_user_data: boolean | null; data_types: string[];
    competitors: string[]; no_competitors: boolean;
    spoken_to_users: boolean | null; user_interviews_count: string;
    traction_users: string; traction_waitlist: string; traction_revenue: string;
    founders_count: number; has_tech_cofounder: boolean | null;
    previous_experience: string; team_size: string;
    pitch_deck: File | null; website_url: string; demo_link: string;
    github_repo: string; demo_video: string; financial_projections: File | null;
};

export const INITIAL: FormData = {
    startup_name: '', tagline: '', idea_description: '',
    problem_statement: '', problem_importance: '', solution_differentiator: '',
    target_users: '', business_model_type: '', target_geography: [],
    market_type: '', startup_category: '', product_type: '',
    revenue_model: [], pricing_info: '',
    mvp_features: [], current_stage: '',
    uses_ai: null, collects_user_data: null, data_types: [],
    competitors: [], no_competitors: false,
    spoken_to_users: null, user_interviews_count: '',
    traction_users: '', traction_waitlist: '', traction_revenue: '',
    founders_count: 1, has_tech_cofounder: null,
    previous_experience: '', team_size: '',
    pitch_deck: null, website_url: '', demo_link: '',
    github_repo: '', demo_video: '', financial_projections: null,
};

export const SECTIONS_META = [
    { num: 1, title: 'Basic Startup Identity', icon: 'Rocket', desc: "Let's start with the basics." },
    { num: 2, title: 'Problem & Solution', icon: 'Lightbulb', desc: 'Define the pain point and your unique solution.' },
    { num: 3, title: 'Target Market', icon: 'Target', desc: 'Define exactly who this is for.' },
    { num: 4, title: 'Category', icon: 'Grid', desc: 'Help us place your startup in the right ecosystem.' },
    { num: 5, title: 'Business Model', icon: 'Dollar', desc: 'How do you plan to make money?' },
    { num: 6, title: 'Product & MVP Details', icon: 'Code', desc: 'Where are you in the build process?' },
    { num: 7, title: 'Competition & Validation', icon: 'BarChart', desc: "Help us understand the landscape you're entering." },
    { num: 8, title: 'Team Information', icon: 'Users', desc: 'Tell us about the people building this.' },
    { num: 9, title: 'Resources & Links', icon: 'Paperclip', desc: 'Upload supporting materials.', optional: true },
] as const;
