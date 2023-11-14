import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { BaseStats } from "../../../helpers/class/BaseStats";
import { Chip, Stack } from "@mui/material";
import "./BaseStatsCard.css";
import {
  GiShield,
  GiBroadsword,
  GiWizardStaff,
  GiMagicShield,
  GiWingfoot,
  GiHealthNormal,
} from "react-icons/gi";
import StatBar from "./StatBar";

interface PokemonStats {
  baseStats: BaseStats;
}

const BaseStatsCard: React.FC<PokemonStats> = ({ baseStats }) => {
  return (
    <Card variant="outlined" elevation={2} sx={{ width: '100%' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          BASE STATS
        </Typography>
        <div>
          <div className="spacing">
            <Stack direction="row" spacing={1}>
              <Chip label={<GiHealthNormal></GiHealthNormal>} />
              <StatBar stat={Math.round(baseStats.hp!/10)}></StatBar>
            </Stack>
          </div>
          <div className="spacing">
            <Stack direction="row" spacing={1}>
              <Chip label={<GiBroadsword></GiBroadsword>} />
              <StatBar stat={Math.round(baseStats.attack!/10)}></StatBar>
            </Stack>
          </div>
          <div className="spacing">
            <Stack direction="row" spacing={1}>
              <Chip label={<GiWizardStaff></GiWizardStaff>} />
              <StatBar stat={Math.round(baseStats.specialAttack!/10)}></StatBar>
            </Stack>
          </div>
          <div className="spacing">
            <Stack direction="row" spacing={1}>
              <Chip label={<GiShield></GiShield>} />
              <StatBar stat={Math.round(baseStats.specialDefense!/10)}></StatBar>
            </Stack>
          </div>
          <div className="spacing">
            <Stack direction="row" spacing={1}>
              <Chip label={<GiMagicShield></GiMagicShield>} />
              <StatBar stat={Math.round(baseStats.speed!/10)}></StatBar>
            </Stack>
          </div>
          <div className="spacing">
            <Stack direction="row" spacing={1}>
              <Chip label={<GiWingfoot></GiWingfoot>} />
              <StatBar stat={Math.round(baseStats.hp!/10)}></StatBar>
            </Stack>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BaseStatsCard;
