import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { pokeapiService } from "../../lib/services/pokeapi.service";
import { usePokemonContext } from "../../lib/contexts/PokemonContext";

interface Pokemon {
  name: string;
  url: string;
}

export default function SearchBar() {
  const { data, isLoading } = pokeapiService.useGetAllPokemons();
  const { setCurrentPokemon } = usePokemonContext();

  const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Autocomplete
      disablePortal
      loading={isLoading}
      options={data?.results ?? []}
      getOptionLabel={(option: Pokemon) => capitalizeFirstLetter(option.name)}
      onChange={(_, value, reason) => {
        if (reason === "selectOption") {
          setCurrentPokemon(value?.name ?? "");
        }
      }}
      filterOptions={(options: Pokemon[], state: { inputValue: string }) => {
        return options.filter((option) => {
          return option.name
            .toLowerCase()
            .includes(state.inputValue.toLowerCase());
        });
      }}
      sx={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} label="Pokemon" />}
    />
  );
}
