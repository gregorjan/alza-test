import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

import { ServerStyleSheet } from "styled-components";

interface Props {
  styleTags: ReturnType<ServerStyleSheet["getStyleElement"]>;
}

export default class MyDocument extends Document<Props> {
  // static async getInitialProps({ renderPage }: DocumentContext) {
  //   const sheet = new ServerStyleSheet();
  //   const page = renderPage((App) => (props) => {
  //     return sheet.collectStyles(<App {...props} />);
  //   });
  //   const styleTags = sheet.getStyleElement();
  //   return { ...page, styleTags }
  // }

  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
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
    );
  }
}
