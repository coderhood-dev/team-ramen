import React from 'react';
import { Grid, Image, Heading, Link } from '@chakra-ui/react';

export const GridPopularMovies = ({ movies }) => {
  return (
    <div>
      <Heading
        color="white"
        as="h1"
        fontSize={{ base: '24px', md: '40px', lg: '56px' }}
      >
        Peliculas populares
      </Heading>
      <Grid
        pt="6rem"
        pb="6rem"
        pl="3rem"
        pr="3rem"
        templateColumns="repeat(2, 1fr)"
        gap={6}
      >
        {movies.map((movie) => {
          return (
            <Link href={`/details/${movie.id}`}>
              <Image
                key={movie.id}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.name}
              />
            </Link>
          );
        })}
      </Grid>
    </div>
  );
};
