import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
import { skillsData } from '../data/portfolio'
import { useTheme } from '../contexts/ThemeContext'

const Skills = () => {
  const { theme } = useTheme()

  const skillCategories: { title: string; skills: string[] }[] = [
    { title: 'Programming Languages', skills: skillsData['Programming Languages'] },
    { title: 'JavaScript Libraries & Frameworks', skills: skillsData['JavaScript Libraries & Frameworks'] },
    { title: 'Web Frameworks', skills: skillsData['Web Frameworks'] },
    { title: 'Backend as a Service', skills: skillsData['Backend as a Service'] },
    { title: 'AI/ML', skills: skillsData['AI/ML'] },
    { title: 'Prompt Engineering & AI Tools', skills: skillsData['Prompt Engineering & AI Tools'] },
    { title: 'Frontend', skills: skillsData['Frontend'] },
    { title: 'Mobile', skills: skillsData['Mobile'] },
    { title: 'Database', skills: skillsData['Database'] },
  ]

  const bgClass = theme === 'dark' ? 'bg-dark-surface/80 backdrop-blur-sm' : 'bg-gradient-to-br from-gray-50/90 via-white/90 to-blue-50/30 backdrop-blur-sm'
  const cardBgClass = theme === 'dark' 
    ? 'bg-dark-bg/90 backdrop-blur-md' 
    : 'bg-gradient-to-br from-white/95 via-white/90 to-blue-50/40 backdrop-blur-md'
  const borderClass = theme === 'dark' ? 'border-dark-border' : 'border-gray-200/60'
  const textClass = theme === 'dark' ? 'text-dark-text' : 'text-gray-900'
  const textSecondaryClass = theme === 'dark' ? 'text-dark-text-secondary' : 'text-gray-600'
  const accentClass = theme === 'dark' ? 'text-dark-accent' : 'text-blue-600'
  const hoverBorderClass = theme === 'dark' ? 'hover:border-dark-accent/50' : 'hover:border-blue-400/60'
  const badgeBgClass = theme === 'dark' ? 'bg-dark-surface' : 'bg-white/70 backdrop-blur-sm'
  const cardHoverClass = theme === 'dark' 
    ? 'hover:shadow-xl hover:shadow-dark-accent/10' 
    : 'hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1'

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${bgClass}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${textClass} mb-4 drop-shadow-sm`}>
            Technical Skills
          </h2>
          <p className={`text-lg ${textSecondaryClass} max-w-2xl mx-auto leading-relaxed`}>
            Comprehensive expertise across modern development stack with focus on scalable web applications, AI/ML integration, prompt engineering tools, and fast backend APIs.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`${cardBgClass} border ${borderClass} rounded-xl p-6 ${hoverBorderClass} transition-all duration-300 shadow-md ${cardHoverClass}`}
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 ${theme === 'dark' ? 'bg-dark-surface' : 'bg-blue-50/80'} rounded-lg backdrop-blur-sm border ${borderClass}/50`}>
                  <Code2 size={20} className={accentClass} />
                </div>
                <h3 className={`text-lg font-semibold ${textClass} tracking-tight`}>
                  {category.title}
                </h3>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 ${badgeBgClass} border ${borderClass} rounded-lg text-sm ${textClass} font-medium ${hoverBorderClass} transition-all duration-200 hover:scale-105 ${
                      theme === 'light' ? 'hover:bg-blue-50/90 hover:border-blue-300/60' : ''
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
