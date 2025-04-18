
import { useState } from "react";

interface ITodo {
    id: number,
    title: string,
    isComplete: boolean
}

interface IProps {
    listTodo: ITodo[],
    addNewTodo: (todo: ITodo) => void;
}

const TodoInput = (props: IProps) => {

    const [todoName, setTodoName] = useState("")

    const { listTodo, addNewTodo } = props

    const handleAddTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodoName(event.target.value);
    }

    const handleSaveTodo = () => {
        if (!todoName) {
            alert("empty todo");
            return;
        }
        addNewTodo({ id: listTodo.length + 1, title: todoName, isComplete: false });
    }

    return (
        <>
            <div style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                margin: "20px auto",
            }}>
                <input onChange={(event) => handleAddTodo(event)} />
                <button onClick={() => handleSaveTodo()}>Add</button>
            </div>
        </>
    )
}

export default TodoInput;