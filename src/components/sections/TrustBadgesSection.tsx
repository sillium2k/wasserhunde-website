import { motion } from 'framer-motion'
import { Shield, Trophy, Dna, Heart } from 'lucide-react'

const badges = [
  {
    icon: Shield,
    title: 'FCI + VDH Excellence',
    subtitle: 'Geprüfte Zuchtstandards',
  },
  {
    icon: Trophy,
    title: 'Internationale Champions',
    subtitle: 'Mehrfache Titelträger',
  },
  {
    icon: Dna,
    title: 'Erweiterte Genetiktests',
    subtitle: 'Über VDH-Standard hinaus',
  },
  {
    icon: Heart,
    title: '20+ Jahre Expertise',
    subtitle: 'Mit Portugiesischen Wasserhunden',
  },
]

export default function TrustBadgesSection() {
  return (
    <section id="trust-badges" className="section bg-sand py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)' }}
              className="bg-white rounded-xl p-8 text-center transition-all duration-300 shadow-elevation-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-petrol/10 mb-6">
                <badge.icon size={32} className="text-petrol" />
              </div>
              <h3 className="font-heading text-lg md:text-xl font-bold text-gray-900 mb-2">
                {badge.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600">{badge.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-block px-8 py-4 bg-petrol text-white rounded-full font-heading font-semibold text-base md:text-lg shadow-elevation-2">
            Tierpsychologin & Zuchtexpertin
          </div>
        </motion.div>
      </div>
    </section>
  )
}
