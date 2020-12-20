import React, {Component} from 'react';
import {Label} from "../../Atoms/Label";

export class SelectDropDown extends Component {
    render() {
        return (
            <div class="select">
                <Label for="category" name="Category" />
                <select id="category" onChange={this.props.onChange} value={this.props.value} >
                    <option value="Personal">Personal</option>
                    <option value="Work">Work</option>
                    <option value="School">School</option>
                    <option value="Kids">Kids</option>
                    <option value="Financial">Financial</option>
                </select>
            </div>
        )
    }
}