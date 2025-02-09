import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const StyledTodoList = styled.div`
  margin-top: 20px;
`;

function TodoList({ todos, deleteTodo, updateTodo }) {
  return (
    <StyledTodoList>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          deleteTodo={() => deleteTodo(index)}
          updateTodo={(updatedTodo) => updateTodo(index, updatedTodo)}
        />
      ))}
    </StyledTodoList>
  );
}

export default TodoList;
