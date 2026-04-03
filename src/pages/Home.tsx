import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, CheckCircle, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { AnimatedSection, staggerContainer, fadeUp, fadeIn } from '../components/ui/AnimatedSection'

interface HomeProps {
  isDark: boolean
}

const TRUST_BADGES = [
  { key: 'trust.no_fee'       },
  { key: 'trust.free_consult' },
  { key: 'trust.available'    },
  { key: 'trust.licensed'     },
]

const PRACTICE_AREA_KEYS = [
  { icon: '🚗', titleKey: 'practice.car_title',       descKey: 'practice.car_desc'       },
  { icon: '🏥', titleKey: 'practice.medical_title',   descKey: 'practice.medical_desc'   },
  { icon: '🏗', titleKey: 'practice.workplace_title', descKey: 'practice.workplace_desc' },
  { icon: '🚶', titleKey: 'practice.slip_title',      descKey: 'practice.slip_desc'      },
  { icon: '⚖',  titleKey: 'practice.wrongful_title',  descKey: 'practice.wrongful_desc'  },
  { icon: '📦', titleKey: 'practice.product_title',   descKey: 'practice.product_desc'   },
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
        <motion.div
          style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp} style={{
            fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600,
            color: '#C9A84C', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '20px',
          }}>
            Personal Injury Law · Chicago, Illinois
          </motion.div>

          <motion.h1 variants={fadeUp} style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700,
            color: '#FFFFFF', lineHeight: 1.15, marginBottom: '20px', letterSpacing: '-0.5px',
          }}>
            {t('hero.headline')}
          </motion.h1>

          <motion.p variants={fadeUp} style={{
            fontFamily: 'Inter, sans-serif', fontSize: 'clamp(15px, 2vw, 18px)',
            fontWeight: 400, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7,
            maxWidth: '580px', margin: '0 auto 36px',
          }}>
            {t('hero.subheadline')}
          </motion.p>

          <motion.div variants={fadeUp} style={{
            display: 'flex', gap: '12px', justifyContent: 'center',
            flexWrap: 'wrap', marginBottom: '48px',
          }}>
            <NavLink to="/consultation" style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 500,
              background: '#C0392B', color: '#ffffff', padding: '13px 28px',
              borderRadius: '4px', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
            }}>
              {t('hero.cta_primary')}
              <ArrowRight size={16} strokeWidth={2} />
            </NavLink>
            <NavLink to="/services" style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 400,
              background: 'transparent', color: 'rgba(255,255,255,0.85)',
              padding: '13px 28px', borderRadius: '4px', textDecoration: 'none',
              border: '1.5px solid rgba(255,255,255,0.25)',
            }}>
              {t('hero.cta_secondary')}
            </NavLink>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            {TRUST_BADGES.map(({ key }) => (
              <motion.div key={key} variants={fadeIn} style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '6px 14px', background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px',
                fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 500,
                color: 'rgba(255,255,255,0.85)',
              }}>
                <CheckCircle size={12} color="#C9A84C" strokeWidth={2} />
                {t(key)}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Phone bar */}
      <section aria-label="Contact bar" style={{ background: '#C0392B', padding: '14px 24px' }}>
        <div style={{
          maxWidth: '1400px', margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '10px', flexWrap: 'wrap',
        }}>
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
          >
            <Phone size={15} color="rgba(255,255,255,0.9)" strokeWidth={1.5} />
          </motion.div>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500, color: '#ffffff' }}>
            {t('phone_bar.call_now')}
          </span>
          <a href="tel:+13125550100" style={{
            fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 600,
            color: '#ffffff', textDecoration: 'none', letterSpacing: '0.02em',
          }}>
            (312) 555-0100
          </a>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>
            {t('phone_bar.tagline')}
          </span>
        </div>
      </section>

      {/* Practice Areas */}
      <section aria-label="Practice areas" style={{ background: sectionBg, padding: '72px 24px', transition: 'background 0.2s' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

          <AnimatedSection style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{
              fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600,
              color: '#C9A84C', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '12px',
            }}>
              How We Can Help
            </div>
            <h2 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 600,
              color: headingColor, marginBottom: '14px', transition: 'color 0.2s',
            }}>
              {t('services.title')}
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '16px', color: bodyColor,
              maxWidth: '500px', margin: '0 auto', lineHeight: 1.7,
            }}>
              {t('services.subtitle')}
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="practice-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            }}
          >
            {PRACTICE_AREA_KEYS.map(({ icon, titleKey, descKey }) => (
              <motion.div key={titleKey} variants={fadeUp}>
                <NavLink
                  to="/services"
                  style={{
                    background: cardBg, border: `1px solid ${cardBorder}`,
                    borderRadius: '8px', padding: '24px', textDecoration: 'none',
                    display: 'block', transition: 'border-color 0.15s, background 0.2s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.boxShadow = '0 8px 32px rgba(27,46,75,0.12)'
                    el.style.borderColor = '#C9A84C'
                    el.style.transform = 'translateY(-3px)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.boxShadow = 'none'
                    el.style.borderColor = cardBorder
                    el.style.transform = 'translateY(0)'
                  }}
                >
                  <div style={{
                    fontSize: '24px', marginBottom: '12px', width: '44px', height: '44px',
                    background: isDark ? 'rgba(201,168,76,0.1)' : '#F0EBE3',
                    borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {icon}
                  </div>
                  <h3 style={{
                    fontFamily: 'Playfair Display, Georgia, serif', fontSize: '17px', fontWeight: 600,
                    color: headingColor, marginBottom: '8px', transition: 'color 0.2s',
                  }}>
                    {t(titleKey)}
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '13px', color: bodyColor,
                    lineHeight: 1.7, margin: 0,
                  }}>
                    {t(descKey)}
                  </p>
                </NavLink>
              </motion.div>
            ))}
          </motion.div>

          <AnimatedSection style={{ textAlign: 'center', marginTop: '36px' }}>
            <NavLink to="/services" style={{
              fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500,
              color: isDark ? '#C9A84C' : '#1B2E4B', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '10px 22px', border: `1.5px solid ${isDark ? '#C9A84C' : '#1B2E4B'}`,
              borderRadius: '4px',
            }}>
              {t('practice.view_all')}
              <ArrowRight size={14} strokeWidth={2} />
            </NavLink>
          </AnimatedSection>
        </div>
      </section>

      {/* Bottom CTA */}
      <AnimatedSection>
        <section aria-label="Call to action" style={{
          background: heroBg, padding: '64px 24px',
          textAlign: 'center', transition: 'background 0.2s',
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 600,
              color: '#ffffff', marginBottom: '14px',
            }}>
              {t('cta.ready_title')}
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '16px',
              color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '28px',
            }}>
              {t('cta.ready_desc')}
            </p>
            <NavLink to="/consultation" style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 500,
              background: '#C0392B', color: '#ffffff', padding: '13px 32px',
              borderRadius: '4px', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
            }}>
              {t('cta.get_consult')}
              <ArrowRight size={16} strokeWidth={2} />
            </NavLink>
          </div>
        </section>
      </AnimatedSection>

      <style>{`
        @media (max-width: 1024px) {
          .practice-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .practice-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

    </div>
  )
}
