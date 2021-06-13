import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Featuredmovie from "./components/Featuredmovie";
import MoviesRow from "./components/MoviesRow";
import dataBaseMovies from "./dataBaseMovies";
import dataBaseMovieInf from "./dataBaseMovieInf";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

function App() {
  const [movies, setMovies] = useState([]);
  const [featuredmovie, setFeaturedmovie] = useState(null);
  const [modalInf, setModalInf] = useState(123);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function getMovie() {
      let filmes = await dataBaseMovies();
      setMovies(filmes);
      let randomMovie = Math.floor(
        Math.random() * (filmes[0].items.results.length - 1 + 1)
      );
      let moreInf = await dataBaseMovieInf(
        filmes[0].items.results[randomMovie].id
      );
      let moreInfJson = await moreInf.json(); 

      setFeaturedmovie(moreInfJson);
    }
    getMovie();
  }, []);

  return (
    <div className="App">
      <Header />

      {featuredmovie && <Featuredmovie featuredmovie={featuredmovie} />}

      <SectionMovies>
        {movies.map((movie, key) => (
          <MoviesRow
            movie={movie}
            setModalInf={setModalInf}
            setShowModal={setShowModal}
            key={key}
          />
        ))}
      </SectionMovies>

      <Footer />

      {movies.length <= 0 && <Loading />}
      {showModal && <Modal modalInf={modalInf} setShowModal={setShowModal} />}
    </div>
  );
}

const SectionMovies = styled.div`
  margin-top: -100px;
`;

export default App;
