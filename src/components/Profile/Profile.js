import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

const Background = () => (
  <>
    <Flex
      h="100vh"
      w="100vw"
      bg="linear-gradient(180deg, #2D0101 2.09%, #600505 78.14%, #4B0404 102.09%)"
      position="fixed"
      zIndex="-100"
    />
  </>
);

const ProfileName = ({ children }) => (
  <Text
    alignSelf="center"
    fontWeight="bold"
    textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
    color="white"
    fontSize="2rem"
    marginBottom="3.37rem"
  >
    Hola
    {' '}
    {children}
    !
  </Text>
);

const Button = ({ handleButtonPress, children, route }) => (
  <Flex
    bg="linear-gradient(180deg, #B92929 0%, #C53030 15.62%, #A22424 100%)"
    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
    borderRadius="35px 10px"
    maxW="85vw"
    minH="3.37rem"
    justifyContent="space-between"
    align="center"
    marginBottom="2.1rem"
    as="button"
    onClick={(e) => {
      handleButtonPress(e, route);
    }}
  >
    <Text
      marginLeft="1.5rem"
      marginRight="0rem"
      marginY="0.93rem"
      fontWeight="bold"
      textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      color="white"
      fontSize="1.5rem"
    >
      {children}
    </Text>
    <IoIosArrowForward
      style={{ color: 'black', fontSize: '2.5rem', marginRight: '0.25rem' }}
    />
  </Flex>
);

export const Profile = () => {
  const history = useHistory();

  const handleButtonPress = (e, route) => {
    e.preventDefault();
    history.push(route);
  };

  const variants = {
    hidden: {
      opacity: 0,
      x: '100px',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.1, type: 'spring', stiffness: 100 },
    },
    exit: {
      opacity: 0,
      x: '-100px',
      transition: { duration: 0.1, type: 'spring', stiffness: 100 },
    },
  };
  return (
    <Flex overflowX="hidden" justifyContent="center">
      <Background />
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Flex direction="column" marginTop="6.87rem" overflowX="scroll">
          <ProfileName>Lucas</ProfileName>
          <Button route="/login" handleButtonPress={handleButtonPress}>
            Historial de compra
          </Button>
          <Button route="/register" handleButtonPress={handleButtonPress}>
            Lista de deseados
          </Button>
          <Button route="/register" handleButtonPress={handleButtonPress}>
            Editar perfil
          </Button>
          <Button route="/register" handleButtonPress={handleButtonPress}>
            Cerrar sesion
          </Button>
        </Flex>
      </motion.div>
    </Flex>
  );
};
