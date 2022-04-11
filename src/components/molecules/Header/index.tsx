import Link from 'next/link'
import styled from 'styled-components'

import Divider from '@atoms/Divider'
import Heading from '@atoms/Heading'

interface HeaderProps {
	title: string
	url: string
}
export const Wrapper = styled.div`
	height: 110px;
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	background-color: ${props => props.theme.color.gray};
	cursor: pointer;
`

const Header = ({ title, url }: HeaderProps) => (
	<Wrapper>
		<Divider />
		<Link href={url} passHref>
			<Heading
				title={title}
				level={3}
				marginbottom="10px"
				margintop="12px"
			/>
		</Link>
	</Wrapper>
)

export default Header
