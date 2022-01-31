# Next.js with [polyfill-library](https://github.com/financial-times/polyfill-library)

1. Install the polyfill-library: `npm install --save polyfill-library`

2. Create a polyfill [API route](https://nextjs.org/docs/api-routes/api-middlewares):

```js
// pages/api/polyfills.js
import polyfillLib from 'polyfill-library'

export default async function handler(req, res) {
  const polyfill = await polyfillLib.getPolyfillString({
    uaString: req.headers['user-agent'],
  })
  res.setHeader('Vary', 'User-Agent')
  res.setHeader('Cache-Control', 'public, max-age=31536000')
  res.write(polyfill)
  res.end()
}
```

3. Deploy 😎 🚀
