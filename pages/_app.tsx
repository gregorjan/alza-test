import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import { FC } from 'react'
import { theme, GlobalStyle } from '@style'

const queryCache = new QueryCache()

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </ReactQueryCacheProvider>
  )
}

export default MyApp
