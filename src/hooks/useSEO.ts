import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const BASE_URL = 'https://forwardslash-development.github.io/szewczyk-law'
const OG_IMAGE = `${BASE_URL}/og-image.png`

interface SEOProps {
  title: string
  description: string
  path?: string
  type?: string
}

export function useSEO({ title, description, path = '', type = 'website' }: SEOProps) {
  const { i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const url  = `${BASE_URL}${path}`

  const fullTitle = `${title} | Conrad Szewczyk & Associates`

  useEffect(() => {
    // Title
    document.title = fullTitle

    // Helper
    function setMeta(selector: string, attr: string, value: string) {
      let el = document.querySelector(selector) as HTMLMetaElement
      if (!el) {
        el = document.createElement('meta')
        const parts = selector.match(/\[([^=]+)="([^"]+)"\]/)
        if (parts) el.setAttribute(parts[1], parts[2])
        document.head.appendChild(el)
      }
      el.setAttribute(attr, value)
    }

    // Basic meta
    setMeta('meta[name="description"]',       'content', description)
    setMeta('meta[name="robots"]',            'content', 'index, follow')
    setMeta('meta[name="author"]',            'content', 'Conrad Szewczyk & Associates')
    setMeta('meta[name="geo.region"]',        'content', 'US-IL')
    setMeta('meta[name="geo.placename"]',     'content', 'Chicago, Illinois')
    setMeta('meta[name="geo.position"]',      'content', '41.8781;-87.6298')
    setMeta('meta[name="ICBM"]',              'content', '41.8781, -87.6298')

    // Open Graph
    setMeta('meta[property="og:title"]',       'content', fullTitle)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]',         'content', url)
    setMeta('meta[property="og:type"]',        'content', type)
    setMeta('meta[property="og:image"]',       'content', OG_IMAGE)
    setMeta('meta[property="og:image:width"]', 'content', '1200')
    setMeta('meta[property="og:image:height"]','content', '630')
    setMeta('meta[property="og:image:alt"]',   'content', 'Conrad Szewczyk & Associates — Personal Injury Law')
    setMeta('meta[property="og:site_name"]',   'content', 'Conrad Szewczyk & Associates')
    setMeta('meta[property="og:locale"]',      'content', lang === 'ar' ? 'ar_SA' : lang === 'pl' ? 'pl_PL' : lang === 'fr' ? 'fr_FR' : lang === 'es' ? 'es_US' : 'en_US')

    // Twitter Card
    setMeta('meta[name="twitter:card"]',        'content', 'summary_large_image')
    setMeta('meta[name="twitter:title"]',       'content', fullTitle)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('meta[name="twitter:image"]',       'content', OG_IMAGE)
    setMeta('meta[name="twitter:image:alt"]',   'content', 'Conrad Szewczyk & Associates — Personal Injury Law')

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    // Language
    document.documentElement.setAttribute('lang', lang)

  }, [fullTitle, description, url, type, lang])
}
