import '@/styles/global.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import React from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Banner />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
