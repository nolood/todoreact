import React, { useState } from 'react'
import {Button, Card, Layout, message} from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout.js'
import './styles/index.css'
import TodoForm from "./components/TodoForm/TodoForm.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";



const App = () => {
    const [refresh, setRefresh] = useState(false)
    const [messageApi, contextHolder] = message.useMessage();
    const openMessage = (type, message) => {
        messageApi.open({
            type: type,
            content: message
        })
    }

    return (
        <Layout>
            {contextHolder}
            <Header>
                <h2 className='header__title'>React Todo</h2>
            </Header>
            <Content style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: 'calc(100vh - 128px)'
            }}>
                <Card title='Head'>
                    <TodoForm
                        refresh={ refresh }
                        setRefresh={ setRefresh }
                        openMessage={ openMessage }
                    />
                </Card>
                <Card title='List'>
                    <TodoList
                        refresh={ refresh }
                        setRefresh={ setRefresh }
                        openMessage={ openMessage }
                    />
                </Card>
            </Content>
            <Footer>

            </Footer>
        </Layout>
    );
};

export default App;
