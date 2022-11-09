import * as React from 'react';
import Card from '@mui/material/Card';
import { Box } from '@mui/material';

export default function Score({score}:{score: number}) {
  return (
    <Card sx={{ width: 200 }} style={{ border: "3px solid #f3e700", borderRadius: 1 }}>
        <Box ml={1}>
            <b>Score: {score}</b>
        </Box>
    </Card>
  );
}