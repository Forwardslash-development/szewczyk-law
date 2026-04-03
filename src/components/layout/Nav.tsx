import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, Scale, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
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
    transition: 'color 0.2s, border-color 0.2s',
  }

  const activeLinkStyle = {
    ...linkStyle,
    color: '#ffffff',
    borderBottomColor: '#C9A84C',
  }

  return (
    <>
      <motion.nav
        role="navigation"
        aria-label="Main navigation"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Scale size={22} color="#C9A84C" strokeWidth={1.5} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: '18px', fontWeight: 700,
                color: '#ffffff', lineHeight: 1,
              }}>
                CS{' '}
                <motion.span
                  style={{ color: '#C9A84C', display: 'inline-block' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  Law
                </motion.span>
              </div>
              <div style={{
                fontFamily: 'Inter, sans-serif', fontSize: '9px', fontWeight: 600,
                color: 'rgba(255,255,255,0.45)', letterSpacing: '0.14em',
                textTransform: 'uppercase' as const, marginTop: '2px',
              }}>
                &amp; Associates
              </div>
            </motion.div>
          </NavLink>

          {/* Desktop Links */}
          <motion.div
            className="desktop-nav"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } },
            }}
            style={{ display: 'flex', alignItems: 'center', gap: '28px' }}
          >
            {NAV_LINKS.map(({ key, path }) => (
              <motion.div
                key={path}
                variants={{
                  hidden: { opacity: 0, y: -6 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
                }}
              >
                <NavLink
                  to={path}
                  style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
                >
                  {t(key)}
                </NavLink>
              </motion.div>
            ))}

            <motion.div
              variants={{
                hidden: { opacity: 0, y: -6 },
                show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
              }}
            >
              <LanguageSwitcher />
            </motion.div>

            {/* Dark mode toggle */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -6 },
                show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
              }}
            >
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
                  transition: 'border-color 0.15s',
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isDark ? 'sun' : 'moon'}
                    initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    {isDark
                      ? <Sun  size={14} strokeWidth={1.5} />
                      : <Moon size={14} strokeWidth={1.5} />
                    }
                  </motion.div>
                </AnimatePresence>
              </button>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -6 },
                show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
              }}
            >
              <NavLink
                to="/consultation"
                style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500,
                  background: '#C0392B', color: '#ffffff', padding: '8px 18px',
                  borderRadius: '4px', textDecoration: 'none',
                  whiteSpace: 'nowrap' as const, display: 'block',
                }}
              >
                {t('nav.consultation')}
              </NavLink>
            </motion.div>
          </motion.div>

          {/* Mobile Hamburger */}
          <motion.button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(o => !o)}
            className="mobile-menu-btn"
            whileTap={{ scale: 0.9 }}
            style={{
              display: 'none', background: 'none', border: 'none',
              color: '#ffffff', cursor: 'pointer', padding: '4px',
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={mobileOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.18 }}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              aria-label="Mobile navigation menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{
                background: mobileBg,
                borderTop: '1px solid rgba(255,255,255,0.08)',
                padding: '16px 24px 24px',
                transition: 'background 0.2s',
              }}>
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
                  }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
                >
                  {NAV_LINKS.map(({ key, path }) => (
                    <motion.div
                      key={path}
                      variants={{
                        hidden: { opacity: 0, x: -12 },
                        show: { opacity: 1, x: 0, transition: { duration: 0.25, ease: 'easeOut' } },
                      }}
                    >
                      <NavLink
                        to={path}
                        onClick={() => setMobileOpen(false)}
                        style={({ isActive }) => ({
                          fontFamily: 'Inter, sans-serif', fontSize: '15px',
                          fontWeight: isActive ? 500 : 400,
                          color: isActive ? '#ffffff' : 'rgba(255,255,255,0.7)',
                          textDecoration: 'none', padding: '10px 0',
                          borderBottom: '1px solid rgba(255,255,255,0.06)',
                          display: 'block',
                        })}
                      >
                        {t(key)}
                      </NavLink>
                    </motion.div>
                  ))}
                </motion.div>

                <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <LanguageSwitcher />
                    <button
                      onClick={onToggleDark}
                      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                      style={{
                        background: 'transparent', border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '3px', color: 'rgba(255,255,255,0.75)',
                        cursor: 'pointer', padding: '5px 7px',
                        display: 'flex', alignItems: 'center',
                      }}
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                          key={isDark ? 'sun-m' : 'moon-m'}
                          initial={{ opacity: 0, rotate: -90 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          exit={{ opacity: 0, rotate: 90 }}
                          transition={{ duration: 0.18 }}
                        >
                          {isDark ? <Sun size={14} strokeWidth={1.5} /> : <Moon size={14} strokeWidth={1.5} />}
                        </motion.div>
                      </AnimatePresence>
                    </button>
                  </div>
                  <NavLink
                    to="/consultation"
                    onClick={() => setMobileOpen(false)}
                    style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500,
                      background: '#C0392B', color: '#ffffff', padding: '10px 20px',
                      borderRadius: '4px', textDecoration: 'none',
                    }}
                  >
                    {t('nav.consultation')}
                  </NavLink>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
