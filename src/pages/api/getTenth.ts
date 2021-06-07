import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/lib/firebase-admin'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		// const { uid } = await auth.verifyIdToken(req.headers.token);
		const snapshot = await db
			.collection('10th')
			.where('minMarks', '<=', 10)
			.where('maxMarks', '>=', 10)
			.get()

		const tenth: { id: string }[] = []

		snapshot.forEach(doc => {
			tenth.push({ id: doc.id, ...doc.data() })
		})
		// console.log('tenth', tenth)
		res.status(200).json(tenth)
	} catch (error) {
		// console.log('error', error)
		res.status(500).json({ error })
	}
}
