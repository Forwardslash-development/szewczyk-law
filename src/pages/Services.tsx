import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, CheckCircle } from 'lucide-react'

interface ServicesProps {
  isDark: boolean
}

const SERVICE_KEYS = [
  {
    icon: '🚗',
    titleKey: 'services_page.car_title',
    introKey: 'services_page.car_intro',
    pointKeys: ['services_page.car_p1', 'services_page.car_p2', 'services_page.car_p3', 'services_page.car_p4', 'services_page.car_p5'],
  },
  {
    icon: '🏥',
    titleKey: 'services_page.medical_title',
    introKey: 'services_page.medical_intro',
    pointKeys: ['services_page.medical_p1', 'services_page.medical_p2', 'services_page.medical_p3', 'services_page.medical_p4', 'services_page.medical_p5'],
  },
  {
    icon: '🏗',
    titleKey: 'services_page.workplace_title',
    introKey: 'services_page.workplace_intro',
    pointKeys: ['services_page.workplace_p1', 'services_page.workplace_p2', 'services_page.workplace_p3', 'services_page.workplace_p4', 'services_page.workplace_p5'],
  },
  {
    icon: '🚶',
    titleKey: 'services_page.slip_title',
    introKey: 'services_page.slip_intro',
    pointKeys: ['services_page.slip_p1', 'services_page.slip_p2', 'services_page.slip_p3', 'services_page.slip_p4', 'services_page.slip_p5'],
  },
  {
    icon: '⚖',
    titleKey: 'services_page.wrongful_title',
    introKey: 'services_page.wrongful_intro',
    pointKeys: ['services_page.wrongful_p1', 'services_page.wrongful_p2', 'services_page.wrongful_p3', 'services_page.wrongful_p4', 'services_page.wrongful_p5'],
  },
  {
    icon: '📦',
    titleKey: 'services_page.product_title',
    introKey: 'services_page.product_intro',
    pointKeys: ['services_page.product_p1', 'services_page.product_p2', 'services_page.product_p3', 'services_page.product_p4', 'services_page.product_p5'],
  },
]

export default function Services({ isDark }: ServicesProps) {
  const { t } = useTranslation()

  const heroBg       = isDark ? '#0A1628' : '#1B2E4B'
  const pageBg       = isDark ? '#0F1C2E' : '#F8F5F0'
  const cardBg       = isDark ? '#162540' : '#FFFFFF'
  const cardBorder   = isDark ? 'rgba(255,255,255,0.08)' : '#E5E0D8'
  const headingColor = isDark ? '#F9FAFB' : '#1B2E4B'
  const bodyColor    = isDark ? '#D1D5DB' : '#4B5563'

  return (
    <div style={{ background: pageBg, transition: 'background 0.2s' }}>

      {/* Hero */}
      <section style={{ background: heroBg, padding: '64px 24px', transition: 'background 0.2s' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600,
            color: '#C9A84C', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '16px',
          }}>
            {t('services_page.overline')}
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700,
            color: '#ffffff', lineHeight: 1.15, marginBottom: '16px', maxWidth: '600px',
          }}>
            {t('services_page.title')}
          </h1>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '16px',
            color: 'rgba(255,255,255,0.7)', maxWidth: '520px', lineHeight: 1.7,
          }}>
            {t('services_page.subtitle')}
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px',
          }}>
            {SERVICE_KEYS.map(({ icon, titleKey, introKey, pointKeys }) => (
              <div key={titleKey} style={{
                background: cardBg, border: `1px solid ${cardBorder}`,
                borderRadius: '8px', padding: '28px',
                display: 'flex', flexDirection: 'column', gap: '16px',
                transition: 'background 0.2s',
              }}>
                <div style={{
                  width: '48px', height: '48px',
                  background: isDark ? 'rgba(201,168,76,0.1)' : '#F0EBE3',
                  borderRadius: '8px', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: '24px',
                }}>
                  {icon}
                </div>
                <h2 style={{
                  fontFamily: 'Playfair Display, Georgia, serif', fontSize: '20px',
                  fontWeight: 600, color: headingColor, margin: 0, transition: 'color 0.2s',
                }}>
                  {t(titleKey)}
                </h2>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '14px', color: bodyColor,
                  lineHeight: 1.75, margin: 0, transition: 'color 0.2s',
                }}>
                  {t(introKey)}
                </p>
                <div style={{
                  borderTop: `1px solid ${cardBorder}`, paddingTop: '16px',
                  display: 'flex', flexDirection: 'column', gap: '8px',
                }}>
                  {pointKeys.map(pointKey => (
                    <div key={pointKey} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <CheckCircle size={14} color="#C9A84C" strokeWidth={2} style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span style={{
                        fontFamily: 'Inter, sans-serif', fontSize: '13px', color: bodyColor,
                        lineHeight: 1.6, transition: 'color 0.2s',
                      }}>
                        {t(pointKey)}
                      </span>
                    </div>
                  ))}
                </div>
                <NavLink to="/consultation" style={{
                  marginTop: 'auto', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500,
                  color: isDark ? '#C9A84C' : '#1B2E4B', textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  paddingTop: '8px', borderTop: `1px solid ${cardBorder}`,
                }}>
                  {t('services_page.discuss_btn')}
                  <ArrowRight size={13} strokeWidth={2} />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: heroBg, padding: '64px 24px', textAlign: 'center', transition: 'background 0.2s' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 600,
            color: '#ffffff', marginBottom: '14px',
          }}>
            {t('services_page.cta_title')}
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '16px',
            color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '28px',
          }}>
            {t('services_page.cta_desc')}
          </p>
          <NavLink to="/consultation" style={{
            fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 500,
            background: '#C0392B', color: '#ffffff', padding: '13px 32px',
            borderRadius: '4px', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '8px',
          }}>
            {t('services_page.cta_btn')}
            <ArrowRight size={16} strokeWidth={2} />
          </NavLink>
        </div>
      </section>

    </div>
  )
}
