import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Theme from '@themes/default'
import { GlobalStyle } from '@themes/globals'

import { PokemonProvider } from '@contexts/pokemonProvider'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={Theme}>
			<PokemonProvider>
				<GlobalStyle />
				<Component {...pageProps} />
			</PokemonProvider>
		</ThemeProvider>
	)
}
export default MyApp
