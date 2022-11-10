import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Cell from './Cell';

const board = Array(30).fill(0).map(row => new Array(30).fill(0))
const head = [15,5];
const tail = [head[0], head[1]-1]

export default function Board() {
    const [snake, setSnake] = React.useState([head, tail]);
    const [direction, setDirection] = React.useState('');
    const [keyPressed, setKeyPressed] = React.useState('');

    const moveSnake = (direction: string) => {
        if(direction === 'ArrowUp'){
            moveUp();
        }else if(direction === 'ArrowDown'){
            moveDown();
        }else if(direction === 'ArrowRight'){
            moveRight();
        }else if(direction === 'ArrowLeft'){
            moveLeft();
        }
    }
    const endGame = () => {
        setDirection('');
        setSnake([head, tail]);
        alert("Game over");
        return;
    }

    const moveRight = () => {
        snake.pop();
        snake.unshift([snake[0][0],snake[0][1]+1]);
        if(snake[0][1] > 29){
            endGame()
            return;
        }
        setSnake([...snake]);
    }

    const moveLeft = () => {
        snake.pop();
        snake.unshift([snake[0][0],snake[0][1]-1]);
        if(snake[0][1] < 0){
            endGame();
            return;
        }
        setSnake([...snake]);
    }

    const moveDown = () => {
        snake.pop();
        snake.unshift([snake[0][0]+1,snake[0][1]]);
        if(snake[0][0] > 29){
            endGame();
            return;
        }
        setSnake([...snake]);
    }

    const moveUp = () => {
        snake.pop()
        snake.unshift([snake[0][0]-1,snake[0][1]])
        if(snake[0][0] < 0){
            endGame();
            return;
        }
        setSnake([...snake]);
    }


    React.useEffect(() => {
        if(direction && direction === keyPressed){
            const interval = setInterval(() => moveSnake(direction));
            return () => clearInterval(interval);
        }else{
            window.addEventListener('keydown', keyDown);
        }
    }, [direction, keyPressed]);

    React.useEffect(() => {
        if(!direction && keyPressed){
            setDirection(keyPressed);
        }else{
            if(
                (direction === 'ArrowRight' && keyPressed !== 'ArrowLeft') ||
                (direction === 'ArrowLeft' && keyPressed !== 'ArrowRight') || 
                (direction === 'ArrowDown' && keyPressed !== 'ArrowUp') ||
                (direction === 'ArrowUp' && keyPressed !== 'ArrowDown')
            ){
                setDirection(keyPressed);
            }
        }
    }, [keyPressed]);


    function keyDown(e: { preventDefault: () => void; key: string; }){
        e.preventDefault();
        setKeyPressed(e.key);
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