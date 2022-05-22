import React from "react";
import styled from "styled-components";
const SpinnerContainer = styled.div``;
const SpinnerImg = styled.img``;
export default function Spinner() {
  return (
    <SpinnerContainer>
      <SpinnerImg src="https://i.gifer.com/7plQ.gif"></SpinnerImg>
    </SpinnerContainer>
  );
}
