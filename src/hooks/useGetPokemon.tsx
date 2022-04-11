/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

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
	name: string
	team: [PokemonType]
}

export interface GetUrlPokemons {
	results: {
		name: string
		url: string
	}[]
}

export const useGetPokemon = () => {
	const getPokemon = async (): Promise<PokemonType[] | undefined> => {
		try {
			const value: PokemonType[] = []
			const data = await axios
				.get<GetUrlPokemons>('https://pokeapi.co/api/v2/pokemon-form/')
				.then(async response => {
					return response.data
				})

			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			for await (const _content of data.results.map(d => {
				axios.get(d.url).then(async response => {
					const data = {
						id: response.data.id,
						url: response.data.sprites.front_default,
						name: response.data.name,
						types: response.data.types,
						selected: false
					}

					return value.push(data)
				})
			}))
				return value
		} catch (error) {
			console.log(error)
		}
	}

	return { getPokemon }
}
