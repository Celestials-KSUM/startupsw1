'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './login.module.css';

/* ─── Types ─────────────────────────────────────────────── */
// Three.js is loaded at runtime from CDN (see JSON spec) — typed as any
declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        THREE: any;
    }
}

/* ─── Three.js Scene Component ──────────────────────────── */
function ParticleScene({ mobile }: { mobile: boolean }) {
    const canvasRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number>(0);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const container = canvasRef.current;
        if (!container) return;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let THREE: any;

        const size = mobile ? 160 : 400;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const init = (T: any) => {
            THREE = T;
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
            renderer.setSize(size, size);
            container.appendChild(renderer.domElement);

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
            camera.position.z = 5;

            /* particles */
            const count = mobile ? 100 : 280;
            const positions = new Float32Array(count * 3);
            const colors = new Float32Array(count * 3);
            const palette = [
                new THREE.Color('#2563EB'),
                new THREE.Color('#3B82F6'),
                new THREE.Color('#8B5CF6'),
                new THREE.Color('#60A5FA'),
            ];

            const phi = Math.PI * (Math.sqrt(5) - 1);
            for (let i = 0; i < count; i++) {
                const radius = 1.6 + (Math.random() - 0.5) * 0.8;
                const y = 1 - (i / (count - 1)) * 2;
                const r = Math.sqrt(1 - y * y);
                const theta = phi * i;
                positions[i * 3] = Math.cos(theta) * r * radius;
                positions[i * 3 + 1] = y * radius;
                positions[i * 3 + 2] = Math.sin(theta) * r * radius;
                const c = palette[i % palette.length];
                colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
            }

            const geo = new THREE.BufferGeometry();
            geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
            const mat = new THREE.PointsMaterial({ size: 0.055, vertexColors: true, transparent: true, opacity: 0.85 });
            const points = new THREE.Points(geo, mat);
            scene.add(points);

            /* connection lines */
            const lineVerts: number[] = [];
            for (let a = 0; a < count; a++) {
                for (let b = a + 1; b < count; b++) {
                    const ax = positions[a * 3], ay = positions[a * 3 + 1], az = positions[a * 3 + 2];
                    const bx = positions[b * 3], by = positions[b * 3 + 1], bz = positions[b * 3 + 2];
                    const d = Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2 + (az - bz) ** 2);
                    if (d < 1.2) { lineVerts.push(ax, ay, az, bx, by, bz); }
                }
            }
            const lineGeo = new THREE.BufferGeometry();
            lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(lineVerts), 3));
            const lineMat = new THREE.LineBasicMaterial({ color: 0x2563eb, transparent: true, opacity: 0.18 });
            scene.add(new THREE.LineSegments(lineGeo, lineMat));

            /* mouse parallax */
            let mx = 0, my = 0;
            const onMove = (e: MouseEvent) => {
                mx = (e.clientX / window.innerWidth - 0.5) * 0.18;
                my = (e.clientY / window.innerHeight - 0.5) * 0.18;
            };
            window.addEventListener('mousemove', onMove);

            let tx = 0, ty = 0, t = 0;
            const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            const animate = () => {
                rafRef.current = requestAnimationFrame(animate);
                t += 0.016;
                if (!prefersReduced) {
                    points.rotation.y += 0.003;
                    points.position.y = Math.sin(t * 0.5) * 0.08;
                    tx += (mx - tx) * 0.05;
                    ty += (my - ty) * 0.05;
                    points.rotation.x = ty;
                    points.rotation.z = tx;
                }
                renderer.render(scene, camera);
            };
            animate();

            return () => {
                cancelAnimationFrame(rafRef.current);
                window.removeEventListener('mousemove', onMove);
                renderer.dispose();
                if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
            };
        };

        /* load Three.js */
        if (window.THREE) {
            const cleanup = init(window.THREE);
            return cleanup;
        }
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        script.onload = () => { init(window.THREE); };
        document.head.appendChild(script);
    }, [mobile]);

    return <div ref={canvasRef} className={styles.canvas} />;
}

