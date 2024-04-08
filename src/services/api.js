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

// const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

// const options = {
//   headers: {
// 	// Замість api_read_access_token вставте свій токен
//     Authorization: 'Bearer api_read_access_token'
//   }
// };

// axios.get(url, options)
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
