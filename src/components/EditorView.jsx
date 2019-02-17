import React from 'react';
import styled from 'styled-components'

const EditorContainer = styled.div`
flex-grow: 1;
position: relative;
background-color: #1d0c26;
height: 95vh;
margin: 15px;
`
const SingleImg = styled.img`
  width: 70%;
  max-width: 700px;
  height: auto;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  transition: transform .5s ease-out;
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
`
const DoubleExposure = styled(SingleImg)`
  mix-blend-mode: screen;
`

const EditorView = props => {
  const { showPicture } = props

  return (
    <EditorContainer>
      <SingleImg src={showPicture.portraitSection} />
      <DoubleExposure src={showPicture.structureSection} />
      <DoubleExposure src={showPicture.lightSection} />
    </EditorContainer>
  )
}

export default EditorView;
