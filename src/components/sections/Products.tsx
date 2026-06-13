import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Activity, Fingerprint, Car, FileText, ClipboardList, CreditCard, ChevronRight } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'

interface Product {
  icon: React.ElementType
  acronym: string
  name: string
  category: string
  categoryColor: string
  description: string
  features: string[]
  badge?: string
}

const PRODUCTS: Product[] = [
  {
    icon: Activity,
    acronym: 'PEM',
    name: 'Patient Enrollment & Management',
    category: 'Healthcare',
    categoryColor: 'text-emerald-600',
    description:
      'An integrated and centralised solution for managing patient data, medical records, and medication schedules. Connects with medical devices and supports emergency services.',
    features: [
      'Web & mobile interfaces (iOS, Android)',
      'Medical device integration',
      'Central database for multi-facility access',
      'CRM & pharmacy stock management',
      'Emergency response data assistance',
    ],
    badge: 'Healthcare & CRM',
  },
  {
    icon: Fingerprint,
    acronym: 'MFRS',
    name: 'Fingerprint Management Solution',
    category: 'Biometrics',
    categoryColor: 'text-brand-600',
    description:
      'Three patented fingerprint management modules covering Matching, Orientation Adjustment, and Classification with industry-leading accuracy improvements over standard solutions.',
    features: [
      '3 granted patents across 170+ countries',
      '30%+ reduction in false rejection rates',
      'New orientation-capture algorithm',
      'Compatible with all fingerprint readers',
      'Applicable to banking, law enforcement, smart-cities',
    ],
    badge: '3 Patents Filed',
  },
  {
    icon: Car,
    acronym: 'MCA',
    name: 'Mobile Contravention Assist',
    category: 'Law Enforcement',
    categoryColor: 'text-amber-600',
    description:
      'A fully paperless solution enabling the enforcement of traffic laws. Includes smart cameras for automated plate recognition and back-end integration to infringement records history.',
    features: [
      'Automated number plate recognition (ANPR)',
      'On-the-spot ticket printing',
      'Mobile smart-device integration for officers',
      'Automated notifications to vehicle owners',
      'Parking & access control use cases',
    ],
    badge: 'Traffic Enforcement',
  },
  {
    icon: FileText,
    acronym: 'VPA',
    name: 'Vehicle Permit Administration',
    category: 'Government',
    categoryColor: 'text-purple-600',
    description:
      'End-to-end management for vehicle licence application, authorisation, processing, approval, registration, and issuance, being online and mobile-enabled for all stakeholders.',
    features: [
      'Online application portal',
      'Mobile tracking & status alerts',
      'Licence disc issuance management',
      'Vehicle & owner records management',
      'Mining, manufacturing & construction permits',
    ],
    badge: 'Government & Fleet',
  },
  {
    icon: ClipboardList,
    acronym: 'OAT',
    name: 'Online Assessment Tool',
    category: 'Education & Research',
    categoryColor: 'text-cyan-700',
    description:
      'A highly customisable platform for conducting assessments, examinations, quizzes, surveys, and questionnaires with a real-time results computation engine.',
    features: [
      'Randomised and set question banks',
      'Real-time results & e-certificates',
      'Online and offline capability',
      'Psychometric & 360-degree reviews',
      'Learner licence exam support',
    ],
    badge: 'Education & HR',
  },
  {
    icon: CreditCard,
    acronym: 'EPG',
    name: 'e-Geld Payment Gateway',
    category: 'FinTech',
    categoryColor: 'text-rose-600',
    description:
      'A flexible payment gateway and web portal that handles and processes B2C, B2B/C2C, and G2C/G2B online transactions. Supports cards, digital wallets, and non-monetary methods.',
    features: [
      'B2C, B2B, G2C & G2B transactions',
      'Cards, wallets & non-monetary methods',
      'Peer-to-peer money transfers',
      'Government service payments',
      'Loyalty points redemption',
    ],
    badge: 'FinTech',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1 },
  }),
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const { icon: Icon, acronym, name, category, categoryColor, description, features, badge } = product

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
      onClick={() => setExpanded(v => !v)}
    >
      {/* Card header */}
      <div className="p-6 pb-5">
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 125, 216, 0.1) 0%, rgba(91, 156, 246, 0.15) 100%)',
              boxShadow: '0 6px 20px rgba(59, 125, 216, 0.12)',
            }}
          >
            <Icon size={22} className="text-brand-600" />
          </div>
          <div className="flex items-center gap-2">
            {badge && (
              <span
                className="text-[10px] font-semibold px-2.5 py-1 rounded-full text-gold-600 border border-gold-500/25"
                style={{ background: 'rgba(201, 168, 76, 0.08)', fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {badge}
              </span>
            )}
            <span
              className={`font-display font-bold text-xs tracking-[0.15em] ${categoryColor}`}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {category}
            </span>
          </div>
        </div>

        <div className="mb-3">
          <span
            className="text-brand-600 font-bold text-xs tracking-[0.2em]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {acronym}
          </span>
          <h3
            className="text-ink-900 font-semibold text-base leading-snug mt-1"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {name}
          </h3>
        </div>

        <p className="text-ink-500 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Toggle button */}
      <div
        className="px-6 py-3 flex items-center justify-between border-t border-brand-500/15 transition-colors duration-200 group-hover:border-brand-500/30"
        style={{ background: 'rgba(59, 125, 216, 0.04)' }}
      >
        <span className="text-brand-600 text-xs font-medium">
          {expanded ? 'Hide details' : 'View key features'}
        </span>
        <ChevronRight
          size={14}
          className={`text-brand-600 transition-transform duration-300 ${expanded ? 'rotate-90' : ''}`}
        />
      </div>

      {/* Expanded features */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <ul className="px-6 py-5 flex flex-col gap-2.5 border-t border-brand-500/15">
              {features.map(f => (
                <li key={f} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0 mt-1.5" />
                  <span className="text-ink-700 text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function Products() {
  return (
    <section id="products" className="relative py-24 lg:py-32 bg-surface-200 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      <div
        className="absolute -bottom-32 right-1/4 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59, 125, 216, 0.05) 0%, transparent 65%)',
          filter: 'blur(72px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
        <SectionTitle
          overline="Product Suite"
          title="Six Flagship"
          titleHighlight="Innovation Products"
          subtitle="Purpose-built for African and global markets, each product addresses a real gap, integrates with the full Mmapro suite, and supports multiple use cases."
        />

        {/* Hint */}
        <p className="text-ink-400 text-sm mb-8 -mt-8">
          Click any card to reveal key features.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.acronym} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
