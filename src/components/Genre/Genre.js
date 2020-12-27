import React from 'react';
import { Flex } from '@chakra-ui/react';
import { NavBar, GridMovies, Header } from '../index';

export const Genre = () => (
  <>
    <Header />
    <Flex
      direction="column"
      marginTop="6.68rem"
      justifyContent="center"
      alignItems="center"
      w={['100%', '100%']}
    />
    <Flex justifyContent="center">
      <NavBar />
    </Flex>
    <GridMovies />
  </>
);
