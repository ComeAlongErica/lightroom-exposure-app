import React from 'react';
import styled from 'styled-components'

import Cards from './parts/Cards'

const SelectorContainer = styled.div`
display: flex;
flex-direction: column;
background-color: #1d0c26;
height: 95vh;
width: 30vw;
margin: 15px;
div {
  flex-grow: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
  padding: 10px;
  height: 100%;
}
`

const Title = styled.h1`
font-size: 40px;
color: white;
margin: 20px 20px 10px 20px;
`

const SelectorView = () => {
  return (
    <SelectorContainer>
      <Title>Build</Title>
      <div>
        <Cards />
        <Cards />
        <Cards />
      </div>
    </SelectorContainer >
  )
}

export default SelectorView;
