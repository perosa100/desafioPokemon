<<<<<<< HEAD
<<<<<<< HEAD
import { prisma } from 'lib/prisma'
=======
>>>>>>> parent of add6e86 (finish)
=======
>>>>>>> parent of add6e86 (finish)
import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '../../lib/prisma'
export default async function getPokemon(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const team = await prisma.team.findMany({
		include: {
			pokemon: true
		}
	})
	res.json(team)
}
