import { AppProps } from 'next/app';
import Head from 'next/head';
import '../tailwind.css';

import { Header } from '../sections/header/header.section';
import { Footer } from '../sections/footer/footer.section';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Catalog Profesii!</title>
      </Head>
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default CustomApp;
