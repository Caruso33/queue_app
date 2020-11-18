import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core"
import React from "react"
import StoreProvider from "state/app"
import { graphqlUrl } from "utils/constants"
import theme from "../theme"

const client = new ApolloClient({
  uri: graphqlUrl,
  cache: new InMemoryCache(),
  credentials: "include",
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <ColorModeProvider value="dark">
          <CSSReset />
          <StoreProvider>
            <Component {...pageProps} />
          </StoreProvider>
        </ColorModeProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
