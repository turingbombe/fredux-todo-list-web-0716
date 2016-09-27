import React from 'react';
import ReactDOM from 'react-dom';
import todosReducer from './reducers/todos_reducer'
import {createStore} from './store'
import Lister from './components/app'


const store = createStore(todosReducer)

class App extends React.Component{
	render(){
		return(
			<div>
				<h1>To-Do List</h1>
				<Lister store={store}/>
			</div>
		)
	}
}


function render(){
	ReactDOM.render(<App store= {store} />, document.getElementById('container'))
}

store.subscribe(render)

render()