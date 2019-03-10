import React from 'react';
import styled from 'styled-components'

import CardImgSelector from './CardImgSelector'

const Card = styled.div`
min-width: 400px;
height: 30%;
min-height: 70px;
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
  .card-front {
    cursor: pointer;
  }
}
.description {
  font-size: 18px;
  margin: 10px;
  color: #9f9ba8;
}
i.fa-long-arrow-alt-right {
  color: #9f9ba8;
  font-size: 16px;
  transition: transform .5s ease-out;
  margin-left: 10px;
}
:hover .fa-long-arrow-alt-right {
    /* transform: translateX(10px) scale(1.2); */
  }
  @media only screen and (max-width: 1024px) {
  &&.card {
    width: 30%;
    height: 150px;
    min-width: 150px;
  }
  .description {
    font-size: 12px;
  }
  .description-container {
    height: auto;
  }
}
@media only screen and (max-width: 414px) {
  &&.card {
    width: calc(100% - 20px);
    height: 200px;
  }
  .description {
    margin: 0 10px 20px 10px
  }
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
@media only screen and (max-width: 1024px) {
  font-size: 30px;
}
@media only screen and (max-width: 414px) {
  font-size: 25px;
  margin: 20px 10px 0px 10px;
}
`

const Cards = (props) => {
  const { title, theme, description, changeDisplay, item, images, value, setPersonImage } = props

  return (
    <Card className={'card'}>
      {!value && <div className={'card-front'} onClick={() => changeDisplay(item)}>
        <CardTitle theme={theme}>{title}</CardTitle>
        <div className={'description-container'}>
          <p className={'description'}>{description}
            <i className="fas fa-long-arrow-alt-right"></i>
          </p>
        </div>
      </div>}
      {value && <CardImgSelector changeDisplay={changeDisplay} images={images} item={item} setPersonImage={setPersonImage} />}
    </Card >
  )
}

export default Cards;
