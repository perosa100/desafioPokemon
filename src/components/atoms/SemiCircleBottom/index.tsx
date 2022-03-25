import styled from 'styled-components'

import Theme from '@themes/default'

export const CircleBottom = styled.div`
	width: 90px;
	height: 45px;
	border-bottom-left-radius: 110px;
	border-bottom-right-radius: 110px;
	border: 30px solid ${Theme.color.white};
	border-top: 0;
`

const SemiCircleBottom = () => <CircleBottom />

export default SemiCircleBottom
