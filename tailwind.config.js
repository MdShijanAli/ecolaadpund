/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue', 
    './views/**/*.{vue,js}',
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        primary: '#37D153',
        secondary: '#ffed4a',
        background: '#F4F4F4',
        paragraph: '#454545',
        footer: '#26292E',
        bannerBg: '#3F99F1',
        product: '#666666',
        headingPara: '#595959',
        savingBG: '#11141C',
        homeInfoBG: '#F3F3F3',
        footerBottom: '#36393F',
        aboutSection: '#F2F2F2'
        // Add more custom colors as needed
      },
      fontSize: {
        'breadCrumbHeader': '58px',
      },
    },
  },
  plugins: [],
}