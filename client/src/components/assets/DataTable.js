import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  padding: 1rem;
  box-shadow: 3px 2px 15px lightgray;
  border-radius: 5px;
  :hover {
    background-color: #333333;
    color: #fff;
  }
`;
const CardHeader = styled.div`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;
const CardBody = styled.div``;
const CardText = styled.div`
  padding: 0.2rem 0;
`;

export default function DataTable({ element }) {
  return (
    <CardContainer>
      <CardHeader>{element.name}</CardHeader>
      <CardBody>
        <CardText>Position: {element.title}</CardText>
        <CardText>Salary: {element.salary} kr/month</CardText>
        <CardText>Experience: {element.exp}</CardText>
        <CardText>Gender: {element.gender}</CardText>
      </CardBody>
    </CardContainer>
  );
}
