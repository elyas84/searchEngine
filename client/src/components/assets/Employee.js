import React from "react";
import styled from "styled-components";
import { FaUserTie, FaWallet, FaTransgender } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BsFillLaptopFill } from "react-icons/bs";

const EmplCard = styled.div`
  border: 1px solid lightgray;
  padding: 1rem;
`;
const EmplCardHeader = styled.div`
  margin-bottom: 1rem;
  svg {
    margin-right: 1rem;
  }
`;
const EmplCardBody = styled.div`
  width: 100%;
`;
const EmplInfo = styled.div`
  margin: 1rem 0;
  svg {
    margin-right: 1rem;
  }
`;
const EmplGender = styled.div`
  margin: 1rem 0;
  svg {
    margin-right: 1rem;
  }

  background-color: ${({gender})=> gender==="male" ? "#243A73" : "#A760FF"};
  padding: .3rem .5rem;
  color: #fff;
`;
export default function Employee({ emp }) {
  return (
    <EmplCard>
      <EmplCardHeader>
        <FaUserTie />
        {emp.name}
      </EmplCardHeader>
      <EmplCardBody>
        <EmplInfo>
          <MdWork />
          {emp.job_Id}
        </EmplInfo>
        <EmplInfo>
          <BsFillLaptopFill />
          {emp.exp} years
        </EmplInfo>
        <EmplInfo>
          <FaWallet />
          {emp.salary} $
        </EmplInfo>
        <EmplGender gender={emp.gender}>
          <FaTransgender />
          {emp.gender}
        </EmplGender>
      </EmplCardBody>
    </EmplCard>
  );
}
