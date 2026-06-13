import { Mail, Phone, MapPin } from 'lucide-react'
import { MmaproLogo } from '../ui/MmaproLogo'

const FOOTER_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
]

const PRODUCTS = [
  { label: 'Patient Enrollment & Management', href: '#products' },
  { label: 'Fingerprint Management Solution', href: '#products' },
  { label: 'Mobile Contravention Assist', href: '#products' },
  { label: 'Vehicle Permit Administration', href: '#products' },
  { label: 'Online Assessment Tool', href: '#products' },
  { label: 'e-Geld Payment Gateway', href: '#products' },
]

export function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-brand-700/20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <MmaproLogo className="mb-5" theme="dark" />
            <p className="text-silver-500 text-sm leading-relaxed mb-6">
              Engineering the future of intelligent systems. Integrated technology,
              data, and intelligence delivered as one.
            </p>
            <div className="flex items-center gap-2 text-silver-600 text-xs">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              Johannesburg, South Africa
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-silver-300 font-semibold text-sm tracking-[0.15em] uppercase mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-silver-500 hover:text-brand-400 text-sm transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4
              className="text-silver-300 font-semibold text-sm tracking-[0.15em] uppercase mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Products
            </h4>
            <ul className="flex flex-col gap-3">
              {PRODUCTS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-silver-500 hover:text-brand-400 text-sm transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-silver-300 font-semibold text-sm tracking-[0.15em] uppercase mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-brand-400 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+27835882436" className="text-silver-500 hover:text-silver-300 text-sm transition-colors">
                    +27 (0) 83 588 2436
                  </a>
                  <a href="tel:+27711812309" className="text-silver-500 hover:text-silver-300 text-sm transition-colors">
                    +27 (0) 71 181 2309
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-brand-400 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@mmapro.co.za" className="text-silver-500 hover:text-brand-400 text-sm transition-colors">
                    info@mmapro.co.za
                  </a>
                  <a href="mailto:mmabathon@mmapro.co.za" className="text-silver-500 hover:text-brand-400 text-sm transition-colors">
                    mmabathon@mmapro.co.za
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-brand-400 flex-shrink-0 mt-0.5" />
                <p className="text-silver-500 text-sm leading-relaxed">
                  1677 Bhubesi Drive, Eye of Africa Golf Estate,
                  Eikenhof, Johannesburg 1872
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-silver-600 text-xs">
          <p>© {new Date().getFullYear()} Mmapro Nexus Solutions (Pty) Ltd. All rights reserved.</p>
          <p className="text-silver-700">
            Johannesburg · South Africa · Registered under the Copyright Act No. 98 of 1978
          </p>
        </div>
      </div>
    </footer>
  )
}
