import styled from "styled-components";

const StyledButton = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  background: none;
  cursor: pointer;
`;

const TrashcanIcon = styled.svg`
  fill: none;
  stroke-width: 2px;
  stroke: #9b70c9;
  stroke-linecap: round;
  stroke-linejoin: round;
  transform: scale(3);
`;

const TrashcanContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  text-align: right;
`;

const Trashcan = (props) => {
  return (
    <TrashcanContainer>
      <StyledButton aria-label="delete todo" onClick={props.onClick}>
        <TrashcanIcon aria-hidden="true" viewBox="0 0 24 24">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </TrashcanIcon>
      </StyledButton>
    </TrashcanContainer>
  );
};

export default Trashcan;
