import { Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import JsonLD from './components/seo/JsonLD'
import ScrollToTop from './components/ui/ScrollToTop'
import useDarkMode from './hooks/useDarkMode'
import { useSEO } from './hooks/useSEO'
import { SITE_URL } from './config'

// Lazy load all pages
const Home         = lazy(() => import('./pages/Home'))
const About        = lazy(() => import('./pages/About'))
const Contact      = lazy(() => import('./pages/Contact'))
const Services     = lazy(() => import('./pages/Services'))
const FAQ          = lazy(() => import('./pages/FAQ'))
const Consultation = lazy(() => import('./pages/Consultation'))
const Intake       = lazy(() => import('./pages/Intake'))
const Privacy      = lazy(() => import('./pages/Privacy'))
const Terms        = lazy(() => import('./pages/Terms'))

const BASE = SITE_URL

const LEGAL_SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Conrad Szewczyk & Associates',
  description: 'Personal injury law firm serving Chicago, Cook County, and Chicagoland.',
  url: BASE,
  telephone: '+13125550100',
  email: 'szewczyklaw@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chicago',
    addressRegion: 'IL',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.8781,
    longitude: -87.6298,
  },
  areaServed: [
    { '@type': 'City', name: 'Chicago', sameAs: 'https://www.wikidata.org/wiki/Q1297' },
    { '@type': 'AdministrativeArea', name: 'Cook County' },
    { '@type': 'AdministrativeArea', name: 'DuPage County' },
    { '@type': 'AdministrativeArea', name: 'Lake County' },
    { '@type': 'AdministrativeArea', name: 'Will County' },
    { '@type': 'State', name: 'Illinois' },
  ],
  knowsLanguage: ['en', 'es', 'pl', 'fr', 'ar'],
  priceRange: 'Free consultation. Contingency fee — no charge unless we win.',
  openingHours: ['Mo-Fr 09:00-18:00'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Personal Injury Legal Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Car & Truck Accident' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Medical Malpractice' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Workplace Injuries' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Slip & Fall' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wrongful Death' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Product Liability' } },
    ],
  },
}

const ATTORNEY_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Attorney',
  name: 'Conrad Szewczyk',
  jobTitle: 'Personal Injury Attorney',
  worksFor: { '@type': 'LegalService', name: 'Conrad Szewczyk & Associates' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chicago',
    addressRegion: 'IL',
    addressCountry: 'US',
  },
  telephone: '+13125550100',
  email: 'szewczyklaw@gmail.com',
  url: `${BASE}/about`,
  knowsLanguage: ['en', 'es', 'pl', 'fr', 'ar'],
  alumniOf: '[Law School — to be filled]',
  memberOf: [
    { '@type': 'Organization', name: 'Illinois State Bar Association' },
    { '@type': 'Organization', name: 'Chicago Bar Association' },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does it cost to hire a personal injury attorney?', acceptedAnswer: { '@type': 'Answer', text: 'Nothing upfront. We work on a contingency fee basis — you pay nothing unless we win your case.' } },
    { '@type': 'Question', name: 'How long do I have to file a personal injury claim in Illinois?', acceptedAnswer: { '@type': 'Answer', text: 'In Illinois, the statute of limitations for most personal injury cases is two years from the date of the injury.' } },
    { '@type': 'Question', name: 'What types of compensation can I recover?', acceptedAnswer: { '@type': 'Answer', text: 'You may be entitled to compensation for medical expenses, lost wages, pain and suffering, emotional distress, property damage, and loss of enjoyment of life.' } },
    { '@type': 'Question', name: 'Will my case go to trial?', acceptedAnswer: { '@type': 'Answer', text: 'Most personal injury cases settle before trial. However, we prepare every case as if it will go to trial.' } },
    { '@type': 'Question', name: 'Who will be handling my case?', acceptedAnswer: { '@type': 'Answer', text: 'Conrad Szewczyk personally handles every case at this firm. You will not be passed off to a paralegal or junior associate.' } },
  ],
}

const SEO_MAP: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Personal Injury Lawyer Chicago',
    description: 'Conrad Szewczyk & Associates — Chicago personal injury lawyer serving Cook County and Chicagoland. Car accidents, slip and fall, workplace injuries. Free consultation. No fee unless we win.',
  },
  '/services': {
    title: 'Personal Injury Practice Areas',
    description: 'We handle car accidents, medical malpractice, workplace injuries, slip and fall, wrongful death, and product liability cases across Chicago and Cook County.',
  },
  '/about': {
    title: 'About Conrad Szewczyk',
    description: 'Meet Conrad Szewczyk, personal injury attorney serving Chicago and Chicagoland. Dedicated to fighting for injured individuals and families across Illinois.',
  },
  '/contact': {
    title: 'Contact Us',
    description: 'Contact Conrad Szewczyk & Associates. Reach us by phone, email, or contact form. We respond within 24 hours. Free consultation available.',
  },
  '/faq': {
    title: 'Personal Injury Law FAQ',
    description: 'Answers to common questions about personal injury law in Illinois. Contingency fees, statute of limitations, what compensation you can recover, and more.',
  },
  '/consultation': {
    title: 'Free Consultation',
    description: 'Schedule a free, confidential consultation with Conrad Szewczyk. No obligation, no pressure. No fee unless we win your case.',
  },
  '/intake': {
    title: 'Start Your Case',
    description: 'Begin your personal injury case intake with Conrad Szewczyk & Associates. Secure, confidential, available in English, Spanish, Polish, French, and Arabic.',
  },
  '/privacy': {
    title: 'Privacy Policy',
    description: 'Privacy Policy for Conrad Szewczyk & Associates. Learn how we collect, use, and protect your information.',
  },
  '/terms': {
    title: 'Terms of Use',
    description: 'Terms of Use for Conrad Szewczyk & Associates website.',
  },
}

function SEOWrapper() {
  const location = useLocation()
  const seo = SEO_MAP[location.pathname] ?? SEO_MAP['/']
  useSEO({ title: seo.title, description: seo.description, path: location.pathname })
  return null
}

// Loading fallback
function PageLoader() {
  return (
    <div style={{
      minHeight: '60vh', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{
        width: '32px', height: '32px', borderRadius: '50%',
        border: '2px solid #E5E0D8',
        borderTopColor: '#C9A84C',
        animation: 'spin 0.7s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

export default function App() {
  const { isDark, toggle } = useDarkMode()

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <JsonLD data={LEGAL_SERVICE_SCHEMA} id="legal-service" />
      <SEOWrapper />
      <ScrollToTop />
      <Nav isDark={isDark} onToggleDark={toggle} />
      <main style={{ flex: 1 }}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"             element={<Home isDark={isDark} />}         />
            <Route path="/services"     element={<Services isDark={isDark} />}     />
            <Route path="/about"        element={<><JsonLD data={ATTORNEY_SCHEMA} id="attorney" /><About isDark={isDark} /></>} />
            <Route path="/contact"      element={<Contact isDark={isDark} />}      />
            <Route path="/intake"       element={<Intake isDark={isDark} />}       />
            <Route path="/privacy"      element={<Privacy isDark={isDark} />}      />
            <Route path="/terms"        element={<Terms isDark={isDark} />}        />
            <Route path="/faq"          element={<><JsonLD data={FAQ_SCHEMA} id="faq" /><FAQ isDark={isDark} /></>} />
            <Route path="/consultation" element={<Consultation isDark={isDark} />} />
          </Routes>
        </Suspense>
      </main>
      <Footer isDark={isDark} />
    </div>
  )
}
