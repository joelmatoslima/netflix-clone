import React, { useState, useEffect } from "react";
import styled from "styled-components";
import netflixLogo from "../img/netflix-logo.svg";
import usuario from "../img/usuario.png";

function Header() {
  const [blackHeader, setBlackHeader] = useState(false);

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

  return (
    <Head black={blackHeader}>
      <div>
        <a href="/">
          <img src={netflixLogo} alt="Netflix" />
        </a>
      </div>

      <div>
        <a href="/">
          <img src={usuario} alt="Usuario" />
        </a>
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
  }
  div:last-child img {
    border-radius: 5px;
  }

  img {
    height: 100%;
  }

  ${({ black }) =>
    black &&
    `    background-color: #141414;
  `}
`;
export default Header;
