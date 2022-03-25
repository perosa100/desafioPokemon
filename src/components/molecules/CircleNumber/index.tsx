import React from 'react'

import styled from 'styled-components'

import Heading from '@atoms/Heading'

import Theme from '@themes/default'

export const Wrapper = styled.div`
	background-color: ${Theme.color.gray};
	padding: 8px;
	border-radius: 50%;
`

interface CircleNumberType {
	id: string
}

const CircleNumber = ({ id }: CircleNumberType) => (
	<Wrapper>
		<Heading title={`#${id}`} level={6} marginbottom="0" margintop="0" />
	</Wrapper>
)

export default CircleNumber
