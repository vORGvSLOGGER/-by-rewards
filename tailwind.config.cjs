module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B1220',
          600: '#111827',
          700: '#050B16'
        },
        'accent-indigo': '#4F46E5',
        'accent-green': '#00A676',
        'accent-purple': '#4B0082'
      },
      fontFamily: {
        sans: ['Tajawal', 'Arial', 'sans-serif']
      },
      boxShadow: {
        glow: '0 20px 60px rgba(79, 70, 229, 0.35)'
      }
    }
  },
  plugins: []
};
