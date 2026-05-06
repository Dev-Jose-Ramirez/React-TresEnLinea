import Square from "./Square";
import calculateWinner from "./CalculateWinner";
import { SquareValue } from './types'; // Importamos SquareValue

interface BoardProps {
    xIsNext: boolean;
    squares: SquareValue[];
    onPlay: (nextSquares: SquareValue[]) => void;
}

export default function Board({ xIsNext, squares, onPlay }: BoardProps) {

    function handleClick(i: number) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O";
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status: string;
    if (winner) {
        status = "Ganador: " + winner;
    } else {
        status = "Siguiente jugador: " + (xIsNext ? "X" : "O");
    }

    return (
        <>
            <div className={"status"}>{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    );
}
