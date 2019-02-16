import React, { useState } from 'react';
import styled from 'styled-components'

const Card = styled.div`
height: 30%;
display: flex;
flex-direction: column;
justify-content: center;
background-image: linear-gradient(-240deg, #332d49, #311439);
margin: 10px;
border-radius: 10px;
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
:hover {
  cursor: pointer;
  transform: scale(1.05);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
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
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-size: 40px;
margin: 0 10px;
`

const Cards = (props) => {
  const { title, theme, description, changeDisplay, item } = props
  return (
    <Card onClick={() => changeDisplay(item)}>
      {!item && <div>
        <CardTitle theme={theme}>{title}</CardTitle>
          <div>
            <p className={'description'}>{description}</p>
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>}
    </Card >
  )
}

export default Cards;
