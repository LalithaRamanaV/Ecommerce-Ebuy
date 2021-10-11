import React from "react";
import styled from "styled-components";
import SendIcon from '@material-ui/icons/Send';
import { mobile } from "../Responsive";

const Container = styled.div`
height:60vh;
background-color:#FFE6EE;
display:flex;
align-items:center;
justify-cotent:center;
flex-direction:column;

`
const Title = styled.div`
  font-size: 70px;
  font-family: "Varela Round", sans-serif;
  margin-top:40px;
`
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  font-family: "Varela Round";
  margin-bottom:20px;
  ${mobile({textAlign:"center"})}


`
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({width:"80%"})}
`
const Input = styled.input`
  border:none;
  flex: 8;
  padding-left: 20px;
`
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc> Get the updates of your favorite products.</Desc>
      <InputContainer>
      <Input placeholder="Your email"/>
      <Button>
      <SendIcon/>
      </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
