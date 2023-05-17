import React, { useState } from 'react';
import { DatePicker, Form, Input, Modal } from "antd";
import { OnChangeDate } from "../../hooks/useChangeDate.js";
import { saveItemEdit } from "./saveItem.js";


const TodoEdit = ({ isOpen, setIsOpen, currentItem, list, setList, localList, setLocalList, refresh, setRefresh, openMessage }) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [date, setDate] = useState('')
    const [form] = Form.useForm()
    const cancelItemEdit = () => {
        setIsOpen(false)
    }

    return (
        <Modal
            title={ 'Edit todo item' }
            open={ isOpen }
            onCancel={ cancelItemEdit }
            onOk={ () => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields()
                        saveItemEdit(currentItem, list, setList, localList, setLocalList, refresh, setRefresh, setIsOpen, title, body, date, openMessage)
                    }).catch((e) => {

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
            </Form>
        </Modal>
    );
};

export default TodoEdit;
