import styled from "styled-components";

const StyledTime = styled.div`
  font-size: 0.8rem;
  color: #000;
  font-style: italic;
`;

const Time = ({ timeStamp }) => {
  const getTimeStamp = () => {
    if (timeStamp) {
      const dateAdded = new Date(timeStamp);
      const date = dateAdded.toLocaleDateString("swe-SE");
      const time = dateAdded.toLocaleTimeString("swe-SE");

      return <p>Added: {date} {time}</p>;
    } else return <p>Added: Not available</p>;
  };

  return <StyledTime>{getTimeStamp()}</StyledTime>;
};

export default Time;
