import { motion } from 'framer-motion'

interface SectionTitleProps {
  overline?: string
  title: string
  titleHighlight?: string
  subtitle?: string
  centered?: boolean
}

export function SectionTitle({ overline, title, titleHighlight, subtitle, centered = false }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className={`mb-14 ${centered ? 'text-center' : ''}`}
    >
      {overline && (
        <div className={`flex items-center gap-3 mb-5 ${centered ? 'justify-center' : ''}`}>
          <div className="h-px w-10 bg-brand-500 flex-shrink-0" />
          <span
            className="text-brand-600 text-xs font-semibold tracking-[0.22em] uppercase"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {overline}
          </span>
          <div className="h-px w-10 bg-brand-500 flex-shrink-0" />
        </div>
      )}

      <h2
        className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-ink-900 mb-5"
        style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
      >
        {title}{' '}
        {titleHighlight && (
          <span className="text-gradient-brand">{titleHighlight}</span>
        )}
      </h2>

      {subtitle && (
        <p className={`text-ink-500 text-lg leading-relaxed ${centered ? 'mx-auto' : ''} max-w-2xl`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
