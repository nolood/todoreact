
export const addTodo = (title, body, date, refresh, setRefresh, openMessage) => {
    const newTodo = {
        id: Date.now(),
        title,
        body,
        date
    }
    let todoList = JSON.parse(localStorage.getItem('todos')) || [] //get
    todoList.unshift(newTodo) //change
    localStorage.setItem('todos', JSON.stringify(todoList)) //set
    setRefresh(!refresh)
    openMessage('success', 'Todo item is added')
}
