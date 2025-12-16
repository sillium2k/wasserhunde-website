import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import DogsPage from './pages/DogsPage'
import LittersPage from './pages/LittersPage'
import KnowledgePage from './pages/KnowledgePage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router basename="/wasserhunde-website">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ueber-uns" element={<AboutPage />} />
          <Route path="/unsere-hunde" element={<DogsPage />} />
          <Route path="/geplante-wuerfe" element={<LittersPage />} />
          <Route path="/wissenswertes" element={<KnowledgePage />} />
          <Route path="/kontakt" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
