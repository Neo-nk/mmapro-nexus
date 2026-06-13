import { motion } from 'framer-motion'
import { Search, PenTool, Code2, Settings, Globe, DollarSign } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'

const STEPS = [
  {
    icon: Search,
    number: '01',
    title: 'Research',
    description:
      'Rigorous multi-dimensional problem analysis using primary and secondary data sources, social science methodologies, and futurist frameworks to ensure the relevance of every solution.',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Design',
    description:
      'Human-centred design informed by deep understanding of processes, legislation, and technology environments creating blueprints that solve root causes, not symptoms.',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Prototype',
    description:
      'Agile, MVP-driven product development with multiple concurrent testing cycles. Products are refined iteratively until full working prototypes are achieved near-zero rework costs.',
  },
  {
    icon: Settings,
    number: '04',
    title: 'Standardise',
    description:
      'Integration of modular components into cohesive, flexible solutions. Multiple product versions enable easy customisation across diverse customer environments.',
  },
  {
    icon: Globe,
    number: '05',
    title: 'Localise',
    description:
      'Maximum use of local software, middleware, and hardware. Solutions are tailored to the specific geographic, regulatory, and cultural needs of each implementation environment.',
  },
  {
    icon: DollarSign,
    number: '06',
    title: 'Monetise',
    description:
      'Revenue through licensing, end-to-end implementation, and advisory services. Each product can be monetised in multiple ways maximising value from Mmapro\'s proprietary IP portfolio.',
  },
]

const INVESTMENT_PILLARS = [
  {
    title: 'Financial Investment',
    description: 'Allocating funds for continuous innovation and the development of intellectual assets.',
  },
  {
    title: 'Skills Investment',
    description: 'Recruiting and developing top human capital, R&D engineers who see every problem as an opportunity.',
  },
  {
    title: 'Time Investment',
    description: 'Adopting patience and discipline in understanding problems deeply to achieve true self-reliance.',
  },
]

export function Philosophy() {
  return (
    <section id="philosophy" className="relative py-24 lg:py-32 bg-surface-50 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59, 125, 216, 0.05) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
        <SectionTitle
          overline="Our Approach"
          title="An Integrated"
          titleHighlight="Commercialisation Framework"
          subtitle="Every product and solution follows Mmapro's proven six-stage model from deep research to scalable monetisation ensuring relevance, quality, and competitive advantage."
          centered
        />

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {STEPS.map(({ icon: Icon, number, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: 'easeOut' }}
              className="glass-card rounded-2xl p-6 group cursor-default relative overflow-hidden"
            >
              {/* Step number watermark — subtly visible on light bg */}
              <span
                className="absolute top-4 right-5 font-display font-bold text-5xl text-brand-200 select-none pointer-events-none"
                style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1 }}
              >
                {number}
              </span>

              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 relative z-10"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 125, 216, 0.1) 0%, rgba(91, 156, 246, 0.15) 100%)',
                  boxShadow: '0 6px 20px rgba(59, 125, 216, 0.12)',
                }}
              >
                <Icon size={20} className="text-brand-600" />
              </div>

              <h3
                className="text-ink-900 font-semibold text-lg mb-2 relative z-10"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {title}
              </h3>
              <p className="text-ink-500 text-sm leading-relaxed relative z-10">{description}</p>
            </motion.div>
          ))}
        </div>

        {/* Investment pillars */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="rounded-2xl p-8 border border-brand-500/15 mb-8"
            style={{ background: 'rgba(59, 125, 216, 0.05)' }}
          >
            <p
              className="text-brand-600 text-xs font-semibold tracking-[0.22em] uppercase mb-6 text-center"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Our Investment Philosophy
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {INVESTMENT_PILLARS.map(({ title, description }) => (
                <div key={title} className="text-center">
                  <h4
                    className="text-ink-900 font-semibold mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {title}
                  </h4>
                  <p className="text-ink-500 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
