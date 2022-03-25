import * as React from 'react'

import styled from 'styled-components'

import Loading from '@icons/Loading'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	title?: string
	color?: string
	background?: string
	fontSize?: string
	width?: string
	loading?: boolean
	children?: React.ReactNode
	disabled?: boolean
	[props: string]: any
}

const ButtonContainer = styled.button<IButton>`
	padding: 1rem;
	border: 0;
	background-color: ${props =>
		props.background ? props.background : props.theme.color.primary};
	width: ${props => (props.width ? props.width : '100%')};
	color: ${props => (props.color ? props.color : props.theme.color.grayLight)};
	font-size: ${props =>
		props.fontSize ? props.fontSize : props.theme.sizes.md};
	opacity: ${props => (props.disabled ? 0.6 : 1)};
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0.5rem;
	cursor: pointer;
	text-decoration: none;
	& > span {
		font-family: ${props => props.theme.fonts.semibold};
	}
`
const Button = ({
	title,
	fontSize,
	background,
	disabled,
	loading = false,
	children,
	...props
}: IButton) => {
	return (
		<ButtonContainer
			background={background}
			fontSize={fontSize}
			disabled={disabled}
			{...props}
		>
			{!loading ? <span>{title ?? children}</span> : <Loading />}
		</ButtonContainer>
	)
}

export default Button
