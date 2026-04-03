import { Routes, Route } from 'react-router-dom'

// Pages (to be built out)
const Home        = () => <div>Home</div>
const Services    = () => <div>Services</div>
const About       = () => <div>About</div>
const Contact     = () => <div>Contact</div>
const Intake      = () => <div>Intake</div>
const FAQ         = () => <div>FAQ</div>
const Consultation = () => <div>Consultation</div>

export default function App() {
  return (
    <Routes>
      <Route path="/"            element={<Home />} />
      <Route path="/services"    element={<Services />} />
      <Route path="/about"       element={<About />} />
      <Route path="/contact"     element={<Contact />} />
      <Route path="/intake"      element={<Intake />} />
      <Route path="/faq"         element={<FAQ />} />
      <Route path="/consultation" element={<Consultation />} />
    </Routes>
  )
}
