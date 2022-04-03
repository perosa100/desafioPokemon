import * as React from 'react'
import { useContext } from 'react'

import { PokemonType } from '@hooks/usePokemon'

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
	pokemon: TeamType[]
	setPokemon: React.Dispatch<React.SetStateAction<TeamType[]>>
	pokemonSelected: PokemonType[]
	setPokemonSelected: React.Dispatch<React.SetStateAction<PokemonType[]>>
}

const PokemonContext = React.createContext<PokemonContextData>(
	{} as PokemonContextData
)
const PokemonProvider: React.FC = ({ ...props }) => {
	const [pokemon, setPokemon] = React.useState<TeamType[]>([])
	const [pokemonSelected, setPokemonSelected] = React.useState<PokemonType[]>(
		[]
	)

	return (
		<PokemonContext.Provider
			value={{ pokemon, setPokemon, pokemonSelected, setPokemonSelected }}
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
