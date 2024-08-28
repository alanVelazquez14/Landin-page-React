import React from 'react'
import Hero from '../../components/Hero/Hero';
import { HomeContainerStyled } from './HomeStyled'
import { CardContainer, RecomendadosSectionStyled } from '../../components/Hero/HeroStyles';
import { FaStar } from 'react-icons/fa';
import { recomendados } from '../../data/Recomendados';
import CardsRecomendacion from '../../components/Recomendados/CardsRecomendacion';

const Home = () => {
  return (
    <HomeContainerStyled>

        <Hero />


        <RecomendadosSectionStyled>
        <h1>
          Nuestras Recomendaciones <FaStar />
        </h1>
        <CardContainer>
          {recomendados.map(recomendado => (
            <CardsRecomendacion key={recomendado.id} {...recomendado}/>
          ))}
        </CardContainer>
      </RecomendadosSectionStyled>

      
    </HomeContainerStyled>
)
}

export default Home