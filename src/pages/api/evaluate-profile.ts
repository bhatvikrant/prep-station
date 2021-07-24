// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
// import { db } from '@/lib/firebase-admin'

import { markingData, collegeData } from '@/static-data/data'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	// console.log({ req })
	const { tenthScore, twelfthScore, twelfthStream, gradStream, gradScore, workExp } = req.body
	// console.log({ tenthScore, twelfthScore, twelfthStream, gradStream, gradScore, workExp })

	const AWARDED_10th = markingData.tenth.find(data => (data.max >= tenthScore && data.min <= tenthScore))?.marks as number
	const AWARDED_12th = markingData.twelfth.find(data => (data.stream === twelfthStream && data.max >= twelfthScore && data.min <= twelfthScore))?.marks as number
	const AWARDED_GRAD = markingData.grad.find(data => (data.stream === gradStream && data.max >= gradScore && data.min <= gradScore))?.marks as number
	const AWARDED_WORKEX = markingData.workExp.find(data => (data.max >= workExp && data.min <= workExp))?.marks as number

	const results = collegeData.map((data) => {
		const {
			workEx,
			tenth,
			twelfth,
			graduation,
		} = data.givenWeightage

		const acceptancePercentage = Math.ceil((workEx * AWARDED_WORKEX + tenth * AWARDED_10th + twelfth * AWARDED_12th + graduation * AWARDED_GRAD) / 10)

		return { ...data, acceptancePercentage }
	})

	// console.log({
	// 	AWARDED_10th,
	// 	AWARDED_12th,
	// 	AWARDED_GRAD,
	// 	AWARDED_WORKEX,
	// 	results
	// })

	res.status(200).json({ results })
}

export default handler
