import React from "react";
import Hero from "../../components/Hero/Hero";
import { HomeContainerStyled } from "./HomeStyled";
import {
  CardContainer,
  RecomendadosSectionStyled,
} from "../../components/Hero/HeroStyles";
import { FaStar } from "react-icons/fa";
import CardsRecomendacion from "../../components/Recomendados/CardsRecomendacion";
import NosotrosResumen from "../../components/ResumenNosotros/NosotrosResumen";
import { useSelector } from "react-redux";

const Home = () => {
  const { recommended } = useSelector((state) => state.recommended);

  return (
    <HomeContainerStyled>
      <Hero />

      <RecomendadosSectionStyled>
        <h1>
          Nuestras Recomendaciones <FaStar />
        </h1>
        <CardContainer>
          {recommended.map((recomendado) => (
            <CardsRecomendacion key={recomendado.id} {...recomendado} />
          ))}
        </CardContainer>
      </RecomendadosSectionStyled>

      <NosotrosResumen />
    </HomeContainerStyled>
  );
};

export default Home;
