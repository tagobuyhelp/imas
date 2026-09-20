import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { IMAS_TAILWIND_CLASSES, IMAS_BRAND, IMAS_CONTACT } from '../lib/constants'
import { applyNow, downloadBrochureFor } from '../lib/utils'
import { GraduationCap, Star, MapPin, Building2, Target, HelpCircle,Calendar, Download, Mail, ExternalLink, BookOpen, Layers, Globe, Briefcase, Users, CheckCircle, Phone, Award, Trophy, ChevronDown, RefreshCw, ArrowRight, Send } from 'lucide-react'

export function PgdmFintechLandingPage(): React.JSX.Element {
  const marqueeRef = React.useRef<HTMLDivElement | null>(null)
  const onDownload = () => {
    const href = '/uploads/IMAS_PGDM_2026_Brochure.pdf'
    try {
      if (typeof (window as any).openBrochurePopup === 'function') {
        ; (window as any).openBrochurePopup(href)
        return
      }
    } catch { }
    downloadBrochureFor(href)
  }

  const canonicalUrl = 'https://www.imas.ac.in/pgdm-fintech'

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [activeMode, setActiveMode] = React.useState<'regular' | 'blended'>('regular')

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

  const whyItems = [
    'AICTE-approved, industry-aligned curriculum',
    'Banking + Technology integrated learning',
    'Regular or Flexible Blended modes',
    '100% placement support with strong recruiters',
    'FinTech labs, tools & expert faculty',
    'Global immersion (on-campus learners)'
  ]

  const learnItems = [
    'Digital Payments & UPI Infrastructure',
    'Blockchain & Cryptocurrency',
    'AI & ML in Finance',
    'Robo-Advisory & WealthTech',
    'FinTech Product Development',
    'RegTech, Risk & Compliance',
    'Cybersecurity for Financial Systems',
    'Banking, Insurance & Digital Finance'
  ]

  const features = [
    'SAP ERP Certification (Optional)',
    'Microsoft Project Certification (Optional)',
    'Six Sigma Green Belt (Optional)',
    'Advanced Excel Mastery',
    'Live Business Projects',
    'Summer & Winter Internships (Regular)',
    'Corporate Connect & Industry Mentorship',
    'Communication & Presentation Mastery',
    '20+ Presentations Every Semester'
  ]

  const jobRoles = [
    'FinTech Analyst',
    'Blockchain Consultant',
    'AI-Finance Analyst',
    'Digital Banking Specialist',
    'Payment Systems Analyst',
    'FinTech Product Manager',
    'Business Analyst (BFSI)',
    'RegTech Consultant'
  ]

  const industries = [
    'FinTech Startups',
    'Banks & NBFCs',
    'InsurTech',
    'Digital Payment Apps',
    'IT & Tech Firms',
    'WealthTech Firms'
  ]

  const countries = ['Dubai', 'Singapore', 'Malaysia', 'Thailand', 'Vietnam']

  const destinationCards = [
    { name: 'Dubai', img: '/uploads/destinations/dubai.jpg' },
    { name: 'Singapore', img: '/uploads/destinations/singapore.jpg' },
    { name: 'Malaysia', img: '/uploads/destinations/malaysia.avif' },
    { name: 'Thailand', img: '/uploads/destinations/thailand.jpeg' },
    { name: 'Vietnam', img: '/uploads/destinations/vietnam.jpg' },
  ]

  const lifeTrackRef = React.useRef<HTMLDivElement | null>(null)
  const lifeSlides = [
    { src: '/uploads/fintech/1.png', title: 'Leadership clubs & student committees', icon: Users },
    { src: '/uploads/fintech/2.png', title: 'Corporate events, guest lectures & conclaves', icon: Briefcase },
    { src: '/uploads/fintech/3.png', title: 'Cultural fests & management competitions', icon: Trophy },
    { src: '/uploads/fintech/4.png', title: 'Industry exposure & networking', icon: Briefcase },
    { src: '/uploads/fintech/5.png', title: 'Global immersion (on-campus learners)', icon: Globe },
    { src: '/uploads/fintech/6.png', title: 'Industry exposure & networking', icon: Briefcase },
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
    '/uploads/fintech/1.png',
    '/uploads/fintech/2.png',
    '/uploads/fintech/3.png',
    '/uploads/fintech/4.png',
    '/uploads/fintech/5.png',
    '/uploads/fintech/6.png',
    '/uploads/fintech/7.png'
  ]
  const [campusIndex, setCampusIndex] = React.useState(0)
  React.useEffect(() => {
    const id = setInterval(() => {
      setCampusIndex((i) => (i + 1) % campusImages.length)
    }, 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>PGDM in FinTech – IMAS</title>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="description" content="AICTE-approved PGDM in FinTech with Regular and Flexible Blended modes. Industry-aligned curriculum, labs, global immersion, and 100% placement support." />
      </Helmet>

      <div className="w-full bg-slate-900 text-[11px] text-slate-100 shadow-sm sm:text-sm">
        <div className="mx-auto flex max-w-[1550px] items-center justify-between px-4 py-2">
          <p className="flex items-center gap-2 font-medium">
            <CheckCircle className="h-4 w-4 animate-pulse" />
            <span>PGDM in FinTech • Admissions Open 2026 • AICTE-Approved</span>
          </p>
          <a href={`tel:${IMAS_CONTACT.PHONE}`} className="hidden items-center gap-1 rounded-full border border-slate-400 px-3 py-1 text-xs hover:bg-slate-800 md:inline-flex">
            <Phone className="h-4 w-4" />
            <span>Request a Callback</span>
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-slate-800 backdrop-blur shadow-md/70">
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
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about-imas" className="flex items-center gap-1 hover:text-[#2e7bb3] transition-colors duration-200"><BookOpen className="h-4 w-4" /><span>Overview</span></a>
            <a href="#fintech-learning" className="flex items-center gap-1 hover:text-[#2e7bb3] transition-colors duration-200"><Layers className="h-4 w-4" /><span>FinTech Learning</span></a>
            <a href="#programme-features" className="flex items-center gap-1 hover:text-[#2e7bb3] transition-colors duration-200"><Award className="h-4 w-4" /><span>Programme Features</span></a>
            <a href="#modes" className="flex items-center gap-1 hover:text-[#2e7bb3] transition-colors duration-200"><Layers className="h-4 w-4" /><span>Modes</span></a>
            <a href="#international-immersion" className="flex items-center gap-1 hover:text-[#2e7bb3] transition-colors duration-200"><Globe className="h-4 w-4" /><span>Immersion</span></a>
            <a href="#placements" className="flex items-center gap-1 hover:text-[#2e7bb3] transition-colors duration-200"><Briefcase className="h-4 w-4" /><span>Placements</span></a>
            <a href="#admissions-2026" className="flex items-center gap-1 hover:text-[#2e7bb3] transition-colors duration-200"><CheckCircle className="h-4 w-4" /><span>Admissions</span></a>
            <Button onClick={() => {
                            try {
                              applyNow()
                            } catch (e) {
                              console.error('[WorkingExecutivesLandingPage] enquiry action failed, dispatching event fallback', e)
                              window.dispatchEvent(new Event('imas:openEnquiryForm'))
                            }
                          }} className="px-4 py-2 text-sm font-semibold text-white shadow-md bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700">Inquire Now</Button>
          </nav>
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 transition-colors duration-200 hover:bg-slate-100 md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open menu</span>
            <div className="h-4 w-4 space-y-1">
              <span className="block h-[2px] w-full bg-slate-700" />
              <span className="block h-[2px] w-full bg-slate-700" />
              <span className="block h-[2px] w-full bg-slate-700" />
            </div>
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}
      <div className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <a href="/" className="inline-block">
                <img src="/uploads/logos/imas.png" alt="IMAS International Management & Analytics School" className="h-10 w-auto" />
              </a>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 hover:text-gray-900">
              <ChevronDown className="h-5 w-5 rotate-180" />
            </Button>
          </div>
          <nav className="flex-1 p-6 overflow-y-auto">
            <ul className="space-y-2">
              <li><a href="#about-imas" onClick={() => setMobileMenuOpen(false)} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:text-[#2e7bb3] hover:bg-slate-50 transition-colors"><BookOpen className="h-5 w-5" /><span className="font-medium">Programme Overview</span></a></li>
              <li><a href="#specialisations" onClick={() => setMobileMenuOpen(false)} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:text-[#2e7bb3] hover:bg-slate-50 transition-colors"><Layers className="h-5 w-5" /><span className="font-medium">Specialisations</span></a></li>
              <li><a href="#international-immersion" onClick={() => setMobileMenuOpen(false)} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:text-[#2e7bb3] hover:bg-slate-50 transition-colors"><Globe className="h-5 w-5" /><span className="font-medium">International Immersion</span></a></li>
              <li><a href="#placements" onClick={() => setMobileMenuOpen(false)} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:text-[#2e7bb3] hover:bg-slate-50 transition-colors"><Briefcase className="h-5 w-5" /><span className="font-medium">Placements</span></a></li>
              <li><a href="#life-at-imas" onClick={() => setMobileMenuOpen(false)} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:text-[#2e7bb3] hover:bg-slate-50 transition-colors"><Users className="h-5 w-5" /><span className="font-medium">Life at IMAS</span></a></li>
              <li><a href="#admissions-2026" onClick={() => setMobileMenuOpen(false)} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:text-[#2e7bb3] hover:bg-slate-50 transition-colors"><CheckCircle className="h-5 w-5" /><span className="font-medium">Admissions 2026</span></a></li>
            </ul>
          </nav>
          <div className="p-6 border-t border-gray-200 space-y-3">
            <Button className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white" onClick={() => {
                            try {
                              applyNow()
                            } catch (e) {
                              console.error('[WorkingExecutivesLandingPage] enquiry action failed, dispatching event fallback', e)
                              window.dispatchEvent(new Event('imas:openEnquiryForm'))
                            }
                          }}>Inquire Now</Button>
            <Button variant="outline" className="w-full border-[#26c1d3] text-[#2e7bb3] hover:bg-[#26c1d3]/10" onClick={() => { setMobileMenuOpen(false); onDownload() }}><Download className="h-4 w-4 mr-2" /> Download Brochure</Button>
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
              <span>PGDM in FinTech Admissions</span>
            </div>
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-white drop-shadow-md">
                PGDM in FinTech – Choose Regular or Flexible Mode
              </h1>
              <p className="text-xs sm:text-lg font-medium text-gray-200/95 drop-shadow">
                Future-Ready | Flexible | AICTE Approved
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
            <p className="max-w-xl hidden sm:block text-xs leading-snug text-gray-200 sm:text-sm">IMAS offers an AICTE-approved PGDM in FinTech programme in India, designed for students and working professionals who want to upgrade their financial and technological skills, with both Regular and Flexible learning modes available.</p>
            <div className="relative overflow-hidden">
              <div ref={marqueeRef} className="scroller" data-speed="fast" data-direction="left">
                <div className="scroller__inner whitespace-nowrap text-xs font-medium text-white">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 shadow-sm border-t border-b border-white/30"><MapPin className="h-4 w-4 text-white" /><span>Newtown, Kolkata</span></span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 shadow-sm border-t border-b border-white/30"><Award className="h-4 w-4 text-white" /><span>AICTE Approved</span></span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 shadow-sm border-t border-b border-white/30"><CheckCircle className="h-4 w-4 text-white" /><span>Industry Aligned</span></span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 shadow-sm border-t border-b border-white/30"><Calendar className="h-4 w-4 text-white" /><span>Future Focused</span></span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
              <Button onClick={() => {
                              try {
                                applyNow()
                              } catch (e) {
                                console.error('[WorkingExecutivesLandingPage] enquiry action failed, dispatching event fallback', e)
                                window.dispatchEvent(new Event('imas:openEnquiryForm'))
                              }
                            }} className="group rounded-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 px-4 py-2 text-xs sm:text-sm sm:px-5 sm:py-2.5 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-teal-500/25 active:scale-95">
                Inquire Now
                <ExternalLink className="ml-2 h-4 w-4 text-white opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Button onClick={onDownload} variant="outline" className="group rounded-full bg-transparent border-2 border-white/30 px-4 py-2 text-xs sm:text-sm sm:px-5 sm:py-2.5 font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:scale-105 active:scale-95">
                <Download className="h-4 w-4 mr-1 text-white group-hover:rotate-12 transition-transform" />
                Download Brochure
              </Button>
              <Button onClick={() => document.getElementById('modes')?.scrollIntoView({ behavior: 'smooth' })} variant="link" className="group text-xs sm:text-sm font-medium text-white underline-offset-4 hover:underline transition-all duration-300">
                <ExternalLink className="h-4 w-4 mr-1 text-white group-hover:translate-x-0.5 transition-transform" />
                Select Your Mode
              </Button>
            </div>
            <div className="mt-4 grid max-w-xl grid-cols-3 items-stretch gap-3 text-center text-[11px] text-slate-600 sm:grid-cols-3">
              <div className="h-full rounded-xl bg-white items-center justify-center p-3 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-white">
                <p className="text-[10px] uppercase tracking-wide text-slate-500">Programme</p>
                <p className="mt-1 text-[10px] font-semibold text-slate-900 sm:text-sm">PGDM FinTech</p>
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
          




          <div className=" sm:w-[450px]  h-full  ">
            <img
              src="/uploads/fintech/hero_image.png"
              alt="PGDM FinTech"
              className='w-full h-full object-cover rounded-xl'
              onError={(e) => { const t = e.currentTarget as HTMLImageElement; t.style.display = 'none' }}
            />
          </div>
        </div>

      </section>



      <section id="about-imas" className="border-b border-slate-200 bg-slate-50">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px]  py-8  transition-all duration-700 ease-out">
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
                <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">IMAS Kolkata is a dynamic business school located in Newtown, Kolkata, offering industry-focused programmes and practical exposure through internships and projects.</p>
                <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">Students unlock potential through future-ready learning environments, industry-linked curriculum, and active corporate engagement.</p>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-2">
                  {[
                    { icon: 'apartment', label: 'Vibrant and future-ready campus' },
                    { icon: 'menu_book', label: 'Industry-linked curriculum' },
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
                  <Button onClick={() => window.open('/campus-tour', '_blank')} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-md hover:from-sky-500 hover:to-blue-600">
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
        <div data-animate-on-scroll className="mx-auto max-w-[1550px]  py-8 transition-all duration-700 ease-out md:py-10">
          <div className="relative overflow-hidden rounded-3xl bg-white/95 ring-1 ring-white/20 p-5 sm:p-6 md:p-8">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 mesh-grid" />
            </div>
            <div className="mb-4 max-w-2xl">
              <div className="text-lg sm:text-2xl font-bold font-sans bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">Why Choose PGDM in FinTech at IMAS?</div>
              <div className="mt-1 h-1 w-32 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />
              <p className="mt-2 text-xs text-slate-700 sm:text-sm">IMAS offers the best PGDM in FinTech courses India with multiple learning modes designed for future finance and technology professionals with advantages.</p>
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
            <div className="grid gap-6 sm:grid-cols-2">
              {whyItems.map((label) => (
                <div key={label} className="group inline-flex items-start gap-3 p-3 rounded-xl bg-white ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <span className="inline-flex p-1 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-900">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              <Button onClick={applyNow} className="rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-md hover:from-sky-500 hover:to-blue-600">Talk to Academic Advisor</Button>
              <Button onClick={onDownload} variant="outline" className="inline-flex items-center gap-2 rounded-full bg-transparent border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-50"><Download className="h-4 w-4" />Download Brochure</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="awards" className="border-b border-slate-200 bg-slate-50">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-8 transition-all duration-700 ease-out md:py-10">
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
              <p className="mt-2 text-xs sm:text-sm opacity-90">IMAS is recognised for academic excellence, innovation, and professional development support.</p>
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
              <Button onClick={() => window.open('/programs', '_blank')} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-md hover:from-sky-500 hover:to-blue-600">
                View Full Awards & Rankings
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>


      <section id="modes" className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-10 top-10 h-56 w-56 rounded-full bg-[#26c1d3]/10 blur-3xl" />
          <div className="absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-[#143674]/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-[1550px] px-4 py-10">
          <div className="mb-4 flex items-end justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-lg sm:text-2xl font-bold font-sans bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#26c1d3]/20">
                  <span className="material-symbols-outlined text-[18px]">menu_book</span>
                </span>
                <span>Programme Modes Explained</span>
              </div>
              <div className="mt-1 h-1 w-32 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />
              <p className="mt-2 text-xs text-slate-700 sm:text-sm">Choose the learning model that fits your lifestyle and goals.</p>
            </div>
            <div className="hidden md:flex items-center gap-2 rounded-full bg-slate-100 p-1 ring-1 ring-slate-200">
              {[
                { key: 'regular', label: 'Regular' },
                { key: 'blended', label: 'Flexible' },
              ].map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => setActiveMode(opt.key as 'regular' | 'blended')}
                  className={`px-4 py-2 text-xs font-semibold rounded-full transition-all ${activeMode === opt.key ? 'bg-sky-600 text-white shadow-sm' : 'bg-transparent text-slate-700 hover:bg-slate-200'}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className={`relative overflow-hidden rounded-3xl ring-1 ring-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${activeMode === 'regular' ? 'md:ring-[#26c1d3] md:shadow-xl' : ''}`}>
              <div className="flex items-center gap-2">
                <span className="inline-flex p-2 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                  <span className="material-symbols-outlined text-[18px]">school</span>
                </span>
                <div className="text-sm font-semibold text-slate-900">Regular On-Campus</div>
              </div>
              <div className="mt-3 grid gap-2">
                {[
                  { icon: 'school', text: 'Weekday classroom learning' },
                  { icon: 'diversity_3', text: 'Workshops, events & campus activities' },
                  { icon: 'handshake', text: 'Direct faculty mentorship' },
                  { icon: 'science', text: 'Hands-on FinTech labs' },
                  { icon: 'groups', text: 'Full campus experience' },
                ].map((f) => (
                  <div key={f.text} className="inline-flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 ring-1 ring-slate-200">
                    <span className="material-symbols-outlined text-[16px] text-sky-700">{f.icon}</span>
                    <span className="text-sm text-slate-700">{f.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button onClick={() => {
                  try {
                    applyNow()
                  } catch (e) {
                    console.error('[PgdmFintechLandingPage] enquiry action failed, dispatching event fallback', e)
                    window.dispatchEvent(new Event('imas:openEnquiryForm'))
                  }
                }} className="rounded-full bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 shadow-lg">Inquire Now</Button>
                <Button onClick={() => setActiveMode('regular')} variant="outline" className="rounded-full border-[#26c1d3] text-[#2e7bb3] hover:bg-[#26c1d3]/10 px-6 py-3">Choose Regular Mode</Button>
              </div>
            </div>

            <div className={`relative overflow-hidden rounded-3xl ring-1 ring-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${activeMode === 'blended' ? 'md:ring-[#26c1d3] md:shadow-xl' : ''}`}>
              <div className="flex items-center gap-2">
                <span className="inline-flex p-2 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                  <span className="material-symbols-outlined text-[18px]">laptop_mac</span>
                </span>
                <div className="text-sm font-semibold text-slate-900">Flexible Blended Learning</div>
              </div>
              <div className="mt-3 grid gap-2">
                {[
                  { icon: 'schedule', text: 'Weekend classes' },
                  { icon: 'cast_for_education', text: 'Live + recorded classes with LMS' },
                  { icon: 'access_time', text: 'Designed for working professionals' },
                  { icon: 'menu_book', text: 'Same curriculum as on-campus' },
                  { icon: 'workspace_premium', text: 'Industry-aligned PGDM certification' },
                  { icon: 'laptop_mac', text: 'Best alternative to online MBA in FinTech' },
                ].map((f) => (
                  <div key={f.text} className="inline-flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 ring-1 ring-slate-200">
                    <span className="material-symbols-outlined text-[16px] text-sky-700">{f.icon}</span>
                    <span className="text-sm text-slate-700">{f.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button onClick={() => {
                  try {
                    applyNow()
                  } catch (e) {
                    console.error('[PgdmFintechLandingPage] enquiry action failed, dispatching event fallback', e)
                    window.dispatchEvent(new Event('imas:openEnquiryForm'))
                  }
                }} className="rounded-full bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 shadow-lg">Inquire Now</Button>
                <Button onClick={() => setActiveMode('blended')} variant="outline" className="rounded-full border-[#26c1d3] text-[#2e7bb3] hover:bg-[#26c1d3]/10 px-6 py-3">Choose Flexible Mode</Button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center justify-center rounded-full bg-sky-50 text-sky-700 px-4 py-2 text-sm font-semibold ring-1 ring-sky-200">Both modes offer the same PGDM certification and specialisation.</span>
            <Button onClick={onDownload} variant="outline" className="inline-flex items-center gap-2 rounded-full border border-[#26c1d3] px-6 py-3 text-sm font-semibold text-[#2e7bb3] hover:bg-[#26c1d3]/10"><Download className="h-4 w-4" />Download Brochure</Button>
          </div>
        </div>
      </section
      >

      <section>

      </section>

      <section id="fintech-learning" className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-sky-50 to-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-10 top-10 h-56 w-56 rounded-full bg-[#26c1d3]/15 blur-3xl" />
          <div className="absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-[#143674]/10 blur-3xl" />
        </div>
        <div data-animate-on-scroll className="relative mx-auto max-w-[1550px] px-4 py-8 transition-all duration-700 ease-out md:py-10">
          <div className="mb-4 flex items-end justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-lg sm:text-2xl font-bold font-sans bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#26c1d3]/20">
                  <BookOpen className="h-4 w-4 text-[#2e7bb3]" />
                </span>
                <span>What You Will Learn in the FinTech Specialisation</span>
              </div>
              <div className="mt-1 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />
              <p className="mt-2 text-xs text-slate-700 sm:text-sm">Ideal for students pursuing future-focused financial technology careers with practical, employable skills.</p>
            </div>
            <Button onClick={onDownload} variant="outline" className="hidden md:inline-flex items-center gap-2 rounded-full border border-[#26c1d3] px-4 py-2 text-xs font-semibold text-[#2e7bb3] hover:bg-[#26c1d3]/10"><Download className="h-4 w-4" />Download Full Curriculum</Button>
          </div>

          <div className="grid grid-flow-col auto-cols-[85%] sm:auto-cols-[45%] md:auto-cols-[auto] gap-3 overflow-x-auto snap-x snap-mandatory md:grid-flow-row md:overflow-visible md:grid-cols-4">
            {[
              { icon: 'payments', title: 'Digital Payments & UPI Infrastructure' },
              { icon: 'currency_bitcoin', title: 'Blockchain Technologies & Cryptocurrency' },
              { icon: 'cognitive_services', title: 'AI & Machine Learning in Finance' },
              { icon: 'smart_toy', title: 'Robo-Advisory & WealthTech Tools' },
              { icon: 'lightbulb', title: 'FinTech Product Development' },
              { icon: 'gavel', title: 'RegTech, Risk & Compliance' },
              { icon: 'security', title: 'Cybersecurity for Financial Systems' },
              { icon: 'account_balance', title: 'Banking, Insurance & Digital Finance Systems' },
            ].map((s) => (
              <div key={s.title} className="snap-start group rounded-xl bg-white p-5 text-left shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex items-center gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-teal-500 text-white">
                    <span className="material-symbols-outlined text-[22px]">{s.icon}</span>
                  </span>
                  <div className="text-sm font-medium text-slate-900">{s.title}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] text-slate-700">
            {[
              'Hands-on FinTech Tools',
              'Real-World Use Cases',
              'Product Building Mindset',
              'Industry Mentorship',
            ].map((t) => (
              <span key={t} className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 shadow-sm ring-1 ring-slate-200">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
                <span className="font-medium">{t}</span>
              </span>
            ))}
          </div>

          <div className="mt-4 md:hidden">
            <Button onClick={onDownload} variant="outline" className="inline-flex items-center gap-2 rounded-full border border-[#26c1d3] px-4 py-2 text-xs font-semibold text-[#2e7bb3] hover:bg-[#26c1d3]/10"><Download className="h-4 w-4" />Download Full Curriculum</Button>
          </div>
        </div>
      </section>

      <section id="program-features" className="border-b border-slate-200 bg-slate-50">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-8 transition-all duration-700 ease-out md:py-10">
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
                    <div className="text-lg sm:text-2xl font-bold font-sans bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">PGDM+ Programme Features</div>
                    <p className="text-[11px] sm:text-xs text-slate-600">Skill-building, real corporate learning & globally recognised certifications. Enhance your employability with tools, training & practical exposure.</p>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: 'workspace_premium', title: 'Global Certification Advantage', desc: 'SAP ERP, Microsoft Project, Six Sigma, Excel' },
                    { icon: 'science', title: 'Experiential Learning', desc: 'Live projects, internships, presentations' },
                    { icon: 'business_center', title: 'Corporate Ready', desc: 'Mentorship, industry visits & communication' },
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
                      <li className="flex items-center gap-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-600" /><span className="text-sm text-slate-700">Corporate Mentorship Programme</span></li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-600" /><span className="text-sm text-slate-700">Industry Visits</span></li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-600" /><span className="text-sm text-slate-700">Communication Training</span></li>
                    </ul>
                  </div>
                </div>

                <Button onClick={onDownload} className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:from-sky-500 hover:to-blue-600">
                  <span className="material-symbols-outlined text-[18px]">description</span>
                  Download PGDM+ Feature Booklet
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="mt-6 md:mt-0 md:col-span-4">
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-gradient-to-br from-[#143674] to-[#2e7bb3] p-4 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="text-[11px] font-semibold uppercase tracking-wide">Corporate Training</div>
                    <div className="relative mt-3 h-28 w-full overflow-hidden rounded-xl">
                      <img
                        src={'/uploads/IMASBUILDING.jpeg'}
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
                      {['SAP ERP', 'Microsoft Project', 'Six Sigma', 'Advanced Excel'].map((b) => (
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


      <section id="careers" className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-10 top-10 h-56 w-56 rounded-full bg-[#26c1d3]/10 blur-3xl" />
          <div className="absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-[#143674]/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-[1550px] px-4 py-10">
          <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#26c1d3]/15">
                <Briefcase className="h-4 w-4 text-[#2e7bb3]" />
              </span>
              <div>
                <div className="text-lg sm:text-2xl font-bold font-sans bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">Career Opportunities</div>
                <div className="mt-1 h-1 w-32 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-700 sm:text-sm">Build your future in high-growth technology-driven financial roles.</p>

            <div className="mt-4 grid grid-flow-col auto-cols-[75%] gap-2 overflow-x-auto snap-x snap-mandatory sm:grid-flow-row sm:overflow-visible sm:grid-cols-2 md:grid-cols-3">
              {jobRoles.map((role) => (
                <span key={role} className="snap-start inline-flex items-center justify-center rounded-full border border-sky-300 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-900 transition-colors hover:bg-sky-600 hover:text-white hover:border-sky-600">
                  {role}
                </span>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { icon: 'rocket_launch', label: 'FinTech Startups' },
                { icon: 'account_balance', label: 'Banks & NBFCs' },
                { icon: 'health_and_safety', label: 'InsurTech' },
                { icon: 'payments', label: 'Digital Payment Apps' },
                { icon: 'terminal', label: 'IT & Tech Firms' },
                { icon: 'stacked_line_chart', label: 'WealthTech Firms' },
              ].map((i) => (
                <div key={i.label} className="inline-flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <span className="inline-flex p-2 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white">
                    <span className="material-symbols-outlined text-[18px]">{i.icon}</span>
                  </span>
                  <span className="text-sm font-medium text-slate-900">{i.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button onClick={() => window.open('/programs/pgdm-plus-fintech', '_blank')} className="rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:from-sky-700 hover:to-blue-800">Explore FinTech Job Opportunities</Button>
              <Button onClick={applyNow} variant="outline" className="inline-flex items-center gap-2 rounded-full border border-[#26c1d3] px-6 py-3 text-sm font-semibold text-[#2e7bb3] hover:bg-[#26c1d3]/10">Talk to a Career Counsellor</Button>
            </div>
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
        <div data-animate-on-scroll className="relative mx-auto max-w-[1550px] px-4 py-8 md:py-10 transition-all duration-700 ease-out">
          <div className="relative overflow-hidden rounded-3xl bg-white/95 ring-1 ring-white/20 p-5 sm:p-6 md:p-8">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#26c1d3]/20">
                <Globe className="h-4 w-4 text-[#2e7bb3]" />
              </span>
              <div>
                <div className="text-lg sm:text-2xl font-bold font-sans bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">International Immersion (On-Campus Only)</div>
                <div className="mt-1 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-700 sm:text-sm">Experience global business environments through immersion in {countries.join(', ')}.</p>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-slate-700">
              {[
                { flag: '🇦🇪', name: 'Dubai' },
                { flag: '🇸🇬', name: 'Singapore' },
                { flag: '🇲🇾', name: 'Malaysia' },
                { flag: '🇹🇭', name: 'Thailand' },
                { flag: '🇻🇳', name: 'Vietnam' },
              ].map((c) => (
                <span key={c.name} className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 shadow-sm ring-1 ring-slate-200">

                  <span className="font-medium">{c.name}</span>
                </span>
              ))}
            </div>
            <div className="mt-5 grid grid-flow-col auto-cols-[85%] sm:auto-cols-[45%] md:auto-cols-[auto] gap-3 overflow-x-auto snap-x snap-mandatory md:grid-flow-row md:overflow-visible md:grid-cols-5">
              {destinationCards.map((d) => (
                <div key={d.name} className="snap-start group relative h-40 sm:h-48 rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-lg">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const t = e.currentTarget as HTMLImageElement
                      t.src = '/uploads/IMASBUILDING.jpeg'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20">
                      <span className="material-symbols-outlined text-[16px]">public</span>
                      <span className="text-sm font-semibold">{d.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <p className="text-xs sm:text-sm text-slate-700">Gain international exposure through industry visits, business workshops, and cultural immersion experiences that connect classroom concepts with real-world global environments.</p>
              <div className="mt-3">
                <Button onClick={() => window.open('/programs/pgdm-plus-fintech', '_blank')} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-md hover:from-sky-500 hover:to-blue-600">
                  View International Experience Details
                  <ExternalLink className="h-4 w-4" />
                </Button>
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
        <div data-animate-on-scroll className="relative mx-auto max-w-[1550px] px-4 py-10 transition-all duration-700 ease-out md:py-14">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-6 space-y-4 text-white">
              <div>
                <div className="flex items-center gap-2 text-lg sm:text-2xl font-bold font-sans bg-gradient-to-r from-white to-[#26c1d3] bg-clip-text text-transparent">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                    <Briefcase className="h-5 w-5 text-white" />
                  </span>
                  <span>Placement Support</span>
                </div>
                <div className="mt-1 h-1 w-28 rounded-full bg-gradient-to-r from-[#26c1d3] to-sky-500" />
              </div>
              <p className="text-xs sm:text-sm text-slate-100/90">Built on career-focused learning and industry partnerships, IMAS offers structured placement support with mentorship, training modules, and strong recruiter engagement.</p>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { label: '100% placement assistance', icon: CheckCircle },
                  { label: 'Resume building + PI training', icon: GraduationCap },
                  { label: 'Corporate workshops', icon: Users },
                  { label: 'Internship and job opportunities', icon: Briefcase },
                  { label: 'Access to 2000+ hiring partners', icon: Globe },
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
            <div className="md:col-span-6">
              <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-600">Placement Snapshot*</div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  {[
                    { label: 'Highest package offered', value: '₹ 18 LPA' },
                    { label: 'Average package', value: '₹ 8.4 LPA' },
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
            <p className="mt-3 text-[11px] text-slate-600">OUR PROUD ALUMNI ARE WORKING WITH.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="eligibility" className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-sky-50 to-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 holo-panels" />
        </div>
        <div className="relative mx-auto max-w-[1550px] px-4 py-10">
          <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#26c1d3]/15">
                <GraduationCap className="h-4 w-4 text-[#2e7bb3]" />
              </span>
              <div>
                <div className="text-lg sm:text-2xl font-bold font-sans bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">Eligibility Criteria</div>
                <div className="mt-1 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-600 sm:text-sm">Who can apply for the MBA / PGDM 2026 programme?</p>
            <div className="mt-4 grid grid-flow-col auto-cols-[85%] gap-3 overflow-x-auto snap-x snap-mandatory sm:grid-flow-row sm:overflow-visible sm:grid-cols-3 sm:auto-cols-[auto]">
              {[
                { icon: 'school', title: "Bachelor's Degree 50%+", color: 'from-sky-500 to-teal-500' },
                { icon: 'assignment_turned_in', title: 'Valid CAT / MAT / CMAT / CUET / XAT / ATMA / GMAT score', color: 'from-teal-500 to-blue-600' },
                { icon: 'badge', title: 'Freshers & Working Professionals', color: 'from-indigo-500 to-sky-500' },
              ].map((c) => (
                <div key={c.title} className="snap-start rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r text-white" style={{ backgroundImage: undefined }}>
                    <span className={`material-symbols-outlined text-[22px] bg-gradient-to-r ${c.color} bg-clip-text text-transparent`}>{c.icon}</span>
                  </div>
                  <div className="mt-3 text-xs sm:text-sm font-semibold text-slate-900">{c.title}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] text-slate-700">
              {[
                'Recognised degree',
                'Score requirement',
                'Open for all streams',
              ].map((t) => (
                <span key={t} className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 shadow-sm ring-1 ring-slate-200">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
                  <span className="font-medium">{t}</span>
                </span>
              ))}
            </div>
            <div className="mt-5">
              <Button onClick={() => window.open('https://admission.imas.ac.in/', '_blank')} className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:from-sky-500 hover:to-blue-600">
                <ExternalLink className="h-4 w-4" />
                Check Eligibility Now
              </Button>
            </div>
            <p className="mt-2 text-[11px] text-slate-600">Open for both new graduates and professionals looking to upgrade their careers.</p>
          </div>
        </div>
      </section>


      <section id="life-at-imas" className="border-b border-slate-200 bg-slate-50">
        <div data-animate-on-scroll className="mx-auto max-w-[1550px] px-4 py-8 transition-all duration-700 ease-out md:py-10">
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
            <div ref={lifeTrackRef} className="grid grid-flow-col auto-cols-[85%] sm:auto-cols-[45%] md:auto-cols-[30%] gap-4 overflow-x-auto snap-x snap-mandatory sm:grid-flow-row sm:overflow-visible sm:grid-cols-3">
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
        <div data-animate-on-scroll className="max-w-[1550px] mx-auto px-4 transition-all duration-700 ease-out">
          <div className="relative overflow-hidden rounded-3xl cta-banner text-white p-6 sm:p-8">
            <div className="pointer-events-none absolute inset-0 cta-lines" />
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div>
                  <div className="text-lg sm:text-2xl font-bold">PGDM in FinTech Admissions Open 2026 — Apply Now</div>
                  <div className="text-[11px] sm:text-xs opacity-90">Take the next step towards a high-impact FinTech career with IMAS.</div>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button onClick={() => {
                    try {
                      applyNow()
                    } catch (e) {
                      console.error('[PgdmFintechLandingPage] enquiry action failed, dispatching event fallback', e)
                      window.dispatchEvent(new Event('imas:openEnquiryForm'))
                    }
                  }} className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:from-sky-500 hover:to-blue-600">
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    Inquire Now
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
                <p className="mt-1 text-sm opacity-90">Plot No 37, Block – Bhangar-II<br />Near St. Xavier’s University<br />Newtown Action Area – III<br />Kolkata, West Bengal – 700160</p>
                <div className="mt-3 space-y-1 text-sm">
                  <p className="inline-flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">call</span><span className="font-semibold">Phone:</span> {IMAS_CONTACT.PHONE}</p>
                  <p className="inline-flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">mail</span><span className="font-semibold">Email:</span> {IMAS_CONTACT.EMAIL}</p>
                  <p className="inline-flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">language</span><span className="font-semibold">Web:</span> www.imas.ac.in</p>
                </div>
                <div className="mt-3">
                  <a href={`tel:${IMAS_CONTACT.PHONE.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#143674] shadow-md transition-all duration-200 hover:-translate-y-0.5">
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


      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-2 shadow-[0_-4px_12px_rgba(15,23,42,0.08)] md:hidden">
        <div className="mx-auto flex max-w-[1550px] items-center justify-between gap-2 text-xs font-semibold">
          <Button
            onClick={() => {
              try {
                applyNow()
              } catch (e) {
                console.error('[PgdmFintechLandingPage] enquiry action failed, dispatching event fallback', e)
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

      <section id="faq" className="py-8 sm:py-12 bg-slate-50">
        <div className="mx-auto max-w-[1550px] px-4">
          <div className="mb-4 max-w-2xl">
            <div className="flex items-center gap-2 text-lg sm:text-2xl font-bold font-sans bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#26c1d3]/20">
                <HelpCircle className="h-4 w-4 text-[#2e7bb3]" />
              </span>
              <span>Frequently Asked Questions</span>
            </div>
            <div className="mt-1 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-sky-600" />
            <p className="mt-2 text-xs text-slate-700 sm:text-sm">Official responses will be published soon. Contact admissions for detailed guidance.</p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {[
              {
                q: 'What are the learning modes available?',
                a: 'The programme is offered in both Regular and Flexible learning modes, making it suitable for students as well as working professionals.',
              },
              {
                q: 'Do you provide placement assistance?',
                a: 'Yes, IMAS provides placement assistance, including career mentoring, skill development sessions, and corporate interaction opportunities. Placement support may vary based on the learning mode and candidate eligibility.',
              },
              {
                q: 'Is there an international immersion component?',
                a: 'Yes, the programme includes an optional International Immersion Programme, offering global exposure through overseas academic interactions, expert sessions, and industry insights. Details are shared prior to participation.',
              },
              {
                q: 'What certifications are included in the program?',
                a: 'The PGDM in FinTech programme includes industry-relevant certifications aligned with finance, analytics, and financial technologies. Specific certifications may vary and are communicated during the programme.',
              },
              {
                q: 'How can I apply or enquire?',
                a: 'You can apply or submit an enquiry through the form available on this page. Our admissions team will contact you with further details and guidance.',
              },
            ].map(({ q, a }) => (
              <details key={q} className="group rounded-2xl bg-white p-4 text-slate-800 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-medium">
                  <span>{q}</span>
                  <span className="text-xs text-slate-500 group-open:hidden">+</span>
                  <span className="hidden text-xs text-slate-500 group-open:inline">−</span>
                </summary>
                <div className="mt-2 text-xs text-slate-600">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
