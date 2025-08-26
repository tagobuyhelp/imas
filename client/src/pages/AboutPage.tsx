import React from 'react';
import { MentorsSection, IndustryCollaborationsSection, WhyChooseSection } from '../components/sections/Home';
import { IMAS_TAILWIND_CLASSES } from '../lib/constants';

function AboutHeroSection() {
    return (
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: 'url(/uploads/imas_hero_image1.webp)'}}>
            <div className="absolute inset-0 bg-white bg-opacity-80"></div>
            <div className="max-w-[1260px] mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <div className={`inline-block ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg`}>
                        ABOUT IMAS KOLKATA
                    </div>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                        Learn from Corporate Leaders at{' '}
                        <span className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE}`}>IMAS Kolkata</span>
                    </h1>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100">
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                            <p className="text-lg md:text-xl mb-6 text-gray-800 font-medium">
                                At IMAS Kolkata, we believe that the best management education comes from a fusion of academic brilliance and real-world experience.
                            </p>

                            <p className="mb-6">
                                Our Industry Academic Team brings together top executives, business leaders, and seasoned professionals from globally renowned organizations to guide, mentor, and prepare our students for the competitive corporate world.
                            </p>

                            <p className="mb-6">
                                Through their mentorship, IMAS students gain practical insights, contemporary business knowledge, and critical skills needed to navigate the fast-evolving business landscape.
                            </p>

                            <p className="text-base md:text-lg font-semibold text-gray-900">
                                This approach makes IMAS a truly industry-ready management college in Kolkata.
                            </p>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div className="p-4">
                                    <div className={`w-12 h-12 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-full flex items-center justify-center mx-auto mb-3`}>
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">Industry Leaders</h3>
                                    <p className="text-xs md:text-sm text-gray-600">Learn from top executives and business leaders</p>
                                </div>

                                <div className="p-4">
                                    <div className={`w-12 h-12 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-full flex items-center justify-center mx-auto mb-3`}>
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">Practical Insights</h3>
                                    <p className="text-xs md:text-sm text-gray-600">Gain real-world business knowledge and skills</p>
                                </div>

                                <div className="p-4">
                                    <div className={`w-12 h-12 ${IMAS_TAILWIND_CLASSES.BG_DARK_BLUE} rounded-full flex items-center justify-center mx-auto mb-3`}>
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">Industry Ready</h3>
                                    <p className="text-xs md:text-sm text-gray-600">Prepare for the competitive corporate world</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function AboutPage() {
    return (
        <div className="min-h-screen">
            <AboutHeroSection />
            <MentorsSection />
            <IndustryCollaborationsSection />
            <WhyChooseSection />
        </div>
    );
}