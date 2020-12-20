import React, {Component} from 'react';

export class Header extends Component {
    render() {
        return (
            <header>
                <h1 className={this.props.class}>{this.props.title}</h1>
            </header>
        )
    }
}