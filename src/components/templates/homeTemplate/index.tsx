import styled from 'styled-components'

import PokedeckList from '@organisms/PokedeckList'

import DefaultTemplate from '@templates/defaultTemplate'

const Wrapper = styled.div``

const HomeTemplate = () => {
	return (
		<DefaultTemplate title="Pokedeck">
			<Wrapper>
				<PokedeckList />
			</Wrapper>
		</DefaultTemplate>
	)
}

export default HomeTemplate
