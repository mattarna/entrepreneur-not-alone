import Header from '@/components/shared/Header'
import Hero from '@/components/sections/Hero'
import VSLSection from '@/components/sections/VSLSection'
import Story from '@/components/sections/Story'
import WayBack from '@/components/sections/WayBack'
import Impact from '@/components/sections/Impact'
import Reinforcement from '@/components/sections/Reinforcement'
import ActionSection from '@/components/sections/ActionSection'
import ClosingMessage from '@/components/sections/ClosingMessage'
import EmotionalClose from '@/components/sections/EmotionalClose'
import Footer from '@/components/shared/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <div id="vsl-section">
        <VSLSection />
      </div>
      <Story />
      <WayBack />
      <Impact />
      <Reinforcement />
      <ActionSection />
      <ClosingMessage />
      <EmotionalClose />
      <Footer />
    </main>
  )
}
