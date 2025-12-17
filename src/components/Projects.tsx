import { motion } from 'framer-motion'
import { ExternalLink, Github, Image as ImageIcon } from 'lucide-react'
import { projects } from '../data/portfolio'
import { useTheme } from '../contexts/ThemeContext'
import { useState, memo } from 'react'

// Memoized ProjectImage component for better performance
const ProjectImage = memo(({ project, theme, surfaceClass }: { project: any, theme: string, surfaceClass: string }) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  // Check if image is an icon (small/square) that needs special styling
  const isIconImage = project.image.includes('face-recognition') || project.image.includes('chatbot')

  return (
    <>
      {imageLoading && (
        <div className={`absolute inset-0 ${surfaceClass} flex items-center justify-center`}>
          <div className="flex flex-col items-center gap-2">
            <div className={`w-6 h-6 border-2 border-t-transparent rounded-full animate-spin ${theme === 'dark' ? 'border-dark-accent' : 'border-blue-500'}`}></div>
            <span className={`text-xs ${theme === 'dark' ? 'text-dark-text-secondary' : 'text-gray-400'}`}>Loading...</span>
          </div>
        </div>
      )}
      {isIconImage ? (
        <div className={`w-full h-full flex items-center justify-center ${theme === 'dark' ? 'bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className={`w-28 h-28 object-contain transition-transform duration-300 drop-shadow-lg ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setImageLoading(false)}
            onError={() => {
              setImageLoading(false)
              setImageError(true)
            }}
          />
        </div>
      ) : (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover transition-transform duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setImageLoading(false)}
          onError={() => {
            setImageLoading(false)
            setImageError(true)
          }}
        />
      )}
      {imageError && !imageLoading && (
        <div className={`absolute inset-0 ${surfaceClass} flex items-center justify-center`}>
          <div className="text-center p-4">
            <ImageIcon size={48} className={`mx-auto mb-2 ${theme === 'dark' ? 'text-dark-text-secondary' : 'text-gray-400'}`} />
            <p className={`text-sm ${theme === 'dark' ? 'text-dark-text-secondary' : 'text-gray-400'}`}>Preview unavailable</p>
          </div>
        </div>
      )}
    </>
  )
})

ProjectImage.displayName = 'ProjectImage'

// Memoized ProjectCard for better performance
const ProjectCard = memo(({ project, index, theme, cardBgClass, borderClass, textClass, textSecondaryClass, accentClass, hoverBorderClass, surfaceClass, gradientClass }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay: Math.min(index * 0.05, 0.3), duration: 0.4 }}
    className={`${cardBgClass} border-2 ${borderClass} rounded-xl overflow-hidden ${hoverBorderClass} transition-all duration-200 group shadow-xl ${
      theme === 'light' ? 'hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1' : ''
    }`}
  >
    {/* Project Image */}
    <div className={`relative h-48 overflow-hidden ${surfaceClass}`}>
      <ProjectImage 
        project={project} 
        theme={theme} 
        surfaceClass={surfaceClass}
      />
      <div className={`absolute inset-0 ${gradientClass} to-transparent pointer-events-none`}></div>
      {/* Live Badge */}
      {project.liveUrl && (
        <div className={`absolute top-3 right-3 px-2.5 py-1 ${theme === 'dark' ? 'bg-green-600/90' : 'bg-green-500/90'} backdrop-blur-sm rounded-full flex items-center gap-1.5 z-30 pointer-events-none`}>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="text-xs font-semibold text-white">LIVE</span>
        </div>
      )}
    </div>

    {/* Project Content */}
    <div className="p-6">
      <div className="flex items-start justify-between mb-2">
        <h3 className={`text-xl font-bold ${textClass} group-hover:${accentClass} transition-colors`}>
          {project.title}
        </h3>
      </div>
      <p className={`${textSecondaryClass} text-sm mb-4 line-clamp-2`}>
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 3).map((tech: string) => (
          <span
            key={tech}
            className={`px-2 py-1 ${theme === 'dark' ? 'bg-dark-surface' : 'bg-white/70 backdrop-blur-sm'} border ${borderClass} rounded text-xs ${textSecondaryClass} font-medium`}
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className={`px-2 py-1 text-xs ${textSecondaryClass}`}>
            +{project.technologies.length - 3} more
          </span>
        )}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-dark-accent text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-700'} transition-colors shadow-md hover:shadow-lg`}
          >
            <ExternalLink size={16} />
            View Live Site
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-sm ${textSecondaryClass} hover:${accentClass} transition-colors px-4 py-2 rounded-lg ${theme === 'dark' ? 'hover:bg-dark-border/30' : 'hover:bg-gray-100'}`}
          >
            <Github size={16} />
            Code
          </a>
        )}
      </div>
    </div>
  </motion.div>
))

ProjectCard.displayName = 'ProjectCard'

const Projects = () => {
  const { theme } = useTheme()

  const bgClass = theme === 'dark' ? 'bg-dark-surface/80' : 'bg-gradient-to-br from-gray-50/90 via-white/90 to-blue-50/30'
  const cardBgClass = theme === 'dark' 
    ? 'bg-dark-bg/90' 
    : 'bg-gradient-to-br from-white/95 via-white/90 to-blue-50/40'
  const borderClass = theme === 'dark' ? 'border-dark-border' : 'border-gray-300/70'
  const textClass = theme === 'dark' ? 'text-dark-text' : 'text-gray-900'
  const textSecondaryClass = theme === 'dark' ? 'text-dark-text-secondary' : 'text-gray-700'
  const accentClass = theme === 'dark' ? 'text-dark-accent' : 'text-blue-600'
  const hoverBorderClass = theme === 'dark' ? 'hover:border-dark-accent/50' : 'hover:border-blue-400/70'
  const surfaceClass = theme === 'dark' ? 'bg-dark-surface' : 'bg-gray-50/80'
  const gradientClass = theme === 'dark' ? 'bg-gradient-to-t from-dark-bg/80' : 'bg-gradient-to-t from-white/80'

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${bgClass}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${textClass} mb-4 drop-shadow-sm`}>
            Featured Projects
          </h2>
          <p className={`text-lg ${textSecondaryClass} max-w-2xl mx-auto leading-relaxed`}>
            A collection of projects showcasing my expertise in full-stack development, AI integration, and modern web technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              theme={theme}
              cardBgClass={cardBgClass}
              borderClass={borderClass}
              textClass={textClass}
              textSecondaryClass={textSecondaryClass}
              accentClass={accentClass}
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

export default Projects
