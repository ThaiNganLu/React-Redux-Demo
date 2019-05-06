import { Board } from "./Board";
import React from 'react';

export class Game extends React.Component {
    render() {
        const player = 'Player: Ngan Lu';
        return (
            // <h5>{player}</h5>
            <Board />
        );
    }
}