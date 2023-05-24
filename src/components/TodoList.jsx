import React, {useEffect, useState} from 'react';
import {List} from "antd";
import {useSelector} from "react-redux";
import TodoItem from "./TodoItem.jsx";
import TodoEdit from "./TodoEdit.jsx";

const TodoList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const todos = useSelector((state) => state.todo.todos)
    useEffect(() => {
        localStorage.setItem('todoredux', JSON.stringify(todos))
    }, [todos])
    return (
        <>
            <List
                header={<span>List</span>}
            >
                {todos.length > 0 && todos.map((todo) =>
                    <TodoItem
                        key={ todo.id }
                        todo={ todo }
                        setIsOpen={ setIsOpen }
                    />
                )}
            </List>
            <TodoEdit
                isOpen={ isOpen }
                setIsOpen={ setIsOpen }
            />
        </>
    );
};

export default TodoList;
