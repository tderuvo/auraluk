import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ExperienceSection from '@/components/ExperienceSection'
import ObservatorySection from '@/components/ObservatorySection'
import RetreatSection from '@/components/RetreatSection'
import CosmosNightsSection from '@/components/CosmosNightsSection'
import GallerySection from '@/components/GallerySection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import CursorGlow from '@/components/CursorGlow'

export default function Home() {
  return (
    <main className="relative bg-void overflow-hidden">
      <CursorGlow />
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <ObservatorySection />
      <RetreatSection />
      <CosmosNightsSection />
      <GallerySection />
      <CTASection />
      <Footer />
    </main>
  )
}
