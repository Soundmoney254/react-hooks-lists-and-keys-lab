import React from "react";
import { v4 as uuidv4 } from 'uuid';


function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map((link) => (
        <a href={`#${link}`} key={uuidv4()} >{link}</a>
      ))}
    </nav>
  );
}

export default NavBar;