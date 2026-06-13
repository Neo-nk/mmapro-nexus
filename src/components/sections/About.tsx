import { motion } from 'framer-motion'
import { Shield, Sparkles, Layers, TrendingUp, CheckCircle2 } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'

const ADVANTAGES = [
  {
    icon: Shield,
    title: 'Mission-Critical Proven',
    description:
      'Proven delivery of mission-critical IT solutions across public safety, government, and enterprise environments.',
  },
  {
    icon: Sparkles,
    title: 'Deep AI & Data Expertise',
    description:
      'Advanced predictive models, AI solutions, and intelligent automation applied to real operational challenges.',
  },
  {
    icon: Layers,
    title: 'One Partner, Total Capability',
    description:
      'A single integrated partner from infrastructure to intelligence delivering end-to-end digital outcomes.',
  },
  {
    icon: TrendingUp,
    title: 'Built for Scale & Resilience',
    description:
      'Solutions engineered for long-term value: scalable, resilient, and designed for measurable organisational impact.',
  },
]

const IP_POINTS = [
  'Full commercial rights to Mmapro IT Solutions intellectual property',
  'Independent ownership of proprietary Mmapro Nexus IP',
  'Three filed patents across 170+ countries in biometric technology',
  'R&D-led pipeline of next-generation intelligent solutions',
]

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12 },
  }),
}

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-surface-200 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Accent glow */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59, 125, 216, 0.06) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header row */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start mb-16">
          <SectionTitle
            overline="Who We Are"
            title="A Next-Generation Technology &"
            titleHighlight="Intelligence Company"
            subtitle="Formed through the strategic consolidation of Mmapro IT Solutions and TOSB DEIN, bringing together deep expertise in enterprise IT, public-sector platforms, data analytics, and artificial intelligence."
          />

          {/* Right column: dual-IP model + key message */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="lg:pt-6"
          >
            <div className="glass-card rounded-2xl p-7 mb-6">
              <p
                className="text-brand-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Our Intellectual Property Model
              </p>
              <ul className="flex flex-col gap-3">
                {IP_POINTS.map(point => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="text-brand-500 flex-shrink-0 mt-0.5" />
                    <span className="text-ink-700 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tagline callout */}
            <div
              className="glass-card rounded-2xl p-6"
              style={{ borderLeft: '3px solid #C9A84C' }}
            >
              <p
                className="text-ink-800 text-lg font-semibold leading-snug"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                "We don't just build systems, <br />we enable{' '}
                <span className="text-gradient-gold">intelligent outcomes</span>."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Advantage cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ADVANTAGES.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="glass-card rounded-2xl p-6 group cursor-default"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 125, 216, 0.1) 0%, rgba(91, 156, 246, 0.15) 100%)',
                  boxShadow: '0 4px 16px rgba(59, 125, 216, 0.12)',
                }}
              >
                <Icon size={20} className="text-brand-600" />
              </div>
              <h3
                className="text-ink-900 font-semibold text-base mb-2 leading-snug"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {title}
              </h3>
              <p className="text-ink-500 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
