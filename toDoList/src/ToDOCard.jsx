import React, { useState } from 'react';

function ToDOCard({ todo, deleteTodo, updateStatus, updateTodo }) {
  const [editable, setEditable] = useState(false);
  const [editedTodo, setEditedTodo] = useState({ name: todo.name, description: todo.description });

  const handleStatusChange = (newStatus) => {
    updateStatus(todo.id, newStatus);
  };

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    updateTodo(todo.id, editedTodo.name, editedTodo.description);
    setEditable(false);
  };

  const handleCancel = () => {
    setEditable(false);
    setEditedTodo({ name: todo.name, description: todo.description });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTodo(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="card mb-3"style={{ backgroundColor: '#6c757d', borderRadius: '10px' }}>
      <div className="card-header"style={{ backgroundColor: '#343a40', color: 'white', borderRadius: '5px' }}>TODO LIST</div>
      <div className="card-body">
        {!editable ? (
          <>
            <h5 className="card-title">NAME : {todo.name}</h5>
            <h6><p className="card-text">DESCRIPTION : {todo.description}</p></h6>
            <div className="dropdown">
              <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Status: {todo.status}
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" href="#" onClick={() => handleStatusChange('Completed')}>Completed</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => handleStatusChange('Not Completed')}>Not Completed</a></li>
              </ul>
            </div>
            <button className="btn btn-danger mt-2" onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button className="btn btn-success mt-2" onClick={handleEdit}>Edit </button>
          </>
        ) : (
          <>
            <input type="text" className="form-control mb-2" placeholder="Todo name" name="name" value={editedTodo.name} onChange={handleInputChange} />
            <input type="text" className="form-control mb-2" placeholder="Todo Description" name="description" value={editedTodo.description} onChange={handleInputChange} />
            <div className="dropdown mb-2">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Status: {todo.status}
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" href="#" onClick={() => handleStatusChange('Completed')}>Completed</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => handleStatusChange('Not Completed')}>Not Completed</a></li>
              </ul>
            </div>
            <button className="btn btn-success me-2" onClick={handleSave}>Save</button>
            <button className="btn btn-danger" onClick={handleCancel}>Cancel</button>
          </>
        )}
      </div>
    </div>
  );
}

export default ToDOCard;

