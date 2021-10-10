import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import styled from "styled-components";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge } from "@material-ui/core";


const Container = styled.div`
        height: 60px;
`
const Wrapper = styled.div`
       padding: 10px 20px;
       display:flex;
       align-items:center;
       justify-content:space-between;
       cursor:pointer;
       `

const Left =styled.div`
  flex:1;
  display:flex;
  align-items:center;
`
const Language = styled.span`
 font-size:14px;
 cursor:pointer;
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
`

const Center =styled.div`
 flex:1;
 text-align:center;

`
const Logo = styled.h1`
font-weight:bold;
`

const Right =styled.div`
  flex:1;
  display:flex;
  justify-content:flex-end;
  align-items:center;
`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
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