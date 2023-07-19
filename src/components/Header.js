import React from 'react'
import { styled } from 'styled-components'

function Header(props) {
  return (
    <Nav>
        <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      <NavMenu>
        <a href="/home">
            <img src="/images/home-icon.svg" alt="HOME" />
            <span>HOME</span>
        </a>
        <a>
              <img src="/images/search-icon.svg" alt="SEARCH" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" alt="ORIGINALS" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>SERIES</span>
            </a>
      </NavMenu>
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
display:flex;
flex-flow:row nowrap;
height:100%;
gap:2rem;
margin:0;
padding:0;
margin-right:auto;
position:relative;
margin-left:2rem;

a{
    display:flex;
    justify-content:center;
    align-items:center;
    padding:0 12px;
    gap:5px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
      cursor:pointer;
    }


${'' /* @media only screen and (max-width:768px){
    display:none;
} */}

span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      cursor:pointer;


&:before{
    background-color:rgb(249,249,249);
    border-radius:0px 0px 4px 4px;
    bottom:-6px;  // so that the line starts at the bottom of the button
    content:"";
    height:2px;
    left:0px;
    opacity:0;
    position:absolute;
    right:0px;
    transform-origin:left center;
    transform: scaleX(0);
    transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    visibility:hidden;
    width:auto;

  }

}

&:hover{
    span:before{
        transform:scaleX(1);
        visibility:visible;
        opacity:1 !important;
    }
  }
}



`

export default Header