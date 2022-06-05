import React from "react";
import styled from "styled-components";

const APIContainer = styled.div`
  width: 100%;
`;

const APIWrapper = styled.div`
  background-color: ${({ desc }) => desc.request === "GET" && "#BDE6F1"};
  background-color: ${({ desc }) => desc.request === "POST" && "#C3E5AE"};
  background-color: ${({ desc }) => desc.request === "PUT" && "#F1E1A6"};
  background-color: ${({ desc }) => desc.request === "DELETE" && "#F4BBBB"};
  padding: 1rem;
  margin-bottom: 0.5rem;
`;
const APITitle = styled.div`
  margin-bottom: 0.3rem;
`;
const APIURL = styled.div`
  width: 100%;
`;

export default function ApiDesc({ desc }) {
  return (
    <APIContainer>
      <APIWrapper desc={desc}>
        <APITitle>{desc.title}</APITitle>
        <APIURL>{desc.url}</APIURL>
      </APIWrapper>
    </APIContainer>
  );
}
