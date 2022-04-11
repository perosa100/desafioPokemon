import { HTMLAttributes } from 'react'

import styled from 'styled-components'

import PokemonImage from '@atoms/PokemonImage'
import SemiCircleBottom from '@atoms/SemiCircleBottom'
import SemiCircleTop from '@atoms/SemiCircleTop'

import Theme from '@themes/default'

export interface PokemonType {
	url: string
	name: string
	type1: string
	selected?: boolean
	type2?: string
}

interface PokedeckListTeamType extends HTMLAttributes<HTMLDivElement> {
	pokemon: PokemonType
}

export const Wrapper = styled.div`
	position: relative;
	cursor: pointer;
	> div {
		margin-top: 5px;
	}
`

const PokedeckListTeam = ({ pokemon }: PokedeckListTeamType) => {
	return (
		<Wrapper>
			<SemiCircleTop
				borderTop={pokemon.type1 as keyof typeof Theme.pokeColor}
			/>
			{pokemon?.url && <PokemonImage src={pokemon?.url} />}
			<SemiCircleBottom />
		</Wrapper>
	)
}

export default PokedeckListTeam
