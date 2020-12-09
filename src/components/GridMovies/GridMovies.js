import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  Flex,
  Button,
  Text,
  Spinner,
  Grid,
  Box,
  useMediaQuery,
  Heading,
} from '@chakra-ui/react';
import { getGenresMovies } from '../../api/genresMovies';
import { PopularMoviesContext } from '../../context';
import { Image } from '../index';
import { getGenderById } from '../../utils/getGenderById';

export const GridMovies = () => {
  const { setMovie } = React.useContext(PopularMoviesContext);
  const history = useHistory();
  let column = 2;
  const [isLargerThan780] = useMediaQuery('(min-width: 780px)');
  const { id } = useParams();
  const [page, setPage] = React.useState(1);
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const doFetchGenresMovies = async () => {
      setLoading(true);
      setError(null);
      setMovies([]);
      try {
        const { results } = await getGenresMovies(id, page);
        setLoading(false);
        setMovies(results);
        setError(null);
      } catch (e) {
        setLoading(false);
        setMovies([]);
        setError(e.message);
      }
    };
    doFetchGenresMovies();
  }, [page, id]);

  if (loading) {
    return (
      <Flex align="center" justify="center">
        <Spinner size="xl" />
      </Flex>
    );
  } else if (error) {
    return <Text>{error}</Text>;
  }

  const changeNextPage = () => {
    setPage(page + 1);
  };

  const changePreviusPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  if (isLargerThan780) {
    column = 6;
  } else {
    column = 2;
  }
  const genderName = getGenderById(id);
  return (
    <Box bg={`linear-gradient(180deg, #AF1B1B 2.09%, #470909 90.11%)`}>
      <Heading
        as="h1"
        pl="1.63rem"
        pt="1.63rem"
        fontFamily="Montserrat"
        fontStyle="normal"
        fontWeight="bold"
        color="#220707"
        textShadow={`0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25)`}
        fontSize={{ base: '1.57rem', md: '1.57rem', lg: '2rem' }}
      >
        Peliculas de {genderName}
      </Heading>
      <Grid p="1.25rem" templateColumns={`repeat(${column} , 1fr)`} gap={3}>
        {movies.map((movie) => {
          return (
            <Image
              w="100%"
              h="17.50rem"
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
      <Flex align="center" justify="center">
        <Button
          color="#A72626"
          onClick={() => changePreviusPage()}
          w="12.5rem"
          mr="1rem"
          colorScheme={` linear-gradient(180deg, rgba(0, 0, 0, 0.0092) 5.21%, rgba(0, 0, 0, 0.2852) 29.17%, rgba(0, 0, 0, 0.4554) 50.52%, rgba(0, 0, 0, 0.2852) 75%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.0966) 30.21%, rgba(0, 0, 0, 0.115) 40.63%, rgba(0, 0, 0, 0.1794) 53.12%, rgba(0, 0, 0, 0.4554) 66.67%, rgba(0, 0, 0, 0.2714) 89.06%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.0092) 5.21%, rgba(0, 0, 0, 0.2852) 21.88%, rgba(0, 0, 0, 0.4554) 50.52%);
box-shadow:  0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25)`}
          borderRadius="0.125rem 1.25rem"
        >
          Previous
        </Button>
        <Button
          color="#A72626"
          onClick={() => changeNextPage()}
          w="12.5rem"
          colorScheme={` linear-gradient(180deg, rgba(0, 0, 0, 0.0092) 5.21%, rgba(0, 0, 0, 0.2852) 29.17%, rgba(0, 0, 0, 0.4554) 50.52%, rgba(0, 0, 0, 0.2852) 75%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.0966) 30.21%, rgba(0, 0, 0, 0.115) 40.63%, rgba(0, 0, 0, 0.1794) 53.12%, rgba(0, 0, 0, 0.4554) 66.67%, rgba(0, 0, 0, 0.2714) 89.06%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.0092) 5.21%, rgba(0, 0, 0, 0.2852) 21.88%, rgba(0, 0, 0, 0.4554) 50.52%);
box-shadow:  0rem 0.25rem 0.25rem  rgba(0, 0, 0, 0.25)`}
          borderRadius="0.125rem 1.25rem"
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
};
