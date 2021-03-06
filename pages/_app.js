import App from 'next/app';
import React from 'react';
import theme from '~/material.config';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from '~/components/layout';
import config from '~/config';


class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Layout title={config.title} linkList={config.linkList}>
            <Component {...pageProps} />
          </Layout>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default MyApp;
