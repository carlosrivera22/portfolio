import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Cell from './Cell';

const board = Array(30).fill(0).map(row => new Array(30).fill(0))
const head = [15,5];
const tail = [head[0], head[1]-1]

export default function Board() {
    const [snake, setSnake] = React.useState([head, tail]);
    let interval: string | number | NodeJS.Timer | undefined;
    let direction = '';

    const moveRight = () => {
        if(snake[0][1] >= 29){
            clearInterval(interval);
            setSnake([head, tail])
            alert("Game over");
            return;
        }
        snake.pop()
        snake.unshift([snake[0][0],snake[0][1]+1])
        setSnake([...snake])
    }

    const moveLeft = () => {
        snake.pop()
        snake.unshift([snake[0][0],snake[0][1]-1])
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
        window.addEventListener('keydown', keyDown);
    },[]);


    function keyDown(e: { preventDefault: () => void; key: string; }){
        e.preventDefault();
        if(e.key === 'ArrowDown' && direction !== 'up'){
            clearInterval(interval);
            direction ='down';
            interval = setInterval(moveDown,300);
        }else if(e.key === 'ArrowUp' && direction !== 'down'){
            clearInterval(interval);
            direction = 'up';
            interval = setInterval(moveUp,300);
        }else if(e.key === 'ArrowRight' && direction !== 'left'){
            clearInterval(interval);
            direction = 'right';
            interval = setInterval(moveRight,300);
        }else if(e.key === 'ArrowLeft' && direction !== 'right'){
            clearInterval(interval);
            direction = 'left';
            interval = setInterval(moveLeft,300)
        }
    }

    return (
        <div>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
            {board.map((items, row) => {
                return (
                    <Grid key={`Row-${row}`} container item spacing={0} justifyContent='center' >
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
        </div>
    );
}