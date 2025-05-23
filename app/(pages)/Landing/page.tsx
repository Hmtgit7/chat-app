// chat-app/app/(pages)/Landing/page.tsx
import Header from "@/app/components/Landing/Header"
import Hero from "@/app/components/Landing/Hero"
import Features from "@/app/components/Landing/Features"
import CaseStudies from "@/app/components/Landing/CaseStudies"
import Integrations from "@/app/components/Landing/Integrations"
import Footer from "@/app/components/Landing/Footer"

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <CaseStudies />
        <Integrations />
      </main>
      <Footer />
    </div>
  )
}