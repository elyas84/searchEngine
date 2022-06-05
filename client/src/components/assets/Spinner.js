import React from "react";
import styled from "styled-components";
const SpinnerContainer = styled.div`
  width: 70px;
  height: 70px;
`;
const SpinnerImg = styled.img`
  width: 100%;
`;
export default function Spinner() {
  return (
    <SpinnerContainer>
      <SpinnerImg src="https://i.gifer.com/7plQ.gif"></SpinnerImg>
    </SpinnerContainer>
  );
}
