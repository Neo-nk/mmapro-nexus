import { motion } from 'framer-motion'
import { Award, Users, Network } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'

const PILLARS = [
  {
    icon: Award,
    title: 'Patented Intellectual Property',
    accentColor: '#A87C20',
    accentBg: 'rgba(201, 168, 76, 0.07)',
    accentBorder: 'rgba(201, 168, 76, 0.22)',
    stats: [
      { value: '3', label: 'Granted Patents' },
      { value: '170+', label: 'Countries Protected' },
      { value: 'USD 500M+', label: 'Estimated IP Value' },
    ],
    description:
      'Mmapro\'s biometrics technology is a ground-breaking in its architecture and computational design. It has seen the filing of three patents across more than 170 countries. This IP defence protects one of Africa\'s most significant technology assets and establishes Mmapro as a global innovator.',
    bulletPoints: [
      'Patent 2017/05007: Fingerprint Matching',
      'Patent 2017/05008: Orientation Adjustment',
      'Patent 2017/05009: Arc & Loop Classification',
    ],
  },
  {
    icon: Users,
    title: 'Skilled R&D Engineers',
    accentColor: '#2855A0',
    accentBg: 'rgba(59, 125, 216, 0.07)',
    accentBorder: 'rgba(59, 125, 216, 0.22)',
    stats: [
      { value: 'R&D', label: 'Driven Culture' },
      { value: 'Agile', label: 'Development Model' },
      { value: '0%', label: 'Product Rework Rate' },
    ],
    description:
      'We employ engineers who view every problem as an opportunity to innovate, not a wound that requires a bandage. This positions Mmapro at the centre of African technology innovation, distinct from companies that simply import and resell foreign solutions.',
    bulletPoints: [
      'Interdisciplinary research methodology',
      'Social science & futurist design approaches',
      'Near-zero product rework through Agile delivery',
    ],
  },
  {
    icon: Network,
    title: 'Strategic Partnerships',
    accentColor: '#3B7DD8',
    accentBg: 'rgba(91, 156, 246, 0.07)',
    accentBorder: 'rgba(91, 156, 246, 0.22)',
    stats: [
      { value: 'IoT', label: 'Smart Tracking' },
      { value: 'OEM', label: 'Hardware Partners' },
      { value: 'ERP', label: 'SAP, Oracle, SAGE' },
    ],
    description:
      'Strategic partnerships span IoT, smart tracking, and bespoke manufacturing, including development of Mmapro\'s own branded biometric hardware. All products integrate with major ERP systems. Partners are gradually off-boarded as internal competencies mature.',
    bulletPoints: [
      'Mmapro-branded proprietary fingerprint reader',
      'Full ERP integration (SAP, Oracle, SAGE)',
      'Continuous partner-to-capability transition',
    ],
  },
]

export function DefensiveStrategy() {
  return (
    <section id="strategy" className="relative py-24 lg:py-32 bg-surface-50 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201, 168, 76, 0.04) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
        <SectionTitle
          overline="Defensive Strategy"
          title="Protected by"
          titleHighlight="Design & Innovation"
          subtitle="Mmapro's competitive position is defended through patents, world-class engineering talent, and strategic partnerships creating durable barriers that compound over time."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {PILLARS.map(({ icon: Icon, title, accentColor, accentBg, accentBorder, stats, description, bulletPoints }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.15, ease: 'easeOut' }}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: accentBg,
                border: `1px solid ${accentBorder}`,
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              whileHover={{
                boxShadow: `0 20px 40px ${accentColor}12, 0 0 0 1px ${accentColor}28`,
                y: -4,
              }}
            >
              {/* Header */}
              <div className="p-7 pb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `linear-gradient(135deg, rgba(59, 125, 216, 0.08) 0%, ${accentColor}18 100%)`,
                    boxShadow: `0 6px 20px ${accentColor}18`,
                  }}
                >
                  <Icon size={22} style={{ color: accentColor }} />
                </div>
                <h3
                  className="text-ink-900 font-semibold text-lg leading-snug mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {title}
                </h3>
                <p className="text-ink-500 text-sm leading-relaxed">{description}</p>
              </div>

              {/* Stats row */}
              <div
                className="grid grid-cols-3 gap-px mx-7 mb-5 rounded-xl overflow-hidden"
                style={{ background: `${accentColor}14` }}
              >
                {stats.map(({ value, label }) => (
                  <div
                    key={label}
                    className="text-center py-3 px-2"
                    style={{ background: `${accentColor}07` }}
                  >
                    <p
                      className="font-display font-bold text-sm leading-tight mb-0.5"
                      style={{ color: accentColor, fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {value}
                    </p>
                    <p className="text-ink-400 text-[10px] leading-tight">{label}</p>
                  </div>
                ))}
              </div>

              {/* Bullet points */}
              <ul className="px-7 pb-7 flex flex-col gap-2.5 mt-auto">
                {bulletPoints.map(point => (
                  <li key={point} className="flex items-start gap-2.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                      style={{ background: accentColor }}
                    />
                    <span className="text-ink-700 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
