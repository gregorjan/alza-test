import { useContext } from 'react'
import { Context } from '@pages'
import { Item } from '@types'

export const useData = (index: number): Item[] | undefined => {
  const { data } = useContext(Context)
  return data?.[index].data
}
