# Week 15 Learning Objectives

## Redux: Part 1

### Describe the Redux data cycle
- redux philosophy:
  - **A Single Source of Truth**: the state for an entire Redux app is stored in a single pojo
  - **State is Read Only**: the state object cannot be directly modified. instead it is modified by dispatching actions.
  - **Changes Are Made with Pure Functions** the reducers that receive the actions and return updated state are pure functions of the old state and the action.
- the store, the actions, then the reducers
- state: all the information stored by that program at a particular point in time.
### Describe the role of the store in the Redux architecture
- Redux stores state in a single store
- holds the frontend state
- provides an API for the frontend state
### Explain what a _reducer_ is
- reducers are functions that make changes to the frontend state
- they are pure functions: behavior depends only on arguments and it has no side effects
- recieves the actions (which are pojos that outline changes to the frontend state), and uses them to actually update the frontend state
### Use the `createStore` method to create an instance of a Redux store
### Use the `store.dispatch` method to dispatch an action to trigger a state update
### Use the `store.subscribe` method to listen for state updates
### Use the `store.getState` method to get the current state
### Use a `switch` statement within a reducer function to handle multiple action types
### Describe why it's important for a reducer to avoid mutating the current state when creating the next state
### Write an action creator function to facilitate in the creation of action objects
### Use constants to define action types to prevent simple typos in action type string literals

## Redux: Part 2
### Add Redux actions, reducer(s), and a store to a React project
### Update a React class component to subscribe to a Redux store to listen for state changes
### Update a React component to dispatch actions to a Redux store
### Define multiple reducers to manage individual slices of state
### Use the Redux `combineReducers` method to combine multiple reducers into a single root reducer
### Update a reducer to delegate a state update to a subordinate reducer
### Describe how container components differ from presentational components
### Write a container component to handle all of the Redux store interaction for one or more presentational components
### Use `Object.freeze` to prevent the current state within a reducer from being mutated
### Create a Redux store with preloaded state

## Redux: Part 3

### Describe what a higher-order component (HOC) is
### Write a higher-order component (HOC) that accepts a component as an argument and returns a new component
### Use the React-Redux library's `<Provider />` component to make your Redux store available to any nested components that have been wrapped in the `connect` function
### Use the React-Redux library's `connect` function to give a component access to a Redux store
### Write a selector to extract and format information from state stored in a Redux store
### Use the React-Redux library's `applyMiddleware` function to configure one or more middleware when creating a store
### Write a thunk action creator to make an asynchronous request to an API and dispatch an action when the response is received
### Describe a situation where defining multiple containers for a single component is advantageous
### Configure a React application to use the Redux development tools

## Hooks
### React:
#### Use React's `useState` hook to manage a component's state.
#### Use React's `useState` hook to set a default state, instead of setting the default state in a `constructor()` method.
#### Use React's `useState` hook to update state, instead of the `setState()` method.
#### Use React's `useEffect` hook to manage side effect operations (i.e. data fetching).
#### Use React's `useEffect` hook in replacement of commonly used component lifecycle methods (`componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`).
#### Use React's `useEffect` (and the hook's dependency array) to optimize an application's performance by skipping `useEffect` calls.
#### Use React's `useContext` hook to access a context object, instead of a `Context.Consumer` or the static `contentType` property.
### Redux:
#### Use Redux's `useSelector` hook to access the Redux store's state from within a component (instead of passing a part of state as a prop with the `mapStateToProps` function).
#### Use Redux's `useDispatch` hook to dispatch an action from within a component (instead of passing an thunk action creator function through the `mapDispatchToProps` function).
### React Router:
#### Use React Router's `useParams` hook to match parameters in the current route (instead of accessing the `match.params` prop).
#### Use React Router's `useHistory` hook to navigation from within code (without `<Link>`, `<NavLink>`, or the `history` prop).
#### Use React Router's `useLocation` hook to track url changes.
#### Use React Router's `useRouteMatch` hook to check if the current url matches a path format.

## WebSockets
- WebSockets enable two-way communication between the user's browser (the client) and a server.
- enable dynamic, interactive web experiences
### Use the WebSockets API to create a new WebSocket connection to a server
### Create a WebSocket `onopen` event handler function to detect when the connection has been opened
### Create a WebSocket `onmessage` event handler function to detect and process messages sent by the server
### Create a WebSocket `onerror` event handler function to detect when an error has occurred
### Use the WebSocket `send()` method to send messages to the server
### Recall that WebSocket message data can be sent as JSON formatted string
### Recall that WebSocket messages usually have a "type" associated with them so the client can determine how to process them
### Use the WebSocket `close()` method to close the connection to the server
### Create a WebSocket `onclose` event handler function to detect when the connection to the server has been closed
### Use the `ws` package to create a standalone WebSocket server
### Use the `ws` package to create a WebSocket server that shares a Node.js `http` server with an Express application
### Create an `connection` event handler listener method to detect when a client has connected to the WebSocket server
### Create an `close` event handler listener method to detect when a client has closed the connection to the WebSocket server
### Use the WebSocket `send()` method to send a message to a client
