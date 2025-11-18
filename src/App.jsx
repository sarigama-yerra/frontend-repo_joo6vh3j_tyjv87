import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Subjects from './pages/Subjects'
import About from './pages/About'
import Locations from './pages/Locations'
import Pricing from './pages/Pricing'
import Testimonials from './pages/Testimonials'
import Book from './pages/Book'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/book" element={<Book />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />

      {/* LocalBusiness schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Kensington Tutors",
        "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kensington",
          "addressRegion": "London",
          "postalCode": "W8",
          "addressCountry": "GB"
        },
        "email": "hello@kensingtontutors.co.uk",
        "telephone": "+44 20 0000 0000",
        "url": typeof window !== 'undefined' ? window.location.origin : 'https://example.com',
        "areaServed": ["Kensington", "Chelsea", "Notting Hill", "Holland Park", "Paddington", "Westminster", "Greater London"],
        "priceRange": "£££",
        "sameAs": ["https://instagram.com/", "https://linkedin.com/", "https://facebook.com/"]
      }) }} />

      {/* EducationalOrganization schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Kensington Tutors",
        "description": "Private tutoring in Maths, English, Science, 11+, GCSE and A Level across Kensington & Chelsea.",
      }) }} />
    </div>
  )
}

export default App
