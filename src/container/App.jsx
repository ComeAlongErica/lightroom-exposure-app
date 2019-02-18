import React, { useState } from 'react';
import styled from 'styled-components'

import SelectorView from '../components/SelectorView'
import EditorView from '../components/EditorView'

import person1 from '../images/people/person1.jpg'
import person2 from '../images/people/person2.jpg'
import person3 from '../images/people/person3.jpg'

import structure1 from '../images/structure/structure1.jpg'
import structure2 from '../images/structure/structure2.jpg'
import structure3 from '../images/structure/structure3.jpg'

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
  const [showPicture, setShowPicture] = useState({portraitSection: '', structureSection: '', lightSection: ''});
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
