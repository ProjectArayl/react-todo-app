import { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: '',
    };
  }

  handleChange(event) {
    this.setState({ todoInput: event.target.value });
  }

  render () {
    return (
      <div>
        <h1>To-do List</h1>
        <form>
          <input
            value={this.state.todoInput}
            onChange={this.handleChange}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default TodoList;
