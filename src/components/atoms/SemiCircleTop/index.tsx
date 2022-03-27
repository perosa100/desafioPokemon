import { HTMLAttributes } from 'react'

import styled from 'styled-components'

interface SemiCircleTopType extends HTMLAttributes<HTMLDivElement> {
	borderTop?: string
}

export const CircleTop = styled.div<SemiCircleTopType>`
	width: 90px;
	height: 45px;
	border-top-left-radius: 110px;
	border-top-right-radius: 110px;
	border: 30px solid
		${props =>
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			props.borderTop
				? props.theme.pokeColor.borderTop
				: props.theme.color.white};
	border-bottom: 0;
`

const SemiCircleTop = ({ borderTop }: SemiCircleTopType) => (
	<CircleTop borderTop={borderTop} />
)

export default SemiCircleTop
