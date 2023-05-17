import UseFetchData from "../../hooks/useFetchData.js";

export const saveItemEdit = (currentItem, list, setList, localList, setLocalList, refresh, setRefresh, setIsOpen, title, body, date, openMessage) => {
    setIsOpen(false)
    const newItem = {
        id: currentItem.id,
        title,
        body,
        date,
    }
    if (list.filter(i => i.id === currentItem.id).length > 0) {
        setList(list.map(i => i.id === currentItem.id ? newItem : i))
        UseFetchData(`https://jsonplaceholder.typicode.com/todos/${currentItem.id}`, { method: 'PUT', body: JSON.stringify(newItem) })
    } else {
        setLocalList(localList.filter(i => i.id === currentItem.id ? newItem : i))
        localStorage.setItem('todos', JSON.stringify(localList.map(i => i.id === currentItem.id ? newItem : i)))
    }
    setRefresh(!refresh)
    openMessage('success', 'Todo item is saved')
}
