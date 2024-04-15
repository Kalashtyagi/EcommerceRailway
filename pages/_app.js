import React from 'react';
import { Toaster } from 'react-hot-toast';

import '../styles/globals.css';
import { NavBar } from '../components';
import { FooterBanner } from '../components';
import { StateContext } from '../context/stateContext';

function MyApp({ Component, pageProps }) {


  const isIndexPage = Component.name === 'Login' && 'login';
  return (
    <>
      <StateContext>
        <Toaster />
     {!isIndexPage && <NavBar />}   
        <Component {...pageProps} />;
        {!isIndexPage && <FooterBanner />}
      </StateContext>
    </>
  );
}

export default MyApp;
