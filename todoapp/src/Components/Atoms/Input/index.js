import React, {Component} from 'react';

export class Input extends Component {
    render() {
        return (
            <input type={this.props.type} id={this.props.id} placeholder={this.props.placeholder} onChange={this.props.onChange} value={this.props.value} maxLength="30" required/>
        )
    }
}