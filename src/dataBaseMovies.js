const API_BASE = "https://api.themoviedb.org/3";
const API_KEY = "6e91c6ee9572c471b5abf7afac584df9";

async function getMovie(endpoint) {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}


const getHomeList = async () => {
  return [
    {
      slug: "originals",
      title: "Originais do Netflix",
      items: await getMovie(
        `/discover/tv?width_network=123&language=pt-BR&api_key=${API_KEY}`
      ),
    },

    {
      slug: "trending",
      title: "Recomendados para Você",
      items: await getMovie(
        `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
      ),
    },

    {
      slug: "toprated",
      title: "Em Alta",
      items: await getMovie(
        `/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`
      ),
    },

    {
      slug: "action",
      title: "Ação",
      items: await getMovie(
        `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
      ),
    },

    {
      slug: "comedy",
      title: "Comédia",
      items: await getMovie(
        `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
      ),
    },

    {
      slug: "horror",
      title: "Terror",
      items: await getMovie(
        `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
      ),
    },

    {
      slug: "romance",
      title: "Romance",
      items: await getMovie(
        `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
      ),
    },

    {
      slug: "documentary",
      title: "Documentários",
      items: await getMovie(
        `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
      ),
    },
  ];
};
export default getHomeList;
