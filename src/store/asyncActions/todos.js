import {getTodosAction} from "../todoReducer.js";

export const fetchTodos = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => dispatch(getTodosAction(json)))
    }
}
