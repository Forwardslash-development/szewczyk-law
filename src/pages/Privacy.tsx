import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { Shield } from 'lucide-react'

interface PrivacyProps {
  isDark: boolean
}

export default function Privacy({ isDark }: PrivacyProps) {
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

  const bullet = (text: string) => (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
      <div style={{
        width: '5px', height: '5px', borderRadius: '50%',
        background: '#C9A84C', marginTop: '8px', flexShrink: 0,
      }} />
      <span style={{
        fontFamily: 'Inter, sans-serif', fontSize: '15px',
        color: bodyColor, lineHeight: 1.7,
      }}>
        {text}
      </span>
    </div>
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
            {t('privacy.overline')}
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700,
            color: '#ffffff', lineHeight: 1.15, marginBottom: '16px', maxWidth: '600px',
          }}>
            {t('privacy.title')}
          </h1>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '14px',
            color: 'rgba(255,255,255,0.5)',
          }}>
            {t('privacy.effective')}
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
            <Shield size={15} color="#C9A84C" strokeWidth={1.5} style={{ marginTop: '2px', flexShrink: 0 }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: bodyColor, lineHeight: 1.6 }}>
              {t('privacy.translation_note')}
            </span>
          </div>

          <div style={{
            background: cardBg, border: `1px solid ${cardBorder}`,
            borderRadius: '8px', padding: '40px', transition: 'background 0.2s',
          }}>

            {body(t('privacy.intro'))}

            <div style={{ borderBottom: `1px solid ${dividerColor}`, marginBottom: '4px' }} />

            {sectionTitle(t('privacy.s1_title'))}
            {body(t('privacy.s1_body'))}

            {sectionTitle(t('privacy.s2_title'))}
            <div style={{ marginBottom: '16px' }}>
              {bullet(t('privacy.s2_p1'))}
              {bullet(t('privacy.s2_p2'))}
              {bullet(t('privacy.s2_p3'))}
              {bullet(t('privacy.s2_p4'))}
              {bullet(t('privacy.s2_p5'))}
            </div>

            {sectionTitle(t('privacy.s3_title'))}
            {body(t('privacy.s3_body'))}

            {sectionTitle(t('privacy.s4_title'))}
            {body(t('privacy.s4_intro'))}
            <div style={{ marginBottom: '16px' }}>
              {bullet(t('privacy.s4_fonts'))}
              {bullet(t('privacy.s4_hosting'))}
              {bullet(t('privacy.s4_email'))}
              {bullet(t('privacy.s4_analytics'))}
            </div>

            {sectionTitle(t('privacy.s5_title'))}
            {body(t('privacy.s5_body'))}

            {sectionTitle(t('privacy.s6_title'))}
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
                {t('privacy.s6_body')}
              </p>
            </div>

            {sectionTitle(t('privacy.s7_title'))}
            {body(t('privacy.s7_body'))}

            {sectionTitle(t('privacy.s8_title'))}
            {body(t('privacy.s8_body'))}

            {sectionTitle(t('privacy.s9_title'))}
            {body(t('privacy.s9_body'))}

            {sectionTitle(t('privacy.s10_title'))}
            {body(t('privacy.s10_body'))}

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
                <NavLink to="/terms" style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '13px',
                  color: '#C9A84C', textDecoration: 'none',
                }}>
                  Terms of Use →
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
