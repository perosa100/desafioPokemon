import { PokemonType } from '@hooks/useGetPokemon'
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
	justify-items: flex-start;
	> div {
		&:first-child {
			position: absolute;
			left: 0;
		}
	}
	cursor: pointer;
`
export const ContentImage = styled.div`
	margin-top: 20px;
	position: 'relative';
`

interface PokemonCardType {
	pokemon: PokemonType
}

const PokemonCard = ({ pokemon }: PokemonCardType) => (
	<Wrapper>
		<CircleNumber id={pokemon.id} />
		<ContentImage>
			<PokemonImage
				src={pokemon.url}
				layout="responsive"
				width={100}
				height={100}
			/>
		</ContentImage>
		<Heading
			title={pokemon.name}
			color={Theme.color.primary}
			level={5}
			marginbottom="5px"
			margintop="0"
		/>

		<DividerType TypeColor={pokemon.types} />
	</Wrapper>
)

export default PokemonCard
