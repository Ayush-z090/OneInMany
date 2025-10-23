/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Preserve your existing CSS custom properties
      colors: {
        // WeatherHomePage colors
        'bg1': '#0f172a',
        'bg2': '#08203a',
        'accent': '#7dd3fc',
        'glass': 'rgba(255,255,255,0.06)',
        'glass-2': 'rgba(255,255,255,0.08)',
        'glass-3': 'rgba(255,255,255,0.12)',
        'text': '#e6eef8',
        
        // RestaurantPage colors
        'res-primary': '#155B46',
        'res-secondary': '#19675a',
        'res-accent': '#F27847',
        'res-accent-light': '#F8C36B',
        'res-bg-main': '#F7F4EF',
        'res-bg-light': '#ffe5cc',
        'res-text-dark': '#1C1C1C',
        'res-text-light': '#FFFFFF',
        'res-button-bg': '#e3612d',
        'res-button-text': '#FFFFFF',
        'res-border': '#E0E0E0',
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
  // Ensure Tailwind doesn't interfere with CSS modules
  corePlugins: {
    preflight: true, // Keep Tailwind's reset but allow CSS modules to override
  },
}
