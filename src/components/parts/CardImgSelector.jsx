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
@media only screen and (max-width: 414px) {
  justify-content: center;
}
`
const StyledImg = styled.img`
  width: 115px;
  height: 115px;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  transition: transform .5s ease-out;
  :hover {
    cursor: pointer;
    transform: scale(1.2);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  }
  @media only screen and (max-width: 1024px) {
    height: 50px;
    width: 50px;
    :hover {
    transform: scale(1.5);
    }
  }
  @media only screen and (max-width: 414px) {
  margin: 5px;
  }
`



const CardImgSelector = (props) => {
  const { images, changeDisplay, item, setPersonImage } = props
  return (
    <ImgSelector className={'imgSelector'} >
      <i className="fas fa-long-arrow-alt-left" onClick={() => changeDisplay(item)}></i>
      {images.map((img, index) => (
        <Fragment key={index}>
          <StyledImg src={img} onClick={() => setPersonImage(item, img)} />
        </Fragment>
      ))}
    </ImgSelector>

  )
}

export default CardImgSelector;
