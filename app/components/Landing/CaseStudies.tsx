// chat-app/app/components/Landing/CaseStudies.tsx
"use client";

import { motion } from 'framer-motion';

export default function CaseStudies() {
    const caseStudies = [
        {
            industry: "Real Estate",
            title: "How India's largest PropTech manages 5000+ WhatsApp Groups with Periskope",
            description: "Streamlined property inquiries and customer support across multiple WhatsApp groups",
            metrics: "5000+ Groups Managed",
            color: "from-blue-600 to-purple-600"
        },
        {
            industry: "Financial Services",
            title: "How an Indonesian Fintech manages 800+ daily queries on client WhatsApp groups",
            description: "Automated customer support and query resolution for financial services",
            metrics: "800+ Daily Queries",
            color: "from-green-600 to-teal-600"
        },
        {
            industry: "Edtech",
            title: "How an Edtech Manages 12000+ Inquiries Across 20+ Sales WhatsApp Numbers",
            description: "Centralized student inquiry management and automated lead qualification",
            metrics: "12000+ Inquiries",
            color: "from-orange-600 to-red-600"
        }
    ];

    return (
        <section id="case-studies" className="py-24 bg-gray-800">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        How Periskope drives Real Results for Global Companies
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            className="group cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 group-hover:border-green-500 transition-colors">
                                <div className={`h-48 bg-gradient-to-br ${study.color} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/20"></div>
                                    <div className="absolute bottom-6 left-6">
                                        <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium backdrop-blur-sm">
                                            {study.industry}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-green-400 transition-colors">
                                        {study.title}
                                    </h3>

                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {study.description}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-green-400 font-bold">
                                            {study.metrics}
                                        </span>

                                        <div className="text-gray-400 group-hover:text-green-400 transition-colors">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}