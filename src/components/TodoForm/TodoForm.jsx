import React, { useState } from 'react';
import { Button, DatePicker, Form, Input } from "antd";
import { OnChangeDate } from "../../hooks/useChangeDate.js";
import { addTodo } from "./addTodo.js";

const TodoForm = ({ refresh, setRefresh, openMessage }) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [date, setDate] = useState('')

    return (
        <Form
            layout={ 'vertical' }
            onFinish={ () => addTodo(title, body, date, refresh, setRefresh, openMessage) }
        >
            <Form.Item
                name='Title'
                label='Title'
                rules={[{ required: true }]}
            >
                <Input
                    placeholder={ 'Title' }
                    size={ 'large' }
                    value={ title }
                    onChange={ event => setTitle(event.target.value) }
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
                    value={ body }
                    onChange={ event => setBody(event.target.value) }
                />
            </Form.Item>
            <Form.Item
                name={ 'Select date' }
                label={ 'Select date' }
                rules={[{ required: true }]}
            >
                <DatePicker
                    style={{ width: '100%' }}
                    onChange={ (date, dateString) => setDate(OnChangeDate(date, dateString)) }
                />
            </Form.Item>
            <Button
                style={{ width: '100%' }}
                type={ 'primary' }
                size={ 'large' }
                htmlType={ 'submit' }
            >
                Add
            </Button>
        </Form>
    );
};

export default TodoForm;
