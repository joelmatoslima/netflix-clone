const API_KEY = "6e91c6ee9572c471b5abf7afac584df9";

async function moreInf(id) {
  return fetch(
    `https://api.themoviedb.org/3/tv/${id}?language=pt-BR&api_key=${API_KEY}`
  );
}

export default moreInf;
