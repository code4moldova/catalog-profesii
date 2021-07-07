import { AppProps } from 'next/app';
import Head from 'next/head';
import '../tailwind.css';

import { Header } from '../sections/header/header.section';
import { Footer } from '../sections/footer/footer.section';
import clsx from 'clsx';

export type MainProps = {
  mainClass?: string;
};

function CustomApp({ Component, pageProps }: AppProps<MainProps>) {
  const { mainClass, ...rest } = pageProps as MainProps;
  return (
    <>
      <Head>
        <title>Catalog Profesii!</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className={clsx('flex-grow', mainClass)}>
          <Component {...rest} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default CustomApp;
