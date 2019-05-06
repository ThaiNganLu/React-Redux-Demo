import { Square } from "./Square";
import React from 'react';
import './Board.scss';


export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        };
    }
    render() {
        return (
            <div className="board">{
                this.state.squares.map(item => {
                    return <Square value={item.toString()} key={item} />;
                })
            }</div>
        );
    }
}