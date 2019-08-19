import React from "react";
import App, { Container } from "next/app";

import AppWithRedux from "../lib/with-redux-store";
import { Provider } from "react-redux";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    const { req, reduxStore } = ctx;
    const isServer = !!req;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps
    };
  }

  render() {
    const { Component, reduxStore, pageProps } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <Component
            {...pageProps}
          />
        </Provider>
      </Container>
    );
  }
}

export default AppWithRedux(MyApp);
