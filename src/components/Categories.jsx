
import styled from "styled-components";
import React  from 'react';
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
dispaly:flex;
padding:20px;
justify-content: space-between;
`

const Categories = () => {
  return (
    <Container>
        {categories.map((item) => ( <CategoryItem item={item} key={item.id}/>) )}
    </Container>
  );
};

export default Categories;