import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { FC } from 'react'
import { theme } from '@style'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
