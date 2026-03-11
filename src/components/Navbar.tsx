import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { motion, useScroll, useSpring } from 'framer-motion'

const Navbar = ({ activeSection }: { activeSection: string }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

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
    { id: 'certifications', label: 'Certifications' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? `${classes.bg} backdrop-blur-md border-b ${classes.border} shadow-lg` : 'bg-transparent'
        }`}
    >
      {/* Scroll Progress Indicator */}
      <motion.div
        className={`h-[3px] ${theme === 'dark' ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400' : 'bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-500'} origin-left absolute bottom-0 left-0 right-0`}
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={() => scrollToSection('home')}
              className={`text-lg font-semibold ${classes.text} hover:${classes.accent} transition-colors`}
            >
              M. Sharjeel Saleem
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.3 }}
                whileHover={{ y: -2 }}
                className={`text-sm font-medium transition-all duration-300 relative ${activeSection === item.id
                    ? classes.accent
                    : `${classes.textSecondary} hover:${classes.text}`
                  }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'} rounded-full`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`p-2 rounded-lg ${classes.surface} border ${classes.border} hover:opacity-80 transition-opacity`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className={classes.text} />
              ) : (
                <Moon size={20} className={classes.text} />
              )}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-lg ${classes.surface} border ${classes.border}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className={classes.text} />
              ) : (
                <Moon size={20} className={classes.text} />
              )}
            </motion.button>
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className={`p-2 ${classes.text}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation with animation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden ${classes.surface} border-t ${classes.border}`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`block w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === item.id
                    ? `${classes.accent} ${classes.activeBg}`
                    : `${classes.textSecondary} hover:${classes.text} hover:${classes.hoverBg}`
                  }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
