// @ts-check
import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import { defineConfig } from "astro/config"
import { transformerNotationDiff } from "@shikijs/transformers"

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), react()],
	markdown: {
		shikiConfig: {
			themes: {
				light: "github-light",
				dark: "github-dark",
			},
			transformers: [
				transformerNotationDiff(),
				{
					pre(node) {
						if (this.options.meta?.__raw) {
							const metaString =
								this.options.meta.__raw.match(/meta=\{([^}]+)\}/)?.[1]
							if (metaString) {
								const metaParams = metaString
									.split(", ")
									.reduce((acc, pair) => {
										const [key, value] = pair
											.split(":")
											.map((str) => str.trim().replace(/['"]/g, ""))
										acc[key] = value
										return acc
									}, {})
								for (const [key, value] of Object.entries(metaParams)) {
									node.properties[`data-${key}`] = value
								}
							}
						}
					},
				},
			],
		},
	},
})
