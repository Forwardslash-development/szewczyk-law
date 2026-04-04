import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowRight, ArrowLeft, CheckCircle, Save, Trash2 } from 'lucide-react'

interface IntakeProps {
  isDark: boolean
}

const STORAGE_KEY = 'szewczyk-intake-draft'

const INITIAL_FORM = {
  name:             '',
  phone:            '',
  email:            '',
  language:         '',
  contactMethod:    '',
  caseType:         '',
  incidentDate:     '',
  incidentLocation: '',
  incidentDesc:     '',
  injuryDesc:       '',
  treatmentDate:    '',
  treatingDoctor:   '',
  hospital:         '',
  ongoingTreatment: '',
  policeReport:     '',
  reportNumber:     '',
  ownInsurance:     '',
  otherInsurance:   '',
  otherPartyName:   '',
}

export default function Intake({ isDark }: IntakeProps) {
  const { t } = useTranslation()
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
  const mutedColor   = isDark ? 'rgba(255,255,255,0.60)' : '#9CA3AF'
  const dividerColor = isDark ? 'rgba(255,255,255,0.06)' : '#F0EBE3'

  const STEPS = [
    { number: 1, labelKey: 'intake.step1_label' },
    { number: 2, labelKey: 'intake.step2_label' },
    { number: 3, labelKey: 'intake.step3_label' },
    { number: 4, labelKey: 'intake.step4_label' },
    { number: 5, labelKey: 'intake.step5_label' },
  ]

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
      if (!form.name.trim())  e.name  = t('intake.name_error')
      if (!form.phone.trim()) e.phone = t('intake.phone_error')
      if (!form.email.trim()) e.email = t('intake.email_error')
    }
    if (s === 2) {
      if (!form.caseType.trim())     e.caseType     = t('intake.case_type_error')
      if (!form.incidentDate.trim()) e.incidentDate = t('intake.incident_date_error')
      if (!form.incidentDesc.trim()) e.incidentDesc = t('intake.incident_desc_error')
    }
    if (s === 3) {
      if (!form.injuryDesc.trim()) e.injuryDesc = t('intake.injury_desc_error')
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
    // TODO: Integrate EmailJS here once Gmail is set up
    localStorage.removeItem(STORAGE_KEY)
    setSubmitted(true)
  }

  const inputStyle = (field: keyof typeof INITIAL_FORM) => ({
    fontFamily: 'Inter, sans-serif', fontSize: '14px', padding: '10px 12px',
    border: `1.5px solid ${errors[field] ? '#C0392B' : inputBorder}`,
    borderRadius: '4px', color: isDark ? '#F9FAFB' : '#2C2C2C',
    background: inputBg, width: '100%', outline: 'none', transition: 'border-color 0.15s',
  })

  const labelStyle = {
    fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600 as const,
    color: labelColor, display: 'block' as const, marginBottom: '5px', letterSpacing: '0.03em',
  }

  const errorStyle = {
    fontFamily: 'Inter, sans-serif', fontSize: '11px',
    color: '#C0392B', marginTop: '4px', display: 'block' as const,
  }

  const fg = (children: React.ReactNode) => (
    <div style={{ marginBottom: '16px' }}>{children}</div>
  )

  const twoCol = (children: React.ReactNode) => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="form-row">
      {children}
    </div>
  )

  const reviewRow = (labelKey: string, value: string) => value ? (
    <div style={{ display: 'flex', gap: '16px', padding: '10px 0', borderBottom: `1px solid ${dividerColor}` }}>
      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: mutedColor, minWidth: '160px', flexShrink: 0 }}>
        {t(labelKey)}
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
            borderRadius: '50%', display: 'flex', alignItems: 'center',
            justifyContent: 'center', margin: '0 auto 24px',
          }}>
            <CheckCircle size={36} color="#C9A84C" strokeWidth={1.5} />
          </div>
          <h2 style={{
            fontFamily: 'Playfair Display, Georgia, serif', fontSize: '32px',
            fontWeight: 600, color: headingColor, marginBottom: '16px',
          }}>
            {t('intake.success_title')}
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '15px',
            color: bodyColor, lineHeight: 1.7, marginBottom: '8px',
          }}>
            {t('intake.success_desc')}
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '13px',
            color: mutedColor, lineHeight: 1.7, marginBottom: '8px',
          }}>
            {t('intake.success_email_note')} <strong style={{ color: bodyColor }}>{form.email}</strong>
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '13px',
            color: mutedColor, lineHeight: 1.7, marginBottom: '32px',
          }}>
            {t('intake.success_urgent')}{' '}
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
            {t('intake.overline')}
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700,
            color: '#ffffff', lineHeight: 1.15, marginBottom: '16px', maxWidth: '600px',
          }}>
            {t('intake.title')}
          </h1>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '16px',
            color: 'rgba(255,255,255,0.7)', maxWidth: '520px', lineHeight: 1.7,
          }}>
            {t('intake.subtitle')}
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
              borderRadius: '8px', padding: '14px 18px', marginBottom: '24px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              gap: '12px', flexWrap: 'wrap',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Save size={15} color="#C9A84C" strokeWidth={1.5} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: bodyColor }}>
                  {t('intake.draft_restored')}
                </span>
              </div>
              <button onClick={clearDraft} style={{
                fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 500,
                color: '#C0392B', background: 'transparent', border: 'none',
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px',
              }}>
                <Trash2 size={13} strokeWidth={1.5} />
                {t('intake.start_fresh')}
              </button>
            </div>
          )}

          {/* Step indicator */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px', overflowX: 'auto', paddingBottom: '4px' }}>
            {STEPS.map((s, i) => (
              <div key={s.number} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: step > s.number ? '#C9A84C' : step === s.number ? '#C0392B' : (isDark ? 'rgba(255,255,255,0.08)' : '#E5E0D8'),
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600,
                    color: step >= s.number ? '#ffffff' : mutedColor,
                    transition: 'background 0.2s', flexShrink: 0,
                  }}>
                    {step > s.number ? '✓' : s.number}
                  </div>
                  <span style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '11px',
                    color: step >= s.number ? headingColor : mutedColor,
                    fontWeight: step === s.number ? 600 : 400, whiteSpace: 'nowrap',
                  }}>
                    {t(s.labelKey)}
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

            {/* Step 1 */}
            {step === 1 && (
              <>
                <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '22px', fontWeight: 600, color: headingColor, marginBottom: '24px' }}>
                  {t('intake.step1_title')}
                </h2>
                {twoCol(<>
                  <div>
                    <label style={labelStyle}>{t('intake.name_label')} *</label>
                    <input type="text" placeholder="Jane Smith" value={form.name}
                      onChange={e => handleChange('name', e.target.value)} style={inputStyle('name')} />
                    {errors.name && <span style={errorStyle}>{errors.name}</span>}
                  </div>
                  <div>
                    <label style={labelStyle}>{t('intake.phone_label')} *</label>
                    <input type="tel" placeholder="(312) 555-0100" value={form.phone}
                      onChange={e => handleChange('phone', e.target.value)} style={inputStyle('phone')} />
                    {errors.phone && <span style={errorStyle}>{errors.phone}</span>}
                  </div>
                </>)}
                {fg(<>
                  <label style={labelStyle}>{t('intake.email_label')} *</label>
                  <input type="email" placeholder="jane@example.com" value={form.email}
                    onChange={e => handleChange('email', e.target.value)} style={inputStyle('email')} />
                  {errors.email && <span style={errorStyle}>{errors.email}</span>}
                </>)}
                {twoCol(<>
                  <div>
                    <label style={labelStyle}>{t('intake.language_label')}</label>
                    <select value={form.language} onChange={e => handleChange('language', e.target.value)} style={inputStyle('language')}>
                      <option value="">{t('intake.language_placeholder')}</option>
                      <option value="en">English</option>
                      <option value="es">Español</option>
                      <option value="pl">Polski</option>
                      <option value="fr">Français</option>
                      <option value="ar">العربية</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>{t('intake.contact_method_label')}</label>
                    <select value={form.contactMethod} onChange={e => handleChange('contactMethod', e.target.value)} style={inputStyle('contactMethod')}>
                      <option value="">{t('intake.contact_none')}</option>
                      <option value="phone">{t('intake.contact_phone')}</option>
                      <option value="email">{t('intake.contact_email')}</option>
                      <option value="text">{t('intake.contact_text')}</option>
                    </select>
                  </div>
                </>)}
              </>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <>
                <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '22px', fontWeight: 600, color: headingColor, marginBottom: '24px' }}>
                  {t('intake.step2_title')}
                </h2>
                {fg(<>
                  <label style={labelStyle}>{t('intake.case_type_label')} *</label>
                  <select value={form.caseType} onChange={e => handleChange('caseType', e.target.value)} style={inputStyle('caseType')}>
                    <option value="">{t('intake.case_type_placeholder')}</option>
                    <option value="car-accident">{t('intake.case_car')}</option>
                    <option value="slip-fall">{t('intake.case_slip')}</option>
                    <option value="workplace">{t('intake.case_workplace')}</option>
                    <option value="medical">{t('intake.case_medical')}</option>
                    <option value="wrongful-death">{t('intake.case_wrongful')}</option>
                    <option value="product">{t('intake.case_product')}</option>
                    <option value="other">{t('intake.case_other')}</option>
                  </select>
                  {errors.caseType && <span style={errorStyle}>{errors.caseType}</span>}
                </>)}
                {twoCol(<>
                  <div>
                    <label style={labelStyle}>{t('intake.incident_date_label')} *</label>
                    <input type="date" value={form.incidentDate}
                      onChange={e => handleChange('incidentDate', e.target.value)} style={inputStyle('incidentDate')} />
                    {errors.incidentDate && <span style={errorStyle}>{errors.incidentDate}</span>}
                  </div>
                  <div>
                    <label style={labelStyle}>{t('intake.incident_location_label')}</label>
                    <input type="text" placeholder={t('intake.incident_location_placeholder')} value={form.incidentLocation}
                      onChange={e => handleChange('incidentLocation', e.target.value)} style={inputStyle('incidentLocation')} />
                  </div>
                </>)}
                {fg(<>
                  <label style={labelStyle}>{t('intake.incident_desc_label')} *</label>
                  <textarea rows={6} placeholder={t('intake.incident_desc_placeholder')} value={form.incidentDesc}
                    onChange={e => handleChange('incidentDesc', e.target.value)}
                    style={{ ...inputStyle('incidentDesc'), resize: 'vertical' }} />
                  {errors.incidentDesc && <span style={errorStyle}>{errors.incidentDesc}</span>}
                </>)}
              </>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <>
                <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '22px', fontWeight: 600, color: headingColor, marginBottom: '24px' }}>
                  {t('intake.step3_title')}
                </h2>
                {fg(<>
                  <label style={labelStyle}>{t('intake.injury_desc_label')} *</label>
                  <textarea rows={4} placeholder={t('intake.injury_desc_placeholder')} value={form.injuryDesc}
                    onChange={e => handleChange('injuryDesc', e.target.value)}
                    style={{ ...inputStyle('injuryDesc'), resize: 'vertical' }} />
                  {errors.injuryDesc && <span style={errorStyle}>{errors.injuryDesc}</span>}
                </>)}
                {twoCol(<>
                  <div>
                    <label style={labelStyle}>{t('intake.treatment_date_label')}</label>
                    <input type="date" value={form.treatmentDate}
                      onChange={e => handleChange('treatmentDate', e.target.value)} style={inputStyle('treatmentDate')} />
                  </div>
                  <div>
                    <label style={labelStyle}>{t('intake.treating_doctor_label')}</label>
                    <input type="text" placeholder={t('intake.treating_doctor_placeholder')} value={form.treatingDoctor}
                      onChange={e => handleChange('treatingDoctor', e.target.value)} style={inputStyle('treatingDoctor')} />
                  </div>
                </>)}
                {fg(<>
                  <label style={labelStyle}>{t('intake.hospital_label')}</label>
                  <input type="text" placeholder={t('intake.hospital_placeholder')} value={form.hospital}
                    onChange={e => handleChange('hospital', e.target.value)} style={inputStyle('hospital')} />
                </>)}
                {fg(<>
                  <label style={labelStyle}>{t('intake.ongoing_treatment_label')}</label>
                  <select value={form.ongoingTreatment} onChange={e => handleChange('ongoingTreatment', e.target.value)} style={inputStyle('ongoingTreatment')}>
                    <option value="">{t('intake.ongoing_select')}</option>
                    <option value="yes">{t('intake.ongoing_yes')}</option>
                    <option value="no">{t('intake.ongoing_no')}</option>
                    <option value="not-yet">{t('intake.ongoing_not_yet')}</option>
                  </select>
                </>)}
              </>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <>
                <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '22px', fontWeight: 600, color: headingColor, marginBottom: '24px' }}>
                  {t('intake.step4_title')}
                </h2>
                {fg(<>
                  <label style={labelStyle}>{t('intake.police_report_label')}</label>
                  <select value={form.policeReport} onChange={e => handleChange('policeReport', e.target.value)} style={inputStyle('policeReport')}>
                    <option value="">{t('intake.ongoing_select')}</option>
                    <option value="yes">{t('intake.police_yes')}</option>
                    <option value="no">{t('intake.police_no')}</option>
                    <option value="unknown">{t('intake.police_unknown')}</option>
                  </select>
                </>)}
                {form.policeReport === 'yes' && fg(<>
                  <label style={labelStyle}>{t('intake.report_number_label')}</label>
                  <input type="text" placeholder={t('intake.report_number_placeholder')} value={form.reportNumber}
                    onChange={e => handleChange('reportNumber', e.target.value)} style={inputStyle('reportNumber')} />
                </>)}
                {twoCol(<>
                  <div>
                    <label style={labelStyle}>{t('intake.own_insurance_label')}</label>
                    <input type="text" placeholder={t('intake.own_insurance_placeholder')} value={form.ownInsurance}
                      onChange={e => handleChange('ownInsurance', e.target.value)} style={inputStyle('ownInsurance')} />
                  </div>
                  <div>
                    <label style={labelStyle}>{t('intake.other_insurance_label')}</label>
                    <input type="text" placeholder={t('intake.other_insurance_placeholder')} value={form.otherInsurance}
                      onChange={e => handleChange('otherInsurance', e.target.value)} style={inputStyle('otherInsurance')} />
                  </div>
                </>)}
                {fg(<>
                  <label style={labelStyle}>{t('intake.other_party_label')}</label>
                  <input type="text" placeholder={t('intake.other_party_placeholder')} value={form.otherPartyName}
                    onChange={e => handleChange('otherPartyName', e.target.value)} style={inputStyle('otherPartyName')} />
                </>)}
                <div style={{
                  background: isDark ? 'rgba(201,168,76,0.06)' : '#F8F5F0',
                  borderLeft: '3px solid #C9A84C', padding: '12px 16px', borderRadius: '0 4px 4px 0',
                }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: mutedColor, lineHeight: 1.7, fontStyle: 'italic', margin: 0 }}>
                    {t('intake.insurance_warning')}
                  </p>
                </div>
              </>
            )}

            {/* Step 5 — Review */}
            {step === 5 && (
              <>
                <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '22px', fontWeight: 600, color: headingColor, marginBottom: '8px' }}>
                  {t('intake.step5_title')}
                </h2>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: mutedColor, marginBottom: '24px', lineHeight: 1.6 }}>
                  {t('intake.step5_subtitle')}
                </p>

                {[
                  {
                    sectionKey: 'intake.review_contact',
                    stepNum: 1,
                    rows: [
                      ['intake.review_name', form.name],
                      ['intake.review_phone', form.phone],
                      ['intake.review_email', form.email],
                      ['intake.review_language', form.language],
                      ['intake.review_contact_method', form.contactMethod],
                    ]
                  },
                  {
                    sectionKey: 'intake.review_incident',
                    stepNum: 2,
                    rows: [
                      ['intake.review_case_type', form.caseType],
                      ['intake.review_incident_date', form.incidentDate],
                      ['intake.review_location', form.incidentLocation],
                      ['intake.review_description', form.incidentDesc],
                    ]
                  },
                  {
                    sectionKey: 'intake.review_injuries',
                    stepNum: 3,
                    rows: [
                      ['intake.review_injuries', form.injuryDesc],
                      ['intake.review_treatment_date', form.treatmentDate],
                      ['intake.review_doctor', form.treatingDoctor],
                      ['intake.review_hospital', form.hospital],
                      ['intake.review_ongoing', form.ongoingTreatment],
                    ]
                  },
                  {
                    sectionKey: 'intake.review_other',
                    stepNum: 4,
                    rows: [
                      ['intake.review_police', form.policeReport],
                      ['intake.review_report_num', form.reportNumber],
                      ['intake.review_own_insurance', form.ownInsurance],
                      ['intake.review_other_insurance', form.otherInsurance],
                      ['intake.review_other_party', form.otherPartyName],
                    ]
                  },
                ].map(({ sectionKey, stepNum, rows }) => (
                  <div key={sectionKey} style={{ marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, color: '#C9A84C', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                        {t(sectionKey)}
                      </span>
                      <button onClick={() => setStep(stepNum)} style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: headingColor, background: 'transparent', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                        {t('intake.review_edit')}
                      </button>
                    </div>
                    {rows.map(([labelKey, value]) => reviewRow(labelKey, value))}
                  </div>
                ))}

                <div style={{
                  background: isDark ? 'rgba(201,168,76,0.06)' : '#F8F5F0',
                  borderLeft: '3px solid #C9A84C', padding: '14px 18px',
                  borderRadius: '0 4px 4px 0', marginBottom: '28px',
                }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: mutedColor, lineHeight: 1.7, fontStyle: 'italic', margin: 0 }}>
                    {t('intake.disclaimer')}
                  </p>
                </div>
              </>
            )}

            {/* Navigation */}
            <div style={{ display: 'flex', gap: '12px', marginTop: step === 5 ? '0' : '8px' }}>
              {step > 1 && (
                <button onClick={handleBack} style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 400,
                  background: 'transparent', color: headingColor, padding: '12px 20px',
                  borderRadius: '4px', border: `1.5px solid ${cardBorder}`, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0,
                }}>
                  <ArrowLeft size={15} strokeWidth={2} />
                  {t('intake.back_btn')}
                </button>
              )}
              {step < 5 && (
                <button onClick={handleNext} style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 500,
                  background: '#C0392B', color: '#ffffff', padding: '12px 28px',
                  borderRadius: '4px', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: '8px', flex: 1, justifyContent: 'center',
                }}>
                  {t('intake.continue_btn')}
                  <ArrowRight size={16} strokeWidth={2} />
                </button>
              )}
              {step === 5 && (
                <button onClick={handleSubmit} style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 500,
                  background: '#C0392B', color: '#ffffff', padding: '12px 28px',
                  borderRadius: '4px', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: '8px', flex: 1, justifyContent: 'center',
                }}>
                  {t('intake.submit_btn')}
                  <ArrowRight size={16} strokeWidth={2} />
                </button>
              )}
            </div>
          </div>

          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '11px', color: mutedColor,
            textAlign: 'center', marginTop: '16px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px',
          }}>
            <Save size={11} strokeWidth={1.5} />
            {t('intake.autosave')}
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 560px) { .form-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  )
}
