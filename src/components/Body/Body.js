import React from "react";
import { Flex, Text, Spinner, Box, useMediaQuery } from "@chakra-ui/react";
import { CarouselPopularMovies, GridPopularMovies } from "../index";
import { getPopularMovies } from "../../api/popularMovies";

export const Body = () => {
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");
  const [loading, setLoading] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const doFetchCharacters = async () => {
      setLoading(true);
      setError(null);
      setMovies([]);
      try {
        const { results } = await getPopularMovies(1);
        setLoading(false);
        setMovies(results);
        setError(null);
      } catch (e) {
        setLoading(false);
        setMovies([]);
        setError(e.message);
      }
    };
    doFetchCharacters();
  }, []);

  if (loading) {
    return (
      <Flex align="center" justify="center">
        <Spinner size="xl" />
      </Flex>
    );
  } else if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <Box bg=" linear-gradient(180deg, rgba(0, 0, 0, 0.97) 0.01%, #0B0202 96.87%)">
      {isLargerThan780 ? (
        <CarouselPopularMovies movies={movies} />
      ) : (
        <GridPopularMovies movies={movies} />
      )}
    </Box>
  );
};
