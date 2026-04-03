import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, Scale, Sun, Moon } from 'lucide-react'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import { SITE_MAX_WIDTH, SITE_PADDING } from '../../utils/layout'

interface NavProps {
  isDark: boolean
  onToggleDark: () => void
}

const NAV_LINKS = [
  { key: 'nav.services',  path: '/services' },
  { key: 'nav.about',     path: '/about'    },
  { key: 'nav.faq',       path: '/faq'      },
  { key: 'nav.contact',   path: '/contact'  },
]

export default function Nav({ isDark, onToggleDark }: NavProps) {
  const { t } = useTranslation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navBg    = isDark ? '#0D1929' : '#1B2E4B'
  const mobileBg = isDark ? '#091220' : '#162540'

  const linkStyle = {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.75)',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400 as const,
    textDecoration: 'none',
    padding: '4px 0',
    borderBottom: '2px solid transparent',
    transition: 'color 0.15s, border-color 0.15s',
  }

  const activeLinkStyle = {
    ...linkStyle,
    color: '#ffffff',
    borderBottomColor: '#C9A84C',
  }

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        style={{
          background: navBg,
          position: 'sticky',
          top: 0,
          zIndex: 50,
          boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
          transition: 'background 0.2s',
        }}
      >
        <div style={{
          maxWidth: SITE_MAX_WIDTH,
          margin: '0 auto',
          padding: SITE_PADDING,
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>

          {/* Logo */}
          <NavLink
            to="/"
            aria-label="Conrad Szewczyk & Associates — Home"
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <Scale size={22} color="#C9A84C" strokeWidth={1.5} />
            <div>
              <div style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: '18px',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1,
              }}>
                CS <span style={{ color: '#C9A84C' }}>Law</span>
              </div>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '9px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.45)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase' as const,
                marginTop: '2px',
              }}>
                & Associates
              </div>
            </div>
          </NavLink>

          {/* Desktop Links */}
          <div
            className="desktop-nav"
            style={{ display: 'flex', alignItems: 'center', gap: '28px' }}
          >
            {NAV_LINKS.map(({ key, path }) => (
              <NavLink
                key={path}
                to={path}
                style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
              >
                {t(key)}
              </NavLink>
            ))}

            <LanguageSwitcher />

            {/* Dark mode toggle */}
            <button
              onClick={onToggleDark}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '3px',
                color: 'rgba(255,255,255,0.75)',
                cursor: 'pointer',
                padding: '5px 7px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'border-color 0.15s, color 0.15s',
              }}
            >
              {isDark
                ? <Sun  size={14} strokeWidth={1.5} />
                : <Moon size={14} strokeWidth={1.5} />
              }
            </button>

            <NavLink
              to="/consultation"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: 500,
                background: '#C0392B',
                color: '#ffffff',
                padding: '8px 18px',
                borderRadius: '4px',
                textDecoration: 'none',
                whiteSpace: 'nowrap' as const,
                transition: 'background 0.15s',
              }}
            >
              {t('nav.consultation')}
            </NavLink>
          </div>

          {/* Mobile Hamburger */}
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(o => !o)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              padding: '4px',
            }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            aria-label="Mobile navigation menu"
            style={{
              background: mobileBg,
              borderTop: '1px solid rgba(255,255,255,0.08)',
              padding: '16px 24px 24px',
              transition: 'background 0.2s',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {NAV_LINKS.map(({ key, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setMobileOpen(false)}
                  style={({ isActive }) => ({
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '15px',
                    fontWeight: isActive ? 500 : 400,
                    color: isActive ? '#ffffff' : 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    padding: '10px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                  })}
                >
                  {t(key)}
                </NavLink>
              ))}
            </div>
            <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <LanguageSwitcher />
                <button
                  onClick={onToggleDark}
                  aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '3px',
                    color: 'rgba(255,255,255,0.75)',
                    cursor: 'pointer',
                    padding: '5px 7px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {isDark ? <Sun size={14} strokeWidth={1.5} /> : <Moon size={14} strokeWidth={1.5} />}
                </button>
              </div>
              <NavLink
                to="/consultation"
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  background: '#C0392B',
                  color: '#ffffff',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                }}
              >
                {t('nav.consultation')}
              </NavLink>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
