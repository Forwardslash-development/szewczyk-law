import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, Scale } from 'lucide-react'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import { SITE_MAX_WIDTH, SITE_PADDING } from '../../utils/layout'

const NAV_LINKS = [
  { key: 'nav.services',     path: '/services'     },
  { key: 'nav.about',        path: '/about'         },
  { key: 'nav.faq',          path: '/faq'           },
  { key: 'nav.contact',      path: '/contact'       },
]

export default function Nav() {
  const { t } = useTranslation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const linkStyle = {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.75)',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
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
          background: '#1B2E4B',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
        }}
      >
        <div
          style={{
            maxWidth: SITE_MAX_WIDTH,
            margin: '0 auto',
            padding: SITE_PADDING,
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
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
                textTransform: 'uppercase',
                marginTop: '2px',
              }}>
                & Associates
              </div>
            </div>
          </NavLink>

          {/* Desktop Links */}
          <div
            aria-label="Desktop navigation links"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '28px',
            }}
            className="desktop-nav"
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
                whiteSpace: 'nowrap',
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
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              padding: '4px',
            }}
            className="mobile-menu-btn"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            aria-label="Mobile navigation menu"
            style={{
              background: '#162540',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              padding: '16px 24px 24px',
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
              <LanguageSwitcher />
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

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
