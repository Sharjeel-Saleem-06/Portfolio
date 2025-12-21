import { useTheme } from '../contexts/ThemeContext'
import { memo } from 'react'

const OptimizedBackground = memo(() => {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Simple static gradient - no animation */}
      <div 
        className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
            : 'bg-gradient-to-br from-slate-50 via-white to-blue-50'
        }`}
      />
    </div>
  )
})

OptimizedBackground.displayName = 'OptimizedBackground'

export default OptimizedBackground

