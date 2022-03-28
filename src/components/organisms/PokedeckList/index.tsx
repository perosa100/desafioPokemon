import { HTMLAttributes } from 'react'

import { PokemonType, usePokemon } from '@hooks/usePokemon'
import styled from 'styled-components'

import Delete from '@icons/Delete'
import Done from '@icons/Done'

import HeadingIcon from '@molecules/HeadingIcon'
import Pokedeck from '@molecules/Pokedeck'

import Theme from '@themes/default'

import { usePokemonContext } from '@contexts/pokemonProvider'

interface PokedeckListType extends HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode
}

export const Wrapper = styled.div<PokedeckListType>`
	padding: ${Theme.spacing.md};
`

export const Content = styled.div<PokedeckListType>`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;

	> div {
		&:nth-child(4) {
			margin-left: 30px;
		}
	}
`

export const Options = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 10px;
`

const PokedeckList = () => {
	const { pokemonSelected, setPokemonSelected } = usePokemonContext()
	const { pokemons, setPokemons } = usePokemon()

	const handleRemovePokemonList = (pokemon: PokemonType, index: number) => {
		const newData = pokemonSelected.filter(p => p.id !== pokemon.id)

		const data = {
			...pokemon,
			selected: !pokemon.selected
		}

		const pokeTemp = [...pokemons]
		pokeTemp[index] = data

		setPokemons(pokeTemp)
		setPokemonSelected(newData)
	}
	return (
		<Wrapper>
			<HeadingIcon
				title="My Team"
				color={Theme.color.primary}
				family={Theme.fonts.bold}
			/>

			<Content>
				{pokemonSelected.map((pokemon, index) => (
					<div
						key={pokemon.id}
						onClick={() => handleRemovePokemonList(pokemon, index)}
					>
						<Pokedeck pokemon={pokemon} />
					</div>
				))}
			</Content>
			<Options>
				<Delete />
				<Done />
			</Options>
		</Wrapper>
	)
}

export default PokedeckList
