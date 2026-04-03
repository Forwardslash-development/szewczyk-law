import { NavLink } from 'react-router-dom'
import { ArrowRight, Scale, Award, BookOpen, Users, MapPin } from 'lucide-react'

interface AboutProps {
  isDark: boolean
}

export default function About({ isDark }: AboutProps) {

  const heroBg       = isDark ? '#0A1628' : '#1B2E4B'
  const pageBg       = isDark ? '#0F1C2E' : '#F8F5F0'
  const cardBg       = isDark ? '#162540' : '#FFFFFF'
  const cardBorder   = isDark ? 'rgba(255,255,255,0.08)' : '#E5E0D8'
  const headingColor = isDark ? '#F9FAFB' : '#1B2E4B'
  const bodyColor    = isDark ? '#D1D5DB' : '#4B5563'
  const sectionBg    = isDark ? '#0D1929' : '#FFFFFF'
  const mutedColor   = isDark ? 'rgba(255,255,255,0.45)' : '#9CA3AF'

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
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            color: '#C9A84C',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            About the Firm
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '16px',
            maxWidth: '700px',
          }}>
            Conrad Szewczyk
          </h1>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '32px',
          }}>
            Attorney at Law · Personal Injury · Chicago, Illinois
          </p>

          {/* Stats bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '16px',
            maxWidth: '700px',
          }}>
            {[
              { value: '[X]+',    label: 'Years Experience'    },
              { value: '[X]+',    label: 'Cases Handled'       },
              { value: '$[X]M+',  label: 'Recovered for Clients' },
              { value: '[X]+',    label: 'Five-Star Reviews'   },
            ].map(({ value, label }) => (
              <div key={label} style={statStyle}>
                <div style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontSize: '28px',
                  fontWeight: 700,
                  color: '#C9A84C',
                  lineHeight: 1,
                  marginBottom: '6px',
                }}>
                  {value}
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.6)',
                  letterSpacing: '0.06em',
                }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section style={{ background: sectionBg, padding: '72px 24px', transition: 'background 0.2s' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '64px',
            alignItems: 'start',
          }}
          className="about-grid"
          >

            {/* Photo placeholder */}
            <div>
              <div style={{
                width: '100%',
                aspectRatio: '3/4',
                background: isDark ? '#1B2E4B' : '#E5E0D8',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                border: `1px solid ${cardBorder}`,
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: isDark ? '#2A4A72' : '#C9A84C',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <span style={{
                    fontFamily: 'Playfair Display, Georgia, serif',
                    fontSize: '28px',
                    fontWeight: 700,
                    color: '#ffffff',
                  }}>CS</span>
                </div>
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  color: mutedColor,
                  fontStyle: 'italic',
                }}>
                  [ Photo placeholder ]
                </span>
              </div>

              {/* Contact card */}
              <div style={{
                marginTop: '20px',
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: '8px',
                padding: '20px',
              }}>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  fontWeight: 600,
                  color: '#C9A84C',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                }}>
                  Contact Conrad
                </div>
                {[
                  { icon: '📞', label: '(312) 555-0100' },
                  { icon: '✉️', label: 'szewczyklaw@gmail.com' },
                  { icon: '📍', label: 'Chicago, Illinois' },
                ].map(({ icon, label }) => (
                  <div key={label} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '10px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    color: bodyColor,
                  }}>
                    <span style={{ fontSize: '14px' }}>{icon}</span>
                    {label}
                  </div>
                ))}
                <NavLink to="/consultation" style={{
                  display: 'block',
                  marginTop: '16px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  background: '#C0392B',
                  color: '#ffffff',
                  padding: '10px 16px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  textAlign: 'center',
                }}>
                  Schedule a Free Consultation
                </NavLink>
              </div>
            </div>

            {/* Bio text */}
            <div>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                color: '#C9A84C',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}>
                Meet Your Attorney
              </div>
              <h2 style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: 'clamp(24px, 3vw, 36px)',
                fontWeight: 600,
                color: headingColor,
                marginBottom: '24px',
                transition: 'color 0.2s',
              }}>
                Fighting for Illinois Families for Over [X] Years
              </h2>

              {[
                `Conrad Szewczyk has dedicated his career to representing individuals and families who have been seriously injured due to the negligence of others. Based in Chicago, Conrad brings [X] years of courtroom experience and a deep commitment to justice to every case he handles.`,
                `[Background paragraph — e.g. Before founding his own firm, Conrad spent [X] years as [previous role], giving him unique insight into how insurance companies and defense attorneys operate. He uses that knowledge to anticipate their strategies and fight back effectively.]`,
                `Conrad believes every injured person deserves the same quality of legal representation regardless of their background, language, or financial situation. That commitment is reflected in his contingency fee structure — clients pay nothing unless he wins their case.`,
                `When he is not in the courtroom, Conrad is [community involvement / personal detail — e.g. an active member of the Illinois State Bar Association, a volunteer at [organization], and a proud Chicago native].`,
              ].map((para, i) => (
                <p key={i} style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  color: bodyColor,
                  lineHeight: 1.8,
                  marginBottom: '20px',
                  transition: 'color 0.2s',
                  fontStyle: para.startsWith('[') ? 'italic' : 'normal',
                }}>
                  {para}
                </p>
              ))}

              {/* Philosophy callout */}
              <div style={{
                borderLeft: '3px solid #C9A84C',
                paddingLeft: '20px',
                marginTop: '32px',
                marginBottom: '32px',
              }}>
                <p style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontSize: '20px',
                  fontStyle: 'italic',
                  color: headingColor,
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  "[Placeholder for Conrad's personal philosophy or mission statement — in his own words.]"
                </p>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  color: mutedColor,
                  marginTop: '10px',
                }}>
                  — Conrad Szewczyk, Attorney at Law
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section style={{ background: pageBg, padding: '72px 24px', transition: 'background 0.2s' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              color: '#C9A84C',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}>
              Credentials
            </div>
            <h2 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 600,
              color: headingColor,
              transition: 'color 0.2s',
            }}>
              Education &amp; Bar Admissions
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}>
            {[
              {
                icon: BookOpen,
                title: 'Law School',
                items: ['[Law School Name], J.D., [Year]', '[Honors / Law Review — if applicable]'],
              },
              {
                icon: Scale,
                title: 'Bar Admissions',
                items: ['Illinois State Bar, [Year]', '[Additional admissions if any]', 'U.S. District Court, Northern District of Illinois'],
              },
              {
                icon: Award,
                title: 'Awards &amp; Recognition',
                items: ['[Award or recognition — e.g. Super Lawyers Rising Star]', '[Association membership]', '[Additional recognition]'],
              },
              {
                icon: Users,
                title: 'Professional Memberships',
                items: ['Illinois State Bar Association', 'Chicago Bar Association', '[Additional memberships]'],
              },
            ].map(({ icon: Icon, title, items }) => (
              <div key={title} style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: '8px',
                padding: '24px',
                transition: 'background 0.2s',
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: isDark ? 'rgba(201,168,76,0.1)' : '#F0EBE3',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '14px',
                }}>
                  <Icon size={18} color="#C9A84C" strokeWidth={1.5} />
                </div>
                <h3 style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: headingColor,
                  marginBottom: '14px',
                  transition: 'color 0.2s',
                }}>
                  {title}
                </h3>
                {items.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    marginBottom: '8px',
                  }}>
                    <div style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: '#C9A84C',
                      marginTop: '7px',
                      flexShrink: 0,
                    }} />
                    <span style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      color: item.startsWith('[') ? mutedColor : bodyColor,
                      lineHeight: 1.6,
                      fontStyle: item.startsWith('[') ? 'italic' : 'normal',
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section style={{ background: sectionBg, padding: '72px 24px', transition: 'background 0.2s' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              color: '#C9A84C',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}>
              Community
            </div>
            <h2 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 600,
              color: headingColor,
              transition: 'color 0.2s',
            }}>
              Rooted in Chicago
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}>
            {[
              { icon: MapPin, title: 'Local Practice',       desc: '[Describe Conrad\'s connection to Chicago and the communities he serves.]' },
              { icon: Users, title: 'Community Involvement', desc: '[Organizations, volunteer work, sponsorships, or causes Conrad supports.]'  },
              { icon: Award, title: 'Pro Bono Work',         desc: '[Any pro bono work or reduced-fee representation Conrad offers.]'           },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: '8px',
                padding: '24px',
                transition: 'background 0.2s',
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: isDark ? 'rgba(201,168,76,0.1)' : '#F0EBE3',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '14px',
                }}>
                  <Icon size={18} color="#C9A84C" strokeWidth={1.5} />
                </div>
                <h3 style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: headingColor,
                  marginBottom: '10px',
                  transition: 'color 0.2s',
                }}>
                  {title}
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  color: mutedColor,
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  margin: 0,
                }}>
                  {desc}
                </p>
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
            Work With Conrad Directly
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.7,
            marginBottom: '28px',
          }}>
            When you hire Conrad Szewczyk, you work with Conrad — not a paralegal,
            not a case manager. Your case gets his personal attention.
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

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>

    </div>
  )
}
