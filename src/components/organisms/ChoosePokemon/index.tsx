import React, { HTMLAttributes } from 'react'

import { PokemonType, useGetPokemon } from '@hooks/useGetPokemon'
import styled from 'styled-components'

import HeadingIcon from '@molecules/HeadingIcon'
import PokemonCard from '@molecules/PokemonCard'

import Theme from '@themes/default'

import { usePokemonContext } from '@contexts/pokemonProvider'

interface ChoosePokemonType extends HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode
}

export const Wrapper = styled.div<ChoosePokemonType>`
	display: flex;
	flex-direction: column;
	padding: 0 15px;
`

export const Content = styled.div<ChoosePokemonType>`
	display: grid;
	grid-template-columns: repeat(auto-fill, 75px) 20%;
	gap: 15px;
`

const ChoosePokemon = () => {
	const { pokemons, setPokemons, loading } = useGetPokemon()

	const { pokemonSelected, addPokemonSelected } = usePokemonContext()

	if (loading) {
		return <p>carregando</p>
	}

	const handleAddPokemonList = (pokemon: PokemonType, index: number) => {
		if (pokemonSelected.find(p => p.id === pokemon.id)) return

		addPokemonSelected(pokemon)

		const data = {
			...pokemon,
			selected: !pokemon.selected
		}

		const pokeTemp = [...pokemons]
		pokeTemp[index] = data

		setPokemons(pokeTemp)
	}

	return (
		<Wrapper>
			<HeadingIcon
				title="Choose 6 Pokémons:"
				color={Theme.color.primary}
				family={Theme.fonts.bold}
				required={false}
			/>
			<Content>
				{pokemons.length > 0 &&
					pokemons.map((pokemon, index) => (
						<div
							key={pokemon.id}
							onClick={() => handleAddPokemonList(pokemon, index)}
						>
							<PokemonCard pokemon={pokemon} />
						</div>
					))}
			</Content>
		</Wrapper>
	)
}

export default ChoosePokemon
