import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const Local_storage_key = 'todoApp.todosaea'


function App() {
  const [todos, setTodos] = useState([])
  const todoNameref = useRef()

  useEffect(()=>{
    const stored =JSON.parse(localStorage.getItem(Local_storage_key))
    if (stored) {
      setTodos(stored)}
  }, [])

  useEffect(() => {
    localStorage.setItem(Local_storage_key, JSON.stringify(todos))

  }, [todos])

  function togglechecked(id){
const newtodos = [...todos]
const todo = newtodos.find( todo => todo.id === id)
  }

  function handleAdd(e){
    const name = todoNameref.current.value 
    if (name === '') return
    setTodos(prev => {
      return [...prev, {id:uuidv4(), name: name, completed:false}]
    })
    todoNameref.current.value = null
  }
  return (
    <>
    <TodoList todos = {todos}/>
    <input type = 'text' ref={todoNameref}/>
    <button onClick={handleAdd}>Add Todo</button>
    <button>Clear Completed</button>
    <div>0 left todos</div>
    </>
  );
}

export default App;
