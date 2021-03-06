import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'
import { X } from 'react-feather'
import { useTransition, animated } from 'react-spring'

import SelectorView from '../components/SelectorView'
import EditorView from '../components/EditorView'

import person1 from '../images/people/person1.jpg'
import person2 from '../images/people/person2.jpg'
import person3 from '../images/people/person3.jpg'

import structure1 from '../images/structure/structure1.jpg'
import structure2 from '../images/structure/structure2.jpg'
import structure3 from '../images/structure/structure3.jpg'

import texture1 from '../images/texture/colorful.jpg'
import texture2 from '../images/texture/lightstreak.jpg'
import texture3 from '../images/texture/sparkle.jpg'

const Body = styled.div`
display: flex;
justify-content: center;
background-color: #25132f;
height: 100vh;
width: 100vw;
@media only screen and (max-width: 1024px) {
  flex-direction: column;
}
`

const Container = styled.div`
z-index: 1000;
width: 450px;
position: absolute;
left: 50%;
transform: translateX(-50%);
bottom: 0px;
`

const Message = styled(animated.div)`
box-sizing: border-box;
position: relative;
overflow: hidden;
`

const Content = styled.div`
display: flex;
overflow: hidden;
justify-content: space-around;
color: white;
background: rgba(68, 81, 89, .4);
opacity: 0.9;
padding: 12px 22px;
font-size: 1em;
height: auto;
border-radius: 3px;
margin: 5px 0;
`
const Button = styled('button')`
cursor: pointer;
pointer-events: all;
outline: 0;
border: none;
background: transparent;
display: flex;
align-self: flex-end;
overflow: hidden;
margin: 0;
padding: 0;
padding-bottom: 16px;
color: rgba(255, 255, 255, 0.5);
:hover {
  color: rgba(255, 255, 255, 0.6);
}
`
const Life = styled(animated.div)`
position: absolute;
bottom: 0;
left: 0px;
width: auto;
background-image: linear-gradient(130deg, #00b4e6, #00f0e0);
height: 5px;
`

let id = 0

function MessageHub({ config = { tension: 125, friction: 20, precision: 0.1 }, timeout = 3000, children }) {
  const [refMap] = useState(() => new WeakMap())
  const [cancelMap] = useState(() => new WeakMap())
  const [items, setItems] = useState([])
  const transitions = useTransition(items, item => item.key, {
    from: { opacity: 0, height: 0, life: '100%' },
    enter: item => async next => await next({ opacity: 1, height: refMap.get(item).offsetHeight }),
    leave: item => async (next, cancel) => {
      cancelMap.set(item, cancel)
      await next({ life: '0%' })
      await next({ opacity: 0 })
      await next({ height: 0 })
    },
    onRest: item => setItems(state => state.filter(i => i.key !== item.key)),
    config: (item, state) => (state === 'leave' ? [{ duration: timeout }, config, config] : config),
  })

  useEffect(() => void children(msg => setItems(state => [...state, { key: id++, msg }])), [])
  return (
    <Container>
      {transitions.map(({ key, item, props: { life, ...style } }) => (
        <Message key={key} style={style}>
          <Content ref={ref => ref && refMap.set(item, ref)}>
            <Life style={{ right: life }} />
            <p>{item.msg}</p>
            <Button
              onClick={e => {
                e.stopPropagation()
                cancelMap.has(item) && cancelMap.get(item)()
              }}>
              <X size={18} />
            </Button>
          </Content>
        </Message>
      ))}
    </Container>
  )
}

const App = () => {
  const [showPicture, setShowPicture] = useState({portraitSection: '', structureSection: '', lightSection: ''});
  const images = { person: [person1, person2, person3], structure: [structure1, structure2, structure3], texture: [texture1, texture2, texture3] }
  const ref = useRef(null)
  const alertMessage = 'Hover your polaroid to see something special.'
  const messageClick = () => ref.current(alertMessage)
  const setPersonImage = (item, url) => {
    let showPictureClone = {...showPicture}
    showPictureClone[item] = url
    setShowPicture(showPictureClone)
  }

  return (
    <Body>
      <SelectorView images={images} setPersonImage={setPersonImage} messageClick={messageClick}/>
      <EditorView showPicture={showPicture} />
      <MessageHub children={add => (ref.current = add)} />
    </Body >
  )
}

export default App;
