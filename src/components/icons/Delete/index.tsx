import styled from 'styled-components'

import Theme from '@themes/default'

const Wrapper = styled.p`
	color: ${Theme.color.background};
`

interface DeleteProps {
	height?: string | number
	width?: string | number
}

const Delete = ({ width, height, ...props }: DeleteProps) => {
	return (
		<Wrapper>
			<svg
				width="40"
				height="40"
				viewBox="0 0 40 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect width="40" height="40" rx="20" fill="#EEBFBC" />
				<path
					d="M13.25 27.5C13.25 28.875 14.375 30 15.75 30H23.25C24.625 30 25.75 28.875 25.75 27.5V15H13.25V27.5ZM27 11.25H23.25L22 10H17L15.75 11.25H12V13.75H27V11.25Z"
					fill="white"
				/>
			</svg>
		</Wrapper>
	)
}

export default Delete
