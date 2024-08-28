import { Button } from "../UI/Button/Button";
import {
  HeroContainerStyled,
  HeroImgContainerStyled,
  HeroTextContainerStyled,
} from "./HeroStyles";


const Hero = () => {
  return (
    <>
      <HeroContainerStyled>
        <HeroTextContainerStyled>
          <h1>
            Hamburguesas estilo casero, <span>pensadas para vos.</span>
          </h1>
          <p>
            Las hamburguesas son elaboradas artesanalmente, seleccionando el
            mejor blend, que acompañadas con nuestro pan recién horneado,
            ingredientes naturales y aderezos gourmet; brindan una combinación
            de sabor única!
          </p>
          <Button radius={"15"}>Ver más</Button>
        </HeroTextContainerStyled>

        <HeroImgContainerStyled>
          <img src="img/Productos/portada_hero.png" alt="Hamburguesa" />
        </HeroImgContainerStyled>
      </HeroContainerStyled>
    </>
  );
};

export default Hero;
