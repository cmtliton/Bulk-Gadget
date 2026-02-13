// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["vuetify-nuxt-module", "@nuxt/eslint"],
  runtimeConfig: {
    smtpHost: "",
    smtpPort: "",
    smtpUser: "",
    smtpPassword: "",
  },
  app: {
    head: {
      script: [
        {
          // এখানে 'children' এর বদলে 'innerHTML' ব্যবহার করা হয়েছে
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KLGWMHGV');`,
          type: "text/javascript",
        },
      ],
      noscript: [
        {
          // noscript এর ক্ষেত্রেও innerHTML ব্যবহার করা ভালো
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KLGWMHGV"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          tagPosition: "bodyOpen",
        },
      ],
    },
  },

  routeRules: {
    "/": { ssr: false, prerender: true },
  },
});
