import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import PokemonSprite from "./components/PokemonSprite/PokemonSprite";
import PokemonType from "./components/PokemonType/PokemonType";
import PokemonStats from "./components/PokemonInfo/PokemonInfo";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./lib/services/queryClient";
import { PokemonContextProvider } from "./lib/contexts/PokemonContext";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <PokemonContextProvider>
          <div className="App">
            <div className="App-Container">
              <SearchBar></SearchBar>
              <PokemonSprite></PokemonSprite>
              <PokemonType />
              <PokemonStats></PokemonStats>
            </div>
          </div>
        </PokemonContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
