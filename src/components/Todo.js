import Checkbox from "../framework/Checkbox";
import Trashcan from "../framework/Trashcan";
import styled from "styled-components";

const StyledItemContainer = styled.div`
  width: 100%;
  margin: 0 auto 1.2rem;
  display: grid;
  grid-template-columns: 10% 80% 10%;
`;

const StyledItemText = styled.div`
  margin: 0 1rem;
  color: ${(props) => (props.isCompleted ? "#c9c9c9" : "")};
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "")};
`;

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  const handleOnChange = () => {
    completeTodo(index);
  };

  const handleOnClick = () => {
    removeTodo(index);
  };

  return (
    <StyledItemContainer>
      <label>
        <Checkbox onChange={handleOnChange} />
      </label>
      <StyledItemText isCompleted={todo.isCompleted}>
        {todo.text}
      </StyledItemText>
      <Trashcan onClick={handleOnClick}>Remove todo</Trashcan>
    </StyledItemContainer>
  );
};

export default Todo;
