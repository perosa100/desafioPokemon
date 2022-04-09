import * as React from 'react'
import { useContext } from 'react'

import { PokemonType, useGetPokemon } from '@hooks/useGetPokemon'

import Theme from '@themes/default'

export interface Type {
	type: { name: string }
}

export interface TeamType {
	id: string
	name: typeof Theme.pokeColor
	team: [PokemonType]
}

interface PokemonContextData {
	pokemonTeam: TeamType[]
	setPokemonTeam: React.Dispatch<React.SetStateAction<TeamType[]>>
	pokemonSelected: PokemonType[]
	setPokemonSelected: React.Dispatch<React.SetStateAction<PokemonType[]>>
	addPokemonSelected: (pokemon: PokemonType) => void
	removePokemonSelected: (pokemon: PokemonType) => void
}

const PokemonContext = React.createContext<PokemonContextData>(
	{} as PokemonContextData
)

const dataDefault = {
	id: '',
	url: '',
	name: '',
	types: [{ type: { name: '' } }]
}

const PokemonProvider: React.FC = ({ ...props }) => {
	const [pokemonTeam, setPokemonTeam] = React.useState<TeamType[]>([])
	const { pokemons, setPokemons } = useGetPokemon()

	const [pokemonSelected, setPokemonSelected] = React.useState<PokemonType[]>([
		dataDefault,
		dataDefault,
		dataDefault,
		dataDefault,
		dataDefault,
		dataDefault
	])

	const addPokemonSelected = (pokemon: PokemonType) => {
		const arrayPokemon = pokemonSelected.filter(pok => pok.id !== '')

		if (arrayPokemon.length >= 6) return

		arrayPokemon.push(pokemon)

		const finalFor = 6 - arrayPokemon.length
		for (let index = 0; index < finalFor; index++)
			arrayPokemon.push(dataDefault)

		setPokemonSelected(arrayPokemon)
	}

	const removePokemonSelected = (pokemon: PokemonType) => {
		const newData = pokemonSelected.filter(p => p.id !== pokemon.id)

		const data = {
			...pokemon,
			selected: !pokemon.selected
		}

		const pokeTemp = [...pokemons]
		pokeTemp[pokeTemp.findIndex(f => f.id === pokemon.id)] = data

		const finalFor = 6 - newData.length
		for (let index = 0; index < finalFor; index++) newData.push(dataDefault)

		setPokemonSelected(newData)
		setPokemons(pokeTemp)
	}

	return (
		<PokemonContext.Provider
			value={{
				pokemonTeam,
				setPokemonTeam,
				pokemonSelected,
				setPokemonSelected,
				addPokemonSelected,
				removePokemonSelected
			}}
			{...props}
		>
			{props.children}
		</PokemonContext.Provider>
	)
}

function usePokemonContext(): PokemonContextData {
	const context = useContext(PokemonContext)

	if (!context) {
		throw new Error('PokemonContextData must be used within an AuthProvider')
	}

	return context
}

export { usePokemonContext, PokemonProvider }
