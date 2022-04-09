import styled from 'styled-components'

import Header from '@molecules/Header'

import ChoosePokemon from '@organisms/ChoosePokemon'
import PokedeckList from '@organisms/PokedeckList'

import DefaultTemplate from '@templates/defaultTemplate'

const Wrapper = styled.div``

const CreatePokemon = () => {
	return (
		<DefaultTemplate title="Pokedeck Create">
			<Wrapper>
				<Header />
				<PokedeckList />
				<ChoosePokemon />
			</Wrapper>
		</DefaultTemplate>
	)
}

export default CreatePokemon
