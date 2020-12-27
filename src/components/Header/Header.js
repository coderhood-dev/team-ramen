/* eslint-disable no-console */
import React from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context';

const MotionFlex = motion.custom(Flex);

const MenuButton = ({ children, onClick }) => (
  <Button
    bg="#C53030"
    borderRadius="4px 39px 4px 37px"
    w="13.75rem"
    h="3.4rem"
    align="center"
    justifyContent="center"
    marginBottom="2rem"
    onClick={onClick}
  >
    <Text
      w="91%"
      textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      fontWeight="bold"
      fontSize="2rem"
      lineHeight="22px"
      textAlign="center"
    >
      {children}
    </Text>
  </Button>
);

const SideMenuButton = ({ handleSideMenu }) => (
  <Flex
    onClick={handleSideMenu}
    fontSize="2.8rem"
    w="3rem"
    marginBottom="0.93rem"
    marginRight="1.25rem"
    textShadow="0px 4px 4px rgba(0, 0, 0, 0.25"
  >
    <FaBars />
  </Flex>
);

const BlackBackground = ({ handleSideMenu, user, history }) => (
  // const variants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1 },
  // };

  <MotionFlex>
    {/* overlay */}
    {/* <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.2 }}
        variants={variants}
        exit={{ opacity: 0 }}
      > */}
    {' '}
    <Flex
      position="fixed"
      w="100vw"
      h="100vh"
      bg="rgba(1, 1, 1, 0.61)"
      left="0"
      top="0"
      onClick={handleSideMenu}
      zIndex="100"
    />
    {/* </motion.div> */}

    {/* menu */}
    {/* <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: '-9.68rem' }}
        variants={variants}
        transition={{ delay: 0.1, duration: 0.25 }}
      > */}
    <Flex
      w="17.35rem"
      h="29.93rem"
      bg="black"
      border="3px solid #C53030"
      borderRadius="0px 0px 0px 93px"
      top="0"
      right="0"
      position="absolute"
      zIndex="popover"
      align="center"
      justifyContent="center"
    >
      <Flex flexDir="column" zIndex="-1000">
        {user ? (
          <MenuButton
            onClick={(e) => {
              e.preventDefault();
              history.push('/profile');
            }}
          >
            Perfil
          </MenuButton>
        ) : (
          <MenuButton
            onClick={(e) => {
              e.preventDefault();
              history.push('/login');
            }}
          >
            Login
          </MenuButton>
        )}

        <MenuButton
          onClick={(e) => {
            e.preventDefault();
            history.push('/');
          }}
        >
          Funciones
        </MenuButton>
        <MenuButton
          onClick={() => console.log('coderhood')}
        >
          Coderhood
        </MenuButton>
        <MenuButton
          onClick={() => console.log('contacto')}
        >
          Contacto
        </MenuButton>
      </Flex>
    </Flex>
    {/* </motion.div> */}
  </MotionFlex>
);
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user } = React.useContext(UserContext);
  const history = useHistory();

  const handleToogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Flex
      h="4.75rem"
      w="100%"
      bg="linear-gradient(180deg, #8E2B2B 0%, rgba(3, 2, 2, 0.0208333) 99.99%, rgba(197, 48, 48, 0) 100%)"
      align="flex-end"
      justifyContent="space-between"
      position="fixed"
      top="0px"
    >
      {/* title */}
      <Flex
        h="2.65rem"
        w="8rem"
        borderRadius="4px 20px;"
        bg="rgba(0, 0, 0, 0.71)"
        marginBottom="0.93rem"
        marginLeft="1.25rem"
        align="center"
        justifyContent="center"
      >
        <Text
          fontSize="2rem"
          fontWeight="bold"
          color="#C53030"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25"
        >
          Title
        </Text>
      </Flex>
      {isMenuOpen ? <BlackBackground history={history} user={user} handleSideMenu={handleToogleMenu} /> : ''}
      <SideMenuButton handleSideMenu={handleToogleMenu} />
    </Flex>
  );
};
