import { Routes, Route } from 'react-router-dom'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import PageWrapper from './components/layout/PageWrapper'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import useDarkMode from './hooks/useDarkMode'

const Services     = () => <PageWrapper><main style={{ padding: '2rem 0' }}>Services</main></PageWrapper>
const Intake       = () => <PageWrapper><main style={{ padding: '2rem 0' }}>Intake</main></PageWrapper>
const FAQ          = () => <PageWrapper><main style={{ padding: '2rem 0' }}>FAQ</main></PageWrapper>
const Consultation = () => <PageWrapper><main style={{ padding: '2rem 0' }}>Consultation</main></PageWrapper>

export default function App() {
  const { isDark, toggle } = useDarkMode()

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav isDark={isDark} onToggleDark={toggle} />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/"             element={<Home isDark={isDark} />}    />
          <Route path="/services"     element={<Services />}                />
          <Route path="/about"        element={<About isDark={isDark} />}   />
          <Route path="/contact"      element={<Contact isDark={isDark} />} />
          <Route path="/intake"       element={<Intake />}                  />
          <Route path="/faq"          element={<FAQ />}                     />
          <Route path="/consultation" element={<Consultation />}            />
        </Routes>
      </div>
      <Footer isDark={isDark} />
    </div>
  )
}
