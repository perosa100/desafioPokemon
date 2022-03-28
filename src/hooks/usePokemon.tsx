/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import * as React from 'react'

import axios from 'axios'

export interface PokemonType {
	id: string
	url: string
	name: string
	types: Type[]
	selected?: boolean
}

export interface Type {
	type: { name: string }
}

export interface TeamType {
	id: string
	name: string
	team: [PokemonType]
}

export interface GetUrlPokemons {
	results: {
		name: string
		url: string
	}[]
}

export const usePokemon = () => {
	const [pokemons, setPokemons] = React.useState<PokemonType[]>([])

	const [loading, setLoading] = React.useState(false)

	async function getPokemon(url: string) {
		await axios.get(url).then(async response => {
			const data: PokemonType = {
				id: response.data.id,
				url: response.data.sprites.front_default,
				name: response.data.name,
				types: response.data.types,
				selected: false
			}
			return setPokemons(prev => [...prev, data])
		})
	}

	async function getUrlPokemons() {
		setLoading(true)
		await axios
			.get<GetUrlPokemons>('https://pokeapi.co/api/v2/pokemon-form/')
			.then(async response => {
				const resultUrl = response.data

				await Promise.all(
					resultUrl.results.map(async (item): Promise<any> => {
						await getPokemon(item.url)
					})
				)
				setLoading(false)
			})
	}

	React.useEffect(() => {
		getUrlPokemons()
	}, [])

	return { pokemons, loading, setPokemons }
}
