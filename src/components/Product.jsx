import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined';
import SearchOutlined from '@material-ui/icons/SearchOutlined';


const Info = styled.div`
  opacity:0;
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  background-color:rgba(0,0,0,0.2);
  z-index:3;
  display:flex;
  align-items:center;
  justify-content:center;
  transition: all 0.5ease;
  cursor:pointer;
  `
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

   &:hover ${Info}{
    opacity: 1;
  }
`
const Circle = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  background-color: white;
  position: absolute;
`
const Image = styled.img`
height: 75%;
  z-index: 2;
`

const Icon = styled.div`
  width:40px;
  height:40px;
  border-radius:50%;
  background-color:white;
  display:flex;
  align-items:center;
  justify-content:center;
  margin:10px;
  transition:all 0.5 ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
        <ShoppingCartOutlinedIcon/>
        </Icon>
        <Icon>
        <FavoriteBorderOutlined/>
        </Icon>
        <Icon>
        <SearchOutlined/>
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;