import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import Button from '../common/Button'

const champions = [
  {
    name: 'Dina',
    title: 'Internationale Champion, Jugend-Champion',
    description: 'Unsere stolze Hündin mit außergewöhnlichem Wesen',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070',
  },
  {
    name: 'Nero',
    title: 'Jugend-Champion, Anwärter Int. Champion',
    description: 'Kraftvoll, intelligent und arbeitsfreudig',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069',
  },
  {
    name: 'Luna',
    title: 'Champion VDH, Jugend-Champion',
    description: 'Elegante Schönheit mit perfektem Temperament',
    image: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?q=80&w=2070',
  },
]

export default function ChampionsSection() {
  return (
    <section className="section gradient-ocean relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="eyebrow text-sand">UNSERE STOLZEN MOMENTE</div>
          <h2 className="section-title text-white">Unsere Champions</h2>
          <p className="section-subtitle text-sand-light/90 mx-auto">
            Internationale Erfolge, die für Qualität sprechen
          </p>
        </div>

        {/* Champions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {champions.map((champion, index) => (
            <motion.div
              key={champion.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-elevation-2 cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden bg-gray-200">
                <img
                  src={champion.image}
                  alt={champion.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-heading font-bold text-white mb-2">{champion.name}</h3>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {champion.title.split(', ').map((title) => (
                    <span
                      key={title}
                      className="px-3 py-1 bg-gold/90 text-xs font-semibold text-gray-900 rounded-full"
                    >
                      {title}
                    </span>
                  ))}
                </div>

                <p className="text-white/90 text-sm mb-4">{champion.description}</p>

                <div className="flex items-center text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                  Profil ansehen <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>

              {/* Always visible name bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-heading font-bold text-white">{champion.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            variant="secondary"
            size="lg"
            icon={<Trophy size={20} />}
            className="bg-white text-petrol hover:bg-sand hover:text-ocean-blue border-0"
          >
            Alle Erfolge & Ausstellungen sehen
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
