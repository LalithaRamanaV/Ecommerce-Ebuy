import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import styled from "styled-components";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge } from "@material-ui/core";
import { mobile } from "../Responsive";


const Container = styled.div`
        height: 60px;
        ${mobile({height:"50px"})};
`
const Wrapper = styled.div`
       padding: 10px 20px;
       display:flex;
       align-items:center;
       justify-content:space-between;
       cursor:pointer;
        ${mobile({padding:"10px 0px"})}
       `

const Left =styled.div`
  flex:1;
  display:flex;
  align-items:center;
`
const Language = styled.span`
 font-size:14px;
 cursor:pointer;
 ${mobile({display:"none"})};
`
const SearchContainer = styled.div`
border:0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`
const Input = styled.input`
 border:none;
 ${mobile({width:"50px"})};
`

const Center =styled.div`
 flex:1;
 text-align:center;

`
const Logo = styled.h1`
font-weight:bold;
${mobile({fontSize:"24px"})};
`

const Right =styled.div`
  flex:1;
  display:flex;
  justify-content:flex-end;
  align-items:center;
  ${mobile({ flex: 2, justifyContent:"center"})};
`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
${mobile({fontSize:"12px", marginLeft:"10px"})};
`

const Navbar = () => {
  return (
    <Container>
    <Wrapper>
    <Left>
    <Language>EN</Language>
    <SearchContainer>
    <Input placeholder="Search" />
            <SearchIcon  style={{ color: "gray", fontSize: 16 }}/>
    <SearchIcon/>
    </SearchContainer>
    </Left>
    <Center><Logo>Ebuy</Logo></Center>
    <Right>
     <MenuItem>Register</MenuItem>
     <MenuItem>Sign In</MenuItem>
     <MenuItem>
       <Badge badgeContent={4} color="primary">
        <ShoppingCartIcon/>
       </Badge>
     </MenuItem>
    </Right>
    </Wrapper>
    </Container>
  )
}
export default Navbar;