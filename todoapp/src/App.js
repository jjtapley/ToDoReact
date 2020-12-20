import React, {Component} from "react";
import './App.css';
import {Form} from "./Components/Organisms/Form"
import {ToDoItemsTable} from "./Components/Organisms/ToDoItemsTable";
import {Header} from "./Components/Atoms/Header";
import {Button} from "./Components/Atoms/Button";
import {CompletedTodoTable} from "./Components/Organisms/CompletedTodoTable";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: [], completedTodos: [], showCompleted: false, name: 'Show Completed Items'}
        this.getItems();
    }

    getItems = async () => {
        const url = "http://127.0.0.1:3000/todo";
        const response = await fetch(url);
        const data = await response.json();
        const sortedData = data.sort(function(a, b) {console.log(b.date - a.date); return b.date - a.date});
        console.log(sortedData);
        this.setState({todos: data})
    }

    updateTable = (data) => {
        this.setState({todos: data})
        this.setState({completedTodos: data})
    }

    getCompleted = async () => {
        const url = "http://127.0.0.1:3000/todo?completed=1";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({completedTodos: data})
    }

    toggle = () => {
        const showCompleted = !this.state.showCompleted;
        this.setState({showCompleted: showCompleted});
        if (this.state.showCompleted) {
            this.setState({name: 'Show Completed Items'})
        } else {
            this.setState({name: 'Show To Do Items'})
        }
        if (showCompleted) {
            this.getCompleted();
        } else {
            this.getItems();
        }
    }


  render() {
    return (
        <div className="App">
            <Header title="To Do App" class="mainHeader"/>
            <Button click={this.toggle} name={this.state.name} class="toggleButton"/>
            {!this.state.showCompleted && <Form updateTable={this.updateTable}/>}
            {!this.state.showCompleted && <ToDoItemsTable todos={this.state.todos} getItems={this.getItems}/>}
            {this.state.showCompleted && <CompletedTodoTable completedTodos={this.state.completedTodos} getCompleted={this.getCompleted}/>}
        </div>
    );
  }

}

export default App;
