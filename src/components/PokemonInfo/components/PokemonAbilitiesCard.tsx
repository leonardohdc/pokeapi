import { UseQueryResult, useQueries, UseQueryOptions } from "react-query";
import { axios } from "../../../lib/services/axios";
import { PokemonAbility } from "../../../helpers/class/PokemonAbility";
import { usePokemonContext } from "../../../lib/contexts/PokemonContext";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface AbilityQueryResult {
  data: {
    effect_entries: {
      effect: string;
      language: {
        name: string;
        url: string;
      };
      short_effect: string;
    }[];
    name: string;
  };
}

const PokemonAbilitiesCard = () => {
  const { pokemon, isLoadingPokemon } = usePokemonContext();

  const abilitiesNames =
    pokemon?.abilities.map((ability) => ability.ability) || [];

  const abilityQueries = abilitiesNames.map((name) => ({
    queryKey: ["ability", name.name],
    queryFn: async () => {
      const abilityName = name ? name.name : "limber";
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/ability/${abilityName}`
      );
      return { data };
    },
  }));

  const queries = useQueries(abilityQueries) as UseQueryResult<
    AbilityQueryResult,
    unknown
  >[];

  return (
    <Card
      sx={{ maxWidth: "100%" }}
      style={{ height: "100%" }}
      variant="outlined"
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          ABILITIES
        </Typography>
        {queries.map((ability, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <Typography>{ability.data?.data.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {
                ability.data?.data.effect_entries.find(
                  (entry) => entry.language.name === "en"
                )?.effect
              }
            </AccordionDetails>
          </Accordion>
        ))}
      </CardContent>
    </Card>
  );
};

export default PokemonAbilitiesCard;
