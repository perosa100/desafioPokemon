import { PokemonType } from '@hooks/usePokemon'
import styled from 'styled-components'

import Heading from '@atoms/Heading'
import PokemonImage from '@atoms/PokemonImage'

import CircleNumber from '@molecules/CircleNumber'
import DividerType from '@molecules/DividerType'

import Theme from '@themes/default'

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-items: center;
	align-items: center;
	height: 140px;
	> * {
		&:first-child {
			position: absolute;
			left: 0;
		}
	}
`
export const ContentImage = styled.div`
	height: 100px;
	margin: 20px 0;
`

interface PokemonCardType {
	pokemon: PokemonType
}

const PokemonCard = ({ pokemon }: PokemonCardType) => (
	<Wrapper>
		<CircleNumber id={pokemon.id} />
		<ContentImage>
			<PokemonImage src={pokemon.url} layout="fill" />
		</ContentImage>
		<Heading
			title={pokemon.name}
			color={Theme.color.primary}
			level={4}
			marginbottom="0"
			margintop="0"
		/>

		<DividerType TypeColor={pokemon.types} />
	</Wrapper>
)

export default PokemonCard
