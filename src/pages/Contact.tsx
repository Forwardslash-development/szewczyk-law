import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react'

interface ContactProps {
  isDark: boolean
}

const INITIAL_FORM = {
  name:     '',
  phone:    '',
  email:    '',
  caseType: '',
  message:  '',
}

export default function Contact({ isDark }: ContactProps) {
  const { t } = useTranslation()
  const [form, setForm]           = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors]       = useState<Partial<typeof INITIAL_FORM>>({})

  const heroBg       = isDark ? '#0A1628' : '#1B2E4B'
  const pageBg       = isDark ? '#0F1C2E' : '#F8F5F0'
  const cardBg       = isDark ? '#162540' : '#FFFFFF'
  const cardBorder   = isDark ? 'rgba(255,255,255,0.08)' : '#E5E0D8'
  const headingColor = isDark ? '#F9FAFB' : '#1B2E4B'
  const bodyColor    = isDark ? '#D1D5DB' : '#4B5563'
  const inputBg      = isDark ? '#0F1C2E' : '#FAFAF9'
  const inputBorder  = isDark ? 'rgba(255,255,255,0.15)' : '#D1CBC1'
  const labelColor   = isDark ? '#E5E7EB' : '#2C2C2C'
  const mutedColor   = isDark ? 'rgba(255,255,255,0.45)' : '#9CA3AF'

  function validate() {
    const e: Partial<typeof INITIAL_FORM> = {}
    if (!form.name.trim())    e.name    = t('contact.name_error')
    if (!form.phone.trim())   e.phone   = t('contact.phone_error')
    if (!form.email.trim())   e.email   = t('contact.email_error')
    if (!form.message.trim()) e.message = t('contact.message_error')
    return e
  }

  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setSubmitted(true)
  }

  function handleChange(field: keyof typeof INITIAL_FORM, value: string) {
    setForm(f => ({ ...f, [field]: value }))
    if (errors[field]) setErrors(e => ({ ...e, [field]: undefined }))
  }

  const inputStyle = {
    fontFamily: 'Inter, sans-serif', fontSize: '14px', padding: '10px 12px',
    border: `1.5px solid ${inputBorder}`, borderRadius: '4px',
    color: isDark ? '#F9FAFB' : '#2C2C2C', background: inputBg,
    width: '100%', outline: 'none', transition: 'border-color 0.15s',
  }

  const labelStyle = {
    fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600 as const,
    color: labelColor, display: 'block', marginBottom: '5px', letterSpacing: '0.03em',
  }

  const errorStyle = {
    fontFamily: 'Inter, sans-serif', fontSize: '11px',
    color: '#C0392B', marginTop: '4px', display: 'block',
  }

  const INFO_CARDS = [
    {
      icon: Phone,
      titleKey: 'contact.phone_title',
      lines: [t('contact.phone_line1'), t('contact.phone_line2')],
      href: 'tel:+13125550100',
    },
    {
      icon: Mail,
      titleKey: 'contact.email_title',
      lines: [t('contact.email_line1'), t('contact.email_line2')],
      href: 'mailto:szewczyklaw@gmail.com',
    },
    {
      icon: MapPin,
      titleKey: 'contact.office_title',
      lines: [t('contact.office_line1'), t('contact.office_line2')],
      href: undefined,
    },
    {
      icon: Clock,
      titleKey: 'contact.hours_title',
      lines: [t('contact.hours_line1'), t('contact.hours_line2'), t('contact.hours_line3')],
      href: undefined,
    },
  ]

  return (
    <div style={{ background: pageBg, transition: 'background 0.2s' }}>

      {/* Hero */}
      <section style={{ background: heroBg, padding: '64px 24px', transition: 'background 0.2s' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600,
            color: '#C9A84C', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '16px',
          }}>
            {t('contact.overline')}
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700,
            color: '#ffffff', lineHeight: 1.15, marginBottom: '16px', maxWidth: '600px',
          }}>
            {t('contact.title')}
          </h1>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '16px',
            color: 'rgba(255,255,255,0.7)', maxWidth: '500px', lineHeight: 1.7,
          }}>
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: '72px 24px' }}>
        <div style={{
          maxWidth: '1400px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 2fr',
          gap: '48px', alignItems: 'start',
        }}
        className="contact-grid"
        >

          {/* Left — Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {INFO_CARDS.map(({ icon: Icon, titleKey, lines, href }) => (
              <div key={titleKey} style={{
                background: cardBg, border: `1px solid ${cardBorder}`,
                borderRadius: '8px', padding: '20px', transition: 'background 0.2s',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{
                    width: '36px', height: '36px',
                    background: isDark ? 'rgba(201,168,76,0.1)' : '#F0EBE3',
                    borderRadius: '8px', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={16} color="#C9A84C" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600,
                      color: '#C9A84C', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px',
                    }}>
                      {t(titleKey)}
                    </div>
                    {lines.map((line, i) => (
                      href && i === 0
                        ? <a key={i} href={href} style={{
                            display: 'block', fontFamily: 'Inter, sans-serif',
                            fontSize: '14px', fontWeight: 500, color: headingColor,
                            textDecoration: 'none', marginBottom: '2px',
                          }}>{line}</a>
                        : <div key={i} style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: i === 0 ? '14px' : '12px',
                            fontWeight: i === 0 ? 500 : 400,
                            color: i === 0 ? headingColor : mutedColor,
                            marginBottom: '2px',
                          }}>{line}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div style={{
              background: cardBg, border: `1px solid ${cardBorder}`,
              borderRadius: '8px', height: '200px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column', gap: '8px',
            }}>
              <MapPin size={24} color={mutedColor} strokeWidth={1.5} />
              <span style={{
                fontFamily: 'Inter, sans-serif', fontSize: '12px',
                color: mutedColor, fontStyle: 'italic',
              }}>
                {t('contact.map_placeholder')}
              </span>
            </div>
          </div>

          {/* Right — Form */}
          <div style={{
            background: cardBg, border: `1px solid ${cardBorder}`,
            borderRadius: '8px', padding: '36px', transition: 'background 0.2s',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '48px 24px' }}>
                <div style={{
                  width: '56px', height: '56px',
                  background: isDark ? 'rgba(201,168,76,0.1)' : '#F0EBE3',
                  borderRadius: '50%', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', margin: '0 auto 20px',
                }}>
                  <CheckCircle size={28} color="#C9A84C" strokeWidth={1.5} />
                </div>
                <h3 style={{
                  fontFamily: 'Playfair Display, Georgia, serif', fontSize: '24px',
                  fontWeight: 600, color: headingColor, marginBottom: '12px',
                }}>
                  {t('contact.success_title')}
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '15px',
                  color: bodyColor, lineHeight: 1.7, marginBottom: '24px',
                }}>
                  {t('contact.success_desc')}
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(INITIAL_FORM) }}
                  style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '13px', color: headingColor,
                    background: 'transparent', border: `1.5px solid ${cardBorder}`,
                    borderRadius: '4px', padding: '8px 20px', cursor: 'pointer',
                  }}
                >
                  {t('contact.send_another')}
                </button>
              </div>
            ) : (
              <>
                <div style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600,
                  color: '#C9A84C', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '8px',
                }}>
                  {t('contact.form_overline')}
                </div>
                <h2 style={{
                  fontFamily: 'Playfair Display, Georgia, serif', fontSize: '24px',
                  fontWeight: 600, color: headingColor, marginBottom: '28px', transition: 'color 0.2s',
                }}>
                  {t('contact.form_title')}
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="form-row">
                  <div>
                    <label style={labelStyle}>{t('contact.name_label')} *</label>
                    <input type="text" placeholder={t('contact.name_placeholder')} value={form.name}
                      onChange={e => handleChange('name', e.target.value)}
                      style={{ ...inputStyle, borderColor: errors.name ? '#C0392B' : inputBorder }} />
                    {errors.name && <span style={errorStyle}>{errors.name}</span>}
                  </div>
                  <div>
                    <label style={labelStyle}>{t('contact.phone_label')} *</label>
                    <input type="tel" placeholder="(312) 555-0100" value={form.phone}
                      onChange={e => handleChange('phone', e.target.value)}
                      style={{ ...inputStyle, borderColor: errors.phone ? '#C0392B' : inputBorder }} />
                    {errors.phone && <span style={errorStyle}>{errors.phone}</span>}
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={labelStyle}>{t('contact.email_label')} *</label>
                  <input type="email" placeholder="jane@example.com" value={form.email}
                    onChange={e => handleChange('email', e.target.value)}
                    style={{ ...inputStyle, borderColor: errors.email ? '#C0392B' : inputBorder }} />
                  {errors.email && <span style={errorStyle}>{errors.email}</span>}
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={labelStyle}>{t('contact.case_type_label')}</label>
                  <select value={form.caseType} onChange={e => handleChange('caseType', e.target.value)} style={inputStyle}>
                    <option value="">{t('contact.case_type_placeholder')}</option>
                    <option value="car-accident">{t('contact.case_car')}</option>
                    <option value="slip-fall">{t('contact.case_slip')}</option>
                    <option value="workplace">{t('contact.case_workplace')}</option>
                    <option value="medical">{t('contact.case_medical')}</option>
                    <option value="wrongful-death">{t('contact.case_wrongful')}</option>
                    <option value="product">{t('contact.case_product')}</option>
                    <option value="other">{t('contact.case_other')}</option>
                  </select>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={labelStyle}>{t('contact.message_label')} *</label>
                  <textarea placeholder={t('contact.message_placeholder')} value={form.message}
                    onChange={e => handleChange('message', e.target.value)} rows={5}
                    style={{ ...inputStyle, resize: 'vertical', borderColor: errors.message ? '#C0392B' : inputBorder }} />
                  {errors.message && <span style={errorStyle}>{errors.message}</span>}
                </div>

                <div style={{
                  background: isDark ? 'rgba(201,168,76,0.06)' : '#F8F5F0',
                  borderLeft: '3px solid #C9A84C', padding: '12px 16px',
                  borderRadius: '0 4px 4px 0', marginBottom: '24px',
                }}>
                  <p style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '11px', color: mutedColor,
                    lineHeight: 1.7, fontStyle: 'italic', margin: 0,
                  }}>
                    {t('contact.disclaimer')}
                  </p>
                </div>

                <button onClick={handleSubmit} style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 500,
                  background: '#C0392B', color: '#ffffff', padding: '13px 28px',
                  borderRadius: '4px', border: 'none', cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  width: '100%', justifyContent: 'center',
                }}>
                  {t('contact.submit_btn')}
                  <ArrowRight size={16} strokeWidth={2} />
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 560px) { .form-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  )
}
