export type PokemonType = {
  id: string;
  name: string;
  sprites: {
    front_default: string;
  };
  abilities: {
      ability: {
        name: string,
        url: string,
      },
      "is_hidden": false,
  }[],
  stats: {
    base_stat: number,
    stat: {
      name: string
    }
  }[],
  types: {
    type: {
      name: string,
    }
  }[],
  weight: number,
  height: number
};
