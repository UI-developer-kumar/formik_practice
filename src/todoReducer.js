
const initialState = {
    todos : ["practice code", "learning more tech"]
}

const todoReducer = (state=initialState, action) => {
    if(action.type === "ADD_TODO") {
        return {
            ...state,
            todos:[...state.todos, action.payload]

        }
    }

    return state
}

export default todoReducer