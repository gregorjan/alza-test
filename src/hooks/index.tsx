import { useContext } from 'react'
import { Context } from '@pages'
import { Data } from '@types'

export const useData = (): Data | undefined => {
  const data = useContext(Context)
  return data.data
}
