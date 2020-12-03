import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Image, Heading, Link, Flex } from '@chakra-ui/react';

import { PopularMoviesContext } from '../../context';

export const CarouselPopularMovies = ({ movies }) => {
  const { setMovie } = React.useContext(PopularMoviesContext);
  return (
    <div>
      <Heading
        color="white"
        as="h1"
        fontSize={{ base: '24px', md: '40px', lg: '56px' }}
      >
        Peliculas populares
      </Heading>
      <Flex justify="center" align="center">
        <Carousel itemsToShow={6}>
          {movies.map((movie) => {
            return (
              <Link
                href={`/details/${movie.id}`}
                onClick={() => {
                  setMovie(movie);
                }}
              >
                <Image
                  key={movie.id}
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                ></Image>
              </Link>
            );
          })}
        </Carousel>
      </Flex>
    </div>
  );
};
