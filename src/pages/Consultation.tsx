import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowRight, CheckCircle, Clock, Phone, Calendar } from 'lucide-react'

interface ConsultationProps {
  isDark: boolean
}

const INITIAL_FORM = {
  name:        '',
  phone:       '',
  email:       '',
  caseType:    '',
  description: '',
  preferred:   '',
  timeSlot:    '',
}

export default function Consultation({ isDark }: ConsultationProps) {
  const { t } = useTranslation()
  const [form, setForm]           = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors]       = useState<Partial<typeof INITIAL_FORM>>({})
  const [step, setStep]           = useState(1)

  const heroBg       = isDark ? '#0A1628' : '#1B2E4B'
  const pageBg       = isDark ? '#0F1C2E' : '#F8F5F0'
  const cardBg       = isDark ? '#162540' : '#FFFFFF'
  const cardBorder   = isDark ? 'rgba(255,255,255,0.08)' : '#E5E0D8'
  const headingColor = isDark ? '#F9FAFB' : '#1B2E4B'
  const bodyColor    = isDark ? '#D1D5DB' : '#4B5563'
  const inputBg      = isDark ? '#0F1C2E' : '#FAFAF9'
  const inputBorder  = isDark ? 'rgba(255,255,255,0.15)' : '#D1CBC1'
  const labelColor   = isDark ? '#E5E7EB' : '#2C2C2C'
  const mutedColor   = isDark ? 'rgba(255,255,255,0.60)' : '#9CA3AF'

  function handleChange(field: keyof typeof INITIAL_FORM, value: string) {
    setForm(f => ({ ...f, [field]: value }))
    if (errors[field]) setErrors(e => ({ ...e, [field]: undefined }))
  }

  function validateStep1() {
    const e: Partial<typeof INITIAL_FORM> = {}
    if (!form.name.trim())     e.name     = t('consultation.name_error')
    if (!form.phone.trim())    e.phone    = t('consultation.phone_error')
    if (!form.email.trim())    e.email    = t('consultation.email_error')
    if (!form.caseType.trim()) e.caseType = t('consultation.case_type_error')
    return e
  }

  function validateStep2() {
    const e: Partial<typeof INITIAL_FORM> = {}
    if (!form.description.trim()) e.description = t('consultation.description_error')
    return e
  }

  function handleNext(e: React.MouseEvent) {
    e.preventDefault()
    const errs = validateStep1()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setStep(2)
  }

  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault()
    const errs = validateStep2()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setSubmitted(true)
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

  const FEATURES = [
    { icon: Phone,       titleKey: 'consultation.feature1_title', descKey: 'consultation.feature1_desc' },
    { icon: Clock,       titleKey: 'consultation.feature2_title', descKey: 'consultation.feature2_desc' },
    { icon: CheckCircle, titleKey: 'consultation.feature3_title', descKey: 'consultation.feature3_desc' },
    { icon: Calendar,    titleKey: 'consultation.feature4_title', descKey: 'consultation.feature4_desc' },
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
            {t('consultation.overline')}
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700,
            color: '#ffffff', lineHeight: 1.15, marginBottom: '16px', maxWidth: '600px',
          }}>
            {t('consultation.title')}
          </h1>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '16px',
            color: 'rgba(255,255,255,0.7)', maxWidth: '520px', lineHeight: 1.7,
          }}>
            {t('consultation.subtitle')}
          </p>
        </div>
      </section>

      {/* Features */}
      <section style={{ background: pageBg, padding: '48px 24px 0', transition: 'background 0.2s' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px', marginBottom: '48px',
          }}>
            {FEATURES.map(({ icon: Icon, titleKey, descKey }) => (
              <div key={titleKey} style={{
                background: cardBg, border: `1px solid ${cardBorder}`,
                borderRadius: '8px', padding: '20px',
                display: 'flex', alignItems: 'flex-start', gap: '14px',
                transition: 'background 0.2s',
              }}>
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
                    fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600,
                    color: headingColor, marginBottom: '3px', transition: 'color 0.2s',
                  }}>
                    {t(titleKey)}
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: mutedColor }}>
                    {t(descKey)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: '0 24px 72px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{
            background: cardBg, border: `1px solid ${cardBorder}`,
            borderRadius: '8px', padding: '40px', transition: 'background 0.2s',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{
                  width: '64px', height: '64px',
                  background: isDark ? 'rgba(201,168,76,0.1)' : '#F0EBE3',
                  borderRadius: '50%', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', margin: '0 auto 20px',
                }}>
                  <CheckCircle size={32} color="#C9A84C" strokeWidth={1.5} />
                </div>
                <h2 style={{
                  fontFamily: 'Playfair Display, Georgia, serif', fontSize: '28px',
                  fontWeight: 600, color: headingColor, marginBottom: '12px',
                }}>
                  {t('consultation.success_title')}
                </h2>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '15px',
                  color: bodyColor, lineHeight: 1.7, marginBottom: '8px',
                }}>
                  {t('consultation.success_desc')}
                </p>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '13px',
                  color: mutedColor, lineHeight: 1.7, marginBottom: '28px',
                }}>
                  {t('consultation.success_urgent')}{' '}
                  <a href="tel:+13125550100" style={{ color: '#C0392B', textDecoration: 'none', fontWeight: 500 }}>
                    (312) 555-0100
                  </a>
                </p>
              </div>
            ) : (
              <>
                {/* Step indicator */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px' }}>
                  {[1, 2].map(s => (
                    <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{
                        width: '28px', height: '28px', borderRadius: '50%',
                        background: step >= s ? '#C0392B' : (isDark ? 'rgba(255,255,255,0.1)' : '#E5E0D8'),
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600,
                        color: step >= s ? '#ffffff' : mutedColor, transition: 'background 0.2s',
                      }}>
                        {step > s ? '✓' : s}
                      </div>
                      <span style={{
                        fontFamily: 'Inter, sans-serif', fontSize: '12px',
                        color: step >= s ? headingColor : mutedColor,
                        fontWeight: step >= s ? 500 : 400,
                      }}>
                        {s === 1 ? t('consultation.step1_label') : t('consultation.step2_label')}
                      </span>
                      {s < 2 && (
                        <div style={{
                          width: '32px', height: '1px',
                          background: isDark ? 'rgba(255,255,255,0.1)' : '#E5E0D8',
                          margin: '0 4px',
                        }} />
                      )}
                    </div>
                  ))}
                </div>

                {step === 1 && (
                  <>
                    <h2 style={{
                      fontFamily: 'Playfair Display, Georgia, serif', fontSize: '22px',
                      fontWeight: 600, color: headingColor, marginBottom: '24px',
                    }}>
                      {t('consultation.step1_title')}
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="form-row">
                      <div>
                        <label style={labelStyle}>{t('consultation.name_label')} *</label>
                        <input type="text" placeholder="Jane Smith" value={form.name}
                          onChange={e => handleChange('name', e.target.value)}
                          style={{ ...inputStyle, borderColor: errors.name ? '#C0392B' : inputBorder }} />
                        {errors.name && <span style={errorStyle}>{errors.name}</span>}
                      </div>
                      <div>
                        <label style={labelStyle}>{t('consultation.phone_label')} *</label>
                        <input type="tel" placeholder="(312) 555-0100" value={form.phone}
                          onChange={e => handleChange('phone', e.target.value)}
                          style={{ ...inputStyle, borderColor: errors.phone ? '#C0392B' : inputBorder }} />
                        {errors.phone && <span style={errorStyle}>{errors.phone}</span>}
                      </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <label style={labelStyle}>{t('consultation.email_label')} *</label>
                      <input type="email" placeholder="jane@example.com" value={form.email}
                        onChange={e => handleChange('email', e.target.value)}
                        style={{ ...inputStyle, borderColor: errors.email ? '#C0392B' : inputBorder }} />
                      {errors.email && <span style={errorStyle}>{errors.email}</span>}
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                      <label style={labelStyle}>{t('consultation.case_type_label')} *</label>
                      <select value={form.caseType} onChange={e => handleChange('caseType', e.target.value)}
                        style={{ ...inputStyle, borderColor: errors.caseType ? '#C0392B' : inputBorder }}>
                        <option value="">{t('consultation.case_type_placeholder')}</option>
                        <option value="car-accident">{t('consultation.case_car')}</option>
                        <option value="slip-fall">{t('consultation.case_slip')}</option>
                        <option value="workplace">{t('consultation.case_workplace')}</option>
                        <option value="medical">{t('consultation.case_medical')}</option>
                        <option value="wrongful-death">{t('consultation.case_wrongful')}</option>
                        <option value="product">{t('consultation.case_product')}</option>
                        <option value="other">{t('consultation.case_other')}</option>
                      </select>
                      {errors.caseType && <span style={errorStyle}>{errors.caseType}</span>}
                    </div>

                    <button onClick={handleNext} style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 500,
                      background: '#C0392B', color: '#ffffff', padding: '13px 28px',
                      borderRadius: '4px', border: 'none', cursor: 'pointer',
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      width: '100%', justifyContent: 'center',
                    }}>
                      {t('consultation.continue_btn')}
                      <ArrowRight size={16} strokeWidth={2} />
                    </button>
                  </>
                )}

                {step === 2 && (
                  <>
                    <h2 style={{
                      fontFamily: 'Playfair Display, Georgia, serif', fontSize: '22px',
                      fontWeight: 600, color: headingColor, marginBottom: '24px',
                    }}>
                      {t('consultation.step2_title')}
                    </h2>

                    <div style={{ marginBottom: '16px' }}>
                      <label style={labelStyle}>{t('consultation.description_label')} *</label>
                      <textarea
                        placeholder={t('consultation.description_placeholder')}
                        value={form.description}
                        onChange={e => handleChange('description', e.target.value)}
                        rows={6}
                        style={{ ...inputStyle, resize: 'vertical', borderColor: errors.description ? '#C0392B' : inputBorder }}
                      />
                      {errors.description && <span style={errorStyle}>{errors.description}</span>}
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <label style={labelStyle}>{t('consultation.preferred_label')}</label>
                      <select value={form.preferred} onChange={e => handleChange('preferred', e.target.value)} style={inputStyle}>
                        <option value="">{t('consultation.preferred_none')}</option>
                        <option value="phone">{t('consultation.preferred_phone')}</option>
                        <option value="email">{t('consultation.preferred_email')}</option>
                        <option value="text">{t('consultation.preferred_text')}</option>
                      </select>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                      <label style={labelStyle}>{t('consultation.timeslot_label')}</label>
                      <select value={form.timeSlot} onChange={e => handleChange('timeSlot', e.target.value)} style={inputStyle}>
                        <option value="">{t('consultation.timeslot_any')}</option>
                        <option value="morning">{t('consultation.timeslot_morning')}</option>
                        <option value="afternoon">{t('consultation.timeslot_afternoon')}</option>
                        <option value="evening">{t('consultation.timeslot_evening')}</option>
                        <option value="weekend">{t('consultation.timeslot_weekend')}</option>
                      </select>
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
                        {t('consultation.disclaimer')}
                      </p>
                    </div>

                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button onClick={() => setStep(1)} style={{
                        fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 400,
                        background: 'transparent', color: headingColor, padding: '13px 20px',
                        borderRadius: '4px', border: `1.5px solid ${cardBorder}`,
                        cursor: 'pointer', flexShrink: 0,
                      }}>
                        {t('consultation.back_btn')}
                      </button>
                      <button onClick={handleSubmit} style={{
                        fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 500,
                        background: '#C0392B', color: '#ffffff', padding: '13px 28px',
                        borderRadius: '4px', border: 'none', cursor: 'pointer',
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        flex: 1, justifyContent: 'center',
                      }}>
                        {t('consultation.submit_btn')}
                        <ArrowRight size={16} strokeWidth={2} />
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 560px) { .form-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  )
}
