import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Button } from '../components/ui/button'
import { IMAS_CONTACT } from '../lib/constants'
import { applyNow, downloadBrochureFor } from '../lib/utils'
import {
    GraduationCap, Star, MapPin, Building2, Target, Download, Mail, ExternalLink,
    BookOpen, Layers, Globe, Briefcase, Users, CheckCircle, Phone, Award, Trophy,
    ChevronDown, RefreshCw, ArrowRight, TrendingUp, BarChart2
} from 'lucide-react'

export function PGDMFullTimeLandingPage(): React.JSX.Element {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const marqueeRef = React.useRef<HTMLDivElement | null>(null)

    const onDownload = () => {
        const href = '/uploads/PGDM_MBA_Programme_Brochure.pdf'
        try {
            if (typeof (window as any).openBrochurePopup === 'function') {
                ; (window as any).openBrochurePopup(href)
                return
            }
        } catch { }
        downloadBrochureFor(href)
    }

    const canonicalUrl = 'https://www.imas.ac.in/pgdm-mba-full-time'

    React.useEffect(() => {
        if (typeof window === 'undefined' || !(window as any).IntersectionObserver) return
        const elements = document.querySelectorAll<HTMLElement>('[data-animate-on-scroll]')
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target as HTMLElement
                        el.classList.remove('opacity-0', 'translate-y-4')
                        el.classList.add('opacity-100', 'translate-y-0')
                        observer.unobserve(el)
                    }
                })
            },
            { threshold: 0.15 }
        )
        elements.forEach((el) => {
            el.classList.add('opacity-0', 'translate-y-4')
            observer.observe(el)
        })
        return () => observer.disconnect()
    }, [])

    React.useEffect(() => {
        const scroller = marqueeRef.current
        if (!scroller) return
        if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        scroller.setAttribute('data-animated', 'true')
        const inner = scroller.querySelector('.scroller__inner') as HTMLElement | null
        if (!inner) return
        const children = Array.from(inner.children)
        children.forEach((item) => {
            const dup = item.cloneNode(true) as HTMLElement
            dup.setAttribute('aria-hidden', 'true')
            inner.appendChild(dup)
        })
    }, [])

    const campusImages = [
        '/uploads/pgdm_plus/1.png',
        '/uploads/pgdm_plus/2.png',
        '/uploads/pgdm_plus/3.png',
        '/uploads/pgdm_plus/4.png',
        '/uploads/pgdm_plus/5.png',
        '/uploads/pgdm_plus/6.png',
        '/uploads/pgdm_plus/7.png',
    ]
    const [campusIndex, setCampusIndex] = React.useState(0)
    React.useEffect(() => {
        const id = setInterval(() => {
            setCampusIndex((i) => (i + 1) % campusImages.length)
        }, 3500)
        return () => clearInterval(id)
    }, [])

    const placementLogos = [
        { name: 'BainCapital', logo: '/uploads/bcpe_logo.png' },
        { name: 'Amazon', logo: '/uploads/Customer-logo_Amazon.png' },
        { name: 'Swiggy', logo: '/uploads/swiggy-logo.svg' },
        { name: 'Google', logo: '/uploads/Google_logo_2013-2015-600x206.png' },
        { name: 'JPMorgan Chase & Co.', logo: '/uploads/Partnership-Creatives--48-.png' },
        { name: 'Accenture', logo: '/uploads/Accenture.svg.webp' },
        { name: 'Razorpay', logo: '/uploads/Razorpay-Logo.jpg' },
        { name: 'Zomato', logo: '/uploads/Zomato-Logo.png' },
        { name: 'Flipkart', logo: '/uploads/flipkart-logo.webp' },
        { name: 'Deloitte', logo: '/uploads/deloitte.png' },
        { name: 'Delhivery', logo: '/uploads/delhivery.png' },
        { name: 'Ola', logo: '/uploads/Ola_Cabs_logo.svg' },
    ]

    const specializations = [
        {
            label: 'Marketing',
            icon: 'trending_up',
            desc: 'Digital Marketing, Branding, Consumer Behaviour & Sales Strategy',
            ideal: 'Creative and strategic business roles',
        },
        {
            label: 'Finance',
            icon: 'account_balance',
            desc: 'Financial Analysis, Investment & Banking, Corporate Finance',
            ideal: 'Numbers, analysis & financial decision-making',
        },
        {
            label: 'Human Resource',
            icon: 'group',
            desc: 'Talent Management, HR Analytics & Organizational Behavior',
            ideal: 'People management & organizational development',
        },
        {
            label: 'Logistics & Supply Chain',
            icon: 'local_shipping',
            desc: 'Supply Chain Operations, Inventory & E-commerce Logistics',
            ideal: 'Operations and business processes',
        },
        {
            label: 'Hospital Management',
            icon: 'local_hospital',
            desc: 'Hospital Operations, Healthcare Systems & Patient Management',
            ideal: 'Healthcare and management roles',
        },
    ]

    const internationalPartners = [
        { name: 'University of Sunderland', country: 'United Kingdom', flag: '🇬🇧' },
        { name: 'Lincoln University College', country: 'Malaysia', flag: '🇲🇾' },
        { name: 'SEGi University', country: 'Malaysia', flag: '🇲🇾' },
        { name: 'FPT University', country: 'Vietnam', flag: '🇻🇳' },
        { name: 'INTI International University', country: 'Malaysia', flag: '🇲🇾' },
        { name: 'Management Development Institute of Singapore', country: 'Singapore', flag: '🇸🇬' },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900 scroll-smooth">
            <Helmet>
                <title>PGDM / MBA Program (2-Year Full-Time) | Best MBA College in Kolkata | IMAS</title>
                <meta name="description" content="Join IMAS – one of the best PGDM colleges in Kolkata with placement. AICTE-approved MBA/PGDM program with internship from Year 1, dual specialization, ₹6.50+ LPA average package & ₹18 LPA highest package." />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:title" content="PGDM / MBA Program | Best MBA College in Kolkata | IMAS" />
                <meta property="og:description" content="AICTE-approved PGDM program in Kolkata with placement, internships and industry-aligned curriculum. ₹6.50+ LPA average package." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content="https://www.imas.ac.in/uploads/IMASBUILDING.jpeg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:site_name" content="IMAS Kolkata" />
                <meta property="og:locale" content="en_US" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="PGDM / MBA Program | Best MBA College in Kolkata | IMAS" />
                <meta name="twitter:description" content="AICTE-approved PGDM program in Kolkata. Placements, internships & industry exposure." />
                <meta name="twitter:image" content="https://www.imas.ac.in/uploads/IMASBUILDING.jpeg" />
            </Helmet>

            {/* Top announcement bar */}
            <div className="relative w-full border-b border-white/10 bg-gradient-to-r from-[#0b1c3a] via-[#143674] to-[#2e7bb3] text-[11px] text-white shadow-sm sm:text-sm">
                <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
                    <div className="absolute -left-10 top-0 h-20 w-40 rounded-full bg-cyan-400/40 blur-2xl" />
                    <div className="absolute -right-10 bottom-0 h-20 w-40 rounded-full bg-indigo-400/30 blur-2xl" />
                </div>
                <div className="relative mx-auto flex max-w-[1550px] items-center justify-between px-4 py-2">
                    <p className="flex items-center gap-2 font-medium min-w-0">
                        <CheckCircle className="h-4 w-4 animate-pulse flex-shrink-0" />
                        <span className="truncate">PGDM / MBA Full-Time • Admissions Open 2026 • AICTE-Approved</span>
                    </p>
                    <a
                        href={`tel:${IMAS_CONTACT.PHONE}`}
                        className="hidden items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/95 hover:bg-white/15 md:inline-flex"
                    >
                        <Phone className="h-4 w-4" />
                        <span>Request a Callback</span>
                    </a>
                </div>
            </div>

            {/* Header */}
            <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-900/80 backdrop-blur shadow-lg">
                <div className="mx-auto flex max-w-[1550px] items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-2">
                        <img
                            src="/uploads/logos/imas.png"
                            alt="IMAS International Management & Analytics School"
                            className="h-10 w-auto xl:h-12"
                        />
                    </div>

                    <nav className="hidden items-center gap-5 text-sm text-slate-200 md:flex">
                        <a
                            href="#about-pgdm"
                            className="group relative flex items-center gap-1 rounded-md px-1.5 py-1 transition-colors duration-200 hover:text-white"
                        >
                            <span className="material-symbols-outlined text-[18px]">menu_book</span>
                            <span>Program Overview</span>
                            <span className="pointer-events-none absolute -bottom-1 left-1.5 right-1.5 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#26c1d3] to-[#2e7bb3] transition-transform duration-200 group-hover:scale-x-100" />
                        </a>
                        <a
                            href="#specialisations"
                            className="group relative flex items-center gap-1 rounded-md px-1.5 py-1 transition-colors duration-200 hover:text-white"
                        >
                            <span className="material-symbols-outlined text-[18px]">layers</span>
                            <span>Specialisations</span>
                            <span className="pointer-events-none absolute -bottom-1 left-1.5 right-1.5 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#26c1d3] to-[#2e7bb3] transition-transform duration-200 group-hover:scale-x-100" />
                        </a>
                        <a
                            href="#eligibility"
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-semibold text-white shadow-sm transition-all hover:bg-white/15"
                        >
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                                <span className="material-symbols-outlined text-[16px]">checklist</span>
                            </span>
                            Eligibility
                        </a>
                        <a
                            href="#placements"
                            className="group relative flex items-center gap-1 rounded-md px-1.5 py-1 transition-colors duration-200 hover:text-white"
                        >
                            <span className="material-symbols-outlined text-[18px]">work</span>
                            <span>Placements</span>
                            <span className="pointer-events-none absolute -bottom-1 left-1.5 right-1.5 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#26c1d3] to-[#2e7bb3] transition-transform duration-200 group-hover:scale-x-100" />
                        </a>
                        <a
                            href="#life-at-imas"
                            className="group relative flex items-center gap-1 rounded-md px-1.5 py-1 transition-colors duration-200 hover:text-white"
                        >
                            <span className="material-symbols-outlined text-[18px]">groups</span>
                            <span>Life at IMAS</span>
                            <span className="pointer-events-none absolute -bottom-1 left-1.5 right-1.5 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#26c1d3] to-[#2e7bb3] transition-transform duration-200 group-hover:scale-x-100" />
                        </a>
                        <a
                            href="#admissions-2026"
                            className="group relative flex items-center gap-1 rounded-md px-1.5 py-1 transition-colors duration-200 hover:text-white"
                        >
                            <span className="material-symbols-outlined text-[18px]">check_circle</span>
                            <span>Admissions 2026</span>
                            <span className="pointer-events-none absolute -bottom-1 left-1.5 right-1.5 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#26c1d3] to-[#2e7bb3] transition-transform duration-200 group-hover:scale-x-100" />
                        </a>

                        <a
                            href={`tel:${IMAS_CONTACT.PHONE.replace(/\s/g, '')}`}
                            className="ml-1 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/95 hover:bg-white/15"
                        >
                            <Phone className="h-3.5 w-3.5" />
                            <span>{IMAS_CONTACT.PHONE}</span>
                        </a>

                        <Button
                            onClick={() => {
                                try { applyNow() } catch (e) {
                                    window.dispatchEvent(new Event('imas:openEnquiryForm'))
                                }
                            }}
                            className="ml-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg ring-1 ring-white/10 transition-all hover:-translate-y-0.5 hover:from-teal-600 hover:to-blue-700 hover:shadow-teal-500/20"
                        >
                            Inquire Now
                        </Button>
                    </nav>

                    <button
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 transition-colors duration-200 hover:bg-white/10 md:hidden"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open menu</span>
                        <div className="h-4 w-4 space-y-1">
                            <span className="block h-[2px] w-full bg-white" />
                            <span className="block h-[2px] w-full bg-white" />
                            <span className="block h-[2px] w-full bg-white" />
                        </div>
                    </button>
                </div>
            </header>

            {/* Mobile menu backdrop */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setMobileMenuOpen(false)} />
            )}

            {/* Mobile menu drawer */}
            <div
                className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <img src="/uploads/logos/imas.png" alt="IMAS" className="h-10 w-auto" />
                        <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 hover:text-gray-900">
                            <ChevronDown className="h-5 w-5 rotate-180" />
                        </Button>
                    </div>
                    <nav className="flex-1 p-4 overflow-y-auto">
                        <ul className="space-y-1.5">
                            {[
                                { href: '#about-pgdm', icon: BookOpen, label: 'Program Overview' },
                                { href: '#specialisations', icon: Layers, label: 'Specialisations' },
                                { href: '#placements', icon: Briefcase, label: 'Placements' },
                                { href: '#life-at-imas', icon: Users, label: 'Life at IMAS' },
                                { href: '#admissions-2026', icon: CheckCircle, label: 'Admissions 2026' },
                            ].map(({ href, icon: Icon, label }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-left text-gray-700 hover:text-[#2e7bb3] hover:bg-slate-50 transition-colors"
                                    >
                                        <Icon className="h-5 w-5" />
                                        <span className="font-medium">{label}</span>
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="#eligibility"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-left text-gray-800 bg-slate-100 border border-slate-200 hover:bg-sky-600 hover:text-white hover:border-transparent transition-all"
                                >
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                                        <span className="material-symbols-outlined text-[16px]">checklist</span>
                                    </span>
                                    <span className="font-semibold">Eligibility</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="p-4 border-t border-gray-200 space-y-2.5">
                        <Button
                            className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white"
                            onClick={() => { setMobileMenuOpen(false); try { applyNow() } catch (e) { window.dispatchEvent(new Event('imas:openEnquiryForm')) } }}
                        >
                            Inquire Now
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full border-[#26c1d3] text-[#2e7bb3] hover:bg-[#26c1d3]/10"
                            onClick={() => { setMobileMenuOpen(false); onDownload() }}
                        >
                            <Download className="h-4 w-4 mr-2" /> Download Brochure
                        </Button>
                    </div>
                </div>
            </div>

            {/* ─── HERO ─── */}
            <section
                id="hero"
                className="relative overflow-hidden border-b border-slate-200"
                style={{
                    backgroundImage: "url('/uploads/IMASBUILDING.jpeg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-[#143674]/95 via-[#143674]/93 to-black/80" aria-hidden="true" />
                <div className="pointer-events-none absolute -left-10 top-10 h-64 w-64 rounded-full bg-cyan-400/30 blur-3xl" aria-hidden="true" />
                <div className="pointer-events-none absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" aria-hidden="true" />

                <div
                    data-animate-on-scroll
                    className="relative mx-auto grid max-w-[1550px] grid-cols-1 gap-5 px-4 py-5 md:grid-cols-12 md:gap-10 md:py-14 transition-all duration-700 ease-out"
                >
                    <div className="flex-1 md:col-span-8 space-y-3 sm:space-y-5">
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-medium text-white shadow-sm">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
                            <span>PGDM Admissions Open for 2026–28</span>
                        </div>

                        <div className="space-y-3">
                            <h1 className="text-lg sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-white drop-shadow-md">
                                Best MBA College in Kolkata<br />
                                <span className="text-cyan-300">with Placement & Internships</span>
                            </h1>
                            <p className="text-xs sm:text-lg font-medium text-gray-200/95 drop-shadow">
                                Build a High-Paying Career with PGDM / MBA in Kolkata
                            </p>
                            <div className="flex items-center gap-0.5 sm:gap-1 text-xs font-semibold text-white" aria-label="Student rating">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400" fill="currentColor" />
                                ))}
                                <span className="ml-2 text-[10px] sm:text-[11px] text-gray-200/95">4.9/5 Student Rating</span>
                            </div>
                        </div>

                        <p className="max-w-xl text-xs leading-snug text-gray-200 sm:text-sm">
                            IMAS is one of the best PGDM colleges in Kolkata with placement — offering a career-driven, AICTE-approved PGDM program with internship from Year 1, dual specialization, and strong corporate exposure.
                        </p>

                        {/* Marquee */}
                        <div className="relative overflow-hidden">
                            <div ref={marqueeRef} className="scroller" data-speed="fast" data-direction="left">
                                <div className="scroller__inner whitespace-nowrap text-xs font-medium text-white">
                                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 shadow-sm border-t border-b border-white/30"><GraduationCap className="h-4 w-4 text-white" /><span>Internship from Year 1</span></span>
                                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 shadow-sm border-t border-b border-white/30"><Award className="h-4 w-4 text-white" /><span>Dual Specialization + Certifications</span></span>
                                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 shadow-sm border-t border-b border-white/30"><CheckCircle className="h-4 w-4 text-white" /><span>Industry-Aligned Curriculum</span></span>
                                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 shadow-sm border-t border-b border-white/30"><Trophy className="h-4 w-4 text-white" /><span>Strong Placement Support</span></span>
                                </div>
                            </div>
                        </div>

                        {/* CTA buttons */}
                        <div className="flex flex-col md:flex-row xs:flex-row flex-wrap items-stretch xs:items-center gap-2 sm:gap-3 pt-1">
                            <Button
                                onClick={() => { try { applyNow() } catch (e) { window.dispatchEvent(new Event('imas:openEnquiryForm')) } }}
                                className="group rounded-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 px-4 py-2.5 text-xs sm:text-sm sm:px-5 sm:py-2.5 font-semibold text-white shadow-md transition-all duration-300 active:scale-95 justify-center"
                            >
                                Talk to Admission Expert
                                <ExternalLink className="ml-2 h-4 w-4 text-white opacity-80" />
                            </Button>
                            <Button
                                onClick={onDownload}
                                variant="outline"
                                className="group rounded-full bg-transparent border-2 border-white/30 px-4 py-2.5 text-xs sm:text-sm sm:px-5 sm:py-2.5 font-semibold text-white transition-all duration-300 hover:bg-white/10 active:scale-95 justify-center"
                            >
                                <Download className="h-4 w-4 mr-1 text-white" />
                                Download Brochure
                            </Button>
                            <Button
                                onClick={() => window.open('https://admission.imas.ac.in/', '_blank')}
                                variant="link"
                                className="text-xs sm:text-sm font-semibold text-white underline-offset-4 hover:underline justify-center"
                            >
                                Apply Now →
                            </Button>
                        </div>

                        {/* Info chips */}
                        <div className="mt-4 grid max-w-xl grid-cols-3 items-stretch gap-3 text-center text-[11px] text-slate-600 sm:grid-cols-3">
                            {[
                                { label: 'Programme', value: 'PGDM / MBA' },
                                { label: 'Intake', value: '2026 Batch' },
                                { label: 'Location', value: 'Newtown, Kolkata' },
                            ].map(({ label, value }) => (
                                <div key={label} className="h-full rounded-xl bg-white items-center justify-center p-2.5 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    <p className="text-[10px] uppercase tracking-wide text-slate-500">{label}</p>
                                    <p className="mt-1 text-[10px] font-semibold text-slate-900 sm:text-sm">{value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Package stats */}
                        <div className="mt-1 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3">
                            <div className="flex flex-col items-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-2 sm:px-4 sm:flex-row sm:gap-2 text-white">
                                <span className="text-sm sm:text-2xl font-bold text-yellow-300">₹6.5+ LPA</span>
                                <span className="text-[9px] sm:text-xs opacity-80 text-center">Avg Package</span>
                            </div>
                            <div className="flex flex-col items-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-2 sm:px-4 sm:flex-row sm:gap-2 text-white">
                                <span className="text-sm sm:text-2xl font-bold text-cyan-300">₹18 LPA</span>
                                <span className="text-[9px] sm:text-xs opacity-80 text-center">Highest</span>
                            </div>
                            <div className="flex flex-col items-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-2 sm:px-4 sm:flex-row sm:gap-2 text-white">
                                <span className="text-sm sm:text-2xl font-bold text-green-300">465+</span>
                                <span className="text-[9px] sm:text-xs opacity-80 text-center">Placements</span>
                            </div>
                        </div>
                    </div>

                    {/* Hero image - hidden on mobile */}
                    <div className="hidden md:block sm:w-[450px] h-full md:col-span-4">
                        <img
                            src="/uploads/pgdm_full_time/hero_image.jpg"
                            alt="PGDM MBA Students at IMAS"
                            className="w-full h-full object-cover rounded-xl"
                            onError={(e) => { const t = e.currentTarget as HTMLImageElement; t.style.display = 'none' }}
                        />
                    </div>
                </div>
            </section>

            {/* ─── ABOUT PGDM ─── */}
            <section id="about-pgdm" className="border-b border-slate-200 bg-slate-50">
                <div
                    data-animate-on-scroll
                    className="mx-auto max-w-[1550px] px-4 py-6 transition-all duration-700 ease-out sm:py-10"
                >
                    <div className="relative overflow-hidden rounded-xl bg-white/95 ring-1 ring-white/20 p-4 sm:p-5 md:p-7">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute inset-0 mesh-grid" />
                        </div>
                        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700">
                                        <GraduationCap className="h-5 w-5 text-white" />
                                    </span>
                                    <h2 className="text-base sm:text-xl font-bold bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
                                        About the PGDM Program
                                    </h2>
                                </div>
                                <div className="h-1 w-32 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600 mb-4" />

                                <p className="text-[13px] sm:text-sm leading-relaxed text-slate-700">
                                    The PGDM program at IMAS Kolkata is designed to develop future business leaders through a combination of management fundamentals, practical learning, and industry exposure.
                                </p>
                                <p className="text-[13px] sm:text-sm leading-relaxed text-slate-800">
                                    Whether you're searching for a <strong>PGDM college in Kolkata with placement</strong>, the best PGDM course in West Bengal, or an MBA with internship — IMAS offers real-world business learning, case studies, live projects, and skill-based training.
                                </p>

                                {/* Feature Chips */}
                                <div className="flex flex-wrap items-center gap-2">
                                    {[
                                        { icon: 'groups', label: 'Industry Professionals' },
                                        { icon: 'psychology', label: 'Expert Mentors' },
                                        { icon: 'workspace_premium', label: 'Certifications' },
                                    ].map((chip) => (
                                        <button
                                            key={chip.label}
                                            className="group rounded-full bg-slate-100 border border-slate-200 px-3 py-1 inline-flex items-center gap-1.5 font-medium text-xs hover:bg-gradient-to-r hover:from-sky-600 hover:to-blue-700 hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer"
                                        >
                                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                                                <span className="material-symbols-outlined text-[15px]">{chip.icon}</span>
                                            </span>
                                            <span>{chip.label}</span>
                                        </button>
                                    ))}
                                </div>

                                <div className="pt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                                    {['Placement-Focused', 'Internship from Year 1', 'Industry Exposure', 'Career Elevation'].map((t, i, arr) => (
                                        <React.Fragment key={t}>
                                            <span className="font-semibold">{t}</span>
                                            {i < arr.length - 1 && <span>•</span>}
                                        </React.Fragment>
                                    ))}
                                </div>

                                <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2">
                                    <Button
                                        onClick={onDownload}
                                        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-md hover:from-sky-500 hover:to-blue-600"
                                    >
                                        Download Programme Brochure
                                        <ExternalLink className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        type="button"
                                        onClick={() => { window.location.href = `tel:${IMAS_CONTACT.PHONE.replace(/\s/g, '')}` }}
                                        className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold text-sky-700 shadow-sm hover:border-sky-400 hover:bg-sky-50"
                                    >
                                        Speak to an Admission Expert
                                        <span className="material-symbols-outlined text-[16px] align-middle">call</span>
                                    </Button>
                                </div>
                            </div>

                            {/* Campus image carousel */}
                            <div className="flex items-center justify-center">
                                <div className="relative w-full overflow-hidden rounded-2xl border bg-white shadow-sm ring-1 ring-slate-200 h-48 sm:h-64 md:h-[420px]">
                                    {campusImages.map((src, idx) => (
                                        <img
                                            key={idx}
                                            src={src}
                                            alt="IMAS Kolkata campus"
                                            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${idx === campusIndex ? 'opacity-100' : 'opacity-0'}`}
                                            onError={(e) => { const target = e.currentTarget as HTMLImageElement; target.src = '/uploads/logos/IMAS_LOGO_PNG.png' }}
                                        />
                                    ))}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                                        {campusImages.map((_, idx) => (
                                            <span key={idx} className={`h-1.5 w-1.5 rounded-full ${idx === campusIndex ? 'bg-white' : 'bg-white/50'}`} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── WHY CHOOSE IMAS ─── */}
            <section id="why-imas" className="border-b border-slate-200 bg-white">
                <div
                    data-animate-on-scroll
                    className="mx-auto max-w-[1550px] px-4 py-6 transition-all duration-700 ease-out sm:py-10"
                >
                    <div className="relative overflow-hidden rounded-3xl bg-white/95 ring-1 ring-white/20 p-4 sm:p-5 md:p-7">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute inset-0 mesh-grid" />
                        </div>

                        <div className="mb-4 max-w-2xl">
                            <div className="text-base sm:text-xl font-bold bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
                                Why Choose PGDM / MBA at IMAS?
                            </div>
                            <div className="mt-1 h-1 w-32 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />
                            <p className="mt-2 text-xs text-slate-700 sm:text-sm">
                                Top MBA colleges in Kolkata with placement — recognized for consistent results across sectors.
                            </p>
                        </div>

                        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                            {[
                                { label: 'AICTE-Approved PGDM Programme', icon: 'verified' },
                                { label: 'Internship from Year 1', icon: 'work_history' },
                                { label: 'Dual Specialization + Certifications', icon: 'layers' },
                                { label: 'Corporate Connect Program', icon: 'business_center' },
                                { label: '20+ Structured Presentations Across Semesters', icon: 'presenter' },
                                { label: 'Six Sigma (Green Belt) Certification Included', icon: 'workspace_premium' },
                                { label: 'Business Communication Training', icon: 'record_voice_over' },
                                { label: 'Industry Visits & Corporate Mentorship', icon: 'factory' },
                                { label: 'Advanced Excel & Analytics Training', icon: 'query_stats' },
                            ].map((f) => (
                                <div key={f.label} className="group inline-flex items-start gap-3 rounded-2xl bg-white p-3 sm:p-4 text-[13px] sm:text-sm shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                                    <span className="inline-flex p-1 md:p-2 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                                        <span className="material-symbols-outlined text-[20px]">{f.icon}</span>
                                    </span>
                                    <p className="font-medium text-slate-900">{f.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-5">
                            <Button
                                onClick={() => { try { applyNow() } catch (e) { window.dispatchEvent(new Event('imas:openEnquiryForm')) } }}
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-md hover:from-sky-500 hover:to-blue-600"
                            >
                                Talk to Academic Advisor
                                <ExternalLink className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── AWARDS ─── */}
            <section id="awards" className="border-b border-slate-200 bg-slate-50">
                <div
                    data-animate-on-scroll
                    className="mx-auto max-w-[1550px] px-4 py-6 transition-all duration-700 ease-out sm:py-10"
                >
                    <div className="space-y-4">
                        <div className="award-banner relative overflow-hidden rounded-3xl p-4 sm:p-6 text-white shadow-lg">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-[#0b1c3a]">
                                    <Trophy className="h-4 w-4" />
                                </span>
                                <div>
                                    <div className="text-base sm:text-xl font-bold">Awards & Recognitions</div>
                                    <div className="text-[11px] sm:text-xs opacity-90">National • Industry • Academic</div>
                                </div>
                            </div>
                            <p className="mt-2 text-xs sm:text-sm opacity-90">IMAS is consistently recognised among the best MBA colleges in Kolkata for academic excellence, innovation, and placement outcomes.</p>
                            <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px]">
                                {['Academic Excellence', 'Emerging School', 'Innovation', 'Professional Development'].map((tag) => (
                                    <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 shadow-sm ring-1 ring-white/20">
                                        <span className="material-symbols-outlined text-[16px]">military_tech</span>
                                        <span>{tag}</span>
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                { title: 'Top 10 Best B-School in Kolkata', badge: 'KNOWLEDGE REVIEW 2026', icon: 'military_tech' },
                                { title: 'Best Emerging Business School Award', badge: 'EDULITE EXCELLENCE 2024', icon: 'trending_up' },
                                { title: 'Best College for Innovation & Startup in Kolkata', badge: 'EDULITE EXCELLENCE 2025', icon: 'emoji_objects' },
                            ].map((a) => (
                                <div key={a.title} className="trophy-shine relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0b1c3a] to-[#143674] p-4 text-center text-white shadow-md ring-1 ring-amber-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 text-[10px]">{a.badge}</div>
                                    <div className="mt-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-[#0b1c3a] pulse-gold">
                                        <span className="material-symbols-outlined text-[22px]">{a.icon}</span>
                                    </div>
                                    <div className="mt-2 text-sm font-semibold">{a.title}</div>
                                    <div className="text-[10px] opacity-80">Recognised across India</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── SPECIALIZATIONS ─── */}
            <section id="specialisations" className="relative border-b border-slate-200 bg-white">
                <div
                    data-animate-on-scroll
                    className="mx-auto max-w-[1550px] px-4 py-6 transition-all duration-700 ease-out sm:py-10"
                >
                    <div className="relative overflow-hidden rounded-3xl bg-white/95 backdrop-blur-sm ring-1 ring-white/20 p-4 sm:p-5 md:p-7">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute inset-0 mesh-grid" />
                        </div>

                        <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                            <div className="max-w-2xl">
                                <div className="flex items-center gap-2 text-base sm:text-xl font-bold bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                                        <span className="material-symbols-outlined text-[20px] text-emerald-700">school</span>
                                    </span>
                                    <span>PGDM Specialisations</span>
                                </div>
                                <div className="mt-1 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />
                                <p className="mt-2 text-xs text-slate-700 sm:text-sm">
                                    Choose from industry-relevant PGDM specializations aligned with job market demand:
                                </p>
                            </div>
                            <p className="text-[11px] text-slate-500">Choose a focus area that aligns with your career goals.</p>
                        </div>

                        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                            {specializations.map((spec) => (
                                <div
                                    key={spec.label}
                                    className="group flex flex-col gap-2.5 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="inline-flex p-2 items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                                            <span className="material-symbols-outlined text-[20px]">{spec.icon}</span>
                                        </span>
                                        <p className="font-semibold text-slate-900 text-sm">{spec.label}</p>
                                    </div>
                                    <p className="text-xs text-slate-600 leading-relaxed">{spec.desc}</p>
                                    <p className="text-[11px] text-sky-700 font-medium">
                                        👉 Ideal for: {spec.ideal}
                                    </p>
                                </div>
                            ))}

                            {/* Add-on certifications card */}
                            <div className="group flex flex-col gap-2.5 rounded-2xl bg-gradient-to-br from-indigo-50 to-sky-50 p-4 shadow-sm ring-1 ring-indigo-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                                <div className="flex items-center gap-3">
                                    <span className="inline-flex p-2 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                                        <span className="material-symbols-outlined text-[20px]">add_circle</span>
                                    </span>
                                    <p className="font-semibold text-slate-900 text-sm">Add-On Certifications</p>
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed">Enhance your PGDM with in-demand future skills certifications:</p>
                                <div className="flex flex-wrap gap-2">
                                    {['Business Analytics', 'Fintech', 'AI & Data Science'].map((cert) => (
                                        <span key={cert} className="inline-flex items-center gap-1 rounded-full bg-indigo-100 px-3 py-1 text-[11px] font-medium text-indigo-800">
                                            <span className="material-symbols-outlined text-[14px]">verified</span>
                                            {cert}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-5">
                            <Button
                                onClick={onDownload}
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-md hover:from-sky-500 hover:to-blue-600"
                            >
                                Download Specialisation Details
                                <Download className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── PLACEMENTS ─── */}
            <section id="placements" className="border-b border-slate-200 bg-slate-50">
                <div
                    data-animate-on-scroll
                    className="mx-auto max-w-[1550px] px-4 py-6 transition-all duration-700 ease-out sm:py-10"
                >
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b1c3a] to-[#143674] p-4 sm:p-6 text-white shadow-xl">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
                            <div className="absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-indigo-400/10 blur-3xl" />
                        </div>

                        <div className="relative mb-5">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-[#0b1c3a]">
                                    <Briefcase className="h-4 w-4" />
                                </span>
                                <div>
                                    <div className="text-base sm:text-xl font-bold">Placement Highlights</div>
                                    <div className="text-[11px] sm:text-xs opacity-80">
                                        IMAS is recognized among the best MBA colleges in Kolkata with placement support
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300" />
                        </div>

                        {/* Stats */}
                        <div className="relative grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4 mb-5">
                            {[
                                { value: '₹6.50+ LPA', label: 'Average Package', icon: 'trending_up', color: 'from-yellow-400 to-amber-500' },
                                { value: '₹18.00 LPA', label: 'Highest Package', icon: 'emoji_events', color: 'from-cyan-400 to-teal-500' },
                                { value: '465+', label: 'Placement Offers', icon: 'handshake', color: 'from-green-400 to-emerald-500' },
                                { value: '100%', label: 'Internship Support', icon: 'work_history', color: 'from-purple-400 to-indigo-500' },
                            ].map((stat) => (
                                <div key={stat.label} className="rounded-2xl bg-white/10 p-3 text-center ring-1 ring-white/20 backdrop-blur-sm">
                                    <div className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r ${stat.color} text-[#0b1c3a] mb-2`}>
                                        <span className="material-symbols-outlined text-[20px]">{stat.icon}</span>
                                    </div>
                                    <p className="text-lg sm:text-xl font-bold">{stat.value}</p>
                                    <p className="text-[11px] opacity-80 mt-0.5">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Sectors */}
                        <div className="relative mb-6">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-300 mb-3">Students placed across</p>
                            <div className="flex flex-wrap gap-2">
                                {['IT & Tech Companies', 'BFSI Sector', 'Consulting Firms', 'FMCG & E-commerce'].map((sector) => (
                                    <span key={sector} className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/20">
                                        <CheckCircle className="h-3.5 w-3.5 text-green-400" />
                                        {sector}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Logos */}
                        <div className="relative">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-300 mb-3">Our Recruiters</p>
                            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
                                {placementLogos.map((p) => (
                                    <div key={p.name} className="flex items-center justify-center rounded-xl bg-white p-2 sm:p-3 shadow-sm ring-1 ring-white/20 h-11 sm:h-14">
                                        <img
                                            src={p.logo}
                                            alt={p.name}
                                            className="h-6 sm:h-8 max-w-full object-contain"
                                            onError={(e) => { const t = e.currentTarget as HTMLImageElement; t.style.display = 'none' }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CAREER OPPORTUNITIES ─── */}
            <section id="careers" className="border-b border-slate-200 bg-white">
                <div
                    data-animate-on-scroll
                    className="mx-auto max-w-[1550px] px-4 py-6 transition-all duration-700 ease-out sm:py-10"
                >
                    <div className="mb-4 max-w-2xl">
                        <div className="flex items-center gap-2">
                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                                <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                            </span>
                            <div>
                                <h2 className="text-base sm:text-xl font-bold bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
                                    Career Opportunities After MBA/PGDM
                                </h2>
                                <p className="text-[11px] sm:text-xs font-medium text-slate-600">Roles our graduates step into</p>
                            </div>
                        </div>
                        <div className="mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 mt-6">
                        {[
                            { role: 'Business Analyst', icon: 'query_stats' },
                            { role: 'Marketing Manager', icon: 'campaign' },
                            { role: 'Financial Analyst', icon: 'account_balance' },
                            { role: 'HR Manager', icon: 'group' },
                            { role: 'Supply Chain Manager', icon: 'local_shipping' },
                            { role: 'Healthcare Administrator', icon: 'local_hospital' },
                        ].map((c) => (
                            <div key={c.role} className="group flex flex-col items-center gap-2 rounded-2xl bg-slate-50 p-3 text-center shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-gradient-to-br hover:from-sky-600 hover:to-blue-700 hover:text-white">
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white group-hover:from-white/20 group-hover:to-white/10">
                                    <span className="material-symbols-outlined text-[22px]">{c.icon}</span>
                                </span>
                                <p className="text-xs font-semibold text-slate-800 group-hover:text-white">{c.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── TESTIMONIALS ─── */}
            <section id="testimonials" className="border-b border-slate-200 bg-slate-50">
                <div
                    data-animate-on-scroll
                    className="mx-auto max-w-[1550px] px-4 py-6 transition-all duration-700 ease-out sm:py-10"
                >
                    <div className="mb-4">
                        <div className="flex items-center gap-2">
                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                                <Star className="h-4 w-4" />
                            </span>
                            <div>
                                <h2 className="text-base sm:text-xl font-bold bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
                                    Student Testimonials
                                </h2>
                                <p className="text-[11px] sm:text-xs font-medium text-slate-600">What our students & industry partners say</p>
                            </div>
                        </div>
                        <div className="mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />
                    </div>

                    <div className="mt-6 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                quote: 'The program helped me build real analytics skills with tools and live projects.',
                                name: 'Anurag Jain',
                                role: 'Data Analyst',
                                batch: 'MBA / PGDM 2025',
                                type: 'student',
                            },
                            {
                                quote: 'The hands-on training and internship exposure prepared me very well for corporate roles.',
                                name: 'Siddharth Roy',
                                role: 'Business Analyst',
                                batch: 'MBA / PGDM 2025',
                                type: 'student',
                            },
                            {
                                quote: 'IMAS students demonstrate excellent adaptability, professionalism, and business understanding.',
                                name: 'Mr. Avijit Basu',
                                role: 'NHRD',
                                batch: 'Industry Partner',
                                type: 'industry',
                            },
                            {
                                quote: 'Experiential learning at IMAS provides practical exposure and deep operational insights.',
                                name: 'Mr. Sounak Sen',
                                role: 'KPMG',
                                batch: 'Industry Partner',
                                type: 'industry',
                            },
                        ].map((t) => (
                            <div
                                key={t.name}
                                className={`group rounded-2xl p-4 shadow-sm ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${t.type === 'industry' ? 'bg-gradient-to-br from-[#0b1c3a]/5 to-[#143674]/10 ring-slate-300' : 'bg-white ring-slate-200'}`}
                            >
                                <div className="flex items-center gap-0.5 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-3 w-3 text-yellow-400" fill="currentColor" />
                                    ))}
                                    {t.type === 'industry' && (
                                        <span className="ml-2 text-[10px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full">Industry</span>
                                    )}
                                </div>
                                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-4">"{t.quote}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-sky-500 to-blue-700 flex items-center justify-center text-white text-xs font-bold">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-slate-900">{t.name}</p>
                                        <p className="text-[10px] text-slate-500">{t.role} • {t.batch}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── INTERNATIONAL IMMERSION ─── */}
            <section id="international" className="border-b border-slate-200 bg-white">
                <div
                    data-animate-on-scroll
                    className="mx-auto max-w-[1550px] px-4 py-6 transition-all duration-700 ease-out sm:py-10"
                >
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#143674] to-[#0b1c3a] p-4 sm:p-6 text-white shadow-lg">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
                        </div>

                        <div className="relative flex items-center gap-2 mb-2">
                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 text-[#0b1c3a]">
                                <Globe className="h-4 w-4" />
                            </span>
                            <div>
                                <h2 className="text-base sm:text-xl font-bold">International Immersion Programmes</h2>
                                <p className="text-[11px] sm:text-xs opacity-80">Global Exposure & Academic Collaborations</p>
                            </div>
                        </div>
                        <div className="relative mt-1 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 mb-4" />

                        <p className="relative text-xs sm:text-sm opacity-90 max-w-2xl mb-6">
                            Gain global exposure through international immersion programs and academic collaborations with leading institutions worldwide.
                        </p>

                        <div className="relative grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
                            {internationalPartners.map((p) => (
                                <div key={p.name} className="flex flex-col items-center gap-2 rounded-2xl bg-white/10 p-3 text-center ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
                                    <span className="text-xl">{p.flag}</span>
                                    <p className="text-[11px] font-semibold leading-tight">{p.name}</p>
                                    <p className="text-[10px] opacity-70">{p.country}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CAMPUS / LIFE AT IMAS ─── */}
            <section id="life-at-imas" className="border-b border-slate-200 bg-slate-50">
                <div
                    data-animate-on-scroll
                    className="mx-auto max-w-[1550px] px-4 py-6 transition-all duration-700 ease-out sm:py-10"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                            <Users className="h-4 w-4" />
                        </span>
                        <div>
                            <h2 className="text-base sm:text-xl font-bold bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
                                Campus Experience
                            </h2>
                            <p className="text-[11px] sm:text-xs font-medium text-slate-600">Campus Life • Global Exposure • Student Activities • Industry Training</p>
                        </div>
                    </div>
                    <div className="mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600 mb-5" />

                    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { src: '/uploads/pgdm_plus/1.png', title: 'Leadership clubs & student committees', icon: 'groups' },
                            { src: '/uploads/pgdm_plus/2.png', title: 'Corporate events, guest lectures & conclaves', icon: 'business_center' },
                            { src: '/uploads/pgdm_plus/3.png', title: 'Cultural fests & management competitions', icon: 'emoji_events' },
                            { src: '/uploads/pgdm_plus/4.png', title: 'Research, case studies & live projects', icon: 'menu_book' },
                            { src: '/uploads/pgdm_plus/5.png', title: 'Modern digital learning spaces & labs', icon: 'devices' },
                            { src: '/uploads/pgdm_plus/6.png', title: 'Soft skills & communication training sessions', icon: 'record_voice_over' },
                        ].map((slide) => (
                            <div key={slide.title} className="group relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md aspect-[4/3]">
                                <img
                                    src={slide.src}
                                    alt={slide.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => { const t = e.currentTarget as HTMLImageElement; t.src = '/uploads/logos/IMAS_LOGO_PNG.png' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center gap-2">
                                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                                        <span className="material-symbols-outlined text-white text-[16px]">{slide.icon}</span>
                                    </span>
                                    <p className="text-xs font-semibold text-white leading-tight">{slide.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Hostel & facilities */}
                    <div className="mt-3 grid gap-3 grid-cols-2 md:grid-cols-4">
                        {[
                            { icon: 'hotel', label: 'Separate Hostels for Boys & Girls' },
                            { icon: 'security', label: 'Safe & Secure Campus' },
                            { icon: 'wifi', label: 'Wi-Fi Enabled Environment' },
                            { icon: 'school', label: 'Modern Classrooms' },
                        ].map((f) => (
                            <div key={f.label} className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-200">
                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                                    <span className="material-symbols-outlined text-[18px]">{f.icon}</span>
                                </span>
                                <p className="text-xs font-medium text-slate-800">{f.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Campus video */}
                    <div className="mt-4 rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200">
                        <div className="relative aspect-video bg-slate-100">
                            <iframe
                                title="IMAS Campus Experience"
                                src="https://www.youtube.com/embed/rM3MWkhO6GA"
                                className="absolute inset-0 h-full w-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── SCHOLARSHIPS & LOANS ─── */}
            <section id="scholarships" className="border-b border-slate-200 bg-white">
                <div
                    data-animate-on-scroll
                    className="mx-auto max-w-[1550px] px-4 py-6 transition-all duration-700 ease-out sm:py-10"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                            <span className="material-symbols-outlined text-[18px]">savings</span>
                        </span>
                        <div>
                            <h2 className="text-base sm:text-xl font-bold bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
                                Scholarships & Loans
                            </h2>
                            <p className="text-[11px] sm:text-xs font-medium text-slate-600">Study Now, Pay Later Options Available</p>
                        </div>
                    </div>
                    <div className="mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600 mb-6" />

                    <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
                        {[
                            { icon: 'workspace_premium', label: 'Merit-Based Scholarships', color: 'from-amber-400 to-yellow-500', textColor: 'text-amber-700', bg: 'bg-amber-50' },
                            { icon: 'account_balance', label: 'Govt. Schemes', color: 'from-sky-500 to-blue-600', textColor: 'text-sky-700', bg: 'bg-sky-50' },
                            { icon: 'credit_card', label: 'Student Credit Card Facility', color: 'from-emerald-500 to-teal-600', textColor: 'text-emerald-700', bg: 'bg-emerald-50' },
                            { icon: 'real_estate_agent', label: 'Education Loan Assistance', color: 'from-purple-500 to-indigo-600', textColor: 'text-purple-700', bg: 'bg-purple-50' },
                        ].map((s) => (
                            <div key={s.label} className={`flex flex-col items-center gap-3 rounded-2xl ${s.bg} p-4 text-center shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}>
                                <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r ${s.color} text-white`}>
                                    <span className="material-symbols-outlined text-[22px]">{s.icon}</span>
                                </span>
                                <p className={`text-[13px] sm:text-sm font-semibold ${s.textColor}`}>{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── ELIGIBILITY & ADMISSIONS ─── */}
            <section id="eligibility" className="border-b border-slate-200 bg-slate-50">
                <div
                    data-animate-on-scroll
                    className="mx-auto max-w-[1550px] px-4 py-6 transition-all duration-700 ease-out sm:py-10"
                >
                    <div className="grid gap-4 md:grid-cols-2">
                        {/* Eligibility */}
                        <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-slate-200">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                                    <span className="material-symbols-outlined text-[18px]">checklist</span>
                                </span>
                                <h2 className="text-base sm:text-lg font-bold bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
                                    Eligibility Criteria
                                </h2>
                            </div>
                            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600 mb-4" />
                            <p className="text-[13px] sm:text-sm text-slate-700 leading-relaxed">
                                Graduates in any discipline with valid <strong>CAT / XAT / MAT scores</strong> are eligible. Candidates without valid scores will be required to take the <strong>IMASAT admission test</strong> conducted by IMAS.
                            </p>
                            <p className="mt-3 text-[13px] sm:text-sm text-slate-700 leading-relaxed">
                                The selection process includes a <strong>Group Discussion and Personal Interview</strong>, providing a comprehensive evaluation of candidates.
                            </p>
                            <div className="mt-4 space-y-2">
                                {[
                                    'Bachelor\'s degree in any discipline from a recognized university',
                                    'Valid CAT / XAT / MAT score OR IMASAT test',
                                    'Group Discussion & Personal Interview',
                                ].map((req) => (
                                    <div key={req} className="flex items-start gap-2 text-xs text-slate-700">
                                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>{req}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Admissions 2026 */}
                        <div id="admissions-2026" className="rounded-2xl bg-gradient-to-br from-[#143674] to-[#0b1c3a] p-4 sm:p-6 text-white shadow-sm ring-1 ring-slate-200">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-[#0b1c3a]">
                                    <span className="material-symbols-outlined text-[18px]">school</span>
                                </span>
                                <h2 className="text-base sm:text-lg font-bold">Admissions 2026–28</h2>
                            </div>
                            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 mb-4" />
                            <p className="text-xs sm:text-sm opacity-90 mb-4">
                                Seats are limited. Apply early to secure your spot in the 2026–28 PGDM / MBA batch at IMAS.
                            </p>
                            <div className="space-y-2 mb-5">
                                {[
                                    { step: '1', label: 'Fill the Application Form' },
                                    { step: '2', label: 'Take IMASAT / Submit CAT/XAT/MAT Score' },
                                    { step: '3', label: 'Group Discussion & Personal Interview' },
                                    { step: '4', label: 'Merit List & Admission Offer' },
                                ].map((s) => (
                                    <div key={s.step} className="flex items-center gap-3 text-xs">
                                        <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20 font-bold text-[11px]">{s.step}</span>
                                        <span className="opacity-90">{s.label}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <Button
                                    onClick={() => window.open('https://admission.imas.ac.in/', '_blank')}
                                    className="flex-1 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white text-xs font-semibold"
                                >
                                    Apply Now
                                    <ExternalLink className="ml-1 h-3.5 w-3.5" />
                                </Button>
                                <Button
                                    onClick={onDownload}
                                    variant="outline"
                                    className="flex-1 rounded-full border-white/30 text-white hover:bg-white/10 text-xs font-semibold"
                                >
                                    <Download className="mr-1 h-3.5 w-3.5" />
                                    Download Brochure
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CONTACT & MAP ─── */}
            <section id="contact" className="border-b border-slate-200 bg-white">
                <div
                    data-animate-on-scroll
                    className="mx-auto max-w-[1550px] px-4 py-6 transition-all duration-700 ease-out sm:py-10"
                >
                    <div className="grid gap-4 md:grid-cols-2">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                                    <MapPin className="h-4 w-4" />
                                </span>
                                <h2 className="text-base sm:text-xl font-bold bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
                                    Contact & Visit Us
                                </h2>
                            </div>
                            <div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600 mb-5" />
                            <div className="rounded-2xl bg-gradient-to-br from-[#143674] to-[#0b1c3a] p-4 text-white">
                                <div className="text-base font-semibold">Campus Address</div>
                                <p className="mt-1 text-[13px] sm:text-sm opacity-90">
                                    Plot No 37, Block – Bhangar-II<br />
                                    Near St. Xavier's University<br />
                                    Newtown Action Area – III<br />
                                    Kolkata, West Bengal – 700160
                                </p>
                                <div className="mt-3 space-y-1 text-sm">
                                    <p className="inline-flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">call</span><span className="font-semibold">Phone:</span> {IMAS_CONTACT.PHONE}</p>
                                    <p className="inline-flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">mail</span><span className="font-semibold">Email:</span> {IMAS_CONTACT.EMAIL}</p>
                                    <p className="inline-flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">language</span><span className="font-semibold">Web:</span> www.imas.ac.in</p>
                                </div>
                                <div className="mt-3">
                                    <a
                                        href={`tel:${IMAS_CONTACT.PHONE.replace(/\s/g, '')}`}
                                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#143674] shadow-md transition-all duration-200 hover:-translate-y-0.5"
                                    >
                                        <span className="material-symbols-outlined text-[16px]">call</span>
                                        Quick Call
                                    </a>
                                </div>
                                <div className="mt-4 rounded-xl border border-white/20 bg-white/10 p-3">
                                    <iframe
                                        title="IMAS Campus Location Map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.238774664635!2d88.4322102!3d22.570171199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275aedaaaaaab%3A0x42fc9c8ae01a94cd!2sIMAS%20Business%20School!5e0!3m2!1sen!2sin!4v1763538389238!5m2!1sen!2sin"
                                        className="w-full h-48 sm:h-56 md:h-64 rounded-lg border-0"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Quick inquiry */}
                        <div className="rounded-2xl bg-slate-50 p-4 sm:p-6 ring-1 ring-slate-200 flex flex-col gap-3">
                            <h3 className="text-base font-bold text-slate-900">Quick Inquiry</h3>
                            <p className="text-[13px] sm:text-sm text-slate-600">Interested in the PGDM / MBA program? Get in touch — our admissions team will reach out within 24 hours.</p>
                            <div className="flex flex-col gap-2.5 mt-1">
                                <Button
                                    onClick={() => { try { applyNow() } catch (e) { window.dispatchEvent(new Event('imas:openEnquiryForm')) } }}
                                    className="w-full rounded-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold text-[13px] sm:text-sm"
                                >
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Submit an Enquiry
                                </Button>
                                <Button
                                    onClick={onDownload}
                                    variant="outline"
                                    className="w-full rounded-full border-[#26c1d3] text-[#2e7bb3] hover:bg-[#26c1d3]/10 text-[13px] sm:text-sm"
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    Download Programme Brochure
                                </Button>
                                <a
                                    href={`tel:${IMAS_CONTACT.PHONE.replace(/\s/g, '')}`}
                                    className="w-full rounded-full border border-slate-300 px-4 py-2 flex items-center justify-center gap-2 text-[13px] sm:text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
                                >
                                    <Phone className="h-4 w-4" />
                                    {IMAS_CONTACT.PHONE}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── FAQ ─── */}
            <section id="faq" className="py-6 sm:py-10 bg-slate-50 border-b border-slate-200">
                <div
                    data-animate-on-scroll
                    className="max-w-[1550px] mx-auto px-4 transition-all duration-700 ease-out"
                >
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 p-3 text-white shadow-sm">
                            <span className="material-symbols-outlined text-[18px]">help</span>
                        </span>
                        <div>
                            <h2 className="text-base sm:text-xl font-bold bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-[11px] sm:text-xs font-medium text-slate-600">
                                Quick answers to help you with the IMAS MBA / PGDM admissions journey.
                            </p>
                        </div>
                    </div>
                    <div className="mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />

                    <div className="mt-5 space-y-3 sm:space-y-4">
                        {[
                            {
                                q: 'What is the eligibility for the PGDM programme at IMAS?',
                                a: 'Candidates must have a Bachelor\'s degree in any discipline from a recognized university. Valid CAT / XAT / MAT scores are required, or candidates may appear for the IMASAT admission test conducted by IMAS.',
                            },
                            {
                                q: 'Is the PGDM programme at IMAS AICTE approved?',
                                a: 'Yes, the PGDM programme at IMAS is AICTE approved.',
                            },
                            {
                                q: 'What is the duration of the PGDM programme?',
                                a: 'The programme is a 2-year full-time programme designed to provide a comprehensive management education with practical exposure.',
                            },
                            {
                                q: 'Does IMAS offer internships during the programme?',
                                a: 'Yes, internships are available from Year 1. The program is designed to give students early and sustained corporate exposure.',
                            },
                            {
                                q: 'What specializations are available in the PGDM programme?',
                                a: 'Students can choose from Marketing, Finance, Human Resource, Logistics & Supply Chain Management, and Hospital Management & Healthcare Administration. Add-on certifications in Business Analytics, Fintech, and AI & Data Science are also available.',
                            },
                            {
                                q: 'Are scholarships and education loans available?',
                                a: 'Yes, merit-based scholarships, government schemes, Student Credit Card facility, and education loan assistance are all available. Please contact our admissions team for details.',
                            },
                            {
                                q: 'What is the placement record of IMAS?',
                                a: 'IMAS has delivered consistent placement results with an average package of ₹6.50+ LPA, a highest package of ₹18.00 LPA, and 465+ placement offers. Students are placed with leading companies across IT, BFSI, Consulting, FMCG, and E-commerce sectors.',
                            },
                            {
                                q: 'Does IMAS provide hostel facilities?',
                                a: 'Yes, IMAS provides separate hostel facilities for boys and girls, with a safe and secure campus environment, Wi-Fi connectivity, and modern classrooms.',
                            },
                        ].map(({ q, a }) => (
                            <details
                                key={q}
                                className="group rounded-2xl bg-white p-3 sm:p-4 text-slate-800 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <summary className="flex cursor-pointer items-start justify-between gap-3 text-[13px] sm:text-sm font-semibold text-slate-800">
                                    <span className="flex-1">{q}</span>
                                    <span className="flex-shrink-0 transition-transform group-open:rotate-180 mt-0.5">
                                        <span className="material-symbols-outlined text-[18px] text-slate-500">expand_more</span>
                                    </span>
                                </summary>
                                <div className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{a}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FOOTER ─── */}
            <footer className="border-t border-slate-200 bg-white">
                <div className="mx-auto flex max-w-[1550px] flex-col items-center justify-between gap-3 px-4 py-4 text-[11px] text-slate-500 md:flex-row">
                    <p>© {new Date().getFullYear()} IMAS Business School, Kolkata. All Rights Reserved.</p>
                    <div className="flex flex-wrap items-center gap-3">
                        <a href="/privacy-policy" className="transition-colors hover:text-slate-700">Privacy Policy</a>
                        <span className="cursor-default text-slate-500">Terms & Conditions</span>
                        <span className="cursor-default text-slate-500">Disclaimer</span>
                    </div>
                </div>
            </footer>

            {/* ─── STICKY MOBILE CTA BAR ─── */}
            <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 px-3 py-2 shadow-[0_-4px_12px_rgba(15,23,42,0.08)] md:hidden">
                <div className="mx-auto flex max-w-[1550px] items-center justify-between gap-2 text-xs font-semibold">
                    <Button
                        onClick={() => {
                            try { applyNow() } catch (e) {
                                window.dispatchEvent(new Event('imas:openEnquiryForm'))
                            }
                        }}
                        className="flex-1 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 px-3 py-2 text-center text-white transition-all duration-200 active:scale-95"
                    >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Inquire Now
                    </Button>
                    <Button
                        onClick={onDownload}
                        variant="outline"
                        className="flex-1 rounded-full border border-[#26c1d3] px-3 py-2 text-center text-[#2e7bb3] transition-all duration-200 active:scale-95"
                    >
                        <Download className="mr-2 h-4 w-4" />
                        Brochure
                    </Button>
                    <a
                        href={`tel:${IMAS_CONTACT.PHONE.replace(/\s/g, '')}`}
                        className="flex-1 rounded-full border border-slate-300 px-3 py-2 flex items-center justify-center text-slate-800 transition-all duration-200 active:scale-95"
                    >
                        <Phone className="mr-2 h-4 w-4" />
                        Call
                    </a>
                </div>
            </div>
        </div>
    )
}
