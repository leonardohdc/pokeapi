import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { BaseStats } from '../../helpers/class/BaseStats';

interface PokemonStats {
    baseStats: BaseStats;
}

const BaseStatsCard: React.FC<PokemonStats> = ({ baseStats }) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    BASE STATS
                </Typography>
                <Typography sx={{ textAlign: 'left', paddingLeft:3 }} variant="body1">
                    HP: {baseStats.hp}
                    <br />
                    ATTACK: {baseStats.attack}
                    <br />
                    SPECIAL ATTACK: {baseStats.specialAttack}
                    <br />
                    DEFENSE: {baseStats.defense}
                    <br />
                    SPECIAL DEFENSE: {baseStats.specialDefense}
                    <br />
                    SPEED: {baseStats.speed}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default BaseStatsCard;