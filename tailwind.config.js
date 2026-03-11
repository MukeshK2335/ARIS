/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0b132b',
        panel: 'rgba(255, 255, 255, 0.06)',
        neon: {
          cyan: '#00e5ff',
          blue: '#4dd0e1'
        },
        status: {
          online: '#22c55e',
          offline: '#ef4444'
        }
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 229, 255, 0.5)',
        glowStrong: '0 0 35px rgba(0, 229, 255, 0.9)'
      },
      backdropBlur: {
        xs: '2px'
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,229,255,0.4)', transform: 'translateY(0)' },
          '50%': { boxShadow: '0 0 30px rgba(0,229,255,0.8)', transform: 'translateY(-2px)' }
        },
        spin360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
        spin360: 'spin360 1.2s linear'
      }
    }
  },
  plugins: []
}
