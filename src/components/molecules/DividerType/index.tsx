import React from 'react'

import { Type } from '@hooks/useGetPokemon'
import styled from 'styled-components'

import Theme from '@themes/default'

interface IDivider extends React.InputHTMLAttributes<HTMLInputElement> {
	colorProps?: keyof typeof Theme.pokeColor
}

export const Wrapper = styled.div`
	display: flex;

	> div {
		margin-left: 5px;
	}
`

export const TypeOne = styled.div<IDivider>`
	border-bottom: solid 4px
		${props =>
			props.colorProps
				? props.theme.pokeColor[props.colorProps]
				: props.theme.color.white};
	width: 50%;
`

export const TypeTwo = styled.div<IDivider>`
	border-bottom: solid 4px
		${props =>
			props.colorProps
				? props.theme.pokeColor[props.colorProps]
				: props.theme.color.gray};
	width: 50%;
`

interface DividerTypeProps {
	TypeColor: Type[]
}

const DividerType = ({ TypeColor }: DividerTypeProps) => {
	return (
		<Wrapper>
			{TypeColor[0].type.name && (
				<TypeOne colorProps={TypeColor[0].type.name} />
			)}
			{TypeColor[1]?.type.name && (
				<TypeTwo colorProps={TypeColor[1].type.name} />
			)}
		</Wrapper>
	)
}

export default DividerType
