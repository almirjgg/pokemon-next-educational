import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
  pokemons: number[];
}

export const FavoritesPokemons: React.FC<Props> = ({ pokemons }) => {
  const router = useRouter();
  const onFavoriteClick = (id: number) => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {pokemons.map(id => (
        <Grid xs={6} sm={3} md={2} xl={1} key={id} onClick={() => onFavoriteClick(id)}>
          <Card hoverable clickable>
            <Card.Body css={{ padding: 10 }}>
              <Card.Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                width='100%'
                height={140}
              />
            </Card.Body>
            <Card.Footer>
              <Row justify='space-between'>
                <Text transform='capitalize'># {id}</Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};
