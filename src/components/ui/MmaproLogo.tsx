interface MmaproLogoProps {
  className?: string
  iconOnly?: boolean
  theme?: 'light' | 'dark'
}

export function MmaproLogo({ className = '', iconOnly = false, theme = 'light' }: MmaproLogoProps) {
  const nameColor = theme === 'dark' ? 'text-white' : 'text-ink-900'
  const nexusColor = theme === 'dark' ? 'text-brand-400' : 'text-brand-600'

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Arch mark — approximates the mountain/wave curves from the brand logo */}
      <svg
        viewBox="0 0 62 44"
        className="h-9 w-auto flex-shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="archGradRight" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4B5567" />
            <stop offset="35%" stopColor="#1B3B6F" />
            <stop offset="100%" stopColor="#3B7DD8" />
          </linearGradient>
        </defs>
        {/* Gray left arch */}
        <path
          d="M3 40 C3 40 11 5 26 5 C41 5 49 40 49 40"
          stroke="#6B7B94"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Blue right arch — taller, dominant */}
        <path
          d="M20 40 C20 40 31 1 49 1 C63 1 67 40 67 40"
          stroke="url(#archGradRight)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {!iconOnly && (
        <div className="flex flex-col leading-none select-none">
          <span
            className={`font-display font-bold text-[22px] ${nameColor} tracking-[-0.04em]`}
            style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
          >
            mmapro
          </span>
          <span
            className={`font-display font-semibold text-[9.5px] ${nexusColor} tracking-[0.25em] uppercase mt-0.5`}
            style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
          >
            NEXUS
          </span>
        </div>
      )}
    </div>
  )
}
