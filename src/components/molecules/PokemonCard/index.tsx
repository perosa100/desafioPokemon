import { PokemonType } from '@hooks/useGetPokemon'
import styled from 'styled-components'

import Heading from '@atoms/Heading'
import PokemonImage from '@atoms/PokemonImage'

import Done from '@icons/Done'

import CircleNumber from '@molecules/CircleNumber'
import DividerType from '@molecules/DividerType'

import Theme from '@themes/default'

export const Wrapper = styled.div`
	position: relative;
`
export const SelectPokemon = styled.div`
	position: absolute;
	top: 40px;
	right: 10px;
	z-index: 9999;
`

export const Content = styled.div`
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

const PokemonCard = ({ pokemon }: PokemonCardType) => {
	return (
		<Wrapper>
			{pokemon.selected && (
				<SelectPokemon>
					<Done colorBolean={!pokemon?.selected} width={50} height={50} />
				</SelectPokemon>
			)}
			<Content>
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
			</Content>
		</Wrapper>
	)
}
export default PokemonCard
