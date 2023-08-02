import { Amplify } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import AuthZone from "../components/layout/AuthZone";
import {ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {AppProps} from "next/app";

Amplify.configure(awsconfig);

const theme = createTheme();

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthZone>
          <Component {...pageProps}/>
        </AuthZone>
      </ThemeProvider>
    </>
  );
}