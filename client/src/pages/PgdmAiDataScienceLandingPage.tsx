import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Button } from '../components/ui/button'
import { IMAS_CONTACT } from '../lib/constants'
import { applyNow, downloadBrochureFor } from '../lib/utils'
import {
  BookOpen, Briefcase, CheckCircle, ChevronDown, Download, ExternalLink,
  Globe, GraduationCap, Layers, MapPin, Phone, Star, Trophy, Users, Mail,
  Award, TrendingUp, Lightbulb, Medal, Building2, Wifi, HeartHandshake,
  ShieldCheck, Rocket, Library, Landmark, CreditCard, PieChart, Wallet,
  Banknote, ClipboardCheck, School, Hotel, Database, Code, MonitorPlay, BarChart, Settings,
  Quote, Video, CircleDollarSign, Target
} from 'lucide-react'

export function PgdmAiDataScienceLandingPage(): React.JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const marqueeRef = React.useRef<HTMLDivElement | null>(null)

  // Hero Image Slider State
  const [heroImgIdx, setHeroImgIdx] = React.useState(0)
  const heroImages = React.useMemo(() => [
    '/uploads/imas_hero_image_2.webp',
    '/uploads/imas_hero_image1.webp',
    '/uploads/campus_photos/DSC_2802.jpg',
    '/uploads/campus_photos/IMG_8110.JPG'
  ], [])

  React.useEffect(() => {
    const timer = setInterval(() => {
      setHeroImgIdx((prev) => (prev + 1) % heroImages.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [heroImages.length])
  const canonicalUrl = 'https://www.imas.ac.in/pgdm-ai-data-science'

  const onDownload = () => {
    const href = '/uploads/IMAS_PGDM_AI_Brochure.pdf' // Update with correct brochure
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
            const target = entry.target as HTMLElement
            target.classList.add('animate-fade-in-up')
            target.style.opacity = '1'
            observer.unobserve(target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    elements.forEach((el) => {
      el.style.opacity = '0'
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  React.useEffect(() => {
    const inner = marqueeRef.current
    if (!inner) return
    const children = Array.from(inner.children)
    children.forEach((item) => {
      const dup = item.cloneNode(true) as HTMLElement
      dup.setAttribute('aria-hidden', 'true')
      inner.appendChild(dup)
    })
  }, [])

  const tools = [
    { name: 'Python', icon: Code },
    { name: 'Machine Learning Models', icon: Settings },
    { name: 'Power BI / Tableau', icon: BarChart },
    { name: 'SQL', icon: Database },
    { name: 'AI Tools & Frameworks', icon: MonitorPlay },
    { name: 'Data Visualization', icon: Lightbulb },
  ]

  const faqs = [
    { q: 'Does IMAS provide placement support?', a: 'Yes, IMAS provides structured placement support with internships and AI/tech recruiters.' },
    { q: 'Are internships included?', a: 'Yes, a mandatory internship is part of the program.' },
    { q: 'What is the average salary?', a: 'The average package is ₹6.50+ LPA depending on performance.' },
    { q: 'What is the highest package?', a: 'The highest package goes up to ₹20.00 LPA.' },
    { q: 'Is AI & Data Science a good career?', a: 'Yes, it is one of the fastest-growing and highest-paying career fields globally.' },
    { q: 'Does IMAS provide tools training?', a: 'Yes, students are trained in Python, ML, SQL, and analytics tools.' },
    { q: 'Is this program suitable for working professionals?', a: 'Yes, with flexible timing and hybrid learning options.' },
    { q: 'Does IMAS provide hostel facilities?', a: 'Yes, for both boys and girls.' },
    { q: 'Are scholarships available?', a: 'Yes, merit-based and government schemes are available.' },
    { q: 'Is PGDM AI better than MBA?', a: 'It is more specialized and industry-focused in technology domains.' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900 scroll-smooth">
      <Helmet>
        <title>PGDM in AI & Data Science | Best AI College in Kolkata | IMAS</title>
        <meta name="description" content="PGDM in AI & Data Science at IMAS Kolkata. AICTE Approved. Best AI & Data Science PGDM program in Eastern India. ₹18 LPA Highest Package." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="PGDM in AI & Data Science | IMAS Kolkata" />
        <meta property="og:description" content="Build a High-Paying Career in AI, Data Science & Future Technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://www.imas.ac.in/uploads/IMASBUILDING.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IMAS Kolkata" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PGDM in AI & Data Science | IMAS Kolkata" />
        <meta name="twitter:description" content="AICTE Approved PGDM in AI & Data Science. Strong placement support." />
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
            <CheckCircle className="h-4 w-4 animate-pulse flex-shrink-0 text-green-400" />
            <span className="truncate">PGDM in AI & Data Science • AICTE Approved • Admissions Open • Limited Seats</span>
          </p>
          <a href={`tel:${IMAS_CONTACT.PHONE}`} className="hidden items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/95 hover:bg-white/15 md:inline-flex">
            <Phone className="h-4 w-4" />
            <span>Request a Callback</span>
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-900/80 backdrop-blur shadow-lg">
        <div className="mx-auto flex max-w-[1550px] items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <img src="/uploads/logos/imas.png" alt="IMAS International Management & Analytics School" className="h-10 w-auto xl:h-12" />
          </div>
          <nav className="hidden items-center gap-5 text-sm text-slate-200 lg:flex">
            {[
              { href: '#about-program', icon: BookOpen, label: 'Overview' },
              { href: '#program-structure', icon: Layers, label: 'Structure' },
              { href: '#global', icon: Globe, label: 'Global' },
              { href: '#placements', icon: Briefcase, label: 'Placements' },
              { href: '#admissions-2026', icon: CheckCircle, label: 'Admissions' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="group relative flex items-center gap-1 rounded-md px-1.5 py-1 transition-colors duration-200 hover:text-white">
                <l.icon className="h-4 w-4" />
                <span>{l.label}</span>
                <span className="pointer-events-none absolute -bottom-1 left-1.5 right-1.5 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#26c1d3] to-[#2e7bb3] transition-transform duration-200 group-hover:scale-x-100" />
              </a>
            ))}
            <a href={`tel:${IMAS_CONTACT.PHONE.replace(/\s/g, '')}`} className="ml-1 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/95 hover:bg-white/15">
              <Phone className="h-3.5 w-3.5" />
              <span>{IMAS_CONTACT.PHONE}</span>
            </a>
            <Button onClick={() => { try { applyNow() } catch { window.dispatchEvent(new Event('imas:openEnquiryForm')) } }} className="ml-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg ring-1 ring-white/10 transition-all hover:-translate-y-0.5 hover:from-teal-600 hover:to-blue-700 hover:shadow-teal-500/20">
              Inquire Now
            </Button>
          </nav>
          
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-md p-2 text-slate-200 transition-colors hover:bg-white/10 lg:hidden" aria-label="Toggle menu">
            <span className="text-[24px] font-bold">{mobileMenuOpen ? '×' : '≡'}</span>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`overflow-hidden border-t border-white/10 bg-slate-900 shadow-xl transition-all duration-300 ease-in-out lg:hidden ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col space-y-1 px-4 py-4 text-sm text-slate-200">
            {[
              { href: '#about-program', icon: BookOpen, label: 'Overview' },
              { href: '#program-structure', icon: Layers, label: 'Structure' },
              { href: '#global', icon: Globe, label: 'Global Exposure' },
              { href: '#placements', icon: Briefcase, label: 'Placements' },
              { href: '#campus-facilities', icon: Building2, label: 'Campus & Facilities' },
              { href: '#admissions-2026', icon: CheckCircle, label: 'Admissions' },
            ].map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 rounded-md px-3 py-2.5 transition-colors hover:bg-white/10 hover:text-white">
                <l.icon className="h-4 w-4" />
                <span>{l.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* --- HERO --- */}
      <section className="relative overflow-hidden bg-[#0a192f] pt-4 sm:pt-8 pb-8 sm:pb-16 border-b border-white/10">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src="/uploads/PGDM_in_Artificial_Intelligence_&_Data_Science_Working_Executive.png" alt="PGDM AI Background" className="h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f]/90 via-[#112240]/80 to-[#0a192f]/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
        
        <div className="pointer-events-none absolute inset-0 z-0 flex justify-center opacity-30">
          <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[100px]" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[100px]" />
        </div>

        <div className="relative z-10">
          <div data-animate-on-scroll className="relative z-10 mx-auto grid max-w-[1550px] grid-cols-1 gap-3 sm:gap-5 px-4 py-3 sm:py-5 md:grid-cols-12 md:gap-8 md:py-10 transition-all duration-700 ease-out">
            <div className="flex-1 md:col-span-8 space-y-1.5 sm:space-y-4">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-medium text-white shadow-sm">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
                <span>AICTE Approved PGDM Program</span>
              </div>

              <div className="space-y-1.5 sm:space-y-4">
                <h1 className="text-xl sm:text-4xl lg:text-[3.5rem] font-extrabold tracking-tighter text-white drop-shadow-lg leading-tight sm:leading-[1.1]">
                  Build a High-Paying Career in <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white">AI, Data Science & Future Technologies.</span>
                </h1>
                <p className="text-[10px] sm:text-lg lg:text-xl font-medium text-sky-100/90 drop-shadow max-w-full sm:max-w-3xl leading-tight sm:leading-relaxed">
                  Looking for a <span className="text-white font-bold">PGDM in AI & Data Science</span> in Kolkata? IMAS offers one of the best programs in Eastern India, designed for students and working professionals aiming for careers in artificial intelligence, machine learning, and data-driven roles.
                </p>
                <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-semibold text-white mt-1 sm:mt-2" aria-label="Student rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-5 sm:w-5 text-yellow-400 drop-shadow-sm" fill="currentColor" />
                  ))}
                  <span className="ml-1 sm:ml-2 text-[9px] sm:text-xs text-gray-100 font-medium tracking-wide">4.9/5 Student Rating</span>
                </div>
              </div>

              <div className="flex items-center w-full sm:w-auto gap-2 sm:gap-3 mt-4">
                <Button onClick={() => window.open('https://admission.imas.ac.in/', '_blank')} size="sm" className="flex-1 sm:flex-none h-8 sm:h-12 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 px-3 sm:px-8 text-[10px] sm:text-base font-bold text-white shadow-[0_0_15px_rgba(20,184,166,0.3)] transition-all hover:-translate-y-0.5 hover:from-teal-400 hover:to-blue-500 flex justify-center items-center">
                  Apply Now <ExternalLink className="ml-1 sm:ml-2 h-3 w-3 sm:h-5 sm:w-5" />
                </Button>
                <Button onClick={onDownload} variant="outline" size="sm" className="flex-1 sm:flex-none h-8 sm:h-12 rounded-full border border-[#26c1d3] bg-transparent px-3 sm:px-8 text-[10px] sm:text-base font-bold text-[#26c1d3] transition-all hover:bg-[#26c1d3]/10 hover:text-[#26c1d3] flex justify-center items-center">
                  <Download className="mr-1 sm:mr-2 h-3 w-3 sm:h-5 sm:w-5" /> Brochure
                </Button>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2 sm:mt-6 sm:gap-4">
                {[
                  { label: 'Internship from Year 1', icon: Briefcase },
                  { label: 'Hands-on AI & Data Science Training', icon: Code },
                  { label: '₹18 LPA Highest Package', icon: TrendingUp },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-1 sm:gap-2 rounded-full bg-white/5 border border-white/10 px-2 sm:px-4 py-1 sm:py-2 text-[9px] sm:text-xs font-medium text-white/90 backdrop-blur-sm shadow-inner transition-all hover:bg-white/10 hover:-translate-y-0.5 cursor-default">
                    <b.icon className="h-2.5 w-2.5 sm:h-4 sm:w-4 text-cyan-400" />
                    {b.label}
                  </div>
                ))}
              </div>

            </div>

            <div className="flex flex-col md:col-span-4 items-center justify-center gap-3 sm:gap-4 mt-2 md:mt-0">
              <div className="relative w-full h-[160px] sm:h-[350px] lg:h-[420px] overflow-hidden rounded-2xl shadow-xl border border-white/20 ring-4 ring-white/5">
                {heroImages.map((src, idx) => (
                  <img 
                    key={src}
                    src={src} 
                    alt={`PGDM AI Highlight ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 ease-in-out ${idx === heroImgIdx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}
                    onError={(e) => { const t = e.currentTarget as HTMLImageElement; t.style.display = 'none' }}
                  />
                ))}
                
                {/* Overlay styling for premium feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-20" />
                
                {/* Pagination Dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
                  {heroImages.map((_, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setHeroImgIdx(idx)}
                      className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${idx === heroImgIdx ? 'w-6 sm:w-8 bg-cyan-400' : 'w-1.5 sm:w-2 bg-white/50 hover:bg-white/80'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Marquee Scrolling Element */}
              <div className="w-full overflow-hidden rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-inner py-3">
                 <div className="flex w-max animate-hero-marquee space-x-6 px-4 items-center">
                   {[...Array(2)].map((_, i) => (
                     <React.Fragment key={i}>
                       <span className="inline-flex items-center gap-1.5 text-[11px] lg:text-xs font-semibold text-white/90 whitespace-nowrap">
                         <Award className="h-3.5 w-3.5 text-cyan-400" /> AICTE Approved
                       </span>
                       <span className="inline-flex items-center gap-1.5 text-[11px] lg:text-xs font-semibold text-white/90 whitespace-nowrap">
                         <Briefcase className="h-3.5 w-3.5 text-green-400" /> ₹6.50+ LPA Avg Package
                       </span>
                       <span className="inline-flex items-center gap-1.5 text-[11px] lg:text-xs font-semibold text-white/90 whitespace-nowrap">
                         <Code className="h-3.5 w-3.5 text-sky-400" /> Hands-on AI Training
                       </span>
                       <span className="inline-flex items-center gap-1.5 text-[11px] lg:text-xs font-semibold text-white/90 whitespace-nowrap">
                         <Building2 className="h-3.5 w-3.5 text-indigo-400" /> Suitable for Working Professionals
                       </span>
                     </React.Fragment>
                   ))}
                 </div>
              </div>
              
              <style dangerouslySetInnerHTML={{ __html: `
                @keyframes hero-marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-hero-marquee {
                  animation: hero-marquee 20s linear infinite;
                }
                .animate-hero-marquee:hover {
                  animation-play-state: paused;
                }
              `}} />
            </div>
          </div>
        </div>
      </section>

      {/* --- ACHIEVEMENTS --- */}
      <section className="relative bg-white py-6 border-b border-slate-200 overflow-hidden">
        <div className="mx-auto max-w-[1550px] px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-3 md:w-1/4">
               <Trophy className="h-8 w-8 text-yellow-500" />
               <h3 className="text-xl font-bold text-slate-800 leading-tight">Our <br className="hidden md:block" /> Achievements</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:w-3/4">
               {[
                 { title: 'Top 10 Best B School in Kolkata', source: '(Knowledge Review, 2026)' },
                 { title: 'Best Emerging Business School Award', source: '(Edulite Excellence Award, 2024)' },
                 { title: 'Best College for Innovation & Startup', source: '(Edulite Excellence Award, 2025)' },
                 { title: 'Excellence in Management Education', source: '(Collegerank, 2024)' }
               ].map((ach, i) => (
                 <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex flex-col justify-center text-center hover:bg-sky-50 transition-colors shadow-sm">
                   <div className="text-[11px] sm:text-xs font-bold text-slate-800 mb-1 leading-tight">{ach.title}</div>
                   <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium">{ach.source}</div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT --- */}
      <section id="about-program" className="relative border-b border-slate-200 bg-slate-50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-5 sm:py-6">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1 relative h-[250px] sm:h-[400px] overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
              <img src="/uploads/working/hero_image2.jpg" alt="PGDM AI Overview" className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105" onError={(e) => { const t = e.currentTarget as HTMLImageElement; t.style.display = 'none' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>
            <div className="order-1 md:order-2 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                  <Database className="h-4 w-4" />
                </span>
                <h2 className="text-base sm:text-2xl font-bold font-sans bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">About PGDM AI & Data Science</h2>
              </div>
              <div className="mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />
              <div className="prose prose-sm max-w-none text-slate-700">
                <p className="leading-relaxed">
                  Artificial Intelligence and Data Science are among the fastest-growing and highest-paying career domains globally. Companies across industries are investing heavily in AI-driven decision-making, automation, and data intelligence.
                </p>
                <p className="leading-relaxed mt-2">
                  The PGDM in AI & Data Science at IMAS is designed to equip students with both business understanding and advanced technical skills, making it one of the top AI & Data Science courses in Kolkata with placement.
                </p>
                
                <div className="mt-4 bg-blue-50/50 rounded-2xl p-4 ring-1 ring-blue-100">
                  <h3 className="text-sm font-bold text-blue-900 mb-3">Ideal for students interested in:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      { label: 'Artificial Intelligence & Machine Learning' },
                      { label: 'Data Science & Big Data' },
                      { label: 'Business Intelligence & Automation' },
                      { label: 'Tech-driven managerial roles' }
                    ].map((i) => (
                      <div key={i.label} className="flex items-center gap-2 rounded-xl bg-white/50 px-3 py-2 ring-1 ring-blue-100/50">
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                        <div className="text-xs font-semibold text-slate-800">{i.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROGRAM STRUCTURE --- */}
      <section id="program-structure" className="relative border-b border-slate-200 bg-white">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-8 sm:py-12">
          <div className="flex flex-col gap-1 mb-6 text-center sm:text-left">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-sky-600">What You Will Learn</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Program <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-800">Structure</span>
            </h2>
            <p className="text-sm sm:text-base font-medium text-slate-600 mt-1">The program builds strong foundations in both management and advanced data science skills, ensuring students are industry-ready.</p>
            <div className="mx-auto sm:mx-0 mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 shadow-sm" />
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Year 1 */}
            <div className="space-y-4">
               <div className="flex items-center gap-3 pb-2 border-b-2 border-slate-100">
                  <div className="bg-sky-100 text-sky-700 h-10 w-10 rounded-full flex items-center justify-center font-bold text-lg">1</div>
                  <h3 className="text-xl font-bold text-slate-800">Year 1 – Core Management</h3>
               </div>
               
               <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                     <h4 className="text-sm font-bold text-sky-700 mb-3 uppercase tracking-wider flex items-center gap-2"><BookOpen className="w-4 h-4" /> Semester I</h4>
                     <ul className="space-y-2">
                        {['Principles of Management', 'Managerial Economics', 'Financial Accounting', 'Business Statistics', 'Business Communication'].map((item) => (
                           <li key={item} className="flex items-start gap-2 text-xs text-slate-700"><CheckCircle className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />{item}</li>
                        ))}
                     </ul>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                     <h4 className="text-sm font-bold text-sky-700 mb-3 uppercase tracking-wider flex items-center gap-2"><BookOpen className="w-4 h-4" /> Semester II</h4>
                     <ul className="space-y-2">
                        {['Marketing Management', 'Financial Management', 'Human Resource Management', 'Operations & Supply Chain', 'Business Research & Analytics'].map((item) => (
                           <li key={item} className="flex items-start gap-2 text-xs text-slate-700"><CheckCircle className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />{item}</li>
                        ))}
                     </ul>
                  </div>
               </div>

               <div className="rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 p-3 text-sm text-emerald-800 font-semibold border border-emerald-100 flex items-center justify-center gap-2 shadow-sm">
                  <Briefcase className="w-5 h-5 text-emerald-600" /> Mandatory Summer Internship (8–10 Weeks)
               </div>
            </div>

            {/* Year 2 */}
            <div className="space-y-4">
               <div className="flex items-center gap-3 pb-2 border-b-2 border-slate-100">
                  <div className="bg-gradient-to-br from-[#0b1c3a] to-[#143674] text-white h-10 w-10 rounded-full flex items-center justify-center font-bold text-lg">2</div>
                  <h3 className="text-xl font-bold text-slate-800">Year 2 – AI & Data Science Specialization</h3>
               </div>
               
               <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100 rounded-bl-full opacity-50 pointer-events-none" />
                     <h4 className="text-sm font-bold text-[#143674] mb-3 uppercase tracking-wider flex items-center gap-2"><Layers className="w-4 h-4" /> Semester III</h4>
                     <ul className="space-y-2 relative z-10">
                        {['Python Programming for Data Science', 'Machine Learning', 'Data Visualization', 'SQL & Database Systems', 'AI in Business'].map((item) => (
                           <li key={item} className="flex items-start gap-2 text-xs text-slate-800 font-medium"><Code className="w-3.5 h-3.5 text-[#26c1d3] mt-0.5 flex-shrink-0" />{item}</li>
                        ))}
                     </ul>
                  </div>
                  <div className="bg-gradient-to-br from-[#0b1c3a] to-[#143674] text-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-full pointer-events-none" />
                     <h4 className="text-sm font-bold text-cyan-300 mb-3 uppercase tracking-wider flex items-center gap-2"><Rocket className="w-4 h-4" /> Semester IV</h4>
                     <ul className="space-y-2 relative z-10">
                        {['Advanced Machine Learning', 'Big Data Analytics', 'AI Strategy & Applications', 'Capstone Project (Industry-Based)'].map((item) => (
                           <li key={item} className="flex items-start gap-2 text-xs text-slate-200 font-medium"><CheckCircle className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />{item}</li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TOOLS & SKILLS & FEATURES --- */}
      <section id="tools-skills" className="relative border-b border-slate-200 bg-slate-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-8 sm:py-12">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
               <div className="mb-6">
                 <div className="flex flex-col gap-1 mb-4">
                   <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-sky-600">Technical Depth</span>
                   <div className="flex items-center gap-3">
                     <span className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 shadow-lg">
                       <MonitorPlay className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                     </span>
                     <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                       Tools & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-800">Skills</span>
                     </h2>
                   </div>
                 </div>
               </div>
               
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
                 {tools.map((tool) => (
                   <div key={tool.name} className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                     <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-slate-100 to-white text-slate-700 shadow-sm ring-1 ring-slate-200">
                       <tool.icon className="h-6 w-6 text-sky-600" />
                     </span>
                     <p className="text-xs font-semibold text-slate-800">{tool.name}</p>
                   </div>
                 ))}
               </div>

               {/* PROGRAM FEATURES */}
               <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"><Award className="text-amber-500 w-6 h-6" /> Program Features</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                     {[
                        '20+ Presentations for communication & leadership',
                        'AI & Data Science Tools Training',
                        'Advanced Excel & Analytics Training',
                        'Business Communication Training',
                        'Corporate Mentorship & Industry Visits'
                     ].map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                           <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                           <span className="text-sm text-slate-700 font-medium">{feat}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
               {/* DESIGNED FOR WORKING PROFESSIONALS */}
               <div className="rounded-3xl bg-gradient-to-br from-[#143674] to-[#0b1c3a] p-6 text-white shadow-xl ring-1 ring-slate-800 h-full flex flex-col">
                 <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Briefcase className="h-6 w-6 text-cyan-400" /> Ideal for Professionals</h3>
                 <p className="text-xs text-sky-200 mb-6">This program is also ideal for professionals looking to move into AI & data roles:</p>
                 <div className="flex flex-col gap-4 flex-grow">
                   <ul className="space-y-4">
                     <li className="flex items-start gap-3 text-sm bg-white/5 p-3 rounded-lg border border-white/10"><CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" /> Flexible Class Timings & Hybrid Learning Mode</li>
                     <li className="flex items-start gap-3 text-sm bg-white/5 p-3 rounded-lg border border-white/10"><CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" /> Corporate Sponsored Discounts</li>
                     <li className="flex items-start gap-3 text-sm bg-white/5 p-3 rounded-lg border border-white/10"><CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" /> Career Transition Opportunities</li>
                     <li className="flex items-start gap-3 text-sm bg-white/5 p-3 rounded-lg border border-white/10"><CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" /> Practical Learning for real job application</li>
                   </ul>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PLACEMENTS & CAREERS --- */}
      <section id="placements" className="relative border-b border-slate-200 bg-white">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-8 sm:py-12">
          <div className="flex flex-col gap-1 mb-6">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-sky-600">Future Pathways</span>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 shadow-lg">
                <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Placement & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-800">Careers</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base font-medium text-slate-600 mt-2">Among the best PGDM AI & Data Science colleges in Kolkata with placement</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1 flex flex-col gap-4">
              <div className="rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-700 p-6 text-white shadow-lg relative overflow-hidden">
                <CircleDollarSign className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10" />
                <div className="text-4xl font-extrabold mb-1 drop-shadow-md">₹18.00<span className="text-2xl">LPA</span></div>
                <div className="text-emerald-100 text-sm font-medium">Highest Package</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 shadow-sm flex flex-col items-center justify-center text-center">
                   <div className="text-2xl font-bold text-sky-700">₹6.50+</div>
                   <div className="text-slate-500 text-xs font-medium">LPA Average</div>
                 </div>
                 <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 shadow-sm flex flex-col items-center justify-center text-center">
                   <div className="text-2xl font-bold text-sky-700">465+</div>
                   <div className="text-slate-500 text-xs font-medium">Placement Opps.</div>
                 </div>
              </div>
              <div className="rounded-2xl bg-slate-900 p-4 text-white shadow-md flex items-center justify-between">
                <span className="text-sm font-medium text-slate-300">Internship to Placement</span>
                <span className="bg-cyan-500/20 text-cyan-300 text-xs font-bold px-3 py-1 rounded-full border border-cyan-500/30">High Conversion</span>
              </div>
            </div>

            <div className="lg:col-span-2">
               <div className="rounded-3xl bg-slate-50 p-6 sm:p-8 ring-1 ring-slate-200 h-full">
                 <div className="grid sm:grid-cols-2 gap-8">
                   <div>
                     <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider flex items-center gap-2"><Target className="w-4 h-4 text-sky-600" /> Career Opportunities</h4>
                     <div className="flex flex-col gap-2">
                       {['Data Scientist', 'AI Engineer', 'Machine Learning Engineer', 'Data Analyst', 'Business Intelligence Analyst'].map((role) => (
                         <div key={role} className="flex items-center gap-3 bg-white rounded-lg p-2.5 shadow-sm border border-slate-100">
                           <div className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                           <span className="text-sm text-slate-700 font-medium">{role}</span>
                         </div>
                       ))}
                     </div>
                   </div>
                   <div>
                     <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider flex items-center gap-2"><Building2 className="w-4 h-4 text-sky-600" /> Top Sectors</h4>
                     <div className="flex flex-col gap-2">
                       {['IT & Tech Companies', 'AI & Data Science Firms', 'Consulting Companies', 'Startups & Product Companies'].map((sector) => (
                         <div key={sector} className="flex items-center gap-3 bg-white rounded-lg p-2.5 shadow-sm border border-slate-100">
                           <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                           <span className="text-sm text-slate-700 font-medium">{sector}</span>
                         </div>
                       ))}
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="relative py-10 bg-slate-900 overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
         <div className="mx-auto max-w-[1550px] px-4 relative z-10">
            <div className="text-center mb-8">
               <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Voices of Success</h2>
               <div className="h-1 w-16 bg-cyan-500 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
               {/* Student Testimonials */}
               <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-cyan-300 flex items-center gap-2 mb-4"><GraduationCap className="w-5 h-5" /> Student Testimonials</h3>
                  
                  <div className="flex flex-nowrap gap-4 overflow-x-auto pb-6 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide snap-x snap-mandatory md:flex-col md:space-y-4 md:overflow-x-visible md:pb-0">
                     <div className="min-w-[300px] md:min-w-0 snap-start bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                        <Quote className="text-white/20 w-8 h-8 mb-3" />
                        <p className="text-sm text-slate-200 italic mb-4">"The program helped me build real analytics skills with tools and projects."</p>
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold">AJ</div>
                           <div>
                              <div className="text-sm font-bold text-white">Anurag Jain</div>
                              <div className="text-xs text-cyan-200">Data Analyst • MBA/PGDM 2025</div>
                           </div>
                        </div>
                     </div>

                     <div className="min-w-[300px] md:min-w-0 snap-start bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                        <Quote className="text-white/20 w-8 h-8 mb-3" />
                        <p className="text-sm text-slate-200 italic mb-4">"The hands-on training and internship exposure prepared me for corporate roles."</p>
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold">SR</div>
                           <div>
                              <div className="text-sm font-bold text-white">Siddharth Roy</div>
                              <div className="text-xs text-emerald-200">Business Analyst • MBA/PGDM 2025</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Industry Testimonials */}
               <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-amber-300 flex items-center gap-2 mb-4"><Briefcase className="w-5 h-5" /> Industry Testimonials</h3>
                  
                  <div className="flex flex-nowrap gap-4 overflow-x-auto pb-6 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide snap-x snap-mandatory md:flex-col md:space-y-4 md:overflow-x-visible md:pb-0">
                     <div className="min-w-[300px] md:min-w-0 snap-start bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                        <Quote className="text-white/20 w-8 h-8 mb-3" />
                        <p className="text-sm text-slate-200 italic mb-4">"IMAS students demonstrate excellent adaptability, professionalism, and business understanding, reflecting strong institutional focus on corporate grooming and placement readiness programs."</p>
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold"><Building2 className="w-5 h-5" /></div>
                           <div>
                              <div className="text-sm font-bold text-white">Mr. Avijit Basu</div>
                              <div className="text-xs text-amber-200">NHRD</div>
                           </div>
                        </div>
                     </div>

                     <div className="min-w-[300px] md:min-w-0 snap-start bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                        <Quote className="text-white/20 w-8 h-8 mb-3" />
                        <p className="text-sm text-slate-200 italic mb-4">"Experiential learning at IMAS, including industry immersion programs, provides practical exposure and deep operational insights, enhancing overall student competency significantly."</p>
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold"><Building2 className="w-5 h-5" /></div>
                           <div>
                              <div className="text-sm font-bold text-white">Mr. Sounak Sen</div>
                              <div className="text-xs text-amber-200">KPMG</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- GLOBAL IMMERSION --- */}
      <section id="global" className="relative py-10 bg-slate-50 border-b border-slate-200">
         <div className="mx-auto max-w-[1550px] px-4">
            <div className="text-center mb-8 max-w-3xl mx-auto">
               <div className="inline-flex items-center justify-center p-3 bg-sky-100 rounded-full mb-4 text-sky-600">
                  <Globe className="w-8 h-8" />
               </div>
               <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">International Immersion Programmes</h2>
               <p className="text-sm text-slate-600">Gain global exposure through international immersion programs and academic collaborations with leading global institutions.</p>
            </div>

            <div className="flex flex-nowrap gap-4 overflow-x-auto pb-6  px-4 sm:mx-0 sm:px-0 scrollbar-hide snap-x snap-mandatory sm:grid sm:grid-cols-2 md:grid-cols-3 sm:overflow-x-visible sm:pb-0">
               {[
                  { name: 'University of Sunderland', country: 'United Kingdom', image: '/uploads/universities/sunderland.jpeg' },
                  { name: 'Lincoln University College', country: 'Malaysia', image: '/uploads/universities/lincoln.jpg' },
                  { name: 'SEGi University', country: 'Malaysia', image: '/uploads/universities/segi-university.png' },
                  { name: 'FPT University', country: 'Vietnam', image: '/uploads/universities/fpt-university.jpg' },
                  { name: 'INTI International University', country: 'Malaysia', image: '/uploads/universities/inti-university.jpg' },
                  { name: 'Management Development Institute of Singapore', country: 'Singapore', image: '/uploads/universities/Management-Development-Institute-of-Singapore.png' },
               ].map((uni) => (
                  <div key={uni.name} className="min-w-[280px] sm:min-w-0 snap-start bg-white rounded-xl shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow cursor-pointer">
                     <div className="flex-shrink-0 bg-slate-50 rounded-t-xl border-b border-slate-100 flex items-center justify-center overflow-hidden">
                        <img src={uni.image} alt={uni.name} className="object-cover aspect-video transition-all duration-500 hover:scale-105" />
                     </div>
                     <div className="text-left p-4">
                        <div className="text-sm font-bold text-slate-800">{uni.name}</div>
                        <div className="text-xs text-slate-500">{uni.country}</div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- CAMPUS EXPERIENCE & FACILITIES --- */}
      <section id="campus-facilities" className="py-10 bg-white border-b border-slate-200">
         <div className="mx-auto max-w-[1550px] px-4">
            <div className="grid lg:grid-cols-2 gap-10">
               
               <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2"><Video className="w-6 h-6 text-sky-600" /> Campus Experience</h2>
                  <div className="aspect-video rounded-2xl overflow-hidden bg-slate-900 relative group cursor-pointer" onClick={() => window.open('https://www.youtube.com/watch?v=rM3MWkhO6GA', '_blank')}>
                     <img src="/uploads/campus_photos/DSC_2802.jpg" alt="Campus Video Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                           <MonitorPlay className="w-8 h-8 ml-1" />
                        </div>
                     </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                     {['Campus Life', 'Global Exposure', 'Student Activities', 'Industry Training'].map(tag => (
                        <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium border border-slate-200">{tag}</span>
                     ))}
                  </div>
               </div>

               <div className="space-y-8">
                  <div>
                     <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2"><Building2 className="w-6 h-6 text-sky-600" /> Hostel & Campus Facilities</h2>
                     <div className="grid sm:grid-cols-2 gap-3">
                        {[
                           { text: 'Separate hostels for boys & girls', icon: Hotel },
                           { text: 'Safe & secure campus', icon: ShieldCheck },
                           { text: 'Wi-Fi enabled environment', icon: Wifi },
                           { text: 'Modern classrooms', icon: BookOpen },
                        ].map((fac, i) => (
                           <div key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                              <fac.icon className="w-5 h-5 text-sky-500 flex-shrink-0" />
                              <span className="text-sm font-medium text-slate-700">{fac.text}</span>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2"><Banknote className="w-6 h-6 text-emerald-600" /> Scholarships & Loans</h2>
                     <p className="text-sm font-semibold text-emerald-600 mb-4 bg-emerald-50 inline-block px-3 py-1 rounded-md">Study Now, Pay Later Options Available</p>
                     <ul className="space-y-3">
                        {[
                           'Merit-Based Scholarships',
                           'Govt. Schemes',
                           'Student Credit Card Facility',
                           'Education Loan Assistance'
                        ].map((item, i) => (
                           <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                              <div className="w-2 h-2 rounded-full bg-emerald-400" />
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- ELIGIBILITY & ADMISSIONS --- */}
      <section id="eligibility" className="relative border-b border-slate-200 bg-slate-50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-5 sm:py-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                  <ClipboardCheck className="h-5 w-5" />
                </span>
                <h2 className="text-base sm:text-lg font-bold bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">Admission & Eligibility</h2>
              </div>
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600 mb-4" />
              <p className="text-[13px] sm:text-sm text-slate-700 leading-relaxed">
                Graduates in any discipline with valid CAT/XAT/MAT scores are eligible for admission to the PGDM Course. Candidates without valid scores will be required to take the IMASAT admission test conducted by IMAS. The selection process includes a Group Discussion and Personal Interview, providing a comprehensive evaluation of candidates.
              </p>
            </div>

            <div id="admissions-2026" className="rounded-2xl bg-gradient-to-br from-[#143674] to-[#0b1c3a] p-4 sm:p-6 text-white shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-[#0b1c3a]">
                  <School className="h-5 w-5" />
                </span>
                <h2 className="text-base sm:text-lg font-bold">Admissions Open</h2>
              </div>
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 mb-4" />
              <p className="text-xs sm:text-sm opacity-90 mb-4">Limited seats available in the High Demand AI & Data Science Program. Apply early to secure your spot.</p>
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
                <Button onClick={() => window.open('https://admission.imas.ac.in/', '_blank')} className="flex-1 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white text-xs font-semibold">
                  Apply Now <ExternalLink className="ml-1 h-3.5 w-3.5" />
                </Button>
                <Button onClick={onDownload} variant="outline" className="flex-1 rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 text-xs font-semibold">
                  <Download className="mr-1 h-3.5 w-3.5" /> Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT & FOOTER & CTA --- */}
      <section id="contact" className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src="/uploads/campus_photos/NEW_IMAS_Building_Logo.png" alt="IMAS Building" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-white/95 via-white/80 to-white/90 backdrop-blur-[1px] pointer-events-none" />

        <div data-animate-on-scroll className="relative z-10 mx-auto max-w-[1550px] px-4 py-6 sm:py-8">
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
                  Plot No 37, Block - Bhangar-II<br />Near St. Xavier's University<br />Newtown Action Area - III<br />Kolkata, West Bengal - 700160
                </p>
                <div className="mt-3 space-y-1 text-sm">
                  <p className="inline-flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span className="font-semibold">Phone:</span> {IMAS_CONTACT.PHONE}
                  </p>
                  <p className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span className="font-semibold">Email:</span> {IMAS_CONTACT.EMAIL}
                  </p>
                  <p className="inline-flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span className="font-semibold">Web:</span> www.imas.ac.in
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 sm:p-6 ring-1 ring-slate-200 flex flex-col gap-3">
              <h3 className="text-base font-bold text-slate-900">Quick Inquiry</h3>
              <p className="text-[13px] sm:text-sm text-slate-600">Interested in the PGDM AI & Data Science Program? Our admissions team will reach out within 24 hours.</p>
              <div className="flex flex-col gap-2.5 mt-1">
                <Button onClick={() => { try { applyNow() } catch { window.dispatchEvent(new Event('imas:openEnquiryForm')) } }} className="w-full rounded-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold text-[13px] sm:text-sm">
                  <ExternalLink className="mr-2 h-4 w-4" /> Submit an Enquiry
                </Button>
                <Button onClick={onDownload} variant="outline" className="w-full rounded-full border-[#26c1d3] text-[#2e7bb3] hover:bg-[#26c1d3]/10 text-[13px] sm:text-sm">
                  <Download className="mr-2 h-4 w-4" /> Download Programme Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section id="faq" className="py-5 sm:py-6 bg-slate-50 border-b border-slate-200">
        <div data-animate-on-scroll className="max-w-[1550px] mx-auto px-4 transition-all duration-700 ease-out">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 p-3 text-white shadow-sm">
              <span className="text-[18px] font-bold">?</span>
            </span>
            <div>
              <h2 className="text-base sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">FAQ</h2>
              <p className="text-[11px] sm:text-xs font-medium text-slate-600">Quick answers about PGDM AI & Data Science Program</p>
            </div>
          </div>
          <div className="mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />
          <div className="mt-5 space-y-3 sm:space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white p-3 sm:p-4 text-slate-800 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <summary className="flex cursor-pointer items-start justify-between gap-3 text-[13px] sm:text-base font-semibold text-slate-800">
                  <span className="flex-1">{f.q}</span>
                  <span className="flex-shrink-0 transition-transform group-open:rotate-180 mt-0.5">
                    <ChevronDown className="h-5 w-5 text-slate-500" />
                  </span>
                </summary>
                <div className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white pb-20 md:pb-4">
        <div className="mx-auto flex max-w-[1550px] flex-col items-center justify-between gap-3 px-4 py-4 text-[11px] text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} IMAS Business School, Kolkata. All Rights Reserved.</p>
        </div>
      </footer>

      {/* --- STICKY MOBILE CTA BAR --- */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 px-3 py-3 shadow-[0_-4px_12px_rgba(15,23,42,0.08)] md:hidden">
        <div className="mx-auto flex max-w-[1550px] items-center justify-center gap-3 text-xs font-bold">
          <Button onClick={() => { try { applyNow() } catch { window.dispatchEvent(new Event('imas:openEnquiryForm')) } }} className="flex-1 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 px-4 py-2.5 text-center text-white transition-all duration-200 active:scale-95 h-10 shadow-md">
            <ExternalLink className="mr-1.5 h-4 w-4" /> Inquire Now
          </Button>
          <Button onClick={onDownload} variant="outline" className="flex-1 rounded-full border border-[#26c1d3] px-4 py-2.5 text-center text-[#2e7bb3] hover:bg-[#26c1d3]/10 transition-all duration-200 active:scale-95 h-10">
            <Download className="mr-1.5 h-4 w-4" /> Brochure
          </Button>
        </div>
      </div>
    </div>
  )
}
