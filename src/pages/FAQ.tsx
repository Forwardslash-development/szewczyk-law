import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection, staggerContainer, fadeUp } from '../components/ui/AnimatedSection'

interface FAQProps {
  isDark: boolean
}

const FAQ_KEYS = [
  {
    catKey: 'faq.cat1',
    questions: [
      { qKey: 'faq.q1_1', aKey: 'faq.a1_1' },
      { qKey: 'faq.q1_2', aKey: 'faq.a1_2' },
      { qKey: 'faq.q1_3', aKey: 'faq.a1_3' },
      { qKey: 'faq.q1_4', aKey: 'faq.a1_4' },
    ],
  },
  {
    catKey: 'faq.cat2',
    questions: [
      { qKey: 'faq.q2_1', aKey: 'faq.a2_1' },
      { qKey: 'faq.q2_2', aKey: 'faq.a2_2' },
      { qKey: 'faq.q2_3', aKey: 'faq.a2_3' },
      { qKey: 'faq.q2_4', aKey: 'faq.a2_4' },
    ],
  },
  {
    catKey: 'faq.cat3',
    questions: [
      { qKey: 'faq.q3_1', aKey: 'faq.a3_1' },
      { qKey: 'faq.q3_2', aKey: 'faq.a3_2' },
      { qKey: 'faq.q3_3', aKey: 'faq.a3_3' },
      { qKey: 'faq.q3_4', aKey: 'faq.a3_4' },
    ],
  },
]

export default function FAQ({ isDark }: FAQProps) {
  const { t } = useTranslation()
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
          <motion.div variants={staggerContainer} initial="hidden" animate="show">
            <motion.div variants={fadeUp} style={{
              fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600,
              color: '#C9A84C', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '16px',
            }}>
              {t('faq.overline')}
            </motion.div>
            <motion.h1 variants={fadeUp} style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700,
              color: '#ffffff', lineHeight: 1.15, marginBottom: '16px', maxWidth: '600px',
            }}>
              {t('faq.title')}
            </motion.h1>
            <motion.p variants={fadeUp} style={{
              fontFamily: 'Inter, sans-serif', fontSize: '16px',
              color: 'rgba(255,255,255,0.7)', maxWidth: '500px', lineHeight: 1.7,
            }}>
              {t('faq.subtitle')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ content */}
      <section style={{ padding: '72px 24px' }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}
        >
          {FAQ_KEYS.map(({ catKey, questions }) => (
            <motion.div key={catKey} variants={fadeUp}>
              <div style={{
                fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600,
                color: '#C9A84C', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '16px',
              }}>
                {t(catKey)}
              </div>
              <div style={{
                background: cardBg, border: `1px solid ${cardBorder}`,
                borderRadius: '8px', overflow: 'hidden', transition: 'background 0.2s',
              }}>
                {questions.map(({ qKey, aKey }, i) => {
                  const key = `${catKey}-${i}`
                  const isOpen = openItems[key]
                  return (
                    <div key={key} style={{
                      borderBottom: i < questions.length - 1 ? `1px solid ${dividerColor}` : 'none',
                    }}>
                      <button
                        onClick={() => toggle(key)}
                        aria-expanded={isOpen}
                        style={{
                          width: '100%', display: 'flex', alignItems: 'center',
                          justifyContent: 'space-between', gap: '16px', padding: '20px 24px',
                          background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left',
                        }}
                      >
                        <span style={{
                          fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 500,
                          color: headingColor, lineHeight: 1.5, transition: 'color 0.2s',
                        }}>
                          {t(qKey)}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          style={{ flexShrink: 0 }}
                        >
                          <ChevronDown size={18} color="#C9A84C" strokeWidth={1.5} />
                        </motion.div>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div style={{ padding: '0 24px 20px', borderTop: `1px solid ${dividerColor}` }}>
                              <p style={{
                                fontFamily: 'Inter, sans-serif', fontSize: '14px', color: bodyColor,
                                lineHeight: 1.8, margin: '16px 0 0', transition: 'color 0.2s',
                              }}>
                                {t(aKey)}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <AnimatedSection>
        <section style={{ background: heroBg, padding: '64px 24px', textAlign: 'center', transition: 'background 0.2s' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 600,
              color: '#ffffff', marginBottom: '14px',
            }}>
              {t('faq.cta_title')}
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '16px',
              color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '28px',
            }}>
              {t('faq.cta_desc')}
            </p>
            <NavLink to="/consultation" style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 500,
              background: '#C0392B', color: '#ffffff', padding: '13px 32px',
              borderRadius: '4px', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
            }}>
              {t('faq.cta_btn')}
              <ArrowRight size={16} strokeWidth={2} />
            </NavLink>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}
