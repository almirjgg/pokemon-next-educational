import { pokeApi } from '../../api';
import { SinglePokemon } from '../../interfaces';

export const getPokemonInfo = async (nameOrId: string) => {
  const { data } = await pokeApi.get<SinglePokemon>(`/pokemon/${nameOrId}`);
  const { id, name, sprites } = data;

  return {
    id,
    name,
    sprites,
  };
};
