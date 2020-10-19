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

const getProductsApi = (): Promise<Data[]> =>
  Promise.all([
    postData('https://www.alza.cz/Services/RestService.svc/v2/products', {
      ...params,
      filterParameters: { ...params.filterParameters, page: 1 },
    }),
    postData('https://www.alza.cz/Services/RestService.svc/v2/products', {
      ...params,
      filterParameters: { ...params.filterParameters, page: 2 },
    }),
    postData('https://www.alza.cz/Services/RestService.svc/v2/products', {
      ...params,
      filterParameters: { ...params.filterParameters, page: 3 },
    }),
    postData('https://www.alza.cz/Services/RestService.svc/v2/products', {
      ...params,
      filterParameters: { ...params.filterParameters, page: 4 },
    }),
  ])

const getProducts = (): Promise<Data> => postData('/api/products', params)

export { getProductsApi, getProducts }
