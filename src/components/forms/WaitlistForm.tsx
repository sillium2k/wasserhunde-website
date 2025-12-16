import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, User, Phone, MessageSquare, CheckCircle, Clock, MessageCircle, AlertCircle } from 'lucide-react'
import Button from '../common/Button'
import { useState } from 'react'

const waitlistSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  phone: z.string().optional(),
  message: z.string().min(20, 'Bitte teilen Sie uns mehr mit (mindestens 20 Zeichen)'),
  privacy: z.boolean().refine((val) => val === true, 'Sie müssen den Datenschutzbestimmungen zustimmen'),
})

type WaitlistFormData = z.infer<typeof waitlistSchema>

export default function WaitlistForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  })

  const onSubmit = async (data: WaitlistFormData) => {
    setSubmitStatus('loading')

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log('Form data:', data)
    setSubmitStatus('success')

    // Reset form after 3 seconds
    setTimeout(() => {
      reset()
      setSubmitStatus('idle')
    }, 3000)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="label text-white">
          Ihr Name *
        </label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <User size={20} />
          </div>
          <input
            {...register('name')}
            type="text"
            id="name"
            placeholder="Max Mustermann"
            className={`input pl-11 bg-white/90 ${errors.name ? 'input-error' : ''}`}
          />
        </div>
        {errors.name && (
          <p className="error-message text-red-200 mt-1 flex items-center gap-1">
            <AlertCircle size={16} />
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="label text-white">
          Ihre E-Mail-Adresse *
        </label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Mail size={20} />
          </div>
          <input
            {...register('email')}
            type="email"
            id="email"
            placeholder="ihre@email.de"
            className={`input pl-11 bg-white/90 ${errors.email ? 'input-error' : ''}`}
          />
        </div>
        {errors.email && (
          <p className="error-message text-red-200 mt-1 flex items-center gap-1">
            <AlertCircle size={16} />
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="label text-white">
          Telefonnummer (optional)
        </label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Phone size={20} />
          </div>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            placeholder="+49 123 456789"
            className="input pl-11 bg-white/90"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="label text-white">
          Ihre Nachricht *
        </label>
        <div className="relative">
          <div className="absolute left-3 top-3 text-gray-400">
            <MessageSquare size={20} />
          </div>
          <textarea
            {...register('message')}
            id="message"
            rows={4}
            placeholder="Erzählen Sie uns, warum ein PWD zu Ihnen passt..."
            className={`input pl-11 bg-white/90 resize-none ${errors.message ? 'input-error' : ''}`}
          />
        </div>
        {errors.message && (
          <p className="error-message text-red-200 mt-1 flex items-center gap-1">
            <AlertCircle size={16} />
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Privacy Checkbox */}
      <div className="flex items-start gap-3">
        <input
          {...register('privacy')}
          type="checkbox"
          id="privacy"
          className="mt-1 w-4 h-4 text-petrol focus:ring-petrol rounded"
        />
        <label htmlFor="privacy" className="text-sm text-white/90">
          Ich habe die{' '}
          <a href="/datenschutz" className="underline hover:text-sand transition-colors">
            Datenschutzerklärung
          </a>{' '}
          gelesen und akzeptiere sie. *
        </label>
      </div>
      {errors.privacy && (
        <p className="error-message text-red-200 flex items-center gap-1">
          <AlertCircle size={16} />
          {errors.privacy.message}
        </p>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        fullWidth
        size="lg"
        loading={submitStatus === 'loading'}
        className={`${
          submitStatus === 'success'
            ? 'bg-green-500 hover:bg-green-600'
            : 'bg-sand text-ocean-blue hover:bg-sand-light'
        } border-0`}
        disabled={submitStatus === 'success'}
      >
        {submitStatus === 'success' ? (
          <>
            <CheckCircle size={20} />
            Erfolgreich! Wir melden uns
          </>
        ) : (
          'Auf Warteliste eintragen'
        )}
      </Button>

      {/* Trust Signals */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/20">
        <div className="flex items-center gap-2 text-white/80 text-sm">
          <CheckCircle size={18} />
          <span>Unverbindliche Anfrage</span>
        </div>
        <div className="flex items-center gap-2 text-white/80 text-sm">
          <MessageCircle size={18} />
          <span>Persönliche Beratung</span>
        </div>
        <div className="flex items-center gap-2 text-white/80 text-sm">
          <Clock size={18} />
          <span>Antwort innerhalb 24h</span>
        </div>
      </div>
    </form>
  )
}
