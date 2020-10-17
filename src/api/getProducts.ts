import { postData } from './postData'
import { Data } from '@types'

/* eslint-disable id-length */
const params = {
  filterParameters: {
    id: 18855843,
    isInStockOnly: false,
    newsOnly: false,
    wearType: 0,
    orderBy: 0,
    page: 1,
    params: {
      tId: 0,
      v: [],
    },
    producers: [],
    sendPrices: true,
    type: 'action',
    typeId: '',
    branchId: '',
  },
}

const getProductsApi = (): Promise<Data> =>
  postData('https://www.alza.cz/Services/RestService.svc/v2/products', params)

const getProducts = (): Promise<Data> => postData('/api/products', params)

export { getProductsApi, getProducts }
