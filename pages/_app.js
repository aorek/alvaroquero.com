import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core"

import "../styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
