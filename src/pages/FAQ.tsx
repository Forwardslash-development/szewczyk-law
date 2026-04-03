import { useState } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'

interface FAQProps {
  isDark: boolean
}

const FAQ_ITEMS = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'How much does it cost to hire a personal injury attorney?',
        a: 'Nothing upfront. We work on a contingency fee basis, which means you pay nothing unless we win your case. Our fee is a percentage of the settlement or verdict — if we do not recover money for you, you owe us nothing.',
      },
      {
        q: 'What should I do immediately after an accident?',
        a: 'First, seek medical attention — even if you feel fine, some injuries appear days later and medical records are critical to your case. Second, document everything: photos of the scene, contact information for witnesses, and a copy of the police report. Third, do not give a recorded statement to any insurance company before speaking with an attorney.',
      },
      {
        q: 'How long do I have to file a personal injury claim in Illinois?',
        a: 'In Illinois, the statute of limitations for most personal injury cases is two years from the date of the injury. For wrongful death cases it is also two years from the date of death. There are exceptions that can shorten or extend this window, so it is important to consult an attorney as soon as possible.',
      },
      {
        q: 'What is a free consultation and what should I bring?',
        a: 'A free consultation is a no-obligation meeting where we review the details of your case and give you an honest assessment of your options. Bring any documents you have — police reports, medical records, photos, insurance correspondence, and any written communications related to your injury.',
      },
    ],
  },
  {
    category: 'Your Case',
    questions: [
      {
        q: 'How long will my case take?',
        a: 'Every case is different. A straightforward car accident case may settle in a few months. More complex cases involving serious injuries, disputed liability, or multiple parties can take one to three years. We will give you a realistic timeline during your consultation and keep you updated throughout.',
      },
      {
        q: 'What types of compensation can I recover?',
        a: 'You may be entitled to compensation for medical expenses (past and future), lost wages and loss of earning capacity, pain and suffering, emotional distress, property damage, and loss of enjoyment of life. In cases involving egregious conduct, punitive damages may also be available.',
      },
      {
        q: 'Will my case go to trial?',
        a: 'Most personal injury cases settle before trial. However, we prepare every case as if it will go to trial — that preparation is exactly what gives us leverage to negotiate strong settlements. If the insurance company does not offer fair compensation, we are fully prepared to take your case to a jury.',
      },
      {
        q: 'Should I accept the insurance company\'s first offer?',
        a: 'Almost always no. Insurance companies are businesses — their first offer is designed to close your claim quickly and cheaply. Before accepting any offer, speak with an attorney. Once you accept a settlement, you typically cannot go back for more money even if your injuries turn out to be more serious than initially thought.',
      },
    ],
  },
  {
    category: 'Working With Us',
    questions: [
      {
        q: 'Who will be handling my case?',
        a: 'Conrad Szewczyk personally handles every case at this firm. You will not be passed off to a paralegal or junior associate. Conrad will be your point of contact from the initial consultation through resolution.',
      },
      {
        q: 'How do I know if I have a valid case?',
        a: 'The best way to find out is to schedule a free consultation. Generally, a valid personal injury case requires that someone else was negligent, that their negligence caused your injury, and that you suffered actual damages as a result. We will evaluate all three elements during your consultation.',
      },
      {
        q: 'Do you handle cases outside of Chicago?',
        a: 'Yes. We represent clients throughout the state of Illinois. While our office is based in Chicago, we handle cases in Cook County and surrounding counties. Contact us to discuss the specifics of your situation.',
      },
      {
        q: 'What languages do you serve clients in?',
        a: 'Our office serves clients in English, Spanish, Polish, French, and Arabic. We want every client to fully understand their case and their rights — language should never be a barrier to justice.',
      },
    ],
  },
]

export default function FAQ({ isDark }: FAQProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const heroBg       = isDark ? '#0A1628' : '#1B2E4B'
  const pageBg       = isDark ? '#0F1C2E' : '#F8F5F0'
  const cardBg       = isDark ? '#162540' : '#FFFFFF'
  const cardBorder   = isDark ? 'rgba(255,255,255,0.08)' : '#E5E0D8'
  const headingColor = isDark ? '#F9FAFB' : '#1B2E4B'
  const bodyColor    = isDark ? '#D1D5DB' : '#4B5563'
  const dividerColor = isDark ? 'rgba(255,255,255,0.06)' : '#F0EBE3'

  function toggle(key: string) {
    setOpenItems(o => ({ ...o, [key]: !o[key] }))
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
            Frequently Asked Questions
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
            Your Questions, Answered
          </h1>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '500px',
            lineHeight: 1.7,
          }}>
            Personal injury law can be confusing. Here are answers to the questions
            we hear most often. Don't see yours? Call us — we're happy to help.
          </p>
        </div>
      </section>

      {/* FAQ content */}
      <section style={{ padding: '72px 24px' }}>
        <div style={{
          maxWidth: '860px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
        }}>
          {FAQ_ITEMS.map(({ category, questions }) => (
            <div key={category}>

              {/* Category heading */}
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                color: '#C9A84C',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}>
                {category}
              </div>

              {/* Questions */}
              <div style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: '8px',
                overflow: 'hidden',
                transition: 'background 0.2s',
              }}>
                {questions.map(({ q, a }, i) => {
                  const key = `${category}-${i}`
                  const isOpen = openItems[key]
                  return (
                    <div key={key} style={{
                      borderBottom: i < questions.length - 1 ? `1px solid ${dividerColor}` : 'none',
                    }}>
                      <button
                        onClick={() => toggle(key)}
                        aria-expanded={isOpen}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '16px',
                          padding: '20px 24px',
                          background: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          textAlign: 'left',
                        }}
                      >
                        <span style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '15px',
                          fontWeight: 500,
                          color: headingColor,
                          lineHeight: 1.5,
                          transition: 'color 0.2s',
                        }}>
                          {q}
                        </span>
                        <ChevronDown
                          size={18}
                          color="#C9A84C"
                          strokeWidth={1.5}
                          style={{
                            flexShrink: 0,
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s',
                          }}
                        />
                      </button>
                      {isOpen && (
                        <div style={{
                          padding: '0 24px 20px',
                          borderTop: `1px solid ${dividerColor}`,
                        }}>
                          <p style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '14px',
                            color: bodyColor,
                            lineHeight: 1.8,
                            margin: '16px 0 0',
                            transition: 'color 0.2s',
                          }}>
                            {a}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
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
            Still Have Questions?
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.7,
            marginBottom: '28px',
          }}>
            Every case is unique. The best way to get answers is to speak
            with Conrad directly — at no charge.
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
