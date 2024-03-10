// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    // The private keys which are only available server-side
    // will be overridden by the environment variables in .env
    // https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
    apiSecret: "123",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "/api",
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@vee-validate/nuxt",
      {
        // disable or enable auto imports
        autoImports: true,
        // Use different names for components
        componentNames: {
          Form: "VeeForm",
          Field: "VeeField",
          FieldArray: "VeeFieldArray",
          ErrorMessage: "VeeErrorMessage",
        },
      },
    ],
  ],
  build: {
    transpile: ["trpc-nuxt"],
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Nuxt Boilerplate",
      meta: [
        { name: "description", content: "Nuxt Boilerplate description " },
        { name: "author", content: "Romain Paris" },
      ],
    },
    //pageTransition: { name: 'page', mode: 'out-in' }
  },
  // Importing global styles
  css: ["~/assets/css/main.css"],
});
