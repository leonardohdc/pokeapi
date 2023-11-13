import React from 'react';
import { TypeBox } from './PokemonTypeStyle';
import './PokemonType.css'
import { colorDictionary } from '../../lib/utils/colorDictionary';

interface Types {
  types: string[];
}

const PokemonType: React.FC<Types> = ({ types }) => {
    return (
      <div className='type-box'>
        {types.map((type, index) => (
          <TypeBox key={type} text={type.toUpperCase()} backgroundColor={colorDictionary[type]}></TypeBox>
        ))}
      </div>
    );
};

export default PokemonType;