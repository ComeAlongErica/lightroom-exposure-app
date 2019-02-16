import React, { Fragment } from 'react';
import styled from 'styled-components'

const ImgSelector = styled.div`
height: 100%;
width: 100%;
position: relative;
display: flex;
justify-content: space-around;
align-items: center;
i.fa-long-arrow-alt-left {
  position: absolute;
  left: 10px;
  top: 10px;
  color: #9f9ba8;
  font-size: 20px;
  transition: transform .5s ease-out;
  :hover {
    transform: scale(1.2);
    cursor: pointer;
  }
}

`
const StyledImg = styled.img`
  width: 100px;
  height: 100px;
`



const CardImgSelector = (props) => {
  const { images, changeDisplay, item } = props
  console.log(images)

  return (
    <ImgSelector>
      <i className="fas fa-long-arrow-alt-left" onClick={() => changeDisplay(item)}></i>
      {images.map((img, index) => (
        <Fragment key={index}>
          <StyledImg src={require('../../images/people/blue-person.jpg')} />
        </Fragment>
      ))}
    </ImgSelector>

  )
}

export default CardImgSelector;
