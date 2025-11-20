import { Link, NavLink } from 'react-router-dom'
import { Menu, LogIn, UserPlus, BrainCircuit } from 'lucide-react'
import { useState } from 'react'

export default function NavBar() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/demo', label: 'Try Demo' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/research', label: 'Research' },
    { to: '/about', label: 'About' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-orange-400 text-white shadow-md shadow-purple-500/20">
              <BrainCircuit size={20} />
            </div>
            <span className="text-white font-semibold">AI Vitamin Scan</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `text-sm ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'} transition-colors`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/login" className="px-3 py-2 text-sm text-white/90 hover:text-white inline-flex items-center gap-1">
              <LogIn size={16} /> Login
            </Link>
            <Link to="/signup" className="px-3 py-2 text-sm rounded-lg bg-white/10 hover:bg-white/20 text-white inline-flex items-center gap-1">
              <UserPlus size={16} /> Sign Up
            </Link>
          </div>

          <button onClick={() => setOpen((o) => !o)} className="md:hidden text-white">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((n) => (
              <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className="block text-slate-200">
                {n.label}
              </NavLink>
            ))}
            <div className="pt-2 flex gap-3">
              <Link to="/login" className="px-3 py-2 text-sm text-white/90 hover:text-white inline-flex items-center gap-1">
                <LogIn size={16} /> Login
              </Link>
              <Link to="/signup" className="px-3 py-2 text-sm rounded-lg bg-white/10 hover:bg-white/20 text-white inline-flex items-center gap-1">
                <UserPlus size={16} /> Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
