import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Navbar = ({ activeSection }: { activeSection: string }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const getThemeClasses = () => {
    if (theme === 'dark') {
      return {
        bg: 'bg-dark-surface/95',
        border: 'border-dark-border',
        text: 'text-dark-text',
        textSecondary: 'text-dark-text-secondary',
        accent: 'text-dark-accent',
        hoverBg: 'bg-dark-border/30',
        activeBg: 'bg-dark-border/50',
        surface: 'bg-dark-surface',
      }
    }
    return {
      bg: 'bg-light-surface/95',
      border: 'border-light-border',
      text: 'text-light-text',
      textSecondary: 'text-light-text-secondary',
      accent: 'text-light-accent',
      hoverBg: 'bg-light-border/30',
      activeBg: 'bg-light-border/50',
      surface: 'bg-light-surface',
    }
  }

  const classes = getThemeClasses()

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? `${classes.bg} backdrop-blur-md border-b ${classes.border}` : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-lg font-semibold ${classes.text} hover:${classes.accent} transition-colors`}
            >
              M. Sharjeel Saleem
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? classes.accent
                    : `${classes.textSecondary} hover:${classes.text}`
                }`}
              >
                {item.label}
              </button>
            ))}
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${classes.surface} border ${classes.border} hover:opacity-80 transition-opacity`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className={classes.text} />
              ) : (
                <Moon size={20} className={classes.text} />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${classes.surface} border ${classes.border}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className={classes.text} />
              ) : (
                <Moon size={20} className={classes.text} />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${classes.text}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className={`md:hidden ${classes.surface} border-t ${classes.border}`}>
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? `${classes.accent} ${classes.activeBg}`
                    : `${classes.textSecondary} hover:${classes.text} hover:${classes.hoverBg}`
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
