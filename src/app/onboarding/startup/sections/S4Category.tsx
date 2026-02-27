// Section 4 — Category (startup category + product type chip selects)
import FieldGroup from '../components/ui/FieldGroup';
import SectionCard from '../components/SectionCard';
import ChipSelect from '../components/ui/ChipSelect';
import type { FormData } from '../types';

const GridIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>;

interface Props {
    data: Pick<FormData, 'startup_category' | 'product_type'>;
    errors: Record<string, string>;
    set: (k: keyof FormData, v: unknown) => void;
    onFocus: () => void;
}

const CATEGORIES = [
    'SaaS', 'EdTech', 'AgriTech', 'E-Commerce',
];

const PRODUCT_TYPES = [
    'Web App', 'Platform / Marketplace', 'Physical Product', 'Hybrid (Digital + Physical)',
];

export default function S4Category({ data, errors, set, onFocus }: Props) {
    return (
        <SectionCard num={4} title="Category" icon={<GridIcon />}
            desc="Help us place your startup in the right ecosystem." delay={0.3} onFocus={onFocus}>

            <FieldGroup label="Startup Category" required error={errors.startup_category}>
                <ChipSelect
                    options={CATEGORIES}
                    selected={data.startup_category}
                    onChange={v => set('startup_category', v)}
                />
            </FieldGroup>

            <FieldGroup label="Product Type" required error={errors.product_type}>
                <ChipSelect
                    options={PRODUCT_TYPES}
                    selected={data.product_type}
                    onChange={v => set('product_type', v)}
                />
            </FieldGroup>
        </SectionCard>
    );
}
