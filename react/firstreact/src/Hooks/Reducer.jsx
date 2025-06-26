import React, { useReducer } from 'react'

const initialValue = { count: 0 }
const reducerFunction = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }
        case "decrement":
            return { count: state.count - 1 }
        case "reset":
            return { count: 0 }
        default:
            return { count: 0 }
    }
}

const Reducer = () => {
    const [state, dispatch] = useReducer(reducerFunction, initialValue)

    return (
        <div>
            <h2>Reducer</h2>
            <h3>{state.count}</h3>
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    )
}

export default Reducer
