import React, { HTMLAttributes } from 'react'

import { usePokemon } from '@hooks/usePokemon'
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
	const { pokemons, loading } = usePokemon()
	const { setPokemonSelected } = usePokemonContext()

	if (loading) {
		return <p>carregando</p>
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
							onClick={() =>
								setPokemonSelected(prev => [...prev, pokemon])
							}
						>
							<PokemonCard pokemon={pokemon} />
						</div>
					))}
			</Content>
		</Wrapper>
	)
}

export default ChoosePokemon
