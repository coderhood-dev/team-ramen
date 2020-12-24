import React from 'react';
import { Flex } from '@chakra-ui/react';
import { DetailsMovies, FooterDetailsMovies, Layout } from '../index';

export const DetailMovie = () => (
  <Layout>
    <Flex
      direction="column"
      marginTop="6.68rem"
      justifyContent="center"
      alignItems="center"
      w={['100%', '100%']}
    />
    <DetailsMovies />
    <FooterDetailsMovies />
  </Layout>
);
