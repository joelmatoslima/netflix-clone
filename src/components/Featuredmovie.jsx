import React from "react";
import styled from "styled-components";

function Featuredmovie({ featuredmovie }) {
  let year = new Date(featuredmovie.first_air_date).getFullYear();

  let genres = featuredmovie.genres.map((genre) => {
    return genre.name;
  });

  return (
    <Featured
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${featuredmovie.backdrop_path})`,
        backgroundSize: "cover",
      }}
    >
      <FeaturedHorizontal>
        <FeaturedVertical>
          <h1>{featuredmovie.name}</h1>
          <Info>
            <span>{featuredmovie.vote_average} pontos </span>
            <span>{year}</span>
            <span>
              {featuredmovie.number_of_seasons} temporada
              {featuredmovie.number_of_seasons > 1 && "s"}
            </span>
          </Info>
          <Description>{featuredmovie.overview}</Description>

          <Buttons>
            <button>▶ Assistir</button>
            <button>+ Minha Lista</button>
          </Buttons>

          <Genres>
            <strong>Gênero: </strong>
            {genres.join(", ")}
          </Genres>
        </FeaturedVertical>
      </FeaturedHorizontal>
    </Featured>
  );
}

const Featured = styled.div`
  height: 100vh;
  @media (max-width: 760px) {
    height: 90vh;
    background-position: center;
  }
  background-repeat: no-repeat;
`;

const FeaturedHorizontal = styled.div`
  height: inherit;
  width: inherit;
  background: linear-gradient(to right, #111 30%, transparent 70%);
`;
const FeaturedVertical = styled.div`
  background: linear-gradient(to top, #111 10%, transparent 90%);
  height: inherit;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
  h1 {
    font-size: 60px;
    font-weight: bolder;
  }

  @media (max-width: 760px) {
    h1 {
      font-size: 40px;
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
  max-width: 40%;
  font-size: 20px;

  @media (max-width: 760px) {
    font-size: 18px;
    max-width: 100%;
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
  button:last-child {
    color: #fff;
    background-color: #333;
  }
`;

const Genres = styled.div`
  margin-top: 15px;
  span {
    margin: 0 5px;
  }

  @media (max-width: 760px) {
    font-size: 14px;
  }
`;
export default Featuredmovie;
