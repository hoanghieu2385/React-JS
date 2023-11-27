import { useState } from 'react';
import React from 'react';
import '../css/caro.css';

function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}

function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            </div>
            <div className="board-row">
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            </div>
            <div className="board-row">
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                <Square value={squares[9]} onSquareClick={() => handleClick(9)} />
                <Square value={squares[10]} onSquareClick={() => handleClick(10)} />
                <Square value={squares[11]} onSquareClick={() => handleClick(11)} />
            </div>
            <div className="board-row">
                <Square value={squares[12]} onSquareClick={() => handleClick(12)} />
                <Square value={squares[13]} onSquareClick={() => handleClick(13)} />
                <Square value={squares[14]} onSquareClick={() => handleClick(14)} />
                <Square value={squares[15]} onSquareClick={() => handleClick(15)} />
            </div>
        </>
    );
}

export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
        setXIsNext(nextMove % 2 === 0);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

// function calculateWinner(squares) {
//     const lines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];
//     for (let i = 0; i < lines.length; i++) {
//         const [a, b, c] = lines[i];
//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//             return squares[a];
//         }
//     }
//     return null;
// }



function calculateWinner(board) {
    // Kiểm tra hàng và cột
    for (let i = 0; i < 4; i++) {
        // Kiểm tra hàng
        if ((board[i][0] !== ' ') && (board[i][0] === board[i][1]) && (board[i][1] === board[i][2]) && (board[i][2] === board[i][3])) {
            return board[i][0];  // Trả về ký tự của người chiến thắng ('X' hoặc 'O')
        }

        // Kiểm tra cột
        if ((board[0][i] !== ' ') && (board[0][i] === board[1][i]) && (board[1][i] === board[2][i]) && (board[2][i] === board[3][i])) {
            return board[0][i];  // Trả về ký tự của người chiến thắng ('X' hoặc 'O')
        }
    }

    // Kiểm tra đường chéo chính
    if ((board[0][0] !== ' ') && (board[0][0] === board[1][1]) && (board[1][1] === board[2][2]) && (board[2][2] === board[3][3])) {
        return board[0][0];  // Trả về ký tự của người chiến thắng ('X' hoặc 'O')
    }

    // Kiểm tra đường chéo phụ
    if ((board[0][3] !== ' ') && (board[0][3] === board[1][2]) && (board[1][2] === board[2][1]) && (board[2][1] === board[3][0])) {
        return board[0][3];  // Trả về ký tự của người chiến thắng ('X' hoặc 'O')
    }

    return null;  // Trả về null nếu không có người chiến thắng
}

// Sử dụng hàm checkWinner
const winner = checkWinner([
    ['X', 'O', ' ', ' '],
    ['X', 'X', 'O', 'O'],
    [' ', 'O', 'X', ' '],
    [' ', 'X', 'O', 'X']
]);

if (winner) {
    console.log(`Người chiến thắng là ${winner}`);
} else {
    console.log("Không có người chiến thắng");
}

