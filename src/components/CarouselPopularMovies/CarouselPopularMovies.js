import React from 'react';
import Carousel from 'react-elastic-carousel';
import { useHistory } from 'react-router-dom';
import { Heading, Flex, Box } from '@chakra-ui/react';
import { Image } from '../index';

import { PopularMoviesContext } from '../../context';

export const CarouselPopularMovies = ({ movies }) => {
  const { setMovie } = React.useContext(PopularMoviesContext);
  const history = useHistory();
  return (
    <Box>
      <Heading
        as="h1"
        pl="1.63rem"
        pt="1.63rem"
        pb="1.63rem"
        fontFamily="Montserrat"
        fontStyle="normal"
        fontWeight="bold"
        color="#220707"
        textShadow="0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25)"
        fontSize={{ base: '1rem', md: '1.25rem', lg: '2rem' }}
      >
        Peliculas populares
      </Heading>
      <Flex justify="center" align="center">
        <Carousel itemsToShow={6} heigth="25rem">
          {movies.map((movie) => (
            <Image
              w="11.56rem"
              h="25rem"
              cursor="pointer"
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              onClick={() => {
                setMovie(movie);
                history.push(`/details/${movie.id}`);
              }}
            />
          ))}
        </Carousel>
      </Flex>
    </Box>
  );
};
