import { Link, Spacer, Text, useTheme } from '@nextui-org/react';
import NextLink from 'next/link';
import React from 'react';
import Image from 'next/image';

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'start',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        alt='Icono de la app'
        width={70}
        height={70}
      />
      <NextLink href='/' passHref>
        <Link>
          <Text color='white' h2>
            P
          </Text>
          <Text color='white' h3>
            okemon
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href='/favorites' passHref>
        <Link css={{ marginRight: '10px' }}>
          <Text color='white'>Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  );
};
