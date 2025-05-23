// chat-app/app/components/Landing/Footer.tsx
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const footerSections = [
    {
      title: "Features",
      links: [
        "Shared Inbox for Multiple WhatsApp Numbers",
        "Shared WhatsApp Inbox for Multiple Agents",
        "Manage WhatsApp Groups",
        "Create Tasks and Tickets on WhatsApp",
        "Flag Important Messages on WhatsApp with AI",
        "Schedule Messages to WhatsApp Groups"
      ]
    },
    {
      title: "Integrations",
      links: [
        "Integrate WhatsApp with HubSpot",
        "Integrate WhatsApp with Google Sheets",
        "Integrate WhatsApp with Zapier",
        "Integrate WhatsApp with CRM using Custom WhatsApp API & Webhooks"
      ]
    },
    {
      title: "Company",
      links: [
        "Request a Demo",
        "Blog",
        "Pricing",
        "Security",
        "Privacy",
        "Terms",
        "Cookies"
      ]
    },
    {
      title: "Tools",
      links: [
        "Free WhatsApp Click To Chat Button",
        "Send WhatsApp Without Saving Number",
        "Personal WhatsApp Link Generator",
        "Check if number is on WhatsApp",
        "Get WhatsApp display name and picture"
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Privacy Banner */}
      <motion.div
        className="bg-gray-800 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Your privacy is our top priority</h3>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At Periskope, we're GDPR compliant, which means we go above and beyond to keep your data safe.
            Everything we build is designed with your privacy in mind, so you can focus on growing your business while we handle the protection.
          </p>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="bg-gradient-to-r from-green-600 to-green-700 py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start your free trial today!
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/signup"
                className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Sign up for free
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors">
                Book a Demo
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Supercharge your WhatsApp with a powerful CRM, workflow automation and integrations
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {footerSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h4 className="text-white font-bold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-green-400 transition-colors text-sm leading-relaxed"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="pt-8 border-t border-gray-800 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-400 text-sm mb-4">
              © {new Date().getFullYear()} Periskope. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Trusted by 5000+ businesses worldwide
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}