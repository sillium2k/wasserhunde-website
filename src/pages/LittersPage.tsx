import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Calendar, Heart, CheckCircle, Home, Users } from 'lucide-react'
import Button from '../components/common/Button'

const questionnaireSchema = z.object({
  // Personal Data
  firstName: z.string().min(2, 'Vorname erforderlich'),
  lastName: z.string().min(2, 'Nachname erforderlich'),
  street: z.string().min(3, 'Straße erforderlich'),
  zip: z.string().min(4, 'PLZ erforderlich'),
  city: z.string().min(2, 'Ort erforderlich'),
  phone: z.string().min(6, 'Telefon erforderlich'),
  email: z.string().email('Gültige E-Mail erforderlich'),

  // Living Situation
  housingType: z.enum(['house', 'apartment'], { message: 'Bitte auswählen' }),
  ownership: z.enum(['own', 'rent'], { message: 'Bitte auswählen' }),
  hasGarden: z.enum(['yes', 'no'], { message: 'Bitte auswählen' }),
  gardenSize: z.string().optional(),
  livingSpace: z.string().min(1, 'Wohnfläche erforderlich'),

  // Family
  householdSize: z.string().min(1, 'Anzahl Personen erforderlich'),
  childrenAges: z.string().optional(),
  allAgree: z.enum(['yes', 'no'], { message: 'Bitte auswählen' }),
  allergies: z.enum(['yes', 'no'], { message: 'Bitte auswählen' }),

  // Experience
  previousDogs: z.enum(['yes', 'no'], { message: 'Bitte auswählen' }),
  previousBreeds: z.string().optional(),
  currentPets: z.string().optional(),
  activeBreedExperience: z.enum(['yes', 'no'], { message: 'Bitte auswählen' }),

  // Lifestyle
  workHours: z.string().min(1, 'Angabe erforderlich'),
  activities: z.string().min(10, 'Bitte beschreiben Sie Ihre Aktivitäten'),
  vacationPlan: z.string().min(10, 'Bitte beschreiben Sie Ihre Pläne'),

  // Expectations
  purpose: z.array(z.string()).min(1, 'Mindestens eine Auswahl erforderlich'),
  genderPreference: z.enum(['male', 'female', 'either'], { message: 'Bitte auswählen' }),
  colorPreference: z.string().optional(),

  // Preparation
  dogSchool: z.enum(['yes', 'no', 'planned'], { message: 'Bitte auswählen' }),
  vetSelected: z.enum(['yes', 'no'], { message: 'Bitte auswählen' }),
  financialSecurity: z.enum(['yes', 'no'], { message: 'Bitte auswählen' }),

  // Questions
  whyPWD: z.string().min(100, 'Mindestens 100 Zeichen erforderlich'),
  whyUs: z.string().min(100, 'Mindestens 100 Zeichen erforderlich'),

  // Privacy
  privacy: z.boolean().refine((val) => val === true, 'Zustimmung erforderlich'),
})

type QuestionnaireData = z.infer<typeof questionnaireSchema>

