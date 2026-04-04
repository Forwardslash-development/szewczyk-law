import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Scale, Award, BookOpen, Users, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { AnimatedSection, staggerContainer, fadeUp } from '../components/ui/AnimatedSection'

interface AboutProps {
  isDark: boolean
}

export default function About({ isDark }: AboutProps) {
  const { t } = useTranslation()

  const heroBg       = isDark ? '#0A1628' : '#1B2E4B'
  const pageBg       = isDark ? '#0F1C2E' : '#F8F5F0'
  const cardBg       = isDark ? '#162540' : '#FFFFFF'
  const cardBorder   = isDark ? 'rgba(255,255,255,0.08)' : '#E5E0D8'
  const headingColor = isDark ? '#F9FAFB' : '#1B2E4B'
  const bodyColor    = isDark ? '#D1D5DB' : '#4B5563'
  const sectionBg    = isDark ? '#0D1929' : '#FFFFFF'
  const mutedColor   = isDark ? 'rgba(255,255,255,0.60)' : '#9CA3AF'

  const STATS = [
    { value: '[X]+',   labelKey: 'about.stat_years_label'     },
    { value: '[X]+',   labelKey: 'about.stat_cases_label'     },
    { value: '$[X]M+', labelKey: 'about.stat_recovered_label' },
    { value: '[X]+',   labelKey: 'about.stat_reviews_label'   },
  ]

  const BIO_KEYS = ['about.bio_1', 'about.bio_2', 'about.bio_3', 'about.bio_4']

  const CREDENTIALS = [
    { icon: BookOpen, titleKey: 'about.law_school_title', itemKeys: ['about.law_school_1', 'about.law_school_2'] },
    { icon: Scale,    titleKey: 'about.bar_title',        itemKeys: ['about.bar_1', 'about.bar_2', 'about.bar_3'] },
    { icon: Award,    titleKey: 'about.awards_title',     itemKeys: ['about.awards_1', 'about.awards_2', 'about.awards_3'] },
    { icon: Users,    titleKey: 'about.memberships_title', itemKeys: ['about.memberships_1', 'about.memberships_2', 'about.memberships_3'] },
  ]

  const COMMUNITY = [
    { icon: MapPin, titleKey: 'about.local_title',       descKey: 'about.local_desc'       },
    { icon: Users,  titleKey: 'about.involvement_title', descKey: 'about.involvement_desc' },
    { icon: Award,  titleKey: 'about.probono_title',     descKey: 'about.probono_desc'     },
  ]

  const statStyle = {
    textAlign: 'center' as const,
    padding: '28px 20px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
  }

  return (
    <div style={{ background: pageBg, transition: 'background 0.2s' }}>

      {/* Hero Banner */}
      <section style={{ background: heroBg, padding: '64px 24px', transition: 'background 0.2s' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp} style={{
              fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600,
              color: '#C9A84C', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '16px',
            }}>
              {t('about.overline')}
            </motion.div>
            <motion.h1 variants={fadeUp} style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700,
              color: '#ffffff', lineHeight: 1.15, marginBottom: '16px', maxWidth: '700px',
            }}>
              {t('about.title')}
            </motion.h1>
            <motion.p variants={fadeUp} style={{
              fontFamily: 'Inter, sans-serif', fontSize: '16px',
              color: 'rgba(255,255,255,0.7)', marginBottom: '32px',
            }}>
              {t('about.subtitle')}
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '16px', maxWidth: '700px',
              }}
            >
              {STATS.map(({ value, labelKey }) => (
                <motion.div key={labelKey} variants={fadeUp} style={statStyle}>
                  <div style={{
                    fontFamily: 'Playfair Display, Georgia, serif', fontSize: '28px',
                    fontWeight: 700, color: '#C9A84C', lineHeight: 1, marginBottom: '6px',
                  }}>
                    {value}
                  </div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 500,
                    color: 'rgba(255,255,255,0.6)', letterSpacing: '0.06em',
                  }}>
                    {t(labelKey)}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section style={{ background: sectionBg, padding: '72px 24px', transition: 'background 0.2s' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '64px', alignItems: 'start' }}
            className="about-grid">

            {/* Photo + contact card */}
            <AnimatedSection>
              <div style={{
                width: '100%', aspectRatio: '3/4',
                background: isDark ? '#1B2E4B' : '#E5E0D8', borderRadius: '8px',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', gap: '12px', border: `1px solid ${cardBorder}`,
              }}>
                <div style={{
                  width: '80px', height: '80px', borderRadius: '50%',
                  background: isDark ? '#2A4A72' : '#C9A84C',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{
                    fontFamily: 'Playfair Display, Georgia, serif',
                    fontSize: '28px', fontWeight: 700, color: '#ffffff',
                  }}>CS</span>
                </div>
                <span style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '12px',
                  color: mutedColor, fontStyle: 'italic',
                }}>
                  {t('about.photo_placeholder')}
                </span>
              </div>

              <div style={{
                marginTop: '20px', background: cardBg,
                border: `1px solid ${cardBorder}`, borderRadius: '8px', padding: '20px',
              }}>
                <div style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 600,
                  color: '#C9A84C', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '14px',
                }}>
                  {t('about.contact_overline')}
                </div>
                {[
                  { icon: '📞', label: '(312) 555-0100'        },
                  { icon: '✉️', label: 'szewczyklaw@gmail.com' },
                  { icon: '📍', label: 'Chicago, Illinois'     },
                ].map(({ icon, label }) => (
                  <div key={label} style={{
                    display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px',
                    fontFamily: 'Inter, sans-serif', fontSize: '13px', color: bodyColor,
                  }}>
                    <span style={{ fontSize: '14px' }}>{icon}</span>
                    {label}
                  </div>
                ))}
                <NavLink to="/consultation" style={{
                  display: 'block', marginTop: '16px',
                  fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500,
                  background: '#C0392B', color: '#ffffff', padding: '10px 16px',
                  borderRadius: '4px', textDecoration: 'none', textAlign: 'center',
                }}>
                  {t('about.schedule_btn')}
                </NavLink>
              </div>
            </AnimatedSection>

            {/* Bio text */}
            <AnimatedSection delay={0.15}>
              <div style={{
                fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600,
                color: '#C9A84C', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px',
              }}>
                {t('about.meet_overline')}
              </div>
              <h2 style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 600,
                color: headingColor, marginBottom: '24px', transition: 'color 0.2s',
              }}>
                {t('about.meet_title')}
              </h2>

              {BIO_KEYS.map((key) => {
                const text = t(key)
                return (
                  <p key={key} style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '15px', color: bodyColor,
                    lineHeight: 1.8, marginBottom: '20px', transition: 'color 0.2s',
                    fontStyle: text.startsWith('[') ? 'italic' : 'normal',
                  }}>
                    {text}
                  </p>
                )
              })}

              <div style={{
                borderLeft: '3px solid #C9A84C', paddingLeft: '20px',
                marginTop: '32px', marginBottom: '32px',
              }}>
                <p style={{
                  fontFamily: 'Playfair Display, Georgia, serif', fontSize: '20px',
                  fontStyle: 'italic', color: headingColor, lineHeight: 1.6, margin: 0,
                }}>
                  "{t('about.quote')}"
                </p>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '13px',
                  color: mutedColor, marginTop: '10px',
                }}>
                  {t('about.quote_attr')}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section style={{ background: pageBg, padding: '72px 24px', transition: 'background 0.2s' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{
              fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600,
              color: '#C9A84C', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '12px',
            }}>
              {t('about.credentials_overline')}
            </div>
            <h2 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 600,
              color: headingColor, transition: 'color 0.2s',
            }}>
              {t('about.credentials_title')}
            </h2>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}
          >
            {CREDENTIALS.map(({ icon: Icon, titleKey, itemKeys }) => (
              <motion.div key={titleKey} variants={fadeUp} style={{
                background: cardBg, border: `1px solid ${cardBorder}`,
                borderRadius: '8px', padding: '24px', transition: 'background 0.2s',
              }}>
                <div style={{
                  width: '40px', height: '40px',
                  background: isDark ? 'rgba(201,168,76,0.1)' : '#F0EBE3',
                  borderRadius: '8px', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', marginBottom: '14px',
                }}>
                  <Icon size={18} color="#C9A84C" strokeWidth={1.5} />
                </div>
                <h3 style={{
                  fontFamily: 'Playfair Display, Georgia, serif', fontSize: '17px', fontWeight: 600,
                  color: headingColor, marginBottom: '14px', transition: 'color 0.2s',
                }}>
                  {t(titleKey)}
                </h3>
                {itemKeys.map((itemKey) => {
                  const text = t(itemKey)
                  return (
                    <div key={itemKey} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                      <div style={{
                        width: '4px', height: '4px', borderRadius: '50%',
                        background: '#C9A84C', marginTop: '7px', flexShrink: 0,
                      }} />
                      <span style={{
                        fontFamily: 'Inter, sans-serif', fontSize: '13px',
                        color: text.startsWith('[') ? mutedColor : bodyColor,
                        lineHeight: 1.6, fontStyle: text.startsWith('[') ? 'italic' : 'normal',
                      }}>
                        {text}
                      </span>
                    </div>
                  )
                })}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Community */}
      <section style={{ background: sectionBg, padding: '72px 24px', transition: 'background 0.2s' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{
              fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600,
              color: '#C9A84C', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '12px',
            }}>
              {t('about.community_overline')}
            </div>
            <h2 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 600,
              color: headingColor, transition: 'color 0.2s',
            }}>
              {t('about.community_title')}
            </h2>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}
          >
            {COMMUNITY.map(({ icon: Icon, titleKey, descKey }) => (
              <motion.div key={titleKey} variants={fadeUp} style={{
                background: cardBg, border: `1px solid ${cardBorder}`,
                borderRadius: '8px', padding: '24px', transition: 'background 0.2s',
              }}>
                <div style={{
                  width: '40px', height: '40px',
                  background: isDark ? 'rgba(201,168,76,0.1)' : '#F0EBE3',
                  borderRadius: '8px', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', marginBottom: '14px',
                }}>
                  <Icon size={18} color="#C9A84C" strokeWidth={1.5} />
                </div>
                <h3 style={{
                  fontFamily: 'Playfair Display, Georgia, serif', fontSize: '17px', fontWeight: 600,
                  color: headingColor, marginBottom: '10px', transition: 'color 0.2s',
                }}>
                  {t(titleKey)}
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '13px', color: mutedColor,
                  lineHeight: 1.7, fontStyle: 'italic', margin: 0,
                }}>
                  {t(descKey)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <AnimatedSection>
        <section style={{ background: heroBg, padding: '64px 24px', textAlign: 'center', transition: 'background 0.2s' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 600,
              color: '#ffffff', marginBottom: '14px',
            }}>
              {t('about.cta_title')}
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '16px',
              color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '28px',
            }}>
              {t('about.cta_desc')}
            </p>
            <NavLink to="/consultation" style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 500,
              background: '#C0392B', color: '#ffffff', padding: '13px 32px',
              borderRadius: '4px', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
            }}>
              {t('about.cta_btn')}
              <ArrowRight size={16} strokeWidth={2} />
            </NavLink>
          </div>
        </section>
      </AnimatedSection>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </div>
  )
}
