import styled from 'styled-components'

import Header from '@molecules/Header'

import TeamPokemonList from '@organisms/TeamPokemonList'

import DefaultTemplate from '@templates/defaultTemplate'

const Wrapper = styled.div``

const HomeTemplate = () => {
	return (
		<DefaultTemplate title="Pokedeck List Team">
			<Wrapper>
				<Header title="CREATE NEW TEAM" url="/createPokemon" />
				<TeamPokemonList />
			</Wrapper>
		</DefaultTemplate>
	)
}

export default HomeTemplate
