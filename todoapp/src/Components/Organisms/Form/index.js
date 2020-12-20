import React, {Component} from 'react';
import {Header} from "../../Atoms/Header";
import {Input} from "../../Atoms/Input";
import {Label} from "../../Atoms/Label";
import {SelectDropDown} from "../../Molecules/SelectDropDown";

export class Form extends Component {

    constructor(props) {
        super(props);
        this.state = { name: '', value: '', date: '', category: ''};
    }

    handleChange = (event) => {
        this.setState({name: event.target.value});
        this.setState({value: event.target.value});
    }

    handleDateChange = (event) => {
        this.setState({date: event.target.value})
    }

    handleSelectChange = (event) => {
        this.setState({category: event.target.value})
    }

    handleSubmit = (event) => {
        this.setState({value: event.target.reset});
        fetch('http://127.0.0.1:3000/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
            }).then(response => response.json())
            .then(response => {
               this.props.updateTable(response);
            });
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <Header title="Add New Item" />
                <form onSubmit={this.handleSubmit}>
                    <Label for="addNewItem" />
                    <Input type="text" id="addNewItem" placeholder="What shall we do?" value={this.state.value} onChange={this.handleChange}/>
                    <Input id="dueDate" type="date" onChange={this.handleDateChange}/>
                    <SelectDropDown onChange={this.handleSelectChange}/>
                    <Input type="submit" value="Submit" id="addButton"/>
                </form>
            </div>

        )
    }
}