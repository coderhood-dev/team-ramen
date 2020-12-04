import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Flex,
  Button,
  Text,
  Spinner,
  Grid,
  Box,
  Image,
  useMediaQuery,
  Link,
  Heading,
} from '@chakra-ui/react';
import { getGenresMovies } from '../../api/genresMovies';
export const GridMovies = () => {
  let column = 2;
  let TitleGenrer = 'Romantico';
  const [isLargerThan780] = useMediaQuery('(min-width: 780px)');
  const { id } = useParams();
  const [page, setPage] = React.useState(1);
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const doFetchCharacters = async () => {
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
    doFetchCharacters();
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

  const ChangeNextPage = () => {
    setPage(page + 1);
  };

  const ChangePreviusPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  if (isLargerThan780) {
    column = 6;
  } else {
    column = 2;
  }

  switch (id) {
    case '28':
      TitleGenrer = 'Acción';
      break;
    case '12':
      TitleGenrer = 'Aventura';
      break;
    case '16':
      TitleGenrer = 'Animación';
      break;
    case '35':
      TitleGenrer = 'Comedia';
      break;
    case '80':
      TitleGenrer = 'Crimen';
      break;
    case '99':
      TitleGenrer = 'Documental';
      break;
    case '18':
      TitleGenrer = 'Drama';
      break;
    case '10751':
      TitleGenrer = 'Familiar';
      break;
    case '14':
      TitleGenrer = 'Fantasía';
      break;
    case '36':
      TitleGenrer = 'Historia';
      break;
    case '27':
      TitleGenrer = 'Terror';
      break;
    case '10749':
      TitleGenrer = 'Romance';
      break;
    case '878':
      TitleGenrer = 'Ciencia Ficción';
      break;
    case '10752':
      TitleGenrer = 'Guerra';
      break;
    default:
      TitleGenrer = 'No hay pelicula';
      break;
  }

  return (
    <Box bg="#24282f">
      <Heading as="h1" color="white">
        Peliculas de {TitleGenrer}
      </Heading>
      <Grid
        pt="6rem"
        pb="6rem"
        pl="3rem"
        pr="3rem"
        templateColumns={`repeat(${column} , 1fr)`}
        gap={6}
      >
        {movies.map((movie) => {
          return (
            <Link href={`/details/${movie.id}`}>
              <Image
                key={movie.id}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
          );
        })}
      </Grid>
      <Flex align="center" justify="center">
        <Button
          onClick={() => ChangePreviusPage()}
          w="200px"
          mr="1rem"
          colorScheme="blue"
        >
          Previous
        </Button>
        <Button onClick={() => ChangeNextPage()} w="200px" colorScheme="blue">
          Next
        </Button>
      </Flex>
    </Box>
  );
};
