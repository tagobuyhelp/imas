import React from 'react';
import { Helmet } from 'react-helmet-async';
import { IMAS_BRAND, IMAS_TAILWIND_CLASSES } from '../lib/constants';

export function PrivacyPolicyPage(): React.JSX.Element {
    const lastUpdated = 'October 26, 2025';
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Privacy Policy',
        'description': 'Privacy Policy for IMAS School of Business explaining data collection, usage, cookies, security, and contact information.',
        'url': 'https://www.imas.ac.in/privacy-policy',
        'dateModified': lastUpdated,
        'publisher': {
            '@type': 'Organization',
            'name': IMAS_BRAND.NAME,
            'url': 'https://' + IMAS_BRAND.WEBSITE,
            'contactPoint': {
                '@type': 'ContactPoint',
                'contactType': 'customer service',
                'email': IMAS_BRAND.EMAIL,
                'telephone': IMAS_BRAND.PHONE
            }
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>Privacy Policy | IMAS School of Business</title>
                <meta name="description" content="Privacy Policy for IMAS School of Business explaining data collection, usage, cookies, security, and contact information." />
                <meta name="robots" content="index, follow" />
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            {/* Hero */}
            <section className={`relative py-16 md:py-24 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE}`}>
                <div className="max-w-6xl mx-auto px-4 text-white">
                    <h1 className="text-3xl md:text-5xl font-bold">Privacy Policy</h1>
                    <p className="mt-4 text-sm md:text-base opacity-90">Last updated: {lastUpdated}</p>
                    <p className="mt-6 text-base md:text-lg">We respect your privacy and are committed to protecting your personal information. This policy explains what data we collect, how we use it, and the choices you have.</p>
                </div>
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
                    <div className="absolute -top-10 -left-10 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
                </div>
            </section>

            {/* Content */}
            <main className="max-w-6xl mx-auto px-4 py-12">
                <div className="prose max-w-none">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Scope</h2>
                    <p className="text-gray-700">This policy applies to all services offered by {IMAS_BRAND.NAME} via our website and associated digital properties.</p>

                    <h2 className="mt-10 text-2xl md:text-3xl font-semibold text-gray-900">Information We Collect</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Contact details such as name, email address, and phone number.</li>
                        <li>Application details, academic background, and professional information.</li>
                        <li>Usage data including pages visited, actions taken, and device information.</li>
                        <li>Cookies and similar technologies for session management and analytics.</li>
                    </ul>

                    <h2 className="mt-10 text-2xl md:text-3xl font-semibold text-gray-900">How We Use Your Information</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Processing applications, admissions, and student services.</li>
                        <li>Improving website performance, content relevance, and user experience.</li>
                        <li>Communicating updates, events, and relevant academic information.</li>
                        <li>Complying with legal obligations and institutional policies.</li>
                    </ul>

                    <h2 className="mt-10 text-2xl md:text-3xl font-semibold text-gray-900">Cookies and Tracking</h2>
                    <p className="text-gray-700">Cookies help us remember preferences, measure performance, and provide tailored content. You can manage or disable cookies in your browser settings; however, some features may not function properly without them.</p>

                    <h2 className="mt-10 text-2xl md:text-3xl font-semibold text-gray-900">Third-Party Services</h2>
                    <p className="text-gray-700">We may use trusted third-party tools (e.g., analytics, form services) to operate and improve our services. These providers process data under their respective privacy policies and applicable regulations.</p>

                    <h2 className="mt-10 text-2xl md:text-3xl font-semibold text-gray-900">Data Security</h2>
                    <p className="text-gray-700">We implement administrative, technical, and physical safeguards to protect your data. While we strive for robust security, no method of transmission over the internet is fully secure.</p>

                    <h2 className="mt-10 text-2xl md:text-3xl font-semibold text-gray-900">Your Rights</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Access, correct, or delete your personal information where applicable.</li>
                        <li>Withdraw consent for communications and certain processing activities.</li>
                        <li>Request details on how your data is used and shared.</li>
                    </ul>

                    <h2 className="mt-10 text-2xl md:text-3xl font-semibold text-gray-900">Contact Us</h2>
                    <p className="text-gray-700">If you have questions about this Privacy Policy or wish to exercise your rights, contact us at <a className="text-blue-600 underline" href={`mailto:${IMAS_BRAND.EMAIL}`}>{IMAS_BRAND.EMAIL}</a> or call <span className="font-medium">{IMAS_BRAND.PHONE}</span>. Our address: <span className="font-medium">{IMAS_BRAND.ADDRESS}</span>.</p>

                    <h2 className="mt-10 text-2xl md:text-3xl font-semibold text-gray-900">Policy Updates</h2>
                    <p className="text-gray-700">We may update this policy to reflect changes in practices or legal requirements. We encourage you to review it periodically.</p>
                </div>
            </main>
        </div>
    );
}