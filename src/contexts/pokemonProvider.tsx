/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import * as React from 'react'
import { useContext } from 'react'

import { PokemonType, useGetPokemon } from '@hooks/useGetPokemon'
import axios from 'axios'

export interface Type {
	type: { name: string }
}

export interface TeamType {
	id: string
	name: string
	pokemon: [PokemonTypeTeam]
}

interface PokemonTypeTeam {
	url: string
	name: string
	type1: string
	selected?: boolean
	type2?: string
}

interface PokemonContextData {
	pokemonTeam: TeamType[]
	pokemons: PokemonType[]
	setPokemonTeam: React.Dispatch<React.SetStateAction<TeamType[]>>
	pokemonSelected: PokemonType[]
	setPokemonSelected: React.Dispatch<React.SetStateAction<PokemonType[]>>
	addPokemonSelected: (pokemon: PokemonType) => void
	removePokemonSelected: (pokemon: PokemonType) => void
	resetPokemonSelected: () => void
	savePokemonSelected: (name: string) => Promise<void>
	loading: boolean
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

interface childrenProps {
	children: React.ReactNode
}
const PokemonProvider = ({ children, ...props }: childrenProps) => {
	const [pokemons, setPokemons] = React.useState<PokemonType[]>([])
	console.log(
		'🚀🚀 ~ file: pokemonProvider.tsx ~ line 58 ~ PokemonProvider ~ pokemons',
		pokemons
	)
	const { getPokemon } = useGetPokemon()
	const [loading, setLoading] = React.useState(false)
	const [pokemonTeam, setPokemonTeam] = React.useState<TeamType[]>([])
	const [pokemonSelected, setPokemonSelected] = React.useState<PokemonType[]>([
		dataDefault,
		dataDefault,
		dataDefault,
		dataDefault,
		dataDefault,
		dataDefault
	])
	async function getTeamPokemons() {
		const response = await axios.get<TeamType[]>(
			`${process.env.PRODUCTION_URL}/api/getPokemon `
		)
		setPokemonTeam(response.data)
	}
	React.useEffect(() => {
		getTeamPokemons()
	}, [])

	async function getPokemonData() {
		setLoading(true)
		const data = await getPokemon()

		setLoading(false)

		if (data) {
			setPokemons(data)
		}
	}

	React.useEffect(() => {
		getPokemonData()
	}, [])

	const addPokemonSelected = (pokemon: PokemonType) => {
		const arrayPokemon = pokemonSelected.filter(pok => pok.id !== '')

		if (arrayPokemon.length >= 6) return

		arrayPokemon.push(pokemon)

		const finalFor = 6 - arrayPokemon.length
		for (let index = 0; index < finalFor; index++)
			arrayPokemon.push(dataDefault)

		const pokeTemp = [...pokemons]
		const index = pokeTemp.findIndex(f => f.id === pokemon.id)

		pokeTemp[index].selected = !pokemon.selected

		setPokemonSelected(arrayPokemon)
		setPokemons(pokeTemp)
	}

	const removePokemonSelected = (pokemon: PokemonType) => {
		const newData = pokemonSelected.filter(p => p.id !== pokemon.id)

		const finalFor = 6 - newData.length
		for (let index = 0; index < finalFor; index++) newData.push(dataDefault)

		const pokeTemp = [...pokemons]
		const index = pokeTemp.findIndex(f => f.id === pokemon.id)

		pokeTemp[index].selected = !pokemon.selected

		setPokemonSelected(newData)
		setPokemons(pokeTemp)
	}

	function resetPokemonSelected() {
		setPokemonSelected([
			dataDefault,
			dataDefault,
			dataDefault,
			dataDefault,
			dataDefault,
			dataDefault
		])
		const pokeTemp = [...pokemons]

		for (let index = 0; index < pokemons.length; index++) {
			pokeTemp[index].selected = false
		}

		setPokemons(pokeTemp)
	}

	const savePokemonSelected = async (nameTeam: string) => {
		const formatForDbTeam = pokemonSelected.map(element => {
			const poke: any = {}
			element.types.forEach((type, index) => {
				poke['type' + (index + 1)] = type?.type.name
			})
			return {
				name: element.name,
				url: element.url,
				selected: element.selected,
				...poke
			}
		})

		const data = {
			name: nameTeam,
			pokemon: formatForDbTeam
		}
		console.log(
			'🚀🚀 ~ file: pokemonProvider.tsx ~ line 165 ~ savePokemonSelected ~ formatForDbTeam',
			formatForDbTeam
		)

		await axios.post(`${process.env.PRODUCTION_URL}/api/postPokemon`, data)

		await getTeamPokemons()
	}

	return (
		<PokemonContext.Provider
			value={{
				pokemons,
				pokemonTeam,
				setPokemonTeam,
				pokemonSelected,
				setPokemonSelected,
				addPokemonSelected,
				removePokemonSelected,
				resetPokemonSelected,
				savePokemonSelected,
				loading
			}}
			{...props}
		>
			{children}
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
