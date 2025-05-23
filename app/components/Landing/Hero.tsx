// chat-app/app/components/Landing/Hero.tsx
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20 pb-24">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-green-500/5 to-transparent rounded-full"></div>
            </div>

            {/* Announcement Bar */}
            <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full">
                    <span className="text-green-400 text-sm font-medium">🚀 Periskope Launch Week 8 Is Here!</span>
                    <svg className="ml-2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center">
                    {/* Main Heading */}
                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-white">Manage </span>
                        <span className="text-green-400">WhatsApp Groups</span>
                        <br />
                        <span className="text-white">and </span>
                        <span className="text-green-400">Chats </span>
                        <span className="text-white">at scale</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Connect multiple numbers, create tasks & tickets, integrate with your systems,
                        and automate your workflows on WhatsApp
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/signup"
                                className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg shadow-green-600/25"
                            >
                                Sign Up for Free
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                                Book a Demo
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Subtext */}
                    <motion.p
                        className="text-gray-400 text-sm mb-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        Connect any WhatsApp Number. No WhatsApp Business API Required.
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                    >
                        <p className="text-gray-300 text-lg mb-8">Powering 5000+ businesses across 50+ countries</p>

                        {/* Client Logos */}
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
                            {/* Logo placeholders - you can replace with actual client logos */}
                            {['Plum', 'Treebo', 'Zostel', 'VividSeats', 'Great Learning'].map((company, index) => (
                                <motion.div
                                    key={company}
                                    className="text-gray-400 text-center font-semibold"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                                >
                                    {company}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Feature Preview Cards */}
                    <motion.div
                        className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                    >
                        <motion.div
                            className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm"
                            whileHover={{ y: -5, borderColor: '#10b981' }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Multi-Number Inbox</h3>
                            <p className="text-gray-400">Connect multiple WhatsApp numbers to one shared inbox with team access.</p>
                        </motion.div>

                        <motion.div
                            className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm"
                            whileHover={{ y: -5, borderColor: '#10b981' }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Create Tickets & Tasks</h3>
                            <p className="text-gray-400">Turn customer queries into tickets and integrate with your CRM systems.</p>
                        </motion.div>

                        <motion.div
                            className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm"
                            whileHover={{ y: -5, borderColor: '#10b981' }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Automate Actions</h3>
                            <p className="text-gray-400">Automate replies, tasks, and actions on WhatsApp groups & chats.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Floating Chat Button */}
            <motion.div
                className="fixed bottom-6 right-6 z-40"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
            >
                <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
                    </svg>
                </button>
            </motion.div>
        </section>
    );
}