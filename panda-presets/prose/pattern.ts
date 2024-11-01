import { definePattern } from "@pandacss/dev"
import presets from "@pandacss/dev/presets"

export const pandaCssColors = Array.from(
	Object.keys(presets.theme.tokens.colors),
).filter((x) => !["current", "white", "black", "transparent"].includes(x))

const prose = definePattern({
	description: "Simple good looking articles",
	properties: {
		size: { type: "enum", value: ["base", "sm", "md", "lg", "xl", "2xl"] },
		theme: { type: "enum", value: ["light", "dark"] },
		pallete: { type: "enum", value: pandaCssColors },
	},
	transform(props) {
		const { size = "base", theme, pallete = "neutral", ...rest } = props

		const tones = {
			body: { light: 700, dark: 300 },
			headings: { light: 900, dark: 100 },
			lead: { light: 600, dark: 400 },
			links: { light: 900, dark: 100 },
			bold: { light: 900, dark: 100 },
			counters: { light: 500, dark: 500 },
			bullets: { light: 300, dark: 700 },
			"hr-border": { light: 200, dark: 800 },
			quotes: { light: 900, dark: 100 },
			"quote-borders": { light: 200, dark: 800 },
			captions: { light: 500, dark: 500 },
			kbd: { light: 900, dark: 100 },
			"kbd-shadows": { light: "0 0 0", dark: "0 0 0" }, // RGB value directly
			code: { light: 900, dark: 100 },
			"code-bg": { light: 50, dark: 800 },
			"code-borders": { light: 300, dark: 600 },
			"pre-code": { light: 200, dark: 800 },
			"pre-bg": { light: 200, dark: 700 },
			"th-borders": { light: 300, dark: 700 },
			"td-borders": { light: 200, dark: 800 },
		}

		const addOsColor = (colors: Record<string, keyof typeof tones>) => {
			return Object.entries(colors).reduce(
				(acc, [prop, toneKey]) => {
					acc._osDark[prop] = `{colors.${pallete}.${tones[toneKey].dark}}`
					acc._osLight[prop] = `{colors.${pallete}.${tones[toneKey].light}}`
					return acc
				},
				{ _osDark: {}, _osLight: {} } as {
					_osDark: Record<string, string>
					_osLight: Record<string, string>
				},
			)
		}

		const styles = {
			default: {
				p: {
					color: "var(--color-prose-body)",
					...addOsColor({ color: "body" }),
				},
				'[class~="lead"]': {
					color: "var(--color-prose-lead)",
					...addOsColor({ color: "lead" }),
				},
				a: {
					color: "var(--color-prose-links)",
					textDecoration: "underline",
					textUnderlineOffset: "0.25em",
					fontWeight: "500",
					opacity: 0.7,
					_hover: { opacity: 1 },
					...addOsColor({ color: "links" }),
				},
				strong: {
					color: "var(--color-prose-bold)",
					fontWeight: "600",
					...addOsColor({ color: "bold" }),
				},
				"a strong": { color: "inherit" },
				"blockquote strong": { color: "inherit" },
				"thead th strong": { color: "inherit" },
				ol: { listStyleType: "decimal" },
				'ol[type="A"]': { listStyleType: "upper-alpha" },
				'ol[type="a"]': { listStyleType: "lower-alpha" },
				'ol[type="A" s]': { listStyleType: "upper-alpha" },
				'ol[type="a" s]': { listStyleType: "lower-alpha" },
				'ol[type="I"]': { listStyleType: "upper-roman" },
				'ol[type="i"]': { listStyleType: "lower-roman" },
				'ol[type="I" s]': { listStyleType: "upper-roman" },
				'ol[type="i" s]': { listStyleType: "lower-roman" },
				'ol[type="1"]': { listStyleType: "decimal" },
				ul: { listStyleType: "disc" },
				"ol > li, ul > li": {
					color: "var(--color-prose-body)",
					...addOsColor({ color: "body" }),
				},
				"ol > li::marker": {
					fontWeight: "400",
					color: "var(--color-prose-counters)",
					...addOsColor({ color: "counters" }),
				},
				"ul > li::marker": {
					color: "var(--color-prose-bullets)",
					...addOsColor({ color: "bullets" }),
				},
				dt: {
					color: "var(--color-prose-headings)",
					fontWeight: "600",
					...addOsColor({ color: "headings" }),
				},
				hr: {
					borderColor: "var(--color-prose-hr-borders)",
					borderTopWidth: 1,
					...addOsColor({ borderColor: "hr-border" }),
				},
				blockquote: {
					fontWeight: "500",
					fontStyle: "italic",
					color: "var(--color-prose-quotes)",
					borderInlineStartWidth: "0.25rem",
					borderInlineStartColor: "var(--color-prose-quote-borders)",
					quotes: '"\\201C""\\201D""\\2018""\\2019"',
					...addOsColor({
						color: "quotes",
						borderInlineStartColor: "quote-borders",
					}),
				},
				"blockquote p:first-of-type::before": { content: "open-quote" },
				"blockquote p:last-of-type::after": { content: "close-quote" },
				h1: {
					color: "var(--color-prose-headings)",
					fontWeight: "800",
					...addOsColor({ color: "headings" }),
				},
				"h1 strong": { fontWeight: "900", color: "inherit" },
				h2: {
					color: "var(--color-prose-headings)",
					fontWeight: "700",
					...addOsColor({ color: "headings" }),
				},
				"h2 strong": { fontWeight: "800", color: "inherit" },
				h3: {
					color: "var(--color-prose-headings)",
					fontWeight: "600",
					...addOsColor({ color: "headings" }),
				},
				"h3 strong": { fontWeight: "700", color: "inherit" },
				h4: {
					color: "var(--color-prose-headings)",
					fontWeight: "600",
					...addOsColor({ color: "headings" }),
				},
				"h4 strong": { fontWeight: "700", color: "inherit" },
				img: {},
				picture: { display: "block" },
				video: {},
				kbd: {
					fontWeight: "500",
					fontFamily: "inherit",
					color: "var(--color-prose-kbd)",
					boxShadow:
						"0 0 0 1px rgb(var(--color-prose-kbd-shadows) / 10%), 0 3px 0 rgb(var(--color-prose-kbd-shadows) / 10%)",
					...addOsColor({ color: "kbd" }),
					_osDark: {
						boxShadow: `0 0 0 1px rgb(${tones["kbd-shadows"].dark}/ 10%), 0 3px 0 rgb(${tones["kbd-shadows"].dark} / 10%)`,
					},
					_osLight: {
						boxShadow: `0 0 0 1px rgb(${tones["kbd-shadows"].light}/ 10%), 0 3px 0 rgb(${tones["kbd-shadows"].light} / 10%)`,
					},
				},
				code: {
					color: "var(--color-prose-code)",
					fontWeight: "500",
					fontFamily: "mono",
					rounded: "sm",
					px: "3.6px",
					py: "2px",
					border: "1px solid",
					...addOsColor({
						color: "code",
						backgroundColor: "code-bg",
						borderColor: "code-borders",
					}),
				},
				// 'code::before': { content: '"`"' },
				// 'code::after': { content: '"`"' },
				"a code": { color: "inherit" },
				"h1 code": { color: "inherit" },
				"h2 code": { color: "inherit" },
				"h3 code": { color: "inherit" },
				"h4 code": { color: "inherit" },
				"blockquote code": { color: "inherit" },
				"thead th code": { color: "inherit" },
				pre: {
					color: "var(--color-prose-pre-code)",
					backgroundColor: "var(--color-prose-pre-bg)",
					overflowX: "auto",
					fontWeight: "400",
					...addOsColor({
						color: "pre-code",
						backgroundColor: "pre-bg",
					}),
				},
				"pre code": {
					backgroundColor: "transparent",
					borderWidth: "0",
					borderRadius: "0",
					padding: "0",
					fontWeight: "inherit",
					color: "inherit",
					fontSize: "inherit",
					fontFamily: "inherit",
					lineHeight: "inherit",
				},
				"pre code::before": { content: "none" },
				"pre code::after": { content: "none" },
				table: {
					width: "100%",
					tableLayout: "auto",
					marginTop: "2em",
					marginBottom: "2em",
				},
				thead: {
					borderBottomWidth: "1px",
					borderBottomColor: "var(--color-prose-th-borders)",
					...addOsColor({ borderBottomColor: "th-borders" }),
				},
				"thead th": {
					color: "var(--color-prose-headings)",
					fontWeight: "600",
					verticalAlign: "bottom",
					...addOsColor({ color: "headings" }),
				},
				"tbody tr": {
					borderBottomWidth: "1px",
					borderBottomColor: "var(--color-prose-td-borders)",
					...addOsColor({ borderBottomColor: "td-borders" }),
				},
				"tbody tr:last-child": { borderBottomWidth: "0" },
				"tbody td": { verticalAlign: "baseline" },
				tfoot: {
					borderTopWidth: "1px",
					borderTopColor: "var(--color-prose-th-borders)",
					...addOsColor({ borderTopColor: "th-borders" }),
				},
				"tfoot td": { verticalAlign: "top" },
				"th, td": { textAlign: "start" },
				"figure > *": {},
				figcaption: {
					color: "var(--color-prose-captions)",
					...addOsColor({ color: "captions" }),
				},
				"> :first-child": { marginTop: "0" },
				"> :last-child": { marginBottom: "0" },
			},
			sm: {
				p: { marginTop: "1.1428571em", marginBottom: "1.1428571em" },
				'[class~="lead"]': {
					fontSize: "1.2857143em",
					lineHeight: "1.5555556",
					marginTop: "0.8888889em",
					marginBottom: "0.8888889em",
				},
				blockquote: {
					marginTop: "1.3333333em",
					marginBottom: "1.3333333em",
					paddingInlineStart: "1.1111111em",
				},
				h1: {
					fontSize: "2.1428571em",
					marginTop: "0",
					marginBottom: "0.8em",
					lineHeight: "1.2",
				},
				h2: {
					fontSize: "1.4285714em",
					marginTop: "1.6em",
					marginBottom: "0.8em",
					lineHeight: "1.4",
				},
				h3: {
					fontSize: "1.2857143em",
					marginTop: "1.5555556em",
					marginBottom: "0.4444444em",
					lineHeight: "1.5555556",
				},
				h4: {
					marginTop: "1.4285714em",
					marginBottom: "0.5714286em",
					lineHeight: "1.4285714",
				},
				img: { marginTop: "1.7142857em", marginBottom: "1.7142857em" },
				picture: { marginTop: "1.7142857em", marginBottom: "1.7142857em" },
				"picture > img": { marginTop: "0", marginBottom: "0" },
				video: { marginTop: "1.7142857em", marginBottom: "1.7142857em" },
				kbd: {
					fontSize: "0.8571429em",
					borderRadius: "0.3125rem",
					paddingTop: "0.1428571em",
					paddingInlineEnd: "0.3571429em",
					paddingBottom: "0.1428571em",
					paddingInlineStart: "0.3571429em",
				},
				code: { fontSize: "0.8571429em" },
				"h2 code": { fontSize: "0.9em" },
				"h3 code": { fontSize: "0.8888889em" },
				pre: {
					fontSize: "0.8571429em",
					lineHeight: "1.6666667",
					marginTop: "1.6666667em",
					marginBottom: "1.6666667em",
					borderRadius: "0.25rem",
					paddingTop: "0.6666667em",
					paddingInlineEnd: "1em",
					paddingBottom: "0.6666667em",
					paddingInlineStart: "1em",
				},
				ol: {
					marginTop: "1.1428571em",
					marginBottom: "1.1428571em",
					paddingInlineStart: "1.5714286em",
				},
				ul: {
					marginTop: "1.1428571em",
					marginBottom: "1.1428571em",
					paddingInlineStart: "1.5714286em",
				},
				li: { marginTop: "0.2857143em", marginBottom: "0.2857143em" },
				"ol > li": { paddingInlineStart: "0.4285714em" },
				"ul > li": { paddingInlineStart: "0.4285714em" },
				"> ul > li p": {
					marginTop: "0.5714286em",
					marginBottom: "0.5714286em",
				},
				"> ul > li > p:first-child": { marginTop: "1.1428571em" },
				"> ul > li > p:last-child": { marginBottom: "1.1428571em" },
				"> ol > li > p:first-child": { marginTop: "1.1428571em" },
				"> ol > li > p:last-child": { marginBottom: "1.1428571em" },
				"ul ul, ul ol, ol ul, ol ol": {
					marginTop: "0.5714286em",
					marginBottom: "0.5714286em",
				},
				dl: { marginTop: "1.1428571em", marginBottom: "1.1428571em" },
				dt: { marginTop: "1.1428571em" },
				dd: { marginTop: "0.2857143em", paddingInlineStart: "1.5714286em" },
				hr: { marginTop: "2.8571429em", marginBottom: "2.8571429em" },
				"hr + *": { marginTop: "0" },
				"h2 + *": { marginTop: "0" },
				"h3 + *": { marginTop: "0" },
				"h4 + *": { marginTop: "0" },
				table: { fontSize: "0.8571429em", lineHeight: "1.5" },
				"thead th": {
					paddingInlineEnd: "1em",
					paddingBottom: "0.6666667em",
					paddingInlineStart: "1em",
				},
				"thead th:first-child": { paddingInlineStart: "0" },
				"thead th:last-child": { paddingInlineEnd: "0" },
				"tbody td, tfoot td": {
					paddingTop: "0.6666667em",
					paddingInlineEnd: "1em",
					paddingBottom: "0.6666667em",
					paddingInlineStart: "1em",
				},
				"tbody td:first-child, tfoot td:first-child": {
					paddingInlineStart: "0",
				},
				"tbody td:last-child, tfoot td:last-child": { paddingInlineEnd: "0" },
				figure: { marginTop: "1.7142857em", marginBottom: "1.7142857em" },
				"figure > *": { marginTop: "0", marginBottom: "0" },
				figcaption: {
					fontSize: "0.8571429em",
					lineHeight: "1.3333333",
					marginTop: "0.6666667em",
				},
			},
			base: {
				p: { marginTop: "1.25em", marginBottom: "1.25em" },
				'[class~="lead"]': {
					fontSize: "1.25em",
					lineHeight: "1.6",
					marginTop: "1.2em",
					marginBottom: "1.2em",
				},
				blockquote: {
					marginTop: "1.6em",
					marginBottom: "1.6em",
					paddingInlineStart: "1em",
				},
				h1: {
					fontSize: "2.25em",
					marginTop: "0",
					marginBottom: "0.8888889em",
					lineHeight: "1.1111111",
				},
				h2: {
					fontSize: "1.5em",
					marginTop: "2em",
					marginBottom: "1em",
					lineHeight: "1.3333333",
				},
				h3: {
					fontSize: "1.25em",
					marginTop: "1.6em",
					marginBottom: "0.6em",
					lineHeight: "1.6",
				},
				h4: { marginTop: "1.5em", marginBottom: "0.5em", lineHeight: "1.5" },
				img: { marginTop: "2em", marginBottom: "2em" },
				picture: { marginTop: "2em", marginBottom: "2em" },
				"picture > img": { marginTop: "0", marginBottom: "0" },
				video: { marginTop: "2em", marginBottom: "2em" },
				kbd: {
					fontSize: "0.875em",
					borderRadius: "0.3125rem",
					paddingTop: "0.1875em",
					paddingInlineEnd: "0.375em",
					paddingBottom: "0.1875em",
					paddingInlineStart: "0.375em",
				},
				code: { fontSize: "0.875em" },
				"h2 code": { fontSize: "0.875em" },
				"h3 code": { fontSize: "0.9em" },
				pre: {
					fontSize: "0.875em",
					lineHeight: "1.7142857",
					marginTop: "1.7142857em",
					marginBottom: "1.7142857em",
					borderRadius: "0.375rem",
					paddingTop: "0.8571429em",
					paddingInlineEnd: "1.1428571em",
					paddingBottom: "0.8571429em",
					paddingInlineStart: "1.1428571em",
				},
				ol: {
					marginTop: "1.25em",
					marginBottom: "1.25em",
					paddingInlineStart: "1.625em",
				},
				ul: {
					marginTop: "1.25em",
					marginBottom: "1.25em",
					paddingInlineStart: "1.625em",
				},
				li: { marginTop: "0.5em", marginBottom: "0.5em" },
				"ol > li": { paddingInlineStart: "0.375em" },
				"ul > li": { paddingInlineStart: "0.375em" },
				"> ul > li p": { marginTop: "0.75em", marginBottom: "0.75em" },
				"> ul > li > p:first-child": { marginTop: "1.25em" },
				"> ul > li > p:last-child": { marginBottom: "1.25em" },
				"> ol > li > p:first-child": { marginTop: "1.25em" },
				"> ol > li > p:last-child": { marginBottom: "1.25em" },
				"ul ul, ul ol, ol ul, ol ol": {
					marginTop: "0.75em",
					marginBottom: "0.75em",
				},
				dl: { marginTop: "1.25em", marginBottom: "1.25em" },
				dt: { marginTop: "1.25em" },
				dd: { marginTop: "0.5em", paddingInlineStart: "1.625em" },
				hr: { marginTop: "3em", marginBottom: "3em" },
				"hr + *": { marginTop: "0" },
				"h2 + *": { marginTop: "0" },
				"h3 + *": { marginTop: "0" },
				"h4 + *": { marginTop: "0" },
				table: { fontSize: "0.875em", lineHeight: "1.7142857" },
				"thead th": {
					paddingInlineEnd: "0.5714286em",
					paddingBottom: "0.5714286em",
					paddingInlineStart: "0.5714286em",
				},
				"thead th:first-child": { paddingInlineStart: "0" },
				"thead th:last-child": { paddingInlineEnd: "0" },
				"tbody td, tfoot td": {
					paddingTop: "0.5714286em",
					paddingInlineEnd: "0.5714286em",
					paddingBottom: "0.5714286em",
					paddingInlineStart: "0.5714286em",
				},
				"tbody td:first-child, tfoot td:first-child": {
					paddingInlineStart: "0",
				},
				"tbody td:last-child, tfoot td:last-child": { paddingInlineEnd: "0" },
				figure: { marginTop: "2em", marginBottom: "2em" },
				"figure > *": { marginTop: "0", marginBottom: "0" },
				figcaption: {
					fontSize: "0.875em",
					lineHeight: "1.4285714",
					marginTop: "0.8571429em",
				},
			},
			lg: {
				p: { marginTop: "1.3333333em", marginBottom: "1.3333333em" },
				'[class~="lead"]': {
					fontSize: "1.2222222em",
					lineHeight: "1.4545455",
					marginTop: "1.0909091em",
					marginBottom: "1.0909091em",
				},
				blockquote: {
					marginTop: "1.6666667em",
					marginBottom: "1.6666667em",
					paddingInlineStart: "1em",
				},
				h1: {
					fontSize: "2.6666667em",
					marginTop: "0",
					marginBottom: "0.8333333em",
					lineHeight: "1",
				},
				h2: {
					fontSize: "1.6666667em",
					marginTop: "1.8666667em",
					marginBottom: "1.0666667em",
					lineHeight: "1.3333333",
				},
				h3: {
					fontSize: "1.3333333em",
					marginTop: "1.6666667em",
					marginBottom: "0.6666667em",
					lineHeight: "1.5",
				},
				h4: {
					marginTop: "1.7777778em",
					marginBottom: "0.4444444em",
					lineHeight: "1.5555556",
				},
				img: { marginTop: "1.7777778em", marginBottom: "1.7777778em" },
				picture: { marginTop: "1.7777778em", marginBottom: "1.7777778em" },
				"picture > img": { marginTop: "0", marginBottom: "0" },
				video: { marginTop: "1.7777778em", marginBottom: "1.7777778em" },
				kbd: {
					fontSize: "0.8888889em",
					borderRadius: "0.3125rem",
					paddingTop: "0.2222222em",
					paddingInlineEnd: "0.4444444em",
					paddingBottom: "0.2222222em",
					paddingInlineStart: "0.4444444em",
				},
				code: { fontSize: "0.8888889em" },
				"h2 code": { fontSize: "0.8666667em" },
				"h3 code": { fontSize: "0.875em" },
				pre: {
					fontSize: "0.8888889em",
					lineHeight: "1.75",
					marginTop: "2em",
					marginBottom: "2em",
					borderRadius: "0.375rem",
					paddingTop: "1em",
					paddingInlineEnd: "1.5em",
					paddingBottom: "1em",
					paddingInlineStart: "1.5em",
				},
				ol: {
					marginTop: "1.3333333em",
					marginBottom: "1.3333333em",
					paddingInlineStart: "1.5555556em",
				},
				ul: {
					marginTop: "1.3333333em",
					marginBottom: "1.3333333em",
					paddingInlineStart: "1.5555556em",
				},
				li: { marginTop: "0.6666667em", marginBottom: "0.6666667em" },
				"ol > li": { paddingInlineStart: "0.4444444em" },
				"ul > li": { paddingInlineStart: "0.4444444em" },
				"> ul > li p": {
					marginTop: "0.8888889em",
					marginBottom: "0.8888889em",
				},
				"> ul > li > p:first-child": { marginTop: "1.3333333em" },
				"> ul > li > p:last-child": { marginBottom: "1.3333333em" },
				"> ol > li > p:first-child": { marginTop: "1.3333333em" },
				"> ol > li > p:last-child": { marginBottom: "1.3333333em" },
				"ul ul, ul ol, ol ul, ol ol": {
					marginTop: "0.8888889em",
					marginBottom: "0.8888889em",
				},
				dl: { marginTop: "1.3333333em", marginBottom: "1.3333333em" },
				dt: { marginTop: "1.3333333em" },
				dd: { marginTop: "0.6666667em", paddingInlineStart: "1.5555556em" },
				hr: { marginTop: "3.1111111em", marginBottom: "3.1111111em" },
				"hr + *": { marginTop: "0" },
				"h2 + *": { marginTop: "0" },
				"h3 + *": { marginTop: "0" },
				"h4 + *": { marginTop: "0" },
				table: { fontSize: "0.8888889em", lineHeight: "1.5" },
				"thead th": {
					paddingInlineEnd: "0.75em",
					paddingBottom: "0.75em",
					paddingInlineStart: "0.75em",
				},
				"thead th:first-child": { paddingInlineStart: "0" },
				"thead th:last-child": { paddingInlineEnd: "0" },
				"tbody td, tfoot td": {
					paddingTop: "0.75em",
					paddingInlineEnd: "0.75em",
					paddingBottom: "0.75em",
					paddingInlineStart: "0.75em",
				},
				"tbody td:first-child, tfoot td:first-child": {
					paddingInlineStart: "0",
				},
				"tbody td:last-child, tfoot td:last-child": { paddingInlineEnd: "0" },
				figure: { marginTop: "1.7777778em", marginBottom: "1.7777778em" },
				"figure > *": { marginTop: "0", marginBottom: "0" },
				figcaption: {
					fontSize: "0.8888889em",
					lineHeight: "1.5",
					marginTop: "1em",
				},
			},
			xl: {
				p: { marginTop: "1.2em", marginBottom: "1.2em" },
				'[class~="lead"]': {
					fontSize: "1.2em",
					lineHeight: "1.5",
					marginTop: "1em",
					marginBottom: "1em",
				},
				blockquote: {
					marginTop: "1.6em",
					marginBottom: "1.6em",
					paddingInlineStart: "1.0666667em",
				},
				h1: {
					fontSize: "2.8em",
					marginTop: "0",
					marginBottom: "0.8571429em",
					lineHeight: "1",
				},
				h2: {
					fontSize: "1.8em",
					marginTop: "1.5555556em",
					marginBottom: "0.8888889em",
					lineHeight: "1.1111111",
				},
				h3: {
					fontSize: "1.5em",
					marginTop: "1.6em",
					marginBottom: "0.6666667em",
					lineHeight: "1.3333333",
				},
				h4: { marginTop: "1.8em", marginBottom: "0.6em", lineHeight: "1.6" },
				img: { marginTop: "2em", marginBottom: "2em" },
				picture: { marginTop: "2em", marginBottom: "2em" },
				"picture > img": { marginTop: "0", marginBottom: "0" },
				video: { marginTop: "2em", marginBottom: "2em" },
				kbd: {
					fontSize: "0.9em",
					borderRadius: "0.3125rem",
					paddingTop: "0.25em",
					paddingInlineEnd: "0.4em",
					paddingBottom: "0.25em",
					paddingInlineStart: "0.4em",
				},
				code: { fontSize: "0.9em" },
				"h2 code": { fontSize: "0.8611111em" },
				"h3 code": { fontSize: "0.9em" },
				pre: {
					fontSize: "0.9em",
					lineHeight: "1.7777778",
					marginTop: "2em",
					marginBottom: "2em",
					borderRadius: "0.5rem",
					paddingTop: "1.1111111em",
					paddingInlineEnd: "1.3333333em",
					paddingBottom: "1.1111111em",
					paddingInlineStart: "1.3333333em",
				},
				ol: {
					marginTop: "1.2em",
					marginBottom: "1.2em",
					paddingInlineStart: "1.6em",
				},
				ul: {
					marginTop: "1.2em",
					marginBottom: "1.2em",
					paddingInlineStart: "1.6em",
				},
				li: { marginTop: "0.6em", marginBottom: "0.6em" },
				"ol > li": { paddingInlineStart: "0.4em" },
				"ul > li": { paddingInlineStart: "0.4em" },
				"> ul > li p": { marginTop: "0.8em", marginBottom: "0.8em" },
				"> ul > li > p:first-child": { marginTop: "1.2em" },
				"> ul > li > p:last-child": { marginBottom: "1.2em" },
				"> ol > li > p:first-child": { marginTop: "1.2em" },
				"> ol > li > p:last-child": { marginBottom: "1.2em" },
				"ul ul, ul ol, ol ul, ol ol": {
					marginTop: "0.8em",
					marginBottom: "0.8em",
				},
				dl: { marginTop: "1.2em", marginBottom: "1.2em" },
				dt: { marginTop: "1.2em" },
				dd: { marginTop: "0.6em", paddingInlineStart: "1.6em" },
				hr: { marginTop: "2.8em", marginBottom: "2.8em" },
				"hr + *": { marginTop: "0" },
				"h2 + *": { marginTop: "0" },
				"h3 + *": { marginTop: "0" },
				"h4 + *": { marginTop: "0" },
				table: { fontSize: "0.9em", lineHeight: "1.5555556" },
				"thead th": {
					paddingInlineEnd: "0.6666667em",
					paddingBottom: "0.8888889em",
					paddingInlineStart: "0.6666667em",
				},
				"thead th:first-child": { paddingInlineStart: "0" },
				"thead th:last-child": { paddingInlineEnd: "0" },
				"tbody td, tfoot td": {
					paddingTop: "0.8888889em",
					paddingInlineEnd: "0.6666667em",
					paddingBottom: "0.8888889em",
					paddingInlineStart: "0.6666667em",
				},
				"tbody td:first-child, tfoot td:first-child": {
					paddingInlineStart: "0",
				},
				"tbody td:last-child, tfoot td:last-child": { paddingInlineEnd: "0" },
				figure: { marginTop: "2em", marginBottom: "2em" },
				"figure > *": { marginTop: "0", marginBottom: "0" },
				figcaption: {
					fontSize: "0.9em",
					lineHeight: "1.5555556",
					marginTop: "1em",
				},
			},
			"2xl": {
				p: { marginTop: "1.3333333em", marginBottom: "1.3333333em" },
				'[class~="lead"]': {
					fontSize: "1.25em",
					lineHeight: "1.4666667",
					marginTop: "1.0666667em",
					marginBottom: "1.0666667em",
				},
				blockquote: {
					marginTop: "1.7777778em",
					marginBottom: "1.7777778em",
					paddingInlineStart: "1.1111111em",
				},
				h1: {
					fontSize: "2.6666667em",
					marginTop: "0",
					marginBottom: "0.875em",
					lineHeight: "1",
				},
				h2: {
					fontSize: "2em",
					marginTop: "1.5em",
					marginBottom: "0.8333333em",
					lineHeight: "1.0833333",
				},
				h3: {
					fontSize: "1.5em",
					marginTop: "1.5555556em",
					marginBottom: "0.6666667em",
					lineHeight: "1.2222222",
				},
				h4: {
					marginTop: "1.6666667em",
					marginBottom: "0.6666667em",
					lineHeight: "1.5",
				},
				img: { marginTop: "2em", marginBottom: "2em" },
				picture: { marginTop: "2em", marginBottom: "2em" },
				"picture > img": { marginTop: "0", marginBottom: "0" },
				video: { marginTop: "2em", marginBottom: "2em" },
				kbd: {
					fontSize: "0.8333333em",
					borderRadius: "0.375rem",
					paddingTop: "0.25em",
					paddingInlineEnd: "0.3333333em",
					paddingBottom: "0.25em",
					paddingInlineStart: "0.3333333em",
				},
				code: { fontSize: "0.8333333em" },
				"h2 code": { fontSize: "0.875em" },
				"h3 code": { fontSize: "0.8888889em" },
				pre: {
					fontSize: "0.8333333em",
					lineHeight: "1.8",
					marginTop: "2em",
					marginBottom: "2em",
					borderRadius: "0.5rem",
					paddingTop: "1.2em",
					paddingInlineEnd: "1.6em",
					paddingBottom: "1.2em",
					paddingInlineStart: "1.6em",
				},
				ol: {
					marginTop: "1.3333333em",
					marginBottom: "1.3333333em",
					paddingInlineStart: "1.5833333em",
				},
				ul: {
					marginTop: "1.3333333em",
					marginBottom: "1.3333333em",
					paddingInlineStart: "1.5833333em",
				},
				li: { marginTop: "0.5em", marginBottom: "0.5em" },
				"ol > li": { paddingInlineStart: "0.4166667em" },
				"ul > li": { paddingInlineStart: "0.4166667em" },
				"> ul > li p": {
					marginTop: "0.8333333em",
					marginBottom: "0.8333333em",
				},
				"> ul > li > p:first-child": { marginTop: "1.3333333em" },
				"> ul > li > p:last-child": { marginBottom: "1.3333333em" },
				"> ol > li > p:first-child": { marginTop: "1.3333333em" },
				"> ol > li > p:last-child": { marginBottom: "1.3333333em" },
				"ul ul, ul ol, ol ul, ol ol": {
					marginTop: "0.6666667em",
					marginBottom: "0.6666667em",
				},
				dl: { marginTop: "1.3333333em", marginBottom: "1.3333333em" },
				dt: { marginTop: "1.3333333em" },
				dd: { marginTop: "0.5em", paddingInlineStart: "1.5833333em" },
				hr: { marginTop: "3em", marginBottom: "3em" },
				"hr + *": { marginTop: "0" },
				"h2 + *": { marginTop: "0" },
				"h3 + *": { marginTop: "0" },
				"h4 + *": { marginTop: "0" },
				table: { fontSize: "0.8333333em", lineHeight: "1.4" },
				"thead th": {
					paddingInlineEnd: "0.6em",
					paddingBottom: "0.8em",
					paddingInlineStart: "0.6em",
				},
				"thead th:first-child": { paddingInlineStart: "0" },
				"thead th:last-child": { paddingInlineEnd: "0" },
				"tbody td, tfoot td": {
					paddingTop: "0.8em",
					paddingInlineEnd: "0.6em",
					paddingBottom: "0.8em",
					paddingInlineStart: "0.6em",
				},
				"tbody td:first-child, tfoot td:first-child": {
					paddingInlineStart: "0",
				},
				"tbody td:last-child, tfoot td:last-child": { paddingInlineEnd: "0" },
				figure: { marginTop: "2em", marginBottom: "2em" },
				"figure > *": { marginTop: "0", marginBottom: "0" },
				figcaption: {
					fontSize: "0.8333333em",
					lineHeight: "1.6",
					marginTop: "1em",
				},
			},
		}

		const css = Object.assign({})

		for (const [key, value] of Object.entries(styles)) {
			if (key === "default") continue

			css[key] = {}

			// Add base styles
			for (const [selector, style] of Object.entries(styles.default)) {
				css[key][`& ${selector}`] = { ...style }
			}

			for (const [selector, style] of Object.entries(value)) {
				const selectorKey = `& ${selector}`
				css[key][selectorKey] = { ...css[key][selectorKey], ...style }
			}
		}

		const vars = Object.keys(tones).map((key) => {
			const tone = tones[key]
			if (!theme) return []

			const color = tone[key]
			if (typeof color === "string") {
				return [`--color-prose-${key}`, `rgb(${color})`]
			}
			return [`--color-prose-${key}`, `{colors.${pallete}.${color}}`]
		})

		const combinedStyle = (() => {
			const sizeStyle = css[size]
			const mergedStyle = Object.assign({}, sizeStyle)

			for (const [key, value] of Object.entries(rest)) {
				mergedStyle[key] = { ...mergedStyle[key], ...value }
			}

			return mergedStyle
		})()

		return {
			...combinedStyle,
			...Object.fromEntries(vars),
		}
	},
})

export default prose
