import React from 'react';
import styled from 'styled-components'

import Cards from './parts/Cards'

const theme = {
  main: 'linear-gradient(to right, #f750a2 0%, #ff7c7e 100%)'
};

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
        <Cards theme={{ main: "linear-gradient(to right, #f750a2 0%, #ff7c7e 100%)" }}/>
        <Cards theme={{ main: "linear-gradient(to right, #fcde8a 0%, #ff8f89 100%)" }}/>
        <Cards theme={{ main: "linear-gradient(to right, #42e697 0%, #3cbabb 100%)" }}/>
      </div>
    </SelectorContainer >
  )
}

export default SelectorView;
