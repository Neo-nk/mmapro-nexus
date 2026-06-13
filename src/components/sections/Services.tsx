import { motion } from 'framer-motion'
import { Server, Lightbulb, BarChart2, Sparkles, Database, GraduationCap } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'

const SERVICES = [
  {
    icon: Server,
    title: 'Core IT & Digital Solutions',
    description:
      'Enterprise and public-sector IT systems, professional services, and mission-critical platforms for safety, security, and operations.',
    tags: ['Enterprise IT', 'Public Sector', 'Mission-Critical'],
  },
  {
    icon: Lightbulb,
    title: 'Advisory & Strategy',
    description:
      'Business process optimisation, strategic foresight, and technology planning aligned to long-term organisational objectives.',
    tags: ['BPO', 'Strategic Foresight', 'Tech Planning'],
  },
  {
    icon: BarChart2,
    title: 'Data Analytics & Business Intelligence',
    description:
      'Turning complex data into clear insights through advanced analysis, reporting, and real-time interactive dashboards.',
    tags: ['Insights', 'Dashboards', 'Reporting'],
  },
  {
    icon: Sparkles,
    title: 'Artificial Intelligence & Machine Learning',
    description:
      'Predictive models, AI-driven solutions, and intelligent automation that enable smarter, faster decision-making at scale.',
    tags: ['Predictive Models', 'Automation', 'AI Solutions'],
  },
  {
    icon: Database,
    title: 'Data Engineering & Architecture',
    description:
      'Scalable, enterprise-grade data foundations that support analytics workloads, AI pipelines, and future organisational growth.',
    tags: ['Data Pipelines', 'Architecture', 'Scalability'],
  },
  {
    icon: GraduationCap,
    title: 'Training & Knowledge Enablement',
    description:
      'Practical, hands-on skills development programmes that build sustainable in-house technology capability and digital confidence.',
    tags: ['Skills Development', 'Workshops', 'Enablement'],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1 },
  }),
}

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-surface-50 overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none" />

      {/* Left glow accent */}
      <div
        className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59, 125, 216, 0.06) 0%, transparent 65%)',
          filter: 'blur(60px)',
          transform: 'translateY(-50%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
        <SectionTitle
          overline="What We Deliver"
          title="End-to-End Digital &"
          titleHighlight="Intelligence Solutions"
          subtitle="We bring together deep expertise across IT, data, and AI to solve complex operational and strategic challenges as one integrated partner."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, title, description, tags }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="glass-card rounded-2xl p-7 group cursor-default flex flex-col"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 125, 216, 0.1) 0%, rgba(91, 156, 246, 0.15) 100%)',
                  boxShadow: '0 6px 20px rgba(59, 125, 216, 0.12)',
                }}
              >
                <Icon size={22} className="text-brand-600 group-hover:text-brand-500 transition-colors duration-300" />
              </div>

              {/* Text */}
              <h3
                className="text-ink-900 font-semibold text-lg leading-snug mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {title}
              </h3>
              <p className="text-ink-500 text-sm leading-relaxed flex-1 mb-5">
                {description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map(tag => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full text-brand-600 border border-brand-500/25"
                    style={{ background: 'rgba(59, 125, 216, 0.06)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
