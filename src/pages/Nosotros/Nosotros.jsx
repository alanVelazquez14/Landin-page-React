import React from "react";
import {
  AboutUsContainerStyled,
  AboutUsInfoStyled,
  ImgContainer,
  VerticalDivider,
} from "./NosotrosStyled.js";

const Nosotros = () => {
  return (
    <>
      <AboutUsContainerStyled>
        <div>
          <h1>CONOCÉ NUESTRA HISTORIA</h1>
          <h2>- Breve Reseña Histórica -</h2>
          <p>
            Louis LASSEN, inmigrante alemán, crea en 1895 la primera hamburguesa
            en EE.UU. En aquel entonces, la inmigración europea partía del
            puerto de Hamburgo, y Nueva York era uno de los principales
            destinos. La receta de la hamburguesa como la conocemos se gestó en
            Alemania, más precisamente en Hamburgo. En Estados Unidos se hizo
            tan popular que llegó a ser la comida nacional y un emblema. La
            hamburguesa lleva ya más de un siglo junto a los estadounidenses.
          </p>
          <img src="img/Productos/nosotros-home-burger.jpg" />
          <h2>- Conocé HOME BURGUER BAR -</h2>
          <p>
            En 2006 abrió sus puertas <span>Home Burger Bar</span>. Con aquel
            primer local queríamos demostrar que una hamburguesa sana y de
            calidad era algo que nada tenía que ver con el “Fast food”. Desde el
            principio apostamos por la máxima exigencia y honestidad a la hora
            de elaborar nuestra carta: ganadería 100% ecológica y certificada,
            pan de papa artesanal yverduras frescas de proveedores locales. Hoy
            más que nunca, queremos dasles las gracias y decirles que seguimos
            haciendo las cosas con la misma honestidad y exigencia. Para que
            siga siendo verdad que para comer sano y rico{" "}
            <span>“NO PLACE LIKE HOME”</span>.
          </p>
        </div>
        <div>
          <AboutUsInfoStyled>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                {" "}
                <h2>FILOSOFÍA</h2>
                <p>
                  Nuestro nombre refleja de forma clara y fiel la clase de
                  negocio que aspiramos a ser: aquel que ofrece un trato y un
                  producto que esperamos en nuestra propia casa. Nos gustan las
                  cosas bien hechas, los productos frescos y ecológicos,
                  trabajar con los mejores proveedores y cuidar hasta el mínimo
                  detalle, desde el reciclaje de nuestros productos hasta la
                  elaboración del menú más variado e interesante que se nos
                  puede ocurrir.
                </p>
              </div>
              <VerticalDivider />
              <div>
                {" "}
                <h2>PRODUCTOS E INGREDIENTES</h2>
                <p>
                  Nos distinguimos por el uso de ingredientes de calidad y por
                  colaborar con proveedores locales. Nuestras hamburguesas son
                  100% de carne ecológica, y las picamos personalmente en
                  nuestros restaurantes utilizando solo partes nobles del
                  animal, sin mezclarla con otras partes o tipos de carne.
                  Además, utilizamos pollo de corral y verduras de tiendas
                  locales. Apostamos por la comida natural y por los proveedores
                  pequeños porque nos gusta tener un trato cercano con ellos.
                </p>
              </div>
            </div>
          </AboutUsInfoStyled>
        </div>
        <ImgContainer>
          <img src="img/Productos/nosotros.jpeg" alt="Sobre nosotros" />
          <img src="img/Productos/nosotros2.jpg" alt="Sobre nosotros" />
          <img src="img/Productos/nosotros3.webp" alt="Sobre nosotros" />
        </ImgContainer>
        <div>
          <h2>
            Si queres formar parte del equipo de <span>Home Burguer Bar</span>
          </h2>
          <p>mandanos tu curriculum vitae a: </p>
          <a href="#">homeburguerbar@gmail.com</a>
        </div>
      </AboutUsContainerStyled>
    </>
  );
};

export default Nosotros;
