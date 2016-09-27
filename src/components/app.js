import React from 'react';

export default class Lister extends React.Component{
	constructor(){
		super()
		this.onAdd = this.onAdd.bind(this)
		this.onDelete = this.onDelete.bind(this)
	}
	onAdd(event){
		event.preventDefault()
		let action = {type: 'ADD_TODO', payload: {title: event.target.firstChild.value}}
		this.props.store.dispatch(action);
		event.target.firstChild.value = ""
	}

	onDelete(event){
		event.preventDefault()
		let action = {type: 'REMOVE_TODO', payload:{id: event.target.id}}
		this.props.store.dispatch(action);
	}
	render(){
		return(
			<div>
				{this.props.store.getState().map((message,index) => <li id={index}> {message} <button id={index} onClick= {this.onDelete}> X </button></li> )}
				<form onSubmit = {this.onAdd}>
					<input type="text" />
					<input type="submit" />
				</form>	
			</div>
		)
	}
}