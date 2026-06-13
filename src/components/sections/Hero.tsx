import { motion, type Variants } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

const STATS = [
  { value: '3', suffix: '', label: 'Patented Technologies' },
  { value: '170', suffix: '+', label: 'Countries Protected' },
  { value: 'USD 500M', suffix: '+', label: 'IP Portfolio Value' },
  { value: '6', suffix: '+', label: 'Flagship Products' },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.4 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: 'easeOut' } },
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-surface-50"
    >
      {/* Dot grid texture */}
      <div className="absolute inset-0 bg-dot-pattern opacity-70 pointer-events-none" />

      {/* Gradient blobs */}
      <div
        className="absolute top-[15%] left-[10%] w-[520px] h-[520px] rounded-full pointer-events-none animate-blob-a"
        style={{
          background: 'radial-gradient(circle, rgba(59, 125, 216, 0.09) 0%, transparent 68%)',
          filter: 'blur(72px)',
        }}
      />
      <div
        className="absolute bottom-[20%] right-[8%] w-[420px] h-[420px] rounded-full pointer-events-none animate-blob-b"
        style={{
          background: 'radial-gradient(circle, rgba(91, 156, 246, 0.07) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute top-[55%] right-[30%] w-[280px] h-[280px] rounded-full pointer-events-none animate-blob-c"
        style={{
          background: 'radial-gradient(circle, rgba(201, 168, 76, 0.06) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-28 pb-16 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            {/* Overline */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-brand-600 to-brand-500" />
              <span
                className="text-brand-600 text-xs font-semibold tracking-[0.28em] uppercase"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Integrated Technology · Data · Intelligence
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-bold text-[2.8rem] sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem] leading-[1.08] tracking-[-0.03em] mb-8 text-ink-900"
              style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
            >
              Engineering the{' '}
              <span className="text-gradient-brand">Future</span>
              <br className="hidden sm:block" /> of Intelligent Systems
            </motion.h1>

            {/* Sub-description */}
            <motion.p
              variants={itemVariants}
              className="text-ink-500 text-lg sm:text-xl leading-relaxed mb-12 max-w-2xl"
            >
              Mmapro Nexus bridges technology infrastructure and data-driven intelligence.
              Enabling organisations to move beyond digital transformation toward{' '}
              <span className="text-ink-700 font-medium">intelligent, predictive, and adaptive operations</span>.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 font-semibold text-sm rounded-lg text-white transition-all duration-300 group"
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
                Explore Our Solutions
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 font-semibold text-sm rounded-lg text-ink-700 hover:text-ink-900 transition-all duration-300 border border-brand-500/30 hover:border-brand-600/50 hover:bg-brand-600/5"
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 border-t border-brand-500/15 bg-white/80 backdrop-blur-xl shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-500/15">
            {STATS.map(({ value, suffix, label }, i) => (
              <div key={i} className="text-center px-4 py-2">
                <p
                  className="font-display font-bold text-2xl sm:text-3xl text-gradient-gold mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {value}
                  <span className="text-gold-500">{suffix}</span>
                </p>
                <p className="text-ink-400 text-xs tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-[88px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-ink-400 hover:text-ink-600 transition-colors cursor-pointer z-10"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce-y" />
      </motion.a>
    </section>
  )
}
