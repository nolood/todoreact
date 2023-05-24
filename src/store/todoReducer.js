const defaultState ={
    todos: JSON.parse(localStorage.getItem('todoredux')) || [],
    currentTodo: {},
}

const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const SET_CURRENT_TODO = 'SET_CURRENT_TODO'
const EDIT_TODO = 'EDIT_TODO'
const GET_TODOS = 'GET_TODOS'
export const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case REMOVE_TODO:
            return {...state, todos: state.todos.filter((todo) => todo.id !== action.payload)}
        case SET_CURRENT_TODO:
            return {...state, currentTodo: action.payload}
        case EDIT_TODO:
            return {...state, todos: state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo)}
        case GET_TODOS:
            return {...state, todos: [...state.todos, ...action.payload]}
        default:
            return state
    }
}

export const addTodoAction = (payload) => ({type: ADD_TODO, payload})
export const removeTodoAction = (payload) => ({type: REMOVE_TODO, payload})
export const setCurrentTodoAction = (payload) => ({type: SET_CURRENT_TODO, payload})
export const editTodoAction = (payload) => ({type: EDIT_TODO, payload})
export const getTodosAction = (payload) => ({type: GET_TODOS, payload})
