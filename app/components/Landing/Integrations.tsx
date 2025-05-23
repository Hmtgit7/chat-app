// chat-app/app/components/Landing/Integrations.tsx
"use client";

import { motion } from 'framer-motion';

export default function Integrations() {
    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            title: "Custom APIs & Webhooks",
            description: "Connect with internal systems to manage multiple WhatsApp numbers, groups & chats with custom APIs & Webhooks"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: "AI-enabled Productivity",
            description: "Use AI to auto flag important queries, summarize chats and draft responses with complete context"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Automated Actions",
            description: "Automate replies, send messages, create tickets, forward chats, and more with a powerful custom rules engine."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 3v10a2 2 0 002 2h8a2 2 0 002-2V7H6z" />
                </svg>
            ),
            title: "Media & Exports",
            description: "Easily manage and export media, group members and properties, conversations, messages and more."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: "Team & Chat Analytics",
            description: "Monitor message volumes, open rates, response times, and unresolved queries for each team member in real-time."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "5 Min Onboarding",
            description: "Connect any WhatsApp numbers and sync chats in <5 minutes. No Business API required."
        }
    ];

    const integrationLogos = [
        'HubSpot', 'Google Sheets', 'Zapier', 'Slack', 'Freshdesk', 'Zoho'
    ];

    return (
        <section id="integrations" className="py-24 bg-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                {/* Main Features Grid */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Improve Productivity, Automate Actions & Connect with your Systems
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-green-500 transition-colors group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4 text-white group-hover:bg-green-500 transition-colors">
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                                {feature.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>

                            <div className="mt-4">
                                <span className="text-green-400 text-sm font-medium cursor-pointer hover:text-green-300 transition-colors">
                                    Learn more →
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonial */}
                <motion.div
                    className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="text-green-400 text-4xl mb-6">"</div>
                        <blockquote className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
                            For companies that rely on WhatsApp, Periskope is the perfect tool. We use it to automate both internal & external communications. APIs are integrable with any CRM and service is super fast with a reply TAT of 15 min. Highly recommended!
                        </blockquote>
                        <div className="flex items-center justify-center">
                            <div>
                                <div className="font-bold text-white">Aman Jain</div>
                                <div className="text-gray-400">Head of Strategy, Elivaas</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Native Integrations */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-3xl font-bold text-white mb-4">
                        Native integrations to connect WhatsApp with your favorite apps
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mt-12 opacity-60">
                        {integrationLogos.map((logo, index) => (
                            <motion.div
                                key={index}
                                className="text-gray-400 text-center font-semibold hover:text-green-400 transition-colors cursor-pointer"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                {logo}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}