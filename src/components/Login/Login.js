import { Flex, Box, Text, Input as ChakraInput, Image } from "@chakra-ui/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backgroundImage =
  "https://www.cinemascomics.com/wp-content/uploads/2013/04/Ironman3-poster.jpg";

const Background = () => {
  return (
    <>
      <Image
        position="absolute"
        h="100vh"
        objectFit="cover"
        src={backgroundImage}
        zIndex="-100"
      ></Image>
      <Flex
        h="100vh"
        w="100vw"
        bg="rgba(1, 1, 1, 0.71)"
        position="absolute"
        zIndex="-50"
      ></Flex>
    </>
  );
};

const Title = ({ children }) => {
  return (
    <Text
      fontSize="2rem"
      fontWeight="bold"
      color="white"
      marginBottom="1.37rem"
    >
      {children}
    </Text>
  );
};
const Input = ({ ph, title, onChange }) => {
  return (
    <Flex direction="column">
      <Text
        fontSize="1.5rem"
        fontWeight="normal"
        color="white"
        marginBottom="0.25rem"
        boxShadow="lg"
      >
        {title}
      </Text>
      <Flex
        background="white"
        border="5px solid #C53030"
        borderRadius="0.6rem"
        boxShadow="lg"
      >
        <ChakraInput
          onChange={onChange}
          variant="unstyled"
          placeholder={ph}
          paddingX="0.5rem"
          paddingY="0.25rem"
        ></ChakraInput>
      </Flex>
    </Flex>
  );
};
const LoginButton = ({ handleSubmit }) => {
  return (
    <Flex
      alignSelf="center"
      as="button"
      w="9.3rem"
      h="2.7rem"
      bg="white"
      justifyContent="center"
      alignItems="center"
      borderRadius="6px 19px"
      boxShadow="lg"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      onClick={(e) => handleSubmit(e)}
      _focus={{ transform: "scale(1.1)" }}
    >
      <Text
        fontSize="1.12rem"
        fontWeight="bold"
        color="black"
        textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      >
        Iniciar Sesion
      </Text>
    </Flex>
  );
};
const Register = () => {
  return (
    <Text
      fontSize="1.5rem"
      fontWeight="bold"
      color="white"
      as="button"
      textDecoration="underline"
    >
      Registrate
    </Text>
  );
};
const Form = ({ handleSubmit, handleEmailChange, handlePasswordChange }) => {
  return (
    <Flex as="form" direction="column">
      <Title>Inicia sesion</Title>
      <Input
        ph={"bautista@gmail.com"}
        title={"Email"}
        onChange={handleEmailChange}
      ></Input>
      <Box marginY="0.75rem"></Box>
      <Input
        ph={"*********"}
        title={"Contraseña"}
        onChange={handlePasswordChange}
      ></Input>
      <Box marginY="1.34rem"></Box>
      <LoginButton handleSubmit={handleSubmit} />
    </Flex>
  );
};
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("signin:", email, password);
    //history.push("/"); <- waitin for integration with App.js
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
    exit: {
      opacity: 0,
      x: 100,
      duration: 10,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
  };

  return (
    <>
      <Background></Background>
      <Flex h="100vh" justifyContent="center" alignItems="center">
        <AnimatePresence>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Form
              handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange}
              handleSubmit={handleSubmit}
            ></Form>
            <Register />
            <Box marginY="0rem"></Box>
          </motion.div>
        </AnimatePresence>
      </Flex>
    </>
  );
};
