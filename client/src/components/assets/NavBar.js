import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { navBarForUser } from "../../data";

// css part will be written here

const NavContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: #121214;
  line-height: 70px;
`;

const Nav = styled.nav`
  width: 90%;
  color: #fff;
  margin: 0 auto;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  display: flex;
  justify-content: space-between;
`;
const Brand = styled.div`
  font-size: 3rem;
  width: 100px;
  height: 30px;
  font-weight: bold;
  a {
    color: #fff;
  }
`;
const UL = styled.ul`
  display: flex;
`;
//  left: ${({ postion }) => postion === "left" && "40px"};
const LI = styled.li`
  a {
    color: #fff;
    font-size: 0.8rem;
    letter-spacing: 1.5px;
    padding: 1rem;
    margin-left: 1rem;
    :hover {
      background-color: #273a73;
      transition: all 0.2s ease-in-out;
      border-radius: 10px;
    }
  }
`;

export default function NavBar() {
  return (
    <NavContainer>
      <Nav>
        <Brand>
          <Link to="/">api</Link>
        </Brand>
        <UL>
          {navBarForUser.map((navItem, i) => (
            <LI
              key={i}
            >
              <Link to={navItem.path}>{navItem.title}</Link>
            </LI>
          ))}
        </UL>
      </Nav>
    </NavContainer>
  );
}
