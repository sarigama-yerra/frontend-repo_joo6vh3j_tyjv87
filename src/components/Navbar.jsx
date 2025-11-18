import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/subjects', label: 'Subjects' },
  { to: '/about', label: 'About' },
  { to: '/locations', label: 'Locations' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#0A2342] text-white flex items-center justify-center font-semibold">KT</div>
            <div>
              <p className="text-[#0A2342] font-semibold leading-tight">Kensington Tutors</p>
              <p className="text-xs text-slate-500 leading-tight">London</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-[#0A2342]' : 'text-slate-600 hover:text-[#0A2342]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/book" className="ml-2 inline-flex items-center rounded-md bg-[#C5A572] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#b7955e] transition-colors">
              Book a Consultation
            </Link>
          </nav>
          <div className="md:hidden">
            <a href="/book" className="inline-flex items-center rounded-md bg-[#C5A572] px-3 py-2 text-sm font-semibold text-white shadow-sm">Book</a>
          </div>
        </div>
      </div>
    </header>
  )
}
