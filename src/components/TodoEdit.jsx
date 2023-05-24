import React, {useState} from 'react';
import {Form, Input, Modal} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {editTodoAction} from "../store/todoReducer.js";

const TodoEdit = ({isOpen, setIsOpen}) => {
    const [form] = Form.useForm()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const currentTodo = useSelector((state) => state.todo.currentTodo)
    const dispatch = useDispatch()
    return (
        <Modal
            title={ 'Edit todo item' }
            open={ isOpen }
            onCancel={ () => setIsOpen(false) }
            onOk={ () => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields()
                        dispatch(editTodoAction({
                            id: currentTodo?.id,
                            title,
                            body
                        }))
                        setIsOpen(false)
                    })
            }}
            okButtonProps={{ title: 'Save' }}
        >
            <Form
                layout={ 'vertical' }
                form={ form }
            >
                <Form.Item
                    form={ form }
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
            </Form>
        </Modal>
    );
};

export default TodoEdit;
