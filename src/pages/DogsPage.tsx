import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dog, Heart, Trophy, CheckCircle, Download, Calendar } from 'lucide-react'
import Tabs from '../components/common/Tabs'

const tabs = [
  { id: 'females', label: 'Hündinnen', icon: <Heart size={20} /> },
  { id: 'puppies', label: 'Welpen', icon: <Dog size={20} /> },
  { id: 'achievements', label: 'Erfolge', icon: <Trophy size={20} /> },
]

const females = [
  {
    id: 'dina',
    officialName: 'Born to Win Hearts Dina',
    callName: 'Dina',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=800',
    birthDate: '15.03.2019',
    gender: 'Hündin',
    color: 'Schwarz',
    coatType: 'Lockig',
    titles: ['Internationale Champion', 'Jugend-Champion', 'VDH Champion'],
    character: 'Dina ist unsere stolze Leithündin mit einem außergewöhnlichen Wesen. Sie ist intelligent, arbeitsfreudig und gleichzeitig sanft und geduldig. Ihre Ausstrahlung und Eleganz machen sie zu einem echten Champion - nicht nur auf dem Papier. Mit Kindern ist sie liebevoll und geduldig, beim Training hochkonzentriert und motiviert.',
    health: [
      { test: 'HD (Hüftdysplasie)', result: 'A1/A1 (frei)' },
      { test: 'ED (Ellbogendysplasie)', result: '0/0 (frei)' },
      { test: 'Augenuntersuchung', result: 'Frei (2024)' },
      { test: 'DNA-Profil', result: 'Hinterlegt' },
      { test: 'GM1-Gangliosidose', result: 'Frei' },
      { test: 'PRA-prcd', result: 'Frei' },
    ],
    achievements: [
      { date: '2020-08-15', event: 'Bundessieger Ausstellung Dortmund', result: 'Jugend-Champion-Titel' },
      { date: '2021-05-20', event: 'Int. Ausstellung Wien', result: 'CACIB, BOB' },
      { date: '2022-03-10', event: 'Int. Ausstellung Amsterdam', result: 'Int. Champion-Titel' },
    ],
  },
  {
    id: 'luna',
    officialName: 'Born to Win Hearts Luna',
    callName: 'Luna',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800',
    birthDate: '22.07.2020',
    gender: 'Hündin',
    color: 'Braun',
    coatType: 'Wellig',
    titles: ['Jugend-Champion', 'Champion VDH'],
    character: 'Luna ist unsere Wasserratte schlechthin. Kaum ein Gewässer ist vor ihr sicher! Sie ist extrem verspielt, freundlich und aufgeschlossen. Ihre Energie scheint unerschöpflich, dennoch kann sie im Haus zur Ruhe kommen. Luna ist die perfekte Botschafterin für die Rasse: charmant, intelligent und immer gut gelaunt.',
    health: [
      { test: 'HD (Hüftdysplasie)', result: 'A2/A2 (frei)' },
      { test: 'ED (Ellbogendysplasie)', result: '0/0 (frei)' },
      { test: 'Augenuntersuchung', result: 'Frei (2024)' },
      { test: 'DNA-Profil', result: 'Hinterlegt' },
      { test: 'GM1-Gangliosidose', result: 'Frei' },
      { test: 'PRA-prcd', result: 'Frei' },
    ],
    achievements: [
      { date: '2021-06-12', event: 'Nationale Ausstellung Hamburg', result: 'Jugend-Champion' },
      { date: '2022-09-05', event: 'Bundessieger Ausstellung', result: 'VDH Champion' },
    ],
  },
]

const puppies = {
  current: null, // Keine aktuellen Welpen
  planned: {
    date: 'Frühjahr 2026',
    mother: 'Dina',
    father: 'To be announced',
    expectedCount: '2-3',
    colors: ['Schwarz', 'Braun'],
  },
}

const achievements = [
  {
    date: '2024-10-15',
    event: 'Int. Ausstellung Leipzig',
    dog: 'Dina',
    judge: 'Mrs. Jane Smith (UK)',
    result: 'Excellent 1, CACIB, BOB',
    title: null,
  },
  {
    date: '2024-08-20',
    event: 'Nationale Ausstellung München',
    dog: 'Luna',
    judge: 'Hr. Klaus Müller (DE)',
    result: 'Excellent 1, CAC',
    title: null,
  },
  {
    date: '2024-05-12',
    event: 'Int. Ausstellung Wien',
    dog: 'Dina',
    judge: 'Mr. John Doe (AT)',
    result: 'Excellent 1, CACIB',
    title: null,
  },
  {
    date: '2023-11-18',
    event: 'Bundessieger Ausstellung Dortmund',
    dog: 'Luna',
    judge: 'Mrs. Anna Schmidt (DE)',
    result: 'Excellent 1, CAC, BOB',
    title: 'VDH Champion',
  },
  {
    date: '2023-09-05',
    event: 'Int. Ausstellung Amsterdam',
    dog: 'Dina',
    judge: 'Mr. Peter van Dam (NL)',
    result: 'Excellent 1, CACIB, BOS',
    title: null,
  },
  {
    date: '2023-06-22',
    event: 'Int. Ausstellung Paris',
    dog: 'Dina',
    judge: 'Mrs. Marie Dubois (FR)',
    result: 'Excellent 1, CACIB',
    title: 'Internationale Champion',
  },
]

