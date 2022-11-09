import React, { useEffect } from 'react';
import { useState } from "react";
import Board from "./Board";
import Score from "./Score";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

export default function Game(){
    const [score, setScore] = useState(0);
    
    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center" mb={5}>
                <Score score={score}/>
            </Box>
            <Board/>
        </>
    )
}