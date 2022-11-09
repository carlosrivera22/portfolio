import React, { useEffect } from 'react';
import { useState } from "react";
import Board from "./Board";
import Score from "./Score";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

export default function Game(){
    const [score, setScore] = useState(0);
    const [active, setActive] = useState(false);

    
    return (
        <div>
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
            <Button variant="contained" onClick={() => setActive(true)}>Start Game</Button>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" mb={5}>
            <Score score={score}/>
        </Box>
        <Board active={active}/>
        </div>
    )
}