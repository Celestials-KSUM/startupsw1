import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sign In — StartupSwarm',
    description: 'Sign in to your StartupSwarm account.',
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