export default function LittersPage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const { register, handleSubmit, formState: { errors }, reset } = useForm<QuestionnaireData>({
    resolver: zodResolver(questionnaireSchema),
  })

  const onSubmit = async (data: QuestionnaireData) => {
    setSubmitStatus('loading')
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log('Questionnaire:', data)
    setSubmitStatus('success')
    setTimeout(() => {
      reset()
      setSubmitStatus('idle')
    }, 5000)
  }

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1527526029430-319f10814151?q=80&w=2070')`,
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
              Geplante Würfe
            </h1>
            <p className="text-xl md:text-2xl text-sand-light max-w-3xl mx-auto">
              Ihr Weg zu einem Born to Win Hearts Welpen
            </p>
          </motion.div>
        </div>
      </section>

      {/* Planned Litter Info */}
      <section className="section bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="eyebrow">WURF A</div>
              <h2 className="section-title mb-6">Nächster Wurf: Frühjahr 2026</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <Heart className="text-petrol flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-heading font-bold mb-1">Mutter: Dina</h3>
                    <p className="text-gray-600">Int. Champion, Jugend-Champion, VDH Champion</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Calendar className="text-petrol flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-heading font-bold mb-1">Geplanter Decktermin</h3>
                    <p className="text-gray-600">Januar 2026</p>
                  </div>
                </div>
              </div>

              <div className="bg-sand/30 rounded-xl p-6">
                <h3 className="font-heading font-bold mb-4">Erwartete Eigenschaften</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-600" />
                    Felltyp: Lockig
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-600" />
                    Farben: Schwarz, eventuell Braun
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-600" />
                    Erwartete Anzahl: 2-3 Welpen
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-600" />
                    Temperament: Intelligent, arbeitsfreudig, familientauglich
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-ocean rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-heading font-bold mb-4">Preis & Konditionen</h3>
              <div className="text-4xl font-bold mb-6">2.500 EUR</div>

              <h4 className="font-heading font-semibold mb-3">Inbegriffen:</h4>
              <ul className="space-y-2 mb-6">
                {[
                  'Alle Impfungen',
                  'Chip & EU-Heimtierausweis',
                  'VDH/FCI Ahnentafel',
                  'Welpenstartpaket (Futter, Spielzeug, etc.)',
                  'Umfangreiche Beratung',
                  'Lebenslange Nachbetreuung',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle size={18} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/20 pt-4">
                <p className="text-sm text-sand-light">
                  Anzahlung bei Reservierung: 500 EUR<br/>
                  Restzahlung bei Abholung
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section bg-sand/30">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Vom Interessent zum Welpenbesitzer</h2>
            <p className="section-subtitle mx-auto">So läuft der Weg zu Ihrem PWD</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '1', title: 'Fragebogen', desc: 'Sie füllen unseren Fragebogen aus' },
              { icon: '2', title: 'Kennenlernen', desc: 'Persönliches Gespräch bei uns' },
              { icon: '3', title: 'Reservierung', desc: 'Bei Eignung: Platz auf Warteliste' },
              { icon: '4', title: 'Welpenbesc', desc: 'Ab Woche 5: Regelmäßige Besuche' },
            ].map((step) => (
              <motion.div
                key={step.icon}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-petrol text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="font-heading font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Questionnaire */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Welpeninteressenten-Fragebogen</h2>
            <p className="section-subtitle mx-auto">
              Helfen Sie uns, Sie kennenzulernen - damit wir den perfekten Match finden
            </p>
          </div>

          {submitStatus === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border-2 border-green-500 rounded-2xl p-12 text-center"
            >
              <CheckCircle size={64} className="text-green-600 mx-auto mb-6" />
              <h3 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                Vielen Dank für Ihre Anfrage!
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Wir haben Ihren Fragebogen erhalten und werden uns innerhalb von 48 Stunden bei Ihnen melden.
              </p>
              <Button onClick={() => window.location.href = '/'}>Zurück zur Startseite</Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Section 1: Personal Data */}
              <div className="bg-sand/20 rounded-xl p-6">
                <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-2">
                  <Users className="text-petrol" />
                  1. Persönliche Daten
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="label">Vorname *</label>
                    <input {...register('firstName')} className="input" />
                    {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <label className="label">Nachname *</label>
                    <input {...register('lastName')} className="input" />
                    {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}
                  </div>
                  <div className="md:col-span-2">
                    <label className="label">Straße & Hausnummer *</label>
                    <input {...register('street')} className="input" />
                    {errors.street && <p className="error-message">{errors.street.message}</p>}
                  </div>
                  <div>
                    <label className="label">PLZ *</label>
                    <input {...register('zip')} className="input" />
                    {errors.zip && <p className="error-message">{errors.zip.message}</p>}
                  </div>
                  <div>
                    <label className="label">Ort *</label>
                    <input {...register('city')} className="input" />
                    {errors.city && <p className="error-message">{errors.city.message}</p>}
                  </div>
                  <div>
                    <label className="label">Telefon *</label>
                    <input {...register('phone')} type="tel" className="input" />
                    {errors.phone && <p className="error-message">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="label">E-Mail *</label>
                    <input {...register('email')} type="email" className="input" />
                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                  </div>
                </div>
              </div>

              {/* Section 2: Housing */}
              <div className="bg-sand/20 rounded-xl p-6">
                <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-2">
                  <Home className="text-petrol" />
                  2. Wohnsituation
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="label">Wohnung oder Haus? *</label>
                    <select {...register('housingType')} className="input">
                      <option value="">Bitte wählen</option>
                      <option value="house">Haus</option>
                      <option value="apartment">Wohnung</option>
                    </select>
                    {errors.housingType && <p className="error-message">{errors.housingType.message}</p>}
                  </div>
                  <div>
                    <label className="label">Eigentum oder Miete? *</label>
                    <select {...register('ownership')} className="input">
                      <option value="">Bitte wählen</option>
                      <option value="own">Eigentum</option>
                      <option value="rent">Miete</option>
                    </select>
                    {errors.ownership && <p className="error-message">{errors.ownership.message}</p>}
                  </div>
                  <div>
                    <label className="label">Garten vorhanden? *</label>
                    <select {...register('hasGarden')} className="input">
                      <option value="">Bitte wählen</option>
                      <option value="yes">Ja</option>
                      <option value="no">Nein</option>
                    </select>
                    {errors.hasGarden && <p className="error-message">{errors.hasGarden.message}</p>}
                  </div>
                  <div>
                    <label className="label">Gartengröße (falls vorhanden)</label>
                    <input {...register('gardenSize')} placeholder="z.B. 200 m²" className="input" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="label">Wohnfläche (m²) *</label>
                    <input {...register('livingSpace')} type="number" placeholder="z.B. 120" className="input" />
                    {errors.livingSpace && <p className="error-message">{errors.livingSpace.message}</p>}
                  </div>
                </div>
              </div>

              {/* Section 3: Expectations */}
              <div className="bg-sand/20 rounded-xl p-6">
                <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-2">
                  <Heart className="text-petrol" />
                  3. Erwartungen an den Hund
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="label">Verwendungszweck (Mehrfachauswahl möglich) *</label>
                    <div className="space-y-2">
                      {['Familienhund', 'Therapie-/Assistenzhund', 'Hundesport', 'Ausstellungen'].map((purpose) => (
                        <label key={purpose} className="flex items-center gap-2">
                          <input {...register('purpose')} type="checkbox" value={purpose} className="w-4 h-4" />
                          <span>{purpose}</span>
                        </label>
                      ))}
                    </div>
                    {errors.purpose && <p className="error-message">{errors.purpose.message}</p>}
                  </div>

                  <div>
                    <label className="label">Warum fasziniert Sie die Rasse Portugiesischer Wasserhund? * (mind. 100 Zeichen)</label>
                    <textarea {...register('whyPWD')} rows={4} className="input resize-none" />
                    {errors.whyPWD && <p className="error-message">{errors.whyPWD.message}</p>}
                  </div>

                  <div>
                    <label className="label">Warum haben Sie sich für unsere Zucht entschieden? * (mind. 100 Zeichen)</label>
                    <textarea {...register('whyUs')} rows={4} className="input resize-none" />
                    {errors.whyUs && <p className="error-message">{errors.whyUs.message}</p>}
                  </div>
                </div>
              </div>

              {/* Privacy & Submit */}
              <div className="bg-petrol/10 rounded-xl p-6">
                <label className="flex items-start gap-3 mb-6">
                  <input {...register('privacy')} type="checkbox" className="mt-1 w-4 h-4" />
                  <span className="text-sm">
                    Ich habe die <a href="/datenschutz" className="underline">Datenschutzerklärung</a> gelesen und akzeptiere sie. *
                  </span>
                </label>
                {errors.privacy && <p className="error-message">{errors.privacy.message}</p>}

                <Button
                  type="submit"
                  fullWidth
                  size="lg"
                  loading={submitStatus === 'loading'}
                  className="mb-4"
                >
                  Fragebogen absenden
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  * Pflichtfelder
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
