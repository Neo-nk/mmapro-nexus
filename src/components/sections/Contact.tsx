import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'

const CONTACT_INFO = [
  {
    icon: Phone,
    label: 'Phone',
    lines: [
      { text: '+27 83 588 2436', href: 'tel:+27835882436' },
      { text: '+27 71 181 2309', href: 'tel:+27711812309' },
    ],
  },
  {
    icon: Mail,
    label: 'Email',
    lines: [
      { text: 'info@mmapro.co.za', href: 'mailto:info@mmapro.co.za' },
      { text: 'mmabathon@mmapro.co.za', href: 'mailto:mmabathon@mmapro.co.za' },
    ],
  },
  {
    icon: MapPin,
    label: 'Office',
    lines: [
      { text: '1677 Bhubesi Drive', href: '' },
      { text: 'Eye of Africa Golf Estate, Eikenhof', href: '' },
      { text: 'Johannesburg, Gauteng 1872', href: '' },
    ],
  },
]

interface FormData {
  name: string
  email: string
  organisation: string
  message: string
}

export function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', organisation: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl text-sm text-ink-900 placeholder-ink-300 bg-white border border-brand-500/25 focus:border-brand-500/60 focus:outline-none transition-all duration-200'

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-surface-200 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59, 125, 216, 0.05) 0%, transparent 60%)',
          filter: 'blur(72px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
        <SectionTitle
          overline="Get in Touch"
          title="Let's Build Something"
          titleHighlight="Intelligent Together"
          subtitle="Whether you're modernising infrastructure, unlocking data value, or deploying AI Mmapro Nexus is your single partner from first conversation to measurable outcomes."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {CONTACT_INFO.map(({ icon: Icon, label, lines }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="glass-card rounded-2xl p-5 flex gap-4 items-start"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 125, 216, 0.1) 0%, rgba(91, 156, 246, 0.15) 100%)',
                    boxShadow: '0 4px 14px rgba(59, 125, 216, 0.12)',
                  }}
                >
                  <Icon size={17} className="text-brand-600" />
                </div>
                <div>
                  <p
                    className="text-ink-400 text-xs font-semibold tracking-[0.15em] uppercase mb-1.5"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {label}
                  </p>
                  {lines.map(({ text, href }) =>
                    href ? (
                      <a
                        key={text}
                        href={href}
                        className="block text-ink-700 hover:text-brand-600 text-sm transition-colors duration-200"
                      >
                        {text}
                      </a>
                    ) : (
                      <p key={text} className="text-ink-500 text-sm">{text}</p>
                    )
                  )}
                </div>
              </motion.div>
            ))}

            {/* Value proposition reminder */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="rounded-2xl p-5 mt-auto"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 125, 216, 0.07) 0%, rgba(59, 125, 216, 0.03) 100%)',
                border: '1px solid rgba(59, 125, 216, 0.15)',
              }}
            >
              <p
                className="text-brand-700 font-semibold mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                One Partner. Total Capability.
              </p>
              <p className="text-ink-500 text-sm leading-relaxed">
                Advisory, implementation, data, AI and ongoing support. Mmapro Nexus delivers
                integrated solutions built for critical decisions and measurable outcomes.
              </p>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 size={48} className="text-brand-500 mb-5" />
                  <h3
                    className="text-ink-900 font-semibold text-xl mb-3"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Message Received
                  </h3>
                  <p className="text-ink-500 text-sm max-w-sm leading-relaxed">
                    Thank you for reaching out. A member of the Mmapro Nexus team will be
                    in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-ink-500 text-xs font-medium mb-1.5 block">Full Name *</label>
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="text-ink-500 text-xs font-medium mb-1.5 block">Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@organisation.com"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-ink-500 text-xs font-medium mb-1.5 block">Organisation</label>
                    <input
                      name="organisation"
                      value={form.organisation}
                      onChange={handleChange}
                      placeholder="Your company or department"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-ink-500 text-xs font-medium mb-1.5 block">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or requirements..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2.5 px-8 py-3.5 font-semibold text-sm rounded-xl text-white transition-all duration-300 group"
                    style={{
                      background: 'linear-gradient(135deg, #1B3B6F 0%, #3B7DD8 100%)',
                      boxShadow: '0 8px 32px rgba(27, 59, 111, 0.25)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(59, 125, 216, 0.35)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(27, 59, 111, 0.25)'
                    }}
                  >
                    Send Message
                    <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
