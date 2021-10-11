import React from "react";
import styled from "styled-components";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import { mobile } from "../Responsive";

const Container = styled.div`
display:flex;
${mobile({flexDirection:"column"})}
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
${mobile({display:"none"})}
`
const Right = styled.div`
flex:1;
padding:20px;
${mobile({backgroundColor:"#fff8f8"})}
`
const Logo = styled.h1`

`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color:white;
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
const Title = styled.h3`
margin-bottom:30px;
`
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`
const ListItem = styled.li`
width:50%;
margin-bottom:10px;
`

const ContactItem = styled.div`
display:flex;
margin-bottom:20px;
align-items:center;
`
const Payment = styled.img`
width:50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
      <Logo>Ebuy</Logo>
      <Desc>Created by Lalitha Vadavalli</Desc>

      <SocialContainer>
          <SocialIcon color="DEBAD6">
            <a href="https://www.linkedin.com/in/lalitha-vadavalli-438818173/"><LinkedInIcon/></a>
          </SocialIcon>
          <SocialIcon color="DEBAD6">
          <a href="https://github.com/LalithaRamanaV"><InstagramIcon/></a>
         </SocialIcon>
         <SocialIcon color="DEBAD6">
         <a href="https://twitter.com/Sailalitha_V"><TwitterIcon/></a>
         </SocialIcon>
         <SocialIcon color="DEBAD6">
         <a href="https://github.com/LalithaRamanaV"><GitHubIcon/></a>
         </SocialIcon>
      </SocialContainer>

      </Left>
      <Center>
      <Title>Useful Links</Title>
      <List>
      <ListItem>Home</ListItem>
      <ListItem>Cart</ListItem>
      <ListItem>Men Fashion</ListItem>
      <ListItem>Women Fashion</ListItem>
      <ListItem>Accessories</ListItem>
      <ListItem>Order Tracking</ListItem>
      <ListItem>Wishlist</ListItem>
      <ListItem>Watches</ListItem>
      <ListItem>Terms</ListItem>
      <ListItem>My Account</ListItem>
      </List>
      </Center>
      <Right>
      <Title>Contact</Title>
      <ContactItem>
      <RoomIcon style={{marginRight:"10px"}}/>Andhra Pradesh,India
      </ContactItem>
      <ContactItem>
      <MailOutlinedIcon style={{marginRight:"10px"}}/>contact@lalithavadavalli.com
      </ContactItem>
      <ContactItem>
       <PhoneIcon style={{marginRight:"10px"}}/>+1 23 456 789
      </ContactItem> 
      <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
};

export default Footer;