import React from "react";
import styled from "styled-components";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

const Container = styled.div`
display:flex;
`
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Center = styled.div`
flex: 1;
padding: 20px;
`
const Right = styled.div`
flex:1;
`
const Logo = styled.h1`

`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`
const SocialContainer = styled.div`
display: flex;
`
const Desc = styled.p`
margin: 20px 0px;
`



const Footer = () => {
  return (
    <Container>
      <Left>
      <Logo>Ebuy</Logo>
      <Desc></Desc>

      <SocialContainer>
          <SocialIcon>
             <LinkedInIcon/>
          </SocialIcon>
          <SocialIcon>
          <InstagramIcon/>
         </SocialIcon>
         <SocialIcon>
          <TwitterIcon/>
         </SocialIcon>
         <SocialIcon>
         <GitHubIcon/>
         </SocialIcon>
      </SocialContainer>

      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;