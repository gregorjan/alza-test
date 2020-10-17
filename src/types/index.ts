/* eslint-disable no-inline-comments */
/* eslint-disable camelcase */

interface Item {
  canCashBack: boolean
  canChangeQuantity: boolean
  cashBackType: number // enum
  catalog_number: string
  userOwns: boolean
  id: number
  code: string
  img: string
  name: string
  spec: string
  price: string
  cprice: null // ??
  priceWithoutVat: string
  avail: string
  avail_postfix: string
  availLegend: null
  avail_postfix2: null
  avail_color: string
  is_action: boolean
  action_name: string
  rating: number
  promo_cnt: number
  promos: null
  order: number
  is_special_service: boolean
  type: number // enum
  can_buy: boolean
  itemType: string // enum
  orderItemId: null
  maxCanBuy: number
  url: string
  supplierCode: string
  minimumAmount: number
  amountInPack: number
  start_time: null // ??
  end_time: null // ??
  variant_type: number // enum
  advertising: string
  priceNoCurrency: number
  categoryName: null
  inBasket: number
}

interface Data {
  data: Item[]
}

export type { Item, Data }
