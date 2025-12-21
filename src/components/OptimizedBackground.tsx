import { useTheme } from '../contexts/ThemeContext'
import { memo } from 'react'

const OptimizedBackground = memo(() => {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Static gradient base */}
      <div 
        className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
            : 'bg-gradient-to-br from-slate-50 via-white to-blue-50'
        }`}
      />
      
      {/* Animated subtle gradient orbs - CSS only, no JS! */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className={`absolute top-0 -left-40 w-80 h-80 rounded-full blur-3xl animate-blob ${
            theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-300/30'
          }`}
          style={{ animationDelay: '0s' }}
        />
        <div 
          className={`absolute top-0 -right-40 w-96 h-96 rounded-full blur-3xl animate-blob ${
            theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-300/30'
          }`}
          style={{ animationDelay: '2s' }}
        />
        <div 
          className={`absolute -bottom-40 left-1/3 w-96 h-96 rounded-full blur-3xl animate-blob ${
            theme === 'dark' ? 'bg-cyan-500/20' : 'bg-cyan-300/30'
          }`}
          style={{ animationDelay: '4s' }}
        />
      </div>
    </div>
  )
})

OptimizedBackground.displayName = 'OptimizedBackground'

export default OptimizedBackground

