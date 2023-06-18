import {
  ApolloProvider,
} from "@apollo/client";
import AuthZone from "../components/layout/AuthZone";
import {ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import client from "../graphql/client";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "../dev";

const theme = createTheme();

export default function App({Component, pageProps}) {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <AuthZone>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
              <Component {...pageProps}/>
            </DevSupport>
          </AuthZone>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}