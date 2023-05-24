import {Button, Card, Space} from "antd";
import {useDispatch} from "react-redux";
import {removeTodoAction, setCurrentTodoAction} from "../store/todoReducer.js";

const TodoItem = ({todo, setIsOpen}) => {
    const dispatch = useDispatch()
    const deleteTodo = () => {
        dispatch(removeTodoAction(todo.id))
    }
    const editTodo = () => {
        dispatch(setCurrentTodoAction(todo))
        setIsOpen(true)
    }
    return (
        <Card
            title={todo.title}
        >
            <Space
                size={'large'}
            >
                {todo.body}
                <Button
                    type={'primary'}
                    onClick={() => editTodo()}
                >
                    Edit
                </Button>
                <Button
                    type={'primary'}
                    danger
                    onClick={() => deleteTodo()}
                >
                    Delete
                </Button>
            </Space>
        </Card>
    );
};

export default TodoItem;
