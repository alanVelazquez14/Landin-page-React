import React, { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import {
  HomeContainerStyled,
  RecomendadosSectionStyled,
  CardContainer,
} from "./HomeStyled";

import { FaStar } from "react-icons/fa";
import CardsRecomendacion from "../../components/Recomendados/CardsRecomendacion";
import NosotrosResumen from "../../components/ResumenNosotros/NosotrosResumen";
import { useSelector } from "react-redux";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
