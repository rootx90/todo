import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const theme = {
  background: '#121212',
  color: '#ffffff',
};

const StyledApp = styled.div`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
  min-height: 100vh;
  padding: 20px;
`;

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const updateTodo = (index, updatedTodo) => {
    setTodos(todos.map((todo, i) => (i === index ? updatedTodo : todo)));
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <h1>To-Do List</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
