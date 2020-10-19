import Head from 'next/head'
import { FC, createContext } from 'react'
import { GetStaticProps } from 'next'
// import { useQuery } from 'react-query'
// TODO figure where to get categories
// eslint-disable-next-line import/extensions
import links from '../mocks/links.json'
import { getProductsApi } from '@api'
import { Data } from '@types'
import { BestSellers, Categories, List } from '@sections'

type Props = {
  initialData: Data
}

const Context = createContext<{ data?: Data }>({})

const Home: FC<Props> = ({ initialData }) => {
  // const { data } = useQuery('products', getProducts, {
  //   initialData,
  // })

  return (
    <Context.Provider value={{ data: initialData }}>
      <Head>
        <title>Alza test</title>
        <link rel="icon" href="/favicon-alza.ico" />
      </Head>

      <main>
        {/* TODO figure where to get categories */}
        <Categories links={(links as any).data} />
        <BestSellers />
        <List />
      </main>
    </Context.Provider>
  )
}

const getStaticProps: GetStaticProps = async () => {
  const initialData = (await getProductsApi()) as Data
  return { props: { initialData } }
}

export { getStaticProps, Context }

export default Home
