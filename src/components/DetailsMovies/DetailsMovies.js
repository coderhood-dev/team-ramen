import React from "react";
import { PopularMoviesContext } from "../../context";

export const DetailsMovies = () => {
  const { movie } = React.useContext(PopularMoviesContext);
  return <h1>{movie.id}</h1>;
};
