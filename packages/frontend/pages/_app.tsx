import React from 'react';
// import { AppProps } from 'next/app';
// import Head from 'next/head';
import 'tailwindcss/tailwind.css';
// import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import './styles.css';

// Components
import Header from '../components/head/head.component';

function CustomApp() {
  return (
    <>
      {/* <Head>
        <title>Welcome to frontend!</title>
      </Head>
      <div className="app">
        <header className="flex">
          <NxLogo width="75" height="50" />
          <h1>Welcome to frontend!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div> */}
      <Header />
    </>
  );
}

export default CustomApp;
