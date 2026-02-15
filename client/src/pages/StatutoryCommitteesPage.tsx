import React from 'react';
import { Button } from '../components/ui/button';
import { IMAS_TAILWIND_CLASSES } from '../lib/constants';
import { applyNow } from '../lib/utils';
import { Shield, Users, Gavel, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

export function StatutoryCommitteesPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="py-16 bg-gradient-to-br from-gray-900 via-[#143674] to-[#2e7bb3] text-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/uploads/campus_photos/imas_campus.png"
                        alt="IMAS Campus"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gray-900/70"></div>
                </div>
                <div className="relative max-w-[1260px] mx-auto px-4 text-center">
                    <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/20">
                        Statutory Committees – IMAS Kolkata
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">Statutory Committees</h1>
                    <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        IMAS Kolkata has constituted statutory committees as per AICTE, UGC, and Government of India guidelines to ensure a safe, inclusive, and student-centric campus environment.
                    </p>
                </div>
            </section>

            <section className="py-12">
                <div className="max-w-[1000px] mx-auto px-4 space-y-6">
                    <div className="rounded-2xl border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-2">
                            <Shield className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} h-6 w-6`} />
                            <h2 className="text-xl font-bold text-gray-900">Anti-Ragging Committee</h2>
                        </div>
                        <p className="text-gray-700 mb-4">IMAS follows a zero-tolerance policy towards ragging and strictly implements AICTE Anti-Ragging Regulations.</p>
                        <h3 className="text-sm font-semibold text-gray-800 mb-2">Functions</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                            <li className="flex items-start gap-2"><CheckCircle className={`${IMAS_TAILWIND_CLASSES.TEXT_TEAL} h-4 w-4 mt-0.5`} />Prevent ragging in any form</li>
                            <li className="flex items-start gap-2"><CheckCircle className={`${IMAS_TAILWIND_CLASSES.TEXT_TEAL} h-4 w-4 mt-0.5`} />Create awareness among students</li>
                            <li className="flex items-start gap-2"><CheckCircle className={`${IMAS_TAILWIND_CLASSES.TEXT_TEAL} h-4 w-4 mt-0.5`} />Investigate complaints and recommend action</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-2">
                            <AlertTriangle className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} h-6 w-6`} />
                            <h2 className="text-xl font-bold text-gray-900">Anti-Ragging Proctorial Squad</h2>
                        </div>
                        <p className="text-gray-700">A dedicated squad to monitor campus premises and ensure discipline and student safety.</p>
                    </div>

                    <div className="rounded-2xl border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-2">
                            <Gavel className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} h-6 w-6`} />
                            <h2 className="text-xl font-bold text-gray-900">Internal Complaints Committee (ICC)</h2>
                        </div>
                        <p className="text-gray-700 mb-4">(Prevention, Prohibition & Redressal of Sexual Harassment)</p>
                        <p className="text-gray-700 mb-4">Ensures a safe workplace and learning environment for all students and staff in accordance with POSH Act, 2013.</p>
                        <h3 className="text-sm font-semibold text-gray-800 mb-2">Functions</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                            <li className="flex items-start gap-2"><CheckCircle className={`${IMAS_TAILWIND_CLASSES.TEXT_TEAL} h-4 w-4 mt-0.5`} />Address complaints of sexual harassment</li>
                            <li className="flex items-start gap-2"><CheckCircle className={`${IMAS_TAILWIND_CLASSES.TEXT_TEAL} h-4 w-4 mt-0.5`} />Conduct impartial inquiries</li>
                            <li className="flex items-start gap-2"><CheckCircle className={`${IMAS_TAILWIND_CLASSES.TEXT_TEAL} h-4 w-4 mt-0.5`} />Recommend corrective actions</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-2">
                            <Users className={`${IMAS_TAILWIND_CLASSES.TEXT_DARK_BLUE} h-6 w-6`} />
                            <h2 className="text-xl font-bold text-gray-900">Student Grievance Redressal Cell (SGRC)</h2>
                        </div>
                        <p className="text-gray-700 mb-4">A structured mechanism to address academic, administrative, and personal grievances of students.</p>
                        <h3 className="text-sm font-semibold text-gray-800 mb-2">Functions</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                            <li className="flex items-start gap-2"><CheckCircle className={`${IMAS_TAILWIND_CLASSES.TEXT_TEAL} h-4 w-4 mt-0.5`} />Receive & examine grievances</li>
                            <li className="flex items-start gap-2"><CheckCircle className={`${IMAS_TAILWIND_CLASSES.TEXT_TEAL} h-4 w-4 mt-0.5`} />Provide timely resolution</li>
                            <li className="flex items-start gap-2"><CheckCircle className={`${IMAS_TAILWIND_CLASSES.TEXT_TEAL} h-4 w-4 mt-0.5`} />Ensure transparency and fairness</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-gray-200 p-6">
                        <p className="text-gray-800 font-medium">
                            IMAS Kolkata is committed to upholding dignity, equality, and student welfare through these statutory bodies.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-gray-50">
                <div className="max-w-[1000px] mx-auto px-4">
                    <div className="rounded-2xl border border-gray-200 p-6 sm:p-8 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Admission Open – Full-Time Regular Session 2025</h3>
                            <p className="text-gray-700">Take the next step toward a successful management career with IMAS Kolkata.</p>
                        </div>
                        <div className="flex gap-3">
                            <Button className={`${IMAS_TAILWIND_CLASSES.GRADIENT_PRIMARY} text-white`} onClick={applyNow}>
                                Apply Now
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button variant="outline" className="border-[#143674] text-[#143674] hover:bg-[#143674] hover:text-white" onClick={applyNow}>
                                Enquire Now
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

