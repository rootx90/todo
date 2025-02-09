import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTodoItem = styled.div`
  background-color: #212121;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .priority {
    font-weight: bold;
    &.low { color: green; }
    &.medium { color: orange; }
    &.high { color: red; }
  }

  button {
    margin-left: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #45a049;
    }

    &[disabled] {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
`;

function TodoItem({ todo, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTodo(editedTodo);
    setIsEditing(false);
  };

  return (
    <StyledTodoItem>
      {isEditing ? (
        <input
          type="text"
          value={editedTodo.text}
          onChange={(e) => setEditedTodo({ ...editedTodo, text: e.target.value })}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <span className={`priority ${todo.priority}`}>{todo.priority}</span>
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={deleteTodo}>Delete</button>
        </>
      )}
    </StyledTodoItem>
  );
}

export default TodoItem;
