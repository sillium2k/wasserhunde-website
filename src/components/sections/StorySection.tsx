import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import Button from '../common/Button'
import WaveDivider from '../common/WaveDivider'

export default function StorySection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className="bg-white section relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            ref={ref as React.RefObject<HTMLDivElement>}
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevation-3">
              <img
                src="https://images.unsplash.com/photo-1527526029430-319f10814151?q=80&w=2070"
                alt="Portugiesische Wasserhunde am Atlantik"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white text-sm italic">Portugiesische Wasserhunde am Atlantik</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="eyebrow">UNSERE MISSION</div>
            <h2 className="section-title">Die Rettung einer Legende</h2>
            <div className="w-24 h-1 bg-petrol rounded-full mb-8" />

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg md:text-xl font-semibold text-gray-900">
                1970 gab es weltweit nur noch 50 portugiesische Wasserhunde. Die Rasse stand am Rande
                des Aussterbens.
              </p>

              <p className="text-base md:text-lg">
                Heute züchten wir mit Leidenschaft für den Erhalt dieser historischen Arbeitsrasse –
                gesund, wesensfest, typgerecht.
              </p>

              <p className="text-base md:text-lg">
                Unsere Zuchtphilosophie basiert auf wissenschaftlichen Erkenntnissen, erweiterten
                Gesundheitstests und einem tiefen Verständnis für das Wesen dieser besonderen Rasse.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6 my-10 p-8 bg-sand/30 rounded-xl">
              <div className="text-center">
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-petrol font-heading"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  50
                </motion.div>
                <p className="text-sm md:text-base text-gray-600 mt-2">Hunde weltweit 1970</p>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-petrol font-heading"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  5000+
                </motion.div>
                <p className="text-sm md:text-base text-gray-600 mt-2">Heute</p>
              </div>
            </div>

            <Button variant="outline" onClick={() => window.location.href = '/ueber-uns'}>
              Unsere Zuchtphilosophie
            </Button>
          </motion.div>
        </div>
      </div>

      <WaveDivider color="#088395" className="mt-20" />
    </section>
  )
}
