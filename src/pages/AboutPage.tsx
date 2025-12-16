import { motion } from 'framer-motion'
import { Heart, Award, BookOpen, Users, Target, Shield } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const philosophyPillars = [
  {
    icon: Heart,
    title: 'Gesundheit an erster Stelle',
    description: 'Umfangreiche Gesundheitstests über VDH-Standard hinaus. HD, ED, Augenuntersuchungen und erweiterte DNA-Tests sind für uns selbstverständlich.',
  },
  {
    icon: Users,
    title: 'Wesensfestigkeit & Typgerecht',
    description: 'Wir züchten für Charakter und Wesen. Jeder Welpe soll das typische PWD-Temperament zeigen: intelligent, arbeitsfreudig, menschenbezogen.',
  },
  {
    icon: Shield,
    title: 'Rasseerhalt mit Verantwortung',
    description: 'Die Rettung dieser fast ausgestorbenen Rasse ist unsere Mission. Wir züchten nach FCI-Standard und mit Blick auf genetische Vielfalt.',
  },
  {
    icon: BookOpen,
    title: 'Transparenz & Seriosität',
    description: 'Offene Kommunikation, alle Gesundheitsergebnisse einsehbar, Besichtigungen erwünscht. Sie sollen zu 100% überzeugt sein.',
  },
  {
    icon: Target,
    title: 'Lebenslange Betreuung',
    description: 'Nach dem Welpenkauf beginnt unsere Beziehung erst. Wir sind lebenslang für Sie und Ihren Hund da - mit Rat und Tat.',
  },
]

const timeline = [
  {
    year: '1995',
    title: 'Kindheit mit Hunden',
    description: 'Schon als Kind war ich von Hunden fasziniert. Meine Familie hatte immer Hunde, und ich verbrachte jede freie Minute mit ihnen.',
  },
  {
    year: '2003',
    title: 'Portugal - Die erste Begegnung',
    description: 'Während eines zweijährigen Aufenthalts an der portugiesischen Atlantikküste begegnete ich zum ersten Mal Portugiesischen Wasserhunden. Ihre Intelligenz, Arbeitsfreude und der enge Bezug zu ihren Menschen faszinierten mich sofort.',
  },
  {
    year: '2005',
    title: 'Rückkehr nach Deutschland',
    description: 'Nach meiner Zeit in Portugal stand fest: Wenn ich züchte, dann Portugiesische Wasserhunde. Ich begann, mich intensiv mit der Rasse zu beschäftigen und Kontakte zu Züchtern zu knüpfen.',
  },
  {
    year: '2010',
    title: 'Ausbildung zur Tierpsychologin',
    description: 'Zweijähriges Studium für Hund und Pferd mit Schwerpunkt tiergestützte Interventionen. Diese fundierte Ausbildung gibt mir ein tiefes Verständnis für Hundeverhalten und -bedürfnisse.',
  },
  {
    year: '2015',
    title: 'Gründung "Born to Win Hearts"',
    description: 'Mit unserem ersten eigenen PWD und dem VDH-Zwingernamen startete unsere Zucht offiziell. Von Anfang an mit dem Ziel: Qualität vor Quantität.',
  },
  {
    year: '2018',
    title: 'Erster Wurf',
    description: 'Unser erster Wurf war ein voller Erfolg. Alle Welpen entwickelten sich prächtig und leben heute glücklich in ihren Familien.',
  },
  {
    year: '2020',
    title: 'Erste Ausstellungserfolge',
    description: 'Unsere Hunde beginnen, auf nationalen und internationalen Ausstellungen zu brillieren. Die ersten Champion-Titel werden errungen.',
  },
  {
    year: '2024',
    title: 'Internationale Anerkennung',
    description: 'Heute sind wir stolz auf mehrere Internationale Champions und werden in der PWD-Community geschätzt. Unser Fokus bleibt: gesunde, wesensfeste Welpen für die richtigen Menschen.',
  },
]

