import React, { useState } from 'react';
import styled from 'styled-components'

import Cards from './parts/Cards'

const theme = {
  main: 'linear-gradient(to right, #f750a2 0%, #ff7c7e 100%)'
};

const SelectorContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
background-color: #1d0c26;
height: 95vh;
width: 30vw;
margin: 15px;
.cardContainer {
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
.fa-times {
  font-size: 35px;
  color: white;
  margin: 20px;
  position: absolute;
  right: 0;
  top: 0;
  :hover {
    cursor: pointer;
  }
}
`

const CloseX = styled.div`
  position: absolute;
  margin: 20px;
  right: 0;
  top: 0;
  width: 32px;
  height: 32px;
  opacity: 0.3;
:hover {
  opacity: 1;
}
:before, :after {
  position: absolute;
  left: 15px;
  content: '';
  height: 33px;
  width: 2px;
  background-color: white;
}
:before {
  transform: rotate(45deg);
}
:after {
  transform: rotate(-45deg);
}
`

const Title = styled.h1`
font-size: 40px;
color: white;
margin: 15px 20px 10px 20px;
`

const SelectorView = () => {
  const [portraitSection, setPortraitSection] = useState(false);
  const [lightSection, setLightSection] = useState(false);
  const [structureSection, setStructureSection] = useState(false);

  const editorCards = [
    {
      title: 'Choose a Portrait',
      theme: 'linear-gradient(to right, #f750a2, #ff7c7e, #ff7c7e)',
      description: 'Select the main portrait to edit'
    },
    {
      title: 'Provide Atmosphere',
      theme: 'linear-gradient(to right, #fcde8a, #ff8f89, #ff8f89, #ff8f89)',
      description: 'Give the image depth'
    },
    {
      title: 'Add the Magic',
      theme: 'linear-gradient(to right, #42e697, #3cbabb, #3cbabb)',
      description: 'This is where you add the splash of fun'
    }
  ]

  return (
    <SelectorContainer>
      <CloseX />
      <Title>Build</Title>
      <div className={'cardContainer'}>
        {editorCards.map(selector => (
          <Cards theme={{ main: selector.theme }} title={selector.title} description={selector.description} />
        ))}
      </div>
    </SelectorContainer >
  )
}

export default SelectorView;
