import React from 'react';
import ReactDOM from 'react-dom';

import todosReducer from './reducers/todos_reducer';
import { createStore } from './store';

const store = createStore(todosReducer);

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {newTodo: ''}
  }

  onSubmit(e){
    e.preventDefault();
    store.dispatch({type: 'ADD_TODO', payload: {title: this.state.newTodo}})
    this.setState({newTodo: ''});

  }

  onChange(e){
    this.setState({newTodo: e.target.value});
  }

  render(){
    return(
      <div>
        <h1>ToDos</h1>
        <ul>
          {store.getState().map((todo, i) => <li key={i}>{todo.title}</li>)}
        </ul>

        <form onSubmit={this.onSubmit.bind(this)}>
          <input value={this.state.newTodo} onChange={this.onChange.bind(this)} />
        </form>

      </div>
    )
  }
}

const render = () => {
  ReactDOM.render(<App store={store}/>, document.getElementById('container'))
}

render();
store.subscribe(render);
