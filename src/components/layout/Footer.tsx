import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'
import Button from '../common/Button'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setNewsletterStatus('loading')

    // Simulate API call
    setTimeout(() => {
      setNewsletterStatus('success')
      setEmail('')
      setTimeout(() => setNewsletterStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <footer className="bg-ocean-blue text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div>
            <h3 className="font-accent text-2xl font-bold mb-4">Born to Win Hearts</h3>
            <p className="text-sand-light/90 mb-6 leading-relaxed">
              Premium-Zucht Portugiesischer Wasserhunde mit Herz, Verstand und über 20 Jahren
              Expertise. Wir züchten für Gesundheit, Wesen und den Erhalt einer historischen Rasse.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-sand-light/50 flex items-center justify-center hover:bg-sand-light hover:border-sand-light hover:text-ocean-blue transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-sand-light/50 flex items-center justify-center hover:bg-sand-light hover:border-sand-light hover:text-ocean-blue transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-sand-light/50 flex items-center justify-center hover:bg-sand-light hover:border-sand-light hover:text-ocean-blue transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-sand-light">Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: 'Über Uns', href: '/ueber-uns' },
                { name: 'Unsere Hunde', href: '/unsere-hunde' },
                { name: 'Geplante Würfe', href: '/geplante-wuerfe' },
                { name: 'Wissenswertes', href: '/wissenswertes' },
                { name: 'Kontakt', href: '/kontakt' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sand-light/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-sand-light">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sand-light/80">
                <MapPin size={20} className="flex-shrink-0 mt-0.5" />
                <span>
                  Deutschland
                  <br />
                  <span className="text-sm">Genaue Adresse nach Vereinbarung</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0" />
                <a
                  href="tel:+491234567890"
                  className="text-sand-light/80 hover:text-white transition-colors"
                >
                  +49 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0" />
                <a
                  href="mailto:info@borntowinhearts.de"
                  className="text-sand-light/80 hover:text-white transition-colors"
                >
                  info@borntowinhearts.de
                </a>
              </li>
            </ul>
            <p className="text-sm text-sand-light/60 mt-4 italic">
              Besichtigungen nach Vereinbarung
              <br />
              Telefonisch erreichbar: Mo-Fr 10-18 Uhr
            </p>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-sand-light">
              Bleiben Sie informiert
            </h4>
            <p className="text-sand-light/80 mb-4 text-sm">
              Exklusive Welpen-Updates direkt in Ihr Postfach
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ihre E-Mail"
                required
                className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-sand-light/30 text-white placeholder-sand-light/50 focus:outline-none focus:ring-2 focus:ring-sand-light focus:border-transparent transition-all"
              />
              <Button
                type="submit"
                fullWidth
                loading={newsletterStatus === 'loading'}
                className="bg-sand text-ocean-blue hover:bg-sand-light"
              >
                {newsletterStatus === 'success' ? 'Erfolgreich!' : 'Abonnieren'}
              </Button>
            </form>

            {/* Certificates */}
            <div className="mt-8">
              <p className="text-xs text-sand-light/60 mb-3">Zertifiziert durch:</p>
              <div className="flex items-center gap-4 opacity-70">
                <div className="px-3 py-1.5 bg-white/10 rounded text-xs font-medium">VDH</div>
                <div className="px-3 py-1.5 bg-white/10 rounded text-xs font-medium">FCI</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-sand-light/60">
            <p>© 2024 Born to Win Hearts. Alle Rechte vorbehalten.</p>
            <div className="flex items-center gap-6">
              <Link to="/impressum" className="hover:text-white transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="hover:text-white transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
