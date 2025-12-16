import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import Button from '../components/common/Button'

const contactSchema = z.object({
  firstName: z.string().min(2, 'Vorname muss mindestens 2 Zeichen lang sein'),
  lastName: z.string().min(2, 'Nachname muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  phone: z.string().min(8, 'Bitte geben Sie eine gültige Telefonnummer ein'),
  subject: z.string().min(3, 'Betreff muss mindestens 3 Zeichen lang sein'),
  message: z.string().min(20, 'Nachricht muss mindestens 20 Zeichen lang sein'),
  dataConsent: z.boolean().refine((val) => val === true, {
    message: 'Bitte akzeptieren Sie die Datenschutzerklärung',
  }),
})

type ContactFormData = z.infer<typeof contactSchema>

const contactInfo = [
  {
    icon: MapPin,
    title: 'Adresse',
    content: ['Born to Win Hearts', 'Musterstraße 123', '12345 Musterstadt', 'Deutschland'],
  },
  {
    icon: Phone,
    title: 'Telefon',
    content: ['+49 (0) 123 456789', 'Mo-Fr: 9:00 - 18:00 Uhr', 'Sa: 10:00 - 14:00 Uhr'],
  },
  {
    icon: Mail,
    title: 'E-Mail',
    content: ['info@borntowinhearts.de', 'Wir antworten innerhalb von 24h'],
  },
  {
    icon: Clock,
    title: 'Besuchszeiten',
    content: ['Nur nach Vereinbarung', 'Bitte mind. 3 Tage im Voraus'],
  },
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Form data:', data)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

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
            <div className="eyebrow text-sand">KONTAKTIEREN SIE UNS</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Wir freuen uns auf Sie
            </h1>
            <p className="text-xl md:text-2xl text-sand-light max-w-3xl mx-auto">
              Haben Sie Fragen oder möchten Sie uns kennenlernen?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-petrol/10 flex items-center justify-center">
                  <info.icon className="text-petrol" size={28} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <div className="text-gray-600 space-y-1">
                  {info.content.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="section bg-sand/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-xl shadow-elevation-2 p-8">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                  Schreiben Sie uns
                </h2>

                {isSubmitted && (
                  <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                    <p className="text-green-900 font-medium">
                      ✅ Vielen Dank für Ihre Nachricht! Wir melden uns schnellstmöglich bei Ihnen.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="label">Vorname *</label>
                      <input
                        {...register('firstName')}
                        type="text"
                        className={`input ${errors.firstName ? 'input-error' : ''}`}
                        placeholder="Max"
                      />
                      {errors.firstName && (
                        <p className="error-message">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="label">Nachname *</label>
                      <input
                        {...register('lastName')}
                        type="text"
                        className={`input ${errors.lastName ? 'input-error' : ''}`}
                        placeholder="Mustermann"
                      />
                      {errors.lastName && (
                        <p className="error-message">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="label">E-Mail *</label>
                      <input
                        {...register('email')}
                        type="email"
                        className={`input ${errors.email ? 'input-error' : ''}`}
                        placeholder="max@beispiel.de"
                      />
                      {errors.email && <p className="error-message">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="label">Telefon *</label>
                      <input
                        {...register('phone')}
                        type="tel"
                        className={`input ${errors.phone ? 'input-error' : ''}`}
                        placeholder="+49 123 456789"
                      />
                      {errors.phone && <p className="error-message">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="label">Betreff *</label>
                    <input
                      {...register('subject')}
                      type="text"
                      className={`input ${errors.subject ? 'input-error' : ''}`}
                      placeholder="z.B. Interesse an Welpen 2025"
                    />
                    {errors.subject && <p className="error-message">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <label className="label">Nachricht *</label>
                    <textarea
                      {...register('message')}
                      rows={6}
                      className={`input ${errors.message ? 'input-error' : ''}`}
                      placeholder="Erzählen Sie uns von sich und Ihrem Interesse an einem PWD..."
                    />
                    {errors.message && <p className="error-message">{errors.message.message}</p>}
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      {...register('dataConsent')}
                      type="checkbox"
                      id="dataConsent"
                      className="mt-1"
                    />
                    <label htmlFor="dataConsent" className="text-sm text-gray-700">
                      Ich habe die{' '}
                      <a href="#" className="text-petrol hover:underline">
                        Datenschutzerklärung
                      </a>{' '}
                      gelesen und akzeptiere diese. *
                    </label>
                  </div>
                  {errors.dataConsent && (
                    <p className="error-message">{errors.dataConsent.message}</p>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    icon={<Send size={20} />}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Important Info Box */}
              <div className="bg-gradient-ocean rounded-xl p-8 text-white">
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Wichtige Hinweise für Besucher
                </h3>
                <ul className="space-y-3 text-sand-light">
                  <li className="flex items-start gap-3">
                    <span className="text-sand font-bold">•</span>
                    <span>
                      Besuche sind nur nach vorheriger Terminvereinbarung möglich (mind. 3 Tage im
                      Voraus)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sand font-bold">•</span>
                    <span>
                      Bitte bringen Sie keine eigenen Hunde mit (Infektionsschutz für Welpen)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sand font-bold">•</span>
                    <span>Planen Sie ca. 1-2 Stunden Zeit für ein ausführliches Kennenlernen ein</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sand font-bold">•</span>
                    <span>
                      Wir freuen uns auf Familien mit Kindern – unsere Welpen wachsen mit
                      Familienanschluss auf
                    </span>
                  </li>
                </ul>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-xl shadow-elevation-2 p-8">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">So finden Sie uns</h3>
                <div className="aspect-video bg-sand/30 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-center">
                    <MapPin className="text-petrol mx-auto mb-3" size={48} />
                    <p className="text-gray-600">
                      Kartenintegration folgt
                      <br />
                      <span className="text-sm">(Google Maps / OpenStreetMap)</span>
                    </p>
                  </div>
                </div>
                <div className="bg-sand/30 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Anfahrt:</strong>
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Mit dem Auto: A1 Ausfahrt Musterstadt, dann 5km</li>
                    <li>• Mit der Bahn: Bahnhof Musterstadt, dann 15 Min. Taxi</li>
                    <li>• Kostenlose Parkplätze direkt am Haus</li>
                  </ul>
                </div>
              </div>

              {/* FAQ Quick Links */}
              <div className="bg-white rounded-xl shadow-elevation-2 p-8">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  Häufig gestellte Fragen
                </h3>
                <div className="space-y-3">
                  <a
                    href="/wissenswertes"
                    className="block text-petrol hover:text-petrol-dark transition-colors"
                  >
                    → Ist ein PWD für uns geeignet?
                  </a>
                  <a
                    href="/geplante-wuerfe"
                    className="block text-petrol hover:text-petrol-dark transition-colors"
                  >
                    → Wann ist der nächste Wurf geplant?
                  </a>
                  <a
                    href="/wissenswertes"
                    className="block text-petrol hover:text-petrol-dark transition-colors"
                  >
                    → Wie läuft der Reservierungsprozess ab?
                  </a>
                  <a
                    href="/ueber-uns"
                    className="block text-petrol hover:text-petrol-dark transition-colors"
                  >
                    → Welche Gesundheitstests führen Sie durch?
                  </a>
                </div>
              </div>
            </motion.div>
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
            <h2 className="section-title text-white mb-6">Persönliche Beratung erwünscht?</h2>
            <p className="text-xl text-sand-light mb-8">
              Manchmal ist ein Telefonat einfacher als eine E-Mail. Rufen Sie uns gerne während unserer
              Bürozeiten an – wir nehmen uns Zeit für Ihre Fragen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+491234567890" className="btn btn-secondary btn-lg">
                <Phone size={20} className="mr-2" />
                +49 (0) 123 456789
              </a>
              <a href="mailto:info@borntowinhearts.de" className="btn btn-secondary btn-lg">
                <Mail size={20} className="mr-2" />
                E-Mail schreiben
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
