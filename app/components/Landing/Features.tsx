// chat-app/app/components/Landing/Features.tsx
"use client";

import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
      ),
      title: "MULTI-NUMBER INBOX",
      heading: "Gain complete visibility and control over your team's WhatsApp conversations",
      features: [
        "Multi-number inbox: connect multiple numbers to one shared inbox. Works with any WhatsApp number.",
        "Team access: enable your entire team to view and respond to messages without direct WhatsApp access",
        "Track metrics: monitor key metrics like response rates and times, unanswered questions, and more.",
        "Works with any number: does not require WhatsApp business API. Works with any WhatsApp number."
      ],
      image: "/api/placeholder/600/400"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "CREATE TICKETS & TASKS",
      heading: "Effortlessly flag important messages and manage customer queries",
      features: [
        "Create tickets: Instantly turn any customer query across group or 1:1 chats into tickets.",
        "Flag important queries: automatically identify and flag important queries with AI or use emojis to create tasks",
        "Integrate with your systems: easily sync and push tickets to HubSpot, Freshdesk, Zoho, Slack, and more.",
        "Track metrics: monitor unanswered questions, open tickets, resolution times, & agent performance"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "MANAGE GROUPS",
      heading: "Purpose built for WhatsApp group and community management",
      features: [
        "Scheduled messaging: schedule and send messages to WhatsApp groups & contacts in one click",
        "Role based permissions: set role-based permissions for team members to send messages, respond to queries etc",
        "Detailed group analytics: get insights on message volume, open rates, response times and unanswered queries",
        "Automate groups actions: automatically create groups, send messages, raise tickets and more with custom rules"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "AUTOMATE ACTIONS",
      heading: "Automate replies, tasks & actions on WhatsApp groups & chats",
      features: [
        "Automated Replies: Instantly respond to messages with certain keywords or outside business hours",
        "Automated Ticketing: automatically create tickets from customer queries or flagged messages",
        "Auto-assign chats: distribute new chats and tasks to individual agents based on pre-set rules",
        "Automated Notifications: get notified instantly for SLA breaches or messages from key contacts"
      ],
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The only platform you need to automate your day to day business on WhatsApp
          </h2>
        </motion.div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-white">
                  {feature.icon}
                </div>

                <h3 className="text-green-400 text-sm font-bold tracking-wider mb-3">
                  {feature.title}
                </h3>

                <h4 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                  {feature.heading}
                </h4>

                <ul className="space-y-4 mb-8">
                  {feature.features.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + itemIndex * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">{item}</p>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  className="px-6 py-3 bg-transparent border border-green-600 text-green-400 rounded-lg hover:bg-green-600 hover:text-white transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a Demo
                </motion.button>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
                    <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          {feature.icon}
                        </div>
                        <p className="text-gray-400">Feature Demo</p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full opacity-20"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}