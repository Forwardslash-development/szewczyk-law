import { NavLink } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

interface ServicesProps {
  isDark: boolean
}

const SERVICES = [
  {
    icon: '🚗',
    title: 'Car & Truck Accidents',
    intro: 'Motor vehicle accidents are the leading cause of personal injury claims in Illinois. Whether you were hit by a distracted driver, a drunk driver, or a commercial truck, you deserve full compensation.',
    points: [
      'Medical expenses — past and future',
      'Lost wages and reduced earning capacity',
      'Vehicle repair or replacement',
      'Pain and suffering',
      'Insurance dispute resolution',
    ],
  },
  {
    icon: '🏥',
    title: 'Medical Malpractice',
    intro: 'When doctors, nurses, hospitals, or other healthcare providers fail to meet the standard of care and you are harmed as a result, you may have a medical malpractice claim.',
    points: [
      'Surgical errors',
      'Misdiagnosis or delayed diagnosis',
      'Medication errors',
      'Birth injuries',
      'Anesthesia errors',
    ],
  },
  {
    icon: '🏗',
    title: 'Workplace Injuries',
    intro: 'A serious workplace injury can upend your life. We help injured workers navigate both workers\' compensation claims and third-party liability claims to maximize their recovery.',
    points: [
      'Construction accidents',
      'Industrial and factory injuries',
      'Repetitive stress injuries',
      'Third-party negligence claims',
      'Workers\' comp disputes',
    ],
  },
  {
    icon: '🚶',
    title: 'Slip & Fall',
    intro: 'Property owners have a legal duty to maintain safe conditions. When they fail — through wet floors, broken stairs, inadequate lighting, or icy walkways — and you are injured, they may be liable.',
    points: [
      'Retail and grocery store accidents',
      'Restaurant and bar injuries',
      'Apartment and condo falls',
      'Sidewalk and parking lot injuries',
      'Government property claims',
    ],
  },
  {
    icon: '⚖',
    title: 'Wrongful Death',
    intro: 'Losing a loved one due to someone else\'s negligence is devastating. We handle wrongful death claims with the sensitivity and determination your family deserves.',
    points: [
      'Funeral and burial expenses',
      'Loss of financial support',
      'Loss of companionship',
      'Pain and suffering of the deceased',
      'Estate claims',
    ],
  },
  {
    icon: '📦',
    title: 'Product Liability',
    intro: 'When a defective product causes injury, the manufacturer, distributor, or retailer may be held responsible. You should not have to pay the price for someone else\'s negligent design or manufacturing.',
    points: [
      'Defective auto parts',
      'Dangerous medical devices',
      'Unsafe children\'s products',
      'Contaminated food or drugs',
      'Faulty industrial equipment',
    ],
  },
]

export default function Services({ isDark }: ServicesProps) {
  const heroBg       = isDark ? '#0A1628' : '#1B2E4B'
  const pageBg       = isDark ? '#0F1C2E' : '#F8F5F0'
  const cardBg       = isDark ? '#162540' : '#FFFFFF'
  const cardBorder   = isDark ? 'rgba(255,255,255,0.08)' : '#E5E0D8'
  const headingColor = isDark ? '#F9FAFB' : '#1B2E4B'
  const bodyColor    = isDark ? '#D1D5DB' : '#4B5563'

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
            Practice Areas
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
            How We Can Help You
          </h1>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '520px',
            lineHeight: 1.7,
          }}>
            We handle all types of personal injury cases across Illinois.
            No matter how complex your situation, we will give you an honest
            assessment and fight for the compensation you deserve.
          </p>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
          }}>
            {SERVICES.map(({ icon, title, intro, points }) => (
              <div key={title} style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: '8px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                transition: 'background 0.2s',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: isDark ? 'rgba(201,168,76,0.1)' : '#F0EBE3',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                }}>
                  {icon}
                </div>

                <h2 style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontSize: '20px',
                  fontWeight: 600,
                  color: headingColor,
                  margin: 0,
                  transition: 'color 0.2s',
                }}>
                  {title}
                </h2>

                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: bodyColor,
                  lineHeight: 1.75,
                  margin: 0,
                  transition: 'color 0.2s',
                }}>
                  {intro}
                </p>

                <div style={{
                  borderTop: `1px solid ${cardBorder}`,
                  paddingTop: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}>
                  {points.map(point => (
                    <div key={point} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                    }}>
                      <CheckCircle size={14} color="#C9A84C" strokeWidth={2} style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13px',
                        color: bodyColor,
                        lineHeight: 1.6,
                        transition: 'color 0.2s',
                      }}>
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                <NavLink to="/consultation" style={{
                  marginTop: 'auto',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: isDark ? '#C9A84C' : '#1B2E4B',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  paddingTop: '8px',
                  borderTop: `1px solid ${cardBorder}`,
                }}>
                  Discuss This Case Type
                  <ArrowRight size={13} strokeWidth={2} />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: heroBg, padding: '64px 24px', textAlign: 'center', transition: 'background 0.2s' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(24px, 3vw, 36px)',
            fontWeight: 600,
            color: '#ffffff',
            marginBottom: '14px',
          }}>
            Not Sure If You Have a Case?
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.7,
            marginBottom: '28px',
          }}>
            Tell us what happened. We will give you an honest answer — no obligation,
            no pressure, no cost.
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
