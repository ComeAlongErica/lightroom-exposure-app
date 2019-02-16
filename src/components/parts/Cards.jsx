import React from 'react';
import styled from 'styled-components'

const CardsContainer = styled.div`
flex-grow: 1;
background-image: linear-gradient(-240deg, #332d49, #311439);
margin: 10px;
border-radius: 10px;
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);

p {
  font-size: 18px;
  margin: 10px;
  color: #9f9ba8;
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
  return (
    <CardsContainer>
      <CardTitle theme={props.theme}>Select Item Name Here</CardTitle>
      <p>Description goes here</p>
    </CardsContainer >
  )
}

export default Cards;
