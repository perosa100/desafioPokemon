import React from 'react'

import styled, { css } from 'styled-components'

import Theme from '@themes/default'

export interface IHeading {
	title?: string
	color?: string
	family?: string
	level: number
}

interface IStyle {
	size?: string
	marginbottom?: string
	margintop?: string
	level: number
	color?: string
	family?: string
}

export type DefaultProps = Readonly<typeof defaultProps>

const defaultProps = {
	level: 1 as 1 | 2 | 3 | 4 | 5 | 6
}

const fontSize = (level: number) =>
	`${Number(Theme.sizes.lg.replace('em', '')) + 1 * (1 / level)}em`

const styles = css<IStyle>`
	font-family: ${props =>
		props.family ? props.family : props.theme.fonts.bold};
	color: ${props => (props.color ? props.color : props.theme.color.white)};
	font-size: ${props => fontSize(props.level)};
	margin-bottom: ${props =>
		props.marginbottom ? props.marginbottom : props.theme.spacing.sm};
	margin-top: ${props => (props.margintop ? props.margintop : 0)};
`

const Heading = styled(({ level, title, ...props }: IHeading & DefaultProps) =>
	React.createElement(`h${level}`, props, title)
)`
	${styles}
`

export default Heading
