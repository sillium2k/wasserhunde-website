import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart, Briefcase, Award, Sparkles } from 'lucide-react'
import Tabs from '../components/common/Tabs'

const tabs = [
  { id: 'geschichte', label: 'Geschichte', icon: <BookOpen size={20} /> },
  { id: 'anforderungen', label: 'Anforderungen', icon: <Heart size={20} /> },
  { id: 'einsatz', label: 'Einsatz', icon: <Briefcase size={20} /> },
  { id: 'fci', label: 'FCI-Standard', icon: <Award size={20} /> },
  { id: 'pflege', label: 'Pflege', icon: <Sparkles size={20} /> },
]

export default function KnowledgePage() {
  const [activeTab, setActiveTab] = useState('geschichte')

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
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
            <div className="eyebrow text-sand">RASSE-WISSEN</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Wissenswertes
            </h1>
            <p className="text-xl md:text-2xl text-sand-light max-w-3xl mx-auto">
              Alles über den Portugiesischen Wasserhund
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-white">
        <div className="container-custom max-w-6xl">
          <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} className="mb-12" />

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'geschichte' && <GeschichteContent />}
            {activeTab === 'anforderungen' && <AnforderungenContent />}
            {activeTab === 'einsatz' && <EinsatzContent />}
            {activeTab === 'fci' && <FCIContent />}
            {activeTab === 'pflege' && <PflegeContent />}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function GeschichteContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
            Von Portugals Küsten zur Welt
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Der Portugiesische Wasserhund (Cão de Água Português) ist eine der ältesten Arbeitsrassen
            Europas. Seit über 2000 Jahren begleiteten diese intelligenten Hunde Fischer an der
            portugiesischen Atlantikküste.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sie waren unverzichtbare Crewmitglieder: Sie trieben Fischschwärme in die Netze, holten
            verlorene Ausrüstung aus dem Wasser, trugen Nachrichten zwischen Booten und vom Schiff ans
            Land, und warnten bei Gefahr.
          </p>
        </div>
        <div className="bg-sand/30 rounded-xl p-6">
          <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">Wichtige Meilensteine</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-petrol font-bold mt-1">1297</span>
              <span className="text-gray-700">Erste schriftliche Erwähnung in königlichen Dokumenten</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-petrol font-bold mt-1">1930er</span>
              <span className="text-gray-700">Fast ausgestorben durch Moderne Fischereitechnik</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-petrol font-bold mt-1">1934</span>
              <span className="text-gray-700">Vasco Bensaude startet Rettungsprogramm</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-petrol font-bold mt-1">1981</span>
              <span className="text-gray-700">FCI-Anerkennung als eigenständige Rasse</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-petrol font-bold mt-1">2009</span>
              <span className="text-gray-700">Bo Obama macht die Rasse weltweit bekannt</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-ocean rounded-xl p-8 text-white">
        <h3 className="text-2xl font-heading font-bold mb-4">Die Rettung einer Legende</h3>
        <p className="text-sand-light leading-relaxed mb-4">
          In den 1930er Jahren stand die Rasse kurz vor dem Aussterben. Nur noch etwa 50 Exemplare
          existierten. Der portugiesische Geschäftsmann Vasco Bensaude erkannte die Tragweite und
          startete ein ambitioniertes Zuchtprogramm.
        </p>
        <p className="text-sand-light leading-relaxed">
          Durch sorgfältige Selektion und internationale Zusammenarbeit wurde der PWD gerettet. Heute
          leben weltweit mehrere Tausend dieser außergewöhnlichen Hunde – ein Erfolg verantwortungsvoller
          Zucht.
        </p>
      </div>
    </div>
  )
}

