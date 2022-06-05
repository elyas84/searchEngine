import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Spinner from "../assets/Spinner";
import Employee from "../assets/Employee";

const ViewContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  text-transform: uppercase;
  letter-spacing: 1.2px;
`;
const ViewTitle = styled.div`
  padding: 2rem 0;
`;
const ViewBody = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;

  // responsivness
  @media (max-width: 1025px) {
   
  }
  @media (max-width: 769px) {
    
  }
  @media (max-width: 426px) {
    grid-template-columns: repeat(1, 1fr);
  }

`;

export default function ViewEmployeePage() {
  const [empls, setEmpls] = useState([]);
  const [loading, setLoading] = useState(false);

  const getEmployees = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/employees");
      setEmpls(res.data.employees);
      setLoading(false);
    } catch (error) {
      if (error.response.error) {
        console.log(error.response.message);
      }
    }
  };
  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <ViewContainer>
      <ViewTitle>Here displyes all employees as a grid</ViewTitle>
      <ViewBody>
        {loading ? (
          <Spinner />
        ) : (
          empls &&
          empls.length &&
          empls.map((emp, id) => <Employee emp={emp} key={id} />)
        )}
      </ViewBody>
    </ViewContainer>
  );
}
