import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Trophy } from 'lucide-react'
import Button from '../common/Button'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const timeline = [
  {
    year: '2003',
    icon: MapPin,
    title: 'Erste Begegnung mit PWD in Portugal',
    description:
      'Während zwei Jahren an der Atlantikküste verliebte ich mich in die Intelligenz und Arbeitsfreude dieser besonderen Rasse.',
  },
  {
    year: '2010',
    icon: GraduationCap,
    title: 'Studium zur Tierpsychologin',
    description:
      'Zweijähriges Studium für Hund und Pferd mit Schwerpunkt tiergestützte Interventionen. Diese Expertise fließt in jede Zuchtentscheidung ein.',
  },
  {
    year: '2024',
    icon: Trophy,
    title: 'Internationale Ausstellungserfolge',
    description:
      'Mit Stolz präsentieren unsere Hunde mehrfache Champion-Titel auf internationalen Ausstellungen. Anerkennung für jahrelange seriöse Zuchtarbeit.',
  },
]

export default function ExpertiseSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevation-3">
              <img
                src="https://images.unsplash.com/photo-1554224311-beee415c201f?q=80&w=2070"
                alt="Züchterin mit Hunden"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div ref={ref as React.RefObject<HTMLDivElement>} className="lg:col-span-3 order-1 lg:order-2">
            <div className="eyebrow">DIE ZÜCHTERIN</div>
            <h2 className="section-title">Über uns</h2>
            <p className="section-subtitle mb-12">
              Passion für Portugiesische Wasserhunde seit über 20 Jahren
            </p>

            {/* Timeline */}
            <div className="space-y-8 relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-petrol/20" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex gap-6 relative"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-petrol flex items-center justify-center text-white shadow-elevation-2 relative z-10">
                    <item.icon size={28} />
                  </div>

                  {/* Content */}
                  <div className="flex-grow pt-1">
                    <div className="text-3xl font-bold text-petrol font-heading mb-2">{item.year}</div>
                    <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Philosophy Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 p-8 bg-petrol/5 border-l-4 border-petrol rounded-r-xl"
            >
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                Meine Zuchtphilosophie
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Jeder Welpe verdient den besten Start ins Leben. Durch meine Ausbildung als Tierpsychologin
                verstehe ich die komplexen Bedürfnisse von Hunden auf einer tieferen Ebene. Diese Expertise,
                kombiniert mit jahrzehntelanger Erfahrung, ermöglicht es mir, gesunde, wesensfeste und
                sozialisierte Welpen zu züchten, die perfekt auf ihr Leben als Familienmitglied vorbereitet sind.
              </p>
            </motion.div>

            <div className="mt-8">
              <Button variant="outline" onClick={() => window.location.href = '/ueber-uns'}>
                Mehr über unsere Philosophie
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
