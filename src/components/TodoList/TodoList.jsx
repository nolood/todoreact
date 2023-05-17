import React, { useEffect, useState } from 'react';
import { List } from "antd";
import useFetchData from "../../hooks/useFetchData.js";
import TodoItem from "../TodoItem/TodoItem.jsx";
import TodoEdit from "../TodoEdit/TodoEdit.jsx";

const TodoList = ({ refresh, setRefresh, openMessage }) => {
    const [todos, setTodos] = useState([])
    const [localTodos, setLocalTodos] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [currentItem, setCurrentItem] = useState({})
    useEffect(() => {
         useFetchData('https://jsonplaceholder.typicode.com/todos')
            .then((data) => {
                setTodos(data)
            })
        setLocalTodos(JSON.parse(localStorage.getItem('todos')) || [])
    }, [refresh])

    return (
        <>
            <TodoEdit
                isOpen={ isOpen }
                setIsOpen={ setIsOpen }
                currentItem={ currentItem }
                list={ todos }
                setList={ setTodos }
                localList={ localTodos }
                setLocalList={ setLocalTodos }
                refresh={ refresh }
                setRefresh={ setRefresh }
                openMessage={ openMessage }
            />
            <List
                size='large'
                bordered
            >
                { [...localTodos, ...todos].map((item) =>
                    <TodoItem
                        list={ todos }
                        setList={ setTodos }
                        localList={ localTodos }
                        setLocalList={ setLocalTodos }
                        isOpen={ isOpen }
                        setIsOpen={ setIsOpen }
                        key={ item.id }
                        item={ item }
                        setCurrentItem={ setCurrentItem }
                        openMessage={ openMessage }
                    />
                ) }
            </List>
        </>
    );
};

export default TodoList;
