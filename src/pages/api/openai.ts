import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const completion = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt: `The CSS code for a color like ${req.body.text}:\n\nbackground-color: #`,
		temperature: 0,
		max_tokens: 64,
		top_p: 1.0,
		frequency_penalty: 0.0,
		presence_penalty: 0.0,
		stop: [';'],
	})
	res.status(200).json({ result: completion.data })
}
