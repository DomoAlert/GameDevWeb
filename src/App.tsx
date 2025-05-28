import './App.css'
// Import our components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Screenshots from './components/Screenshots'
import Download from './components/Download'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <Download />
      </main>
      <Footer />
    </div>
  )
}

export default App
