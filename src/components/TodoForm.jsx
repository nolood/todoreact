import React, {useState} from 'react';
import {Button, Form, Input} from "antd";
import {useDispatch} from "react-redux";
import {addTodoAction} from "../store/todoReducer.js";
import {fetchTodos} from "../store/asyncActions/todos.js";

const TodoForm = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const onFinish = () => {
        const todoData = {
            title,
            body,
            id: Date.now(),
        }
        console.log(todoData)
        dispatch(addTodoAction(todoData))
    };

    return (
        <Form
            layout='vertical'
            onFinish={ () => onFinish() }
        >
            <Form.Item
                name='Title'
                label='Title'
                rules={[{ required: true }]}
            >
                <Input
                    placeholder={ 'Title' }
                    size={ 'large' }
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                name='Body'
                label='Body'
                rules={[{ required: true }]}
            >
                <Input
                    placeholder={ 'Body' }
                    size={ 'large' }
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
            </Form.Item>
            <Form.Item>
                <Button
                    style={{ width: '100%' }}
                    type={ 'primary' }
                    size={ 'large' }
                    htmlType={ 'submit' }
                >
                    Create
                </Button>
            </Form.Item>
            <Button
                onClick={() => dispatch(fetchTodos())}
            >
                Get todos
            </Button>
        </Form>
    );
};

export default TodoForm;
