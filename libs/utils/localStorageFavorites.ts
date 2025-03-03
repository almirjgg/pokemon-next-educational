const FAVORITE_POKEMONS_KEY = 'favoritePokemons';

const getFavoritePokemons = (): number[] => {
  const storedFavorites = localStorage.getItem(FAVORITE_POKEMONS_KEY);
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const saveFavoritePokemons = (favoritePokemons: number[]): void => {
  localStorage.setItem(FAVORITE_POKEMONS_KEY, JSON.stringify(favoritePokemons));
};

const toggleFavorite = (id: number): void => {
  const favoritePokemons = getFavoritePokemons();
  const isFavorite = favoritePokemons.includes(id);
  const updatedFavorites = isFavorite
    ? favoritePokemons.filter(pokeId => pokeId !== id)
    : [...favoritePokemons, id];
  saveFavoritePokemons(updatedFavorites);
};

const existsInFavorites = (id: number): boolean => {
  if (typeof window === 'undefined') return false;
  return getFavoritePokemons().includes(id);
};

const localPokemons = (): number[] => {
  return getFavoritePokemons();
};

export default { toggleFavorite, existsInFavorites, localPokemons };
