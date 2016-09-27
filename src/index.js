import React from 'react';
import ReactDOM from 'react-dom';

import todosReducer from './reducers/todos_reducer';
import { createStore } from './store';

import App from './components/app';

const store = createStore(todosReducer);

const render = () => {
  ReactDOM.render(<App store={store}/>, document.getElementById('container'))
}

render();
store.subscribe(render);
