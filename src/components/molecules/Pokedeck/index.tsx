import { HTMLAttributes } from 'react'

import styled from 'styled-components'

import PokemonImage from '@atoms/PokemonImage'
import SemiCircleBottom from '@atoms/SemiCircleBottom'
import SemiCircleTop from '@atoms/SemiCircleTop'

import { PokemonType } from '@organisms/PokedeckList'

interface PokedeckType extends HTMLAttributes<HTMLDivElement> {
	pokemon: PokemonType
}

export const Wrapper = styled.div`
	position: relative;
	/* > div {
		margin-bottom: 8px;
	} */
`

const Pokedeck = ({ pokemon }: PokedeckType) => (
	<Wrapper>
		<SemiCircleTop borderTop={pokemon.color} />
		<PokemonImage src={pokemon.url} />
		<SemiCircleBottom />
	</Wrapper>
)

export default Pokedeck
