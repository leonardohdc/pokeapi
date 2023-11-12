import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PokemonAbility } from '../../helpers/class/PokemonAbility';

interface PokemonAbilities {
  pokemonAbilities: PokemonAbility[];
}

const PokemonAbilitiesCard: React.FC<PokemonAbilities> = ({ pokemonAbilities }) => {
  return (
    <Box sx={{ maxWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            ABILITIES
          </Typography>
          {pokemonAbilities.map((ability, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
              >
                <Typography>{ability.abilityName}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{ability.description}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default PokemonAbilitiesCard;