import styled from 'styled-components'

import Header from '@molecules/Header'

import ChoosePokemon from '@organisms/ChoosePokemon'
import PokedeckList from '@organisms/PokedeckList'

import DefaultTemplate from '@templates/defaultTemplate'

const Wrapper = styled.div``

const HomeTemplate = () => {
	return (
		<DefaultTemplate title="Pokedeck">
			<Wrapper>
				<Header />
				<PokedeckList />
				<ChoosePokemon />
			</Wrapper>
		</DefaultTemplate>
	)
}

export default HomeTemplate
