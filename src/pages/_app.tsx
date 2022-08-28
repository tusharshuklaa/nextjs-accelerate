/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { FC } from 'react';
import { PageProvider } from '../components/pageProvider';
import '../styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <PageProvider>
    <Component {...pageProps} />
  </PageProvider>
);

export default App;
