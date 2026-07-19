/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        sun: '#FACC15',
      },
      fontFamily: {
        sans: ['"Orbitron"', 'Inter', 'Poppins', 'system-ui', 'sans-serif'],
        logo: ['"Liquid Crystal"', '"Orbitron"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(0, 0, 0, 0.34)',
        glow: '0 0 70px rgba(250, 204, 21, 0.42)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at top left, rgba(250,204,21,0.18), transparent 34%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08), transparent 28%), linear-gradient(135deg, #070707 0%, #111111 52%, #050505 100%)',
      },
    },
  },
  plugins: [],
};
