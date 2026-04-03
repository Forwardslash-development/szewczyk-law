import { useState } from 'react'
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
  const mutedColor   = isDark ? 'rgba(255,255,255,0.45)' : '#9CA3AF'

  function handleChange(field: keyof typeof INITIAL_FORM, value: string) {
    setForm(f => ({ ...f, [field]: value }))
    if (errors[field]) setErrors(e => ({ ...e, [field]: undefined }))
  }

  function validateStep1() {
    const e: Partial<typeof INITIAL_FORM> = {}
    if (!form.name.trim())     e.name     = 'Name is required'
    if (!form.phone.trim())    e.phone    = 'Phone number is required'
    if (!form.email.trim())    e.email    = 'Email is required'
    if (!form.caseType.trim()) e.caseType = 'Please select a case type'
    return e
  }

  function validateStep2() {
    const e: Partial<typeof INITIAL_FORM> = {}
    if (!form.description.trim()) e.description = 'Please describe your situation'
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
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    padding: '10px 12px',
    border: `1.5px solid ${inputBorder}`,
    borderRadius: '4px',
    color: isDark ? '#F9FAFB' : '#2C2C2C',
    background: inputBg,
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.15s',
  }

  const labelStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '12px',
    fontWeight: 600 as const,
    color: labelColor,
    display: 'block',
    marginBottom: '5px',
    letterSpacing: '0.03em',
  }

  const errorStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '11px',
    color: '#C0392B',
    marginTop: '4px',
    display: 'block',
  }

  return (
    <div style={{ background: pageBg, transition: 'background 0.2s' }}>

      {/* Hero */}
      <section style={{ background: heroBg, padding: '64px 24px', transition: 'background 0.2s' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            color: '#C9A84C',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            Free Consultation
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '16px',
            maxWidth: '600px',
          }}>
            Let's Talk About Your Case
          </h1>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '520px',
            lineHeight: 1.7,
          }}>
            Your first consultation is completely free and confidential.
            No obligation, no pressure — just honest answers from Conrad directly.
          </p>
        </div>
      </section>

      {/* What to expect */}
      <section style={{ background: pageBg, padding: '48px 24px 0', transition: 'background 0.2s' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginBottom: '48px',
          }}>
            {[
              { icon: Phone,    title: 'Phone or In-Person',  desc: 'Choose the format that works for you'  },
              { icon: Clock,    title: 'Available 24/7',       desc: 'We work around your schedule'          },
              { icon: CheckCircle, title: 'No Fee Unless We Win', desc: 'Zero financial risk to you'         },
              { icon: Calendar, title: 'Same-Day Response',   desc: 'We follow up within 24 hours'          },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: '8px',
                padding: '20px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                transition: 'background 0.2s',
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  background: isDark ? 'rgba(201,168,76,0.1)' : '#F0EBE3',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={16} color="#C9A84C" strokeWidth={1.5} />
                </div>
                <div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: headingColor,
                    marginBottom: '3px',
                    transition: 'color 0.2s',
                  }}>
                    {title}
                  </div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: mutedColor,
                  }}>
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: '0 24px 72px' }}>
        <div style={{
          maxWidth: '720px',
          margin: '0 auto',
        }}>
          <div style={{
            background: cardBg,
            border: `1px solid ${cardBorder}`,
            borderRadius: '8px',
            padding: '40px',
            transition: 'background 0.2s',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: isDark ? 'rgba(201,168,76,0.1)' : '#F0EBE3',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  <CheckCircle size={32} color="#C9A84C" strokeWidth={1.5} />
                </div>
                <h2 style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontSize: '28px',
                  fontWeight: 600,
                  color: headingColor,
                  marginBottom: '12px',
                }}>
                  Request Received
                </h2>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  color: bodyColor,
                  lineHeight: 1.7,
                  marginBottom: '8px',
                }}>
                  Thank you, {form.name}. Conrad will personally review your case
                  details and be in touch within 24 hours.
                </p>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  color: mutedColor,
                  lineHeight: 1.7,
                  marginBottom: '28px',
                }}>
                  If your matter is urgent, call us directly at{' '}
                  <a href="tel:+13125550100" style={{ color: '#C0392B', textDecoration: 'none', fontWeight: 500 }}>
                    (312) 555-0100
                  </a>
                </p>
              </div>
            ) : (
              <>
                {/* Step indicator */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '28px',
                }}>
                  {[1, 2].map(s => (
                    <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: step >= s ? '#C0392B' : (isDark ? 'rgba(255,255,255,0.1)' : '#E5E0D8'),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: step >= s ? '#ffffff' : mutedColor,
                        transition: 'background 0.2s',
                      }}>
                        {step > s ? '✓' : s}
                      </div>
                      <span style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '12px',
                        color: step >= s ? headingColor : mutedColor,
                        fontWeight: step >= s ? 500 : 400,
                      }}>
                        {s === 1 ? 'Your Information' : 'Case Details'}
                      </span>
                      {s < 2 && (
                        <div style={{
                          width: '32px',
                          height: '1px',
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
                      fontFamily: 'Playfair Display, Georgia, serif',
                      fontSize: '22px',
                      fontWeight: 600,
                      color: headingColor,
                      marginBottom: '24px',
                    }}>
                      Tell Us Who You Are
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="form-row">
                      <div>
                        <label style={labelStyle}>Full Name *</label>
                        <input type="text" placeholder="Jane Smith" value={form.name}
                          onChange={e => handleChange('name', e.target.value)}
                          style={{ ...inputStyle, borderColor: errors.name ? '#C0392B' : inputBorder }} />
                        {errors.name && <span style={errorStyle}>{errors.name}</span>}
                      </div>
                      <div>
                        <label style={labelStyle}>Phone Number *</label>
                        <input type="tel" placeholder="(312) 555-0100" value={form.phone}
                          onChange={e => handleChange('phone', e.target.value)}
                          style={{ ...inputStyle, borderColor: errors.phone ? '#C0392B' : inputBorder }} />
                        {errors.phone && <span style={errorStyle}>{errors.phone}</span>}
                      </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <label style={labelStyle}>Email Address *</label>
                      <input type="email" placeholder="jane@example.com" value={form.email}
                        onChange={e => handleChange('email', e.target.value)}
                        style={{ ...inputStyle, borderColor: errors.email ? '#C0392B' : inputBorder }} />
                      {errors.email && <span style={errorStyle}>{errors.email}</span>}
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                      <label style={labelStyle}>Type of Case *</label>
                      <select value={form.caseType} onChange={e => handleChange('caseType', e.target.value)}
                        style={{ ...inputStyle, borderColor: errors.caseType ? '#C0392B' : inputBorder }}>
                        <option value="">Select a case type...</option>
                        <option value="car-accident">Car / Truck Accident</option>
                        <option value="slip-fall">Slip &amp; Fall</option>
                        <option value="workplace">Workplace Injury</option>
                        <option value="medical">Medical Malpractice</option>
                        <option value="wrongful-death">Wrongful Death</option>
                        <option value="product">Product Liability</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.caseType && <span style={errorStyle}>{errors.caseType}</span>}
                    </div>

                    <button onClick={handleNext} style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: 500,
                      background: '#C0392B',
                      color: '#ffffff',
                      padding: '13px 28px',
                      borderRadius: '4px',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      width: '100%',
                      justifyContent: 'center',
                    }}>
                      Continue
                      <ArrowRight size={16} strokeWidth={2} />
                    </button>
                  </>
                )}

                {step === 2 && (
                  <>
                    <h2 style={{
                      fontFamily: 'Playfair Display, Georgia, serif',
                      fontSize: '22px',
                      fontWeight: 600,
                      color: headingColor,
                      marginBottom: '24px',
                    }}>
                      Tell Us What Happened
                    </h2>

                    <div style={{ marginBottom: '16px' }}>
                      <label style={labelStyle}>Describe Your Situation *</label>
                      <textarea
                        placeholder="When did the injury occur? What happened? Have you sought medical treatment?"
                        value={form.description}
                        onChange={e => handleChange('description', e.target.value)}
                        rows={6}
                        style={{ ...inputStyle, resize: 'vertical', borderColor: errors.description ? '#C0392B' : inputBorder }}
                      />
                      {errors.description && <span style={errorStyle}>{errors.description}</span>}
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <label style={labelStyle}>Preferred Contact Method</label>
                      <select value={form.preferred} onChange={e => handleChange('preferred', e.target.value)} style={inputStyle}>
                        <option value="">No preference</option>
                        <option value="phone">Phone call</option>
                        <option value="email">Email</option>
                        <option value="text">Text message</option>
                      </select>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                      <label style={labelStyle}>Best Time to Reach You</label>
                      <select value={form.timeSlot} onChange={e => handleChange('timeSlot', e.target.value)} style={inputStyle}>
                        <option value="">Any time</option>
                        <option value="morning">Morning (9am – 12pm)</option>
                        <option value="afternoon">Afternoon (12pm – 5pm)</option>
                        <option value="evening">Evening (5pm – 8pm)</option>
                        <option value="weekend">Weekend</option>
                      </select>
                    </div>

                    <div style={{
                      background: isDark ? 'rgba(201,168,76,0.06)' : '#F8F5F0',
                      borderLeft: '3px solid #C9A84C',
                      padding: '12px 16px',
                      borderRadius: '0 4px 4px 0',
                      marginBottom: '24px',
                    }}>
                      <p style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '11px',
                        color: mutedColor,
                        lineHeight: 1.7,
                        fontStyle: 'italic',
                        margin: 0,
                      }}>
                        This consultation request is confidential. Submitting this form does not
                        create an attorney-client relationship. Do not include highly sensitive
                        personal information until a representation agreement has been signed.
                      </p>
                    </div>

                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button onClick={() => setStep(1)} style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        fontWeight: 400,
                        background: 'transparent',
                        color: headingColor,
                        padding: '13px 20px',
                        borderRadius: '4px',
                        border: `1.5px solid ${cardBorder}`,
                        cursor: 'pointer',
                        flexShrink: 0,
                      }}>
                        Back
                      </button>
                      <button onClick={handleSubmit} style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '15px',
                        fontWeight: 500,
                        background: '#C0392B',
                        color: '#ffffff',
                        padding: '13px 28px',
                        borderRadius: '4px',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        flex: 1,
                        justifyContent: 'center',
                      }}>
                        Request Consultation
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
        @media (max-width: 560px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

    </div>
  )
}
