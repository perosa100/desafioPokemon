import React from 'react'

import { Type } from '@hooks/usePokemon'
import styled from 'styled-components'

interface IDivider extends React.InputHTMLAttributes<HTMLInputElement> {
	colorProps: string
}

export const Wrapper = styled.div``

export const TypeOne = styled.div<IDivider>`
	border-top: solid 4px ${props => props.colorProps};
	width: 20%;
`

export const TypeTwo = styled.div<IDivider>`
	border-top: solid 4px ${props => props.colorProps};
	width: 20%;
`

interface DividerTypeProps {
	TypeColor: Type[]
}

const DividerType = ({ TypeColor }: DividerTypeProps) => (
	<Wrapper>
		{TypeColor[0].type.name && (
			<TypeOne colorProps={TypeColor[0].type.name} />
		)}
		{TypeColor[1]?.type.name && (
			<TypeTwo colorProps={TypeColor[1].type.name} />
		)}
	</Wrapper>
)

export default DividerType
