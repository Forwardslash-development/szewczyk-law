import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, CheckCircle, Phone } from 'lucide-react'

interface HomeProps {
  isDark: boolean
}

const TRUST_BADGES = [
  { key: 'trust.no_fee'       },
  { key: 'trust.free_consult' },
  { key: 'trust.available'    },
  { key: 'trust.licensed'     },
]

const PRACTICE_AREAS = [
  { icon: '🚗', title: 'Car and Truck Accidents',  desc: 'Injured in a collision? We handle all insurance negotiations and fight for maximum compensation.' },
  { icon: '🏥', title: 'Medical Malpractice',      desc: 'When healthcare providers fail their patients, we hold them accountable and pursue justice.' },
  { icon: '🏗', title: 'Workplace Injuries',       desc: "Hurt on the job? You have rights. We navigate workers comp and third-party claims." },
  { icon: '🚶', title: 'Slip and Fall',            desc: "Property owners have a duty of care. When they fail, we make sure you are made whole." },
  { icon: '⚖', title: 'Wrongful Death',            desc: 'We stand with families who have lost loved ones due to negligence, fighting for the justice they deserve.' },
  { icon: '📦', title: 'Product Liability',        desc: 'Defective products cause serious harm. We hold manufacturers and distributors responsible.' },
]

export default function Home({ isDark }: HomeProps) {
  const { t } = useTranslation()

  const heroBg       = isDark ? '#0A1628' : '#1B2E4B'
  const pageBg       = isDark ? '#0F1C2E' : '#F8F5F0'
  const cardBg       = isDark ? '#162540' : '#FFFFFF'
  const cardBorder   = isDark ? 'rgba(255,255,255,0.08)' : '#E5E0D8'
  const headingColor = isDark ? '#F9FAFB' : '#1B2E4B'
  const bodyColor    = isDark ? '#D1D5DB' : '#4B5563'
  const sectionBg    = isDark ? '#0D1929' : '#FFFFFF'

  return (
    <div style={{ background: pageBg, transition: 'background 0.2s' }}>

      {/* Hero */}
      <section aria-label="Hero" style={{ background: heroBg, transition: 'background 0.2s', padding: '80px 24px 72px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>

          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            color: '#C9A84C',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}>
            Personal Injury Law · Chicago, Illinois
          </div>

          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.15,
            marginBottom: '20px',
            letterSpacing: '-0.5px',
          }}>
            {t('hero.headline')}
          </h1>

          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(15px, 2vw, 18px)',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.7,
            maxWidth: '580px',
            margin: '0 auto 36px',
          }}>
            {t('hero.subheadline')}
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
            <NavLink to="/consultation" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              fontWeight: 500,
              background: '#C0392B',
              color: '#ffffff',
              padding: '13px 28px',
              borderRadius: '4px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              {t('hero.cta_primary')}
              <ArrowRight size={16} strokeWidth={2} />
            </NavLink>

            <NavLink to="/services" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              fontWeight: 400,
              background: 'transparent',
              color: 'rgba(255,255,255,0.85)',
              padding: '13px 28px',
              borderRadius: '4px',
              textDecoration: 'none',
              border: '1.5px solid rgba(255,255,255,0.25)',
            }}>
              {t('hero.cta_secondary')}
            </NavLink>
          </div>

          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {TRUST_BADGES.map(({ key }) => (
              <div key={key} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '20px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.85)',
              }}>
                <CheckCircle size={12} color="#C9A84C" strokeWidth={2} />
                {t(key)}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Phone bar */}
      <section aria-label="Contact bar" style={{ background: '#C0392B', padding: '14px 24px' }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
        }}>
          <Phone size={15} color="rgba(255,255,255,0.9)" strokeWidth={1.5} />
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500, color: '#ffffff' }}>
            Injured? Call us now —
          </span>
          <a href="tel:+13125550100" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            fontWeight: 600,
            color: '#ffffff',
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}>
            (312) 555-0100
          </a>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>
            · Free consultation · Available 24/7
          </span>
        </div>
      </section>

      {/* Practice Areas */}
      <section aria-label="Practice areas" style={{ background: sectionBg, padding: '72px 24px', transition: 'background 0.2s' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              color: '#C9A84C',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}>
              How We Can Help
            </div>
            <h2 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 600,
              color: headingColor,
              marginBottom: '14px',
              transition: 'color 0.2s',
            }}>
              {t('services.title')}
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              color: bodyColor,
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              {t('services.subtitle')}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}>
            {PRACTICE_AREAS.map(({ icon, title, desc }) => (
              <NavLink
                key={title}
                to="/services"
                style={{
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: '8px',
                  padding: '24px',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'border-color 0.15s, box-shadow 0.15s, background 0.2s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.boxShadow = '0 4px 24px rgba(27,46,75,0.10)'
                  el.style.borderColor = '#C9A84C'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.boxShadow = 'none'
                  el.style.borderColor = cardBorder
                }}
              >
                <div style={{
                  fontSize: '24px',
                  marginBottom: '12px',
                  width: '44px',
                  height: '44px',
                  background: isDark ? 'rgba(201,168,76,0.1)' : '#F0EBE3',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {icon}
                </div>
                <h3 style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: headingColor,
                  marginBottom: '8px',
                  transition: 'color 0.2s',
                }}>
                  {title}
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  color: bodyColor,
                  lineHeight: 1.7,
                  margin: 0,
                }}>
                  {desc}
                </p>
              </NavLink>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <NavLink to="/services" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: isDark ? '#C9A84C' : '#1B2E4B',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 22px',
              border: `1.5px solid ${isDark ? '#C9A84C' : '#1B2E4B'}`,
              borderRadius: '4px',
            }}>
              View All Practice Areas
              <ArrowRight size={14} strokeWidth={2} />
            </NavLink>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section aria-label="Call to action" style={{ background: heroBg, padding: '64px 24px', textAlign: 'center', transition: 'background 0.2s' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(24px, 3vw, 36px)',
            fontWeight: 600,
            color: '#ffffff',
            marginBottom: '14px',
          }}>
            Ready to Talk?
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.7,
            marginBottom: '28px',
          }}>
            Your first consultation is completely free.
            No obligation, no pressure — just answers.
          </p>
          <NavLink to="/consultation" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            fontWeight: 500,
            background: '#C0392B',
            color: '#ffffff',
            padding: '13px 32px',
            borderRadius: '4px',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            Get a Free Consultation
            <ArrowRight size={16} strokeWidth={2} />
          </NavLink>
        </div>
      </section>

    </div>
  )
}
