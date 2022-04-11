import prisma from 'lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function getPokemon(
	_req: NextApiRequest,
	res: NextApiResponse
) {
	const team = await prisma.team.findMany({
		include: {
			pokemon: true
		}
	})
	res.json(team)
}
