import React from 'react';
import { TypeBox } from './PokemonTypeStyle';
import './PokemonType.css'
import { colorDictionary } from './ColorType';

interface Types {
  types: string[];
}

const PokemonType: React.FC<Types> = ({ types }) => {
    return (
      <div className='type-box'>
        {types.map((type, index) => (
          <TypeBox text={type.toUpperCase()} backgroundColor={colorDictionary[type]}></TypeBox>
        ))}
      </div>
    );
};

export default PokemonType;