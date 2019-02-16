import React, { useState } from 'react';
import styled from 'styled-components'

import person1 from '../images/people/blue-person.jpg'
import person2 from '../images/people/red-person.jpg'
import person3 from '../images/people/silo-person.jpg'



import Cards from './parts/Cards'

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  height: 100%;
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
  transition: 0.5s ease-out;
:hover {
  cursor: pointer;
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
font-size: 36px;
color: white;
margin: 15px 20px 10px 20px;
`

const SelectorView = () => {
  const [portraitSection, setPortraitSection] = useState(false);
  const [structureSection, setStructureSection] = useState(false);
  const [lightSection, setLightSection] = useState(false);

  const toggleSectionDisplay = (item) => {
    console.log(item)
    if (item === 'portraitSection') {
      setPortraitSection(!portraitSection)
      setStructureSection(false)
      setLightSection(false)

    } else if (item === 'structureSection') {
      setPortraitSection(false)
      setStructureSection(!structureSection)
      setLightSection(false)

    } else if (item === 'lightSection') {
      setPortraitSection(false)
      setStructureSection(false)
      setLightSection(!lightSection)
    }
  }

  const editorCards = [
    {
      title: 'Choose a Portrait',
      theme: 'linear-gradient(to right, #f750a2, #ff7c7e, #ff7c7e)',
      description: 'Select the main portrait to edit',
      item: 'portraitSection', 
      value: portraitSection,
      images: [person1, person2, person3]
    },
    {
      title: 'Provide Atmosphere',
      theme: 'linear-gradient(to right, #fcde8a, #ff8f89, #ff8f89, #ff8f89)',
      description: 'Give the image depth',
      item: 'structureSection', 
      value: structureSection,
      images: []
    },
    {
      title: 'Add the Magic',
      theme: 'linear-gradient(to right, #42e697, #3cbabb, #3cbabb)',
      description: 'Finish with a splash of fun',
      item: 'lightSection', 
      value: lightSection,
      images: []
    }
  ]

  return (
    <SelectorContainer>
      <CloseX />
      <Title>Build</Title>
      <div className={'cardContainer'}>
        {editorCards.map((selector, index) => (
          <Cards
            key={index}
            theme={{ main: selector.theme }}
            title={selector.title}
            description={selector.description}
            item={selector.item}
            changeDisplay={toggleSectionDisplay} 
            images={selector.images} 
            value={selector.value} />
        ))}
      </div>
    </SelectorContainer >
  )
}

export default SelectorView;
