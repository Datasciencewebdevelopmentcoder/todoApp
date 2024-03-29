import Todo from "./Todos";

const TodoList = ({todos}) => {
    return (
        todos.map((todo) => {
            return <Todo todo={todo} key={todo.id}/>
        })
    );
}
 
export default TodoList;