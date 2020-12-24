import React from 'react';

export const PopularMoviesContext = React.createContext(null);

export const PopularMoviesProvider = ({ children }) => {
  const [movie, setMovie] = React.useState(null);
  return (
    <PopularMoviesContext.Provider
      value={{
        movie,
        setMovie: (movie) => setMovie(movie),
      }}
    >
      {children}
    </PopularMoviesContext.Provider>
  );
};
