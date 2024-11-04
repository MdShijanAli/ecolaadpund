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
   './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        primary: '#37D153',
        productBg: '#F5F5F5',
        secondary: '#ffed4a',
        background: '#F4F4F4',
        paragraph: '#454545',
        footer: '#26292E',
        bannerBg: '#3F99F1',
        product: '#666666',
        headingPara: '#595959',
        savingBG: '#11141C',
        homeInfoBG: '#F3F3F3',
        footerBg: '#DEEFE1',
        borderColor: '#737373'
        // Add more custom colors as needed
      },
      fontSize: {
        'breadCrumbHeader': '58px',
        'title': '36px',
        'quatation': '40px',
        'base24': '24px',
        'base': '16px',
        'footerTitle': '20px',
        'paragraph': '14px'
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}