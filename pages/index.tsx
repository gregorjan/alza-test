import Head from 'next/head'
import { FC, createContext } from 'react'
import { GetServerSideProps } from 'next'
import { useQuery } from 'react-query'
import { getProducts, getProductsApi } from '@api'
import { Data } from '@types'
import { BestSellers, Categories, List } from '@sections'

type Props = {
  initialData: Data
}

const Context = createContext<{ data?: Data }>({})

const Home: FC<Props> = ({ initialData }) => {
  const { data } = useQuery('products', getProducts, {
    initialData,
  })

  return (
    <Context.Provider value={{ data }}>
      <Head>
        <title>Alza test</title>
        <link rel="icon" href="/favicon-alza.ico" />
      </Head>

      <main>
        <Categories />
        <BestSellers />
        <List />
      </main>
    </Context.Provider>
  )
}

const getServerSideProps: GetServerSideProps = async () => {
  const initialData = (await getProductsApi()) as Data
  return { props: { initialData } }
}

export { getServerSideProps, Context }

export default Home
