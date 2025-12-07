import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setStatusMessage('')

    try {
      // EmailJS configuration - These are public keys safe for frontend use
      const serviceId = 'service_zukq4lf'
      const templateId = 'template_24gtxc6'
      const publicKey = 'Mq2IhyUUB3uKd1WsS'

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: personalInfo.email,
          reply_to: formData.email,
        },
        publicKey
      )

      // Success
      setSubmitStatus('success')
      setStatusMessage('Message sent successfully! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', message: '' })

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
        setStatusMessage('')
      }, 5000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
      setStatusMessage(
        error instanceof Error 
          ? error.message 
          : 'Failed to send message. Please try again or contact me directly via email.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const bgClass = theme === 'dark' ? 'bg-dark-bg/80 backdrop-blur-sm' : 'bg-gradient-to-br from-gray-50/90 via-white/90 to-blue-50/30 backdrop-blur-sm'
  const surfaceClass = theme === 'dark' 
    ? 'bg-dark-surface' 
    : 'bg-gradient-to-br from-white/95 via-white/90 to-blue-50/40 backdrop-blur-md'
  const borderClass = theme === 'dark' ? 'border-dark-border' : 'border-gray-300/70'
  const textClass = theme === 'dark' ? 'text-dark-text' : 'text-gray-900'
  const textSecondaryClass = theme === 'dark' ? 'text-dark-text-secondary' : 'text-gray-700'
  const accentClass = theme === 'dark' ? 'text-dark-accent' : 'text-blue-600'
  const inputBgClass = theme === 'dark' ? 'bg-dark-bg' : 'bg-white/90'
  const hoverBorderClass = theme === 'dark' ? 'hover:border-dark-accent' : 'hover:border-blue-400/70'

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
            Get In Touch
          </h2>
          <p className={`text-lg ${textSecondaryClass} max-w-2xl mx-auto leading-relaxed`}>
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 flex flex-col items-center text-center md:items-start md:text-left"
          >
            <div>
              <h3 className={`text-2xl font-bold ${textClass} mb-4`}>
                Let's Connect
              </h3>
              <p className={textSecondaryClass}>
                {personalInfo.bio}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 w-full">
              <a
                href={`mailto:${personalInfo.email}`}
                className={`flex items-center gap-3 justify-center md:justify-start ${textSecondaryClass} hover:${accentClass} transition-colors`}
              >
                <Mail size={20} />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className={`flex items-center gap-3 justify-center md:justify-start ${textSecondaryClass} hover:${accentClass} transition-colors`}
              >
                <Phone size={20} />
                <span>{personalInfo.phone}</span>
              </a>
              <div className={`flex items-center gap-3 justify-center md:justify-start ${textSecondaryClass}`}>
                <MapPin size={20} />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4 justify-center md:justify-start">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 ${theme === 'dark' ? 'bg-dark-surface' : 'bg-white/80 backdrop-blur-sm'} border-2 ${borderClass} rounded-lg ${hoverBorderClass} transition-all duration-200 ${
                  theme === 'light' ? 'hover:bg-blue-50/90 hover:shadow-md' : ''
                }`}
              >
                <Github size={20} className={textClass} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 ${theme === 'dark' ? 'bg-dark-surface' : 'bg-white/80 backdrop-blur-sm'} border-2 ${borderClass} rounded-lg ${hoverBorderClass} transition-all duration-200 ${
                  theme === 'light' ? 'hover:bg-blue-50/90 hover:shadow-md' : ''
                }`}
              >
                <Linkedin size={20} className={textClass} />
              </a>
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 ${theme === 'dark' ? 'bg-dark-surface' : 'bg-white/80 backdrop-blur-sm'} border-2 ${borderClass} rounded-lg ${hoverBorderClass} transition-all duration-200 ${
                  theme === 'light' ? 'hover:bg-blue-50/90 hover:shadow-md' : ''
                }`}
              >
                <Twitter size={20} className={textClass} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className={`${surfaceClass} border-2 ${borderClass} rounded-xl p-6 space-y-4 shadow-xl`}
          >
            <div>
              <label htmlFor="name" className={`block text-sm font-medium ${textClass} mb-2`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className={`w-full px-4 py-3 ${inputBgClass}/90 backdrop-blur-sm border ${borderClass} rounded-lg ${textClass} placeholder-${textSecondaryClass} focus:outline-none focus:ring-2 focus:ring-dark-accent/50 focus:${borderClass} transition-colors`}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className={`block text-sm font-medium ${textClass} mb-2`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className={`w-full px-4 py-3 ${inputBgClass}/90 backdrop-blur-sm border ${borderClass} rounded-lg ${textClass} placeholder-${textSecondaryClass} focus:outline-none focus:ring-2 focus:ring-dark-accent/50 focus:${borderClass} transition-colors`}
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className={`block text-sm font-medium ${textClass} mb-2`}>
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className={`w-full px-4 py-3 ${inputBgClass}/90 backdrop-blur-sm border ${borderClass} rounded-lg ${textClass} placeholder-${textSecondaryClass} focus:outline-none focus:ring-2 focus:ring-dark-accent/50 focus:${borderClass} transition-colors resize-none`}
                placeholder="Your message..."
              />
            </div>
            {/* Status Message */}
            {submitStatus !== 'idle' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg flex items-center gap-3 ${
                  submitStatus === 'success'
                    ? theme === 'dark'
                      ? 'bg-green-900/30 border border-green-700/50 text-green-400'
                      : 'bg-green-50 border border-green-200 text-green-800'
                    : theme === 'dark'
                    ? 'bg-red-900/30 border border-red-700/50 text-red-400'
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}
              >
                {submitStatus === 'success' ? (
                  <CheckCircle size={20} className={theme === 'dark' ? 'text-green-400' : 'text-green-600'} />
                ) : (
                  <AlertCircle size={20} className={theme === 'dark' ? 'text-red-400' : 'text-red-600'} />
                )}
                <span className="text-sm font-medium">{statusMessage}</span>
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 bg-dark-accent rounded-lg text-white hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
