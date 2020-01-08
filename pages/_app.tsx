import MyLayout from "../components/MyLayout";
import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <MyLayout>
      <Component {...pageProps} />
    </MyLayout>
  </ThemeProvider>
);

export default MyApp;
