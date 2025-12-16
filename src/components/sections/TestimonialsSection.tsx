import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    text: 'Von der ersten Kontaktaufnahme bis zur Welpenübergabe - alles perfekt. Unsere Luna ist gesund, fröhlich und perfekt sozialisiert. Die Beratung und Nachbetreuung sind herausragend.',
    author: 'Familie Schmidt',
    location: 'München',
    year: 'Welpe 2023',
    rating: 5,
  },
  {
    id: 2,
    text: 'Nach intensiver Recherche haben wir uns für Born to Win Hearts entschieden - die beste Entscheidung! Die Gesundheitstests und die Transparenz der Zucht gaben uns absolute Sicherheit.',
    author: 'Familie Weber',
    location: 'Hamburg',
    year: 'Welpe 2022',
    rating: 5,
  },
  {
    id: 3,
    text: 'Unser Rocky ist der perfekte Therapiebegleithund. Die fundierte Ausbildung der Züchterin als Tierpsychologin merkt man in jeder Faser. Professioneller geht es nicht.',
    author: 'Familie Müller',
    location: 'Berlin',
    year: 'Welpe 2024',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section bg-sand">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Glückliche Familien</h2>
          <p className="section-subtitle mx-auto">Was unsere Welpenkäufer über uns sagen</p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-elevation-2 p-8 md:p-12"
              >
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-8">
                  <svg
                    className="absolute -top-4 -left-2 w-12 h-12 text-petrol/10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center italic relative z-10">
                    "{testimonials[currentIndex].text}"
                  </p>
                </div>

                {/* Author */}
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-ocean mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {testimonials[currentIndex].author.split(' ')[1][0]}
                  </div>
                  <p className="font-heading font-bold text-lg text-gray-900">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonials[currentIndex].location} • {testimonials[currentIndex].year}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={previous}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white shadow-elevation-2 flex items-center justify-center text-petrol hover:bg-petrol hover:text-white transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-white shadow-elevation-2 flex items-center justify-center text-petrol hover:bg-petrol hover:text-white transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-petrol w-8' : 'bg-petrol/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
