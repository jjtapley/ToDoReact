import React, {Component} from 'react';

import {Button} from "../Button";

export class TDWithButton extends Component {
    render() {
        return (
            <td><Button click={this.props.click} name={this.props.name} class={this.props.class}/></td>

        )
    }
}