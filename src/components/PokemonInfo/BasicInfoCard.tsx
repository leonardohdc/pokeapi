import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { BasicInfo } from '../../helpers/class/BasicInfo';

interface PokemonStats {
    basicInfo: BasicInfo;
}

const BasicInfoCard: React.FC<PokemonStats> = ({ basicInfo }) => {
    return (
        <Card sx={{ minWidth: 275, height: 209.89 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    BASIC INFO
                </Typography>
                <Typography sx={{ textAlign: 'left', paddingLeft: 3 }} variant="body1">
                    WEIGHT: {basicInfo.weight}
                    <br />
                    HEIGHT: {basicInfo.height}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default BasicInfoCard;