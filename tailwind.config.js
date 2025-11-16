/** @type {import('tailwindcss').Config} */
export default {
  // important:true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        // used in nike shoes page
        'bg-1' : "#141212",
        'text-01' : '#01e5c8',
        'text-02' : "#d1e91f" ,
        // end
      },
      backgroundImage:{
        // used in nike shoes page
        'bg-2' :"linear-gradient(#ffffff82 -111%, #292927c2 80%)"
        // end

      },
      fontFamily: {
        'inter': ['Inter', 'system-ui'],
        'pop': ["poppins", "san-serif"]
      },
      screens: {
        'max700': {'max': '700px'}, // 👈 add this
        // keep the defaults too
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
      },
    },
  },
  plugins: [],
};
