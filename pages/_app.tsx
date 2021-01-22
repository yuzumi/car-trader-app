
import axios from 'axios';
import App from 'next/app';
import Head from 'next/head'
import { SWRConfig } from 'swr';
import { ThemeProvider } from '@material-ui/core/styles';
import { Box, Container, CssBaseline } from '@material-ui/core';

import theme from 'theme';
import Navbar from 'components/navbar';

axios.defaults.baseURL = 'http://localhost:8080';

const fetcher = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export default class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    jssStyles && jssStyles.parentElement!.removeChild(jssStyles);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Car Trader App</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <SWRConfig value={{ fetcher }}>
            <Container maxWidth={false}>
              <Box marginTop={2}>
                <Component {...pageProps} />
              </Box>
            </Container>
          </SWRConfig>
        </ThemeProvider>
      </>
    );
  }
}