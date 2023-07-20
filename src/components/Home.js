import React from 'react'
import { styled  } from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers';
function Home() {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
    </Container>
  )
}


const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 100px);
  overflow-x: hidden;
  
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  ${'' /* oveflow:visible; */}

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home