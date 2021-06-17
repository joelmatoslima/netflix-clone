import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <p>Direitos de imagem para Netflix</p>
      <p>
        {" "}
        Dados pegos no site{" "}
        <a target="_black" href="https://www.themoviedb.org/">
          themoviedb.org
        </a>{" "}
      </p>
      <p>
        Link do projeto no{" "}
        <a target="_black" href="https://github.com/joelsama/netflix-clone">
          GitHub
        </a>{" "}
      </p>
    </Container>
  );
}

const Container = styled.footer`
  text-align: center;
  font-size: 18px;
  margin: 80px 0;
  a {
    text-decoration: none;
    color: #9c2d2d;
  }
`;

export default Footer;
