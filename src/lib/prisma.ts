/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient({ errorFormat: 'pretty' })
} else {
	if (!global.prisma) {
		global.prisma = new PrismaClient()
	}
	prisma = global.prisma
}
export default prisma
