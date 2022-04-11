import { Prisma } from '@prisma/client'
import prisma from 'lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export interface PokemonType {
	url: string
	name: string
	type1: string
	selected?: boolean
	type2?: string
}

interface RequestDataPokemon {
	name: string
	pokemon: PokemonType[]
}

export default async function postPokemon(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { name, pokemon } = req.body as RequestDataPokemon

	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Method not allowed' })
	}

	try {
		const createTeam = await prisma.team.create({
			data: {
				name,
				pokemon: {
					createMany: {
						data: pokemon
					}
				}
			}
		})

		res.json(createTeam)
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			if (e.code === 'P2002') {
				return res.status(400).json({ message: 'Nome do time ja existe' })
			}
		}
		res.status(400).json({ message: 'Something went wrong' })
	}
}
