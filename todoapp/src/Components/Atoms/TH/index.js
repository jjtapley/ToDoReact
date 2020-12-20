import React, {Component} from 'react';

export class TH extends Component {
    render() {
        return (
            <th>{this.props.name}</th>
        )
    }
}