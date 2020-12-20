import React, {Component} from 'react';
import {TD} from "../../Atoms/TD";
import {TH} from "../../Atoms/TH";
import {Header} from "../../Atoms/Header";
import {TDWithButton} from "../../Atoms/TDWithButton/TDWithButton";

export class CompletedTodoTable extends Component {

    constructor(props) {
        super(props);
        this.state = {items: props.completedTodos}
    }

    deleteItem = (name, event) => {
        const url = 'http://127.0.0.1:3000/todo/' + name;
        console.log(url);
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => response.json())
            .then(data => {
                this.props.getCompleted();
            });
        event.preventDefault()
    }

    markCompleteOrNot = (name, event) => {
        const url = 'http://127.0.0.1:3000/todo/' + name;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => response.json())
            .then(data => {
                this.props.getCompleted();
            });
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <Header title="Completed items" />
                <table>
                    <thead>
                        <TH name="Item" />
                        <TH name="Due Date" />
                        <TH name="Category" />
                        <TH name="Mark Incomplete" />
                        <TH name="Delete" />
                    </thead>
                    <tbody>
                    {this.props.completedTodos.map(item => (
                        <tr>
                            <TD name={item.name} />
                            <TD name={item.date} />
                            <TD name={item.category} />
                            <TDWithButton name="Not Complete" click={this.markCompleteOrNot.bind(this, item.name)} class="completedButton"/>
                            <TDWithButton name="Delete" click={this.deleteItem.bind(this, item.name)} class="deleteButton"/>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        )
    }
}