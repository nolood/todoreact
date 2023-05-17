import UseFetchData from "../../hooks/useFetchData.js";

export const deleteTodo = (list, setList, localList, setLocalList, item, openMessage) => {
    if (list.filter(i => i.id === item.id).length > 0) {
        setList(list.filter(i => i.id !== item.id))
        UseFetchData(`https://jsonplaceholder.typicode.com/todos/${item.id}`, { method: 'DELETE' })
    } else {
        setLocalList(localList.filter(i => i.id !== item.id))
        localStorage.setItem('todos', JSON.stringify(localList.filter(i => i.id !== item.id)))
    }
    openMessage('warning', 'Todo item is deleted')
}
