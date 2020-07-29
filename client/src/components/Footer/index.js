import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer text-white text-center">
      <span className="text-white">Copyright © 2020</span>
      <h3>TV Track is powered by </h3>
      <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
        alt="TMDb" className="img-responsive"
        width="20%" />
    </footer>
  );
}

export default Footer;
