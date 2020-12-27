import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import { Layout } from '..';

const backgroundImage = 'https://www.cinemascomics.com/wp-content/uploads/2013/04/Ironman3-poster.jpg';
const Background = () => (
  <>
    <Image
      position="absolute"
      h="100vh"
      w="100vw"
      objectFit="cover"
      src={backgroundImage}
      zIndex="-2"
    />
    <Flex
      h="100vh"
      w="100vw"
      bg="rgba(1, 1, 1, 0.71)"
      position="absolute"
      zIndex="-1"
    />
  </>
);

export const Purchase = () => (
  <Layout>
    <Background />
    <Flex justifyContent="flex-end" alignItems="center" direction="column" h="100vh" color="white">
      <Flex justifyContent="space-around" alignItems="center" direction="column" h="3rem" marginBottom="13.6rem">
        <Text fontSize="2rem" textAlign="center" maxW="90%" fontWeight="800">Gracias por tu compra!</Text>
        <Text textAlign="center" maxW="80%">Te enviamos el comprobante a tu email</Text>
      </Flex>
      <Flex
        h="20.8rem"
        w="100vw"
        justifyContent="center"
        alignItems="center"
        bg="linear-gradient(180deg, rgba(137, 78, 78, 0) -8.37%, rgba(98, 23, 23, 0.07) 4.06%, #360D0D 14.11%, #000000 58.27%);"
        direction="column"
      >
        <Flex>
          <Flex bg="#C53030" borderRadius="0px 39px 0px 37px" justifyContent="center" alignItems="center">
            <Text
              margin="0.7rem 0.5rem 1rem 0.8rem"
              maxW="13.75rem"
              fontSize="1.125rem"
              fontWeight="bold"
              color="black"
              textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            >
              COVID-19
              <br />
              Nuestro protocolo te va a mantener seguro.
              Cuidate y cuidanos
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  </Layout>
);
