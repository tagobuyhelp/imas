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

export function PgdmMbaLandingPage(): React.JSX.Element {
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
    const heroImages = [
        '/uploads/pgdm_full_time/hero_image.jpg',
        ...campusImages.slice(0, 4),
    ]
    const [campusIndex, setCampusIndex] = React.useState(0)
    React.useEffect(() => {
        const id = setInterval(() => {
            setCampusIndex((i) => (i + 1) % campusImages.length)
        }, 3500)
        return () => clearInterval(id)
    }, [])
    const heroIndex = campusIndex % heroImages.length

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
            desc: 'Talent Management, HR Analytics & Organisational Behavior',
            ideal: 'People management & organisational development',
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

    const immersionDestinations = [
        { label: 'Dubai', src: '/uploads/destinations/dubai.jpg' },
        { label: 'Malaysia', src: '/uploads/destinations/malaysia.avif' },
        { label: 'Singapore', src: '/uploads/destinations/singapore.jpg' },
        { label: 'Thailand', src: '/uploads/destinations/thailand.jpeg' },
        { label: 'Vietnam', src: '/uploads/destinations/vietnam.jpg' },
    ]
    const universityPartners = [
        { name: 'University of Sunderland', src: '/uploads/universities/sunderland.jpeg' },
        { name: 'Lincoln University College', src: '/uploads/universities/lincoln.jpg' },
        { name: 'SEGi University', src: '/uploads/universities/segi-university.png' },
        { name: 'FPT University', src: '/uploads/universities/fpt-university.jpg' },
        { name: 'INTI International University', src: '/uploads/universities/inti-university.jpg' },
        { name: 'Management Development Institute of Singapore', src: '/uploads/universities/Management-Development-Institute-of-Singapore.png' },
        { name: 'Curtin University', src: '/uploads/universities/curtin.jpg' },
        { name: 'Middlesex University', src: '/uploads/universities/middlesex.avif' },
        { name: 'Panyapiwat Institute of Management', src: '/uploads/universities/panyapiwat.jpeg' },
        { name: 'Raffles University', src: '/uploads/universities/raffles.jpg' },
    ]

    return (
        <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900 scroll-smooth">
            <Helmet>
                <title>PGDM / MBA Programme (2-Year Full-Time) | Best MBA College in Kolkata | IMAS</title>
                <meta name="description" content="Join IMAS – one of the best PGDM colleges in Kolkata with placement. AICTE-approved MBA/PGDM programme with internship from Year 1, dual specialisation, ₹6.50+ LPA average package & ₹18 LPA highest package." />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:title" content="PGDM / MBA Programme | Best MBA College in Kolkata | IMAS" />
                <meta property="og:description" content="AICTE-approved PGDM programme in Kolkata with placement, internships and industry-aligned curriculum. ₹6.50+ LPA average package." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content="https://www.imas.ac.in/uploads/IMASBUILDING.jpeg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:site_name" content="IMAS Kolkata" />
                <meta property="og:locale" content="en_US" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="PGDM / MBA Programme | Best MBA College in Kolkata | IMAS" />
                <meta name="twitter:description" content="AICTE-approved PGDM programme in Kolkata. Placements, internships & industry exposure." />
                <meta name="twitter:image" content="https://www.imas.ac.in/uploads/IMASBUILDING.jpeg" />
            </Helmet>

            {/* Top announcement bar */}
            <div className="relative w-full overflow-hidden border-b border-white/10 bg-gradient-to-r from-[#0b1c3a] via-[#143674] to-[#2e7bb3] text-[11px] text-white shadow-sm sm:text-sm">
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
                        <a href="/" className="inline-block hover:opacity-90 transition-opacity">
                            <img
                                src="/uploads/logos/imas.png"
                                alt="IMAS International Management & Analytics School"
                                className="h-10 w-auto xl:h-12"
                            />
                        </a>
                    </div>

                    <nav className="hidden items-center gap-5 text-sm text-slate-200 md:flex">
                        <a
                            href="#about-pgdm"
                            className="group relative flex items-center gap-1 rounded-md px-1.5 py-1 transition-colors duration-200 hover:text-white"
                        >
                            <span className="material-symbols-outlined text-[18px]">menu_book</span>
                            <span>Programme Overview</span>
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
                        <a href="/" className="inline-block">
                            <img src="/uploads/logos/imas.png" alt="IMAS" className="h-10 w-auto" />
                        </a>
                        <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 hover:text-gray-900">
                            <ChevronDown className="h-5 w-5 rotate-180" />
                        </Button>
                    </div>
                    <nav className="flex-1 p-4 overflow-y-auto">
                        <ul className="space-y-1.5">
                            {[
                                { href: '#about-pgdm', icon: BookOpen, label: 'Programme Overview' },
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
                    className="relative mx-auto grid max-w-[1550px] grid-cols-1 items-center gap-3 px-4 py-4 md:grid-cols-12 md:gap-6 md:py-10 transition-all duration-700 ease-out"
                >
                    <div className="flex-1 md:col-span-6 space-y-2 sm:space-y-4">
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-medium text-white shadow-sm">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
                            <span>PGDM Admissions Open for 2026–28</span>
                        </div>

                        <div className="space-y-3">
                            <h1 className="text-lg sm:text-3xl lg:text-[2.25rem] font-bold tracking-tight text-white drop-shadow-md">
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
                            IMAS is one of the best PGDM colleges in Kolkata with placement — offering a career-driven, AICTE-approved PGDM programme with internship from Year 1, dual specialisation, and strong corporate exposure.
                        </p>

                        {/* Marquee */}
                        <div className="relative overflow-hidden">
                            <div ref={marqueeRef} className="scroller" data-speed="fast" data-direction="left">
                                <div className="scroller__inner whitespace-nowrap text-xs font-medium text-white">
                                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 shadow-sm border-t border-b border-white/30"><GraduationCap className="h-4 w-4 text-white" /><span>Internship from Year 1</span></span>
                                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 shadow-sm border-t border-b border-white/30"><Award className="h-4 w-4 text-white" /><span>Dual Specialisation + Certifications</span></span>
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
                        <div className="mt-3 grid max-w-xl grid-cols-3 items-stretch gap-2 text-center text-[11px] text-slate-600 sm:grid-cols-3">
                            {[
                                { label: 'Programme', value: 'PGDM / MBA' },
                                { label: 'Intake', value: '2026 Batch' },
                                { label: 'Location', value: 'Newtown, Kolkata' },
                            ].map(({ label, value }) => (
                                <div key={label} className="h-full rounded-xl bg-white items-center justify-center p-2 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
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

                    <div className="hidden md:flex md:col-span-6 items-center justify-start">
                        <div className="relative w-full overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm shadow-lg ring-1 ring-white/10 h-72 lg:h-[480px] xl:h-[520px]">
                            {heroImages.map((src, idx) => (
                                <img
                                    key={src}
                                    src={src}
                                    alt="IMAS PGDM / MBA Campus & Students"
                                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${idx === heroIndex ? 'opacity-100' : 'opacity-0'}`}
                                    onError={(e) => { const target = e.currentTarget as HTMLImageElement; target.src = '/uploads/logos/IMAS_LOGO_PNG.png' }}
                                />
                            ))}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                                {heroImages.map((_, idx) => (
                                    <span key={idx} className={`h-2 w-2 rounded-full ${idx === heroIndex ? 'bg-white' : 'bg-white/50'}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── ABOUT PGDM ─── */}
            <section id="about-pgdm" className="border-b border-slate-200 bg-slate-50">
                <div
                    data-animate-on-scroll
                    className="mx-auto max-w-[1550px] px-4 py-4 transition-all duration-700 ease-out sm:py-10"
                >
                    <div className="relative overflow-hidden rounded-xl bg-white/95 ring-1 ring-white/20 p-4 sm:p-5 md:p-7">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute inset-0 mesh-grid" />
                        </div>
                        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                            <div className="min-w-0 space-y-4">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700">
                                        <GraduationCap className="h-5 w-5 text-white" />
                                    </span>
                                    <h2 className="text-base sm:text-xl font-bold bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
                                        About the PGDM Programme
                                    </h2>
                                </div>
                                <div className="h-1 w-32 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600 mb-4" />

                                <p className="break-words text-[13px] sm:text-sm leading-relaxed text-slate-700">
                                    The PGDM programme at IMAS Kolkata is designed to develop future business leaders through a combination of management fundamentals, practical learning, and industry exposure.
                                </p>
                                <p className="break-words text-[13px] sm:text-sm leading-relaxed text-slate-800">
                                    Whether you're searching for a <strong>PGDM college in Kolkata with placement</strong>, the best PGDM course in West Bengal, or an MBA with internship — IMAS offers real-world business learning, case studies, live projects, and skill-based training.
                                </p>

                                {/* Feature Chips */}
                                <div className="flex max-w-full gap-2 overflow-x-auto pb-1 overscroll-x-contain sm:flex-wrap sm:overflow-visible">
                                    {[
                                        { icon: 'groups', label: 'Industry Professionals' },
                                        { icon: 'psychology', label: 'Expert Mentors' },
                                        { icon: 'workspace_premium', label: 'Certifications' },
                                    ].map((chip) => (
                                        <button
                                            key={chip.label}
                                            className="group min-h-10 whitespace-nowrap rounded-full bg-slate-100 border border-slate-200 px-3 py-2 inline-flex items-center gap-1.5 font-medium text-xs hover:bg-gradient-to-r hover:from-sky-600 hover:to-blue-700 hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer"
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
                                        className="min-h-11 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-md hover:from-sky-500 hover:to-blue-600"
                                    >
                                        Download Programme Brochure
                                        <ExternalLink className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        type="button"
                                        onClick={() => { window.location.href = `tel:${IMAS_CONTACT.PHONE.replace(/\s/g, '')}` }}
                                        className="min-h-11 inline-flex items-center justify-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold text-sky-700 shadow-sm hover:border-sky-400 hover:bg-sky-50"
                                    >
                                        Speak to an Admission Expert
                                        <span className="material-symbols-outlined text-[16px] align-middle">call</span>
                                    </Button>
                                </div>
                            </div>

                            {/* Campus image carousel */}
                            <div className="min-w-0 flex items-center justify-center">
                                <div className="relative w-full max-w-full overflow-hidden rounded-2xl border bg-white shadow-sm ring-1 ring-slate-200 h-48 sm:h-64 md:h-[420px]">
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
                    className="mx-auto max-w-[1550px] px-4 py-4 transition-all duration-700 ease-out sm:py-10"
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
                                Top MBA colleges in Kolkata with placement — recognised for consistent results across sectors.
                            </p>
                        </div>

                        <div className="grid gap-2 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                            {[
                                { label: 'AICTE-Approved PGDM Programme', icon: 'verified' },
                                { label: 'Internship from Year 1', icon: 'work_history' },
                                { label: 'Dual Specialisation + Certifications', icon: 'layers' },
                                { label: 'Corporate Connect Programme', icon: 'business_center' },
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
                                className="min-h-11 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-md hover:from-sky-500 hover:to-blue-600"
                            >
                                Talk to Academic Advisor
                                <ExternalLink className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── AWARDS ─── */}
            <section id="awards" className="border-b border-slate-200 bg-gradient-to-br from-[#0b1c3a] to-[#143674] text-white">
                <div
                    data-animate-on-scroll
                    className="mx-auto max-w-[1550px] px-4 py-4 transition-all duration-700 ease-out sm:py-10"
                >
                    <div className="space-y-4">
                        <div className="award-banner relative overflow-hidden rounded-3xl p-3 sm:p-6 text-white shadow-lg">
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
                            <div className="mt-3 flex max-w-full gap-2 overflow-x-auto pb-1 overscroll-x-contain text-[11px] sm:flex-wrap sm:overflow-visible">
                                {['Academic Excellence', 'Emerging School', 'Innovation', 'Professional Development'].map((tag) => (
                                    <span key={tag} className="inline-flex min-h-9 whitespace-nowrap items-center gap-1 rounded-full bg-white/10 px-3 py-1 shadow-sm ring-1 ring-white/20">
                                        <span className="material-symbols-outlined text-[16px]">military_tech</span>
                                        <span>{tag}</span>
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                { title: 'Top 10 Best B-School in Kolkata', badge: 'KNOWLEDGE REVIEW 2026', icon: 'military_tech' },
                                { title: 'Best Emerging Business School Award', badge: 'EDULITE EXCELLENCE 2024', icon: 'trending_up' },
                                { title: 'Best College for Innovation & Startup in Kolkata', badge: 'EDULITE EXCELLENCE 2025', icon: 'emoji_objects' },
                                { title: 'Excellence in Management Education', badge: 'COLLEGERANK 2024', icon: 'workspace_premium' },
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

            <section id="industry-collaborations" className="border-b border-slate-200 bg-white">
                <div
                    data-animate-on-scroll
                    className="mx-auto max-w-[1550px] px-4 py-4 transition-all duration-700 ease-out sm:py-10"
                >
                    <div className="relative overflow-hidden rounded-3xl bg-white/95 ring-1 ring-slate-200 p-4 sm:p-6 shadow-sm">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute inset-0 mesh-grid" />
                        </div>
                        <div className="relative mb-4 max-w-2xl">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                                    <Building2 className="h-4 w-4" />
                                </span>
                                <div>
                                    <h2 className="text-base sm:text-xl font-bold bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
                                        Industry Collaborations
                                    </h2>
                                    <p className="text-[11px] sm:text-xs font-medium text-slate-600">
                                        Ensuring strong industry alignment and global career opportunities
                                    </p>
                                </div>
                            </div>
                            <div className="mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />
                        </div>

                        <div className="relative grid grid-cols-2 gap-2 xs:gap-3 sm:grid-cols-3 lg:grid-cols-6">
                            {['CII', 'ICC', 'BCC&I', 'MSME', 'NHRD', 'ERSC'].map((org) => (
                                <div
                                    key={org}
                                    className="flex min-h-12 items-center justify-center rounded-2xl bg-slate-50 px-3 py-3 text-center shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                                >
                                    <span className="text-sm font-semibold text-slate-800">{org}</span>
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
                    className="mx-auto max-w-[1550px] px-4 py-4 transition-all duration-700 ease-out sm:py-10"
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
                                    Choose from industry-relevant PGDM specialisations aligned with job market demand:
                                </p>
                            </div>
                            <p className="text-[11px] text-slate-500">Choose a focus area that aligns with your career goals.</p>
                        </div>

                        <div className="grid gap-2 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                            {specialisations.map((spec) => (
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
                                className="min-h-11 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-md hover:from-sky-500 hover:to-blue-600"
                            >
                                Download Specialisation Details
                                <Download className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="program-features" className="border-b border-slate-200 bg-slate-50">
                <div
                    data-animate-on-scroll
                    className="mx-auto max-w-[1550px] px-4 py-4 transition-all duration-700 ease-out sm:py-10"
                >
                    <div className="relative overflow-hidden rounded-3xl bg-white/95 ring-1 ring-slate-200 p-4 sm:p-6 shadow-sm">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute inset-0 mesh-grid" />
                        </div>

                        <div className="relative mb-5 max-w-2xl">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                                    <Target className="h-4 w-4" />
                                </span>
                                <div>
                                    <h2 className="text-base sm:text-xl font-bold bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
                                        Programme Features
                                    </h2>
                                    <p className="text-[11px] sm:text-xs font-medium text-slate-600">
                                        Skill development and corporate readiness
                                    </p>
                                </div>
                            </div>
                            <div className="mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />
                        </div>

                        <div className="relative grid gap-2 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
                            {[
                                {
                                    title: 'Presentation & Personality Development',
                                    icon: 'presenter',
                                    desc: 'Students participate in 20+ structured presentations across semesters, improving communication, confidence, and leadership skills—critical for corporate success.',
                                },
                                {
                                    title: 'Industry Certifications',
                                    icon: 'workspace_premium',
                                    desc: 'The programme includes Six Sigma (Green Belt) certification and Advanced Excel training, which are highly valued in analytics, consulting, and operations roles.',
                                },
                                {
                                    title: 'Business Communication Training',
                                    icon: 'record_voice_over',
                                    desc: 'Students undergo basic and advanced business communication training, helping them excel in interviews, group discussions, and workplace communication.',
                                },
                                {
                                    title: 'Corporate Connect Programme',
                                    icon: 'business_center',
                                    desc: 'Through industry visits and corporate mentorship, students gain real exposure to business environments and interact with industry professionals.',
                                },
                            ].map((f) => (
                                <div
                                    key={f.title}
                                    className="group rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                                            <span className="material-symbols-outlined text-[22px]">{f.icon}</span>
                                        </span>
                                        <p className="text-sm font-semibold text-slate-900">{f.title}</p>
                                    </div>
                                    <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── PLACEMENTS ─── */}
            <section id="placements" className="border-b border-slate-200 bg-gradient-to-br from-[#0b1c3a] to-[#143674] text-white">
                <div
                    data-animate-on-scroll
                    className="mx-auto max-w-[1550px] px-4 py-4 transition-all duration-700 ease-out sm:py-10"
                >
                    <div className="relative overflow-hidden p-3 sm:p-6">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
                            <div className="absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-indigo-400/10 blur-3xl" />
                        </div>

                        <div className="relative mb-4">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-[#0b1c3a]">
                                    <Briefcase className="h-4 w-4" />
                                </span>
                                <div>
                                    <div className="text-base sm:text-xl font-bold">Placement Highlights</div>
                                    <div className="text-[11px] sm:text-xs opacity-80">
                                        IMAS is recognised among the best MBA colleges in Kolkata with placement support
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300" />
                        </div>

                        {/* Stats */}
                        <div className="relative grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 sm:grid-cols-4 mb-4">
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
                        <div className="relative mb-4">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-300 mb-2">Students placed across</p>
                            <div className="flex max-w-full gap-2 overflow-x-auto pb-1 overscroll-x-contain">
                                {['IT & Tech Companies', 'BFSI Sector', 'Consulting Firms', 'FMCG & E-commerce'].map((sector) => (
                                    <span key={sector} className="inline-flex min-h-9 whitespace-nowrap items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/20">
                                        <CheckCircle className="h-3.5 w-3.5 text-green-400" />
                                        {sector}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Logos */}
                        <div className="relative">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-300 mb-2">Our Recruiters</p>
                            <div className="flex max-w-full gap-2 overflow-x-auto pb-1 overscroll-x-contain sm:grid sm:grid-cols-4 md:grid-cols-6 sm:overflow-visible">
                                {placementLogos.map((p) => (
                                    <div key={p.name} className="min-w-[96px] sm:min-w-0 flex items-center justify-center rounded-xl bg-white p-2 sm:p-3 shadow-sm ring-1 ring-white/20 h-11 sm:h-14">
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
                    className="mx-auto max-w-[1550px] px-4 py-4 transition-all duration-700 ease-out sm:py-10"
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

                    <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:grid-cols-3 md:grid-cols-6 mt-4 sm:mt-6">
                        {[
                            { role: 'Business Analyst', icon: 'query_stats', desc: 'Drive data-backed decisions and business growth.' },
                            { role: 'Marketing Manager', icon: 'campaign', desc: 'Build brands, engage customers, and drive impact.' },
                            { role: 'Financial Analyst', icon: 'account_balance', desc: 'Manage finances, assess risks, and create value.' },
                            { role: 'HR Manager', icon: 'group', desc: 'Lead talent strategy and build high-performing teams.' },
                            { role: 'Supply Chain Manager', icon: 'local_shipping', desc: 'Optimize operations and ensure seamless delivery.' },
                            { role: 'Healthcare Administrator', icon: 'local_hospital', desc: 'Manage healthcare systems and improve outcomes.' },
                        ].map((c) => (
                            <div
                                key={c.role}
                                className="group flex flex-col items-center rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                            >
                                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm ring-1 ring-blue-700/20 transition-transform duration-300 group-hover:scale-105">
                                    <span className="material-symbols-outlined text-[22px]">{c.icon}</span>
                                </span>
                                <p className="mt-3 text-xs font-semibold text-slate-900">{c.role}</p>
                                <p className="mt-2 text-[10px] sm:text-[11px] leading-relaxed text-slate-600">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── TESTIMONIALS ─── */}
            <section id="testimonials" className="border-b border-slate-200 bg-slate-50">
                <div
                    data-animate-on-scroll
                    className="mx-auto max-w-[1550px] px-4 py-4 transition-all duration-700 ease-out sm:py-10"
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

                    <div className="mt-4 flex max-w-full gap-3 overflow-x-auto pb-2 overscroll-x-contain snap-x snap-mandatory sm:mt-6 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 sm:overflow-visible sm:snap-none">
                        {[
                            {
                                quote: 'The programme helped me build real analytics skills with tools and live projects.',
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
                                className="snap-start min-w-[260px] sm:min-w-0 group rounded-2xl bg-white p-4 sm:p-5 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-3 w-3 text-yellow-400" fill="currentColor" />
                                        ))}
                                    </div>
                                    {t.type === 'industry' ? (
                                        <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full ring-1 ring-blue-100">Industry</span>
                                    ) : null}
                                </div>
                                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-5">"{t.quote}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="h-9 w-9 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold ring-1 ring-blue-700/20">
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
            <section id="international" className="border-b border-slate-200 bg-gradient-to-br from-[#143674] via-[#0f2958] to-[#0b1c3a]">
                <div
                    data-animate-on-scroll
                    className="w-full py-12 transition-all duration-700 ease-out sm:py-16"
                >
                    <div className="relative mx-auto max-w-[1550px] px-4 text-white">
                        {/* Animated background elements */}
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl animate-pulse-slow" />
                            <div className="absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl animate-pulse-slower" />
                            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/5 blur-3xl" />
                        </div>

                        {/* Header with enhanced styling */}
                        <div className="relative flex items-center gap-3 mb-4">
                            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-[#0b1c3a] shadow-lg">
                                <Globe className="h-5 w-5" />
                            </span>
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
                                    International Immersion Programmes
                                </h2>
                                <p className="text-sm sm:text-base opacity-90 mt-1">Global Exposure & Academic Collaborations</p>
                            </div>
                        </div>
                        <div className="relative mt-2 h-1.5 w-32 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 mb-6" />

                        {/* Enhanced description */}
                        <p className="relative text-sm sm:text-base opacity-95 max-w-3xl mb-8 leading-relaxed">
                            Embark on transformative global journeys with our international immersion programmes. 
                            Experience diverse cultures, build global networks, and gain invaluable cross-cultural 
                            perspectives through academic collaborations with world-renowned institutions.
                        </p>

                        {/* Destination cards with enhanced interactivity */}
                        <div className="relative grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mb-8">
                            {immersionDestinations.map((d) => (
                                <div
                                    key={d.label}
                                    className="group relative overflow-hidden rounded-3xl bg-white/15 ring-2 ring-white/25 backdrop-blur-lg shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-white/20 hover:ring-cyan-300/40 hover:shadow-2xl aspect-[4/3]"
                                >
                                    <img
                                        src={d.src}
                                        alt={`${d.label} international immersion destination`}
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        onError={(e) => { const t = e.currentTarget as HTMLImageElement; t.src = '/uploads/logos/IMAS_LOGO_PNG.png' }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <p className="text-sm font-bold text-white drop-shadow-lg">{d.label}</p>
                                        <div className="mt-1 h-0.5 w-8 bg-gradient-to-r from-cyan-400 to-sky-300 rounded-full" />
                                    </div>
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                </div>
                            ))}
                        </div>

                        {/* Partner institutions section with enhanced design */}
                        <div className="relative rounded-3xl bg-gradient-to-r from-white/20 to-white/10 p-6 ring-2 ring-white/25 backdrop-blur-xl">
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-wider text-cyan-200">Global Academic Network</p>
                                    <p className="mt-2 text-sm text-white/80 leading-relaxed">
                                        Strategic partnerships with leading international universities for 
                                        student exchange, faculty collaboration, and joint research initiatives
                                    </p>
                                </div>
                                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 px-4 py-2 text-sm font-bold text-cyan-100 ring-2 ring-cyan-400/30">
                                    {universityPartners.length}+ Premier Partners
                                </span>
                            </div>

                            {/* Enhanced university partner grid - matching country card style */}
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                                {universityPartners.map((u) => (
                                    <div
                                        key={u.name}
                                        className="group relative overflow-hidden rounded-3xl bg-white/15 ring-2 ring-white/25 backdrop-blur-lg shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-white/20 hover:ring-cyan-300/40 hover:shadow-2xl aspect-[4/3]"
                                    >
                                        {/* University logo as background image */}
                                        <img
                                            src={u.src}
                                            alt={u.name}
                                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                            onError={(e) => { 
                                                const t = e.currentTarget as HTMLImageElement; 
                                                t.src = '/uploads/logos/IMAS_LOGO_PNG.png';
                                            }}
                                        />
                                        {/* Dark overlay for text readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                        
                                        {/* University name overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            <p className="text-[10px] md:text-[14px] font-bold text-white drop-shadow-lg line-clamp-2">{u.name}</p>
                                            <div className="mt-1 h-0.5 w-8 bg-gradient-to-r from-cyan-400 to-sky-300 rounded-full" />
                                        </div>
                                        
                                        
                                        
                                        {/* Hover gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Call to action */}
                        <div className="relative mt-8 text-center">
                            <p className="text-sm text-white/80 mb-4">Ready to embark on your global journey?</p>
                            <button
                                onClick={() => window.dispatchEvent(new Event('imas:openEnquiryForm'))}
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:from-cyan-500 hover:to-blue-600 hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <Globe className="h-4 w-4" />
                                Explore Global Opportunities
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CAMPUS / LIFE AT IMAS ─── */}
            <section id="life-at-imas" className="border-b border-slate-200 bg-slate-50">
                <div
                    data-animate-on-scroll
                    className="mx-auto max-w-[1550px] px-4 py-4 transition-all duration-700 ease-out sm:py-10"
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

                    <div className="grid gap-2 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
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

                    {/* Enhanced Campus Videos */}
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* IMAS Campus Video Card */}
                        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-white shadow-xl ring-1 ring-slate-200/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                            <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                                {/* Video thumbnail overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                
                                {/* Play button overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white">
                                        <svg className="h-5 w-5 sm:h-6 sm:w-6 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                                
                                <iframe
                                    title="IMAS Campus Experience"
                                    src="https://www.youtube.com/embed/rM3MWkhO6GA"
                                    className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                            
                            {/* Video description */}
                            <div className="p-4 sm:p-5">
                                <h3 className="text-sm font-semibold text-slate-800 mb-2">IMAS Campus Experience</h3>
                                <p className="text-xs text-slate-600">Explore our state-of-the-art campus facilities and vibrant student life</p>
                            </div>
                        </div>

                        {/* IAER Transformation Video Card */}
                        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-white shadow-xl ring-1 ring-blue-200/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                            <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden">
                                {/* Video thumbnail overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                
                                {/* Play button overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white">
                                        <svg className="h-5 w-5 sm:h-6 sm:w-6 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                                
                                <iframe
                                    title="IAER Campus & Learning Experience"
                                    src="https://www.youtube.com/embed/nH-sSyq_2OM?start=58"
                                    className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                            
                            {/* Video description */}
                            <div className="p-4 sm:p-5">
                                <h3 className="text-sm font-semibold text-blue-800 mb-2">Student Transformation Journey</h3>
                                <p className="text-xs text-blue-600">Watch how IAER transforms students into corporate professionals</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ─── SCHOLARSHIPS & LOANS ─── */}
            <section id="scholarships" className="border-b border-slate-200 bg-slate-50">
                <div
                    data-animate-on-scroll
                    className="mx-auto max-w-[1550px] px-4 py-4 transition-all duration-700 ease-out sm:py-10"
                >
                    <div className="flex items-center gap-2">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white shadow-sm">
                            <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
                        </span>
                        <div>
                            <h2 className="text-base sm:text-xl font-bold text-slate-900">Scholarships & Loans</h2>
                            <p className="text-[11px] sm:text-xs font-medium text-slate-600">Study Now, Pay Later Options Available</p>
                            <div className="mt-2 h-1 w-14 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400" />
                        </div>
                    </div>

                    <div className="mt-4 grid gap-3 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                icon: 'workspace_premium',
                                label: 'Merit-Based Scholarships',
                                desc: 'Rewarding academic excellence and outstanding performance.',
                                accent: 'text-amber-700',
                                bg: 'from-amber-50 to-white',
                                iconBg: 'from-amber-400 to-yellow-500',
                            },
                            {
                                icon: 'account_balance',
                                label: 'Govt. Schemes',
                                desc: 'Benefit from various central and state government schemes.',
                                accent: 'text-sky-700',
                                bg: 'from-sky-50 to-white',
                                iconBg: 'from-sky-500 to-blue-600',
                            },
                            {
                                icon: 'credit_card',
                                label: 'Student Credit Card Facility',
                                desc: 'Easy education loans with flexible repayment options.',
                                accent: 'text-emerald-700',
                                bg: 'from-emerald-50 to-white',
                                iconBg: 'from-emerald-500 to-teal-600',
                            },
                            {
                                icon: 'real_estate_agent',
                                label: 'Education Loan Assistance',
                                desc: 'Hassle-free guidance and support for education loans.',
                                accent: 'text-purple-700',
                                bg: 'from-purple-50 to-white',
                                iconBg: 'from-purple-500 to-indigo-600',
                            },
                        ].map((s) => (
                            <div
                                key={s.label}
                                className={`rounded-2xl bg-gradient-to-br ${s.bg} p-4 text-center shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
                            >
                                <div className={`mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${s.iconBg} text-white shadow-sm`}>
                                    <span className="material-symbols-outlined text-[22px]">{s.icon}</span>
                                </div>
                                <p className={`mt-3 text-[13px] sm:text-sm font-semibold ${s.accent}`}>{s.label}</p>
                                <p className="mt-2 text-[12px] text-slate-600 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── ELIGIBILITY & ADMISSIONS ─── */}
            <section id="eligibility" className="border-b border-slate-200 bg-slate-50">
                <div
                    data-animate-on-scroll
                    className="mx-auto max-w-[1550px] px-4 py-4 transition-all duration-700 ease-out sm:py-10"
                >
                    <div className="grid gap-4 md:grid-cols-2">
                        {/* Eligibility */}
                        <div className="rounded-2xl bg-white p-5 sm:p-6 shadow-sm ring-1 ring-slate-200">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 ring-1 ring-sky-100">
                                    <span className="material-symbols-outlined text-[20px] text-sky-700">checklist</span>
                                </span>
                                <div>
                                    <h2 className="text-sm sm:text-lg font-bold text-slate-900">Eligibility Criteria</h2>
                                    <div className="mt-2 h-1 w-14 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400" />
                                </div>
                            </div>

                            <div className="mt-4 space-y-3 text-[13px] sm:text-sm text-slate-700 leading-relaxed">
                                <p>
                                    Graduates in any discipline with valid <strong>CAT / XAT / MAT scores</strong> are eligible. Candidates without valid scores will be required to take the <strong>IMASAT admission test</strong> conducted by IMAS.
                                </p>
                                <p>
                                    The selection process includes a <strong>Group Discussion and Personal Interview</strong>, providing a comprehensive evaluation of candidates.
                                </p>
                            </div>

                            <div className="mt-5 space-y-3">
                                {[
                                    'Bachelor\'s degree in any discipline from a recognised university',
                                    'Valid CAT / XAT / MAT score OR IMASAT test',
                                    'Group Discussion & Personal Interview',
                                ].map((req) => (
                                    <div key={req} className="flex items-start gap-3">
                                        <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200">
                                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                                        </span>
                                        <p className="text-xs sm:text-sm text-slate-700">{req}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Admissions 2026 */}
                        <div id="admissions-2026" className="rounded-2xl bg-gradient-to-br from-[#143674] to-[#0b1c3a] p-5 sm:p-6 text-white shadow-sm ring-1 ring-slate-200">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-[#0b1c3a] shadow-sm">
                                    <span className="material-symbols-outlined text-[18px]">school</span>
                                </span>
                                <div>
                                    <h2 className="text-sm sm:text-lg font-bold">Admissions 2026–28</h2>
                                    <div className="mt-2 h-1 w-14 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300" />
                                </div>
                            </div>

                            <p className="mt-4 text-xs sm:text-sm opacity-90">
                                Seats are limited. Apply early to secure your spot in the 2026–28 PGDM / MBA batch at IMAS.
                            </p>

                            <div className="mt-5 space-y-2">
                                {[
                                    { step: '1', label: 'Fill the Application Form' },
                                    { step: '2', label: 'Take IMASAT / Submit CAT/XAT/MAT Score' },
                                    { step: '3', label: 'Group Discussion & Personal Interview' },
                                    { step: '4', label: 'Merit List & Admission Offer' },
                                ].map((s) => (
                                    <div key={s.step} className="flex items-center gap-3 text-xs sm:text-sm">
                                        <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/15 font-bold text-[11px] ring-1 ring-white/15">
                                            {s.step}
                                        </span>
                                        <span className="opacity-95">{s.label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                <Button
                                    onClick={() => window.open('https://admission.imas.ac.in/', '_blank')}
                                    className="rounded-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white text-xs font-semibold py-6 shadow-md"
                                >
                                    Apply Now
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                                <a
                                    href={`tel:${IMAS_CONTACT.PHONE.replace(/\s/g, '')}`}
                                    className="inline-flex items-center justify-center rounded-full bg-white px-4 py-3 text-xs font-semibold text-[#143674] shadow-md transition-all duration-200 hover:-translate-y-0.5"
                                >
                                    <Phone className="mr-2 h-4 w-4" />
                                    Talk to Admission Expert
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CONTACT & MAP ─── */}
            <section id="contact" className="border-b border-slate-200 bg-slate-50">
                <div
                    data-animate-on-scroll
                    className="mx-auto max-w-[1550px] px-4 py-4 transition-all duration-700 ease-out sm:py-10"
                >
                    <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200 sm:p-6">
                        <div className="flex items-center gap-2">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white shadow-sm">
                                <MapPin className="h-4 w-4" />
                            </span>
                            <div>
                                <h2 className="text-base sm:text-xl font-bold text-slate-900">Contact & Visit Us</h2>
                                <div className="mt-2 h-1 w-14 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400" />
                            </div>
                        </div>

                        <div className="mt-5 grid gap-4 md:grid-cols-2">
                            <div className="space-y-4">
                                <div className="rounded-2xl bg-gradient-to-br from-[#143674] to-[#0b1c3a] p-5 text-white shadow-md">
                                    <div className="flex items-start gap-3">
                                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">
                                            <Building2 className="h-5 w-5 text-white" />
                                        </span>
                                        <div className="min-w-0">
                                            <p className="text-sm font-semibold">Campus Address</p>
                                            <p className="mt-2 text-[13px] leading-relaxed text-white/90">
                                                Plot No 37, Block – Bhangar-II<br />
                                                Near St. Xavier's University<br />
                                                Newtown Action Area – III<br />
                                                Kolkata, West Bengal – 700160
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-4 h-px w-full bg-white/15" />

                                    <div className="mt-4 grid grid-cols-3 gap-3">
                                        <div className="flex items-start gap-2">
                                            <Phone className="mt-0.5 h-4 w-4 text-cyan-200" />
                                            <div className="min-w-0">
                                                <p className="text-[11px] font-semibold text-white/90">Phone</p>
                                                <a className="text-[11px] text-white/80 hover:text-white" href={`tel:${IMAS_CONTACT.PHONE.replace(/\s/g, '')}`}>{IMAS_CONTACT.PHONE}</a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Mail className="mt-0.5 h-4 w-4 text-cyan-200" />
                                            <div className="min-w-0">
                                                <p className="text-[11px] font-semibold text-white/90">Email</p>
                                                <a className="text-[11px] text-white/80 hover:text-white break-all" href={`mailto:${IMAS_CONTACT.EMAIL}`}>{IMAS_CONTACT.EMAIL}</a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Globe className="mt-0.5 h-4 w-4 text-cyan-200" />
                                            <div className="min-w-0">
                                                <p className="text-[11px] font-semibold text-white/90">Web</p>
                                                <a className="text-[11px] text-white/80 hover:text-white" href="https://www.imas.ac.in" target="_blank" rel="noreferrer">www.imas.ac.in</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <a
                                            href={`tel:${IMAS_CONTACT.PHONE.replace(/\s/g, '')}`}
                                            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#143674] shadow-md transition-all duration-200 hover:-translate-y-0.5"
                                        >
                                            <Phone className="h-4 w-4" />
                                            Quick Call
                                        </a>
                                    </div>
                                </div>

                                <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                                    <div className="absolute left-3 top-3 z-10">
                                        <a
                                            href="https://www.google.com/maps?q=IMAS%20Business%20School%20Kolkata"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-[11px] font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200 hover:bg-white"
                                        >
                                            <MapPin className="h-4 w-4 text-sky-600" />
                                            Open in Maps
                                            <ExternalLink className="h-4 w-4 text-slate-500" />
                                        </a>
                                    </div>
                                    <iframe
                                        title="IMAS Campus Location Map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.238774664635!2d88.4322102!3d22.570171199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275aedaaaaaab%3A0x42fc9c8ae01a94cd!2sIMAS%20Business%20School!5e0!3m2!1sen!2sin!4v1763538389238!5m2!1sen!2sin"
                                        className="h-64 w-full border-0 sm:h-72"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>

                            <div className="rounded-2xl bg-gradient-to-b from-slate-50 to-white p-5 shadow-sm ring-1 ring-slate-200">
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 ring-1 ring-sky-100">
                                        <span className="material-symbols-outlined text-[20px] text-sky-700">send</span>
                                    </span>
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-900">Quick Inquiry</h3>
                                        <div className="mt-2 h-1 w-14 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400" />
                                    </div>
                                </div>

                                <p className="mt-4 text-[13px] sm:text-sm text-slate-600">
                                    Interested in the PGDM / MBA program? Get in touch — our admissions team will reach out within 24 hours.
                                </p>

                                <div className="mt-5 flex flex-col gap-3">
                                    <Button
                                        onClick={() => { try { applyNow() } catch (e) { window.dispatchEvent(new Event('imas:openEnquiryForm')) } }}
                                        className="w-full rounded-full bg-gradient-to-r from-sky-500 to-blue-700 hover:from-sky-600 hover:to-blue-800 text-white font-semibold text-[13px] sm:text-sm py-6 shadow-md"
                                    >
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Submit an Enquiry
                                    </Button>
                                    <Button
                                        onClick={onDownload}
                                        variant="outline"
                                        className="w-full rounded-full border-sky-200 text-sky-700 hover:bg-sky-50 text-[13px] sm:text-sm py-6"
                                    >
                                        <Download className="mr-2 h-4 w-4" />
                                        Download Programme Brochure
                                    </Button>
                                    <a
                                        href={`tel:${IMAS_CONTACT.PHONE.replace(/\s/g, '')}`}
                                        className="w-full rounded-full border border-slate-200 bg-white px-4 py-3 flex items-center justify-center gap-2 text-[13px] sm:text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                                    >
                                        <Phone className="h-4 w-4 text-slate-700" />
                                        {IMAS_CONTACT.PHONE}
                                    </a>
                                </div>

                                <div className="mt-5 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 p-4 ring-1 ring-sky-100">
                                    <div className="flex items-start gap-3">
                                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                                            <span className="material-symbols-outlined text-[18px]">info</span>
                                        </span>
                                        <div>
                                            <p className="text-[13px] font-semibold text-slate-900">Our team is available</p>
                                            <p className="mt-1 text-[12px] text-slate-600">Mon – Sat: 9:30 AM – 6:30 PM</p>
                                            <p className="mt-1 text-[12px] text-slate-600">We’ll connect with you as soon as possible!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="secure-seat" className="border-b border-slate-200 bg-gradient-to-br from-[#143674] to-[#0b1c3a] text-white">
                <div
                    data-animate-on-scroll
                    className="mx-auto max-w-[1550px] px-4 py-4 transition-all duration-700 ease-out sm:py-10"
                >
                    <div className="relative overflow-hidden p-4 sm:p-7">
                        <div className="pointer-events-none absolute inset-0 opacity-40">
                            <div className="absolute -left-10 top-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
                            <div className="absolute -right-10 bottom-10 h-64 w-64 rounded-full bg-indigo-400/15 blur-3xl" />
                        </div>

                        <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <div className="max-w-2xl">
                                <h2 className="text-base sm:text-xl font-bold">Secure Your Seat in the Best PGDM College in Kolkata</h2>
                                <p className="mt-1 text-xs sm:text-sm opacity-90">Admissions Open • Limited Seats • High Placement Programmes</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <a
                                    href={`tel:${IMAS_CONTACT.PHONE.replace(/\s/g, '')}`}
                                    className="min-h-11 inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#143674] shadow-md transition-all duration-200 hover:-translate-y-0.5"
                                >
                                    <Phone className="h-4 w-4" />
                                    Talk to Experts
                                </a>
                                <Button
                                    onClick={onDownload}
                                    variant="outline"
                                    className="min-h-11 rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 text-xs font-semibold"
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    Download Brochure
                                </Button>
                                <Button
                                    onClick={() => window.open('https://admission.imas.ac.in/', '_blank')}
                                    className="min-h-11 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white text-xs font-semibold"
                                >
                                    Apply Now
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── FAQ ─── */}
            <section id="faq" className="py-4 sm:py-10 bg-slate-50 border-b border-slate-200">
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
                                a: 'Candidates must have a Bachelor\'s degree in any discipline from a recognised university. Valid CAT / XAT / MAT scores are required, or candidates may appear for the IMASAT admission test conducted by IMAS.',
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
                                a: 'Yes, internships are available from Year 1. The programme is designed to give students early and sustained corporate exposure.',
                            },
                            {
                                q: 'What specialisations are available in the PGDM programme?',
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
