import NextAuth, { User as NextAuthUser } from 'next-auth'
import Providers from 'next-auth/providers'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

interface NextAuthUserWithStringId extends NextAuthUser {
	id: string
}

const prisma = new PrismaClient()

export default NextAuth({
	providers: [
		Providers.Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET
		}),
		Providers.GitHub({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
			profile(profile) {
				return {
					// @ts-ignore
					id: profile.id.toString(),
					name: profile.name || profile.login,
					email: profile.email,
					image: profile.avatar_url,
				} as NextAuthUserWithStringId
			},
		})
	],
	adapter: PrismaAdapter(prisma),
	database: process.env.DATABASE_URL
})
