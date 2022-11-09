import * as React from 'react';
import { Box } from '@mui/system';
import Game from '../components/SnakeGameComponents/Game';

export default function SnakeGame(){
    return (
        <Box mt={20} mb={20}>
            <Game/>  
        </Box> 
    )
}