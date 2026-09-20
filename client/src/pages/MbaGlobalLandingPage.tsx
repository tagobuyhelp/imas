import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Button } from '../components/ui/button'
import { IMAS_CONTACT } from '../lib/constants'
import { applyNow, downloadBrochureFor } from '../lib/utils'
import {
  BookOpen, Briefcase, CheckCircle, ChevronDown, Download, ExternalLink,
  Globe, GraduationCap, Layers, MapPin, Phone, Star, Trophy, Users, Mail,
  Award, TrendingUp, Lightbulb, Medal, Building2, Wifi, HeartHandshake,
  ShieldCheck, Rocket, Library, Landmark, CreditCard,
  Banknote, ClipboardCheck, School, Hotel
} from 'lucide-react'

export function MbaGlobalLandingPage(): React.JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const marqueeRef = React.useRef<HTMLDivElement | null>(null)

  // Hero Image Slider State
  const [heroImgIdx, setHeroImgIdx] = React.useState(0)
  const heroImages = React.useMemo(() => [
    '/uploads/imas_hero_image_2.webp',
    '/uploads/imas_hero_image1.webp',
    '/uploads/universities/sunderland.jpeg',
    '/uploads/universities/south-wales.webp'
  ], [])

  React.useEffect(() => {
    const timer = setInterval(() => {
      setHeroImgIdx((prev) => (prev + 1) % heroImages.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [heroImages.length])
  const canonicalUrl = 'https://www.imas.ac.in/mba-global-program'

  const onDownload = () => {
    const href = '/uploads/IMAS_MBA_Global_Brochure.pdf'
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

  const universityPartners = [
    { name: 'University of Sunderland', country: 'United Kingdom', flag: <img src="https://flagcdn.com/w40/gb.png" alt="UK Flag" className="h-4 sm:h-5 w-auto rounded-[2px] shadow-sm" />, src: '/uploads/universities/sunderland.jpeg' },
    { name: 'University of South Wales', country: 'United Kingdom', flag: <img src="https://flagcdn.com/w40/gb.png" alt="UK Flag" className="h-4 sm:h-5 w-auto rounded-[2px] shadow-sm" />, src: '/uploads/universities/south-wales.webp' },
  ]

  const specializations = [
    { label: 'Marketing', icon: TrendingUp, desc: 'Brand Management, Consumer Behaviour & Global Marketing Strategy' },
    { label: 'International Business', icon: Globe, desc: 'Cross-border Trade, International Finance & Global Operations' },
    { label: 'Business Analytics', icon: Briefcase, desc: 'Data-driven Decision Making, Predictive Analytics & Dashboards' },
    { label: 'AI & Data Science', icon: Lightbulb, desc: 'Machine Learning, AI Applications & Big Data Management' },
    { label: 'Fintech', icon: Landmark, desc: 'Digital Finance, Blockchain, Payment Systems & Financial Innovation' },
  ]

  const faqs = [
    { q: 'How does the MBA Global Programme work?', a: 'Students complete Year 1 at IMAS and Year 2 at an international partner university.' },
    { q: 'Which universities are available in the UK?', a: 'Students can study at the University of Sunderland and University of South Wales.' },
    { q: 'Will I receive an international degree?', a: 'Yes, students receive a degree from the partner university abroad.' },
    { q: 'Does IMAS provide placement support?', a: 'Yes, placement support is provided in India along with international career guidance.' },
    { q: 'Can I work abroad after completing the MBA?', a: 'Yes, depending on visa policies and job opportunities in the chosen country.' },
    { q: 'Is this programme cost-effective compared to studying fully abroad?', a: 'Yes, it reduces cost while still providing international exposure and degree.' },
    { q: 'Are internships included?', a: 'Yes, internship opportunities are part of the program.' },
    { q: 'Does IMAS assist with visa process?', a: 'Yes, full support is provided for admission and visa documentation.' },
    { q: 'Are scholarships available?', a: 'Yes, scholarships and financial assistance options are available.' },
    { q: 'Is this programme suitable for students from Eastern India?', a: 'Yes, it is ideal for students from West Bengal and nearby regions seeking global careers.' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900 scroll-smooth">
      <Helmet>
        <title>MBA Global Programme (1+1 International Pathway) | Study in India + Abroad | IMAS</title>
        <meta name="description" content="MBA Global Programme at IMAS Kolkata â€“ 1+1 International Pathway. Year 1 in India, Year 2 at UK partner university. Global degree, international exposure & career opportunities." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="MBA Global Programme (1+1 International Pathway) | IMAS" />
        <meta property="og:description" content="Study in India + Abroad. Build a Global Career with IMAS MBA Global Program." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://www.imas.ac.in/uploads/IMASBUILDING.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IMAS Kolkata" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MBA Global Programme (1+1 International Pathway) | IMAS" />
        <meta name="twitter:description" content="1+1 MBA Global Programme - Year 1 India, Year 2 UK. International degree & placements." />
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
            <span className="truncate">MBA Global Programme • 1+1 International Pathway • Admissions Open 2026 • Limited Seats</span>
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
            <a href="/" className="inline-block hover:opacity-90 transition-opacity">
              <img src="/uploads/logos/imas.png" alt="IMAS International Management & Analytics School" className="h-10 w-auto xl:h-12" />
            </a>
          </div>
          <nav className="hidden items-center gap-5 text-sm text-slate-200 md:flex">
            {[
              { href: '#about-programme', icon: BookOpen, label: 'Programme Overview' },
              { href: '#programme-structure', icon: Layers, label: 'Structure' },
              { href: '#specialisations', icon: School, label: 'Specialisations' },
              { href: '#international-advantage', icon: Globe, label: 'Global Advantage' },
              { href: '#placements', icon: Briefcase, label: 'Careers' },
              { href: '#admissions-2026', icon: CheckCircle, label: 'Admissions 2026' },
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
          
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-md p-2 text-slate-200 transition-colors hover:bg-white/10 md:hidden" aria-label="Toggle menu">
            <span className="text-[24px] font-bold">{mobileMenuOpen ? '×' : '≡'}</span>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`overflow-hidden border-t border-white/10 bg-slate-900 shadow-xl transition-all duration-300 ease-in-out md:hidden ${mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col space-y-1 px-4 py-4 text-sm text-slate-200">
            {[
              { href: '#about-programme', icon: BookOpen, label: 'Programme Overview' },
              { href: '#programme-structure', icon: Layers, label: 'Structure' },
              { href: '#specialisations', icon: School, label: 'Specialisations' },
              { href: '#international-advantage', icon: Globe, label: 'Global Advantage' },
              { href: '#placements', icon: Briefcase, label: 'Careers' },
              { href: '#admissions-2026', icon: CheckCircle, label: 'Admissions 2026' },
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
      <section className="relative overflow-hidden bg-[#0b1c3a] pb-4">
        {/* Background Image Wall */}
        <div className="absolute inset-0 z-0">
          <img src="/uploads/MBA_Global_banner.png" alt="IMAS Campus" className="h-full w-full object-cover opacity-100 mix-blend-luminosity" />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#143674]/95 via-[#0b1c3a]/90 to-[#071328]/95" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-10 top-10 h-64 w-64 rounded-full bg-cyan-400/30 blur-3xl z-0" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl z-0" aria-hidden="true" />

        <div data-animate-on-scroll className="relative z-10 mx-auto grid max-w-[1550px] grid-cols-1 gap-3 sm:gap-5 px-4 py-3 sm:py-5 md:grid-cols-12 md:gap-8 md:py-10 transition-all duration-700 ease-out">
          <div className="flex-1 md:col-span-8 space-y-2.5 sm:space-y-5">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-medium text-white shadow-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
              <span>MBA Global Admissions Open for 2026</span>
            </div>

            <div className="space-y-1.5 sm:space-y-4">
              <h1 className="text-xl sm:text-4xl lg:text-[3.5rem] font-extrabold tracking-tighter text-white drop-shadow-lg leading-tight sm:leading-[1.1]">
                Start Your MBA in India. <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white">Complete It Abroad.</span> <br className="hidden sm:block" />
                Build a Global Career.
              </h1>
              <p className="text-[10px] sm:text-lg lg:text-xl font-medium text-sky-100/90 drop-shadow max-w-full sm:max-w-3xl leading-tight sm:leading-relaxed">
                Looking for a Global MBA programme in Kolkata? IMAS offers a unique <span className="text-white font-bold">1+1 MBA Global Programme</span>, where students complete Year 1 at IMAS and Year 2 at an international partner university.
              </p>
              <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-semibold text-white mt-1 sm:mt-2" aria-label="Student rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 sm:h-5 sm:w-5 text-yellow-400 drop-shadow-sm" fill="currentColor" />
                ))}
                <span className="ml-1 sm:ml-2 text-[9px] sm:text-xs text-gray-100 font-medium tracking-wide">4.9/5 Student Rating</span>
              </div>
            </div>

            <div className="flex items-center w-full sm:w-auto gap-2 sm:gap-3">
              <Button onClick={() => window.open('https://admission.imas.ac.in/', '_blank')} size="sm" className="flex-1 sm:flex-none h-8 sm:h-12 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 px-3 sm:px-8 text-[10px] sm:text-base font-bold text-white shadow-[0_0_15px_rgba(20,184,166,0.3)] transition-all hover:-translate-y-0.5 hover:from-teal-400 hover:to-blue-500 hover:shadow-[0_0_25px_rgba(20,184,166,0.5)]">
                Apply Now <ExternalLink className="ml-1 sm:ml-2 h-3 w-3 sm:h-5 sm:w-5" />
              </Button>
              <Button onClick={onDownload} variant="outline" size="sm" className="flex-1 sm:flex-none h-8 sm:h-12 rounded-full border border-[#26c1d3] bg-transparent px-3 sm:px-8 text-[10px] sm:text-base font-bold text-[#26c1d3] transition-all hover:bg-[#26c1d3]/10 hover:text-[#26c1d3]">
                <Download className="mr-1 sm:mr-2 h-3 w-3 sm:h-5 sm:w-5" /> Brochure
              </Button>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2 sm:mt-6 sm:gap-4">
              {[
                { label: 'Study in India + UK', icon: Globe },
                { label: 'Global Degree', icon: Award },
                { label: 'Intl Placements', icon: Briefcase },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-1 sm:gap-2 rounded-full bg-white/5 border border-white/10 px-2 sm:px-4 py-1 sm:py-2 text-[9px] sm:text-xs font-medium text-white/90 backdrop-blur-sm shadow-inner transition-all hover:bg-white/10 hover:-translate-y-0.5 cursor-default">
                  <b.icon className="h-2.5 w-2.5 sm:h-4 sm:w-4 text-cyan-400" />
                  {b.label}
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-center justify-between gap-1.5 sm:gap-5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 p-1.5 sm:p-5 backdrop-blur-md shadow-lg w-full sm:w-fit">
              <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-5">
                {universityPartners.map((u) => (
                  <div key={u.name} className="flex items-center gap-1.5 sm:gap-3 text-white">
                    <div className="h-5 w-5 sm:h-8 sm:w-8 overflow-hidden rounded-full shadow-md ring-1 ring-white/20 flex-shrink-0">
                      {u.flag}
                    </div>
                    <div className="flex flex-col">
                      <div className="text-[8px] sm:text-[11px] font-bold leading-tight line-clamp-1">{u.name}</div>
                      <div className="text-[7px] sm:text-[10px] opacity-80 hidden sm:block">{u.country}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-1 sm:px-4 sm:flex-row sm:gap-2 text-white flex-shrink-0">
                <span className="text-xs sm:text-2xl font-bold text-green-300">1+1</span>
                <span className="text-[7px] sm:text-xs opacity-80 text-center">Model</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:col-span-4 items-center justify-center gap-3 sm:gap-4 mt-2 md:mt-0">
            <div className="relative w-full h-[160px] sm:h-[350px] lg:h-[420px] overflow-hidden rounded-2xl shadow-xl border border-white/20 ring-4 ring-white/5">
              {heroImages.map((src, idx) => (
                <img 
                  key={src}
                  src={src} 
                  alt={`MBA Global Highlight ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover object-top  transition-all duration-1000 ease-in-out ${idx === heroImgIdx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}
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
                    className={`h-2 rounded-full transition-all duration-500 ease-out ${idx === heroImgIdx ? 'w-8 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'w-2 bg-white/50 hover:bg-white/80'}`}
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
                       <Award className="h-3.5 w-3.5 text-cyan-400" /> UGC & AICTE Approved
                     </span>
                     <span className="inline-flex items-center gap-1.5 text-[11px] lg:text-xs font-semibold text-white/90 whitespace-nowrap">
                       <Briefcase className="h-3.5 w-3.5 text-green-400" /> 100% Placement Assistance
                     </span>
                     <span className="inline-flex items-center gap-1.5 text-[11px] lg:text-xs font-semibold text-white/90 whitespace-nowrap">
                       <Globe className="h-3.5 w-3.5 text-sky-400" /> Global Internships
                     </span>
                     <span className="inline-flex items-center gap-1.5 text-[11px] lg:text-xs font-semibold text-white/90 whitespace-nowrap">
                       <Building2 className="h-3.5 w-3.5 text-indigo-400" /> Top MNC Recruiters
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
      </section>

      {/* --- ABOUT --- */}
      <section id="about-programme" className="relative border-b border-slate-200 bg-slate-50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-5 sm:py-6">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1 relative h-[250px] sm:h-[400px] overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
              <img src="/uploads/working/hero_image2.jpg" alt="MBA Global Programme Overview" className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105" onError={(e) => { const t = e.currentTarget as HTMLImageElement; t.style.display = 'none' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>
            <div className="order-1 md:order-2 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                  <BookOpen className="h-4 w-4" />
                </span>
                <h2 className="text-base sm:text-2xl font-bold font-sans bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">About MBA Global Programme</h2>
              </div>
              <div className="mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />
              <div className="prose prose-sm max-w-none text-slate-700">
                <p className="leading-relaxed">
                  The MBA Global Programme at IMAS is designed for students who want international education and global career opportunities without completing the entire course abroad.
                </p>
                <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 mb-2">Students complete:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">1</span>
                      <span className="text-sm font-medium">Year 1 at IMAS (Kolkata) <span className="text-slate-500 font-normal block text-xs">Strong management foundation</span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">2</span>
                      <span className="text-sm font-medium">Year 2 at Partner University Abroad <span className="text-slate-500 font-normal block text-xs">Global exposure & specialisation</span></span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 bg-blue-50/50 rounded-2xl p-4 ring-1 ring-blue-100">
                  <h3 className="text-sm font-bold text-blue-900 mb-3">This programme is ideal for students searching:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      { label: 'MBA abroad after 1 year in India', value: 'Cost Effective' },
                      { label: 'Global MBA programmes in Kolkata', value: 'Local Start' },
                      { label: 'Study MBA in UK after India', value: 'UK Pathway' },
                      { label: 'International degree & placement', value: 'Global Career' }
                    ].map((i) => (
                      <div key={i.label} className="rounded-xl bg-white/50 px-3 py-2 ring-1 ring-blue-100/50">
                        <div className="text-[10px] text-blue-600/80 font-medium">{i.value}</div>
                        <div className="mt-0.5 text-xs font-semibold text-slate-800">{i.label}</div>
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
      <section id="program-structure" className="relative border-b border-slate-200 bg-slate-50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-5 sm:py-6">
          <div className="relative overflow-hidden rounded-3xl bg-white/95 ring-1 ring-white/20 p-4 sm:p-6 md:p-8">
            <div className="pointer-events-none absolute inset-0"><div className="absolute inset-0 mesh-grid" /></div>
            <div className="relative">
              <div className="flex flex-col gap-1 mb-4">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-sky-600">1+1 Model</span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Programme <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-800">Structure</span>
                </h2>
                <p className="text-sm sm:text-base font-medium text-slate-600 mt-1">Year 1 in India + Year 2 Abroad</p>
              </div>
              <div className="mb-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 shadow-sm" />

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {/* Year 1 */}
                <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-white p-5 ring-1 ring-sky-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 shadow-inner ring-1 ring-slate-200 overflow-hidden">
                      <img src="https://flagcdn.com/w80/in.png" alt="India Flag" className="h-full w-full object-cover" />
                    </span>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Year 1 - IMAS Campus (India)</div>
                      <div className="text-[11px] text-slate-600">Core business knowledge & foundation</div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {['Marketing, Finance, HR & Operations', 'Business Communication & Leadership', 'Business Analytics & Decision Making', 'Industry Projects & Internships'].map((t) => (
                      <li key={t} className="flex items-start gap-2 text-[13px] text-slate-700 sm:text-sm">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 rounded-xl bg-sky-100/50 p-3 text-xs text-sky-800 font-medium border border-sky-200">
                    👉 Prepares students for international academic transition
                  </div>
                </div>

                {/* Year 2 */}
                <div className="rounded-2xl bg-gradient-to-br from-[#0b1c3a] to-[#143674] p-5 text-white shadow-md ring-1 ring-slate-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 shadow-inner ring-1 ring-white/20 overflow-hidden">
                      <Globe className="h-5 w-5 text-sky-300" />
                    </span>
                    <div>
                      <div className="text-sm font-bold text-white">Year 2 - International University</div>
                      <div className="text-[11px] text-cyan-200">Global exposure & advanced specialisation</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs sm:text-sm text-slate-200 mb-2">Students transfer to partner universities such as:</p>
                    <div className="grid gap-2">
                      <div className="flex items-center gap-2 rounded-xl bg-white/10 p-2.5 backdrop-blur-sm border border-white/10">
                        <img src="https://flagcdn.com/w40/gb.png" alt="UK" className="h-4 w-auto rounded-[2px]" />
                        <span className="text-sm font-semibold">University of Sunderland</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-xl bg-white/10 p-2.5 backdrop-blur-sm border border-white/10">
                        <img src="https://flagcdn.com/w40/gb.png" alt="UK" className="h-4 w-auto rounded-[2px]" />
                        <span className="text-sm font-semibold">University of South Wales</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 rounded-xl bg-cyan-900/40 p-3 text-xs text-cyan-100 font-medium border border-cyan-700/50">
                    👉 Gain international academic experience and global exposure
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SPECIALIZATIONS --- */}
      <section id="specialisations" className="relative border-b border-slate-200 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-5 sm:py-6">
          <div className="relative overflow-hidden rounded-3xl bg-white/95 backdrop-blur-sm ring-1 ring-white/20 p-4 sm:p-5 md:p-7">
            <div className="pointer-events-none absolute inset-0"><div className="absolute inset-0 mesh-grid" /></div>
            <div className="mb-5 max-w-2xl">
              <div className="flex flex-col gap-1 mb-4">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-sky-600">Career Focus</span>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 shadow-lg">
                    <School className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    Programme <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-800">Specialisations</span>
                  </h2>
                </div>
                <p className="text-sm sm:text-base font-medium text-slate-600 mt-2">Students can choose specialisations based on university options:</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {specializations.map((spec) => (
                <div key={spec.label} className="group flex flex-col gap-2.5 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex-1 min-w-[260px] w-full sm:w-auto sm:max-w-[350px]">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex p-2 items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                      <spec.icon className="h-5 w-5" />
                    </span>
                    <p className="font-semibold text-slate-900 text-sm">{spec.label}</p>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{spec.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-600 font-medium">👉 Designed to match global industry demand</p>
          </div>
        </div>
      </section>

      {/* --- INTERNATIONAL ADVANTAGE --- */}
      <section id="international-advantage" className="relative border-b border-slate-200 bg-[#0b1c3a] overflow-hidden">
        {/* Background Image Wall */}
        <div className="absolute inset-0 z-0 flex opacity-20 saturate-0 mix-blend-screen transition-all duration-1000 hover:scale-105 hover:opacity-30">
          <img src="/uploads/campus_photos/Cardiff_Metropolitan_University.jpeg" className="w-1/3 h-full object-cover" alt="Cardiff" />
          <img src="/uploads/campus_photos/University_of_Sunderland.jpeg" className="w-1/3 h-full object-cover" alt="Sunderland" />
          <img src="/uploads/campus_photos/Leeds_Beckett_University.jpg" className="w-1/3 h-full object-cover" alt="Leeds" />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#143674]/90 via-[#0f2958]/95 to-[#0b1c3a]" />
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div data-animate-on-scroll className="relative z-10 w-full py-8 transition-all duration-700 ease-out sm:py-12">
          <div className="relative mx-auto max-w-[1550px] px-4 text-white">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl animate-pulse-slow" />
              <div className="absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl animate-pulse-slower" />
            </div>
            <div className="relative flex items-center gap-3 mb-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-[#0b1c3a] shadow-lg">
                <Globe className="h-5 w-5" />
              </span>
              <div className="flex flex-col gap-1">
                <h2 className="text-[20px] sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white drop-shadow-md">
                  International Advantage
                </h2>
                <p className="text-[14px] sm:text-lg font-medium text-sky-200 mt-1 drop-shadow-sm">Why Choose the Global Pathway</p>
              </div>
            </div>
            <div className="relative mt-2 h-1.5 w-32 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 mb-6" />
            <div className="relative grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              {[
                { icon: ShieldCheck, label: 'Globally recognised MBA degree', desc: 'Internationally accepted qualification from UK universities' },
                { icon: Users, label: 'International faculty & curriculum', desc: 'Learn from world-class professors with global perspectives' },
                { icon: Rocket, label: 'Global career pathways', desc: 'Build networks and access opportunities across the world' },
                { icon: Briefcase, label: 'International job markets', desc: 'Especially valuable for students aiming to work abroad after MBA' },
              ].map((item) => (
                <div key={item.label} className="group rounded-2xl bg-white/10 p-5 ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 text-[#0b1c3a] mb-3">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-semibold mb-2">{item.label}</p>
                  <p className="text-xs opacity-80">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* University partner cards */}
            <div className="relative rounded-3xl bg-gradient-to-r from-white/20 to-white/10 p-6 ring-2 ring-white/25 backdrop-blur-xl">
              <p className="text-sm font-bold uppercase tracking-wider text-cyan-200 mb-4">Key University Partners</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {universityPartners.map((u) => (
                  <div key={u.name} className="group relative overflow-hidden rounded-3xl bg-white/15 ring-2 ring-white/25 backdrop-blur-lg shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-white/20 aspect-[16/9]">
                    <img src={u.src} alt={u.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" onError={(e) => { const t = e.currentTarget as HTMLImageElement; t.src = '/uploads/logos/IMAS_LOGO_PNG.png' }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-lg font-bold text-white drop-shadow-lg">{u.name}</p>
                      <p className="flex items-center gap-2 text-sm text-white/80">{u.flag} <span>{u.country}</span></p>
                      <div className="mt-1 h-0.5 w-8 bg-gradient-to-r from-cyan-400 to-sky-300 rounded-full" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-8 text-center">
              <button onClick={() => window.dispatchEvent(new Event('imas:openEnquiryForm'))} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:from-cyan-500 hover:to-blue-600 hover:shadow-xl hover:-translate-y-0.5">
                <Globe className="h-4 w-4" />
                Explore Global Opportunities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- PLACEMENTS & CAREERS --- */}
      <section id="placements" className="relative border-b border-slate-200 bg-slate-50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-5 sm:py-6">
          <div className="flex flex-col gap-1 mb-4">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-sky-600">Future Pathways</span>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 shadow-lg">
                <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Placement & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-800">Careers</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base font-medium text-slate-600 mt-2">Global pathways after graduation</p>
          </div>
          <div className="mb-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 shadow-sm" />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="lg:col-span-1 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Opportunities Available In:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    <img src="https://flagcdn.com/w40/in.png" alt="India" className="h-3 w-auto rounded-[1px]" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">India</div>
                    <div className="text-[11px] text-slate-600">Through IMAS placement support network</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Globe className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">International Markets</div>
                    <div className="text-[11px] text-slate-600">Subject to post-study visa policies of the respective countries</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-5 text-white shadow-md ring-1 ring-slate-700">
              <h3 className="text-sm font-bold text-white mb-4">Top Career Roles</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['Business Analyst', 'Marketing Executive', 'Financial Analyst', 'Data Scientist', 'International Business Executive'].map((role) => (
                  <div key={role} className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium border border-white/20 backdrop-blur-sm transition-all hover:bg-white/20 hover:-translate-y-0.5">
                    <CheckCircle className="h-3.5 w-3.5 text-cyan-400" />
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CAMPUS & GLOBAL EXPERIENCE --- */}
      <section id="campus-experience" className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
        {/* Background Image Wall */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 -rotate-3 scale-110 transform-gpu blur-[2px] transition-all duration-1000 hover:blur-[1px]">
             <img src="/uploads/campus_photos/DSC_2802.jpg" className="w-full h-48 sm:h-64 object-cover rounded-2xl shadow-lg" alt="" />
             <img src="/uploads/campus_photos/DSC_2804.jpg" className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg mt-8" alt="" />
             <img src="/uploads/campus_photos/DSC_2805.jpg" className="w-full h-40 sm:h-56 object-cover rounded-2xl shadow-lg -mt-4" alt="" />
             <img src="/uploads/campus_photos/DSC_2807.jpg" className="w-full h-56 sm:h-72 object-cover rounded-2xl shadow-lg mt-12" alt="" />
             
             <img src="/uploads/campus_photos/DSC_2817.jpg" className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-lg" alt="" />
             <img src="/uploads/campus_photos/IMG_8109.JPG" className="w-full h-48 sm:h-64 object-cover rounded-2xl shadow-lg -mt-8" alt="" />
             <img src="/uploads/campus_photos/IMG_8110.JPG" className="w-full h-56 sm:h-80 object-cover rounded-2xl shadow-lg -mt-4" alt="" />
             <img src="/uploads/campus_photos/IMG_8115.JPG" className="w-full h-64 sm:h-56 object-cover rounded-2xl shadow-lg -mt-10" alt="" />
           </div>
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-white via-white/80 to-white/95 backdrop-blur-[1px]" />
        
        <div data-animate-on-scroll className="relative z-10 mx-auto max-w-[1550px] px-4 py-6 sm:py-10">
          <div className="flex flex-col gap-1 mb-4">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-sky-600 drop-shadow-md">Life at IMAS</span>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 shadow-lg">
                <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight drop-shadow-md">
                Campus & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-800">Global Experience</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base font-medium text-slate-700 drop-shadow-sm mt-2">Life at IMAS and beyond</p>
          </div>
          <div className="mb-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 shadow-sm" />

          {/* Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-white shadow-xl ring-1 ring-slate-200/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:ring-sky-400/50">
              <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                <iframe title="IMAS Campus Experience" src="https://www.youtube.com/embed/rM3MWkhO6GA" className="absolute inset-0 h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 rounded-t-3xl transition-opacity duration-300 group-hover:bg-black/5" />
              </div>
              <div className="p-4 sm:p-5 relative">
                <div className="absolute -top-6 right-5 p-2 bg-white rounded-full shadow-md opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    <span className="text-[18px] font-bold">►</span>
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-1 transition-colors duration-300 group-hover:text-sky-600">IMAS Campus Experience</h3>
                <p className="text-xs text-slate-600 pr-8">Explore our state-of-the-art campus facilities and vibrant student life</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-white shadow-xl ring-1 ring-blue-200/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:ring-blue-400/50">
              <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden">
                <iframe title="Student Journey" src="https://www.youtube.com/embed/pkv_lBMq4JA" className="absolute inset-0 h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 rounded-t-3xl transition-opacity duration-300 group-hover:bg-black/5" />
              </div>
              <div className="p-4 sm:p-5 relative">
                <div className="absolute -top-6 right-5 p-2 bg-white rounded-full shadow-md opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <span className="text-[18px] font-bold">►</span>
                  </span>
                </div>
                <h3 className="text-sm font-bold text-blue-800 mb-1 transition-colors duration-300 group-hover:text-blue-600">Global Student Journey</h3>
                <p className="text-xs text-blue-600 pr-8">See how students experience the MBA Global pathway</p>
              </div>
            </div>
          </div>

          {/* Facilities */}
          <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
            {[
              { icon: Hotel, label: 'Hostel (Boys & Girls)' },
              { icon: Wifi, label: 'Wi-Fi Campus' },
              { icon: School, label: 'Modern Classrooms' },
              { icon: HeartHandshake, label: 'Student Support Services' },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-200">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                  <f.icon className="h-5 w-5" />
                </span>
                <p className="text-xs font-medium text-slate-800">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SCHOLARSHIPS --- */}
      <section id="scholarships" className="relative border-b border-slate-200 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-5 sm:py-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
              <Banknote className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-base sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">Scholarships & Financial Support</h2>
              <p className="text-[11px] sm:text-xs font-medium text-slate-600">Making Global Education Accessible</p>
            </div>
          </div>
          <div className="mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600 mb-6" />
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-3">
            {[
              { icon: Medal, label: 'Merit-Based Scholarships', color: 'from-amber-400 to-yellow-500', bg: 'bg-amber-50', text: 'text-amber-700' },
              { icon: CreditCard, label: 'Education Loan Assistance', color: 'from-emerald-500 to-teal-600', bg: 'bg-emerald-50', text: 'text-emerald-700' },
              { icon: Globe, label: 'Guidance for International Funding', color: 'from-purple-500 to-indigo-600', bg: 'bg-purple-50', text: 'text-purple-700' },
            ].map((s) => (
              <div key={s.label} className={`flex flex-col items-center gap-3 rounded-2xl ${s.bg} p-4 text-center shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}>
                <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r ${s.color} text-white`}>
                  <s.icon className="h-6 w-6" />
                </span>
                <p className={`text-[13px] sm:text-sm font-semibold ${s.text}`}>{s.label}</p>
              </div>
            ))}
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
                Graduates in any discipline with valid CAT/XAT/MAT scores are eligible. Candidates without valid scores will be required to take the IMASAT admission test conducted by IMAS. The selection process includes a Group Discussion and Personal Interview.
              </p>
              <p className="mt-3 text-[13px] sm:text-sm text-slate-700 leading-relaxed">
                Full support is provided for admission and visa documentation for the international year.
              </p>
            </div>

            <div id="admissions-2026" className="rounded-2xl bg-gradient-to-br from-[#143674] to-[#0b1c3a] p-4 sm:p-6 text-white shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-[#0b1c3a]">
                  <School className="h-5 w-5" />
                </span>
                <h2 className="text-base sm:text-lg font-bold">Admissions 2026</h2>
              </div>
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 mb-4" />
              <p className="text-xs sm:text-sm opacity-90 mb-4">Limited seats available. Apply early to secure your spot.</p>
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

      {/* --- CONTACT --- */}
      <section id="contact" className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src="/uploads/campus_photos/NEW_IMAS_Building_Logo.png" alt="IMAS Building" className="h-full w-full" />
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
                <div className="mt-3">
                  <a href={`tel:${IMAS_CONTACT.PHONE.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#143674] shadow-md transition-all duration-200 hover:-translate-y-0.5">
                    <Phone className="h-4 w-4" />
                    Quick Call
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 sm:p-6 ring-1 ring-slate-200 flex flex-col gap-3">
              <h3 className="text-base font-bold text-slate-900">Quick Inquiry</h3>
              <p className="text-[13px] sm:text-sm text-slate-600">Interested in the MBA Global Program? Our admissions team will reach out within 24 hours.</p>
              <div className="flex flex-col gap-2.5 mt-1">
                <Button onClick={() => { try { applyNow() } catch { window.dispatchEvent(new Event('imas:openEnquiryForm')) } }} className="w-full rounded-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold text-[13px] sm:text-sm">
                  <ExternalLink className="mr-2 h-4 w-4" /> Submit an Enquiry
                </Button>
                <Button onClick={onDownload} variant="outline" className="w-full rounded-full border-[#26c1d3] text-[#2e7bb3] hover:bg-[#26c1d3]/10 text-[13px] sm:text-sm">
                  <Download className="mr-2 h-4 w-4" /> Download Programme Brochure
                </Button>
                <a href={`tel:${IMAS_CONTACT.PHONE.replace(/\s/g, '')}`} className="w-full rounded-full border border-slate-300 px-4 py-2 flex items-center justify-center gap-2 text-[13px] sm:text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors">
                  <Phone className="h-4 w-4" /> {IMAS_CONTACT.PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section id="secure-seat" className="border-b border-slate-200 bg-gradient-to-br from-[#143674] to-[#0b1c3a] text-white">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-4 transition-all duration-700 ease-out sm:py-10">
          <div className="relative overflow-hidden p-4 sm:p-7">
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className="absolute -left-10 top-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="absolute -right-10 bottom-10 h-64 w-64 rounded-full bg-indigo-400/15 blur-3xl" />
            </div>
            <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-base sm:text-xl font-bold">Start Your Global MBA Journey with International University Exposure</h2>
                <p className="mt-1 text-xs sm:text-sm opacity-90">Admissions Open • Limited Seats • Global Career Opportunities</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <a href={`tel:${IMAS_CONTACT.PHONE.replace(/\s/g, '')}`} className="min-h-11 inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#143674] shadow-md transition-all duration-200 hover:-translate-y-0.5">
                  <Phone className="h-4 w-4" /> Talk to Experts
                </a>
                <Button onClick={onDownload} variant="outline" className="min-h-11 rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 text-xs font-semibold">
                  <Download className="mr-2 h-4 w-4" /> Download Brochure
                </Button>
                <Button onClick={() => window.open('https://admission.imas.ac.in/', '_blank')} className="min-h-11 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white text-xs font-semibold">
                  Apply Now <ExternalLink className="ml-2 h-4 w-4" />
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
              <p className="text-[11px] sm:text-xs font-medium text-slate-600">Quick answers about MBA Global Programme</p>
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

      {/* --- FOOTER --- */}
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
