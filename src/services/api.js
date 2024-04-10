import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://api.unsplash.com/search/photos",
//   KEY: 'tEOYGyqRNrrpNcoRKp33yFBNWiliLSsoe9TBEqr2O5U',

// });

// "https://api.unsplash.com/search/photos?client_id=tEOYGyqRNrrpNcoRKp33yFBNWiliLSsoe9TBEqr2O5U&query=offic

export const requestTrendFilms = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const KEY = "af791a3763b186085b0b4847247fe248";

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjc5MWEzNzYzYjE4NjA4NWIwYjQ4NDcyNDdmZTI0OCIsInN1YiI6IjY2MTNiODliYWM2MTdjMDE3ZGIxNGYxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j7hnSu8wYW6LUZf2fiw-N3kDCrByYvsLHFfdiSCOKfY",
    },
    params: {
      key: KEY,
      accept: "application/json",
    },
  };

  const { data } = await axios.get(url, options);

  return data;
};

export const requestFilmDetailsById = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const KEY = "af791a3763b186085b0b4847247fe248";

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjc5MWEzNzYzYjE4NjA4NWIwYjQ4NDcyNDdmZTI0OCIsInN1YiI6IjY2MTNiODliYWM2MTdjMDE3ZGIxNGYxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j7hnSu8wYW6LUZf2fiw-N3kDCrByYvsLHFfdiSCOKfY",
    },
    params: {
      key: KEY,
      accept: "application/json",
    },
  };

  const { data } = await axios.get(url, options);

  return data;
};

export const requestFilmCreditsById = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  const KEY = "af791a3763b186085b0b4847247fe248";

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjc5MWEzNzYzYjE4NjA4NWIwYjQ4NDcyNDdmZTI0OCIsInN1YiI6IjY2MTNiODliYWM2MTdjMDE3ZGIxNGYxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j7hnSu8wYW6LUZf2fiw-N3kDCrByYvsLHFfdiSCOKfY",
    },
    params: {
      key: KEY,
      accept: "application/json",
    },
  };

  const { data } = await axios.get(url, options);

  return data;
};

export const requestFilmReviewsById = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US`;
  const KEY = "af791a3763b186085b0b4847247fe248";

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjc5MWEzNzYzYjE4NjA4NWIwYjQ4NDcyNDdmZTI0OCIsInN1YiI6IjY2MTNiODliYWM2MTdjMDE3ZGIxNGYxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j7hnSu8wYW6LUZf2fiw-N3kDCrByYvsLHFfdiSCOKfY",
    },
    params: {
      key: KEY,
      accept: "application/json",
    },
  };

  const { data } = await axios.get(url, options);

  return data;
};

export const requestFilmsByQuery = async (query = "") => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  const KEY = "af791a3763b186085b0b4847247fe248";

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjc5MWEzNzYzYjE4NjA4NWIwYjQ4NDcyNDdmZTI0OCIsInN1YiI6IjY2MTNiODliYWM2MTdjMDE3ZGIxNGYxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j7hnSu8wYW6LUZf2fiw-N3kDCrByYvsLHFfdiSCOKfY",
    },
    params: {
      key: KEY,
      accept: "application/json",
    },
  };

  const { data } = await axios.get(url, options);

  return data;
};
