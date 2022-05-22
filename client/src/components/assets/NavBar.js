import React from "react";
import styled from "styled-components";

const NavBarContainer = styled.div`
  background-color: #4682B4;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NavTitle = styled.div`
  color: #fff;
  font-size: 2.5rem;
  line-height: 70px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;
export default function NavBar() {
  return (
    <NavBarContainer>
      <NavTitle>serach own api</NavTitle>
    </NavBarContainer>
  );
}
