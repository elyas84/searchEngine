import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import DataTable from "../assets/DataTable";
import Spinner from "../assets/Spinner";
const HomeContainer = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  background-color: #fff;
  display: flex;
`;
const SideBar = styled.div`
  flex: 0.5;
  width: 100%;
  height: 100%;
  background-color: #333333;
`;

const SideBarUL = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  text-align: center;
`;
const SideBarLI = styled.li`
  color: #fff;
  padding: 1rem 0;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const DataContainer = styled.div`
  flex: 2;
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

const DataRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;

const Form = styled.form``;
const FormLabel = styled.label`
  color: #fff;
`;
const FormDropDown = styled.select`
  padding: 0.5rem 0.5rem;
  width: 100%;
  outline: none;
  margin-top: 1rem;
`;
const FormOption = styled.option`
  margin-top: 0.5rem;
`;

const FormWrapper = styled.div`
  padding: 1rem;
`;

const ButtonContainer = styled.div`
  width: 100px;
  margin: 0 auto;
`;
const Button = styled.button`
  width: 100%;
  cursor: pointer;
`;
export default function HomePage() {
  // functions

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const getUniqueExp = data.map((item) => {
    return item.exp;
  });
  const uniqueExp = [
    ...new Set(
      getUniqueExp.sort((a, b) => {
        return a - b;
      })
    ),
  ];

  const getUniqueSalary = data.map((item) => {
    return item.salary;
  });
  const uniqueSalary = [
    ...new Set(
      getUniqueSalary.sort((a, b) => {
        return a - b;
      })
    ),
  ];
  const [selectExp, setSelectExp] = useState("");
  const [selectSalary, setSelectSalary] = useState("");
  const getEmployees = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/employees");
      setData(res.data.employees);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmployees();
    filterDataByExp(selectExp);
    filterDataBySalary(selectSalary);
  }, [selectExp, selectSalary]);

  const filterDataByExp = async (input) => {
    try {
      setLoading(true);
      const res = await axios.get(
        "http://localhost:5000/api/employees/search/exp?exp=" + input
      );
      setData(res.data.employees);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const filterDataBySalary = async (input) => {
    try {
      setLoading(true);
      const res = await axios.get(
        "http://localhost:5000/api/employees/search/salary?salary=" + input
      );
      setData(res.data.employees);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };


  const reset = () => {
    getEmployees();
  };

  return (
    <HomeContainer>
      <SideBar>
        <SideBarUL>
          <SideBarLI>Employers</SideBarLI>
          <ButtonContainer>
            <Button
              onClick={() => {
                reset();
              }}
            >
              Reset
            </Button>
          </ButtonContainer>
          <Form>
            <FormWrapper>
              <FormLabel>Filter by Experience</FormLabel>

              <FormDropDown
                onChange={(e) => {
                  setSelectExp(e.target.value);
                }}
              >
                {uniqueExp.map((item, i) => (
                  <FormOption key={i}>{item}</FormOption>
                ))}
              </FormDropDown>
            </FormWrapper>

            <FormWrapper>
              <FormLabel>Filter by Salary</FormLabel>

              <FormDropDown
                onChange={(e) => {
                  setSelectSalary(e.target.value);
                }}
              >
                {uniqueSalary.map((item, i) => (
                  <FormOption key={i}>{item}</FormOption>
                ))}
              </FormDropDown>
            </FormWrapper>
          </Form>
        </SideBarUL>
      </SideBar>
      <DataContainer>
        {loading && <Spinner />}

        <DataRow>
          {data && data.length
            ? data.map((element, id) => (
                <DataTable key={id} element={element} />
              ))
            : null}
        </DataRow>
      </DataContainer>
    </HomeContainer>
  );
}
