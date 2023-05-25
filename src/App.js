import './App.css';
import React, { useState } from 'react';
import Todo from './components/Todo';


function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTodo.length == 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false,
    };

    setTodos([...todos, todoItem]);
    setNewTodo('');
  }

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, index) => {
      return index != delIdx;
    });
    setTodos(filteredTodos);
  }

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, index) => {
      if (idx == index) {
        todo.complete = !todo.complete;
      }

      return todo;
    })

    setTodos(updatedTodos);
  };


  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input 
        value={newTodo} 
        onChange={ (e) => setNewTodo(e.target.value)} 
        type="text" />
        <div>
          <button>Add</button>
        </div>
      </form>

      <hr />

      {
        todos.map((todo, index) => {
          
          return <Todo 
          key={index}
          todo={todo} 
          handleToggleComplete={handleToggleComplete}
          handleTodoDelete={handleTodoDelete}
          index={index}
          />
        })
      }
    </div>
  );
}

export default App;