const qualifications = [
  {
    year: '2010',
    title: 'Tierpsychologin für Hund & Pferd',
    institution: 'Tierpsychologie Akademie',
  },
  {
    year: '2015',
    title: 'VDH Zuchtzulassung',
    institution: 'Verband für das Deutsche Hundewesen',
  },
  {
    year: '2016',
    title: 'Fachseminar Hundegenetik',
    institution: 'Universität München',
  },
  {
    year: '2018',
    title: 'Spezialisierung tiergestützte Therapie',
    institution: 'Institut für tiergestützte Interventionen',
  },
  {
    year: '2020',
    title: 'FCI Richter-Anwärter',
    institution: 'Fédération Cynologique Internationale',
  },
]

export default function AboutPage() {
  const { ref: pillarsRef, isVisible: pillarsVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069')`,
            filter: 'brightness(0.6)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />

        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="eyebrow text-sand">UNSERE GESCHICHTE</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Über uns
            </h1>
            <p className="text-xl md:text-2xl text-sand-light max-w-3xl mx-auto">
              Passion für Portugiesische Wasserhunde seit über 20 Jahren
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="section bg-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="section-title">Die Reise zu Born to Win Hearts</h2>
            <p className="section-subtitle mx-auto">
              Von der ersten Begegnung zur professionellen Zucht
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-petrol/20 hidden lg:block" />

            {timeline.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`mb-12 lg:mb-16 flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-sand/30 rounded-xl p-6 lg:p-8">
                    <div className="text-3xl font-bold text-petrol font-heading mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{event.description}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden lg:block relative flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-petrol border-4 border-white shadow-lg" />
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section ref={pillarsRef as React.RefObject<HTMLElement>} className="section bg-gradient-ocean">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="eyebrow text-sand">UNSERE WERTE</div>
            <h2 className="section-title text-white mb-6">Unsere Zuchtphilosophie</h2>
            <div className="max-w-3xl mx-auto mb-8">
              <blockquote className="text-2xl md:text-3xl font-accent italic text-sand-light leading-relaxed">
                "Wir züchten nicht einfach Hunde. Wir bewahren eine Legende und schaffen
                Lebenspartner für die richtigen Menschen."
              </blockquote>
            </div>
          </div>

          {/* 5 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {philosophyPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={pillarsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-sand/90 flex items-center justify-center mb-4">
                  <pillar.icon size={28} className="text-ocean-blue" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sand-light/90 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="section bg-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="section-title">Qualifikationen & Zertifikate</h2>
            <p className="section-subtitle mx-auto">
              Fundierte Ausbildung für verantwortungsvolle Zucht
            </p>
          </div>

          <div className="space-y-4">
            {qualifications.map((qual, index) => (
              <motion.div
                key={qual.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-sand/20 rounded-xl p-6 flex items-center gap-6 hover:bg-sand/30 transition-colors"
              >
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="text-2xl font-bold text-petrol font-heading">{qual.year}</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-1">
                    {qual.title}
                  </h3>
                  <p className="text-gray-600">{qual.institution}</p>
                </div>
                <div className="flex-shrink-0">
                  <Award className="text-petrol" size={28} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="section bg-sand/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Einblicke in unseren Alltag</h2>
            <p className="section-subtitle mx-auto">
              Hinter den Kulissen von Born to Win Hearts
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=500',
              'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=500',
              'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?q=80&w=500',
              'https://images.unsplash.com/photo-1527526029430-319f10814151?q=80&w=500',
              'https://images.unsplash.com/photo-1554224311-beee415c201f?q=80&w=500',
              'https://images.unsplash.com/photo-1541599468348-e96984315921?q=80&w=500',
              'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=500',
              'https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=500',
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square overflow-hidden rounded-xl shadow-elevation-2 cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Einblick ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section gradient-ocean">
        <div className="container-custom text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title text-white mb-6">
              Lernen Sie uns persönlich kennen
            </h2>
            <p className="text-xl text-sand-light mb-8">
              Nichts ersetzt ein persönliches Gespräch. Besuchen Sie uns, lernen Sie unsere Hunde
              kennen, und überzeugen Sie sich selbst von unserer Zucht.
            </p>
            <button
              onClick={() => window.location.href = '/kontakt'}
              className="btn btn-secondary btn-lg"
            >
              Kennenlerngespräch vereinbaren
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
