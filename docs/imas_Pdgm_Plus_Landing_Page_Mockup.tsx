import React from "react";

// NOTE: To use Google Material Symbols icons, include this in your root HTML (index.html or _document.tsx):
// <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />

// IMAS PGDM Plus Landing Page – Visually rich, conversion-focused React + Tailwind layout

export default function ImasPgdmPlusLandingPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            {/* Global background pattern */}
            <div
                className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.08),_transparent_55%)]"
                aria-hidden="true"
            />

            <div className="relative z-10 flex min-h-screen flex-col">
                {/* Top Info Bar */}
                <div className="w-full bg-slate-900 text-sm text-slate-100">
                    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
                        <p className="flex items-center gap-2 font-medium">
                            <span className="material-symbols-outlined text-[18px] align-middle">campaign</span>
                            <span>MBA / PGDM (Full-Time) – PGDM Plus • Admissions Open 2026 • AICTE-Approved</span>
                        </p>
                        <button className="hidden items-center gap-1 rounded-full border border-slate-400 px-3 py-1 text-xs hover:bg-slate-800 md:inline-flex">
                            <span className="material-symbols-outlined text-[16px] align-middle">phone_in_talk</span>
                            <span>Request a Callback</span>
                        </button>
                    </div>
                </div>

                {/* Header / Navigation */}
                <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur shadow-sm">
                    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-600 text-xs font-bold text-white shadow-md">
                                IMAS
                            </div>
                            <div className="leading-tight">
                                <p className="text-sm font-semibold">IMAS Business School</p>
                                <p className="text-[11px] text-slate-500">Newtown, Kolkata</p>
                            </div>
                        </div>

                        {/* Nav (desktop) */}
                        <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
                            <a href="#about-imas" className="flex items-center gap-1 hover:text-sky-700">
                                <span className="material-symbols-outlined text-[18px] align-middle">menu_book</span>
                                <span>Program Overview</span>
                            </a>
                            <a href="#specialisations" className="flex items-center gap-1 hover:text-sky-700">
                                <span className="material-symbols-outlined text-[18px] align-middle">category</span>
                                <span>Specialisations</span>
                            </a>
                            <a href="#international-immersion" className="flex items-center gap-1 hover:text-sky-700">
                                <span className="material-symbols-outlined text-[18px] align-middle">public</span>
                                <span>International Immersion</span>
                            </a>
                            <a href="#placements" className="flex items-center gap-1 hover:text-sky-700">
                                <span className="material-symbols-outlined text-[18px] align-middle">work</span>
                                <span>Placements</span>
                            </a>
                            <a href="#life-at-imas" className="flex items-center gap-1 hover:text-sky-700">
                                <span className="material-symbols-outlined text-[18px] align-middle">diversity_3</span>
                                <span>Life at IMAS</span>
                            </a>
                            <a href="#admissions-2026" className="flex items-center gap-1 hover:text-sky-700">
                                <span className="material-symbols-outlined text-[18px] align-middle">how_to_reg</span>
                                <span>Admissions 2026</span>
                            </a>
                            <button className="inline-flex items-center gap-1 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-lg">
                                <span className="material-symbols-outlined text-[18px] align-middle">send</span>
                                <span>Apply Now</span>
                            </button>
                        </nav>

                        {/* Mobile menu icon (placeholder) */}
                        <button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 md:hidden">
                            <span className="sr-only">Open menu</span>
                            <div className="h-4 w-4 space-y-1">
                                <span className="block h-[2px] w-full bg-slate-700" />
                                <span className="block h-[2px] w-full bg-slate-700" />
                                <span className="block h-[2px] w-full bg-slate-700" />
                            </div>
                        </button>
                    </div>
                </header>

                <main className="flex-1">
                    {/* Hero Section */}
                    <section
                        id="hero"
                        className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-sky-50 via-white to-slate-50"
                    >
                        {/* Hero decorative background */}
                        <div className="pointer-events-none absolute inset-0 opacity-40">
                            <img
                                src="/images/hero-pattern.svg"
                                alt="Abstract pattern background"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:flex-row md:py-14">
                            {/* Left Content */}
                            <div className="flex-1 space-y-5">
                                <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-sky-700 shadow-sm ring-1 ring-sky-100">
                                    <span className="material-symbols-outlined text-[16px] align-middle">verified</span>
                                    <span>Full-Time AICTE-Approved PGDM Plus</span>
                                    <span className="h-1 w-1 rounded-full bg-sky-400" />
                                    <span>On-Campus • Newtown, Kolkata</span>
                                </div>

                                <div className="space-y-3">
                                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem]">
                                        MBA / PGDM (Full-Time) – PGDM Plus Program
                                    </h1>
                                    <p className="text-lg font-medium text-slate-800">
                                        Strengthen Your Future With a Transformative Management Program at IMAS.
                                    </p>
                                </div>

                                <p className="max-w-xl text-sm leading-relaxed text-slate-600">
                                    IMAS Kolkata, one of the best MBA colleges in Kolkata 2026, guides the new generation to become
                                    proficient corporate leaders by providing an AICTE-approved full-time MBA/PGDM – PGDM Plus programme
                                    designed to enhance their potential.
                                </p>

                                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-700">
                                    <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-slate-200">
                                        <span className="material-symbols-outlined text-[16px] align-middle">workspace_premium</span>
                                        <span>AICTE Approved</span>
                                    </span>
                                    <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-slate-200">
                                        <span className="material-symbols-outlined text-[16px] align-middle">emoji_events</span>
                                        <span>Award-Winning B-School</span>
                                    </span>
                                    <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-slate-200">
                                        <span className="material-symbols-outlined text-[16px] align-middle">location_on</span>
                                        <span>Newtown Smart City Zone</span>
                                    </span>
                                </div>

                                <div className="flex flex-wrap items-center gap-3 pt-2">
                                    <button className="rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-lg">
                                        Apply Now
                                    </button>
                                    <button className="inline-flex items-center gap-1 rounded-full border border-sky-600 px-5 py-2.5 text-sm font-semibold text-sky-700 hover:bg-sky-50">
                                        <span className="material-symbols-outlined text-[18px] align-middle">description</span>
                                        <span>Download Brochure</span>
                                    </button>
                                    <button className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 underline-offset-4 hover:underline">
                                        <span className="material-symbols-outlined text-[18px] align-middle">map</span>
                                        <span>Visit Campus</span>
                                    </button>
                                </div>

                                {/* Small stats strip */}
                                <div className="mt-4 grid max-w-xl grid-cols-3 gap-3 text-center text-[11px] text-slate-600">
                                    <div className="rounded-xl bg-white/80 p-3 shadow-sm ring-1 ring-slate-100">
                                        <p className="text-[10px] uppercase tracking-wide text-slate-500">Programme</p>
                                        <p className="mt-1 text-sm font-semibold text-slate-900">Full-Time PGDM</p>
                                    </div>
                                    <div className="rounded-xl bg-white/80 p-3 shadow-sm ring-1 ring-slate-100">
                                        <p className="text-[10px] uppercase tracking-wide text-slate-500">Intake</p>
                                        <p className="mt-1 text-sm font-semibold text-slate-900">2026 Batch</p>
                                    </div>
                                    <div className="rounded-xl bg-white/80 p-3 shadow-sm ring-1 ring-slate-100">
                                        <p className="text-[10px] uppercase tracking-wide text-slate-500">Location</p>
                                        <p className="mt-1 text-sm font-semibold text-slate-900">Newtown, Kolkata</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Lead Form */}
                            <aside className="w-full max-w-md self-start rounded-2xl bg-white/95 p-5 shadow-xl ring-1 ring-slate-200">
                                <div className="mb-3 overflow-hidden rounded-xl bg-slate-100">
                                    <img
                                        src="/images/imas-classroom.jpg"
                                        alt="IMAS students in a modern classroom"
                                        className="h-32 w-full object-cover"
                                    />
                                </div>
                                <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                                    <span className="material-symbols-outlined text-[22px] text-sky-600">contact_page</span>
                                    <span>Get Detailed Program Information</span>
                                </h2>
                                <p className="mt-1 text-xs text-slate-600">
                                    Fill in your details to receive the brochure and personalised counselling from the IMAS admissions
                                    team.
                                </p>

                                <form className="mt-4 space-y-3 text-xs">
                                    <div className="space-y-1">
                                        <label className="block font-medium text-slate-700">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div className="grid gap-3 md:grid-cols-2">
                                        <div className="space-y-1">
                                            <label className="block font-medium text-slate-700">Mobile Number</label>
                                            <input
                                                type="tel"
                                                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                                placeholder="10-digit mobile"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="block font-medium text-slate-700">Email</label>
                                            <input
                                                type="email"
                                                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                                placeholder="you@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-3 md:grid-cols-2">
                                        <div className="space-y-1">
                                            <label className="block font-medium text-slate-700">City</label>
                                            <input
                                                type="text"
                                                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                                placeholder="Your city"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="block font-medium text-slate-700">Qualification</label>
                                            <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500">
                                                <option value="">Select</option>
                                                <option>Final Year Undergraduate</option>
                                                <option>Graduate</option>
                                                <option>Working Professional</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid gap-3 md:grid-cols-2">
                                        <div className="space-y-1">
                                            <label className="block font-medium text-slate-700">Year of Graduation</label>
                                            <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500">
                                                <option value="">Select year</option>
                                                <option>2026</option>
                                                <option>2025</option>
                                                <option>2024</option>
                                                <option>2023</option>
                                                <option>2022 &amp; Earlier</option>
                                            </select>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="block font-medium text-slate-700">Preferred Specialisation</label>
                                            <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500">
                                                <option value="">Select</option>
                                                <option>Marketing Management</option>
                                                <option>Financial Management</option>
                                                <option>Human Resource Management</option>
                                                <option>Business Analytics</option>
                                                <option>Artificial Intelligence &amp; Data Science</option>
                                                <option>FinTech</option>
                                                <option>Hospital &amp; Healthcare Management</option>
                                                <option>Innovation, Entrepreneurship &amp; Venture Development (IEV)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-2 pt-1">
                                        <input type="checkbox" className="mt-1 h-3.5 w-3.5 rounded border-slate-300" />
                                        <p className="text-[11px] text-slate-500">
                                            I agree to be contacted by IMAS via phone, email, or SMS regarding program details, admissions and
                                            updates.
                                        </p>
                                    </div>

                                    <button
                                        type="submit"
                                        className="mt-2 w-full rounded-full bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-lg"
                                    >
                                        Submit &amp; Get Brochure
                                    </button>

                                    <p className="pt-2 text-[11px] text-slate-500">
                                        <span className="material-symbols-outlined mr-1 align-middle text-[14px]">call</span>
                                        Need help? Call +91 90888 22777 • ✉ admission@imas.ac.in
                                    </p>
                                </form>
                            </aside>
                        </div>
                    </section>

                    {/* Highlights Strip */}
                    <section id="highlights" className="border-b border-slate-200 bg-white/90">
                        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-xs font-medium text-slate-700">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[16px] text-sky-600">verified</span>
                                <span>AICTE-Approved Full-Time PGDM</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[16px] text-sky-600">trending_up</span>
                                <span>100% Placement Assistance</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[16px] text-sky-600">flight_takeoff</span>
                                <span>International Immersion Program</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[16px] text-sky-600">computer</span>
                                <span>Central AC Digital Campus</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[16px] text-sky-600">account_balance</span>
                                <span>Scholarships &amp; Education Loan Support</span>
                            </div>
                        </div>
                    </section>

                    {/* About IMAS */}
                    <section id="about-imas" className="border-b border-slate-200 bg-slate-50">
                        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2">
                            <div className="space-y-4">
                                <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-lg">
                                        🏫
                                    </span>
                                    <span>About IMAS Business School</span>
                                </h2>
                                <p className="text-sm leading-relaxed text-slate-700">
                                    IMAS Kolkata is a dynamic business school located in Newtown, Kolkata, offering an industry-focused
                                    full-time MBA / PGDM programme with internship opportunities. The institute focuses on academic
                                    excellence, corporate exposure, and holistic personality development.
                                </p>
                                <p className="text-sm leading-relaxed text-slate-700">
                                    At IMAS, students are guided to unlock their potential through future-ready learning environments,
                                    industry-linked curriculum, and active corporate engagement.
                                </p>
                                <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                                    <li>• Vibrant and future-ready campus</li>
                                    <li>• Industry-linked MBA cutting-edge curriculum in India</li>
                                    <li>• Active corporate partnerships</li>
                                    <li>• International collaborations with top universities</li>
                                    <li>• Practical exposure – internships &amp; projects</li>
                                </ul>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="relative h-64 w-full max-w-md">
                                    <img
                                        src="/images/imas-campus.jpg"
                                        alt="IMAS Kolkata campus building"
                                        className="h-full w-full rounded-2xl object-cover shadow-xl ring-1 ring-slate-200"
                                    />
                                    <div className="absolute -bottom-4 left-4 rounded-2xl bg-white/95 px-4 py-3 text-xs shadow-lg ring-1 ring-slate-200">
                                        <p className="font-semibold text-slate-900">Newtown Smart City Zone</p>
                                        <p className="mt-1 text-[11px] text-slate-600">
                                            Located near St. Xavier's University in Newtown Action Area III with a centrally air-conditioned,
                                            digital-enabled campus.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Why IMAS */}
                    <section id="why-imas" className="border-b border-slate-200 bg-white">
                        <div className="mx-auto max-w-6xl px-4 py-10">
                            <div className="mb-6 max-w-2xl">
                                <h2 className="text-2xl font-bold text-slate-900">Why Choose MBA / PGDM (PGDM Plus) at IMAS?</h2>
                                <p className="mt-2 text-sm text-slate-700">
                                    Learn from top executives, business leaders, and academic experts from globally renowned organisations,
                                    and become a corporate-ready professional with strong management foundations and future-focused skills.
                                </p>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {[
                                    'AICTE approved full-time MBA / PGDM programme 2026',
                                    'Full-time PGDM programme with 100% placement assistance',
                                    'High placements with top recruiters in India',
                                    'Cutting-edge curriculum aligned with digital business trends',
                                    'Contemporary central AC campus with advanced digital classrooms',
                                    'Personality Enrichment Programs and Grooming Modules',
                                    'Professional training from academic and industry experts',
                                    'Scholarships, guidance and education loan support',
                                    'International Immersion Program for global exposure',
                                    "Strategically located campus in Newtown's Smart City Zone",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex gap-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100 transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-md"
                                    >
                                        <div className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-center text-base font-semibold text-sky-700">
                                            ✓
                                        </div>
                                        <p className="text-sm text-slate-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Awards & Recognitions */}
                    <section id="awards" className="border-b border-slate-200 bg-slate-50">
                        <div className="mx-auto max-w-6xl px-4 py-10">
                            <h2 className="text-2xl font-bold text-slate-900">Awards &amp; Recognitions</h2>
                            <p className="mt-2 text-sm text-slate-700">
                                IMAS has been recognised for its academic excellence, innovation, and professional development support.
                            </p>
                            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                {[
                                    'Academic Excellence',
                                    'Emerging Business School of the Year',
                                    'Innovation & Entrepreneurship Award',
                                    'Professional Development Award',
                                ].map((title) => (
                                    <div
                                        key={title}
                                        className="flex h-28 flex-col justify-center rounded-2xl bg-white p-4 text-sm font-medium text-slate-800 shadow-sm ring-1 ring-slate-200"
                                    >
                                        <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-sky-600">
                                            <span className="material-symbols-outlined text-[16px] align-middle">military_tech</span>
                                            <span>Recognition</span>
                                        </span>
                                        <span className="mt-1">{title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Specialisations */}
                    <section id="specialisations" className="border-b border-slate-200 bg-white">
                        <div className="mx-auto max-w-6xl px-4 py-10">
                            <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                                <div className="max-w-2xl">
                                    <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
                                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-lg">
                                            🎓
                                        </span>
                                        <span>Specialisations Offered by IMAS Kolkata</span>
                                    </h2>
                                    <p className="mt-2 text-sm text-slate-700">
                                        Personalise your learning journey with single or dual specialisation options in high-demand
                                        management domains.
                                    </p>
                                </div>
                                <p className="text-[11px] text-slate-500">Choose a focus area that aligns with your career goals.</p>
                            </div>

                            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                                {[
                                    { label: 'Marketing Management', icon: '📈' },
                                    { label: 'Financial Management', icon: '💰' },
                                    { label: 'Human Resource Management', icon: '👥' },
                                    { label: 'Business Analytics', icon: '📊' },
                                    { label: 'Artificial Intelligence & Data Science', icon: '🤖' },
                                    { label: 'FinTech', icon: '💳' },
                                    { label: 'Hospital & Healthcare Management', icon: '🏥' },
                                    { label: 'Innovation, Entrepreneurship & Venture Development (IEV)', icon: '🚀' },
                                ].map((spec) => (
                                    <div
                                        key={spec.label}
                                        className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-xs font-medium text-slate-800 ring-1 ring-slate-200"
                                    >
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg">
                                            {spec.icon}
                                        </span>
                                        <span>{spec.label}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-3 text-xs text-slate-600">
                                Students may also choose a Dual Specialisation pathway for a broader and more flexible career
                                trajectory.
                            </p>
                        </div>
                    </section>

                    {/* Program Features */}
                    <section id="program-features" className="border-b border-slate-200 bg-slate-50">
                        <div className="mx-auto max-w-6xl px-4 py-10">
                            <h2 className="text-2xl font-bold text-slate-900">Program Features (Brochure-Aligned)</h2>
                            <p className="mt-2 text-sm text-slate-700">
                                The PGDM Plus programme integrates globally recognised certifications with strong practical exposure and
                                corporate engagement.
                            </p>

                            <div className="mt-6 grid gap-8 md:grid-cols-2">
                                <div>
                                    <h3 className="flex items-center gap-1 text-sm font-semibold text-slate-900">
                                        <span className="material-symbols-outlined text-[18px] align-middle">workspace_premium</span>
                                        <span>Certifications &amp; Tools</span>
                                    </h3>
                                    <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                                        <li>• SAP ERP Suite Certification</li>
                                        <li>• Microsoft Project Certification</li>
                                        <li>• Six Sigma Green Belt Certification</li>
                                        <li>• Advanced Excel Certification</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="flex items-center gap-1 text-sm font-semibold text-slate-900">
                                        <span className="material-symbols-outlined text-[18px] align-middle">school</span>
                                        <span>Experiential Learning &amp; Exposure</span>
                                    </h3>
                                    <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                                        <li>• Live Business Projects</li>
                                        <li>• Winter &amp; Summer Internships</li>
                                        <li>• 20+ Presentations Each Semester</li>
                                        <li>• Corporate Mentorship Program</li>
                                        <li>• Industry Visits</li>
                                        <li>• Basic &amp; Advanced Communication Training</li>
                                    </ul>
                                </div>
                            </div>

                            <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-lg">
                                <span className="material-symbols-outlined text-[18px] align-middle">description</span>
                                <span>Download Detailed Program Brochure</span>
                            </button>
                        </div>
                    </section>

                    {/* Program Objectives */}
                    <section id="program-objectives" className="border-b border-slate-200 bg-white">
                        <div className="mx-auto max-w-6xl px-4 py-10">
                            <h2 className="text-2xl font-bold text-slate-900">MBA / PGDM Program Objectives</h2>
                            <p className="mt-2 text-sm text-slate-700">
                                The programme is designed to develop well-trained management professionals who can excel in a dynamic
                                business environment.
                            </p>

                            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                {[
                                    'Industry-relevant curriculum knowledge',
                                    'Specialisation enhancement',
                                    'Professional networking & career support',
                                    'Advanced skill development',
                                    'Leadership & professional development',
                                    'Globally informed business perspective',
                                    'Experiential learning mindset',
                                    'Continuous learning & adaptability',
                                ].map((objective) => (
                                    <div
                                        key={objective}
                                        className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 ring-1 ring-slate-100"
                                    >
                                        {objective}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* International Immersion Program */}
                    <section id="international-immersion" className="border-b border-slate-200 bg-slate-50">
                        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2">
                            <div className="space-y-4">
                                <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-lg">
                                        🌍
                                    </span>
                                    <span>International Immersion Program</span>
                                </h2>
                                <p className="text-sm text-slate-700">
                                    Gain practical understanding of global markets, cultures, and business ecosystems through
                                    international immersion experiences in leading business hubs.
                                </p>
                                <div>
                                    <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-800">Destinations</h3>
                                    <div className="mt-2 flex flex-wrap gap-2 text-xs font-medium">
                                        {["Dubai", "Singapore", "Thailand", "Malaysia"].map((place) => (
                                            <span
                                                key={place}
                                                className="rounded-full bg-white px-3 py-1 text-slate-800 ring-1 ring-slate-200"
                                            >
                                                {place}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-800">Collaborations</h3>
                                    <ul className="mt-2 space-y-1 text-sm text-slate-700">
                                        <li>• Middlesex University</li>
                                        <li>• Curtin University</li>
                                        <li>• Panyapiwat Institute</li>
                                        <li>• Raffles University</li>
                                    </ul>
                                </div>

                                <button className="mt-2 inline-flex items-center gap-2 rounded-full border border-sky-600 px-4 py-2 text-xs font-semibold text-sky-700 shadow-sm transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:bg-sky-50 hover:shadow-md">
                                    <span>View International Exposure Details</span>
                                    <span>↗</span>
                                </button>
                            </div>

                            <div className="flex items-center justify-center">
                                <div className="relative h-64 w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-sky-700 p-6 text-slate-50 shadow-xl">
                                    <img
                                        src="/images/global-map-overlay.png"
                                        alt="World map representing global exposure"
                                        className="absolute inset-0 h-full w-full object-cover opacity-25"
                                    />
                                    <div className="relative">
                                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-200">
                                            Global Business Lens
                                        </p>
                                        <p className="mt-3 text-lg font-semibold">
                                            Build a globally informed perspective to lead across borders.
                                        </p>
                                        <p className="mt-2 text-xs text-sky-50/90">
                                            International immersion trips combine academic sessions, industry visits, and cultural exposure,
                                            helping students connect classroom concepts with real-world global business practices.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Placements */}
                    <section id="placements" className="border-b border-slate-200 bg-white">
                        <div className="mx-auto max-w-6xl px-4 py-10">
                            <div className="grid gap-8 md:grid-cols-2">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900">Placements at IMAS</h2>
                                    <p className="mt-2 text-sm text-slate-700">
                                        IMAS offers structured placement support with multiple corporate engagement touchpoints, training
                                        modules, and alumni-backed opportunities.
                                    </p>
                                    <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                                        <li>• Corporate training &amp; mentorship</li>
                                        <li>• Seminars, workshops &amp; field visits</li>
                                        <li>• Resume building &amp; GD/PI training</li>
                                        <li>• Multiple job opportunities per student</li>
                                        <li>• Recruitments across HRM, Marketing, Finance &amp; Analytics</li>
                                        <li>• Strong alumni network with top recruiters</li>
                                    </ul>
                                    <button className="mt-4 inline-flex items-center gap-2 rounded-full border border-sky-600 px-4 py-2 text-xs font-semibold text-sky-700 hover:bg-sky-50">
                                        <span className="material-symbols-outlined text-[16px] align-middle">support_agent</span>
                                        <span>Talk to Our Career Counsellor</span>
                                    </button>
                                </div>
                                <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100">
                                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Placement Snapshot*</p>
                                    <p className="mt-2 text-[11px] text-slate-500">
                                        *Illustrative layout. Replace with actual statistics and recruiter logos when available.
                                    </p>
                                    <div className="mt-4 grid grid-cols-3 gap-4 text-center text-xs">
                                        <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
                                            <p className="text-[10px] text-slate-500">Highest CTC</p>
                                            <p className="mt-1 text-base font-semibold text-slate-900">₹ —</p>
                                        </div>
                                        <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
                                            <p className="text-[10px] text-slate-500">Average CTC</p>
                                            <p className="mt-1 text-base font-semibold text-slate-900">₹ —</p>
                                        </div>
                                        <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
                                            <p className="text-[10px] text-slate-500">Top Recruiters</p>
                                            <p className="mt-1 text-base font-semibold text-slate-900">—</p>
                                        </div>
                                    </div>
                                    <div className="mt-5 h-24 rounded-xl border border-dashed border-slate-200 bg-white/60 p-3 text-center text-[11px] text-slate-500">
                                        Logo grid placeholder for companies like consulting firms, banks, IT, and analytics recruiters.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Life at IMAS */}
                    <section id="life-at-imas" className="border-b border-slate-200 bg-slate-50">
                        <div className="mx-auto max-w-6xl px-4 py-10">
                            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                                <div className="max-w-2xl">
                                    <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
                                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-lg">
                                            🌟
                                        </span>
                                        <span>Life at IMAS</span>
                                    </h2>
                                    <p className="mt-2 text-sm text-slate-700">
                                        Experience a dynamic campus life with leadership clubs, events, and experiential projects that shape
                                        confident and industry-ready professionals.
                                    </p>
                                </div>
                                <p className="text-[11px] text-slate-500">Academic rigour blended with vibrant campus culture.</p>
                            </div>

                            <div className="grid gap-4 md:grid-cols-3">
                                {[
                                    {
                                        title: 'Leadership clubs & student committees',
                                        icon: '👥',
                                    },
                                    {
                                        title: 'Corporate events, guest lectures & conclaves',
                                        icon: '💼',
                                    },
                                    {
                                        title: 'Cultural fests & management competitions',
                                        icon: '🎭',
                                    },
                                    {
                                        title: 'Research, case studies & live projects',
                                        icon: '📚',
                                    },
                                    {
                                        title: 'Modern digital learning spaces & labs',
                                        icon: '💻',
                                    },
                                    {
                                        title: 'Soft skills & communication training sessions',
                                        icon: '🗣️',
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.title}
                                        className="group relative overflow-hidden rounded-2xl bg-white p-4 text-sm text-slate-700 shadow-sm ring-1 ring-slate-100"
                                    >
                                        <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-lg">
                                            {item.icon}
                                        </div>
                                        <p>{item.title}</p>
                                        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                            <div className="absolute bottom-0 right-0 h-16 w-20 bg-gradient-to-tl from-sky-100 to-transparent" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-4 text-xs text-slate-600">
                                Full-time management programmes at IMAS combine academic foundations, global exposure, and strong
                                placement support to prepare students for success in India and beyond.
                            </p>
                        </div>
                    </section>

                    {/* Admissions CTA */}
                    <section id="admissions-2026" className="border-b border-slate-200 bg-white">
                        <div className="mx-auto max-w-6xl px-4 py-10">
                            <div className="grid gap-8 md:grid-cols-2">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900">MBA / PGDM Admissions Open 2026 – Apply Now</h2>
                                    <p className="mt-2 text-sm text-slate-700">
                                        Take the next step towards a high-impact management career with the IMAS PGDM Plus programme.
                                        Complete your application, download the brochure, or schedule a campus visit.
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-3">
                                        <button className="rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-lg">
                                            Apply Online
                                        </button>
                                        <button className="inline-flex items-center gap-1 rounded-full border border-sky-600 px-5 py-2.5 text-sm font-semibold text-sky-700 hover:bg-sky-50">
                                            <span className="material-symbols-outlined text-[18px] align-middle">description</span>
                                            <span>Download Brochure</span>
                                        </button>
                                        <button className="inline-flex items-center gap-1 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50">
                                            <span className="material-symbols-outlined text-[18px] align-middle">calendar_month</span>
                                            <span>Schedule Campus Visit</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="rounded-2xl bg-slate-50 p-6 text-sm text-slate-700 ring-1 ring-slate-100">
                                    <h3 className="text-base font-semibold text-slate-900">Campus Address</h3>
                                    <p className="mt-1 text-sm">
                                        Plot No 37, Block – Bhangar-II
                                        <br />
                                        Near St. Xavier’s University
                                        <br />
                                        Newtown Action Area – III
                                        <br />
                                        Kolkata, West Bengal – 700160
                                    </p>
                                    <div className="mt-3 space-y-1 text-sm">
                                        <p>
                                            <span className="font-semibold">Phone:</span> +91 90888 22777
                                        </p>
                                        <p>
                                            <span className="font-semibold">Email:</span> admission@imas.ac.in
                                        </p>
                                        <p>
                                            <span className="font-semibold">Web:</span> www.imas.ac.in
                                        </p>
                                    </div>
                                    <div className="mt-4 h-28 rounded-xl border border-dashed border-slate-200 bg-white/60 p-3 text-center text-[11px] text-slate-500">
                                        Map placeholder – embed Google Maps for IMAS campus location here.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section id="faq" className="bg-slate-50">
                        <div className="mx-auto max-w-6xl px-4 py-10">
                            <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
                            <p className="mt-2 text-sm text-slate-700">
                                Have queries about the IMAS PGDM Plus programme? Find quick answers below or connect with our admissions
                                team.
                            </p>

                            <div className="mt-5 space-y-3 text-sm">
                                {[
                                    'What is the eligibility for the MBA / PGDM (PGDM Plus) programme?',
                                    'Is the programme AICTE approved?',
                                    'What is the duration of the MBA / PGDM (PGDM Plus) programme?',
                                    'Are scholarships and education loans available?',
                                    'Does IMAS offer hostel or accommodation support?',
                                    'How does the International Immersion Program work?',
                                ].map((q) => (
                                    <details
                                        key={q}
                                        className="group rounded-2xl bg-white p-4 text-slate-800 shadow-sm ring-1 ring-slate-100"
                                    >
                                        <summary className="flex cursor-pointer items-center justify-between text-sm font-medium">
                                            <span>{q}</span>
                                            <span className="text-xs text-slate-500 group-open:hidden">+</span>
                                            <span className="hidden text-xs text-slate-500 group-open:inline">−</span>
                                        </summary>
                                        <div className="mt-2 text-xs text-slate-600">
                                            {/* Replace with final approved answer content */}
                                            Answer content placeholder – update with official IMAS FAQ responses.
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="border-t border-slate-200 bg-white">
                    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-[11px] text-slate-500 md:flex-row">
                        <p>© {new Date().getFullYear()} IMAS Business School, Kolkata. All Rights Reserved.</p>
                        <div className="flex flex-wrap items-center gap-3">
                            <span>Privacy Policy</span>
                            <span>Terms &amp; Conditions</span>
                            <span>Disclaimer</span>
                        </div>
                    </div>
                </footer>

                {/* Mobile Sticky CTA */}
                <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-2 shadow-[0_-4px_12px_rgba(15,23,42,0.08)] md:hidden">
                    <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 text-xs font-semibold">
                        <button className="flex-1 rounded-full bg-sky-600 px-3 py-2 text-center text-white">Apply</button>
                        <button className="flex-1 rounded-full border border-sky-600 px-3 py-2 text-center text-sky-700">
                            Brochure
                        </button>
                        <button className="flex-1 rounded-full border border-slate-300 px-3 py-2 text-center text-slate-800">
                            Call
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
