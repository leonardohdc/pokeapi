import React from "react";
import { PokemonAbility } from "../../helpers/class/PokemonAbility";
import { BasicInfo } from "../../helpers/class/BasicInfo";
import PokemonAbilitiesCard from "./components/PokemonAbilitiesCard";
import BaseStatsCard from "./components/BaseStatsCard";
import BasicInfoCard from "./components/BasicInfoCard";
import { PokemonInfoContainer } from "./PokemonInfo.styles";
import { BaseStats } from "../../helpers/class/BaseStats";
import { usePokemonContext } from "../../lib/contexts/PokemonContext";
import { Grid } from "@mui/material";

interface PokemonStats {
  pokemonAbilities: PokemonAbility[];
}

const PokemonStats: React.FC<PokemonStats> = ({ pokemonAbilities }) => {
  const { pokemon, isLoadingPokemon } = usePokemonContext();

  function getStat(stats: string) {
    return pokemon!.stats.find((stat) => stat.stat.name === stats)!.base_stat;
  }

  let baseStats: BaseStats = {};
  let basicInfo: BasicInfo = {};

  if (pokemon) {
    baseStats = {
      hp: getStat("hp"),
      attack: getStat("attack"),
      specialAttack: getStat("special-attack"),
      defense: getStat("defense"),
      specialDefense: getStat("special-defense"),
      speed: getStat("speed"),
    };

    basicInfo = {
      height: pokemon.height,
      weight: pokemon.weight,
    };
  }

  return (
    <PokemonInfoContainer>
      <BaseStatsCard baseStats={baseStats}></BaseStatsCard>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <PokemonAbilitiesCard
            pokemonAbilities={pokemonAbilities}
          ></PokemonAbilitiesCard>
        </Grid>
        <Grid item xs={6}>
          <BasicInfoCard basicInfo={basicInfo}></BasicInfoCard>
        </Grid>
      </Grid>
    </PokemonInfoContainer>
  );
};

export default PokemonStats;
