import React from 'react'
import styled from "styled-components"


function Login(props) {
  return (
    <Container>
        <Content>
        <CTA>
            <CTALogoOne src='/images/cta-logo-one.svg' />  
            <SignUp>GET IT ALL THERE</SignUp> 
            <Description>Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.</Description>
            <CTALogoTwo src='./images/cta-logo-two.png'></CTALogoTwo>
        </CTA>
        <BgImage />
        </Content>
    </Container>
  )
}

const Container=styled.section`
display:flex;
flex-direction:column;
text-align:center;
height:100vh;
`;

const Content=styled.div`
color:white;
margin-bottom:10vw;
width:100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding:80px 40px;
height:100%;
`;

const BgImage=styled.div`
background-image:url("/images/login-background.jpg");
background-size:cover;
position:absolute;
height:100%;
top:0;
right:0;
left:0;
z-index:-1;
`

const CTA=styled.div`
max-width:650px;
display:flex;
flex-direction:column;
flex-wrap:wrap;
margin-bottom:2vw;
justify-content:center;
align-items:center;
margin-top:0;
text-align:center;
margin-right:auto;
margin-left:auto;
width:100%;
`

const SignUp=styled.a`
background-color:#0063e5;
font-weight:bold;
color:#f9f9f9;
cursor:pointer;
width:100%;
padding:17px 0;
font-size:18px;
border:1px solid transparent;
border-radius:4px;
margin-bottom:1rem;
letter-spacing:1.5px;

&:hover {
    background-color: #0483ee;
  }
`

const CTALogoOne=styled.img`
margin-bottom:12px;
max-width:600px;
min-height:1px;
display:block;
width:100%;
`;

const CTALogoTwo=styled.img`
width:100%;
margin-bottom:1rem;
background-size:cover;
min-height:1px;
display:block;
max-width:600px;
vertical-align:bottom;

`

const Description=styled.p`
font-size:11px;
color: hsla(0, 0%, 95.3%, 1);
letter-spacing:1.5px;
line-height:1.5;
margin:0 0 24px;
`
export default Login