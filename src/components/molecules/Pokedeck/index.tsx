import { HTMLAttributes } from 'react'

import { PokemonType } from '@hooks/useGetPokemon'
import styled from 'styled-components'

import PokemonImage from '@atoms/PokemonImage'
import SemiCircleBottom from '@atoms/SemiCircleBottom'
import SemiCircleTop from '@atoms/SemiCircleTop'

interface PokedeckType extends HTMLAttributes<HTMLDivElement> {
	pokemon?: PokemonType
}

export const Wrapper = styled.div`
	position: relative;
	cursor: pointer;
	> div {
		margin-top: 5px;
	}
`

const Pokedeck = ({ pokemon }: PokedeckType) => {
	return (
		<Wrapper>
			<SemiCircleTop borderTop={pokemon?.types[0].type.name} />
			{pokemon?.url && <PokemonImage src={pokemon?.url} />}
			<SemiCircleBottom />
		</Wrapper>
	)
}

export default Pokedeck
