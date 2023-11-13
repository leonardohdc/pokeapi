import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { pokeapiService } from "../../lib/services/pokeapi.service";
import { usePokemonContext } from "../../lib/contexts/PokemonContext";

export default function SearchBar() {
  const { data, isLoading } = pokeapiService.useGetAllPokemons();
  const { setCurrentPokemon } = usePokemonContext();

  return (
    <Autocomplete
      disablePortal
      loading={isLoading}
      options={data?.results ?? []}
      onChange={(_, value, reason) => {
        if (reason === "selectOption") {
          setCurrentPokemon(value?.name ?? '')
        }
      }}
      getOptionLabel={(option) => option.name}
      filterOptions={(options, state) => {
        return options.filter(option => {
          return option.name.includes(state.inputValue.toLowerCase());
        });
      }}
      sx={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} label="Pokemon" />}
    />
  );
}
