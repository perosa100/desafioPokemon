import * as React from 'react'

export interface PokemonType {
	id: string
	url: string
	name: string
	color: string
	types: Array<{
		slot: string
		type: string
		name: string
	}>
}

export interface TeamType {
	id: string
	name: string
	team: [PokemonType]
}

export interface PokemonContext {
	pokemon: TeamType[] | null
	setPokemon: React.Dispatch<React.SetStateAction<TeamType[] | null>>
	pokemonSelected: Array<any> | null
	setpokemonSelected: React.Dispatch<React.SetStateAction<Array<any> | null>>
}

export const PokemonContext = React.createContext<PokemonContext | null>(null)

const PokemonProvider = ({ ...props }) => {
	const [pokemon, setPokemon] = React.useState<PokemonContext['pokemon']>(null)
	const [pokemonSelected, setpokemonSelected] =
		React.useState<Array<any> | null>(null)

	return (
		<PokemonContext.Provider
			value={{ pokemon, setPokemon, pokemonSelected, setpokemonSelected }}
			{...props}
		>
			{props.children}
		</PokemonContext.Provider>
	)
}

export default PokemonProvider
