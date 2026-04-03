import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Scale, Phone, Mail, MapPin } from 'lucide-react'
import { SITE_MAX_WIDTH, SITE_PADDING } from '../../utils/layout'

interface FooterProps {
  isDark: boolean
}

export default function Footer({ isDark }: FooterProps) {
  const { t } = useTranslation()

  const bg          = isDark ? '#091220' : '#1B2E4B'
  const borderColor = 'rgba(255,255,255,0.08)'
  const mutedText   = 'rgba(255,255,255,0.5)'
  const bodyText    = 'rgba(255,255,255,0.75)'

  const linkStyle = {
    fontFamily: 'Inter, sans-serif', fontSize: '13px', color: bodyText,
    textDecoration: 'none', lineHeight: '2', display: 'block', transition: 'color 0.15s',
  }

  const colHeadStyle = {
    fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 600 as const,
    color: '#C9A84C', letterSpacing: '0.14em', textTransform: 'uppercase' as const,
    marginBottom: '14px',
  }

  return (
    <footer role="contentinfo" style={{ background: bg, transition: 'background 0.2s', marginTop: 'auto' }}>
      <div style={{ maxWidth: SITE_MAX_WIDTH, margin: '0 auto', padding: SITE_PADDING }}>
        <div style={{
          paddingTop: '48px', paddingBottom: '40px',
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '40px',
        }}
        className="footer-grid"
        >

          {/* Column 1 — Brand */}
          <div>
            <NavLink to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <Scale size={20} color="#C9A84C" strokeWidth={1.5} />
              <div>
                <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '17px', fontWeight: 700, color: '#ffffff', lineHeight: 1 }}>
                  CS <span style={{ color: '#C9A84C' }}>Law</span>
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '2px' }}>
                  & Associates
                </div>
              </div>
            </NavLink>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: bodyText, lineHeight: '1.7', maxWidth: '280px', marginBottom: '16px' }}>
              {t('footer.tagline')}
            </p>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: mutedText, lineHeight: '1.6' }}>
              <span style={{ color: '#C9A84C', fontWeight: 600 }}>{t('footer.we_speak')} </span>
              English · Español · Polski · Français · العربية
            </div>
          </div>

          {/* Column 2 — Practice Areas */}
          <div>
            <div style={colHeadStyle}>{t('footer.practice_areas')}</div>
            {[
              t('practice.car_title'),
              t('practice.slip_title'),
              t('practice.workplace_title'),
              t('practice.medical_title'),
              t('practice.wrongful_title'),
              t('practice.product_title'),
            ].map(area => (
              <NavLink key={area} to="/services" style={linkStyle}>{area}</NavLink>
            ))}
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <div style={colHeadStyle}>{t('footer.quick_links')}</div>
            <NavLink to="/"             style={linkStyle}>{t('nav.home')}</NavLink>
            <NavLink to="/services"     style={linkStyle}>{t('nav.services')}</NavLink>
            <NavLink to="/about"        style={linkStyle}>{t('nav.about')}</NavLink>
            <NavLink to="/faq"          style={linkStyle}>{t('nav.faq')}</NavLink>
            <NavLink to="/contact"      style={linkStyle}>{t('nav.contact')}</NavLink>
            <NavLink to="/intake"       style={linkStyle}>{t('nav.intake')}</NavLink>
            <NavLink to="/consultation" style={linkStyle}>{t('nav.consultation')}</NavLink>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <div style={colHeadStyle}>{t('footer.contact')}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="tel:+13125550100" style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={13} color="#C9A84C" strokeWidth={1.5} />
                (312) 555-0100
              </a>
              <a href="mailto:szewczyklaw@gmail.com" style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={13} color="#C9A84C" strokeWidth={1.5} />
                szewczyklaw@gmail.com
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={13} color="#C9A84C" strokeWidth={1.5} style={{ marginTop: '3px', flexShrink: 0 }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: bodyText, lineHeight: '1.6' }}>
                  Chicago, Illinois
                </span>
              </div>
              <NavLink to="/consultation" style={{
                display: 'inline-block', marginTop: '8px',
                fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500,
                background: '#C0392B', color: '#ffffff', padding: '9px 18px',
                borderRadius: '4px', textDecoration: 'none', textAlign: 'center' as const,
              }}>
                {t('nav.consultation')}
              </NavLink>
            </div>
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${borderColor}` }} />

        <div style={{ padding: '20px 0 8px' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: mutedText, lineHeight: '1.7', fontStyle: 'italic' }}>
            {t('footer.disclaimer')}
          </p>
        </div>

        <div style={{ borderTop: `1px solid ${borderColor}` }} />

        <div style={{
          padding: '16px 0', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: '8px',
        }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: mutedText }}>
            © {new Date().getFullYear()} Conrad Szewczyk and Associates. {t('footer.rights')}
          </span>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: mutedText }}>
            {t('footer.licensed')}
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
