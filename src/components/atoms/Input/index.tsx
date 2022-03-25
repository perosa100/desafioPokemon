import * as React from 'react'

import styled from 'styled-components'

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
	background?: string
	color?: string
	marginBottom?: string
	onChange?: React.ChangeEventHandler<HTMLInputElement>
	[props: string]: any
}

const Input = styled.input<IInput>`
	background-color: ${props =>
		props.background ? props.background : props.theme.color.gray};
	border: 0;
	padding: 0.9rem 1.1rem;
	border-radius: 0.4rem;
	outline: none;
	margin-bottom: ${props => (props.type === 'checkbox' ? 0 : '1.25em')};
	margin-right: ${props => (props.type === 'checkbox' ? '0.5rem' : 0)};
	color: ${props => (props.color ? props.color : props.theme.color.secondary)};
	font-family: ${props => props.theme.fonts.regular};
	font-size: ${props => props.theme.sizes.md};
	width: ${props => (props.type === 'checkbox' ? 'auto' : '100%')};
`

export default Input
