import React from 'react';
import './Square.scss';

export class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = { onClick: false };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            onClick: !state.onClick
        }));
    }

    render() {
        return (
            <div className={this.state.onClick ? 'square green' : 'square yellow'} onClick={this.handleClick}>
                <span className="square-content">
                    {this.props.value}
                </span>
            </div>
        );
    }
}