module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F2937',
          600: '#2B3648',
          700: '#111827'
        },
        'accent-gold': '#D4AF37',
        'accent-green': '#00A676',
        'accent-purple': '#4B0082'
      },
      fontFamily: {
        sans: ['Tajawal', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};
