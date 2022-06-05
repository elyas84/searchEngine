import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Spinner from "../assets/Spinner";
import Employee from "../assets/Employee";

const FilterContainer = styled.div`
  width: 100%;
  padding: 3rem 0;
`;

const FilterTitle = styled.div`
  text-transform: uppercase;
  letter-spacing: 1.2px;
`;

const SearchByDropDown = styled.div`
  padding: 1rem 0;
`;
const DropDown = styled.select`
  outline: none;
`;
const DropDownLabel = styled.label`
  margin-right: 1rem;
`;
const Options = styled.option``;

// reuse
const ViewBody = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  @media (max-width: 1025px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 769px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 426px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Error = styled.div``;

export default function FilterPage() {
  const [emplsSl, setEmplsl] = useState([]);
  const [empls, setEmpls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [salary, setSalary] = useState(1000);
  const [err, setErr] = useState("");

  const getEmployeesBySalary = async (input) => {
    try {
      setLoading(true);
      const res = await axios.get(
        "http://localhost:5000/api/employees/search/salary?salary=" + input
      );
      setEmplsl(res.data.employees);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  // getting salary

  useEffect(() => {
    getEmployeesBySalary(salary);
  }, [salary]);

  return (
    <FilterContainer>
      <FilterTitle>
        Here you can filter all users based on thier properties
      </FilterTitle>
      <SearchByDropDown>
        <DropDownLabel>Search by Salary</DropDownLabel>

        <DropDown
          onChange={(e) => {
            setSalary(e.target.value);
          }}
        >
          <Options value="1000">1000</Options>
          <Options value="2000">2000</Options>
          <Options value="3000">3000</Options>
          <Options value="4000">4000</Options>
          <Options value="5000">5000</Options>
        </DropDown>
      </SearchByDropDown>
      <ViewBody>
        {loading ? (
          <Spinner />
        ) 
        
         : (
          emplsSl &&
          emplsSl.length &&
          emplsSl.map((emp, id) => <Employee emp={emp} key={id} />)
        )}
      </ViewBody>
    </FilterContainer>
  );
}
