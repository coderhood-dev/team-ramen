import React from 'react';
import { PopularMoviesContext } from '../../context';

export const DetailsMovies = () => {
  const { movieData } = React.useContext(PopularMoviesContext);

  return <h1>{movieData.id}</h1>;
};
