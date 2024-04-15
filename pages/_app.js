import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';

import '../styles/globals.css';
import { NavBar } from '../components';
import { FooterBanner } from '../components';
import { StateContext } from '../context/stateContext';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Check if the current path is "Login" or "/"
  const isIndexPage = router.pathname === '/Login' || router.pathname === '/';

  return (
    <>
      <StateContext>
        <Toaster />
        {/* Render NavBar and FooterBanner only if not on "Login" or "/" page */}
        {!isIndexPage && <NavBar />}   
        <Component {...pageProps} />
        {!isIndexPage && <FooterBanner />}
      </StateContext>
    </>
  );
}

export default MyApp;
