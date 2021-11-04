import { AppProps } from 'next/app';
import Head from 'next/head';
import '../tailwind.css';

import { Header } from '../sections/header/header.section';
import { Footer } from '../sections/footer/footer.section';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Catalog Profesii!</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-100 shadow-inner">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default CustomApp;
