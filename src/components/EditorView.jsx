import React from 'react';
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const EditorContainer = styled.div`
flex-grow: 1;
position: relative;
background-color: #1d0c26;
height: 95vh;
margin: 20px;
display: flex;
justify-content: center;
align-items: center;
.card-container {
  width: 500px;
  height: 560px;
  position: relative;
}
`
const SingleImg = styled.img`
  border-radius: 3px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 500px;
  height: auto;
  border: 20px solid #ece9e6;
  border-bottom: 80px solid #ece9e6;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.8);
  transition: box-shadow .8s ease;
  :hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 1);
  }
`
const DoubleExposure = styled(SingleImg)`
  mix-blend-mode: screen;
`
const calc = (x, y) => [-(y - window.innerHeight / 2) / 150, (x - window.innerWidth / 2) / 40, 1.025]
const trans = (x, y, s) => `perspective(1500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const EditorView = props => {
  const { showPicture } = props
  const [items, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  let portraitShow = showPicture.portraitSection.length === 0 ? false : true
  let structureShow = showPicture.structureSection.length === 0 ? false : true
  let lightShow = showPicture.lightSection.length === 0 ? false : true

  return (
    <EditorContainer>
      <section className={'card-container'}>
        <animated.div
          class="card"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: items.xys.interpolate(trans) }}
        >
          {portraitShow && <SingleImg src={showPicture.portraitSection} />}
          {structureShow && <DoubleExposure src={showPicture.structureSection} />}
          {lightShow && <DoubleExposure src={showPicture.lightSection} />}
        </animated.div>
      </section>
    </EditorContainer>
  )
}

export default EditorView;
