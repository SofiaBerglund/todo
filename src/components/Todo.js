import Checkbox from "../framework/Checkbox";
import Trashcan from "../framework/Trashcan";
import Time from "../framework/Time";
import styled from "styled-components";

const StyledItemContainer = styled.div`
  width: 100%;
  margin: 0 auto 1.2rem;
  display: grid;
  grid-template-columns: 10% 80% 10%;
`;

const StyledItemText = styled.div`
  font-size: 1.1rem;
  margin: 0 1rem 4px;
  color: ${(props) => (props.isCompleted ? "#c9c9c9" : "")};
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "")};
`;

const StyledTimeContainer = styled.div`
  grid-column-start: 2;
  margin: 0 1rem;
`;

const Todo = ({ todo, completeTodo, removeTodo }) => {
  const handleChange = () => {
    completeTodo(todo);
  };

  const handleOnClick = () => {
    removeTodo(todo);
  };

  return (
    <StyledItemContainer>
      <label>
        <Checkbox onChange={handleChange} isCompleted={todo.isCompleted} />
      </label>
      <StyledItemText isCompleted={todo.isCompleted}>
        {todo.text}
      </StyledItemText>
      <Trashcan onClick={handleOnClick}>Remove todo</Trashcan>
      <StyledTimeContainer>
        <Time timeStamp={todo.timeStamp} />
      </StyledTimeContainer>
    </StyledItemContainer>
  );
};

export default Todo;
