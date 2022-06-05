import React from 'react'
import styled from 'styled-components'
const FooterContainer = styled.div`
width: 100%;
background-color: #000;
height: 100px;
display: flex;
align-items: center;
justify-content: center;
`

const FooterTitle = styled.div`
color: lightgray;
`
export default function Footer() {
  return (
    <FooterContainer>
        <FooterTitle>API</FooterTitle>
    </FooterContainer>
  )
}
