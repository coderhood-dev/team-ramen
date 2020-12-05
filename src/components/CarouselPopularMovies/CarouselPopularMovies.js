import React from "react";
import Carousel from "react-elastic-carousel";
import { useHistory } from "react-router-dom";
import { Image, Heading, Flex } from "@chakra-ui/react";

import { PopularMoviesContext } from "../../context";

export const CarouselPopularMovies = ({ movies }) => {
  const { setMovie } = React.useContext(PopularMoviesContext);
  const history = useHistory();
  return (
    <div>
      <Heading
        color="white"
        as="h1"
        fontSize={{ base: "24px", md: "40px", lg: "56px" }}
      >
        Peliculas populares
      </Heading>
      <Flex justify="center" align="center">
        <Carousel itemsToShow={6}>
          {movies.map((movie) => {
            return (
              <Image
                key={movie.id}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                onClick={() => {
                  setMovie(movie);
                  history.push(`/details/${movie.id}`);
                }}
              />
            );
          })}
        </Carousel>
      </Flex>
    </div>
  );
};
