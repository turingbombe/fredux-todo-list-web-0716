export default function todosReducer(state=[], action){
	switch(action.type){
		case 'ADD_TODO':
			return [...state, action.payload.title];
		case 'REMOVE_TODO':
			let test = [...state]
			test.splice(action.payload.id, 1)
			return test	
		default:
			return state;
	}
}

// let action = {type: 'ADD_TODO', payload: {title: 'Buy Milk'}}
// this.props.store.dispatch(action)