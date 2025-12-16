import { motion } from 'framer-motion'
import { Calendar, AlertCircle } from 'lucide-react'
import WaitlistForm from '../forms/WaitlistForm'
import { useState, useEffect } from 'react'

export default function WaitlistSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  })

  useEffect(() => {
    // Set target date (Frühjahr 2026 - e.g., April 1, 2026)
    const targetDate = new Date('2026-04-01').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="warteliste" className="section gradient-ocean relative">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-white mb-4">Ihr Traumhund wartet</h2>
          <p className="section-subtitle text-sand-light mx-auto">
            Werden Sie Teil unserer exklusiven Welpen-Warteliste
          </p>
        </motion.div>

        {/* Litter Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 md:p-8 mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Calendar size={32} className="text-sand" />
            <div className="text-center">
              <p className="text-sand-light text-sm uppercase tracking-wide mb-1">Nächster Wurf</p>
              <p className="text-white text-2xl font-bold font-heading">Frühjahr 2026</p>
            </div>
          </div>

          {/* Countdown */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center bg-white/5 rounded-lg p-4">
              <div className="text-3xl md:text-4xl font-bold text-white font-heading">
                {timeLeft.days}
              </div>
              <div className="text-sand-light text-sm mt-1">Tage</div>
            </div>
            <div className="text-center bg-white/5 rounded-lg p-4">
              <div className="text-3xl md:text-4xl font-bold text-white font-heading">
                {timeLeft.hours}
              </div>
              <div className="text-sand-light text-sm mt-1">Stunden</div>
            </div>
            <div className="text-center bg-white/5 rounded-lg p-4">
              <div className="text-3xl md:text-4xl font-bold text-white font-heading">
                {timeLeft.minutes}
              </div>
              <div className="text-sand-light text-sm mt-1">Minuten</div>
            </div>
          </div>

          {/* Urgency Element */}
          <motion.div
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center justify-center gap-2 text-sand text-sm font-medium"
          >
            <AlertCircle size={18} />
            <span>Nur noch 3 Plätze auf der Warteliste verfügbar</span>
          </motion.div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 md:p-8"
        >
          <WaitlistForm />
        </motion.div>
      </div>
    </section>
  )
}
