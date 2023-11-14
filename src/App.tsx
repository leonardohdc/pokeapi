import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import PokemonSprite from "./components/PokemonSprite/PokemonSprite";
import PokemonType from "./components/PokemonType/PokemonType";
import PokemonStats from "./components/PokemonInfo/PokemonInfo";
import { BaseStats } from "./helpers/class/BaseStats";
import { BasicInfo } from "./helpers/class/BasicInfo";
import { PokemonAbility } from "./helpers/class/PokemonAbility";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./lib/services/queryClient";
import { PokemonContextProvider } from "./lib/contexts/PokemonContext";

function App() {
  const basicInfo = new BasicInfo(1, 1);
  const pokemonAbilities: PokemonAbility[] = [
    {
      abilityName: "run-away",
      description:
        "This Pokémon is always successful fleeing from wild battles, even if trapped by a move or ability.",
    },
    new PokemonAbility(
      "quick-feet",
      "Whenever this Pokémon has a major status ailment, it has 1.5× its Speed.  This Pokémon is not affected by the usual Speed cut from paralysis.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is halved."
    ),
    new PokemonAbility(
      "rattled",
      "This Pokémon's Speed rises one stage with each hit from a damaging dark-, ghost-, or bug-type move."
    ),
  ];

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <PokemonContextProvider>
        <div className="App">
          <div className="App-Container">
            <SearchBar></SearchBar>
            <PokemonSprite></PokemonSprite>
            <PokemonType />
            <PokemonStats
              pokemonAbilities={pokemonAbilities}
            ></PokemonStats>
          </div>
        </div>
        </PokemonContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
