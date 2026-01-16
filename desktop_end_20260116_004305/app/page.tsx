import Header from '@/components/shared/Header'
import Hero from '@/components/sections/Hero'
import Story from '@/components/sections/Story'
import WayBack from '@/components/sections/WayBack'
import Impact from '@/components/sections/Impact'
import Reinforcement from '@/components/sections/Reinforcement'
import ActionSection from '@/components/sections/ActionSection'
import ClosingMessage from '@/components/sections/ClosingMessage'
import EmotionalClose from '@/components/sections/EmotionalClose'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Story />
      <WayBack />
      <Impact />
      <Reinforcement />
      <ActionSection />
      <ClosingMessage />
      <EmotionalClose />
    </main>
  )
}
