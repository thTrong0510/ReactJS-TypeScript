interface ITodo {
    id: number,
    title: string,
    isComplete: boolean
}

interface IProps {
    listTodo: ITodo[],
    deleteTodo: (id: number) => void;
}


const TodoData = (props: IProps) => {
    const { listTodo, deleteTodo } = props

    const handleDeleteTodo = (id: number) => {
        deleteTodo(id);
    }

    return (
        <>
            {listTodo.map(todo =>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                    <div style={{ padding: "5px 0px" }}>{todo.title}</div>
                    <button onClick={() => handleDeleteTodo(todo.id)}>delete</button>
                </div>
            )}
        </>
    )
}


export default TodoData;