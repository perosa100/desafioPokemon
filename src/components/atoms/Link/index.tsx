import * as React from 'react'

import LinkNext, { LinkProps } from 'next/link'
import styled from 'styled-components'
interface IProps extends LinkProps {
	label?: string
	size?: string
	color?: string
	children?: React.ReactNode[] | React.ReactNode | React.ReactElement
}

const StyleLink = styled.div<Pick<IProps, 'color' | 'size'>>`
	color: ${props => (props.color ? props.color : props.theme.color.secondary)};
	font-size: ${props => (props.size ? props.size : props.theme.sizes.xs)};
	font-family: ${props => props.theme.fonts.semibold};
	text-align: center;
`

const Wrapper = styled.div`
	a {
		text-decoration: none;
	}
`

const Link = ({
	href,
	label,
	as,
	prefetch,
	color,
	size,
	children,
	...props
}: IProps) => (
	<Wrapper>
		<LinkNext as={as} prefetch={prefetch || false} {...{ href }}>
			<a {...props}>
				<StyleLink color={color} size={size}>
					{label ?? children}
				</StyleLink>
			</a>
		</LinkNext>
	</Wrapper>
)

export default Link
