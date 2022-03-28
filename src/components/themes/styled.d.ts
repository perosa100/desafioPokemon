import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		color: {
			primary: string
			gray: string
			background: string
			white: string
		}
		fonts: {
			bold: string
			semibold: string
			medium: string
			regular: string
			light: string
			extraLight: string
		}
		sizes: {
			xxs: string
			xs: string
			sm: string
			md: string
			lg: string
			xlg: string
		}
		spacing: {
			xs: string
			sm: string
			md: string
			lg: string
			xlg: string
		}
		breakpoint: {
			mobile: string
			desktop: string
		}
		borderRadius: {
			xs: string
			md: string
			lg: string
		}
		pokeColor: [
			{
				bug: string
				dark: string
				dragon: string
				fairy: string
				fighting: string
				fire: string
				ghost: string
				grass: string
				ground: string
				normal: string
				poison: string
				psychic: string
				steel: string
				water: string
				eletric: string
				ice: string
				flying: string
				rock: string
			}
		]
	}
}
