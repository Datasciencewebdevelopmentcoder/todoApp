const Todo = ({todo}) => {
    return ( 
        <div>
            <label>
                <input type="checkbox" checked={todo.completed} />
                {todo.name}
                </label>
        
        </div>
    );
}
 
export default Todo;