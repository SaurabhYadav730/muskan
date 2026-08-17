/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08080a",
        surface: {
          50: "#18181b",
          100: "#121215",
          200: "#0c0c0e",
        },
        editorial: {
          dark: "#0a0a0c",
          card: "#141418",
          border: "rgba(255, 255, 255, 0.08)",
          accent: "#d4af37", // refined warm gold/champagne
          accentWarm: "#e8995e", // warm amber
          accentMuted: "rgba(212, 175, 55, 0.15)",
          textMuted: "#8e8e93",
          offwhite: "#f5f5f7",
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Italiana"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        signature: ['"Reenie Beanie"', '"Caveat"', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'polaroid': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0,0,0,0.4)',
        'polaroid-hover': '0 30px 60px -12px rgba(0, 0, 0, 0.9), 0 0 35px rgba(212, 175, 55, 0.15)',
        'glow-warm': '0 0 50px -10px rgba(232, 153, 94, 0.35)',
        'glow-gold': '0 0 50px -10px rgba(212, 175, 55, 0.3)',
        'dock': '0 20px 40px -10px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.08)',
      },
      rotate: {
        'pos-1': '1.2deg',
        'pos-2': '2deg',
        'neg-1': '-1.2deg',
        'neg-2': '-2deg',
        'pos-3': '3deg',
        'neg-3': '-3deg',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
