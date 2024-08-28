import React from "react";
import {
  LinkNosotrosStyled,
  NosotrosContainerStyled,
} from "./NosotrosResumenStyted";
import { Link } from "react-router-dom";

const NosotrosResumen = () => {
  return (
    <NosotrosContainerStyled>
      <h1>Conocé sobre nuestra historia</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
        distinctio neque rem quasi sunt itaque, blanditiis eligendi numquam eius
        perspiciatis quo vero sit, officiis ratione enim exercitationem
        consequuntur molestiae dignissimos?
      </p>

      <div>
        <p>
          Querés saber más sobre nosotros?{" "}
          <Link to="/nosotros">
            <LinkNosotrosStyled>Hace click acá</LinkNosotrosStyled>
          </Link>{" "}
        </p>
      </div>
    </NosotrosContainerStyled>
  );
};

export default NosotrosResumen;
