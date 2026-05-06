import { useState } from "react";
import Board from "./Board";
import { SquareValue, History } from './types'; // Importamos SquareValue y History

export default function Game() {
    
    const [history, setHistory] = useState<History>([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState<number>(0);
    const xIsNext: boolean = currentMove % 2 === 0;
    const currentSquares: SquareValue[] = history[currentMove];
    
    function handlePlay(nextSquares: SquareValue[]) {
        const nextHistory: History = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }
    
    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove);
    }
    
    const moves = history.map((squares: SquareValue[], move: number) => {
        let description: string;
        if (move > 0) {
            description = 'Ir al movimiento #' + move;
        } else {
            description = 'Ir al inicio del juego';
        }
        
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })
    
    return (
        <div className="game">
            <div className={"game-board"}>
                <Board 
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
            </div>
            <div className={"game-info"}>
                <ol>
                    {moves}
                </ol>
            </div>
        </div>
    )
}
