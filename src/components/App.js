import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, fetchTodos, deleteTodo, editTodo } from "../actions";
import styled from "styled-components";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const StyledMainContainer = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  padding: 20px;
`;

const StyledListContainer = styled.div`
  width: 100%;
`;

const StyledStatusFeedback = styled.div`
  margin-top: 20px;
`;

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => Object.values(state.todos));
  const [text, setText] = useState("");
  const editFieldRef = useRef(null);
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const addTodo = (values, timeStamp) => {
    dispatch(createTodo(values, timeStamp));
    screenReaderFeedback(values, "added");
  };

  const completeTodo = (todo) => {
    dispatch(editTodo(todo.id, { ...todo, isCompleted: !todo.isCompleted }));
    let text = !todo.isCompleted ? "completed" : "not completed";
    screenReaderFeedback(todo.text, text);
  };

  const removeTodo = (todo) => {
    dispatch(deleteTodo(todo.id));
    screenReaderFeedback(todo.text, "deleted");
    editFieldRef.current.focus();
  };

  const screenReaderFeedback = (task, feedback) => {
    setText(`${task} ${feedback}`);
  };

  return (
    <StyledMainContainer>
      <h1 tabIndex="-1" ref={editFieldRef}>
        Todo List
      </h1>
      <StyledListContainer>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </StyledListContainer>
      <TodoForm addTodo={addTodo} />
      <StyledStatusFeedback role="status" aria-live="polite">
        {text}
      </StyledStatusFeedback>
    </StyledMainContainer>
  );
};

export default App;
