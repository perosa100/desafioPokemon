/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { HTMLAttributes } from 'react'

import { PokemonType, usePokemon } from '@hooks/usePokemon'
import styled from 'styled-components'

import HeadingIcon from '@molecules/HeadingIcon'
import PokemonCard from '@molecules/PokemonCard'

import Theme from '@themes/default'

import { usePokemonContext } from '@contexts/pokemonProvider'

interface ChoosePokemonType extends HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode
}

export const Wrapper = styled.div<ChoosePokemonType>`
	padding: ${Theme.spacing.md};
	display: flex;
	flex-direction: column;
`

export const Content = styled.div<ChoosePokemonType>`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 10px;
`

const ChoosePokemon = () => {
	const { pokemons, setPokemons, loading } = usePokemon()

	const { pokemonSelected, setPokemonSelected } = usePokemonContext()

	if (loading) {
		return <p>carregando</p>
	}

	const handleAddPokemonList = (pokemon: PokemonType, index: number) => {
		if (
			pokemonSelected.length >= 6 ||
			pokemonSelected.find(p => p.id === pokemon.id)
		)
			return

		const data = {
			...pokemon,
			selected: !pokemon.selected
		}

		const pokeTemp = [...pokemons]
		pokeTemp[index] = data

		setPokemons(pokeTemp)
		setPokemonSelected(prev => [...prev, data])
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
