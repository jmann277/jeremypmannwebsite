import * as React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 36pt;
  font-weight: 400;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;
const NameTitle = () => {
  return (
    <div>
      <H1>Jeremy Mann, Ph.D</H1>
    </div>
  );
};


export default NameTitle;