function AnforderungenContent() {
  const requirements = [
    {
      title: 'Tägliche Bewegung',
      description: '1-2 Stunden aktive Beschäftigung sind Minimum. PWDs sind Arbeitshunde und brauchen körperliche Auslastung.',
      icon: '🏃',
    },
    {
      title: 'Geistige Auslastung',
      description: 'Intelligenzspiele, Apportieren, Nasenarbeit. Ein gelangweilter PWD wird kreativ – oft zum Leidwesen der Einrichtung.',
      icon: '🧠',
    },
    {
      title: 'Wasserzugang',
      description: 'Idealerweise regelmäßiger Zugang zu Gewässern. Schwimmen ist ihre Passion und beste Auslastung.',
      icon: '🌊',
    },
    {
      title: 'Konsequente Erziehung',
      description: 'Liebevoll, aber klar. PWDs testen Grenzen intelligent. Sie brauchen souveräne Führung.',
      icon: '🎯',
    },
    {
      title: 'Fellpflege',
      description: '2-3x wöchentlich bürsten, alle 6-8 Wochen Scheren. Sie haaren nicht, aber das Fell verfilzt ohne Pflege.',
      icon: '✂️',
    },
    {
      title: 'Familienanschluss',
      description: 'PWDs sind extrem menschenbezogen. Zwingerhaltung ist absolut ungeeignet. Sie wollen Teil des Rudels sein.',
      icon: '❤️',
    },
  ]

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
          Ist ein PWD der richtige Hund für Sie?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Portugiesische Wasserhunde sind wunderbare Begleiter – aber sie haben spezifische Bedürfnisse.
          Ehrlichkeit vor dem Kauf verhindert Enttäuschungen.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {requirements.map((req, index) => (
          <motion.div
            key={req.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-sand/20 rounded-xl p-6 hover:shadow-elevation-2 transition-shadow"
          >
            <div className="text-4xl mb-4">{req.icon}</div>
            <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">{req.title}</h3>
            <p className="text-gray-700 leading-relaxed">{req.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
        <h3 className="text-xl font-heading font-bold text-red-900 mb-3">⚠️ Ein PWD ist NICHT geeignet wenn:</h3>
        <ul className="space-y-2 text-red-800">
          <li>• Sie keine Zeit für tägliche ausgiebige Spaziergänge haben</li>
          <li>• Der Hund den ganzen Tag alleine sein muss</li>
          <li>• Sie einen ruhigen, gemütlichen Couchpotato suchen</li>
          <li>• Regelmäßige Fellpflege zu aufwendig erscheint</li>
          <li>• Sie keine Erfahrung mit intelligenten, eigenständigen Rassen haben</li>
        </ul>
      </div>
    </div>
  )
}

function EinsatzContent() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
          Vielseitige Talente
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Vom Fischerboot zum Therapiehund – PWDs brillieren in vielen Bereichen
        </p>
      </div>

      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-ocean rounded-xl p-8 text-white">
            <h3 className="text-2xl font-heading font-bold mb-4">🏊 Wasserarbeit</h3>
            <p className="text-sand-light leading-relaxed mb-4">
              Ihr ursprünglicher Beruf. PWDs sind exzellente Schwimmer mit wasserabweisendem Fell und
              Schwimmhäuten zwischen den Zehen. Rettungshundearbeit im Wasser ist ihre Königsdisziplin.
            </p>
            <ul className="space-y-2 text-sand-light">
              <li>• Wasserrettung</li>
              <li>• Apportieren aus dem Wasser</li>
              <li>• Schwimm-Assistenzhunde</li>
            </ul>
          </div>

          <div className="bg-sand/30 rounded-xl p-8">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">🎓 Assistenz & Therapie</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ihre Intelligenz, Feinfühligkeit und Allergikerfreundlichkeit machen PWDs zu idealen
              Assistenz- und Therapiehunden.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Blindenführhunde</li>
              <li>• PTSD-Assistenzhunde</li>
              <li>• Therapiehunde in Schulen & Kliniken</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border-2 border-petrol rounded-xl p-6">
            <h4 className="text-xl font-heading font-semibold text-petrol mb-3">🏃 Hundesport</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              Agility, Obedience, Rally Obedience, Dogdancing – PWDs lieben jede Form von geistiger und
              körperlicher Herausforderung.
            </p>
          </div>

          <div className="bg-white border-2 border-petrol rounded-xl p-6">
            <h4 className="text-xl font-heading font-semibold text-petrol mb-3">👃 Nasenarbeit</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              Mantrailing, Fährtenarbeit, Geruchsdifferenzierung – ihr ausgeprägter Geruchssinn macht sie
              zu Top-Nasenarbeitern.
            </p>
          </div>

          <div className="bg-white border-2 border-petrol rounded-xl p-6">
            <h4 className="text-xl font-heading font-semibold text-petrol mb-3">👨‍👩‍👧‍👦 Familienhund</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              Mit der richtigen Auslastung: perfekte, verspielte, loyale Familienhunde. Kinderlieb,
              geduldig, beschützend.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function FCIContent() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">FCI-Standard Nr. 37</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Offizielle Rassestandards der Fédération Cynologique Internationale
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-sand/30 rounded-xl p-8">
          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">📏 Größe & Gewicht</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-petrol mb-2">Rüden:</h4>
              <p className="text-gray-700">Widerristhöhe: 50-57 cm</p>
              <p className="text-gray-700">Gewicht: 19-25 kg</p>
            </div>
            <div>
              <h4 className="font-semibold text-petrol mb-2">Hündinnen:</h4>
              <p className="text-gray-700">Widerristhöhe: 43-52 cm</p>
              <p className="text-gray-700">Gewicht: 16-22 kg</p>
            </div>
          </div>
        </div>

        <div className="bg-sand/30 rounded-xl p-8">
          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">🎨 Farben</h3>
          <ul className="space-y-3 text-gray-700">
            <li>• <strong>Schwarz:</strong> Uni schwarz, am häufigsten</li>
            <li>• <strong>Weiß:</strong> Uni weiß, selten</li>
            <li>• <strong>Braun:</strong> Verschiedene Brauntöne</li>
            <li>• <strong>Schwarz-weiß:</strong> Verschiedene Muster</li>
            <li>• <strong>Braun-weiß:</strong> Verschiedene Muster</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 italic">
            Bei zweifarbigen Hunden darf weiß nicht dominieren
          </p>
        </div>
      </div>

      <div className="bg-white border-2 border-petrol rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">🧬 Fell-Typen</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold text-petrol mb-3">Lockiges Fell (Curly)</h4>
            <p className="text-gray-700 leading-relaxed mb-3">
              Kompakte, zylindrische Locken mit charakteristischem Glanz. Das Haar ist dichter und das
              Fell voluminöser.
            </p>
            <p className="text-sm text-gray-600 italic">Am weitesten verbreitet</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-petrol mb-3">Welliges Fell (Wavy)</h4>
            <p className="text-gray-700 leading-relaxed mb-3">
              Leicht gewelltes, glattes Fell mit sanftem Glanz. Etwas weniger voluminös als die
              Locken-Variante.
            </p>
            <p className="text-sm text-gray-600 italic">Seltener, aber ebenfalls standardkonform</p>
          </div>
        </div>
      </div>

      <div className="prose max-w-none">
        <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">🎯 Wesen (laut Standard)</h3>
        <div className="bg-gradient-ocean rounded-xl p-8 text-white">
          <blockquote className="text-xl italic text-sand-light leading-relaxed">
            "Temperamentvoll, willensstark, stolz, nüchtern und intelligent. Bemerkenswert unbestechlich,
            kein Kläffer, widerstandsfähig bei Ermüdung. Ein ausdrucksvoller, gelehriger Begleiter von
            außerordentlicher Neigung zu seinem Herrn und denjenigen, die ihn lenken."
          </blockquote>
          <p className="text-sand text-right mt-4">– FCI Standard Nr. 37</p>
        </div>
      </div>
    </div>
  )
}

function PflegeContent() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
          Pflege & Gesundheit
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          PWDs sind pflegeintensiv, aber dafür hypoallergen und verlieren keine Haare
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-sand/30 rounded-xl p-8">
          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">✂️ Fellpflege</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-petrol pl-4">
              <h4 className="font-semibold text-gray-900 mb-2">Tägliche Pflege:</h4>
              <p className="text-gray-700">Kurzes Durchbürsten nach nassen Spaziergängen, Kontrolle auf
                Verfilzungen an Ohren und Pfoten.</p>
            </div>
            <div className="border-l-4 border-petrol pl-4">
              <h4 className="font-semibold text-gray-900 mb-2">2-3x pro Woche:</h4>
              <p className="text-gray-700">Gründliches Bürsten mit Slicker-Bürste und Kamm. Dauer: ca.
                20-30 Minuten.</p>
            </div>
            <div className="border-l-4 border-petrol pl-4">
              <h4 className="font-semibold text-gray-900 mb-2">Alle 6-8 Wochen:</h4>
              <p className="text-gray-700">Professionelle Schur oder selbst schneiden. Löwenschnitt
                (traditionell) oder Welpencut (pflegeleichter).</p>
            </div>
            <div className="border-l-4 border-petrol pl-4">
              <h4 className="font-semibold text-gray-900 mb-2">Baden:</h4>
              <p className="text-gray-700">Nur bei Bedarf, zu häufiges Baden schadet der natürlichen
                Fettschicht. Spezial-Hundeshampoo verwenden.</p>
            </div>
          </div>
        </div>

        <div className="bg-sand/30 rounded-xl p-8">
          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">🏥 Gesundheit</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-petrol mb-2">Rassespezifische Tests (VDH-Pflicht):</h4>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• HD (Hüftgelenksdysplasie)</li>
                <li>• ED (Ellbogendysplasie)</li>
                <li>• Augenuntersuchung (PRA, Katarakt)</li>
                <li>• GM1 (Gentest)</li>
                <li>• JDCM (Gentest)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-petrol mb-2">Erweiterte Tests (empfohlen):</h4>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• EOPRA (Early Onset PRA)</li>
                <li>• Mikrochirurgische Addison (IHA)</li>
                <li>• Schilddrüsenwerte</li>
              </ul>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
              <p className="text-green-900 text-sm">
                ✅ <strong>Seriöse Züchter</strong> führen alle Tests durch und zeigen Ihnen die Ergebnisse
                transparent!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-ocean rounded-xl p-8 text-white mb-8">
        <h3 className="text-2xl font-heading font-bold mb-4">💰 Kosten im Überblick</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-sand mb-3">Einmalig:</h4>
            <ul className="space-y-2 text-sand-light">
              <li>• Welpe: 2.000-3.000 €</li>
              <li>• Erstausstattung: 300-500 €</li>
              <li>• Kastration (optional): 200-400 €</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sand mb-3">Jährlich:</h4>
            <ul className="space-y-2 text-sand-light">
              <li>• Futter: 600-900 €</li>
              <li>• Tierarzt/Impfungen: 200-400 €</li>
              <li>• Versicherung: 300-600 €</li>
              <li>• Fellpflege (Groomer): 400-800 €</li>
              <li>• Gesamt: ~1.500-2.700 €/Jahr</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white border-2 border-petrol rounded-xl p-6 text-center">
          <div className="text-4xl mb-3">🦷</div>
          <h4 className="font-semibold text-gray-900 mb-2">Zahnpflege</h4>
          <p className="text-sm text-gray-700">2-3x wöchentlich Zähneputzen verhindert Zahnstein und
            Entzündungen</p>
        </div>
        <div className="bg-white border-2 border-petrol rounded-xl p-6 text-center">
          <div className="text-4xl mb-3">👂</div>
          <h4 className="font-semibold text-gray-900 mb-2">Ohrenpflege</h4>
          <p className="text-sm text-gray-700">Wöchentlich kontrollieren, nach dem Schwimmen trocknen.
            Hängeohren anfällig für Infektionen</p>
        </div>
        <div className="bg-white border-2 border-petrol rounded-xl p-6 text-center">
          <div className="text-4xl mb-3">🐾</div>
          <h4 className="font-semibold text-gray-900 mb-2">Krallenpflege</h4>
          <p className="text-sm text-gray-700">Monatlich kürzen, insbesondere Daumenkralle. Zu lange
            Krallen schmerzen beim Laufen</p>
        </div>
      </div>
    </div>
  )
}
