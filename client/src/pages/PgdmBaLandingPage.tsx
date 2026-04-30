import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Button } from '../components/ui/button'
import { IMAS_CONTACT } from '../lib/constants'
import { applyNow, downloadBrochureFor } from '../lib/utils'
import {
  BarChart2,
  BookOpen,
  Briefcase,
  CheckCircle,
  ChevronDown,
  Download,
  ExternalLink,
  Globe,
  GraduationCap,
  Layers,
  MapPin,
  Phone,
  Star,
  Trophy,
  Users,
} from 'lucide-react'

export function PgdmBaLandingPage(): React.JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const marqueeRef = React.useRef<HTMLDivElement | null>(null)

  const canonicalUrl = 'https://www.imas.ac.in/pgdm-business-analytics-college-kolkata'

  const onDownload = () => {
    const href = '/uploads/IMAS_PGDM_2026_Brochure.pdf'
    try {
      if (typeof (window as any).openBrochurePopup === 'function') {
        ;(window as any).openBrochurePopup(href)
        return
      }
    } catch {}
    downloadBrochureFor(href)
  }

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

  const achievements = [
    { title: 'Top 10 Best B School in Kolkata', sub: 'Knowledge Review, 2026' },
    { title: 'Best Emerging Business School Award', sub: 'Edulite Excellence Award, 2024' },
    { title: 'Best College for Innovation & Startup in Kolkata', sub: 'Edulite Excellence Award, 2025' },
    { title: 'Excellence in Management Education', sub: 'Collegerank, 2024' },
  ]

  const collaborations = ['CII', 'ICC', 'BCC&I', 'MSME', 'NHRD', 'ERSC']

  const idealFor = ['Business & Data Analytics', 'Consulting & Strategy', 'Corporate MIS & Reporting', 'Analytics-driven managerial roles']

  const managementFoundation = [
    'Management, Economics & Accounting',
    'Marketing, HR & Operations',
    'Business Research & Analytics',
    'Digital Transformation & Emerging Technologies',
  ]

  const coreAnalyticsSkills = [
    'Data Analytics for Managers',
    'Predictive & Prescriptive Analytics',
    'SQL & Data Warehousing',
    'Business Intelligence & Dashboards',
    'AI Applications in Analytics',
    'Decision Modeling & Optimization',
  ]

  const year1Sem1 = [
    'Principles of Management & Organizational Behavior',
    'Managerial Economics',
    'Financial Accounting & Analysis',
    'Business Statistics & Quantitative Techniques',
    'Business Communication',
    'Indian & Global Business Environment',
  ]

  const year1Sem2 = [
    'Marketing Management',
    'Financial Management',
    'Human Resource Management',
    'Operations & Supply Chain Management',
    'Business Research Methods & Analytics Lab',
    'Digital Transformation & Emerging Technologies',
  ]

  const year2Sem3 = [
    'Data Analytics for Managers',
    'Predictive Analytics',
    'SQL & Data Warehousing',
    'Business Intelligence & Visualization',
    'Decision Modeling & Optimization',
    'Domain Analytics (Marketing / Finance / HR / Operations)',
  ]

  const year2Sem4 = [
    'Prescriptive Analytics',
    'Advanced Excel & VBA',
    'AI Applications in Business Analytics',
    'Analytics Strategy & Consulting',
    'Business Analytics Simulation & Case Lab',
    'Capstone Project (Industry-Based)',
  ]

  const tools = [
    'Advanced Excel & VBA',
    'SQL & Database Management',
    'Power BI / Tableau',
    'Predictive & Prescriptive Analytics',
    'Decision Modeling & Simulation',
    'AI-enabled Analytics',
  ]

  const programFeatures = [
    '20+ Presentations for communication & leadership',
    'Six Sigma (Green Belt) Certification',
    'Advanced Excel Certification',
    'Business Communication Training',
    'Corporate Mentorship & Industry Visits',
  ]

  const workingProfessionalOptions = [
    'Flexible Class Timings',
    'Hybrid Learning Mode (Online + Offline)',
    'Corporate Sponsored Discounts',
    'Career Transition & Mid-Level Role Opportunities',
    'Practical Learning applicable to current job',
  ]

  const placementStats = [
    { value: '₹6.50+ LPA', label: 'Average Package', icon: 'trending_up', color: 'from-yellow-400 to-amber-500' },
    { value: '₹18.00 LPA', label: 'Highest Package', icon: 'emoji_events', color: 'from-cyan-400 to-teal-500' },
    { value: '465+', label: 'Placement Opportunities', icon: 'handshake', color: 'from-green-400 to-emerald-500' },
    { value: 'Internship', label: 'to Placement Conversion', icon: 'work_history', color: 'from-purple-400 to-indigo-500' },
  ]

  const topSectors = ['IT & Analytics Companies', 'Consulting Firms', 'BFSI Sector', 'E-commerce & Startups']

  const careerOpportunities = ['Business Analyst', 'Data Analyst', 'MIS Analyst', 'Analytics Consultant', 'Decision Science Executive']

  const whyImas = [
    'Strong analytics + management combination',
    'Real datasets & simulation-based learning',
    'Industry-driven capstone projects',
    'High demand career pathway',
  ]

  const testimonials = [
    {
      quote: 'The program helped me build real analytics skills with tools and projects.',
      name: 'Anurag Jain',
      role: 'Data Analyst',
      batch: 'MBA / PGDM 2025',
      type: 'student' as const,
    },
    {
      quote: 'The hands-on training and internship exposure prepared me for corporate roles.',
      name: 'Siddharth Roy',
      role: 'Business Analyst',
      batch: 'MBA/ PGDM - 2025',
      type: 'student' as const,
    },
    {
      quote:
        'IMAS students demonstrate excellent adaptability, professionalism, and business understanding, reflecting strong institutional focus on corporate grooming and placement readiness programs.',
      name: 'Mr. Avijit Basu',
      role: 'NHRD',
      batch: 'Industry Partner',
      type: 'industry' as const,
    },
    {
      quote:
        'Experiential learning at IMAS, including industry immersion programs, provides practical exposure and deep operational insights, enhancing overall student competency significantly.',
      name: 'Mr. Sounak Sen',
      role: 'KPMG',
      batch: 'Industry Partner',
      type: 'industry' as const,
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

  const faqs = [
    { q: 'Does IMAS provide placement support?', a: 'Yes, IMAS provides structured placement support with internships and analytics recruiters.' },
    { q: 'Are internships included?', a: 'Yes, a mandatory 8–10 week internship is part of the program.' },
    { q: 'What is the average salary?', a: 'The average package is ₹6.50+ LPA depending on performance.' },
    { q: 'What is the highest package?', a: 'The highest package goes up to ₹18.00 LPA.' },
    { q: 'Is Business Analytics a good career?', a: 'Yes, it is one of the fastest-growing and highest-paying career domains.' },
    { q: 'Does IMAS provide tools training?', a: 'Yes, students are trained in Excel, SQL, Power BI, and analytics tools.' },
    { q: 'Is this program suitable for working professionals?', a: 'Yes, with flexible timing and hybrid learning options.' },
    { q: 'Does IMAS provide hostel facilities?', a: 'Yes, for both boys and girls.' },
    { q: 'Are scholarships available?', a: 'Yes, merit-based and government schemes are available.' },
    { q: 'Is PGDM in Business Analytics a good career option after graduation?', a: 'It is more industry-focused with practical analytics skills.' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900 scroll-smooth">
      <Helmet>
        <title>PGDM in Business Analytics (AICTE Approved) | IMAS</title>
        <meta
          name="description"
          content="Best PGDM Business Analytics College in Kolkata with Placement & Analytics Training. Internship from Year 1, hands-on tools training, industry-aligned curriculum and strong placement support at IMAS."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="PGDM in Business Analytics (AICTE Approved) | IMAS" />
        <meta
          property="og:description"
          content="Best PGDM Business Analytics College in Kolkata with Placement & Analytics Training. Internship from Year 1, hands-on tools training, strong placements."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://www.imas.ac.in/uploads/IMASBUILDING.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IMAS Kolkata" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PGDM in Business Analytics (AICTE Approved) | IMAS" />
        <meta name="twitter:description" content="PGDM Business Analytics in Kolkata with placements, internship from Year 1, and tools training." />
        <meta name="twitter:image" content="https://www.imas.ac.in/uploads/IMASBUILDING.jpeg" />
      </Helmet>

      <div className="relative w-full border-b border-white/10 bg-gradient-to-r from-[#0b1c3a] via-[#143674] to-[#2e7bb3] text-[11px] text-white shadow-sm sm:text-sm">
        <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute -left-10 top-0 h-20 w-40 rounded-full bg-cyan-400/40 blur-2xl" />
          <div className="absolute -right-10 bottom-0 h-20 w-40 rounded-full bg-indigo-400/30 blur-2xl" />
        </div>
        <div className="relative mx-auto flex max-w-[1550px] items-center justify-between px-4 py-2">
          <p className="flex items-center gap-2 font-medium min-w-0">
            <CheckCircle className="h-4 w-4 animate-pulse flex-shrink-0" />
            <span className="truncate">PGDM Business Analytics • Admissions Open • Limited Seats • AICTE-Approved</span>
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

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-900/80 backdrop-blur shadow-lg">
        <div className="mx-auto flex max-w-[1550px] items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <img src="/uploads/logos/imas.png" alt="IMAS International Management & Analytics School" className="h-10 w-auto xl:h-12" />
          </div>

          <nav className="hidden items-center gap-5 text-sm text-slate-200 md:flex">
            {[
              { href: '#about-imas', icon: 'menu_book', label: 'Program Overview' },
              { href: '#curriculum', icon: 'layers', label: 'Curriculum' },
              { href: '#tools', icon: 'query_stats', label: 'Tools' },
              { href: '#placements', icon: 'work', label: 'Placements' },
              { href: '#life-at-imas', icon: 'groups', label: 'Life at IMAS' },
              { href: '#admissions-2026', icon: 'check_circle', label: 'Admissions 2026' },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative flex items-center gap-1 rounded-md px-1.5 py-1 transition-colors duration-200 hover:text-white"
              >
                <span className="material-symbols-outlined text-[18px]">{l.icon}</span>
                <span>{l.label}</span>
                <span className="pointer-events-none absolute -bottom-1 left-1.5 right-1.5 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#26c1d3] to-[#2e7bb3] transition-transform duration-200 group-hover:scale-x-100" />
              </a>
            ))}

            <a
              href={`tel:${IMAS_CONTACT.PHONE.replace(/\s/g, '')}`}
              className="ml-1 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/95 hover:bg-white/15"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>{IMAS_CONTACT.PHONE}</span>
            </a>

            <Button
              onClick={() => {
                try {
                  applyNow()
                } catch {
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

      {mobileMenuOpen && <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setMobileMenuOpen(false)} />}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
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
                { href: '#about-imas', icon: BookOpen, label: 'Program Overview' },
                { href: '#curriculum', icon: Layers, label: 'Curriculum' },
                { href: '#tools', icon: BarChart2, label: 'Tools' },
                { href: '#placements', icon: Briefcase, label: 'Placements' },
                { href: '#life-at-imas', icon: Users, label: 'Life at IMAS' },
                { href: '#admissions-2026', icon: CheckCircle, label: 'Admissions 2026' },
                { href: '#faq', icon: CheckCircle, label: 'FAQ' },
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
            </ul>
          </nav>
          <div className="p-4 border-t border-gray-200 space-y-2.5">
            <Button
              className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white"
              onClick={() => {
                setMobileMenuOpen(false)
                try {
                  applyNow()
                } catch {
                  window.dispatchEvent(new Event('imas:openEnquiryForm'))
                }
              }}
            >
              Inquire Now
            </Button>
            <Button
              variant="outline"
              className="w-full border-[#26c1d3] text-[#2e7bb3] hover:bg-[#26c1d3]/10"
              onClick={() => {
                setMobileMenuOpen(false)
                onDownload()
              }}
            >
              <Download className="h-4 w-4 mr-2" /> Download Brochure
            </Button>
          </div>
        </div>
      </div>

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

        <div data-animate-on-scroll className="relative mx-auto grid max-w-[1550px] grid-cols-1 gap-5 px-4 py-5 md:grid-cols-12 md:gap-10 md:py-14 transition-all duration-700 ease-out">
          <div className="flex-1 md:col-span-8 space-y-3 sm:space-y-5">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-medium text-white shadow-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Admissions Open for 2026–28</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-lg sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-white drop-shadow-md">
                PGDM in Business Analytics (AICTE Approved) – IMAS
                <br />
                <span className="text-cyan-300">Best PGDM Business Analytics College in Kolkata</span>
              </h1>
              <p className="text-xs sm:text-lg font-medium text-gray-200/95 drop-shadow">
                Turn Data into Decisions | Build High-Paying Careers in Business Analytics
              </p>
              <div className="flex items-center gap-0.5 sm:gap-1 text-xs font-semibold text-white" aria-label="Student rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400" fill="currentColor" />
                ))}
                <span className="ml-2 text-[10px] sm:text-[11px] text-gray-200/95">4.9/5 Student Rating</span>
              </div>
            </div>

            <p className="max-w-xl text-xs leading-snug text-gray-200 sm:text-sm">
              Looking for a PGDM in Business Analytics in Kolkata? IMAS offers one of the best PGDM Business Analytics programs in Kolkata, designed for students and working professionals aiming for careers in analytics, consulting, and data-driven decision-making.
            </p>

            <div className="relative overflow-hidden">
              <div ref={marqueeRef} className="scroller" data-speed="fast" data-direction="left">
                <div className="scroller__inner whitespace-nowrap text-xs font-medium text-white">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 shadow-sm border-t border-b border-white/30">
                    <GraduationCap className="h-4 w-4 text-white" />
                    <span>Internship from Year 1</span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 shadow-sm border-t border-b border-white/30">
                    <BarChart2 className="h-4 w-4 text-white" />
                    <span>Hands-on Analytics Tools Training</span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 shadow-sm border-t border-b border-white/30">
                    <Layers className="h-4 w-4 text-white" />
                    <span>Industry-Aligned Curriculum</span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 shadow-sm border-t border-b border-white/30">
                    <Briefcase className="h-4 w-4 text-white" />
                    <span>Strong Placement Support</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row xs:flex-row flex-wrap items-stretch xs:items-center gap-2 sm:gap-3 pt-1">
              <Button
                onClick={() => {
                  try {
                    applyNow()
                  } catch {
                    window.dispatchEvent(new Event('imas:openEnquiryForm'))
                  }
                }}
                className="group rounded-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 px-4 py-2.5 text-xs sm:text-sm sm:px-5 sm:py-2.5 font-semibold text-white shadow-md transition-all duration-300 active:scale-95 justify-center"
              >
                Talk to Experts
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

            <div className="mt-4 grid max-w-xl grid-cols-3 items-stretch gap-3 text-center text-[11px] text-slate-600 sm:grid-cols-3">
              {[{ label: 'Programme', value: 'PGDM Business Analytics' }, { label: 'Intake', value: '2026 Batch' }, { label: 'Location', value: 'Newtown, Kolkata' }].map(({ label, value }) => (
                <div key={label} className="h-full rounded-xl bg-white items-center justify-center p-2.5 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <p className="text-[10px] uppercase tracking-wide text-slate-500">{label}</p>
                  <p className="mt-1 text-[10px] font-semibold text-slate-900 sm:text-sm">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-1 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
              {[{ value: '₹6.50+ LPA', label: 'Avg Package', color: 'text-yellow-300' }, { value: '₹18.00 LPA', label: 'Highest Package', color: 'text-cyan-300' }].map((s) => (
                <div key={s.label} className="flex flex-col items-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-2 sm:px-4 sm:flex-row sm:gap-2 text-white">
                  <span className={`text-sm sm:text-2xl font-bold ${s.color}`}>{s.value}</span>
                  <span className="text-[9px] sm:text-xs opacity-80 text-center">{s.label}</span>
                </div>
              ))}
              <div className="flex flex-col items-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-2 sm:px-4 sm:flex-row sm:gap-2 text-white">
                <span className="text-sm sm:text-2xl font-bold text-green-300">AICTE</span>
                <span className="text-[9px] sm:text-xs opacity-80 text-center">Approved</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-white/90">
              👉 Also suitable for <span className="font-semibold">Working Professionals</span> & <span className="font-semibold">Career Switchers</span>
            </div>
          </div>

          <div className="hidden md:block sm:w-[450px] h-full md:col-span-4">
            <img
              src="/uploads/working/hero_image4.jpg"
              alt="PGDM Business Analytics"
              className="w-full h-full object-cover rounded-xl"
              onError={(e) => {
                const t = e.currentTarget as HTMLImageElement
                t.style.display = 'none'
              }}
            />
          </div>
        </div>
      </section>

      <section id="about-imas" className="border-b border-slate-200 bg-slate-50">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] py-6 sm:py-8 px-4 transition-all duration-700 ease-out">
          <div className="relative overflow-hidden rounded-xl bg-white/95 ring-1 ring-white/20 p-4 sm:p-6 md:p-8">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 mesh-grid" />
            </div>

            <div className="grid gap-4 md:grid-cols-2 md:gap-6">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700">
                      <GraduationCap className="h-5 w-5 text-white" />
                    </span>
                    <h2 className="text-base sm:text-2xl font-bold font-sans bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
                      About PGDM Business Analytics
                    </h2>
                  </div>
                  <div className="h-1 w-32 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600 mb-4" />
                  <p className="text-[13px] sm:text-base leading-relaxed text-slate-700">
                    Every business today depends on data-driven decisions, and companies are actively hiring professionals who can convert data into insights.
                  </p>
                  <p className="mt-3 text-[13px] sm:text-base leading-relaxed text-slate-800">
                    The PGDM in Business Analytics at IMAS prepares students with a strong combination of management knowledge, analytics skills, dashboards, and decision models, making it one of the top analytics courses in Kolkata with placement.
                  </p>
                </div>

                <div>
                  <div className="text-sm font-semibold text-slate-900">This program is ideal for students interested in:</div>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {idealFor.map((t) => (
                      <div key={t} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200">
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-gradient-to-br from-[#143674] to-[#0b1c3a] p-5 text-white shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 text-[#0b1c3a]">
                      <BarChart2 className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-base font-bold">Placement-Driven Analytics Program</div>
                      <div className="text-[11px] opacity-85">Curriculum + tools + projects</div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {[
                      { label: 'Internship', value: 'Year 1' },
                      { label: 'Tools', value: 'Excel/SQL/BI' },
                      { label: 'Outcome', value: 'Analytics roles' },
                      { label: 'Support', value: 'Placements' },
                    ].map((i) => (
                      <div key={i.label} className="rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15">
                        <div className="text-[10px] opacity-80">{i.label}</div>
                        <div className="mt-0.5 text-xs font-semibold">{i.value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-col sm:flex-row gap-2">
                    <Button
                      onClick={onDownload}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-md hover:from-sky-500 hover:to-blue-600"
                    >
                      Download Brochure
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={() => {
                        window.location.href = `tel:${IMAS_CONTACT.PHONE.replace(/\s/g, '')}`
                      }}
                      variant="outline"
                      className="inline-flex items-center justify-center gap-2 rounded-full border-white/30 text-white hover:bg-white/10 text-xs font-semibold"
                    >
                      Speak to Expert
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="awards" className="border-b border-slate-200 bg-slate-50">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-6 transition-all duration-700 ease-out sm:py-10">
          <div className="space-y-4">
            <div className="award-banner relative overflow-hidden rounded-3xl p-4 sm:p-6 text-white shadow-lg">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-[#0b1c3a]">
                  <Trophy className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-base sm:text-2xl font-bold">Our Achievements</div>
                  <div className="text-[11px] sm:text-xs opacity-90">National • Industry • Academic</div>
                </div>
              </div>
              <p className="mt-2 text-xs sm:text-sm opacity-90">
                IMAS is consistently recognised among the best MBA colleges in Kolkata for academic excellence, innovation, and placement outcomes.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px]">
                {['Academic Excellence', 'Emerging School', 'Innovation', 'Placement Outcomes'].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 shadow-sm ring-1 ring-white/20">
                    <span className="material-symbols-outlined text-[16px]">military_tech</span>
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {achievements.map((a) => (
                <div key={a.title} className="trophy-shine relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0b1c3a] to-[#143674] p-4 text-center text-white shadow-md ring-1 ring-amber-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 text-[10px]">{a.sub.toUpperCase()}</div>
                  <div className="mt-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-[#0b1c3a] pulse-gold">
                    <span className="material-symbols-outlined text-[22px]">military_tech</span>
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
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-6 transition-all duration-700 ease-out sm:py-10">
          <div className="relative overflow-hidden rounded-3xl bg-white/95 ring-1 ring-white/20 p-4 sm:p-6 md:p-8">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 mesh-grid" />
            </div>
            <div className="relative">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                  <Users className="h-4 w-4" />
                </span>
                <div>
                  <h2 className="text-base sm:text-2xl font-bold font-sans bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">Industry Collaborations</h2>
                  <p className="text-[11px] sm:text-xs font-medium text-slate-600">Ensuring strong industry alignment and global career opportunities</p>
                </div>
              </div>
              <div className="mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />

              <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {collaborations.map((t) => (
                  <div key={t} className="rounded-2xl bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-slate-900 ring-1 ring-slate-200">
                    {t}
                  </div>
                ))}
              </div>
              <div className="mt-4 text-sm text-slate-700">Ensuring strong industry alignment and global career opportunities</div>
            </div>
          </div>
        </div>
      </section>

      <section id="curriculum" className="border-b border-slate-200 bg-slate-50">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-6 transition-all duration-700 ease-out sm:py-10">
          <div className="relative overflow-hidden rounded-3xl bg-white/95 ring-1 ring-white/20 p-4 sm:p-6 md:p-8">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 mesh-grid" />
            </div>

            <div className="relative">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                  <Layers className="h-4 w-4" />
                </span>
                <div>
                  <h2 className="text-base sm:text-2xl font-bold font-sans bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">What You Will Learn</h2>
                  <p className="text-[11px] sm:text-xs font-medium text-slate-600">Business foundation + analytics capability</p>
                </div>
              </div>
              <div className="mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <div className="text-sm font-semibold text-slate-900">Management Foundation</div>
                  <ul className="mt-3 space-y-2">
                    {managementFoundation.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-[13px] text-slate-700 sm:text-sm">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <div className="text-sm font-semibold text-slate-900">Core Business Analytics Skills</div>
                  <ul className="mt-3 space-y-2">
                    {coreAnalyticsSkills.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-[13px] text-slate-700 sm:text-sm">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <div className="text-sm font-semibold text-slate-900">Program Structure</div>
                <div className="mt-3 grid gap-3 lg:grid-cols-2">
                  <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                    <div className="text-sm font-semibold text-slate-900">Year 1 – Core Management</div>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
                        <div className="text-xs font-semibold text-slate-900">Semester I</div>
                        <ul className="mt-2 space-y-1 text-[11px] text-slate-700">
                          {year1Sem1.map((t) => (
                            <li key={t} className="flex items-start gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
                        <div className="text-xs font-semibold text-slate-900">Semester II</div>
                        <ul className="mt-2 space-y-1 text-[11px] text-slate-700">
                          {year1Sem2.map((t) => (
                            <li key={t} className="flex items-start gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs text-slate-700 ring-1 ring-slate-200">
                      👉 Mandatory Summer Internship (8–10 Weeks) — Analytics, Consulting, IT, Corporate or Startup
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                    <div className="text-sm font-semibold text-slate-900">Year 2 – Business Analytics Specialization</div>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
                        <div className="text-xs font-semibold text-slate-900">Semester III</div>
                        <ul className="mt-2 space-y-1 text-[11px] text-slate-700">
                          {year2Sem3.map((t) => (
                            <li key={t} className="flex items-start gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
                        <div className="text-xs font-semibold text-slate-900">Semester IV</div>
                        <ul className="mt-2 space-y-1 text-[11px] text-slate-700">
                          {year2Sem4.map((t) => (
                            <li key={t} className="flex items-start gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="tools" className="mt-6 grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <div className="text-sm font-semibold text-slate-900">Tools & Skills You Will Master</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tools.map((t) => (
                      <span key={t} className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200">
                        <span className="material-symbols-outlined text-[16px]">verified</span>
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <div className="text-sm font-semibold text-slate-900">Program Features</div>
                  <ul className="mt-3 space-y-2">
                    {programFeatures.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-[13px] text-slate-700 sm:text-sm">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <div className="text-sm font-semibold text-slate-900">Designed for Working Professionals</div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {workingProfessionalOptions.map((t) => (
                    <div key={t} className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700 ring-1 ring-slate-200">
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="placements" className="border-b border-slate-200 bg-slate-50">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-6 transition-all duration-700 ease-out sm:py-10">
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
                  <div className="text-base sm:text-2xl font-bold">Placement Highlights (Core USP)</div>
                  <div className="text-[11px] sm:text-xs opacity-80">Consistently among the best PGDM Business Analytics colleges in Kolkata with placement</div>
                </div>
              </div>
              <div className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300" />
            </div>

            <div className="relative grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4 mb-6">
              {placementStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/10 p-3 text-center ring-1 ring-white/20 backdrop-blur-sm">
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r ${stat.color} text-[#0b1c3a] mb-2`}>
                    <span className="material-symbols-outlined text-[20px]">{stat.icon}</span>
                  </div>
                  <p className="text-lg sm:text-xl font-bold">{stat.value}</p>
                  <p className="text-[11px] opacity-80 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="relative mb-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-300 mb-3">Top sectors</p>
              <div className="flex flex-wrap gap-2">
                {topSectors.map((sector) => (
                  <span key={sector} className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/20">
                    <CheckCircle className="h-3.5 w-3.5 text-green-400" />
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="careers" className="border-b border-slate-200 bg-white">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-6 transition-all duration-700 ease-out sm:py-10">
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
              </span>
              <div>
                <h2 className="text-base sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">Career Opportunities</h2>
                <p className="text-[11px] sm:text-xs font-medium text-slate-600">Analytics roles with high demand</p>
              </div>
            </div>
            <div className="mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 mt-6">
            {careerOpportunities.map((c) => (
              <div key={c} className="rounded-2xl bg-slate-50 p-3 text-center shadow-sm ring-1 ring-slate-200">
                <p className="text-xs sm:text-sm font-semibold text-slate-900">{c}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
            <div className="text-sm font-semibold text-slate-900">Why IMAS for Business Analytics</div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {whyImas.map((t) => (
                <div key={t} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" />
                    <div className="text-[13px] text-slate-700 sm:text-sm">{t}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="border-b border-slate-200 bg-slate-50">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-6 transition-all duration-700 ease-out sm:py-10">
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                <Star className="h-4 w-4" />
              </span>
              <div>
                <h2 className="text-base sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">Student & Industry Testimonials</h2>
                <p className="text-[11px] sm:text-xs font-medium text-slate-600">What our students & partners say</p>
              </div>
            </div>
            <div className="mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />
          </div>

          <div className="mt-6 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className={`group rounded-2xl p-4 shadow-sm ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  t.type === 'industry' ? 'bg-gradient-to-br from-[#0b1c3a]/5 to-[#143674]/10 ring-slate-300' : 'bg-white ring-slate-200'
                }`}
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
                    <p className="text-[10px] text-slate-500">
                      {t.role} • {t.batch}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="international" className="border-b border-slate-200 bg-white">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-6 transition-all duration-700 ease-out sm:py-10">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#143674] to-[#0b1c3a] p-4 sm:p-6 text-white shadow-lg">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
            </div>

            <div className="relative flex items-center gap-2 mb-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 text-[#0b1c3a]">
                <Globe className="h-4 w-4" />
              </span>
              <div>
                <h2 className="text-base sm:text-2xl font-bold">International Immersion Programmes</h2>
                <p className="text-[11px] sm:text-xs opacity-80">Global Exposure & Academic Collaborations</p>
              </div>
            </div>
            <div className="relative mt-1 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 mb-4" />

            <p className="relative text-xs sm:text-sm opacity-90 max-w-2xl mb-6">
              Gain global exposure through international immersion programs and academic collaborations with leading global institutions.
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
            <div className="relative mt-4 text-[11px] opacity-85">(Photographs of all these universities need to be shown)</div>
          </div>
        </div>
      </section>

      <section id="life-at-imas" className="border-b border-slate-200 bg-slate-50">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-6 transition-all duration-700 ease-out sm:py-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
              <Users className="h-4 w-4" />
            </span>
            <div>
              <h2 className="text-base sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">Campus Experience</h2>
              <p className="text-[11px] sm:text-xs font-medium text-slate-600">Campus Life • Global Exposure • Student Activities • Industry Training</p>
            </div>
          </div>
          <div className="mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600 mb-5" />

          <div className="mt-4 rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200">
            <div className="relative aspect-video bg-slate-100">
              <iframe
                title="IMAS Campus Experience"
                src="https://www.youtube.com/embed/rM3MWkhO6GA"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-4 grid gap-3 grid-cols-2 md:grid-cols-4">
            {[
              { icon: 'hotel', label: 'Separate hostels for boys & girls' },
              { icon: 'security', label: 'Safe & secure campus' },
              { icon: 'wifi', label: 'Wi-Fi enabled environment' },
              { icon: 'school', label: 'Modern classrooms' },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-200">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                  <span className="material-symbols-outlined text-[18px]">{f.icon}</span>
                </span>
                <p className="text-xs font-medium text-slate-800">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="scholarships" className="border-b border-slate-200 bg-white">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-6 transition-all duration-700 ease-out sm:py-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
              <span className="material-symbols-outlined text-[18px]">savings</span>
            </span>
            <div>
              <h2 className="text-base sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">Scholarships & Loans</h2>
              <p className="text-[11px] sm:text-xs font-medium text-slate-600">Study Now, Pay Later Options Available</p>
            </div>
          </div>
          <div className="mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600 mb-6" />

          <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
            {[
              { icon: 'workspace_premium', label: 'Merit-Based Scholarships', color: 'from-amber-400 to-yellow-500', bg: 'bg-amber-50', text: 'text-amber-700' },
              { icon: 'account_balance', label: 'Govt. Schemes', color: 'from-sky-500 to-blue-600', bg: 'bg-sky-50', text: 'text-sky-700' },
              { icon: 'credit_card', label: 'Student Credit Card Facility', color: 'from-emerald-500 to-teal-600', bg: 'bg-emerald-50', text: 'text-emerald-700' },
              { icon: 'real_estate_agent', label: 'Education Loan Assistance', color: 'from-purple-500 to-indigo-600', bg: 'bg-purple-50', text: 'text-purple-700' },
            ].map((s) => (
              <div key={s.label} className={`flex flex-col items-center gap-3 rounded-2xl ${s.bg} p-4 text-center shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}>
                <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r ${s.color} text-white`}>
                  <span className="material-symbols-outlined text-[22px]">{s.icon}</span>
                </span>
                <p className={`text-[13px] sm:text-sm font-semibold ${s.text}`}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="eligibility" className="border-b border-slate-200 bg-slate-50">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-6 transition-all duration-700 ease-out sm:py-10">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                  <span className="material-symbols-outlined text-[18px]">checklist</span>
                </span>
                <h2 className="text-base sm:text-lg font-bold bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">Admission & Eligibility - PGDM Program</h2>
              </div>
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600 mb-4" />
              <p className="text-[13px] sm:text-sm text-slate-700 leading-relaxed">
                Graduates in any discipline with valid CAT/XAT/MAT scores are eligible for admission to the PGDM Course. Candidates without valid scores will be required to take the IMASAT admission test conducted by IMAS. The selection process includes a Group Discussion and Personal Interview, providing a comprehensive evaluation of candidates.
              </p>
            </div>

            <div id="admissions-2026" className="rounded-2xl bg-gradient-to-br from-[#143674] to-[#0b1c3a] p-4 sm:p-6 text-white shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-[#0b1c3a]">
                  <span className="material-symbols-outlined text-[18px]">school</span>
                </span>
                <h2 className="text-base sm:text-lg font-bold">Admissions 2026–28</h2>
              </div>
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 mb-4" />
              <p className="text-xs sm:text-sm opacity-90 mb-4">Seats are limited. Apply early to secure your seat.</p>
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

      <section id="contact" className="border-b border-slate-200 bg-white">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-6 transition-all duration-700 ease-out sm:py-10">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                  <MapPin className="h-4 w-4" />
                </span>
                <h2 className="text-base sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">Contact & Visit Us</h2>
              </div>
              <div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600 mb-5" />
              <div className="rounded-2xl bg-gradient-to-br from-[#143674] to-[#0b1c3a] p-4 text-white">
                <div className="text-base font-semibold">Campus Address</div>
                <p className="mt-1 text-[13px] sm:text-sm opacity-90">
                  Plot No 37, Block – Bhangar-II
                  <br />
                  Near St. Xavier's University
                  <br />
                  Newtown Action Area – III
                  <br />
                  Kolkata, West Bengal – 700160
                </p>
                <div className="mt-3 space-y-1 text-sm">
                  <p className="inline-flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">call</span>
                    <span className="font-semibold">Phone:</span> {IMAS_CONTACT.PHONE}
                  </p>
                  <p className="inline-flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">mail</span>
                    <span className="font-semibold">Email:</span> {IMAS_CONTACT.EMAIL}
                  </p>
                  <p className="inline-flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">language</span>
                    <span className="font-semibold">Web:</span> www.imas.ac.in
                  </p>
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
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4 sm:p-6 ring-1 ring-slate-200 flex flex-col gap-3">
              <h3 className="text-base font-bold text-slate-900">Quick Inquiry</h3>
              <p className="text-[13px] sm:text-sm text-slate-600">Interested in the PGDM Business Analytics program? Our admissions team will reach out within 24 hours.</p>
              <div className="flex flex-col gap-2.5 mt-1">
                <Button
                  onClick={() => {
                    try {
                      applyNow()
                    } catch {
                      window.dispatchEvent(new Event('imas:openEnquiryForm'))
                    }
                  }}
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

      <section id="faq" className="py-6 sm:py-10 bg-slate-50 border-b border-slate-200">
        <div data-animate-on-scroll className="max-w-[1550px] mx-auto px-4 transition-all duration-700 ease-out">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 p-3 text-white shadow-sm">
              <span className="material-symbols-outlined text-[18px]">help</span>
            </span>
            <div>
              <h2 className="text-base sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">FAQ</h2>
              <p className="text-[11px] sm:text-xs font-medium text-slate-600">Quick answers about PGDM Business Analytics</p>
            </div>
          </div>
          <div className="mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />

          <div className="mt-5 space-y-3 sm:space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white p-3 sm:p-4 text-slate-800 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <summary className="flex cursor-pointer items-start justify-between gap-3 text-[13px] sm:text-base font-semibold text-slate-800">
                  <span className="flex-1">{f.q}</span>
                  <span className="flex-shrink-0 transition-transform group-open:rotate-180 mt-0.5">
                    <span className="material-symbols-outlined text-[18px] text-slate-500">expand_more</span>
                  </span>
                </summary>
                <div className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

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

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 px-3 py-2 shadow-[0_-4px_12px_rgba(15,23,42,0.08)] md:hidden">
        <div className="mx-auto flex max-w-[1550px] items-center justify-between gap-2 text-xs font-semibold">
          <Button
            onClick={() => {
              try {
                applyNow()
              } catch {
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
