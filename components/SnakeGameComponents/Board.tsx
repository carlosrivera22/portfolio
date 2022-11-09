import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Cell from './Cell';
import { MoveUpSharp } from '@mui/icons-material';

const board = Array(30).fill(0).map(row => new Array(30).fill(0))
const head = [15,5];
const tail = [head[0], head[1]-1]

export default function Board({ active }: {active: boolean }) {
    const [snake, setSnake] = React.useState([head, tail]);

    const moveRight = () => {
        snake.pop()
        snake.unshift([snake[0][0],snake[0][1]+1])
        setSnake([...snake])
    }

    const moveDown = () => {
        snake.pop()
        snake.unshift([snake[0][0]+1,snake[0][1]])
        setSnake([...snake])
    }

    const moveUp = () => {
        snake.pop()
        snake.unshift([snake[0][0]-1,snake[0][1]])
        setSnake([...snake])
    }

    React.useEffect(() => {
        if(active){
            setInterval(MoveUpSharp)
        }
        return () => {
            console.log('[useEffect] cleanup');
          }
    }, [active]);
    
    return (
        <Box sx={{ flexGrow: 1 }} >
        <Grid container spacing={0}>
            {board.map((items, row) => {
                return (
                    <Grid key={`Row-${row}`} container item spacing={0} justifyContent='center'>
                    {items.map((subItems, col) => {
                        let cellType = 'empty';
                        const currentCell = [row,col];
                        for(const cell in snake){
                            if(snake[cell].toString() === currentCell.toString()){
                                cellType='snake';
                                continue;
                            }
                        }
                        return (
                            <Grid key={`RowCol-[${row}${col}]`} item xs={0}>
                                <Cell row={row} col={col} cellType={cellType}/>
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