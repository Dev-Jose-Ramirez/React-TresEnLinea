import React from "react";
import { SquareValue } from './types'; // Importamos SquareValue

interface SquareProps {
    value: SquareValue;
    onSquareClick: () => void;
}

export default function Square({ value, onSquareClick }: SquareProps) {
    return (
        <button
            className="square"
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
}
