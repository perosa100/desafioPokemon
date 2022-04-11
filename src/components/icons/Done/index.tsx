import { HTMLAttributes } from 'react'

import styled from 'styled-components'

import Theme from '@themes/default'

interface DoneProps extends HTMLAttributes<HTMLDivElement> {
	height?: string | number
	width?: string | number
	colorBolean: boolean
}
const Wrapper = styled.div`
	color: ${Theme.color.background};
	cursor: pointer;
`

const Done = ({ width = 40, height = 40, colorBolean }: DoneProps) => {
	return (
		<Wrapper>
			<svg
				width={width}
				height={height}
				viewBox="0 0 40 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					width="40"
					height="40"
					rx="20"
					fill={colorBolean ? '#90D861' : '#C7EFAA'}
				/>
				<path
					d="M16.5434 25.3844L11.6622 20.5032L10 22.1537L16.5434 28.6971L30.59 14.6505L28.9395 13L16.5434 25.3844Z"
					fill="white"
				/>
			</svg>
		</Wrapper>
	)
}

export default Done
