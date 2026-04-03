import { useState, useEffect } from 'react'
import { ArrowRight, ArrowLeft, CheckCircle, Save, Trash2 } from 'lucide-react'

interface IntakeProps {
  isDark: boolean
}

const STORAGE_KEY = 'szewczyk-intake-draft'

const INITIAL_FORM = {
  // Step 1 — Contact
  name:            '',
  phone:           '',
  email:           '',
  language:        '',
  contactMethod:   '',

  // Step 2 — Incident
  caseType:        '',
  incidentDate:    '',
  incidentLocation:'',
  incidentDesc:    '',

  // Step 3 — Injuries
  injuryDesc:      '',
  treatmentDate:   '',
  treatingDoctor:  '',
  hospital:        '',
  ongoingTreatment:'',

  // Step 4 — Other Parties
  policeReport:    '',
  reportNumber:    '',
  ownInsurance:    '',
  otherInsurance:  '',
  otherPartyName:  '',
}

const STEPS = [
  { number: 1, label: 'Contact Info'     },
  { number: 2, label: 'Incident Details' },
  { number: 3, label: 'Injuries'         },
  { number: 4, label: 'Other Parties'    },
  { number: 5, label: 'Review'           },
]

export default function Intake({ isDark }: IntakeProps) {
  const [step, setStep]           = useState(1)
  const [form, setForm]           = useState(INITIAL_FORM)
  const [errors, setErrors]       = useState<Partial<typeof INITIAL_FORM>>({})
  const [submitted, setSubmitted] = useState(false)
  const [hasDraft, setHasDraft]   = useState(false)

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
  const dividerColor = isDark ? 'rgba(255,255,255,0.06)' : '#F0EBE3'

  // Restore draft on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const { form: savedForm, step: savedStep } = JSON.parse(saved)
        setForm(savedForm)
        setStep(savedStep)
        setHasDraft(true)
      }
    } catch {}
  }, [])

  // Auto-save on every change
  useEffect(() => {
    if (submitted) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ form, step }))
    } catch {}
  }, [form, step, submitted])

  function clearDraft() {
    localStorage.removeItem(STORAGE_KEY)
    setForm(INITIAL_FORM)
    setStep(1)
    setHasDraft(false)
    setErrors({})
  }

  function handleChange(field: keyof typeof INITIAL_FORM, value: string) {
    setForm(f => ({ ...f, [field]: value }))
    if (errors[field]) setErrors(e => ({ ...e, [field]: undefined }))
  }

  function validate(s: number): Partial<typeof INITIAL_FORM> {
    const e: Partial<typeof INITIAL_FORM> = {}
    if (s === 1) {
      if (!form.name.trim())  e.name  = 'Name is required'
      if (!form.phone.trim()) e.phone = 'Phone number is required'
      if (!form.email.trim()) e.email = 'Email is required'
    }
    if (s === 2) {
      if (!form.caseType.trim())     e.caseType     = 'Please select a case type'
      if (!form.incidentDate.trim()) e.incidentDate = 'Please enter the incident date'
      if (!form.incidentDesc.trim()) e.incidentDesc = 'Please describe the incident'
    }
    if (s === 3) {
      if (!form.injuryDesc.trim()) e.injuryDesc = 'Please describe your injuries'
    }
    return e
  }

  function handleNext() {
    const errs = validate(step)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setStep(s => s + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleBack() {
    setErrors({})
    setStep(s => s - 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  async function handleSubmit() {
    // TODO: Integrate EmailJS here to send confirmation email to client
    // and notification email to Conrad once Gmail is set up.
    // Example:
    // await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', {
    //   to_email: form.email,
    //   client_name: form.name,
    //   case_type: form.caseType,
    //   ...
    // }, 'PUBLIC_KEY')
    localStorage.removeItem(STORAGE_KEY)
    setSubmitted(true)
  }

  const inputStyle = (field: keyof typeof INITIAL_FORM) => ({
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    padding: '10px 12px',
    border: `1.5px solid ${errors[field] ? '#C0392B' : inputBorder}`,
    borderRadius: '4px',
    color: isDark ? '#F9FAFB' : '#2C2C2C',
    background: inputBg,
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.15s',
  })

  const labelStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '12px',
    fontWeight: 600 as const,
    color: labelColor,
    display: 'block' as const,
    marginBottom: '5px',
    letterSpacing: '0.03em',
  }

  const errorStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '11px',
    color: '#C0392B',
    marginTop: '4px',
    display: 'block' as const,
  }

  const fieldGroup = (children: React.ReactNode) => (
    <div style={{ marginBottom: '16px' }}>{children}</div>
  )

  const twoCol = (children: React.ReactNode) => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="form-row">
      {children}
    </div>
  )

  const reviewRow = (label: string, value: string) => value ? (
    <div style={{
      display: 'flex',
      gap: '16px',
      padding: '10px 0',
      borderBottom: `1px solid ${dividerColor}`,
    }}>
      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: mutedColor, minWidth: '160px', flexShrink: 0 }}>
        {label}
      </span>
      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: bodyColor, lineHeight: 1.5 }}>
        {value}
      </span>
    </div>
  ) : null

  if (submitted) {
    return (
      <div style={{ background: pageBg, minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '64px 24px' }}>
        <div style={{ textAlign: 'center', maxWidth: '520px' }}>
          <div style={{
            width: '72px', height: '72px',
            background: isDark ? 'rgba(201,168,76,0.1)' : '#F0EBE3',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 24px',
          }}>
            <CheckCircle size={36} color="#C9A84C" strokeWidth={1.5} />
          </div>
          <h2 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: '32px', fontWeight: 600,
            color: headingColor, marginBottom: '16px',
          }}>
            Intake Form Submitted
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '15px',
            color: bodyColor, lineHeight: 1.7, marginBottom: '8px',
          }}>
            Thank you, {form.name}. Your case information has been received.
            Conrad will personally review your intake and be in touch within 24 hours.
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '13px',
            color: mutedColor, lineHeight: 1.7, marginBottom: '8px',
          }}>
            [Email confirmation coming soon] — <strong style={{ color: bodyColor }}>{form.email}</strong>
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '13px',
            color: mutedColor, lineHeight: 1.7, marginBottom: '32px',
          }}>
            If your matter is urgent, call us at{' '}
            <a href="tel:+13125550100" style={{ color: '#C0392B', textDecoration: 'none', fontWeight: 500 }}>
              (312) 555-0100
            </a>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: pageBg, transition: 'background 0.2s' }}>

      {/* Hero */}
      <section style={{ background: heroBg, padding: '64px 24px', transition: 'background 0.2s' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600,
            color: '#C9A84C', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '16px',
          }}>
            Case Intake
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700,
            color: '#ffffff', lineHeight: 1.15, marginBottom: '16px', maxWidth: '600px',
          }}>
            Start Your Case
          </h1>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '16px',
            color: 'rgba(255,255,255,0.7)', maxWidth: '520px', lineHeight: 1.7,
          }}>
            Complete this intake form so Conrad can review your case before your consultation.
            Your information is confidential and securely handled.
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: '56px 24px 72px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>

          {/* Draft notice */}
          {hasDraft && step === 1 && (
            <div style={{
              background: isDark ? 'rgba(201,168,76,0.08)' : '#FDF9F0',
              border: `1px solid ${isDark ? 'rgba(201,168,76,0.2)' : '#E8D99A'}`,
              borderRadius: '8px',
              padding: '14px 18px',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              flexWrap: 'wrap',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Save size={15} color="#C9A84C" strokeWidth={1.5} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: bodyColor }}>
                  Draft restored — your previous progress has been loaded.
                </span>
              </div>
              <button onClick={clearDraft} style={{
                fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 500,
                color: '#C0392B', background: 'transparent', border: 'none',
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px',
              }}>
                <Trash2 size={13} strokeWidth={1.5} />
                Start fresh
              </button>
            </div>
          )}

          {/* Step indicator */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '32px',
            overflowX: 'auto',
            paddingBottom: '4px',
          }}>
            {STEPS.map((s, i) => (
              <div key={s.number} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: step > s.number ? '#C9A84C' : step === s.number ? '#C0392B' : (isDark ? 'rgba(255,255,255,0.08)' : '#E5E0D8'),
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600,
                    color: step >= s.number ? '#ffffff' : mutedColor,
                    transition: 'background 0.2s',
                    flexShrink: 0,
                  }}>
                    {step > s.number ? '✓' : s.number}
                  </div>
                  <span style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '11px',
                    color: step >= s.number ? headingColor : mutedColor,
                    fontWeight: step === s.number ? 600 : 400,
                    whiteSpace: 'nowrap',
                  }}>
                    {s.label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div style={{
                    height: '1px', width: '40px',
                    background: step > s.number ? '#C9A84C' : (isDark ? 'rgba(255,255,255,0.08)' : '#E5E0D8'),
                    margin: '0 6px', marginBottom: '18px',
                    transition: 'background 0.2s', flexShrink: 0,
                  }} />
                )}
              </div>
            ))}
          </div>

          {/* Form card */}
          <div style={{
            background: cardBg, border: `1px solid ${cardBorder}`,
            borderRadius: '8px', padding: '36px', transition: 'background 0.2s',
          }}>

            {/* Step 1 — Contact Info */}
            {step === 1 && (
              <>
                <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '22px', fontWeight: 600, color: headingColor, marginBottom: '24px' }}>
                  Your Contact Information
                </h2>
                {twoCol(<>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input type="text" placeholder="Jane Smith" value={form.name}
                      onChange={e => handleChange('name', e.target.value)} style={inputStyle('name')} />
                    {errors.name && <span style={errorStyle}>{errors.name}</span>}
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number *</label>
                    <input type="tel" placeholder="(312) 555-0100" value={form.phone}
                      onChange={e => handleChange('phone', e.target.value)} style={inputStyle('phone')} />
                    {errors.phone && <span style={errorStyle}>{errors.phone}</span>}
                  </div>
                </>)}
                {fieldGroup(<>
                  <label style={labelStyle}>Email Address *</label>
                  <input type="email" placeholder="jane@example.com" value={form.email}
                    onChange={e => handleChange('email', e.target.value)} style={inputStyle('email')} />
                  {errors.email && <span style={errorStyle}>{errors.email}</span>}
                </>)}
                {twoCol(<>
                  <div>
                    <label style={labelStyle}>Preferred Language</label>
                    <select value={form.language} onChange={e => handleChange('language', e.target.value)} style={inputStyle('language')}>
                      <option value="">Select language...</option>
                      <option value="en">English</option>
                      <option value="es">Español</option>
                      <option value="pl">Polski</option>
                      <option value="fr">Français</option>
                      <option value="ar">العربية</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Preferred Contact Method</label>
                    <select value={form.contactMethod} onChange={e => handleChange('contactMethod', e.target.value)} style={inputStyle('contactMethod')}>
                      <option value="">No preference</option>
                      <option value="phone">Phone call</option>
                      <option value="email">Email</option>
                      <option value="text">Text message</option>
                    </select>
                  </div>
                </>)}
              </>
            )}

            {/* Step 2 — Incident Details */}
            {step === 2 && (
              <>
                <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '22px', fontWeight: 600, color: headingColor, marginBottom: '24px' }}>
                  Incident Details
                </h2>
                {fieldGroup(<>
                  <label style={labelStyle}>Type of Case *</label>
                  <select value={form.caseType} onChange={e => handleChange('caseType', e.target.value)} style={inputStyle('caseType')}>
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
                </>)}
                {twoCol(<>
                  <div>
                    <label style={labelStyle}>Date of Incident *</label>
                    <input type="date" value={form.incidentDate}
                      onChange={e => handleChange('incidentDate', e.target.value)} style={inputStyle('incidentDate')} />
                    {errors.incidentDate && <span style={errorStyle}>{errors.incidentDate}</span>}
                  </div>
                  <div>
                    <label style={labelStyle}>Location of Incident</label>
                    <input type="text" placeholder="e.g. Chicago, IL / Intersection of..." value={form.incidentLocation}
                      onChange={e => handleChange('incidentLocation', e.target.value)} style={inputStyle('incidentLocation')} />
                  </div>
                </>)}
                {fieldGroup(<>
                  <label style={labelStyle}>Describe What Happened *</label>
                  <textarea rows={6} placeholder="Please describe the incident in as much detail as you can remember. What happened, when, and how?" value={form.incidentDesc}
                    onChange={e => handleChange('incidentDesc', e.target.value)}
                    style={{ ...inputStyle('incidentDesc'), resize: 'vertical' }} />
                  {errors.incidentDesc && <span style={errorStyle}>{errors.incidentDesc}</span>}
                </>)}
              </>
            )}

            {/* Step 3 — Injuries */}
            {step === 3 && (
              <>
                <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '22px', fontWeight: 600, color: headingColor, marginBottom: '24px' }}>
                  Injuries &amp; Medical Treatment
                </h2>
                {fieldGroup(<>
                  <label style={labelStyle}>Describe Your Injuries *</label>
                  <textarea rows={4} placeholder="What injuries did you sustain? e.g. broken arm, back injury, head trauma..." value={form.injuryDesc}
                    onChange={e => handleChange('injuryDesc', e.target.value)}
                    style={{ ...inputStyle('injuryDesc'), resize: 'vertical' }} />
                  {errors.injuryDesc && <span style={errorStyle}>{errors.injuryDesc}</span>}
                </>)}
                {twoCol(<>
                  <div>
                    <label style={labelStyle}>Date of First Medical Treatment</label>
                    <input type="date" value={form.treatmentDate}
                      onChange={e => handleChange('treatmentDate', e.target.value)} style={inputStyle('treatmentDate')} />
                  </div>
                  <div>
                    <label style={labelStyle}>Treating Doctor / Clinic</label>
                    <input type="text" placeholder="Dr. Name or clinic name" value={form.treatingDoctor}
                      onChange={e => handleChange('treatingDoctor', e.target.value)} style={inputStyle('treatingDoctor')} />
                  </div>
                </>)}
                {fieldGroup(<>
                  <label style={labelStyle}>Hospital or Facility</label>
                  <input type="text" placeholder="e.g. Northwestern Memorial Hospital" value={form.hospital}
                    onChange={e => handleChange('hospital', e.target.value)} style={inputStyle('hospital')} />
                </>)}
                {fieldGroup(<>
                  <label style={labelStyle}>Are You Still Receiving Treatment?</label>
                  <select value={form.ongoingTreatment} onChange={e => handleChange('ongoingTreatment', e.target.value)} style={inputStyle('ongoingTreatment')}>
                    <option value="">Select...</option>
                    <option value="yes">Yes — ongoing treatment</option>
                    <option value="no">No — treatment complete</option>
                    <option value="not-yet">Not yet — have not sought treatment</option>
                  </select>
                </>)}
              </>
            )}

            {/* Step 4 — Other Parties */}
            {step === 4 && (
              <>
                <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '22px', fontWeight: 600, color: headingColor, marginBottom: '24px' }}>
                  Other Parties &amp; Insurance
                </h2>
                {fieldGroup(<>
                  <label style={labelStyle}>Was a Police Report Filed?</label>
                  <select value={form.policeReport} onChange={e => handleChange('policeReport', e.target.value)} style={inputStyle('policeReport')}>
                    <option value="">Select...</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="unknown">Unknown</option>
                  </select>
                </>)}
                {form.policeReport === 'yes' && fieldGroup(<>
                  <label style={labelStyle}>Police Report Number (if known)</label>
                  <input type="text" placeholder="Report number" value={form.reportNumber}
                    onChange={e => handleChange('reportNumber', e.target.value)} style={inputStyle('reportNumber')} />
                </>)}
                {twoCol(<>
                  <div>
                    <label style={labelStyle}>Your Insurance Company</label>
                    <input type="text" placeholder="e.g. State Farm" value={form.ownInsurance}
                      onChange={e => handleChange('ownInsurance', e.target.value)} style={inputStyle('ownInsurance')} />
                  </div>
                  <div>
                    <label style={labelStyle}>Other Party's Insurance (if known)</label>
                    <input type="text" placeholder="e.g. Allstate" value={form.otherInsurance}
                      onChange={e => handleChange('otherInsurance', e.target.value)} style={inputStyle('otherInsurance')} />
                  </div>
                </>)}
                {fieldGroup(<>
                  <label style={labelStyle}>Other Party's Name (if known)</label>
                  <input type="text" placeholder="Name of at-fault party" value={form.otherPartyName}
                    onChange={e => handleChange('otherPartyName', e.target.value)} style={inputStyle('otherPartyName')} />
                </>)}
                <div style={{
                  background: isDark ? 'rgba(201,168,76,0.06)' : '#F8F5F0',
                  borderLeft: '3px solid #C9A84C',
                  padding: '12px 16px',
                  borderRadius: '0 4px 4px 0',
                }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: mutedColor, lineHeight: 1.7, fontStyle: 'italic', margin: 0 }}>
                    Do not contact the other party's insurance company or sign any documents
                    before speaking with Conrad. Insurance adjusters are trained to minimize payouts.
                  </p>
                </div>
              </>
            )}

            {/* Step 5 — Review */}
            {step === 5 && (
              <>
                <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '22px', fontWeight: 600, color: headingColor, marginBottom: '8px' }}>
                  Review Your Information
                </h2>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: mutedColor, marginBottom: '24px', lineHeight: 1.6 }}>
                  Please review the information below before submitting. You can go back to edit any section.
                </p>

                {/* Section: Contact */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, color: '#C9A84C', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      Contact Info
                    </span>
                    <button onClick={() => setStep(1)} style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: headingColor, background: 'transparent', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                      Edit
                    </button>
                  </div>
                  {reviewRow('Name', form.name)}
                  {reviewRow('Phone', form.phone)}
                  {reviewRow('Email', form.email)}
                  {reviewRow('Language', form.language)}
                  {reviewRow('Contact Method', form.contactMethod)}
                </div>

                {/* Section: Incident */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, color: '#C9A84C', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      Incident Details
                    </span>
                    <button onClick={() => setStep(2)} style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: headingColor, background: 'transparent', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                      Edit
                    </button>
                  </div>
                  {reviewRow('Case Type', form.caseType)}
                  {reviewRow('Incident Date', form.incidentDate)}
                  {reviewRow('Location', form.incidentLocation)}
                  {reviewRow('Description', form.incidentDesc)}
                </div>

                {/* Section: Injuries */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, color: '#C9A84C', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      Injuries &amp; Treatment
                    </span>
                    <button onClick={() => setStep(3)} style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: headingColor, background: 'transparent', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                      Edit
                    </button>
                  </div>
                  {reviewRow('Injuries', form.injuryDesc)}
                  {reviewRow('Treatment Date', form.treatmentDate)}
                  {reviewRow('Treating Doctor', form.treatingDoctor)}
                  {reviewRow('Hospital', form.hospital)}
                  {reviewRow('Ongoing Treatment', form.ongoingTreatment)}
                </div>

                {/* Section: Other Parties */}
                <div style={{ marginBottom: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, color: '#C9A84C', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      Other Parties
                    </span>
                    <button onClick={() => setStep(4)} style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: headingColor, background: 'transparent', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                      Edit
                    </button>
                  </div>
                  {reviewRow('Police Report', form.policeReport)}
                  {reviewRow('Report Number', form.reportNumber)}
                  {reviewRow('Your Insurance', form.ownInsurance)}
                  {reviewRow('Other Insurance', form.otherInsurance)}
                  {reviewRow('Other Party', form.otherPartyName)}
                </div>

                {/* Disclaimer */}
                <div style={{
                  background: isDark ? 'rgba(201,168,76,0.06)' : '#F8F5F0',
                  borderLeft: '3px solid #C9A84C',
                  padding: '14px 18px',
                  borderRadius: '0 4px 4px 0',
                  marginBottom: '28px',
                }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: mutedColor, lineHeight: 1.7, fontStyle: 'italic', margin: 0 }}>
                    By submitting this form you confirm the information provided is accurate to the best of your knowledge.
                    This submission is confidential and does not create an attorney-client relationship.
                    A confirmation email will be sent to {form.email || 'your email address'}.
                  </p>
                </div>
              </>
            )}

            {/* Navigation buttons */}
            <div style={{ display: 'flex', gap: '12px', marginTop: step === 5 ? '0' : '8px' }}>
              {step > 1 && (
                <button onClick={handleBack} style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 400,
                  background: 'transparent', color: headingColor,
                  padding: '12px 20px', borderRadius: '4px',
                  border: `1.5px solid ${cardBorder}`, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0,
                }}>
                  <ArrowLeft size={15} strokeWidth={2} />
                  Back
                </button>
              )}
              {step < 5 && (
                <button onClick={handleNext} style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 500,
                  background: '#C0392B', color: '#ffffff',
                  padding: '12px 28px', borderRadius: '4px', border: 'none',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px',
                  flex: 1, justifyContent: 'center',
                }}>
                  Continue
                  <ArrowRight size={16} strokeWidth={2} />
                </button>
              )}
              {step === 5 && (
                <button onClick={handleSubmit} style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 500,
                  background: '#C0392B', color: '#ffffff',
                  padding: '12px 28px', borderRadius: '4px', border: 'none',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px',
                  flex: 1, justifyContent: 'center',
                }}>
                  Submit Intake Form
                  <ArrowRight size={16} strokeWidth={2} />
                </button>
              )}
            </div>

          </div>

          {/* Auto-save notice */}
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '11px',
            color: mutedColor, textAlign: 'center', marginTop: '16px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px',
          }}>
            <Save size={11} strokeWidth={1.5} />
            Progress is automatically saved to this device
          </p>

        </div>
      </section>

      <style>{`
        @media (max-width: 560px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>

    </div>
  )
}
