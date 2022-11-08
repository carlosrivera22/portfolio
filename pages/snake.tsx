import Board from '../components/SnakeGameComponents/Board';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

export default function SnakeGame(){
    return (
        <Box mt={20} mb={20}>
            <Board/>  
        </Box> 
    )
};