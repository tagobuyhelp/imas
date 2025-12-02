import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { IMAS_TAILWIND_CLASSES, IMAS_BRAND, IMAS_CONTACT } from '../lib/constants'
import { applyNow, downloadBrochureFor } from '../lib/utils'
import { GraduationCap, Star, MapPin, Building2, Target, Download, Mail, ExternalLink, BookOpen, Layers, Globe, Briefcase, Users, CheckCircle, Phone, Award, Trophy, ChevronDown, RefreshCw, ArrowRight } from 'lucide-react'



export function PgdmPlusLandingPage(): React.JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const marqueeRef = React.useRef<HTMLDivElement | null>(null)
  const lifeTrackRef = React.useRef<HTMLDivElement | null>(null)
  const onDownload = () => {
    const href = '/uploads/IMAS_PGDM_Plus_2025_Brochure.pdf'
    try {
      if (typeof (window as any).openBrochurePopup === 'function') {
        ;(window as any).openBrochurePopup(href)
        return
      }
    } catch {}
    downloadBrochureFor(href)
  }

  const canonicalUrl = 'https://www.imas.ac.in/pgdm-plus'

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

  const lifeSlides = [
    { src: '/uploads/pgdm_plus/1.png', title: 'Leadership clubs & student committees', icon: Users },
    { src: '/uploads/pgdm_plus/2.png', title: 'Corporate events, guest lectures & conclaves', icon: Briefcase },
    { src: '/uploads/pgdm_plus/3.png', title: 'Cultural fests & management competitions', icon: Trophy },
    { src: '/uploads/pgdm_plus/4.png', title: 'Research, case studies & live projects', icon: BookOpen },
    { src: '/uploads/pgdm_plus/5.png', title: 'Modern digital learning spaces & labs', icon: Layers },
    { src: '/uploads/pgdm_plus/6.png', title: 'Soft skills & communication training sessions', icon: GraduationCap },
    { src: '/uploads/pgdm_plus/7.png', title: 'Industry exposure & real-world projects', icon: Briefcase },
  ]
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



  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900 scroll-smooth">
      <Helmet>
        <title>PGDM Plus Program | IMAS Kolkata</title>
        <meta name="description" content="Strength Your Future with a Transformative Management Program at IMAS. AICTE approved full-time PGDM Plus program with internships, global exposure, and 100% placement assistance." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="PGDM Plus Program | IMAS Kolkata" />
        <meta property="og:description" content="AICTE approved full-time PGDM Plus with modern campus, corporate partnerships, international collaborations, and practical exposure." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://www.imas.ac.in/uploads/IMASBUILDING.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IMAS Kolkata" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PGDM Plus Program | IMAS Kolkata" />
        <meta name="twitter:description" content="Transformative management program with global exposure, internships, and 100% placement assistance." />
        <meta name="twitter:image" content="https://www.imas.ac.in/uploads/IMASBUILDING.jpeg" />
      </Helmet>

      <div className="w-full bg-slate-900 text-[11px] text-slate-100 shadow-sm sm:text-sm">
        <div className="mx-auto flex max-w-[1550px] items-center justify-between px-4 py-2">
          <p className="flex items-center gap-2 font-medium">
            <CheckCircle className="h-4 w-4 animate-pulse" />
            <span>MBA / PGDM (Full-Time) – PGDM Plus • Admissions Open 2026 • AICTE-Approved</span>
          </p>
          <a href={`tel:${IMAS_CONTACT.PHONE}`} className="hidden items-center gap-1 rounded-full border border-slate-400 px-3 py-1 text-xs hover:bg-slate-800 md:inline-flex">
            <Phone className="h-4 w-4" />
            <span>Request a Callback</span>
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40  bg-slate-800 backdrop-blur shadow-md/70">
        <div className="mx-auto flex max-w-[1550px] items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <img
                src="/uploads/logos/imas.png"
                alt="IMAS International Management & Analytics School"
                className="h-10 w-auto xl:h-12"
              />
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about-imas" className="flex items-center gap-1 hover:text-[#2e7bb3] transition-colors duration-200"><BookOpen className="h-4 w-4" /><span>Program Overview</span></a>
            <a href="#specialisations" className="flex items-center gap-1 hover:text-[#2e7bb3] transition-colors duration-200"><Layers className="h-4 w-4" /><span>Specialisations</span></a>
            <a href="#international-immersion" className="flex items-center gap-1 hover:text-[#2e7bb3] transition-colors duration-200"><Globe className="h-4 w-4" /><span>International Immersion</span></a>
            <a href="#placements" className="flex items-center gap-1 hover:text-[#2e7bb3] transition-colors duration-200"><Briefcase className="h-4 w-4" /><span>Placements</span></a>
            <a href="#life-at-imas" className="flex items-center gap-1 hover:text-[#2e7bb3] transition-colors duration-200"><Users className="h-4 w-4" /><span>Life at IMAS</span></a>
            <a href="#admissions-2026" className="flex items-center gap-1 hover:text-[#2e7bb3] transition-colors duration-200"><CheckCircle className="h-4 w-4" /><span>Admissions 2026</span></a>
            <Button onClick={() => window.open('https://admission.imas.ac.in/', '_blank')} className="px-4 py-2 text-sm font-semibold text-white shadow-md bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700">Apply Now</Button>
          </nav>
          <button className="inline-flex h-9 w-9  items-center justify-center  rounded-md border border-slate-200 transition-colors duration-200 hover:bg-slate-100 md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open menu</span>
            <div className="h-4 w-4 space-y-1">
              <span className="block h-[2px] w-full bg-slate-700" />
              <span className="block h-[2px] w-full bg-slate-700" />
              <span className="block h-[2px] w-full bg-slate-700" />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu - Custom for PGDM Plus Landing Page */}
      {/* Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <img
                src="/uploads/logos/imas.png"
                alt="IMAS International Management & Analytics School"
                className="h-10 w-auto"
              />
            </div>
            <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 hover:text-gray-900">
              <ChevronDown className="h-5 w-5 rotate-180" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6 overflow-y-auto">
            <ul className="space-y-2">
              <li>
                <a href="#about-imas" onClick={() => setMobileMenuOpen(false)} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:text-[#2e7bb3] hover:bg-slate-50 transition-colors">
                  <BookOpen className="h-5 w-5" />
                  <span className="font-medium">Program Overview</span>
                </a>
              </li>
              <li>
                <a href="#specialisations" onClick={() => setMobileMenuOpen(false)} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:text-[#2e7bb3] hover:bg-slate-50 transition-colors">
                  <Layers className="h-5 w-5" />
                  <span className="font-medium">Specialisations</span>
                </a>
              </li>
              <li>
                <a href="#international-immersion" onClick={() => setMobileMenuOpen(false)} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:text-[#2e7bb3] hover:bg-slate-50 transition-colors">
                  <Globe className="h-5 w-5" />
                  <span className="font-medium">International Immersion</span>
                </a>
              </li>
              <li>
                <a href="#placements" onClick={() => setMobileMenuOpen(false)} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:text-[#2e7bb3] hover:bg-slate-50 transition-colors">
                  <Briefcase className="h-5 w-5" />
                  <span className="font-medium">Placements</span>
                </a>
              </li>
              <li>
                <a href="#life-at-imas" onClick={() => setMobileMenuOpen(false)} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:text-[#2e7bb3] hover:bg-slate-50 transition-colors">
                  <Users className="h-5 w-5" />
                  <span className="font-medium">Life at IMAS</span>
                </a>
              </li>
              <li>
                <a href="#admissions-2026" onClick={() => setMobileMenuOpen(false)} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:text-[#2e7bb3] hover:bg-slate-50 transition-colors">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Admissions 2026</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Footer CTAs */}
          <div className="p-6 border-t border-gray-200 space-y-3">
            <Button 
              className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white"
              onClick={() => {
                setMobileMenuOpen(false)
                window.open('https://admission.imas.ac.in/', '_blank')
              }}
            >
              Apply Now
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
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#143674]/95 via-[#143674]/95 to-black/80"
          aria-hidden="true"
        ></div>
        <div
          className="pointer-events-none absolute -left-10 top-10 h-64 w-64 rounded-full bg-cyan-400/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          data-animate-on-scroll
          className="relative mx-auto grid max-w-[1550px] grid-cols-1 gap-8 px-4 py-8 md:grid-cols-12 md:gap-10 md:py-14 transition-all duration-700 ease-out"
        >
          <div className="flex-1 md:col-span-8 space-y-3 sm:space-y-5">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-medium text-white shadow-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
              <span>PGDM Plus Admissions</span>
            </div>
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-white drop-shadow-md">
                MBA / PGDM (Full-Time) – PGDM Plus Program
              </h1>
              <p className="text-xs sm:text-lg font-medium text-gray-200/95 drop-shadow">
                Strength Your Future with a Transformative Management Program at IMAS.
              </p>
              <div className="flex items-center gap-0.5 sm:gap-1 text-xs font-semibold text-white" aria-label="Student rating">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400" fill="currentColor" />
                <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400" fill="currentColor" />
                <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400" fill="currentColor" />
                <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400" fill="currentColor" />
                <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400" fill="currentColor" />
                <span className="ml-2 text-[10px] sm:text-[11px] text-gray-200/95">4.9/5 Student Rating</span>
              </div>
            </div>
            <p className="max-w-xl hidden sm:block text-xs leading-snug text-gray-200 sm:text-sm">IMAS Kolkata, one of the best business schools in Kolkata, guides the new generation to become proficient corporate leaders by offering an AICTE-approved full-time MBA/PGDM – PGDM Plus programme designed to enhance their potential.</p>
            <div className="relative overflow-hidden">
              <div ref={marqueeRef} className="scroller" data-speed="fast" data-direction="left">
                <div className="scroller__inner whitespace-nowrap text-xs font-medium text-white">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 shadow-sm border-t border-b border-white/30"><Award className="h-4 w-4 text-white" /><span>AICTE Approved</span></span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 shadow-sm border-t border-b border-white/30"><Trophy className="h-4 w-4 text-white" /><span>Award-Winning B-School</span></span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 shadow-sm border-t border-b border-white/30"><MapPin className="h-4 w-4 text-white" /><span>Newtown Smart City Zone</span></span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
              <Button onClick={applyNow} className="group rounded-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 px-4 py-2 text-xs sm:text-sm sm:px-5 sm:py-2.5 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-teal-500/25 active:scale-95">
                Inquire Now
                <ExternalLink className="ml-2 h-4 w-4 text-white opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Button onClick={onDownload} variant="outline" className="group rounded-full bg-transparent border-2 border-white/30 px-4 py-2 text-xs sm:text-sm sm:px-5 sm:py-2.5 font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:scale-105 active:scale-95">
                <Download className="h-4 w-4 mr-1 text-white group-hover:rotate-12 transition-transform" />
                Download Brochure
              </Button>
              <Button onClick={() => window.open('/campus-tour', '_blank')} variant="link" className="group text-xs sm:text-sm font-medium text-white underline-offset-4 hover:underline transition-all duration-300">
                <ExternalLink className="h-4 w-4 mr-1 text-white group-hover:translate-x-0.5 transition-transform" />
                Campus Tour
              </Button>
            </div>
            <div className="mt-4 grid max-w-xl grid-cols-3 items-stretch gap-3 text-center text-[11px] text-slate-600 sm:grid-cols-3">
              <div className="h-full rounded-xl bg-white items-center justify-center p-3 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-white">
                <p className="text-[10px] uppercase tracking-wide text-slate-500">Programme</p>
                <p className="mt-1 text-[10px] font-semibold text-slate-900 sm:text-sm">Full-Time PGDM</p>
              </div>
              <div className="h-full rounded-xl bg-white items-center justify-center p-3 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-white">
                <p className="text-[10px] uppercase tracking-wide text-slate-500">Intake</p>
                <p className="mt-1 text-[10px] font-semibold text-slate-900 sm:text-sm">2026 Batch</p>
              </div>
              <div className="h-full rounded-xl bg-white items-center justify-center p-3 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-white">
                <p className="text-[10px] uppercase tracking-wide text-slate-500">Location</p>
                <p className="mt-1 text-[10px] font-semibold text-slate-900 sm:text-sm">Newtown, Kolkata</p>
              </div>
            </div>
          </div>
          

          <div className=" sm:w-[400px]  h-full  ">
            <img
              src="/uploads/pgdm_plus/hero_image.png"
              alt="PGDM Plus"
              className='w-full h-full object-cover rounded-xl'
              onError={(e) => { const t = e.currentTarget as HTMLImageElement; t.style.display = 'none' }}
            />
          </div>
        
        
        </div>

      </section>

      <section id="about-imas" className="border-b border-slate-200 bg-slate-50">
        <div
          data-animate-on-scroll
          className="mx-auto max-w-[1550px]  py-8  transition-all duration-700 ease-out"
        >
          <div className="relative overflow-hidden rounded-xl bg-white/95 ring-1 ring-white/20 p-5 sm:p-6 md:p-8">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 mesh-grid" />
            </div>
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 text-lg sm:text-2xl font-bold font-sans bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#26c1d3]/20">
                  <Building2 className="h-4 w-4 text-[#2e7bb3]" />
                </span>
                <span>About IMAS Business School</span>
              </div>
              <div className="mt-1 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />
            </div>
            <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-700">
              {[
                { icon: 'verified', label: 'AICTE Approved' },
                { icon: 'groups', label: 'Industry Mentors' },
                { icon: 'public', label: 'Global Collaborations' },
              ].map((b) => (
                <span key={b.label} className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 shadow-sm ring-1 ring-slate-200">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                    <span className="material-symbols-outlined text-[16px]">{b.icon}</span>
                  </span>
                  <span className="font-medium">{b.label}</span>
                </span>
              ))}
            </div>
            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">IMAS Kolkata is a dynamic business school located in Newtown, Kolkata, offering an industry-focused full-time MBA / PGDM programme with internship opportunities. The institute focuses on academic excellence, corporate exposure, and holistic personality development.</p>
            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">At IMAS, students unlock their potential through future-ready learning environments, industry-linked curriculum, and active corporate engagement.</p>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-2">
              {[
                { icon: 'apartment', label: 'Vibrant and future-ready campus' },
                { icon: 'menu_book', label: 'Industry-linked MBA curriculum' },
                { icon: 'handshake', label: 'Active corporate partnerships' },
                { icon: 'public', label: 'International university collaborations' },
                { icon: 'work', label: 'Practical exposure – internships & projects' },
              ].map((f) => (
                <div key={f.label} className="group inline-flex items-start gap-3 p-3 rounded-xl bg-white ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <span className="inline-flex p-1 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                    <span className="material-symbols-outlined text-[18px]">{f.icon}</span>
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-900">{f.label}</span>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <Button onClick={() => window.open('/campus-tour','_blank')} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-md hover:from-sky-500 hover:to-blue-600">
                Explore Campus Life
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full overflow-hidden rounded-2xl border bg-white shadow-sm ring-1 ring-slate-200 h-48 sm:h-64 md:h-[420px]">
              {campusImages.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt="IMAS Kolkata campus building"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${idx === campusIndex ? 'opacity-100' : 'opacity-0'}`}
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement
                    target.src = '/uploads/logos/IMAS_LOGO_PNG.png'
                  }}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                {[
                  { icon: 'work', label: 'Corporate Exposure' },
                  { icon: 'public', label: 'Global Immersion' },
                  { icon: 'psychology', label: 'Mentorship' },
                ].map((b) => (
                  <span key={b.label} className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-1 text-[10px] text-white ring-1 ring-white/20">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700">
                      <span className="material-symbols-outlined text-[14px] text-white">{b.icon}</span>
                    </span>
                    <span>{b.label}</span>
                  </span>
                ))}
              </div>
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

      <section id="why-imas" className="border-b border-slate-200 bg-white">
        <div
          data-animate-on-scroll
          className="mx-auto max-w-[1550px]  py-8 transition-all duration-700 ease-out md:py-10"
        >
          <div className="relative overflow-hidden rounded-3xl bg-white/95 ring-1 ring-white/20 p-5 sm:p-6 md:p-8">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 mesh-grid" />
            </div>

            <div className="mb-4 max-w-2xl">
              <div className="text-lg sm:text-2xl font-bold font-sans bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">Why Choose MBA / PGDM (PGDM Plus) at IMAS?</div>
              <div className="mt-1 h-1 w-32 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />
              <p className="mt-2 text-xs text-slate-700 sm:text-sm">Learn from industry leaders, global faculty, and corporate mentors.</p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-slate-700">
                {[
                  { icon: 'verified', label: 'AICTE Approved' },
                  { icon: 'work', label: 'Placement Support' },
                  { icon: 'public', label: 'Global Exposure' },
                ].map((b) => (
                  <span key={b.label} className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 shadow-sm ring-1 ring-slate-200">
                    <span className="inline-flex p-2 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                      <span className="material-symbols-outlined text-[16px]">{b.icon}</span>
                    </span>
                    <span className="font-medium">{b.label}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 grid-cols-2 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                { label: 'AICTE approved full-time MBA/PGDM programme', icon: 'verified' },
                { label: 'Full-time PGDM with 100% placement support', icon: 'workspace_premium' },
                { label: 'High placements with top recruiters in India', icon: 'business_center' },
                { label: 'Cutting-edge curriculum aligned with digital trends', icon: 'psychology' },
                { label: 'Modern AC digital campus infrastructure', icon: 'apartment' },
                { label: 'Personality & grooming programs', icon: 'emoji_events' },
                { label: 'Academic + industry expert faculty', icon: 'engineering' },
                { label: 'Scholarships & financial support', icon: 'volunteer_activism' },
                { label: 'International Immersion Program', icon: 'flight_takeoff' },
                { label: "Prime campus location in Newtown Smart City Zone", icon: 'location_city' },
              ].map((f) => (
                <div key={f.label} className="group inline-flex items-start gap-3 rounded-2xl bg-white p-4 text-xs sm:text-sm shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <span className="inline-flex p-1 md:p-2 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                    <span className="material-symbols-outlined text-[20px]">{f.icon}</span>
                  </span>
                  <p className="font-medium text-slate-900">{f.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <Button onClick={applyNow} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-md hover:from-sky-500 hover:to-blue-600">
                Talk to Academic Advisor
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="awards" className="border-b border-slate-200 bg-slate-50">
        <div
          data-animate-on-scroll
          className="mx-auto max-w-[1550px] px-4 py-8 transition-all duration-700 ease-out md:py-10"
        >
          <div className="space-y-5">
            <div className="award-banner relative overflow-hidden rounded-3xl p-6 sm:p-8 text-white shadow-lg">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-[#0b1c3a]">
                  <Trophy className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-lg sm:text-2xl font-bold">Awards & Recognitions</div>
                  <div className="text-[11px] sm:text-xs opacity-90">National • Industry • Academic</div>
                </div>
              </div>
              <p className="mt-2 text-xs sm:text-sm opacity-90">IMAS has been recognised for its academic excellence, innovation, and professional development support.</p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px]">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 shadow-sm ring-1 ring-white/20"><span className="material-symbols-outlined text-[16px]">military_tech</span><span>Academic Excellence</span></span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 shadow-sm ring-1 ring-white/20"><span className="material-symbols-outlined text-[16px]">trending_up</span><span>Emerging School</span></span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 shadow-sm ring-1 ring-white/20"><span className="material-symbols-outlined text-[16px]">emoji_objects</span><span>Innovation</span></span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 shadow-sm ring-1 ring-white/20"><span className="material-symbols-outlined text-[16px]">workspace_premium</span><span>Professional Development</span></span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: 'Academic Excellence', icon: 'military_tech', badge: 'NATIONAL AWARD' },
                { title: 'Emerging Business School of the Year', icon: 'trending_up', badge: 'INDUSTRY RECOGNITION' },
                { title: 'Innovation & Entrepreneurship Award', icon: 'emoji_objects', badge: 'INNOVATION AWARD' },
                { title: 'Professional Development Award', icon: 'workspace_premium', badge: 'ACADEMIC EXCELLENCE' },
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

            <div>
              <Button onClick={() => window.open('/programs','_blank')} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-md hover:from-sky-500 hover:to-blue-600">
                View Full Awards & Rankings
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      

      <section id="specialisations" className="relative border-b border-slate-200 bg-white">
        <div
          data-animate-on-scroll
          className="mx-auto max-w-[1550px] px-4 py-8 transition-all duration-700 ease-out md:py-10"
        >
          <div className="relative overflow-hidden rounded-3xl bg-white/95 backdrop-blur-sm ring-1 ring-white/20 p-5 sm:p-6 md:p-8">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 mesh-grid" />
            </div>

            <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <div>
                  <div className="flex items-center gap-2 text-lg sm:text-2xl font-bold font-sans bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                      <span className="material-symbols-outlined text-[20px] text-emerald-700">school</span>
                    </span>
                    <span>Specialisations Offered by IMAS Kolkata</span>
                  </div>
                  <div className="mt-1 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />
                </div>
                <p className="mt-2 text-xs text-slate-700 sm:text-sm">Personalise your learning journey with single or dual specialisation options in high-demand management domains.</p>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-slate-700">
                  {[
                    { icon: 'diversity_2', label: 'Dual Specialisation' },
                    { icon: 'workspace_premium', label: 'Industry-Relevant' },
                    { icon: 'lightbulb', label: 'Future-Focused' },
                  ].map((b) => (
                    <span key={b.label} className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 shadow-sm ring-1 ring-slate-200">
                      <span className="inline-flex p-2 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                        <span className="material-symbols-outlined text-[16px]">{b.icon}</span>
                      </span>
                      <span className="font-medium">{b.label}</span>
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-[11px] text-slate-500">Choose a focus area that aligns with your career goals.</p>
            </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Marketing Management', icon: 'trending_up' },
              { label: 'Financial Management', icon: 'account_balance' },
              { label: 'Human Resource Management', icon: 'group' },
              { label: 'Business Analytics', icon: 'query_stats' },
              { label: 'Artificial Intelligence & Data Science', icon: 'smart_toy' },
              { label: 'FinTech', icon: 'credit_card' },
              { label: 'Hospital & Healthcare Management', icon: 'local_hospital' },
              { label: 'Innovation, Entrepreneurship & Venture Development (IEV)', icon: 'rocket_launch' },
            ].map((spec) => (
              <div
                key={spec.label}
                className="group flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-xs font-medium text-slate-800 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="inline-flex p-2 items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                  <span className="material-symbols-outlined text-[20px]">{spec.icon}</span>
                </span>
                <span>{spec.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-slate-600 sm:text-xs">Students may also choose a Dual Specialisation pathway for a broader and more flexible career trajectory.</p>
          <div className="mt-4">
            <Button onClick={() => window.open('/programs','_blank')} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-md hover:from-sky-500 hover:to-blue-600">
              Explore Full Curriculum
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
          </div>
        </div>
      </section>

      <section id="program-features" className="border-b border-slate-200 bg-slate-50">
        <div
          data-animate-on-scroll
          className="mx-auto max-w-[1550px] px-4 py-8 transition-all duration-700 ease-out md:py-10"
        >
          <div className="relative overflow-hidden rounded-3xl bg-white/95 backdrop-blur-sm shadow-1xl ring-1 ring-white/20 p-5 sm:p-6 md:p-8">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 holo-panels" />
            </div>

            <div className="md:grid md:grid-cols-12 md:gap-6">
              <div className="md:col-span-8">
                <div className="flex items-center gap-2">
                  <span className="inline-flex p-3 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                    <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
                  </span>
                  <div>
                    <div className="text-lg sm:text-2xl font-bold font-sans bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">Program Features</div>
                    <p className="text-[11px] sm:text-xs text-slate-600">The PGDM Plus programme integrates globally recognised certifications with strong practical exposure and corporate engagement.</p>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: 'workspace_premium', title: 'Global Tools', desc: 'Industry-certified tools & technologies' },
                    { icon: 'handshake', title: 'Hands-on Learning', desc: 'Projects, internships & workshops' },
                    { icon: 'business_center', title: 'Corporate Exposure', desc: 'Mentorship & industry visits' },
                  ].map((p) => (
                    <div key={p.title} className="group rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md animate-slide-up">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex p-2 items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                          <span className="material-symbols-outlined text-[18px]">{p.icon}</span>
                        </span>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">{p.title}</div>
                          <div className="text-[11px] text-slate-600">{p.desc}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-8">
                  <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200 transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-md">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                      <span className="inline-flex p-2 items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                        <Award className="h-4 w-4 text-white" />
                      </span>
                      <span>Certifications & Tools</span>
                    </div>
                    <ul className="mt-3 space-y-2">
                      <li className="flex items-center gap-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-600" /><span className="text-sm text-slate-700">SAP ERP Suite Certification</span></li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-600" /><span className="text-sm text-slate-700">Microsoft Project Certification</span></li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-600" /><span className="text-sm text-slate-700">Six Sigma Green Belt Certification</span></li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-600" /><span className="text-sm text-slate-700">Advanced Excel Certification</span></li>
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200 transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-md">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                      <span className="inline-flex p-2 items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                        <GraduationCap className="h-4 w-4 text-white" />
                      </span>
                      <span>Experiential Learning & Exposure</span>
                    </div>
                    <ul className="mt-3 space-y-2">
                      <li className="flex items-center gap-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-600" /><span className="text-sm text-slate-700">Live Business Projects</span></li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-600" /><span className="text-sm text-slate-700">Winter & Summer Internships</span></li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-600" /><span className="text-sm text-slate-700">20+ Presentations Each Semester</span></li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-600" /><span className="text-sm text-slate-700">Corporate Mentorship Program</span></li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-600" /><span className="text-sm text-slate-700">Industry Visits</span></li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-600" /><span className="text-sm text-slate-700">Basic & Advanced Communication Training</span></li>
                    </ul>
                  </div>
                </div>

                <Button onClick={onDownload} className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:from-sky-500 hover:to-blue-600">
                  <span className="material-symbols-outlined text-[18px]">description</span>
                  Download  Program Brochure
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="mt-6 md:mt-0 md:col-span-4">
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-gradient-to-br from-[#143674] to-[#2e7bb3] p-4 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="text-[11px] font-semibold uppercase tracking-wide">Corporate Training</div>
                    <div className="relative mt-3 h-40 sm:h-60 w-full overflow-hidden rounded-xl">
                      <img
                        src={'/uploads/campus_photos/imas_campus.png'}
                        alt={'Corporate training workshop'}
                        className="absolute inset-0 h-full w-full object-cover opacity-70"
                        onError={(e) => { const t = e.currentTarget as HTMLImageElement; t.src = '/uploads/logos/IMAS_LOGO_PNG.png' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-800">Certifications Badges</div>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {['SAP ERP','Microsoft Project','Six Sigma','Advanced Excel'].map((b) => (
                        <div key={b} className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 ring-1 ring-slate-200">
                          <span className="inline-flex p-2 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                            <span className="material-symbols-outlined text-[16px]">workspace_premium</span>
                          </span>
                          <span className="text-xs font-medium text-slate-800">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-800">Learning Environment</div>
                    <div className="relative mt-3 h-28 w-full overflow-hidden rounded-xl">
                      <img
                        src={'/uploads/imas_hero_image1.webp'}
                        alt={'Business classroom environment'}
                        className="absolute inset-0 h-full w-full object-cover"
                        onError={(e) => { const t = e.currentTarget as HTMLImageElement; t.src = '/uploads/logos/IMAS_LOGO_PNG.png' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="program-objectives" className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-sky-50 to-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-10 top-10 h-56 w-56 rounded-full bg-[#26c1d3]/15 blur-3xl" />
          <div className="absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-[#143674]/10 blur-3xl" />
        </div>
        <div
          data-animate-on-scroll
          className="relative mx-auto max-w-[1550px] px-4 py-8 transition-all duration-700 ease-out md:py-10"
        >
          <div className="mb-4 flex items-end justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-lg sm:text-2xl font-bold font-sans bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#26c1d3]/20">
                  <Target className="h-4 w-4 text-[#2e7bb3]" />
                </span>
                <span>MBA / PGDM Program Objectives</span>
              </div>
              <div className="mt-1 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />
              <p className="mt-2 text-xs text-slate-700 sm:text-sm">What transformation will students achieve through a future-ready, industry-aligned learning experience.</p>
            </div>
            <Button onClick={onDownload} variant="outline" className="hidden md:inline-flex items-center gap-2 rounded-full border border-[#26c1d3] px-4 py-2 text-xs font-semibold text-[#2e7bb3] hover:bg-[#26c1d3]/10"><Download className="h-4 w-4" />Download Program Outcome Brochure</Button>
          </div>

          <div
            className="grid grid-flow-col auto-cols-[85%] sm:auto-cols-[45%] md:auto-cols-[auto] gap-3 overflow-x-auto snap-x snap-mandatory md:grid-flow-row md:overflow-visible md:grid-cols-4"
          >
            {[
              { title: 'Industry-relevant curriculum knowledge', desc: 'Learn modern tools, frameworks & business skills', icon: BookOpen },
              { title: 'Specialisation enhancement', desc: 'Master your chosen domain with expert guidance', icon: Layers },
              { title: 'Professional networking & career support', desc: 'Build relationships via mentors & alumni', icon: Users },
              { title: 'Advanced skill development', desc: 'Develop analytical, strategic & digital capabilities', icon: Star },
              { title: 'Leadership & professional development', desc: 'Grow confidence & executive thinking', icon: Briefcase },
              { title: 'Globally informed business perspective', desc: 'Understand international culture & markets', icon: Globe },
              { title: 'Experiential learning mindset', desc: 'Apply learning through projects & internships', icon: GraduationCap },
              { title: 'Continuous learning & adaptability', desc: 'Stay adaptable with lifelong learning mindset', icon: RefreshCw },
            ].map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="snap-start group flex flex-col gap-2 rounded-2xl bg-white p-4 text-xs text-slate-700 ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:text-sm"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#26c1d3]/10">
                  <Icon className="h-4 w-4 text-[#2e7bb3]" />
                </div>
                <p className="font-medium text-slate-900">{title}</p>
                <p className="text-[11px] sm:text-xs text-slate-600">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 md:hidden">
            <Button onClick={onDownload} variant="outline" className="inline-flex items-center gap-2 rounded-full border border-[#26c1d3] px-4 py-2 text-xs font-semibold text-[#2e7bb3] hover:bg-[#26c1d3]/10"><Download className="h-4 w-4" />Download Program Outcome Brochure</Button>
          </div>
        </div>
      </section>

      <section id="international-immersion" className="relative border-b border-slate-200 bg-slate-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 map-grid" />
          <svg viewBox="0 0 1000 500" className="absolute inset-0 h-full w-full opacity-70">
            <path d="M600 260 Q570 220 540 240" className="neon-line" />
            <path d="M600 260 Q680 270 750 300" className="neon-line" />
            <path d="M600 260 Q660 250 700 280" className="neon-line" />
            <path d="M600 260 Q670 290 720 310" className="neon-line" />
            <circle cx="600" cy="260" r="3.5" className="neon-dot" />
            <circle cx="540" cy="240" r="3" className="neon-dot" />
            <circle cx="750" cy="300" r="3" className="neon-dot" />
            <circle cx="700" cy="280" r="3" className="neon-dot" />
            <circle cx="720" cy="310" r="3" className="neon-dot" />
          </svg>
        </div>
        <div
          data-animate-on-scroll
          className="mx-auto grid max-w-[1550px] gap-6 px-4 py-8 md:grid-cols-2 md:gap-8 md:py-10 transition-all duration-700 ease-out"
        >
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 text-lg sm:text-2xl font-bold font-sans bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#26c1d3]/20">
                  <span className="material-symbols-outlined text-[20px] text-[#2e7bb3]">public</span>
                </span>
                <span>International Immersion Program</span>
              </div>
              <div className="mt-1 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />
            </div>
            <p className="text-xs text-slate-700 sm:text-sm">Gain practical understanding of global markets, cultures, and business ecosystems through international immersion experiences in leading business hubs.</p>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-800">Destinations</div>
            <div className="mt-2 flex flex-wrap gap-2 text-xs font-medium">
              {['Dubai','Singapore','Thailand','Malaysia'].map((place)=>(
                <span key={place} className="rounded-full bg-white px-3 py-1 text-slate-800 ring-1 ring-slate-200">{place}</span>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                { name: 'Dubai', img: '/uploads/destinations/dubai.jpg' },
                { name: 'Singapore', img: '/uploads/destinations/singapore.jpg' },
                { name: 'Thailand', img: '/uploads/destinations/thailand.jpeg' },
                { name: 'Malaysia', img: '/uploads/destinations/malaysia.avif' },
              ].map((d) => (
                <div
                  key={d.name}
                  className="relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <img
                    src={d.img}
                    alt={`${d.name} immersion`}
                    className="h-24 w-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.src = '/uploads/logos/IMAS_LOGO_PNG.png';
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/40 text-white text-xs font-semibold px-2 py-1">{d.name}</div>
                </div>
              ))}
            </div>
          </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-800">Collaborations</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>• Middlesex University</li>
                <li>• Curtin University</li>
                <li>• Panyapiwat Institute</li>
                <li>• Raffles University</li>
              </ul>
              <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                {[
                  { name: 'Middlesex University', img: '/uploads/universities/middlesex.avif' },
                  { name: 'Curtin University', img: '/uploads/universities/curtin.jpg' },
                  { name: 'Panyapiwat Institute', img: '/uploads/universities/panyapiwat.jpeg' },
                  { name: 'Raffles University', img: '/uploads/universities/raffles.jpg' },
                ].map((u) => (
                  <div
                    key={u.name}
                    className="relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <img
                      src={u.img}
                      alt={`${u.name} logo`}
                      className="h-20 w-full object-cover "
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.src = '/uploads/logos/IMAS_LOGO_PNG.png';
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-black/30 text-white text-[10px] font-semibold px-2 py-1 truncate">{u.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <Button onClick={() => window.open('/programs','_blank')} className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-md hover:from-sky-500 hover:to-blue-600">View International Exposure Details<span>↗</span></Button>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-64 w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-[#2e7bb3] p-6 text-slate-50 shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="relative">
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#26c1d3]">Global Business Lens</div>
                <div className="mt-3 text-lg font-semibold">Build a globally informed perspective to lead across borders.</div>
                <div className="mt-2 text-xs text-slate-50/90">International immersion trips combine academic sessions, industry visits, and cultural exposure, helping students connect classroom concepts with real-world global business practices.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="placements" className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-[#143674] via-[#143674] to-[#0b1c3a]">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-[#26c1d3]/20 blur-3xl" />
        </div>
        <div
          data-animate-on-scroll
          className="relative mx-auto max-w-[1550px] px-4 py-10 transition-all duration-700 ease-out md:py-14"
        >
          <div className="grid gap-8 md:grid-cols-12">
            {/* Left: Story & Highlights */}
            <div className="md:col-span-6 space-y-4 text-white">
              <div>
                <div className="flex items-center gap-2 text-lg sm:text-2xl font-bold font-sans bg-gradient-to-r from-white to-[#26c1d3] bg-clip-text text-transparent">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                    <Briefcase className="h-5 w-5 text-white" />
                  </span>
                  <span>Placements at IMAS</span>
                </div>
                <div className="mt-1 h-1 w-28 rounded-full bg-gradient-to-r from-[#26c1d3] to-sky-500" />
              </div>
              <p className="text-xs sm:text-sm text-slate-100/90">Built on career-focused learning and industry partnerships, IMAS offers structured placement support with mentorship, training modules, and strong recruiter engagement.</p>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { label: 'Resume + GD/PI training', icon: CheckCircle },
                  { label: 'Corporate mentorship', icon: Users },
                  { label: 'Seminars & workshops', icon: GraduationCap },
                  { label: 'Skills development', icon: Layers },
                  { label: 'Industry visits', icon: Globe },
                  { label: 'Multiple job offers', icon: Trophy },
                ].map((item) => (
                  <div key={item.label} className="group flex items-center gap-2 rounded-2xl bg-white/10 p-3 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#26c1d3]/10">
                      {React.createElement(item.icon, { className: 'h-4 w-4 text-[#26c1d3]' })}
                    </span>
                    <span className="text-xs sm:text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-2 flex flex-wrap gap-3">
                <Button onClick={applyNow} className="rounded-full bg-gradient-to-r from-[#26c1d3] to-[#143674] px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:from-[#2ed4e6] hover:to-[#1a3f7a]">Talk to Placement Counsellor</Button>
                <Button onClick={onDownload} variant="outline" className="inline-flex items-center gap-2 rounded-full bg-transparent border border-white/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"><Download className="h-4 w-4" />Download Placement Report</Button>
              </div>
            </div>

            {/* Right: Snapshot & Logos */}
            <div className="md:col-span-6">
              <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-600">Placement Snapshot*</div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  {[
                    { label: 'Highest CTC', value: '₹ 22.5 LPA' },
                    { label: 'Average CTC', value: '₹ 10.2 LPA' },
                    { label: 'Offers / Student', value: '2+' },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-2xl bg-slate-50 p-4 text-slate-900 ring-1 ring-slate-200">
                      <div className="text-[10px] text-slate-600">{stat.label}</div>
                      <div className="mt-1 text-lg font-bold bg-gradient-to-r from-[#26c1d3] to-[#6db3f8] bg-clip-text ">{stat.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 space-y-3">
                  <div className="relative overflow-hidden    p-2">
                    <div className="flex items-center gap-6 animate-scroll-left">
                      {placementLogos.slice(0, 6).map((company) => (
                        <div key={`row1-${company.name}`} className="flex-shrink-0 flex items-center justify-center">
                          <img
                            src={company.logo}
                            alt={`${company.name} logo`}
                            className="h-8 w-auto object-contain"
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement
                              target.style.display = 'none'
                            }}
                          />
                        </div>
                      ))}
                      {placementLogos.slice(0, 6).map((company) => (
                        <div key={`row1-dup-${company.name}`} className="flex-shrink-0 flex items-center justify-center">
                          <img
                            src={company.logo}
                            alt={`${company.name} logo`}
                            className="h-8 w-auto object-contain"
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement
                              target.style.display = 'none'
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative overflow-hidden  p-2">
                    <div className="flex items-center gap-6 animate-scroll-right">
                      {placementLogos.slice(6).map((company) => (
                        <div key={`row2-${company.name}`} className="flex-shrink-0 flex items-center justify-center">
                          <img
                            src={company.logo}
                            alt={`${company.name} logo`}
                            className="h-8 w-auto object-contain"
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement
                              target.style.display = 'none'
                            }}
                          />
                        </div>
                      ))}
                      {placementLogos.slice(6).map((company) => (
                        <div key={`row2-dup-${company.name}`} className="flex-shrink-0 flex items-center justify-center">
                          <img
                            src={company.logo}
                            alt={`${company.name} logo`}
                            className="h-8 w-auto object-contain"
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement
                              target.style.display = 'none'
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-3 text-[11px] text-slate-600">More than 150+ recruiters engaged yearly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="life-at-imas" className="border-b border-slate-200 bg-slate-50">
        <div
          data-animate-on-scroll
          className="mx-auto max-w-[1550px] px-4 py-8 transition-all duration-700 ease-out md:py-10"
        >
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div>
                <div className="flex items-center gap-2 text-lg sm:text-2xl font-bold font-sans bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                    <span className="material-symbols-outlined text-[20px] text-purple-700">auto_awesome</span>
                  </span>
                  <span>Life at IMAS</span>
                </div>
                <div className="mt-1 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />
              </div>
              <p className="mt-2 text-xs text-slate-700 sm:text-sm">Experience a dynamic campus life with leadership clubs, events, and experiential projects that shape confident and industry-ready professionals.</p>
            </div>
            <p className="text-[11px] text-slate-500">Academic rigour blended with vibrant campus culture.</p>
          </div>
          <div className="relative">
            <div
              ref={lifeTrackRef}
              className="grid grid-flow-col auto-cols-[85%] sm:auto-cols-[45%] md:auto-cols-[30%] gap-4 overflow-x-auto snap-x snap-mandatory sm:grid-flow-row sm:overflow-visible sm:grid-cols-3"
            >
              {lifeSlides.map((slide, idx) => (
                <div key={idx} className="snap-start relative aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement
                      target.src = '/uploads/logos/IMAS_LOGO_PNG.png'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 text-white">
                      
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 flex justify-center gap-2 sm:hidden">
              <Button
                variant="outline"
                className="h-8 w-8 rounded-full border-slate-300"
                onClick={() => {
                  const el = lifeTrackRef.current
                  if (el) el.scrollBy({ left: -el.clientWidth * 0.8, behavior: 'smooth' })
                }}
              >
                <ChevronDown className="h-4 w-4 rotate-90" />
              </Button>
              <Button
                variant="outline"
                className="h-8 w-8 rounded-full border-slate-300"
                onClick={() => {
                  const el = lifeTrackRef.current
                  if (el) el.scrollBy({ left: el.clientWidth * 0.8, behavior: 'smooth' })
                }}
              >
                <ChevronDown className="h-4 w-4 -rotate-90" />
              </Button>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-600">Full-time management programmes at IMAS combine academic foundations, global exposure, and strong placement support to prepare students for success in India and beyond.</p>
        </div>
      </section>







      

      <section id="admissions-2026" className="relative py-8 sm:py-12 bg-gradient-to-r from-[#143674]/90 to-[#2e7bb3]/90">
        <div
          data-animate-on-scroll
          className="max-w-[1550px] mx-auto px-4 transition-all duration-700 ease-out"
        >
          <div className="relative overflow-hidden rounded-3xl cta-banner text-white p-6 sm:p-8">
            <div className="pointer-events-none absolute inset-0 cta-lines" />

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div>
                  <div className="text-lg sm:text-2xl font-bold">MBA / PGDM Admissions Open 2026 — Apply Now</div>
                  <div className="text-[11px] sm:text-xs opacity-90">Take the next step towards a high-impact management career with the IMAS PGDM Plus programme. Complete your application, download the brochure, or schedule a campus visit.</div>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button onClick={() => window.open('https://admission.imas.ac.in/', '_blank')} className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:from-sky-500 hover:to-blue-600">
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    Apply Online
                  </Button>
                  <Button onClick={onDownload} variant="outline" className="group inline-flex items-center bg-transparent gap-2 rounded-full border border-white/50 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
                    <span className="material-symbols-outlined text-[18px]">description</span>
                    Download Brochure
                  </Button>
                  <Button onClick={() => window.open('/campus-tour', '_blank')} variant="outline" className="group bg-transparent inline-flex items-center gap-2 rounded-full border border-white/50 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
                    <span className="material-symbols-outlined text-[18px]">event_available</span>
                    Schedule Campus Visit
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 text-sm text-imas-dark-blue ring-1 ring-white/20 backdrop-blur-sm">
                <div className="text-base font-semibold">Campus Address</div>
                <p className="mt-1 text-sm opacity-90">Plot No 37, Block – Bhangar-II<br/>Near St. Xavier’s University<br/>Newtown Action Area – III<br/>Kolkata, West Bengal – 700160</p>
                <div className="mt-3 space-y-1 text-sm">
                  <p className="inline-flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">call</span><span className="font-semibold">Phone:</span> {IMAS_CONTACT.PHONE}</p>
                  <p className="inline-flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">mail</span><span className="font-semibold">Email:</span> {IMAS_CONTACT.EMAIL}</p>
                  <p className="inline-flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">language</span><span className="font-semibold">Web:</span> www.imas.ac.in</p>
                </div>
                <div className="mt-3">
                  <a href={`tel:${IMAS_CONTACT.PHONE.replace(/\s/g,'')}`} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#143674] shadow-md transition-all duration-200 hover:-translate-y-0.5">
                    <span className="material-symbols-outlined text-[16px]">call</span>
                    Quick Call
                  </a>
                </div>
                <div className="mt-4 rounded-xl border border-white/20 bg-white/10 p-3">
                  <iframe
                    title="Main Campus Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.238774664635!2d88.4322102!3d22.570171199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275aedaaaaaab%3A0x42fc9c8ae01a94cd!2sIMAS%20Business%20School!5e0!3m2!1sen!2sin!4v1763538389238!5m2!1sen!2sin"
                    className="w-full h-56 md:h-64 rounded-lg border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-8 sm:py-12 bg-slate-50">
        <div
          data-animate-on-scroll
          className="max-w-[1550px] mx-auto px-4 transition-all duration-700 ease-out"
        >
          <div>
            <div className="text-lg sm:text-2xl font-bold font-sans bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
              Frequently Asked Questions
            </div>
            <div className="mt-1 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />
          </div>
          <p className="mt-2 text-xs text-slate-700 sm:text-sm">Have queries about the IMAS PGDM Plus programme? Find quick answers below or connect with our admissions team.</p>
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
                className="group rounded-2xl bg-white p-4 text-slate-800 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-medium">
                  <span>{q}</span>
                  <span className="text-xs text-slate-500 group-open:hidden">+</span>
                  <span className="hidden text-xs text-slate-500 group-open:inline">−</span>
                </summary>
                <div className="mt-2 text-xs text-slate-600">Official responses will be published soon. Contact admissions for detailed guidance.</div>
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

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-2 shadow-[0_-4px_12px_rgba(15,23,42,0.08)] md:hidden">
        <div className="mx-auto flex max-w-[1550px] items-center justify-between gap-2 text-xs font-semibold">
          <Button
            onClick={() => window.open('https://admission.imas.ac.in/', '_blank')}
            className="flex-1 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 px-3 py-2 text-center text-white transition-all duration-200 active:scale-95"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Apply
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
            href={`tel:${IMAS_CONTACT.PHONE.replace(/\s/g,'')}`}
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
