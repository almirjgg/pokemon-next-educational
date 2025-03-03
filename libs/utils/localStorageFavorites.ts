const toggleFavorite = (id: number): void => {
  const favoritePokemonsKey = 'favoritePokemons';
  const storedFavorites = localStorage.getItem(favoritePokemonsKey);
  const favoritePokemons: number[] = storedFavorites ? JSON.parse(storedFavorites) : [];

  const updatedFavorites = favoritePokemons.includes(id)
    ? favoritePokemons.filter(pokeId => pokeId !== id)
    : [...favoritePokemons, id];

  localStorage.setItem(favoritePokemonsKey, JSON.stringify(updatedFavorites));
};

const existsInFavorites = (id: number): boolean => {
  if (typeof window === 'undefined') return false;
  const favoritePokemonsKey = 'favoritePokemons';
  const storedFavorites = localStorage.getItem(favoritePokemonsKey);
  const favoritePokemons: number[] = storedFavorites ? JSON.parse(storedFavorites) : [];
  return favoritePokemons.includes(id);
};

export default { toggleFavorite, existsInFavorites };
