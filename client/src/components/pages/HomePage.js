import React from "react";
import styled from "styled-components";
import { API_desc } from "../../data";
import ApiDesc from "../assets/ApiDesc";
const HomeContainer = styled.div`
  width: 100%;
  background-color: #fff;
`;
const IntroSection = styled.div`
  padding: 3rem 0;
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center;
`;
const IntroTxt = styled.div`
  width: 100%;
  background-color: lightgray;
  color: gray;
  padding: 1rem;
`;
const HomeBodyTitle = styled.div`
  padding: 1rem 0;
  width: 100%;
`;
const APIContainer = styled.div``;

const HomeBody = styled.div``;
const Span = styled.span`
font-weight: bolder;
padding: 1rem 0;
font-style: italic;
`
export default function HomePage() {
  return (
    <HomeContainer>
      <IntroSection>custom API</IntroSection>
      <IntroTxt>
        This is a completly custome API and you don't need to sucbcribe for
        sending request to the SERVER
      </IntroTxt>
      <HomeBody>
        <HomeBodyTitle>Documentation <Span>baseUri: http://localhost:5000/api</Span> </HomeBodyTitle>
        <APIContainer>
          {API_desc.map((desc, i) => (
            <ApiDesc key={i} desc={desc} />
          ))}
        </APIContainer>
      </HomeBody>
    </HomeContainer>
  );
}