export default function DogsPage() {
  const [activeTab, setActiveTab] = useState('females')

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?q=80&w=2070')`,
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Unsere Hunde
            </h1>
            <p className="text-xl md:text-2xl text-sand-light max-w-3xl mx-auto">
              Champions mit Herz und Verstand
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white sticky top-20 z-40 shadow-sm">
        <div className="container-custom">
          <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        </div>
      </section>

      {/* Tab Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            {/* FEMALES TAB */}
            {activeTab === 'females' && (
              <motion.div
                key="females"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-16">
                  {females.map((dog) => (
                    <div key={dog.id} className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                      {/* Image Gallery */}
                      <div className="lg:col-span-2">
                        <div className="sticky top-32">
                          <div className="rounded-2xl overflow-hidden shadow-elevation-3 mb-4">
                            <img
                              src={dog.image}
                              alt={dog.callName}
                              className="w-full aspect-[3/4] object-cover"
                            />
                          </div>
                          {/* Thumbnail Gallery - Placeholder */}
                          <div className="grid grid-cols-4 gap-2">
                            {[1, 2, 3, 4].map((i) => (
                              <div
                                key={i}
                                className="aspect-square rounded-lg overflow-hidden opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
                              >
                                <img
                                  src={dog.image}
                                  alt={`${dog.callName} ${i}`}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="lg:col-span-3">
                        <div className="mb-8">
                          <p className="text-sm text-gray-600 mb-2">{dog.officialName}</p>
                          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
                            {dog.callName}
                          </h2>

                          {/* Titles */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {dog.titles.map((title) => (
                              <span
                                key={title}
                                className="px-4 py-2 bg-gold/90 text-sm font-semibold text-gray-900 rounded-full flex items-center gap-2"
                              >
                                <Trophy size={16} />
                                {title}
                              </span>
                            ))}
                          </div>

                          {/* Basic Info Grid */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-sand/20 rounded-xl">
                            <div>
                              <p className="text-sm text-gray-600 mb-1">Geburtsdatum</p>
                              <p className="font-semibold text-gray-900">{dog.birthDate}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 mb-1">Geschlecht</p>
                              <p className="font-semibold text-gray-900">{dog.gender}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 mb-1">Farbe</p>
                              <p className="font-semibold text-gray-900">{dog.color}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 mb-1">Felltyp</p>
                              <p className="font-semibold text-gray-900">{dog.coatType}</p>
                            </div>
                          </div>
                        </div>

                        {/* Character */}
                        <div className="mb-8">
                          <h3 className="text-2xl font-heading font-bold mb-4">Charakter & Wesen</h3>
                          <p className="text-gray-700 leading-relaxed">{dog.character}</p>
                        </div>

                        {/* Health Tests */}
                        <div className="mb-8">
                          <h3 className="text-2xl font-heading font-bold mb-4 flex items-center gap-2">
                            <CheckCircle className="text-green-600" size={28} />
                            Gesundheitstests & Untersuchungen
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {dog.health.map((health) => (
                              <div
                                key={health.test}
                                className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg"
                              >
                                <span className="font-medium text-gray-900">{health.test}</span>
                                <span className="text-green-700 font-semibold">{health.result}</span>
                              </div>
                            ))}
                          </div>
                          <button className="mt-4 text-petrol font-medium flex items-center gap-2 hover:underline">
                            <Download size={18} />
                            Befunde herunterladen
                          </button>
                        </div>

                        {/* Recent Achievements */}
                        <div>
                          <h3 className="text-2xl font-heading font-bold mb-4">Ausstellungserfolge</h3>
                          <div className="space-y-3">
                            {dog.achievements.map((achievement, index) => (
                              <div
                                key={index}
                                className="flex gap-4 p-4 bg-sand/10 rounded-lg hover:bg-sand/20 transition-colors"
                              >
                                <div className="flex-shrink-0 text-center">
                                  <div className="text-sm text-gray-600">
                                    {new Date(achievement.date).toLocaleDateString('de-DE', {
                                      day: '2-digit',
                                      month: 'short',
                                      year: 'numeric',
                                    })}
                                  </div>
                                </div>
                                <div className="flex-grow">
                                  <h4 className="font-semibold text-gray-900 mb-1">
                                    {achievement.event}
                                  </h4>
                                  <p className="text-sm text-gray-600">{achievement.result}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* PUPPIES TAB */}
            {activeTab === 'puppies' && (
              <motion.div
                key="puppies"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl mx-auto"
              >
                {!puppies.current ? (
                  <div className="text-center py-16">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-sand/30 mb-6">
                      <Dog size={48} className="text-petrol" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold mb-4">Aktuell keine Welpen</h2>
                    <p className="text-xl text-gray-600 mb-8">
                      Wir planen unseren nächsten Wurf sorgfältig. Informationen zu geplanten Würfen
                      finden Sie auf unserer "Geplante Würfe" Seite.
                    </p>

                    {/* Planned Litter Info */}
                    <div className="bg-sand/30 rounded-2xl p-8 text-left">
                      <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
                        <Calendar className="text-petrol" />
                        Geplanter Wurf
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm text-gray-600 mb-2">Geplanter Zeitraum</p>
                          <p className="text-lg font-semibold text-gray-900">
                            {puppies.planned.date}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-2">Mutter</p>
                          <p className="text-lg font-semibold text-gray-900">
                            {puppies.planned.mother}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-2">Erwartete Anzahl</p>
                          <p className="text-lg font-semibold text-gray-900">
                            {puppies.planned.expectedCount} Welpen
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-2">Erwartete Farben</p>
                          <p className="text-lg font-semibold text-gray-900">
                            {puppies.planned.colors.join(', ')}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <button
                        onClick={() => (window.location.href = '/geplante-wuerfe')}
                        className="btn btn-primary btn-lg"
                      >
                        Zur Warteliste
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>{/* Current puppies content would go here */}</div>
                )}
              </motion.div>
            )}

            {/* ACHIEVEMENTS TAB */}
            {activeTab === 'achievements' && (
              <motion.div
                key="achievements"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="max-w-5xl mx-auto">
                  <div className="mb-8 text-center">
                    <h2 className="text-3xl font-heading font-bold mb-4">Ausstellungs-Timeline</h2>
                    <p className="text-gray-600">
                      Unsere Erfolge auf nationalen und internationalen Ausstellungen
                    </p>
                  </div>

                  {/* Statistics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    <div className="text-center p-6 bg-sand/20 rounded-xl">
                      <div className="text-4xl font-bold text-petrol font-heading mb-2">
                        {achievements.length}
                      </div>
                      <div className="text-sm text-gray-600">Ausstellungen</div>
                    </div>
                    <div className="text-center p-6 bg-sand/20 rounded-xl">
                      <div className="text-4xl font-bold text-petrol font-heading mb-2">
                        {achievements.filter((a) => a.title).length}
                      </div>
                      <div className="text-sm text-gray-600">Titel errungen</div>
                    </div>
                    <div className="text-center p-6 bg-sand/20 rounded-xl">
                      <div className="text-4xl font-bold text-petrol font-heading mb-2">
                        {achievements.filter((a) => a.result.includes('BOB')).length}
                      </div>
                      <div className="text-sm text-gray-600">Best of Breed</div>
                    </div>
                    <div className="text-center p-6 bg-sand/20 rounded-xl">
                      <div className="text-4xl font-bold text-petrol font-heading mb-2">100%</div>
                      <div className="text-sm text-gray-600">Excellent 1</div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-6">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-elevation-2 transition-shadow"
                      >
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          {/* Date */}
                          <div className="flex-shrink-0 text-center md:w-32">
                            <div className="text-sm text-gray-600">
                              {new Date(achievement.date).toLocaleDateString('de-DE', {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric',
                              })}
                            </div>
                          </div>

                          {/* Event Info */}
                          <div className="flex-grow">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="text-lg font-heading font-bold text-gray-900 mb-1">
                                  {achievement.event}
                                </h3>
                                <p className="text-sm text-gray-600 mb-2">
                                  Hund: {achievement.dog} • Richter/in: {achievement.judge}
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-3">
                              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                                {achievement.result}
                              </span>
                              {achievement.title && (
                                <span className="px-3 py-1 bg-gold/90 text-gray-900 text-sm font-bold rounded-full flex items-center gap-1">
                                  <Trophy size={14} />
                                  {achievement.title}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
