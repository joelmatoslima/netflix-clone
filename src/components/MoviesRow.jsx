import React, { useState } from "react";
import styled from "styled-components";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

function MoviesRow({ movie, setModalInf, setShowModal }) {
  const [srollX, setScrollX] = useState(0);

  function handlerLeft() {
    let x = srollX + window.innerWidth / 2;
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  function handlerRight() {
    let x = srollX - window.innerWidth / 2;
    if (window.innerWidth - movie.items.results.length * 250 > x) {
      x = window.innerWidth - movie.items.results.length * 250 - 60;
    }
    setScrollX(x);
  }

  return (
    <Container>
      <RowArea>
        <NavigateBefore onClick={handlerLeft}>
          <NavigateBeforeIcon style={{ fontSize: 50 }} />
        </NavigateBefore>
        <NavigateNext onClick={handlerRight}>
          <NavigateNextIcon style={{ fontSize: 50 }} />
        </NavigateNext>

        <ListArea>
          <h2> {movie.title}</h2>

          <RowList
            style={{
              marginLeft: srollX,
              width: movie.items.results.length * 250,
            }}
          >
            {movie.items.results.length > 0 &&
              movie.items.results.map((item, key) => { 
                return (
                  <Item key={key} onClick={()=>{
                    setModalInf(item)
                    setShowModal(true)
                  }}>
                    <img
                      src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                      alt={item.title}
                    />
                  </Item>
                );
              })}
          </RowList>
        </ListArea>
      </RowArea>
    </Container>
  );
}

const Container = styled.div``;

const NavigateBefore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  z-index: 99;
  width: 40px;
  height: 320px;
  background-color: #16151599;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.2s;
`;

const NavigateNext = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  z-index: 99;
  width: 40px;
  height: 320px;
  background-color: #16151599;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.2s;
  overflow-x: hidden;
`;

const ListArea = styled.div`

  
`;

const RowArea = styled.div`
  overflow-x: hidden;
  margin-left: 30px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :hover ${NavigateBefore} {
    opacity: 1;
  }
  :hover ${NavigateNext} {
    opacity: 1;
  }
  @media (max-width: 760px) {
    ${NavigateBefore}, ${NavigateNext} {
      opacity: 1;
    }
  }
`;

const RowList = styled.div`
  transition: all ease 0.7s;
`;

const Item = styled.div`
  display: inline-block;
  width: 250px;
  cursor: pointer;

  img {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;
  }
  img:hover {
    transform: scale(1);
  }
`;

export default MoviesRow;
