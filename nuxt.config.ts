// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@hypernym/nuxt-gsap'],

  gsap: {
    /* Module Options */
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
      scrub: true,
    },
    extraEases: {
      expoScaleEase: true
    }
  }
})
