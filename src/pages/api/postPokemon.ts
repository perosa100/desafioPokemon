import { Prisma } from '@prisma/client'
<<<<<<< HEAD
<<<<<<< HEAD
import { prisma } from 'lib/prisma'
=======
>>>>>>> parent of add6e86 (finish)
=======
>>>>>>> parent of add6e86 (finish)
import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '../../lib/prisma'

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

		res.status(200).json(createTeam)
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			if (e.code === 'P2002') {
				return res.status(400).json({ error: 'Nome do time ja existe' })
			}
		}
		throw new Error('Erro Interno')
	}
}
