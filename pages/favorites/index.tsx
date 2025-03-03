import { Layout } from '../../components/layouts';
import { NoFavorites, FavoritesPokemons } from '../../components/ui';
import { useEffect, useState } from 'react';
import { localStorageFavorites } from '../../libs/utils';

const Favorites = () => {
  const [favoritesPokemons, setfavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritesPokemons(localStorageFavorites.localPokemons());
  }, []);

  return (
    <Layout title='Favorites'>
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemons pokemons={favoritesPokemons} />
      )}
    </Layout>
  );
};

export default Favorites;
