import React from 'react'
import { styled } from 'styled-components'

function Header(props) {
  return (
    <Nav>
        <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      <NavMenu>menu</NavMenu>
    </Nav>
  )
}

const Nav=styled.nav`
position:fixed;
top:0;
right:0;
left:0;
background-color:#090b13;
height:12vh;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 3rem;
letter-spacing:16px;
z-index:3;

`

const Logo=styled.a`
padding:0;
width:80px;
cursor:pointer;
margin-top:4px;
max-height:70px;
display:inline-block;

img{
    display:block;
    width:100%
}
`

const NavMenu=styled.div`
align-items:center;

`

export default Header