import React from "react";
import { CategoryContainerStyled } from "./CategoriasStyled";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/categoriesSlice/categoriesSlice";

const Categorias = ({ title, img, category }) => {
  const { selectedCategory } = useSelector((state) => state.categories);

  const dispatch = useDispatch();
  const isSelected = category === selectedCategory;

  return (
    <CategoryContainerStyled
      selected={isSelected}
      onClick={() => dispatch(selectCategory(category))}
    >
      <h4>
        <span>-</span> {title} <span>-</span>
      </h4>
      <img src={img} alt={category} />
    </CategoryContainerStyled>
  );
};

export default Categorias;
