import { AppProps } from 'next/app';
import Head from 'next/head';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import possibleTypes from '../generated/possible-types';
import '../tailwind.css';
import { Header } from '../sections/header/header.section';
import { Footer } from '../sections/footer/footer.section';

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const environment = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT;
const token = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${space}/environments/${environment}`,
  headers: { Authorization: `Bearer ${token}` },
  cache: new InMemoryCache({ ...possibleTypes }),
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default CustomApp;
