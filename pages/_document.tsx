/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

interface Props {
  styleTags: ReturnType<ServerStyleSheet['getStyleElement']>
}

export default class MyDocument extends Document<Props> {
  static async getInitialProps({ renderPage }: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const page = await renderPage((App) => (props) => {
      return sheet.collectStyles(<App {...props} />)
    })
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <Html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
