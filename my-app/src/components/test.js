import React, { useState, useEffect } from 'react';
import '../css/test.css';

const boardSize = 4;

const App = () => {
    const [board, setBoard] = useState(Array.from({ length: boardSize }, () => Array(boardSize).fill('')));
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [gameWon, setGameWon] = useState(false);

    useEffect(() => {
        const checkWinner = (row, col) => {
            return checkRow(row) || checkColumn(col) || checkDiagonal1(row, col) || checkDiagonal2(row, col);
        };

        const checkRow = (row) => {
            return board[row].every((cell) => cell === currentPlayer);
        };

        const checkColumn = (col) => {
            return board.every((row) => row[col] === currentPlayer);
        };

        const checkDiagonal1 = (row, col) => {
            if (row !== col) return false;
            return board.every((_, index) => board[index][index] === currentPlayer);
        };

        const checkDiagonal2 = (row, col) => {
            if (row + col !== boardSize - 1) return false;
            return board.every((_, index) => board[index][boardSize - 1 - index] === currentPlayer);
        };

        const onCellClick = (row, col) => {
            if (board[row][col] === '' && !gameWon) {
                const newBoard = [...board];
                newBoard[row][col] = currentPlayer;
                setBoard(newBoard);

                if (checkWinner(row, col)) {
                    setGameWon(true);
                    alert(`Player ${currentPlayer} wins!`);
                } else {
                    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
                }
            }
        };

        // Initialize the board
        const initializeBoard = () => {
            setBoard(Array.from({ length: boardSize }, () => Array(boardSize).fill('')));
            setCurrentPlayer('X');
            setGameWon(false);
        };

        // Render the board
        const renderBoard = () => {
            return (
                <table>
                    <tbody>
                        {board.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, colIndex) => (
                                    <td key={colIndex} onClick={() => onCellClick(rowIndex, colIndex)}>
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            );
        };

        initializeBoard();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameWon]);

    return (
        <div className="App">
            <h2>Caro Game</h2>
            {renderBoard()}
        </div>
    );
};

export default App;
