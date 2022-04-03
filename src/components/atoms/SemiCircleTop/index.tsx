import { HTMLAttributes } from 'react'

import styled from 'styled-components'

import Theme from '@themes/default'

interface SemiCircleTopType extends HTMLAttributes<HTMLDivElement> {
	borderTop?: keyof typeof Theme.pokeColor
}

export const CircleTop = styled.div<SemiCircleTopType>`
	width: 90px;
	height: 45px;
	border-top-left-radius: 110px;
	border-top-right-radius: 110px;
	border: 30px solid
		${props =>
			props.borderTop
				? props.theme.pokeColor[props.borderTop]
				: props.theme.color.white};
	border-bottom: 0;
`

const SemiCircleTop = ({ borderTop }: SemiCircleTopType) => {
	return <CircleTop borderTop={borderTop} />
}

export default SemiCircleTop
