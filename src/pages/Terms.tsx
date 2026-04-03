import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { FileText } from 'lucide-react'

interface TermsProps {
  isDark: boolean
}

export default function Terms({ isDark }: TermsProps) {
  const { t } = useTranslation()

  const heroBg       = isDark ? '#0A1628' : '#1B2E4B'
  const pageBg       = isDark ? '#0F1C2E' : '#F8F5F0'
  const cardBg       = isDark ? '#162540' : '#FFFFFF'
  const cardBorder   = isDark ? 'rgba(255,255,255,0.08)' : '#E5E0D8'
  const headingColor = isDark ? '#F9FAFB' : '#1B2E4B'
  const bodyColor    = isDark ? '#D1D5DB' : '#4B5563'
  const mutedColor   = isDark ? 'rgba(255,255,255,0.45)' : '#9CA3AF'
  const dividerColor = isDark ? 'rgba(255,255,255,0.06)' : '#F0EBE3'

  const sectionTitle = (text: string) => (
    <h2 style={{
      fontFamily: 'Playfair Display, Georgia, serif',
      fontSize: '20px', fontWeight: 600,
      color: headingColor, marginBottom: '12px',
      marginTop: '36px', transition: 'color 0.2s',
    }}>
      {text}
    </h2>
  )

  const body = (text: string) => (
    <p style={{
      fontFamily: 'Inter, sans-serif', fontSize: '15px',
      color: bodyColor, lineHeight: 1.8, marginBottom: '12px',
      transition: 'color 0.2s',
    }}>
      {text}
    </p>
  )

  return (
    <div style={{ background: pageBg, transition: 'background 0.2s' }}>

      {/* Hero */}
      <section style={{ background: heroBg, padding: '64px 24px', transition: 'background 0.2s' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600,
            color: '#C9A84C', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '16px',
          }}>
            {t('terms.overline')}
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700,
            color: '#ffffff', lineHeight: 1.15, marginBottom: '16px', maxWidth: '600px',
          }}>
            {t('terms.title')}
          </h1>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '14px',
            color: 'rgba(255,255,255,0.5)',
          }}>
            {t('terms.effective')}
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '56px 24px 72px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>

          {/* Translation notice */}
          <div style={{
            background: isDark ? 'rgba(201,168,76,0.08)' : '#FDF9F0',
            border: `1px solid ${isDark ? 'rgba(201,168,76,0.2)' : '#E8D99A'}`,
            borderRadius: '8px', padding: '14px 18px', marginBottom: '32px',
            display: 'flex', alignItems: 'flex-start', gap: '10px',
          }}>
            <FileText size={15} color="#C9A84C" strokeWidth={1.5} style={{ marginTop: '2px', flexShrink: 0 }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: bodyColor, lineHeight: 1.6 }}>
              {t('terms.translation_note')}
            </span>
          </div>

          <div style={{
            background: cardBg, border: `1px solid ${cardBorder}`,
            borderRadius: '8px', padding: '40px', transition: 'background 0.2s',
          }}>

            {body(t('terms.intro'))}

            <div style={{ borderBottom: `1px solid ${dividerColor}`, marginBottom: '4px' }} />

            {sectionTitle(t('terms.s1_title'))}
            {body(t('terms.s1_body'))}

            {sectionTitle(t('terms.s2_title'))}
            <div style={{
              background: isDark ? 'rgba(192,57,43,0.08)' : '#FEF2F2',
              border: `1px solid ${isDark ? 'rgba(192,57,43,0.2)' : '#FECACA'}`,
              borderRadius: '6px', padding: '16px 20px', marginBottom: '12px',
            }}>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: '14px',
                color: isDark ? '#FCA5A5' : '#991B1B',
                lineHeight: 1.7, margin: 0, fontWeight: 500,
              }}>
                {t('terms.s2_body')}
              </p>
            </div>

            {sectionTitle(t('terms.s3_title'))}
            {body(t('terms.s3_body'))}

            {sectionTitle(t('terms.s4_title'))}
            {body(t('terms.s4_body'))}

            {sectionTitle(t('terms.s5_title'))}
            {body(t('terms.s5_body'))}

            {sectionTitle(t('terms.s6_title'))}
            {body(t('terms.s6_body'))}

            {sectionTitle(t('terms.s7_title'))}
            {body(t('terms.s7_body'))}

            {sectionTitle(t('terms.s8_title'))}
            <div style={{
              background: isDark ? 'rgba(201,168,76,0.06)' : '#F8F5F0',
              borderLeft: '3px solid #C9A84C',
              padding: '14px 18px', borderRadius: '0 6px 6px 0', marginBottom: '12px',
            }}>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: '13px',
                color: bodyColor, lineHeight: 1.7, fontStyle: 'italic', margin: 0,
              }}>
                {t('terms.s8_body')}
              </p>
            </div>

            {sectionTitle(t('terms.s9_title'))}
            {body(t('terms.s9_body'))}

            {sectionTitle(t('terms.s10_title'))}
            {body(t('terms.s10_body'))}

            <div style={{
              background: isDark ? 'rgba(255,255,255,0.03)' : '#F8F5F0',
              border: `1px solid ${cardBorder}`,
              borderRadius: '6px', padding: '20px', marginTop: '8px',
            }}>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: bodyColor, lineHeight: 1.8 }}>
                <div style={{ fontWeight: 600, color: headingColor, marginBottom: '8px' }}>
                  Conrad Szewczyk &amp; Associates
                </div>
                <div>[Street Address]</div>
                <div>Chicago, Illinois [ZIP]</div>
                <div style={{ marginTop: '8px' }}>
                  <a href="tel:+13125550100" style={{ color: '#C0392B', textDecoration: 'none' }}>
                    (312) 555-0100
                  </a>
                </div>
                <div>
                  <a href="mailto:szewczyklaw@gmail.com" style={{ color: '#C0392B', textDecoration: 'none' }}>
                    szewczyklaw@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '36px', paddingTop: '24px', borderTop: `1px solid ${dividerColor}` }}>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <NavLink to="/privacy" style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '13px',
                  color: '#C9A84C', textDecoration: 'none',
                }}>
                  Privacy Policy →
                </NavLink>
                <NavLink to="/contact" style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '13px',
                  color: mutedColor, textDecoration: 'none',
                }}>
                  Contact Us →
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
