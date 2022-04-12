/* eslint-disable no-var */
import { PrismaClient } from '@prisma/client'

declare global {
<<<<<<< HEAD
<<<<<<< HEAD
	var prisma: PrismaClient | undefined
}

export const prisma = global.prisma || new PrismaClient()
=======
	// allow global `var` declarations
	// eslint-disable-next-line no-var
	var prisma: PrismaClient | undefined
}

=======
	// allow global `var` declarations
	// eslint-disable-next-line no-var
	var prisma: PrismaClient | undefined
}

>>>>>>> parent of add6e86 (finish)
export const prisma =
	global.prisma ||
	new PrismaClient({
		log: ['query']
	})
<<<<<<< HEAD
>>>>>>> parent of add6e86 (finish)
=======
>>>>>>> parent of add6e86 (finish)

if (process.env.NODE_ENV !== 'production') global.prisma = prisma
