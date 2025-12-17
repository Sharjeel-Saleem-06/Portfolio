import { useState, useEffect, lazy, Suspense, memo } from 'react'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Lazy load components below the fold for faster initial load
const Skills = lazy(() => import('./components/Skills'))
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))
const FluidCursor = lazy(() => import('./components/FluidCursor'))

// Lightweight loading fallback
const SectionLoader = memo(() => {
  const { theme } = useTheme()
  return (
    <div className={`min-h-[400px] flex items-center justify-center ${theme === 'dark' ? 'bg-dark-surface/50' : 'bg-gray-50/50'}`}>
      <div className="flex flex-col items-center gap-3">
        <div className={`w-8 h-8 border-2 border-t-transparent rounded-full animate-spin ${theme === 'dark' ? 'border-dark-accent' : 'border-blue-500'}`}></div>
        <span className={`text-sm ${theme === 'dark' ? 'text-dark-text-secondary' : 'text-gray-500'}`}>Loading...</span>
      </div>
    </div>
  )
})

SectionLoader.displayName = 'SectionLoader'

function AppContent() {
  const [activeSection, setActiveSection] = useState('home')
  const [showFluidCursor, setShowFluidCursor] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    // Delay fluid cursor loading to prioritize content
    const timer = setTimeout(() => {
      // Only show fluid cursor on desktop devices for better mobile performance
      if (window.innerWidth > 768) {
        setShowFluidCursor(true)
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = ['home', 'skills', 'experience', 'projects', 'contact']
          const scrollPosition = window.scrollY + 100

          for (const section of sections) {
            const element = document.getElementById(section)
            if (element) {
              const { offsetTop, offsetHeight } = element
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section)
                break
              }
            }
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`min-h-screen relative ${theme === 'dark' ? 'bg-dark-bg' : 'bg-light-bg'}`}>
      {/* Lazy load fluid cursor only on desktop after initial render */}
      {showFluidCursor && (
        <Suspense fallback={null}>
          <FluidCursor />
        </Suspense>
      )}
      <div className="min-h-screen relative z-0">
        <Navbar activeSection={activeSection} />
        <main className="relative z-10">
          <section id="home">
            <Hero />
          </section>
          <Suspense fallback={<SectionLoader />}>
            <section id="skills">
              <Skills />
            </section>
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <section id="experience">
              <Experience />
            </section>
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <section id="projects">
              <Projects />
            </section>
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <section id="contact">
              <Contact />
            </section>
          </Suspense>
        </main>
      </div>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
