import React from "react";
import loading from "../img/loading.gif";
import styled from "styled-components";

function Loading() {
  return (
    <Container>
      <img src={loading} alt="ss" />
    </Container>
  );
}

const Container = styled.div`
  background-color: #000;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
export default Loading;
