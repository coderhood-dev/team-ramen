import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Heading, Box } from "@chakra-ui/react";
import { PopularMoviesContext } from "../../context";
import { Image } from "../index";

export const GridPopularMovies = ({ movies }) => {
  const { setMovie } = React.useContext(PopularMoviesContext);
  const history = useHistory();
  return (
    <Box>
      <Heading
        as="h1"
        pl="1.63rem"
        pt="1.63rem"
        fontFamily="Montserrat"
        fontStyle="normal"
        fontWeight="bold"
        color="#220707"
        textShadow={`0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25)`}
        fontSize="2rem">
        Peliculas populares
      </Heading>
      <Grid p="1.25rem" templateColumns="repeat(2, 1fr)" gap={3}>
        {movies.map((movie) => {
          return (
            <Image
              w="10.5rem"
              h="17.43rem"
              cursor="pointer"
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
      </Grid>
    </Box>
  );
};
