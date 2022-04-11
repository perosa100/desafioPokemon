import React from 'react'

import styled from 'styled-components'

interface DividerProps {
	colorActive?: string
}
export const Wrapper = styled.div<DividerProps>`
	border-bottom: solid 2px ${props => props.colorActive};
	width: 90%;
`

const Divider = ({ colorActive = '#fff' }: DividerProps) => (
	<Wrapper colorActive={colorActive} />
)

export default Divider
