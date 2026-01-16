import Header from '@/components/shared/Header'
import Hero from '@/components/sections/Hero'
import Story from '@/components/sections/Story'
import WayBack from '@/components/sections/WayBack'
import Impact from '@/components/sections/Impact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Story />
      <WayBack />
      <Impact />
    </main>
  )
}
