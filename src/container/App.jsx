import React, { useState } from 'react';
import styled from 'styled-components'

import SelectorView from '../components/SelectorView'
import EditorView from '../components/EditorView'

import person1 from '../images/people/blue-person.jpg'
import person2 from '../images/people/red-person.jpg'
import person3 from '../images/people/silo-person.jpg'

import structure1 from '../images/structure/branches.jpg'
import structure2 from '../images/structure/building.jpg'
import structure3 from '../images/structure/twiggy.jpg'

import texture1 from '../images/texture/colorful.jpg'
import texture2 from '../images/texture/lightstreak.jpg'
import texture3 from '../images/texture/sparkle.jpg'

const Body = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #25132f;
height: 100vh;
width: 100vw;
`

const App = () => {
  const [showPicture, setShowPicture] = useState({portraitSection: person1, structureSection: structure2, lightSection: texture1});
  const images = { person: [person1, person2, person3], structure: [structure1, structure2, structure3], texture: [texture1, texture2, texture3] }

  const setPersonImage = (item, url) => {
    let showPictureClone = {...showPicture}
    showPictureClone[item] = url
    setShowPicture(showPictureClone)
  }

  return (
    <Body>
      <SelectorView images={images} setPersonImage={setPersonImage} />
      <EditorView showPicture={showPicture} />
    </Body >
  )
}

export default App;
