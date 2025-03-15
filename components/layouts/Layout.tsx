import Head from 'next/head';
import React from 'react';
import { Navbar } from '../ui';
interface Props {
  children: React.ReactNode;
  title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemosn App'}</title>
        <meta name='author' content='Almir Garcia' />
        <meta name='description' content={`informacon del pokemon ${title}}`} />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />

        <meta property='og:title' content={`Information about ${title}`} />
        <meta property='og:description' content={`this is the page about p ${title}`} />
        <meta property='og:image' content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />

      <main style={{ padding: '0px 20px' }}>{children}</main>
    </>
  );
};
