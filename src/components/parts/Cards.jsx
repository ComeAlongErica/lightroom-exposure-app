import React from 'react';
import styled from 'styled-components'

import CardImgSelector from './CardImgSelector'

const Card = styled.div`
min-width: 400px;
height: 30%;
display: flex;
flex-direction: column;
justify-content: center;
background-image: linear-gradient(-240deg, #332d49, #311439);
margin: 10px;
border-radius: 10px;
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
transition: 0.5s ease;
:hover {
  transform: scale(1.05);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  .cardFront {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
}
.description {
  display: inline;
  font-size: 18px;
  margin: 10px;
  color: #9f9ba8;
}
i.fa-long-arrow-alt-right {
  color: #9f9ba8;
  font-size: 16px;
  transition: transform .5s ease-out;
}
:hover .fa-long-arrow-alt-right {
    transform: translateX(10px) scale(1.2);
  }
`

const CardTitle = styled.h2`
background: linear-gradient(to right, #f750a2 0%, #ff7c7e 100%);
background: ${props => props.theme.main};
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-size: 40px;
margin: 0 10px 8px 10px;
`

const Cards = (props) => {
  const { title, theme, description, changeDisplay, item, images, value, setPersonImage } = props

  return (
    <Card>
      {!value && <div className={'cardFront'} onClick={() => changeDisplay(item)}>
        <CardTitle theme={theme}>{title}</CardTitle>
          <div>
            <p className={'description'}>{description}</p>
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>}
        {value && <CardImgSelector changeDisplay={changeDisplay} images={images} item={item} setPersonImage={setPersonImage} />}
    </Card >
  )
}

export default Cards;
