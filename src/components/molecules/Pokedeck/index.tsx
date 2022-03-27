import { HTMLAttributes } from 'react'

import { PokemonType } from '@hooks/usePokemon'
import styled from 'styled-components'

import PokemonImage from '@atoms/PokemonImage'
import SemiCircleBottom from '@atoms/SemiCircleBottom'
import SemiCircleTop from '@atoms/SemiCircleTop'

interface PokedeckType extends HTMLAttributes<HTMLDivElement> {
	pokemon?: PokemonType
}

export const Wrapper = styled.div`
	position: relative;
	/* > div {
		margin-bottom: 8px;
	} */
`

const Pokedeck = ({ pokemon }: PokedeckType) => (
	<Wrapper>
		<SemiCircleTop borderTop={pokemon?.types[0]?.type.name} />
		{pokemon?.url && <PokemonImage src={pokemon?.url} />}
		<SemiCircleBottom />
	</Wrapper>
)

export default Pokedeck
