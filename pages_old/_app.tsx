import { Amplify } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
Amplify.configure(awsconfig);
import AuthZone from "../components/layout/AuthZone";
import {ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";


const theme = createTheme();

export default function App({Component, pageProps}) {
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