/* ─── Eye Icons ─────────────────────────────────────────── */
const EyeIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);
const EyeOffIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
        <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
);

/* ─── Main Login Page ────────────────────────────────────── */
export default function LoginPage() {
    const [showPw, setShowPw] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [globalErr, setGlobalErr] = useState('');
    const [loading, setLoading] = useState(false);
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 768px)');
        setMobile(mq.matches);
        const handler = (e: MediaQueryListEvent) => setMobile(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    const validateEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

    const handleEmailBlur = () => {
        if (!email || !validateEmail(email)) setEmailErr('Please enter a valid email address.');
        else setEmailErr('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setGlobalErr('');
        let valid = true;
        if (!email || !validateEmail(email)) { setEmailErr('Please enter a valid email address.'); valid = false; }
        if (!password || password.length < 8) { setPasswordErr('Password must be at least 8 characters.'); valid = false; }
        if (!valid) return;

        setLoading(true);
        try {
            await new Promise(r => setTimeout(r, 1500)); // replace with real auth call
            // e.g. signIn('credentials', { email, password, callbackUrl: '/dashboard' })
        } catch {
            setGlobalErr('Invalid email or password. Please try again.');
            setTimeout(() => setGlobalErr(''), 5000);
        } finally {
            setLoading(false);
        }
    };

    const handleOAuth = (provider: 'google' | 'linkedin') => {
        // signIn(provider) via NextAuth
        console.log('OAuth:', provider);
    };

    return (
        <div className={styles.root}>
            {/* ── LEFT PANEL ── */}
            <div className={styles.leftPanel}>
                {/* blobs */}
                <div className={styles.blobCenter} />
                <div className={styles.blobCorner} />

                {/* logo */}
                <Link href="/" className={styles.logo}>
                    <svg width="36" height="36" viewBox="0 0 36 36">
                        <rect width="36" height="36" rx="10" fill="#0B1220" />
                        <circle cx="18" cy="13" r="3.5" fill="#2563EB" />
                        <circle cx="10" cy="22" r="2.5" fill="#3B82F6" opacity="0.8" />
                        <circle cx="26" cy="22" r="2.5" fill="#8B5CF6" opacity="0.8" />
                        <circle cx="18" cy="26" r="2" fill="#2563EB" opacity="0.6" />
                        <line x1="18" y1="13" x2="10" y2="22" stroke="#2563EB" strokeWidth="1.2" opacity="0.5" />
                        <line x1="18" y1="13" x2="26" y2="22" stroke="#8B5CF6" strokeWidth="1.2" opacity="0.5" />
                        <line x1="10" y1="22" x2="18" y2="26" stroke="#3B82F6" strokeWidth="1.2" opacity="0.4" />
                        <line x1="26" y1="22" x2="18" y2="26" stroke="#2563EB" strokeWidth="1.2" opacity="0.4" />
                    </svg>
                    <span className={styles.wordmark}>StartupSwarm</span>
                </Link>

                {/* Three.js scene */}
                <div className={styles.sceneWrap}>
                    <ParticleScene mobile={mobile} />
                </div>

                {/* bottom content */}
                <div className={styles.panelContent}>
                    <p className={styles.headline}>Your launchpad for what&apos;s next.</p>
                    <div className={styles.socialBadge}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        <span>Trusted by 12,000+ founders worldwide</span>
                    </div>
                </div>
            </div>

            {/* ── RIGHT PANEL ── */}
            <div className={styles.rightPanel}>
                <div className={styles.formCard}>
                    {/* header */}
                    <div className={styles.cardHeader}>
                        <h1 className={styles.heading}>Welcome back</h1>
                        <p className={styles.subheading}>Sign in to continue to StartupSwarm</p>
                    </div>

                    {/* global error toast */}
                    {globalErr && (
                        <div className={styles.errorToast} role="alert" aria-live="polite">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
                            </svg>
                            {globalErr}
                        </div>
                    )}

                    {/* OAuth buttons */}
                    <div className={styles.oauthGrid}>
                        <button type="button" className={styles.oauthBtn} onClick={() => handleOAuth('google')}>
                            <svg width="18" height="18" viewBox="0 0 18 18">
                                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4" />
                                <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.805.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853" />
                                <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
                                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
                            </svg>
                            Continue with Google
                        </button>
                        <button type="button" className={styles.oauthBtn} onClick={() => handleOAuth('linkedin')}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            Continue with LinkedIn
                        </button>
                    </div>

                    {/* divider */}
                    <div className={styles.divider}>
                        <span className={styles.dividerLine} />
                        <span className={styles.dividerText}>or continue with email</span>
                        <span className={styles.dividerLine} />
                    </div>

                    {/* form */}
                    <form id="loginForm" onSubmit={handleSubmit} noValidate className={styles.form}>
                        {/* email */}
                        <div className={styles.fieldGroup}>
                            <label htmlFor="email" className={styles.label}>Email address</label>
                            <div className={styles.inputWrap}>
                                <span className={`${styles.inputIcon} ${email ? styles.inputIconActive : ''}`}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </span>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={e => { setEmail(e.target.value); if (emailErr) setEmailErr(''); }}
                                    onBlur={handleEmailBlur}
                                    placeholder="you@company.com"
                                    autoComplete="email"
                                    aria-describedby="emailError"
                                    aria-invalid={!!emailErr}
                                    className={`${styles.input} ${emailErr ? styles.inputError : ''}`}
                                />
                            </div>
                            {emailErr && (
                                <p id="emailError" className={styles.fieldError}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                                    {emailErr}
                                </p>
                            )}
                        </div>

                        {/* password */}
                        <div className={styles.fieldGroup}>
                            <div className={styles.passwordLabelRow}>
                                <label htmlFor="password" className={styles.label}>Password</label>
                                <Link href="/forgot-password" className={styles.forgotLink}>Forgot password?</Link>
                            </div>
                            <div className={styles.inputWrap}>
                                <span className={`${styles.inputIcon} ${password ? styles.inputIconActive : ''}`}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                </span>
                                <input
                                    id="password"
                                    type={showPw ? 'text' : 'password'}
                                    value={password}
                                    onChange={e => { setPassword(e.target.value); if (passwordErr) setPasswordErr(''); }}
                                    placeholder="••••••••"
                                    autoComplete="current-password"
                                    aria-describedby="passwordError"
                                    aria-invalid={!!passwordErr}
                                    className={`${styles.input} ${styles.inputPadRight} ${passwordErr ? styles.inputError : ''}`}
                                />
                                <button
                                    type="button"
                                    id="togglePassword"
                                    aria-label="Toggle password visibility"
                                    onClick={() => setShowPw(p => !p)}
                                    className={styles.eyeBtn}
                                >
                                    {showPw ? <EyeOffIcon /> : <EyeIcon />}
                                </button>
                            </div>
                            {passwordErr && (
                                <p id="passwordError" className={styles.fieldError}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                                    {passwordErr}
                                </p>
                            )}
                        </div>

                        {/* submit */}
                        <button
                            id="submitBtn"
                            type="submit"
                            disabled={loading}
                            className={styles.submitBtn}
                        >
                            {loading ? (
                                <>
                                    <span className={styles.spinner} />
                                    Signing in…
                                </>
                            ) : 'Sign in'}
                        </button>
                    </form>

                    {/* create account */}
                    <p className={styles.createAccount}>
                        Don&apos;t have an account?{' '}
                        <Link href="/register" className={styles.createLink}>Create one free</Link>
                    </p>
                </div>

                {/* footer note */}
                <p className={styles.footerNote}>
                    By continuing, you agree to our{' '}
                    <Link href="/terms" className={styles.footerLink}>Terms of Service</Link>{' '}
                    and{' '}
                    <Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link>.
                </p>
            </div>
        </div>
    );
}
