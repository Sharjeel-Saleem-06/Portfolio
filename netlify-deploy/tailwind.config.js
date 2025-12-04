/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        dark: {
          bg: '#0A0A0A',
          surface: '#141414',
          border: '#1F1F1F',
          text: '#E5E5E5',
          'text-secondary': '#A3A3A3',
          accent: '#3B82F6',
        },
        // Light theme colors
        light: {
          bg: '#FFFFFF',
          surface: '#F9FAFB',
          border: '#E5E7EB',
          text: '#111827',
          'text-secondary': '#6B7280',
          accent: '#3B82F6',
        }
      }
    },
  },
  plugins: [],
}

