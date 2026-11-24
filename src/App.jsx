import { MotionConfig } from 'motion/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="mx-auto max-w-6xl px-6">
          <Hero />
          <About />
          <Experience />
          <Technologies />
          <Projects />
          <Contact />
        </main>
        <footer className="mx-auto max-w-6xl border-t border-line px-6 py-8 text-sm text-muted">
          © {new Date().getFullYear()} Deepak
        </footer>
      </div>
    </MotionConfig>
  )
}

export default App