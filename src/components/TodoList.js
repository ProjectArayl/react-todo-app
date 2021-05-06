import { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: '',
      items: [],
    };
  }

  handleChange(event) {
    this.setState({ todoInput: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    
    this.setState(state => {
      const items = [ ...state.items, state.todoInput ];

      return { todoInput: '', items };
    });
  }

  render () {
    return (
      <div>
        <h1>To-do List</h1>
        <form onSubmit={this.handleSubmit}>
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
