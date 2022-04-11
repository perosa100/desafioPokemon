/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { HTMLAttributes } from 'react'

import { PokemonType } from '@hooks/useGetPokemon'
import styled from 'styled-components'

import Delete from '@icons/Delete'
import Done from '@icons/Done'

import HeadingIcon from '@molecules/HeadingIcon'
import Pokedeck from '@molecules/Pokedeck'

import Theme from '@themes/default'

import { usePokemonContext } from '@contexts/pokemonProvider'

interface PokedeckListType extends HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode
}

export const Wrapper = styled.div<PokedeckListType>`
	padding: ${Theme.spacing.md};
`
export const ContentTitle = styled.div`
	display: flex;
	align-self: center;

	> div {
		margin-left: 15px;
	}
`
export const FormName = styled.input``

export const Options = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 10px;
	margin-top: 10px;
	> p {
		color: green;
	}
`

export const Content = styled.div<PokedeckListType>`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;

	> div {
		&:nth-child(4) {
			margin-left: 30px;
		}
	}
`
function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms))
}
const PokedeckList = () => {
	const {
		pokemonSelected,
		resetPokemonSelected,
		savePokemonSelected,
		removePokemonSelected
	} = usePokemonContext()
	const [error, setError] = React.useState('')
	const [openMessagePost, setOpenMessagePost] = React.useState(false)
	const [nameTeam, setNameTeam] = React.useState('My Team')
	const [openName, setOpenName] = React.useState(false)
	const handleRemovePokemonList = (pokemon: PokemonType) => {
		removePokemonSelected(pokemon)
	}

	const done = pokemonSelected.every(p => p.id !== '')

	async function handleSavePokemon() {
		if (!done) {
			return
		}

		try {
			await savePokemonSelected(nameTeam)
			setOpenMessagePost(true)
			setNameTeam('My Team')
		} catch (error) {
			setError(error as string)
			setOpenMessagePost(true)
		}

		await sleep(3000)

		setOpenMessagePost(false)
		setError('')
		resetPokemonSelected()
	}

	return (
		<Wrapper>
			<ContentTitle>
				<div onClick={() => setOpenName(prev => !prev)}>
					<HeadingIcon
						title={nameTeam}
						color={Theme.color.primary}
						family={Theme.fonts.bold}
					/>
				</div>
				{openName && (
					<>
						<FormName
							value={nameTeam}
							onChange={e => {
								setNameTeam(e.target.value)
							}}
						/>
						<button onClick={() => setOpenName(prev => !prev)}>
							salvar
						</button>
					</>
				)}
			</ContentTitle>
			<Content>
				{pokemonSelected.map((pokemon, index) => (
					<div
						key={index}
						onClick={() => handleRemovePokemonList(pokemon)}
					>
						<Pokedeck pokemon={pokemon} />
					</div>
				))}
			</Content>
			<Options>
				{openMessagePost && (
					<>{error !== '' ? error : <p>Time Criado com Sucesso</p>}</>
				)}

				<div onClick={() => resetPokemonSelected()}>
					<Delete colorBolean={done} />
				</div>
				<div onClick={() => handleSavePokemon()}>
					<Done colorBolean={done} />
				</div>
			</Options>
		</Wrapper>
	)
}

export default PokedeckList
