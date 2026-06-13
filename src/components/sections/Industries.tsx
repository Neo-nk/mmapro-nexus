import { motion } from 'framer-motion'
import { ShieldCheck, Landmark, Building2, Cpu } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'

const INDUSTRIES = [
  {
    icon: ShieldCheck,
    title: 'Public Safety & Emergency Services',
    description:
      'Critical systems for law enforcement, traffic authorities, emergency response, and border security where accuracy and speed directly save lives.',
    examples: ['Traffic enforcement', 'Border control', 'Emergency dispatch', 'Access control'],
    accent: '#2855A0',
  },
  {
    icon: Landmark,
    title: 'Government & State-Owned Entities',
    description:
      'End-to-end digital transformation solutions for government departments, municipalities, and state-owned enterprises navigating e-government mandates.',
    examples: ['Vehicle licensing', 'Patient registries', 'Digital payments to govt', 'Biometric identity'],
    accent: '#A87C20',
  },
  {
    icon: Building2,
    title: 'Enterprise & Regulated Industries',
    description:
      'Scalable, compliant technology platforms for large enterprises operating in regulated environments banking, mining, logistics, and healthcare.',
    examples: ['Banking & payments', 'Mining operations', 'Supply chain', 'Healthcare systems'],
    accent: '#3B7DD8',
  },
  {
    icon: Cpu,
    title: 'Data-Intensive Environments',
    description:
      'Mission-critical data engineering and analytics deployments where insight, availability, and processing speed are non-negotiable operational requirements.',
    examples: ['Real-time analytics', 'AI inference platforms', 'Data warehouses', 'BI dashboards'],
    accent: '#5B9CF6',
  },
]

export function Industries() {
  return (
    <section id="industries" className="relative py-24 lg:py-32 bg-surface-200 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div
        className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59, 125, 216, 0.05) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
        <SectionTitle
          overline="Industries & Impact"
          title="Where Insight, Reliability &"
          titleHighlight="Speed Matter Most"
          subtitle="Mmapro Nexus works across the sectors where the cost of failure is highest and the need for intelligent, resilient technology is greatest."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {INDUSTRIES.map(({ icon: Icon, title, description, examples, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: 'easeOut' }}
              className="glass-card rounded-2xl p-7 group cursor-default"
            >
              <div className="flex items-start gap-5 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, rgba(59, 125, 216, 0.08) 0%, ${accent}18 100%)`,
                    boxShadow: `0 6px 20px ${accent}18`,
                  }}
                >
                  <Icon size={22} style={{ color: accent }} />
                </div>
                <h3
                  className="text-ink-900 font-semibold text-lg leading-snug pt-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {title}
                </h3>
              </div>

              <p className="text-ink-500 text-sm leading-relaxed mb-5">{description}</p>

              <div className="flex flex-wrap gap-2">
                {examples.map(ex => (
                  <span
                    key={ex}
                    className="text-[11px] font-medium px-3 py-1 rounded-full text-ink-600 border border-brand-500/20"
                    style={{ background: 'rgba(59, 125, 216, 0.05)' }}
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 rounded-2xl p-8 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(59, 125, 216, 0.07) 0%, rgba(59, 125, 216, 0.03) 100%)',
            border: '1px solid rgba(59, 125, 216, 0.15)',
          }}
        >
          <p
            className="text-ink-700 text-xl font-medium leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            "The future belongs to organisations that can{' '}
            <span className="text-ink-900 font-semibold">trust their systems</span>,{' '}
            <span className="text-ink-900 font-semibold">understand their data</span>, anticipate change,
            and <span className="text-gradient-brand font-semibold">act with intelligence</span>."
          </p>
          <p className="text-ink-400 text-sm mt-4">— Mmapro Nexus Philosophy</p>
        </motion.div>
      </div>
    </section>
  )
}
