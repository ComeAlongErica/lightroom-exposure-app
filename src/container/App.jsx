import React, { useState } from 'react';
import styled from 'styled-components'

import Portrait from '../components/Portrait'
import EditorView from '../components/EditorView'


const Body = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
background-color: #312037;
height: 100vh;
width: 100vw;
`

const App = () => {
  return (
    <Body>
      <Portrait />
      <EditorView />
    </Body >
  )
}

export default App;
