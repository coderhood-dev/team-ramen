import React from 'react';
import {
  Flex,
  Button,
  Text,
  Heading,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { PopularMoviesContext } from '../../context';
import { Image } from '../index';

export const DetailsMovies = () => {
  const history = useHistory();
  // let column = 2;
  const { movie } = React.useContext(PopularMoviesContext);

  // const [isLargerThan780] = useMediaQuery('(min-width: 780px)');
  // if (isLargerThan780) {
  //   column = 2;
  // } else {
  //   column = 1;
  // }

  if (!movie) {
    history.push('/');
    return (<></>);
  }
  return (
    <Flex direction="column" bg="linear-gradient(180deg, #AF1B1B 2.09%, #470909 90.11%)">
      <Flex align="center" justify="space-between">
        <Heading
          as="h1"
          pb="1.25rem"
          pl="1.63rem"
          pt="1.63rem"
          fontFamily="Montserrat"
          fontStyle="normal"
          fontWeight="bold"
          color="#220707"
          textShadow="0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25)"
          fontSize={{ base: '1.57rem', md: '1.57rem', lg: '2rem' }}
        >
          {movie.title}
        </Heading>
      </Flex>
      <Flex direction="column">
        <Image
          h="29rem"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
        />
        <Text
          p="1.25rem"
          color="#000000"
          fontFamily="Montserrat"
          fontStyle="normal"
          fontWeight="bold"
        >
          {movie.overview}
        </Text>
      </Flex>
      <Flex justify="center" align="center" mt="1.56rem">
        <Button
          color="#A72626"
          w="12.5rem"
          colorScheme={` linear-gradient(180deg, rgba(0, 0, 0, 0.0092) 5.21%, rgba(0, 0, 0, 0.2852) 29.17%, rgba(0, 0, 0, 0.4554) 50.52%, rgba(0, 0, 0, 0.2852) 75%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.0966) 30.21%, rgba(0, 0, 0, 0.115) 40.63%, rgba(0, 0, 0, 0.1794) 53.12%, rgba(0, 0, 0, 0.4554) 66.67%, rgba(0, 0, 0, 0.2714) 89.06%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.0092) 5.21%, rgba(0, 0, 0, 0.2852) 21.88%, rgba(0, 0, 0, 0.4554) 50.52%);
box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25)`}
          borderRadius="0.125rem 1.25rem"
          onClick={
            (e) => {
              e.preventDefault();
              history.push(`/purchase/${movie.id}`);
            }
          }
        >
          Comprar
        </Button>
      </Flex>
    </Flex>
  );
};
