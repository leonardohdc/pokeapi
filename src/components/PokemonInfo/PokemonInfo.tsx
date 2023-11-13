import React from 'react';
import { PokemonAbility } from '../../helpers/class/PokemonAbility'; 
import { BasicInfo } from '../../helpers/class/BasicInfo';
import PokemonAbilitiesCard from './components/PokemonAbilitiesCard';
import BaseStatsCard from './components/BaseStatsCard';
import BasicInfoCard from './components/BasicInfoCard';
import { PokemonInfoContainer } from './PokemonInfo.styles';
import { BaseStats } from '../../helpers/class/BaseStats';

interface PokemonStats {
  baseStats: BaseStats;
  basicInfo: BasicInfo;
  pokemonAbilities: PokemonAbility[];
}

const PokemonStats: React.FC<PokemonStats> = ({ baseStats, basicInfo, pokemonAbilities }) => {
    return (
      <PokemonInfoContainer>
        <BaseStatsCard baseStats={baseStats}></BaseStatsCard>
          <BasicInfoCard basicInfo={basicInfo}></BasicInfoCard>
          <PokemonAbilitiesCard pokemonAbilities={pokemonAbilities}></PokemonAbilitiesCard>
      </PokemonInfoContainer>
    );
};

export default PokemonStats;