import { HTMLAttributes } from 'react'

import styled from 'styled-components'

import HeadingIcon from '@molecules/HeadingIcon'
import Pokedeck from '@molecules/Pokedeck'

import Theme from '@themes/default'

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

const pokemon = {
	url: '/images/pokemonImg.png',
	name: 'kakaka',
	color: 'red'
}

const PokedeckList = () => (
	<Wrapper>
		<HeadingIcon
			title="My Team"
			color={Theme.color.primary}
			family={Theme.fonts.bold}
		/>
		<Content>
			{[1, 2, 3, 4, 5, 6].map(n => (
				<Pokedeck key={n} pokemon={pokemon} />
			))}
		</Content>
	</Wrapper>
)

export default PokedeckList
