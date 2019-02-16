import React, { Fragment } from 'react';
import styled from 'styled-components'

const EditorContainer = styled.div`
background-color: #1d0c26;
height: 95vh;
width: 30vw;
margin: 15px;
`
const StyledImg = styled.img`
  width: 115px;
  height: 115px;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  transition: transform .5s ease-out;
  :hover {
    cursor: pointer;
    transform: scale(1.5);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  }
`

const EditorView = props => {
  const { showPicture } = props
  return (
    <EditorContainer>
      {Object.values(showPicture).map((img, index) => (
        <Fragment key={index}>
          <StyledImg src={img} />
        </Fragment>
      ))}

    </EditorContainer >
  )
}

export default EditorView;
