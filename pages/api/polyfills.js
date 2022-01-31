import polyfillLib from 'polyfill-library'

export default async function handler(
  /** @type {import('next').NextApiRequest} */ req,
  /** @type {import('next').NextApiResponse} */ res
) {
  const polyfill = await polyfillLib.getPolyfillString({
    uaString: req.headers['user-agent'],
  })
  res.setHeader('Vary', 'User-Agent')
  res.setHeader('Cache-Control', 'public, max-age=31536000')
  res.write(polyfill)
  res.end()
}
