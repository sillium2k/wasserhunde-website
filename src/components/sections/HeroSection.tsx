import { motion } from 'framer-motion'
import { Heart, ChevronDown } from 'lucide-react'
import Button from '../common/Button'

export default function HeroSection() {
  const scrollToNext = () => {
    const element = document.getElementById('trust-badges')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToWaitlist = () => {
    const element = document.getElementById('warteliste')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070')`,
            filter: 'brightness(0.7)',
          }}
        />
        <div className="absolute inset-0 gradient-overlay" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-accent text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-shadow">
            Born to Win Hearts
          </h1>
        </motion.div>

        <motion.h2
          className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold mb-4 md:mb-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Portugiesische Wasserhunde mit Passion & Excellence
        </motion.h2>

        <motion.p
          className="text-base md:text-lg lg:text-xl text-sand-light/90 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Champions züchten. Herzen gewinnen. Eine historische Rasse bewahren.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            variant="primary"
            size="lg"
            icon={<Heart size={24} />}
            onClick={scrollToWaitlist}
            className="w-full sm:w-auto"
          >
            Jetzt Welpen-Warteliste beitreten
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={scrollToNext}
            className="w-full sm:w-auto"
          >
            Unsere Champions kennenlernen
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-white transition-colors cursor-pointer group"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5 }}
        aria-label="Scroll down"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium tracking-wide">Entdecke unsere Geschichte</span>
          <ChevronDown size={32} className="animate-bounce" />
        </div>
      </motion.button>
    </section>
  )
}
