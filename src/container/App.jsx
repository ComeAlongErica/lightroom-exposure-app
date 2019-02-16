import React, { useState } from 'react';
import styled from 'styled-components'

import SelectorView from '../components/SelectorView'
import EditorView from '../components/EditorView'


const Body = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #25132f;
height: 100vh;
width: 100vw;
`


const App = () => {

  return (
    <Body>
      <SelectorView />
      <EditorView />
    </Body >
  )
}

export default App;
