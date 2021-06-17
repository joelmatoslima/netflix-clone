import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import netflixLogo from "../img/netflix-logo.svg";
import usuario from "../img/usuario.png";

function Header() {
  const [blackHeader, setBlackHeader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    function scrollListener() {
      if (window.scrollY > 30) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }
    window.addEventListener("scroll", scrollListener);

    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  function handleShowMenu(e) {
    e.preventDefault();
    setShowMenu(true);
  }
  function handleHiddeMenu() {
    setShowMenu(false);
  }

  return (
    <Head black={blackHeader}>
      <div>
        <a href="/home">
          <img src={netflixLogo} alt="Netflix" />
        </a>
      </div>

      <div>
        <img src={usuario} alt="Usuario" onClick={handleShowMenu} id="menu" />
        {showMenu && (
          <Exit onClick={handleHiddeMenu}>
            {" "}
            <div>
              <Link to="/login">Sair</Link>{" "}
            </div>
          </Exit>
        )}
      </div>
    </Head>
  );
}

const Head = styled.div`
  z-index: 999;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all ease 0.5s;
  div {
    margin: 0 30px;
  }
  div:first-child {
    height: 25px;
  }
  div:last-child {
    height: 35px;
    a {
      color: white;
      text-decoration: none;

    }
  }
  div:last-child img {
    border-radius: 5px;
  }

  img {
    height: 100%;
    cursor: pointer;
  }

  ${({ black }) =>
    black &&
    `    background-color: #141414;
  `}
`;

const Exit = styled.div`
  width: 100%;
  height: 100vh !important;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 999999;

  div {
    position: absolute;
    right: 27px;
    color: white;
    background-color: #2f2f33;
    margin-top: 60px;
    padding: 10px 20px 10px;
    border-radius: 5px;
  }
`;

export default Header;
