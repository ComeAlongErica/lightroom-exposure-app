import React, { Fragment } from 'react';
import styled from 'styled-components'

const EditorContainer = styled.div`
position: relative;
background-color: #1d0c26;
height: 95vh;
width: 30vw;
margin: 15px;
`
const DoubleExposure = styled.img`
  width: 90%;
  height: auto;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  transition: transform .5s ease-out;
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  mix-blend-mode: overlay;
`

const EditorView = props => {
  const { showPicture } = props
  return (
    <EditorContainer>
      <DoubleExposure src={showPicture.portraitSection} />

      {Object.values(showPicture).map((img, index) => (
        <Fragment key={index}>
          <DoubleExposure src={img} />
        </Fragment>
      ))}

    </EditorContainer >
  )
}

export default EditorView;
