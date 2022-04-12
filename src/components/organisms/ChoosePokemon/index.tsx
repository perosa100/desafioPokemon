import React from 'react'

import { PokemonType } from '@hooks/useGetPokemon'
import styled from 'styled-components'

import HeadingIcon from '@molecules/HeadingIcon'
import PokemonCard from '@molecules/PokemonCard'

import Theme from '@themes/default'

import { usePokemonContext } from '@contexts/pokemonProvider'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 15px;
`

export const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 75px) 20%;
	gap: 15px;
`

const ChoosePokemon = () => {
	const { pokemonSelected, addPokemonSelected, pokemons, loading } =
		usePokemonContext()

	function handleAddPokemonList(pokemon: PokemonType) {
		if (pokemonSelected.find(p => p.id === pokemon.id)) return

		try {
			addPokemonSelected(pokemon)
		} catch (error) {
			throw new Error('ouve algo ao criar')
		}
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
				{!loading ? (
					pokemons.length >= 0 &&
					pokemons.map(pokemon => (
						<div
							key={pokemon.name}
							onClick={() => handleAddPokemonList(pokemon)}
						>
							<PokemonCard pokemon={pokemon} />
						</div>
					))
				) : (
					<p>carregando</p>
				)}
			</Content>
		</Wrapper>
	)
}

export default ChoosePokemon
