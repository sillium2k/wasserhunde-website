import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Heart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../common/Button'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Über Uns', href: '/ueber-uns' },
  { name: 'Unsere Hunde', href: '/unsere-hunde' },
  { name: 'Geplante Würfe', href: '/geplante-wuerfe' },
  { name: 'Wissenswertes', href: '/wissenswertes' },
  { name: 'Kontakt', href: '/kontakt' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // On subpages (not home), always show solid header
  const isHomePage = location.pathname === '/'
  const shouldUseSolidHeader = !isHomePage || isScrolled || isMobileMenuOpen

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  // Handle scroll after navigation
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollToWarteliste) {
      // Wait for DOM to be ready
      const timer = setTimeout(() => {
        const element = document.getElementById('warteliste')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [location])

  const scrollToContact = () => {
    if (location.pathname === '/') {
      const element = document.getElementById('warteliste')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Navigate to home with state to trigger scroll
      navigate('/', { state: { scrollToWarteliste: true } })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldUseSolidHeader ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span
              className={`font-accent text-2xl lg:text-3xl font-bold transition-colors ${
                shouldUseSolidHeader ? 'text-ocean-blue' : 'text-white'
              } group-hover:text-petrol`}
            >
              Born to Win Hearts
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative text-base font-medium transition-colors ${
                    shouldUseSolidHeader
                      ? isActive
                        ? 'text-petrol'
                        : 'text-gray-700 hover:text-petrol'
                      : isActive
                      ? 'text-white'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                        shouldUseSolidHeader ? 'bg-petrol' : 'bg-white'
                      }`}
                      layoutId="activeTab"
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <Button
              variant={shouldUseSolidHeader ? 'primary' : 'secondary'}
              icon={<Heart size={20} />}
              onClick={scrollToContact}
            >
              Welpen anfragen
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              shouldUseSolidHeader
                ? 'text-gray-700 hover:text-petrol'
                : 'text-white hover:text-white/80'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="container-custom py-6 space-y-4">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block text-lg font-medium transition-colors ${
                      isActive ? 'text-petrol' : 'text-gray-700 hover:text-petrol'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <div className="pt-4">
                <Button
                  variant="primary"
                  fullWidth
                  icon={<Heart size={20} />}
                  onClick={scrollToContact}
                >
                  Welpen anfragen
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
