import React from "react";
import styled from "styled-components";
import {
  FaUserTie,
  FaDollarSign,
  FaBusinessTime,
  FaTransgender,
} from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
const CardContainer = styled.div`
  padding: 1rem;
  box-shadow: 3px 2px 15px lightgray;
  border-radius: 5px;
  transition: all 0.3s ease;
  :hover {
    background-color: #333333;
    color: #fff;
  }
`;
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-weight: bold;
  svg {
    margin-right: 1rem;
  }
`;
const CardBody = styled.div``;
const CardText = styled.div`
  padding: 0.2rem 0;
  display: flex;
  align-items: center;
  svg {
    margin-right: 1rem;
  }
`;

// left: ${({ postion }) => postion === "left" && "40px"};

export default function DataTable({ element }) {
  return (
    <CardContainer>
      <CardHeader>
        <FaUserTie />
        {element.name}
      </CardHeader>
      <CardBody>
        <CardText>
          <MdOutlineWork />
          {element.title}
        </CardText>
        <CardText>
          <FaDollarSign /> {element.salary} kr/month
        </CardText>
        <CardText>
          <FaBusinessTime />
          {element.exp} years
        </CardText>
        {element.gender === "female" ? (
          <CardText style={{ color: "red" }}>
            <FaTransgender /> {element.gender}
          </CardText>
        ) : (
          <CardText style={{ color: "blue" }}>
            <FaTransgender /> {element.gender}
          </CardText>
        )}
      </CardBody>
    </CardContainer>
  );
}
