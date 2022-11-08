import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Cell from './Cell';

const board = Array(40).fill(0).map(row => new Array(40).fill(0))


export default function Board() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={0}>
        {board.map((items, row) => {
            return (
                <Grid container item spacing={0} justifyContent='center'>
                {items.map((subItems, col) => {
                    return (
                        <Grid item xs={0}>
                            <Cell row={row} col={col} cellType="empty"/>
                        </Grid>
                    )
                })}
            </Grid>
            )
        })}
      </Grid>
    </Box>
  );
}