/* eslint-disable id-length */

import { NextApiRequest, NextApiResponse } from 'next'
import { getProductsApi } from '@api'

const products = (_req: NextApiRequest, res: NextApiResponse): void => {
  getProductsApi()
    .then((response) => {
      res.statusCode = 200
      res.json(response)
    })
    // eslint-disable-next-line no-console
    .catch((err) => console.error(err))
}

const config = {
  api: {
    externalResolver: true,
  },
}

export { config }

export default products
