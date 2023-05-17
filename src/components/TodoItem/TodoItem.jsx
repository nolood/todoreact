import { Button, Card, Space } from "antd";
import React from "react";
import { deleteTodo } from "./deleteTodo.js";

const TodoItem = ({ item, list, setList, localList, setLocalList, setIsOpen, setCurrentItem, openMessage }) => {
    const editTodo = () => {
        setIsOpen(true)
        setCurrentItem(item)
    }

    return (
        <Card
            title={ item.title[0].toUpperCase() + item.title.slice(1) }
        >
            <Space size={ 'large' }>
                <span>{ item.body }</span>
                <span>{ item.date }</span>
                <Button
                    type={ 'primary' }
                    onClick={ editTodo }
                >
                    Edit
                </Button>
                <Button
                    type={ 'primary' }
                    danger
                    onClick={ () => deleteTodo(list, setList, localList, setLocalList, item, openMessage) }
                >
                    Delete
                </Button>
            </Space>
        </Card>
    );
};

export default TodoItem;
