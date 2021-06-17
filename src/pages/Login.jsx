import React, { useState } from "react";
import styled from "styled-components";
import bg_netflix from "../img/bg-netflix.jpg";
import netflix_logo from "../img/netflix-logo.svg";
import { useHistory } from "react-router-dom";

const data = {
  user: "admin",
  password: "admin",
};

export default function Login() {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState(false);

 
  function handlerEnter(e) {
    e.preventDefault();

    if (user === data.user && password === data.password) {
      history.push("/");
      console.log("redirecionando");
    } else {
      setErro(true);
    }
  }
  return (
    <Container>
      <Opacity>
        <Logo>
          <img src={netflix_logo} alt="" />
        </Logo>
        <Form>
          <form action="">
            <div>
              <h2>Entrar</h2>

              <Row>
                <input
                  type="text"
                  placeholder="Email ou numero de telefone"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
              </Row>
              <Row>
                <input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Row>
              <Row>
                <input type="submit" value="Entrar" onClick={handlerEnter} />
              </Row>

              {erro && (
                <Erro>
                  {" "}
                  <strong>Usuario</strong> ou <strong>Senha</strong> incorreto
                </Erro>
              )}

              <span>
                Usuario: admin <br /> Senha: admin
              </span>
            </div>
          </form>
        </Form>
      </Opacity>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg_netflix});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background-color: rgba(0, 0, 0, 0.75);
    height: 500px;
    display: flex;
    justify-content: center;
    padding: 60px 68px 40px;
    border-radius: 5px;
    div {
      width: 314px;
      h2 {
        margin-bottom: 20px;
        font-size: 32px;
        @media (max-width: 600px) {
          margin-top: 150px;
        } 
      } 
      @media (max-width: 600px) {
        padding: 10px;
      }

    }
    input {
      width: 100%;
      height: 50px;
      background: #333;
      border: none;
      border-radius: 5px;
      margin-top: 15px;
      padding-left: 15px;
      color: white;
      font-size: 16px;

      :focus {
        outline: none;
      }
      ::placeholder {
        font-size: 16px;
        color: #8c8c8c;
      }
    }

    input[type="submit"] {
      background: #e50914;
      color: white;
      margin-top: 50px;
      cursor: pointer;
    }
    @media (max-width: 600px) {
      width: 100%;
      height: 100vh;
      padding: 0;
    }
  }
  span {
    color: #888;
    margin-top: 10px;
    display: inline-block;
  }
`;
const Opacity = styled.div`
  background-color: rgba(0, 0, 0, 0.507);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.div`
  position: absolute;
  top: 20px;
  left: 50px;

  img {
    width: 166px;
  }
`;

const Row = styled.div`
  display: flex;
`;

const Form = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;  
`;

const Erro = styled.div`
  background: #e87c03;
  padding: 18px 0;
  border-radius: 5px;
  text-align: center;

  margin-top: 50px;
`;
