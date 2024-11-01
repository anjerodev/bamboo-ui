import { defineConfig } from "@pandacss/dev"

import prose from "./panda-presets/prose"

export default defineConfig({
	cssVarRoot: ":where(:root, :host)",
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: [
		"./src/**/*.{ts,tsx,js,jsx,astro}",
		"./pages/**/*.{ts,tsx,js,jsx,astro}",
	],

	conditions: {
		extend: {
			pending: "&:is([data-pending])",
			error: "&:is([data-invalid])",
			errorWithin: "&:has([data-invalid])",
			peerError: ".peer:is([data-invalid]) ~ &",
		},
	},

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			tokens: {
				easings: {
					easeIn: { value: "cubic-bezier(0.4, 0, 0.2, 1)" },
				},
			},
			semanticTokens: {
				colors: {
					background: { value: "var(--background)" },
					foreground: { value: "var(--foreground)" },
					primary: {
						DEFAULT: { value: "var(--primary)" },
						foreground: { value: "var(--primary-foreground)" },
					},
					secondary: {
						DEFAULT: { value: "var(--secondary)" },
						foreground: { value: "var(--secondary-foreground)" },
					},
					muted: {
						DEFAULT: { value: "var(--muted)" },
						foreground: { value: "var(--muted-foreground)" },
					},
					input: {
						DEFAULT: { value: "var(--input)" },
					},
					card: {
						DEFAULT: { value: "var(--card)" },
						foreground: { value: "var(--card-foreground)" },
					},
					border: {
						value: "var(--border)",
					},
					accent: {
						DEFAULT: { value: "var(--accent)" },
						foreground: { value: "var(--accent-foreground)" },
					},
					error: {
						DEFAULT: { value: "var(--error)" },
						foreground: { value: "var(--error-foreground)" },
					},
					warning: {
						DEFAULT: { value: "var(--warning)" },
						foreground: { value: "var(--warning-foreground)" },
					},
					success: {
						DEFAULT: { value: "var(--success)" },
						foreground: { value: "var(--success-foreground)" },
					},
					info: {
						DEFAULT: { value: "var(--info)" },
						foreground: { value: "var(--info-foreground)" },
					},
				},
			},
		},
	},

	patterns: {
		extend: {
			prose,
		},
	},

	// The output directory for your css system
	outdir: "styled-system",
})
