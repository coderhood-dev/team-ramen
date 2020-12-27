/* eslint-disable no-console */
import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { UserContext } from '../../context';

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

const Button = ({
  handleButtonPress, children, route, attribute,
}) => (
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
      handleButtonPress(e, route, attribute);
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
  const { user } = React.useContext(UserContext);

  console.log(user);
  const handleButtonPress = (e, route, attribute) => {
    e.preventDefault();
    history.push(route);
    console.log(attribute);
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
  if (!user) {
    history.push('/home');
    return (<></>);
  }
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
          <ProfileName>{user.name}</ProfileName>
          <Button attribute={user.filmsPurchased} route="/profile" handleButtonPress={handleButtonPress}>
            Historial de compra
          </Button>
          <Button attribute={user.wishedFilms} route="/profile" handleButtonPress={handleButtonPress}>
            Lista de deseados
          </Button>
          <Button route="/profile" handleButtonPress={handleButtonPress}>
            Editar perfil
          </Button>
          <Button
            route="/logout"
            handleButtonPress={handleButtonPress}
          >
            Cerrar sesion
          </Button>
        </Flex>
      </motion.div>
    </Flex>
  );
};
