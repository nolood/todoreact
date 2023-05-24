import React from 'react';
import {Card, Layout} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout.js";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

const App = () => {
    return (
        <Layout>
            <Header>
                <span className='header-text'>
                    Todo React
                </span>
            </Header>
            <Content
                style={{minHeight: 'calc(100vh - 132px)'}}
            >
                <Card>
                    <TodoForm/>
                </Card>
                <Card>
                    <TodoList/>
                </Card>
            </Content>
            <Footer>
                footer
            </Footer>
        </Layout>
    );
};

export default App;
