import { motion } from 'framer-motion'
import { Award, Calendar } from 'lucide-react'
import { certifications } from '../data/portfolio'
import { useTheme } from '../contexts/ThemeContext'
import { memo } from 'react'

const CertificationCard = memo(({ cert, index, theme, cardBgClass, borderClass, textClass, textSecondaryClass, hoverBorderClass, surfaceClass, gradientClass }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ delay: Math.min(index * 0.1, 0.5), duration: 0.5, type: 'spring' }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className={`${cardBgClass} border-2 ${borderClass} rounded-2xl overflow-hidden ${hoverBorderClass} transition-all duration-300 group shadow-xl hover:shadow-2xl ${
      theme === 'dark' ? 'hover:shadow-purple-500/20' : 'hover:shadow-purple-500/15'
    } flex flex-col md:flex-row h-full`}
  >
    {/* Certification Image */}
    <div className={`relative w-full md:w-2/5 md:min-h-[240px] overflow-hidden ${surfaceClass} flex-shrink-0 border-b-2 md:border-b-0 md:border-r-2 ${borderClass}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
        className="w-full h-full flex items-center justify-center p-6"
      >
        <img
          src={cert.image}
          alt={cert.title}
          loading="lazy"
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </motion.div>
      <div className={`absolute inset-0 ${gradientClass} to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-50`}></div>
    </div>

    {/* Certification Details */}
    <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Award className={`w-5 h-5 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
          <span className={`text-sm font-semibold tracking-wide uppercase ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>
            {cert.issuer}
          </span>
        </div>
        
        <h3 className={`text-2xl font-bold ${textClass} mb-2 group-hover:${theme === 'dark' ? 'text-purple-300' : 'text-purple-700'} transition-colors leading-tight`}>
          {cert.title}
        </h3>
        
        <div className="flex items-center gap-1.5 mb-4">
          <Calendar className={`w-4 h-4 ${textSecondaryClass}`} />
          <span className={`text-xs font-medium ${textSecondaryClass}`}>{cert.date}</span>
        </div>
        
        <p className={`${textSecondaryClass} text-sm mb-6 leading-relaxed`}>
          {cert.description}
        </p>
      </div>

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {cert.skills.map((skill: string) => (
          <span
            key={skill}
            className={`px-3 py-1.5 ${theme === 'dark' ? 'bg-dark-surface/80 text-dark-text-secondary' : 'bg-white/80 text-gray-700'} border ${borderClass} rounded-lg text-xs font-semibold shadow-sm`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
))

CertificationCard.displayName = 'CertificationCard'

const Certifications = () => {
  const { theme } = useTheme()

  const bgClass = theme === 'dark' ? 'bg-dark-bg/50' : 'bg-gradient-to-br from-purple-50/50 via-white to-blue-50/30'
  const cardBgClass = theme === 'dark'
    ? 'bg-dark-surface/40 backdrop-blur-md'
    : 'bg-white/90 backdrop-blur-md'
  const borderClass = theme === 'dark' ? 'border-dark-border/60' : 'border-gray-200/80'
  const textClass = theme === 'dark' ? 'text-dark-text' : 'text-gray-900'
  const textSecondaryClass = theme === 'dark' ? 'text-dark-text-secondary' : 'text-gray-700'
  const hoverBorderClass = theme === 'dark' ? 'hover:border-purple-500/50' : 'hover:border-purple-400/70'
  const surfaceClass = theme === 'dark' ? 'bg-dark-bg/80' : 'bg-slate-50/80'
  const gradientClass = theme === 'dark' ? 'bg-gradient-to-tr from-purple-900/20' : 'bg-gradient-to-tr from-purple-100/40'

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 relative ${bgClass}`}>
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${theme === 'dark' ? 'bg-purple-600' : 'bg-purple-300'}`}></div>
        <div className={`absolute bottom-20 -left-20 w-72 h-72 rounded-full blur-3xl opacity-20 ${theme === 'dark' ? 'bg-blue-600' : 'bg-indigo-300'}`}></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
            <Award className={`w-8 h-8 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${textClass} mb-4 drop-shadow-sm`}>
            Licenses & Certifications
          </h2>
          <p className={`text-lg ${textSecondaryClass} max-w-2xl mx-auto leading-relaxed`}>
            Continuous learning and official recognitions that validate my technical expertise and commitment to modern software engineering.
          </p>
        </motion.div>

        {/* Certifications Feed */}
        <div className="flex flex-col gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.id}
              cert={cert}
              index={index}
              theme={theme}
              cardBgClass={cardBgClass}
              borderClass={borderClass}
              textClass={textClass}
              textSecondaryClass={textSecondaryClass}
              hoverBorderClass={hoverBorderClass}
              surfaceClass={surfaceClass}
              gradientClass={gradientClass}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
