import { BaseStats } from "../../../helpers/class/BaseStats";
import StatBarContainer from "./StatBar.styles";

interface PokemonStatBar {
  stat: number;
}

const StatBar: React.FC<PokemonStatBar> = ({ stat }) => {
    //TODO - stat não está chegando como numero
  const componentsArray = new Array(5).fill(null);

  return (
    <StatBarContainer>
      {componentsArray.map((_, index) => (
        <div className="rectangle"></div>
      ))}
    </StatBarContainer>
  );
};

export default StatBar;
