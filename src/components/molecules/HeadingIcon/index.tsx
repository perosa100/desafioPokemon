import { HTMLAttributes } from 'react'

import styled from 'styled-components'

import Heading from '@atoms/Heading'

import Edit from '@icons/Edit'

import Theme from '@themes/default'

interface HeadingIconType extends HTMLAttributes<HTMLDivElement> {
	required?: boolean
	title?: string
	color?: string
	family?: string
}

export const Wrapper = styled.div<HeadingIconType>`
	display: flex;
	justify-items: center;
	gap: ${Theme.spacing.sm};
`

const HeadingIcon = ({
	required = true,
	title,
	color,
	family
}: HeadingIconType) => (
	<Wrapper>
		<Heading
			title={title}
			marginbottom="10px"
			color={color}
			family={family}
			level={5}
		/>
		{required && <Edit />}
	</Wrapper>
)

export default HeadingIcon
