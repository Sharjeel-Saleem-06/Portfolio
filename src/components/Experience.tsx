import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { experience } from '../data/portfolio'
import { useTheme } from '../contexts/ThemeContext'
import { memo } from 'react'

// Memoized Tech Badge component
const TechBadge = memo(({ tech, theme, borderClass, textClass, hoverBorderClass }: any) => (
  <span
    className={`px-3 py-1.5 ${theme === 'dark' ? 'bg-dark-surface' : 'bg-white/80'} border ${borderClass} rounded-lg text-sm ${textClass} font-medium ${hoverBorderClass} transition-all duration-150 ${
      theme === 'light' ? 'hover:bg-blue-50/90 hover:border-blue-300/70 hover:scale-105' : ''
    }`}
  >
    {tech}
  </span>
))

TechBadge.displayName = 'TechBadge'

// Memoized Experience Card component
const ExperienceCard = memo(({ exp, index, theme, surfaceClass, borderClass, textClass, textSecondaryClass, accentClass, hoverBorderClass, cardBgClass }: any) => (
  <motion.div
    initial={{ opacity: 0, x: -15 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay: Math.min(index * 0.1, 0.3), duration: 0.4 }}
    className={`${surfaceClass} border-2 ${borderClass} rounded-xl p-6 ${hoverBorderClass} transition-all duration-200 shadow-xl ${
      theme === 'light' ? 'hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-0.5' : ''
    }`}
  >
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
      {/* Title and Company */}
      <div className="flex items-start gap-3">
        <div className={`p-2 ${cardBgClass} rounded-lg`}>
          <Briefcase size={20} className={accentClass} />
        </div>
        <div>
          <h3 className={`text-xl font-semibold ${textClass} mb-1 font-bold`}>
            {exp.position}
          </h3>
          <a
            href={exp.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${textSecondaryClass} hover:${accentClass} transition-colors`}
          >
            {exp.company}
          </a>
        </div>
      </div>

      {/* Date and Location */}
      <div className="flex flex-wrap gap-4 text-sm text-secondary">
        <div className={`flex items-center gap-2 ${textSecondaryClass}`}>
          <Calendar size={16} />
          <span>{exp.duration}</span>
        </div>
        <div className={`flex items-center gap-2 ${textSecondaryClass}`}>
          <MapPin size={16} />
          <span>{exp.location}</span>
        </div>
      </div>
    </div>

    {/* Description */}
    <p className={`${textSecondaryClass} mb-4 leading-relaxed`}>
      {exp.description}
    </p>

    {/* Technologies */}
    <div className="flex flex-wrap gap-2">
      {exp.technologies.map((tech: string) => (
        <TechBadge
          key={tech}
          tech={tech}
          theme={theme}
          borderClass={borderClass}
          textClass={textClass}
          hoverBorderClass={hoverBorderClass}
        />
      ))}
    </div>
  </motion.div>
))

ExperienceCard.displayName = 'ExperienceCard'

const Experience = () => {
  const { theme } = useTheme()

  const bgClass = theme === 'dark' ? 'bg-dark-bg/80' : 'bg-gradient-to-br from-gray-50/90 via-white/90 to-blue-50/30'
  const surfaceClass = theme === 'dark' 
    ? 'bg-dark-surface/90' 
    : 'bg-gradient-to-br from-white/95 via-white/90 to-blue-50/40 border-gray-200/80'
  const borderClass = theme === 'dark' ? 'border-dark-border' : 'border-gray-300/70'
  const textClass = theme === 'dark' ? 'text-dark-text' : 'text-gray-900'
  const textSecondaryClass = theme === 'dark' ? 'text-dark-text-secondary' : 'text-gray-700'
  const accentClass = theme === 'dark' ? 'text-dark-accent' : 'text-blue-600'
  const hoverBorderClass = theme === 'dark' ? 'hover:border-dark-accent/50' : 'hover:border-blue-400/70'
  const cardBgClass = theme === 'dark' ? 'bg-dark-bg' : 'bg-blue-50/60'

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${bgClass}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${textClass} mb-4 drop-shadow-sm`}>
            Professional Experience
          </h2>
          <p className={`text-lg ${textSecondaryClass} max-w-2xl mx-auto leading-relaxed`}>
            Over 1+ years of experience building scalable web applications and leading development teams in fast-paced environments.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              index={index}
              theme={theme}
              surfaceClass={surfaceClass}
              borderClass={borderClass}
              textClass={textClass}
              textSecondaryClass={textSecondaryClass}
              accentClass={accentClass}
              hoverBorderClass={hoverBorderClass}
              cardBgClass={cardBgClass}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
