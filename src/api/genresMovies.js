export const getGenresMovies = async (genre, page) => {
  const response = await window.fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=4f52ab847028a663b243fdee576e6990&language=en-US&sort_by=popularity.desc&page=${page}&with_genres=${genre}`
  );
  return await response.json();
};
