'use client'

import { motion } from 'framer-motion'

const videoTestimonials = [
  {
    url: "https://player.vimeo.com/video/1155528662?h=002993dc30", // Video 3
    title: "Testimonial 3"
  },
  {
    url: "https://player.vimeo.com/video/1155528676?h=92f2dda880", // Video 4
    title: "Testimonial 4"
  },
  {
    url: "https://player.vimeo.com/video/1155528633?h=c49a92da91", // Video 1
    title: "Testimonial 1"
  },
  {
    url: "https://player.vimeo.com/video/1155528693?h=d3f6586611", // Video 5
    title: "Testimonial 5"
  },
  {
    url: "https://player.vimeo.com/video/1155528643?h=3cf9cb5003", // Video 2
    title: "Testimonial 2"
  }
]

export default function Testimonials() {
  return (
    <section className="bg-[#FAFAFA] py-24 md:py-40 px-4 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium text-black mb-6">
            The Wall of <span className="text-[#0D9488] italic">Spring</span>
          </h2>
          <p className="text-lg md:text-xl text-black/60 font-sans max-w-2xl mx-auto">
            Watch the stories of those who turned their winter into spring.
          </p>
        </motion.div>

        {/* Griglia ottimizzata per simmetria */}
        <div className="flex flex-wrap justify-center gap-8">
          {videoTestimonials.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-black group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <iframe
                src={video.url}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={video.title}
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
