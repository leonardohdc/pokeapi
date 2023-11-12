import React from 'react';
import './PokemonInfo.css'
import { BaseStats } from '../../helpers/class/BaseStats';
import { PokemonAbility } from '../../helpers/class/PokemonAbility'; 
import { BasicInfo } from '../../helpers/class/BasicInfo';
import PokemonAbilitiesCard from './PokemonAbilitiesCard';
import BaseStatsCard from './BaseStatsCard';
import BasicInfoCard from './BasicInfoCard';

interface PokemonStats {
  baseStats: BaseStats;
  basicInfo: BasicInfo;
  pokemonAbilities: PokemonAbility[];
}

const PokemonStats: React.FC<PokemonStats> = (props) => {
    return (
      <div className='pokemon-info-box'>
          <BaseStatsCard baseStats={props.baseStats}></BaseStatsCard>
          <BasicInfoCard basicInfo={props.basicInfo}></BasicInfoCard>
          <PokemonAbilitiesCard pokemonAbilities={props.pokemonAbilities}></PokemonAbilitiesCard>
      </div>
    );
};

export default PokemonStats;