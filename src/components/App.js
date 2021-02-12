import { useState } from "react";
import styled from "styled-components";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import TodoContext from "../contexts/TodoContext";

const StyledMainContainer = styled.div`
  width: 100%;
`;

const StyledListContainer = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  padding: 20px;
`;

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (value) => {
    setTodos([...todos, { text: value, isCompleted: false }]);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((todo) => todo !== todos[index]));
  };

  return (
    <StyledMainContainer>
      <h1>Todo List</h1>
      <StyledListContainer>
        {todos.map((todo, index) => (
          <TodoContext.Provider key={index} value={todo.isCompleted}>
            <Todo
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          </TodoContext.Provider>
        ))}
        <TodoForm addTodo={addTodo} />
      </StyledListContainer>
    </StyledMainContainer>
  );
};

export default App;
