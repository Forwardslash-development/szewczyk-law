import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Globe, ChevronDown } from 'lucide-react'

const LANGUAGES = [
  { code: 'en', label: 'English',  native: 'English'  },
  { code: 'es', label: 'Spanish',  native: 'Español'  },
  { code: 'pl', label: 'Polish',   native: 'Polski'   },
  { code: 'fr', label: 'French',   native: 'Français' },
  { code: 'ar', label: 'Arabic',   native: 'العربية'  },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = LANGUAGES.find(l => l.code === i18n.language)
    ?? LANGUAGES[0]

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function switchLanguage(code: string) {
    i18n.changeLanguage(code)
    // Set RTL for Arabic
    document.documentElement.setAttribute('dir', code === 'ar' ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', code)
    setOpen(false)
  }

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-label="Select language"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          padding: '5px 10px',
          background: 'transparent',
          border: '1px solid rgba(255,255,255,0.25)',
          borderRadius: '3px',
          color: 'rgba(255,255,255,0.75)',
          fontSize: '12px',
          fontFamily: 'Inter, sans-serif',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
        }}
      >
        <Globe size={13} strokeWidth={1.5} />
        {current.code.toUpperCase()}
        <ChevronDown size={11} strokeWidth={1.5} />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Language options"
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            background: '#ffffff',
            border: '1px solid #E5E0D8',
            borderRadius: '6px',
            boxShadow: '0 8px 24px rgba(27,46,75,0.12)',
            minWidth: '150px',
            zIndex: 100,
            overflow: 'hidden',
          }}
        >
          {LANGUAGES.map(lang => (
            <button
              key={lang.code}
              role="option"
              aria-selected={lang.code === current.code}
              onClick={() => switchLanguage(lang.code)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: '9px 14px',
                background: lang.code === current.code ? '#F8F5F0' : 'transparent',
                border: 'none',
                borderBottom: '1px solid #F0EBE3',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: '#2C2C2C',
                textAlign: 'left',
              }}
            >
              <span>{lang.native}</span>
              {lang.code === current.code && (
                <span style={{ color: '#C9A84C', fontSize: '11px', fontWeight: 600 }}>✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
