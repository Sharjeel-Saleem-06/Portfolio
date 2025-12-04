import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { personalInfo, stats } from '../data/portfolio'
import { useTheme } from '../contexts/ThemeContext'

const Hero = () => {
  const { theme } = useTheme()

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = personalInfo.cvFile
    link.download = 'M.Sharjeel_Saleem.pdf'
    link.click()
  }

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const bgClass = 'bg-transparent'
  const surfaceClass = theme === 'dark' ? 'bg-dark-surface' : 'bg-light-surface'
  const borderClass = theme === 'dark' ? 'border-dark-border' : 'border-light-border'
  const textClass = theme === 'dark' ? 'text-dark-text' : 'text-light-text'
  const textSecondaryClass = theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
  const accentClass = theme === 'dark' ? 'text-dark-accent' : 'text-light-accent'
  const hoverBgClass = theme === 'dark' ? 'hover:bg-dark-border' : 'hover:bg-light-border'

  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden pt-16 ${bgClass}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`space-y-6 ${surfaceClass}/80 backdrop-blur-md rounded-2xl p-8 border ${borderClass}/50`}
          >
            {/* Available Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className={`inline-flex items-center gap-2 px-4 py-2 ${surfaceClass} border ${borderClass} rounded-lg backdrop-blur-sm`}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className={`text-sm ${textClass}`}>Available for Work</span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className={textClass}>Hello, I'm</span>
                <br />
                <span className={accentClass}>{personalInfo.name}</span>
              </h1>
              <p className={`text-xl ${textSecondaryClass}`}>
                {personalInfo.title} crafting digital experiences with{' '}
                <span className={`${textClass} font-semibold`}>2+ years</span> of expertise
              </p>
              <p className={`text-lg ${textSecondaryClass} max-w-2xl`}>
                {personalInfo.tagline}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className={`px-6 py-3 ${surfaceClass} border ${borderClass} rounded-lg ${textClass} ${hoverBgClass} transition-colors`}
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="px-6 py-3 bg-dark-accent rounded-lg text-white hover:bg-blue-600 transition-colors flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className={`text-3xl font-bold ${textClass}`}>{stat.value}</div>
                  <div className={`text-sm ${textSecondaryClass} mt-1`}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Image container with border */}
              <div className={`relative w-80 h-80 lg:w-96 lg:h-96 rounded-full border-2 ${borderClass} overflow-hidden ${surfaceClass}`}>
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Available badge on image */}
              <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 ${surfaceClass} border ${borderClass} rounded-full shadow-lg`}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className={`text-sm ${textClass}`}>Available for hire</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}

export default Hero
