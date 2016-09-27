# FRedux ToDo List

## Overview

Today, we'll be implementing a simple ToDo List application (with no persistence) using React and our own version of Redux that we built out in class. In general, a Redux application consists of three parts.

1. The `store` - a plain old JavaScript object which keeps track of the state of our entire application. It has methods to get the current state `getState`, add event handlers for state updates `subscribe`, and finally to update the state and run the event handlers `dispatch`.
2. Reducers - pure functions which return copies of our state to us. The `store` uses the reducer function to figure out what the next state will look like. This gives us one and only one place to actually do the state updates - the `dispatch` method.
3. Actions - plain old JavaScript objects which get passed to the Reducer. The Reducer figures out if/how to update the state based on the Action type.

## Instructions

1. Define a reducer function that takes in the current state and an action. The default state should be an empty array. If the action type is `ADD_TODO`, we should return an array with the associated ToDo added into it.
2. Create a component for the ToDo List App. The component should take in the `store` as a prop. The component should display a list of ToDos and have an input to create a new ToDo. When submitting the form, we should dispatch an `ADD_TODO` action to our store.
3. Finally, use the `createStore` function and the reducer you created to actually create a store. Using `react-dom`, create a function that renders our component to the DOM. Subscribe our store to this event handler so it gets fired on every update.
4. Give yourself a pat on the back for a job well done! 
