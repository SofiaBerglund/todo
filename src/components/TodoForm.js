import { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  margin-top: 40px;
`;

const StyledFormContainer = styled.form`
  width: 100%;
  display: flex;
  position: relative;
`;

const StyledLabel = styled.label`
  width: 100%;
`;

const StyledInput = styled.input`
  width: 80%;
  height: 40px;
  border-radius: 40px;
  border: 2px solid #c9c9c9;
`;

const StyledAddButton = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  background: none;
  cursor: pointer;
  position: absolute;
  bottom: -9px;
  right: 0;
  padding: 0;
`;

const AddIcon = styled.svg`
  fill: #ffba74;
  stroke-width: 1.6px;
  stroke: #fff;
  stroke-linecap: round;
  stroke-linejoin: round;
  /* transform: scale(2); */
`;

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) return;
    addTodo(value, new Date());
    event.target.reset();
    setValue("");
  };

  return (
    <StyledContainer>
      <h2>Create Todo</h2>
      <StyledFormContainer onSubmit={handleSubmit}>
        <StyledLabel htmlFor="todo">
          Todo description
          <StyledInput
            id="todo"
            onChange={(e) => setValue(e.target.value)}
            type="text"
          ></StyledInput>
        </StyledLabel>
        <StyledAddButton aria-label="Add" type="submit">
          <AddIcon aria-hidden="true" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="#ffba74"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </AddIcon>
        </StyledAddButton>
      </StyledFormContainer>
    </StyledContainer>
  );
};

export default TodoForm;
