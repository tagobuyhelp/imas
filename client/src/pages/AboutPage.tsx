import React from 'react';
import { MentorsSection, IndustryCollaborationsSection, WhyChooseSection } from '../components/sections/Home';
import { IMAS_TAILWIND_CLASSES } from '../lib/constants';
import { Users, Lightbulb, Zap, Award, CheckCircle, Globe, Target, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { downloadBrochure, applyNow } from '../lib/utils';
import { FAQ } from '../components/FAQ';

function AboutHeroSection() {
    return (
        <section id="about-hero" className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-[#143674] to-[#2e7bb3] relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className={`absolute top-20 left-10 w-20 h-20 ${IMAS_TAILWIND_CLASSES.BG_TEAL}/10 rounded-full animate-pulse`}></div>
                <div className={`absolute top-40 right-20 w-16 h-16 ${IMAS_TAILWIND_CLASSES.BG_MEDIUM_BLUE}/10 rounded-full animate-bounce`} style={{ animationDelay: '1s' }}></div>
                <div className={`absolute bottom-20 left-1/4 w-12 h-12 bg-white/5 rounded-full animate-ping`} style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-teal-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-teal-600/20 rounded-full blur-2xl"></div>
            </div>
            <div className="max-w-[1260px] mx-auto px-4 relative z-10">
                <div className="text-center mb-12 animate-fade-in-up">
                    <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg border border-white/20">
                        ABOUT IMAS KOLKATA
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Learn from Corporate Leaders at{' '}
                        <span className={`${IMAS_TAILWIND_CLASSES.TEXT_TEAL} animate-pulse`}>IMAS Kolkata</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                        India's premier management institute where industry expertise meets academic excellence
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Main Content Card */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/20 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#143674] to-[#2e7bb3] text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                                <Award className="w-4 h-4" />
                                OUR MISSION
                            </div>
                        </div>
                        
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                            <p className="text-xl md:text-2xl mb-8 text-gray-800 font-semibold text-center leading-relaxed">
                                At IMAS Kolkata, we believe that the best management education comes from a fusion of academic brilliance and real-world experience.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-4">
                                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                        Our Industry Academic Team brings together top executives, business leaders, and seasoned professionals from globally renowned organizations to guide, mentor, and prepare our students for the competitive corporate world.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                        Through their mentorship, IMAS students gain practical insights, contemporary business knowledge, and critical skills needed to navigate the fast-evolving business landscape.
                                    </p>
                                </div>
                            </div>

                            <div className="text-center p-6 bg-gradient-to-r from-[#143674]/5 to-[#2e7bb3]/5 rounded-2xl border border-[#143674]/10">
                                <p className="text-lg md:text-xl font-bold text-[#143674] mb-2">
                                    This approach makes IMAS a truly industry-ready management college in Kolkata.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                                    <Button 
                                        className={`${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} hover:from-[#2e7bb3] hover:to-[#26c1d3] text-white px-8 py-3 text-base font-semibold hover:scale-105 transition-all duration-300`}
                                        onClick={applyNow}
                                    >
                                        Apply Now
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                    <Button 
                                        variant="outline" 
                                        className="border-[#143674] text-[#143674] hover:bg-[#143674] hover:text-white px-8 py-3 text-base font-semibold hover:scale-105 transition-all duration-300"
                                        onClick={downloadBrochure}
                                    >
                                        Download Brochure
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    {/* Key Highlights Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20">
                            <div className="relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#143674]/10 to-[#2e7bb3]/10 rounded-full -translate-y-8 translate-x-8"></div>
                                <div className={`w-16 h-16 bg-gradient-to-br from-[#143674] to-[#2e7bb3] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}>
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 text-center">Industry Leaders</h3>
                                <p className="text-sm md:text-base text-gray-600 text-center leading-relaxed">Learn from top executives and business leaders with decades of experience</p>
                            </div>
                        </div>

                        <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20">
                            <div className="relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#2e7bb3]/10 to-[#26c1d3]/10 rounded-full -translate-y-8 translate-x-8"></div>
                                <div className={`w-16 h-16 bg-gradient-to-br from-[#2e7bb3] to-[#26c1d3] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}>
                                    <Lightbulb className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 text-center">Practical Insights</h3>
                                <p className="text-sm md:text-base text-gray-600 text-center leading-relaxed">Gain real-world business knowledge and critical thinking skills</p>
                            </div>
                        </div>

                        <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20">
                            <div className="relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#26c1d3]/10 to-[#143674]/10 rounded-full -translate-y-8 translate-x-8"></div>
                                <div className={`w-16 h-16 bg-gradient-to-br from-[#26c1d3] to-[#143674] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}>
                                    <Zap className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 text-center">Industry Ready</h3>
                                <p className="text-sm md:text-base text-gray-600 text-center leading-relaxed">Prepare for the competitive corporate world with confidence</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Additional Stats Section */}
                    <div className="mt-12 bg-gradient-to-r from-[#143674] to-[#2e7bb3] rounded-3xl p-8 lg:p-12 text-white text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                            <div className="group">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <CheckCircle className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-2xl lg:text-3xl font-bold mb-1">100%</div>
                                <div className="text-sm opacity-90">Placement Rate</div>
                            </div>
                            <div className="group">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <Globe className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-2xl lg:text-3xl font-bold mb-1">50+</div>
                                <div className="text-sm opacity-90">Global Partners</div>
                            </div>
                            <div className="group">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-2xl lg:text-3xl font-bold mb-1">15+</div>
                                <div className="text-sm opacity-90">Years Experience</div>
                            </div>
                            <div className="group">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-2xl lg:text-3xl font-bold mb-1">AICTE</div>
                                <div className="text-sm opacity-90">Approved</div>
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
            <FAQ />
        </div>
    );
}