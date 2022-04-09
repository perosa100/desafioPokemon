import * as React from 'react'

import Head from 'next/head'
import styled from 'styled-components'

import Theme from '@themes/default'

interface IHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string
	children: React.ReactNode
	image?: boolean
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const DefaultTemplate = ({ title, children, ...props }: IHeaderProps) => {
	return (
		<>
			<Head>
				<title>{title ? `${title} | Poke` : 'Poke'}</title>
				<meta name="description" content="Poke" />
				<meta name="theme-color" content={Theme.color.primary} />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content={Theme.color.primary}
				/>
			</Head>
			<Wrapper {...props}>{children}</Wrapper>
		</>
	)
}

export default DefaultTemplate
