/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { HTMLAttributes } from 'react'

import styled from 'styled-components'

import Divider from '@atoms/Divider'

import HeadingIcon from '@molecules/HeadingIcon'
import PokedeckListTeam from '@molecules/PokedeckListTeam'

import Theme from '@themes/default'

import { usePokemonContext } from '@contexts/pokemonProvider'

export const Wrapper = styled.div`
	padding: 0 10px;
`

export const Content = styled.div`
	display: flex;
	flex-wrap: wrap;

	> div {
		margin-top: 5px;
	}
`
export const ContentPokemon = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	padding: 0 10px;
	margin-bottom: 20px;

	> div {
		&:nth-child(4) {
			margin-left: 40px;
		}
	}
`
export interface PokemonType {
	url: string
	name: string
	type1: string
	selected?: boolean
	type2?: string
}

export interface TeamType {
	id: string
	name: string
	team: [PokemonType]
}

const TeamPokemonList = () => {
	const { pokemonTeam } = usePokemonContext()

	return (
		<Wrapper>
			{pokemonTeam.map(pokemon => (
				<Content key={pokemon.id}>
					<HeadingIcon
						title={pokemon.name}
						color={Theme.color.primary}
						family={Theme.fonts.bold}
						required={false}
					/>
					<ContentPokemon>
						{pokemon.pokemon.map(poke => (
							<div key={pokemon.id}>
								<PokedeckListTeam pokemon={poke} />
							</div>
						))}
					</ContentPokemon>

					<Divider colorActive="#000" />
				</Content>
			))}
		</Wrapper>
	)
}

export default TeamPokemonList
