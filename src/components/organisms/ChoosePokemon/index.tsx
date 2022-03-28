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
	console.log(
		'🚀🚀 ~ file: index.tsx ~ line 32 ~ ChoosePokemon ~ pokemonSelected',
		pokemonSelected
	)
	console.log(
		'🚀🚀 ~ file: index.tsx ~ line 31 ~ ChoosePokemon ~ pokemons',
		pokemons
	)
	if (loading) {
		return <p>carregando</p>
	}

	const handleAddPokemonList = (pokemon: PokemonType) => {
		if (pokemonSelected.length >= 6) return

		const data = {
			...pokemon,
			selected: !pokemon.selected
		}

		setPokemons(prev => [...prev, data])
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
					pokemons.map(pokemon => (
						<div
							key={pokemon.id}
							onClick={() => handleAddPokemonList(pokemon)}
						>
							<PokemonCard pokemon={pokemon} />
						</div>
					))}
			</Content>
		</Wrapper>
	)
}

export default ChoosePokemon
