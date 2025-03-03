import { Layout } from '../../components/layouts';
import type { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { SinglePokemon } from '../../interfaces';
import { pokeApi } from '../../api';
import { Button, Card, Container, Grid, Image, Row, Text } from '@nextui-org/react';
import { localStorageFavorites } from '../../libs/utils';
import { useState } from 'react';

interface Props {
  pokemon: SinglePokemon;
}
const PokenmonPage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(
    localStorageFavorites.existsInFavorites(pokemon.id),
  );
  const onToggleFavorite = () => {
    localStorageFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);
  };
  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                width='100%'
                height={200}
                alt={pokemon.name}
              />
            </Card.Body>
            <Card.Footer>
              <Row justify='space-between'>{pokemon.name} </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text transform='capitalize' h1>
                {pokemon.name}
              </Text>
              <Button color='gradient' ghost={!isInFavorites} onClick={onToggleFavorite}>
                {isInFavorites ? 'En favoritos' : 'Guardar en favoritos'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction='row' display='flex' gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async ctx => {
  const pokemos151 = [...Array(151)].map((_, index) => `${index + 1}`);

  return {
    paths: pokemos151.map(id => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data } = await pokeApi.get<SinglePokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokenmonPage;
