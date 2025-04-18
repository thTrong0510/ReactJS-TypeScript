import { useEffect, useState } from "react";
import TodoData from "./todo.data";
import TodoInput from "./todo.input";

interface ITodo {
    id: number,
    title: string,
    isComplete: boolean
}

const TodoList = () => {

    const addNewTodo = (todo: ITodo) => {
        setListTodo([...listTodo, todo])
    }

    const deleteTodo = (id: number) => {
        setListTodo(listTodo.filter(todo => todo.id != id))
    }

    const todos = [
        {
            id: 1,
            title: "Learn React TypeScript",
            isComplete: false
        },
        {
            id: 2,
            title: "Subscribe Youtube HoiDanIT",
            isComplete: true
        },
        {
            id: 3,
            title: "Learn English",
            isComplete: true
        },
    ]

    const [listTodo, setListTodo] = useState<ITodo[]>(todos);

    return (
        <>
            <div style={{
                width: "600px",
                margin: "50px auto",
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
            }}>
                <div style={{ textAlign: "center" }}>To do list</div>
                <TodoInput listTodo={listTodo} addNewTodo={addNewTodo} />
                <hr />
                <TodoData listTodo={listTodo} deleteTodo={deleteTodo} />
            </div>
        </>
    )
}

export default TodoList;