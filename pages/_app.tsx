import {AppProps} from "next/app";
import { Amplify } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import AuthZone from "../components/layout/AuthZone";
import {ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";

Amplify.configure({...awsconfig, ssr: true});
const theme = createTheme();

export default function App({Component, pageProps}: AppProps) {
  return (
      <ThemeProvider theme={theme}>
        <AuthZone>
          <Component {...pageProps}/>
        </AuthZone>
      </ThemeProvider>
  );
}