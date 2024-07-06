import { Button } from "../UI/Button/Button"
import { HeroContainerStyled, HeroImgContainerStyled, HeroTextContainerStyled } from "./HeroStyles"

export const Hero = () => {
  return (
    <HeroContainerStyled>
        <HeroTextContainerStyled>
            <h1>Hamburguesas gourmet estilo casero, <span>pensadas para vos.</span></h1>
            <p>Las hamburguesas son elaboradas artesanalmente, seleccionando el mejor blend, que acompañadas con nuestro pan recién horneado, ingredientes naturales y aderezos gourmet; brindan una combinación de sabor única!</p>
            <Button radius={'15'}>Ver más</Button>
        </HeroTextContainerStyled>

        <HeroImgContainerStyled>
            <img src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Mozzarella-1024x1024.png" alt="Hamburguesa" />
        </HeroImgContainerStyled>
    </HeroContainerStyled>
  )
}
