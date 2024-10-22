/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      colors:{
        'yellow': '#F2C300',
        'orange': 'rgb(225, 66, 26)',
        'lightblue': 'rgb(81, 222, 232)',
        'blue-btn': '#4E43FA',
        'dark-blue':'#1004B8',
        'user-color': '#8D8D8D',
        'nav-text':'#101828',
        'menu-circle': '#EC5134',
        'nav-color': '#2E2F32',
        'grey': '#808080',
        'low-contrast-bg': '#f5f5f5',
        'low-contrast-text': '#a3a3a3',
        'high-contrast-bg': '#ffffff',
        'high-contrast-text': '#000000',
        'dark':'RGBA(17, 24, 43, var(--bs-bg-opacity, 1))',
        'linear-gradient1': "#7973FF", 
        'linear-gradient2': "#D7DAFF",
        'blur-bg': 'rgba(124, 123, 123, 0.9)',
        'popup_bg':'rgba(0,0,0,0.6)',
      },
    },
    fontFamily:{
      Manrope:['Manrope', 'sans-serif'],
      Roboto:['Roboto', 'sans-serif'],
      Inter: ["Inter", 'sans-serif'],
      Poppins: ["Poppins", 'sans-serif'],
      Mulish: ["Mulish", 'sans-serif'],
      DMSans: ["DM+Sans", 'sans-serif'],
      Jolly: ['Jolly Lodger', 'cursive']
    },
  },
 rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // other rules
    ],
  plugins: [],
}

