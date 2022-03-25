import * as React from 'react'

import styled from 'styled-components'

import Theme from '@themes/default'
interface ILabelProps extends React.HTMLAttributes<HTMLLabelElement> {
	children: React.ReactNode
	[props: string]: any
}

const Wrapper = styled.label`
	display: flex;
	flex-direction: column;
	font-family: ${Theme.fonts.regular};
	font-size: ${Theme.sizes.xxs};

	& > span {
		margin-bottom: 5px;
		color: ${Theme.color.secondary};
	}
`

const Label = ({ children, ...props }: ILabelProps) => (
	<Wrapper {...props}>{children}</Wrapper>
)

export default Label
