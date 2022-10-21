import type { NextApiRequest, NextApiResponse } from 'next'
import rateLimit from '../../utils/rate-limits'
import axios from 'axios'
import Cors from 'cors'

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ['POST', 'HEAD'],
})

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Run the middleware
  await runMiddleware(req, res, cors)

  try {
    await limiter.check(res, 10, 'CACHE_TOKEN') // 10 requests per minute
  } catch {
    res.status(429).json({ error: 'Rate limit exceeded' })
  }

  const { phone } = req.body
  const response = await axios({
    method: 'POST',
    url: 'https://api.sendinblue.com/v3/smtp/email',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'api-key': 'API_KEY',
    },
    data: JSON.stringify({
      sender: {
        name: 'Lunys',
        email: 'contact@mail.com'
      },
      to: [{ email: 'david.gutierrez@obsidiansoft.io' }],
      htmlContent: `<p>Alguien quiere que le hables, este es su telefóno <strong>${phone}</strong></p>`,
      subject: 'Contacto desde Sitio Web',
    }),
  })

  if (response.status === 200) {
    res.json({ message: 'Ok' })
  } else {
    res.status(response.status).json({ message: response.data })
  }
}