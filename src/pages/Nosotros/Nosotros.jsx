import React from "react";
import {
  AboutUsContainerStyled,
  AboutUsInfoStyled,
  VerticalDivider,
} from "./NosotrosStyled.js";

const Nosotros = () => {
  return (
    <>
      <AboutUsContainerStyled>
        <div>
          <h1>CONOCÉ NUESTRA HISTORIA</h1>
          <img src="img/nosotros-home-burger.jpg" />
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
      </AboutUsContainerStyled>
    </>
  );
};

export default Nosotros;
