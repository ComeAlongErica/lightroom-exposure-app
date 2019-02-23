import React, { useState, Fragment } from 'react';
import styled from 'styled-components'

import Cards from './parts/Cards'

const SelectorContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
background-color: #1d0c26;
height: 95vh;
min-width: 70px;
width: 440px;
margin: 20px 10px 20px 0;
transition: .8s ease;
&&.moveElement {
  width: 70px;
  height: 70px;
  border-radius: 50px;
}
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

const SelectorView = props => {
  const { images, setPersonImage } = props
  const [closeSelector, setCloseSelector] = useState(false);
  const [portraitSection, setPortraitSection] = useState(false);
  const [structureSection, setStructureSection] = useState(false);
  const [lightSection, setLightSection] = useState(false);

  const toggleCloseSelector = () => setCloseSelector(!closeSelector)
  const toggleSectionDisplay = (item) => {
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
      images: images.person
    },
    {
      title: 'Provide Atmosphere',
      theme: 'linear-gradient(to right, #fcde8a, #ff8f89, #ff8f89, #ff8f89)',
      description: 'Give the image depth',
      item: 'structureSection',
      value: structureSection,
      images: images.structure
    },
    {
      title: 'Add the Magic',
      theme: 'linear-gradient(to right, #42e697, #3cbabb, #3cbabb)',
      description: 'Finish with a splash of fun',
      item: 'lightSection',
      value: lightSection,
      images: images.texture
    }
  ]

  let moveElement = !closeSelector ? '' : 'moveElement'

  return (
    <SelectorContainer className={moveElement}>
      <CloseX onClick={() => toggleCloseSelector()} />
      {!closeSelector && <Fragment>
        <Title>Editor</Title>
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
              value={selector.value}
              setPersonImage={setPersonImage}
              closeSelector={closeSelector} />
          ))}
        </div>
        </Fragment>
      }
    </SelectorContainer >
  )
}

export default SelectorView;
