import React from "react";
import { Link } from "react-router-dom";
import { NavBarContainer, NavTitle, NavLogo, NavOption } from "./Common";

function Navbar(props) {
  return (    
    <NavBarContainer>
      <NavTitle>
        <Link to="/">
          <NavLogo src={props.src}></NavLogo>
          {props.title}
        </Link>
      </NavTitle>
      <NavOption>
        <Link to="/create">Create Recipe</Link>
      </NavOption>
    </NavBarContainer>
  );
}

export default Navbar;