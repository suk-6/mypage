export default defineNuxtConfig({
	extends: "content-wind",
	app: {
		head: {
			htmlAttrs: {
				lang: "ko",
			},
		},
	},
	modules: ["@nuxtjs/sitemap", "@nuxtjs/robots"],
	robots: {
		UserAgent: "*",
		Disallow: "/",
	},
});
