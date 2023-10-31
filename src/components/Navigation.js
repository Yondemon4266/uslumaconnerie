import React, { useEffect } from "react";

const Navigation = () => {
  let scrollPosition = 40;
  console.log(window.scrollY);
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", (e) => {
      if (window.scrollY < scrollPosition) {
        navbar.style.top = 0;
      } else if (window.scrollY > scrollPosition) {
        navbar.style.top = "-200px";
      }
      scrollPosition = window.scrollY;
    });
  }, []);
  return (
    <nav className="navigation" id="navbar">
      <a href="#accueil" className="logo"></a>
      <div className="navigation-container">
        <ul className="ulnav">
          <a href="#accueil">
            <li>Accueil</li>
          </a>
          <a href="#services">
            <li>Services</li>
          </a>
          <a href="#apropos">
            <li>À propos</li>
          </a>
          <a href="#projets">
            <li>Projets</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
