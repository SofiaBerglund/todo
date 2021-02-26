import styled from "styled-components";

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const CheckIcon = styled.svg`
  fill: none;
  stroke: #9b70c9;
  stroke-width: 6px;
  overflow: visible;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 7px;
  border: 2px solid #c9c9c9;
  transition: visibility 150ms;
  cursor: pointer;
  ${CheckIcon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
  ${HiddenCheckbox}:focus + & {
    outline: 3px solid rgb(12, 224, 65);
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Checkbox = ({ onChange, isCompleted }) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox aria-label="Done with todo" onChange={() => onChange()} />
      <StyledCheckbox aria-hidden="true" checked={isCompleted}>
        <CheckIcon aria-hidden="true" viewBox="0 0 34 34">
          <polyline points="38 -4 17 22 6 13" />
        </CheckIcon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

export default Checkbox;
