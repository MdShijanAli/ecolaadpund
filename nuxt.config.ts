// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-swiper'],
  css: ['@/assets/css/index.css', '@/assets/scss/main.scss'],
  plugins: ["~/plugins/preline.client.ts"],
  swiper: {
    // Swiper options
    //----------------------
    prefix: 'Swiper',
    styleLang: 'css',
    modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  googleFonts: {
    families: {
      Poppins: true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400], 
        ital: [100],  
      },
      Inter: [200, 300, 400, 500, 600, 700], 
      'Crimson Pro': {
        wght: [200, 300, 400, 500, 600, 700, 800, 900], 
        ital: [200, 400, 600], 
      }
    }
  }
})