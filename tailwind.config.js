/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust as needed
  ],

  theme: {
    extend: {
      colors: {
        primary: "#2563EB",      // blue
        secondary: "#10B981",    // green
        accent: "#F59E0B",       // amber
        background: "#F3F4F6",   // light gray
        dark: "#111827",         // dark gray
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        xl: "0.75rem",
      },
      boxShadow: {
        soft: "0 1px 3px rgba(0,0,0,0.12)",
      },
      // Example custom animation (glow)
      animation: {
        glow: 'glow 1.5s infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px #2563EB' },
          '50%': { boxShadow: '0 0 20px #2563EB' },
        },
      },
    },
  },
  plugins: [],
}

