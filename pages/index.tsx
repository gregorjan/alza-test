import Head from 'next/head'
import { FC } from 'react'
import { BestSellers, Categories, List } from '@sections'

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>Alza test</title>
        <link rel="icon" href="/favicon-alza.ico" />
      </Head>

      <main>
        <BestSellers />
        <Categories />
        <List />
      </main>
    </div>
  )
}

export default Home
