import StatBarContainer from "./StatBar.styles";

interface PokemonStatBar {
  stat: number;
}

const StatBar: React.FC<PokemonStatBar> = ({ stat }) => {
  if (isNaN(stat) || stat <= 0) {
    return <div>Stat inválido</div>;
  }

  const componentsArray = new Array(stat).fill(null);

  return (
    <StatBarContainer>
      {componentsArray.map((_, index: number) => (
        <div key={index} className="rectangle"></div>
      ))}
    </StatBarContainer>
  );
};

export default StatBar;
