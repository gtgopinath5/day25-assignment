import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ToDOCard from './ToDOCard';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Zen-Task 1", description: "This is my Zen-Task 1 description", status: "Not Completed" },
    { id: 2, name: "Zen-Task 2", description: "This is my Zen-Task 2 description", status: "Completed" },
    { id: 3, name: "Zen-Task 3", description: "This is my Zen-Task 3 description", status: "Not Completed" }
  ]);

  const [newTodo, setNewTodo] = useState({ name: '', description: '' });

  const addTodo = () => {
    setTodos([...todos, { ...newTodo, id: todos.length + 1, status: "Not Completed" }]);
    setNewTodo({ name: '', description: '' });
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateStatus = (id, newStatus) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, status: newStatus } : todo)));
  };

  const updateTodo = (id, newName, newDescription) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, name: newName, description: newDescription } : todo)));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="App" style={{ background: 'linear-gradient(to right, red,orange,red), linear-gradient(to right, blue, green)', minHeight: '100vh' }}>
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">My ToDo List</h1>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <form onSubmit={(e) => { e.preventDefault(); }}>
            <div className="row g-2 align-items-center">
              <div className="col-auto">
                <input type="text" className="form-control" placeholder="Todo name" name="name" value={newTodo.name} onChange={handleInputChange} />
              </div>
              <div className="col-auto">
                <input type="text" className="form-control" placeholder="Todo Description" name="description" value={newTodo.description} onChange={handleInputChange} />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-info" onClick={addTodo}>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        {todos.map(todo => (
          <div className="col-md-4" key={todo.id}>
            <ToDOCard todo={todo} deleteTodo={deleteTodo} updateStatus={updateStatus} updateTodo={updateTodo} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
