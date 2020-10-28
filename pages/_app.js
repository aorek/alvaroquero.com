import {
  ThemeProvider,
  CSSReset,
  theme,
  ColorModeProvider,
} from "@chakra-ui/core"

import "../styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </>
  )
}
