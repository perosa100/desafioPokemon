import styled from 'styled-components'

import Divider from '@atoms/Divider'
import Heading from '@atoms/Heading'

export const Wrapper = styled.div`
	height: 110px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	background-color: ${props => props.theme.color.gray};
`

const Header = () => (
	<Wrapper>
		<Divider />
		<Heading title="TEAMS" level={3} marginbottom="10px" margintop="12px" />
	</Wrapper>
)

export default Header
