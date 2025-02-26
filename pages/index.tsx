import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Button } from '@nextui-org/react';

const HomePage: NextPage = () => {
  return (
    <>
      <Button color={'gradient'}>Button</Button>
    </>
  );
};

export default HomePage;
