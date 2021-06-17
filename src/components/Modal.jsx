import React from "react";
import styled from "styled-components";

function Modal({ modalInf, setShowModal }) {
  function hiddenModal(event) {
    if (event.target.id === "container") {
      setShowModal(false);
    }
  }
  return (
    <Container id="container" onClick={hiddenModal}>
      <ModalSpace
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${modalInf.backdrop_path})`,
          backgroundSize: "cover",
        }}
      >
        <ModalSpaceHorizontal>
          <ModalSpaceVertical>
            <h1>{modalInf.name || modalInf.title}</h1>
            <Info>
              <span>{modalInf.vote_average} pontos </span>
            </Info>
            <Description>{modalInf.overview}</Description>

            <Buttons>
              <button>▶ Assistir</button>
              <button>+ Minha Lista</button>
              <button onClick={()=>setShowModal(false)}>⨯</button>

            </Buttons>
          </ModalSpaceVertical>
        </ModalSpaceHorizontal>
      </ModalSpace>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #141414e1;
  z-index: 9999;
`;

const ModalSpace = styled.div`
  height: 90%;
  width: 60%;
  border-radius: 10px;
  background-position: center;


  @media (max-width: 760px) {
    height: 90vh;
    width: 100%;

  }
  background-repeat: no-repeat;
`;

const ModalSpaceHorizontal = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(to right, #111 30%, transparent 70%);
`;
const ModalSpaceVertical = styled.div`
  background: linear-gradient(to top, #111 10%, transparent 90%);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
  h1 {
    font-size: 40px;
    max-width: 90%;
    font-weight: bolder;
  }

  @media (max-width: 760px) {
    h1 {
      font-size: 28px;
    }
  }
`;

const Info = styled.div`
  margin-top: 15px;

  span {
    margin-right: 15px;
    font-size: 18px;
    font-weight: bold;
  }
  span:first-child {
    color: #46d369;
  }

  @media (max-width: 760px) {
    span {
      font-size: 16px;
    }
  }
`;

const Description = styled.div`
  color: #999;
  margin-top: 15px;
  max-width: 60%;
  font-size: 20px;

  @media (max-width: 760px) {
    font-size: 15px;
    max-width: 80%;
  }
`;

const Buttons = styled.div`
  button {
    margin-top: 15px;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    margin-right: 10px;
    border: none;
    cursor: pointer;
    transition: all ease 0.2s;
    &:hover {
      opacity: 0.8;
    }

    @media (max-width: 760px) {
      padding: 10px 18px;
      font-size: 14px;
    }
  }

  button:first-child {
    color: #000;
    background-color: #fff;
  }
  button:nth-child(2) {
    color: #fff;
    background-color: #333;
  }
  button:nth-child(3) {
    color: #fff;
    background-color: #333;
  }
`;

export default Modal;
