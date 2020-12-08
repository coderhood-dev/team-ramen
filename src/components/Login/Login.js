import { Flex, Box, Text, Input as ChakraInput, Image } from "@chakra-ui/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

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
const Input = ({ ph, title, onChange, ...props }) => {
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
          {...props}
        ></ChakraInput>
      </Flex>
    </Flex>
  );
};
const ErrorDisplay = ({ error }) => {
  return (
    <Flex h="6rem" justifyContent="center" align="flex-start">
      <Box marginTop="1.5rem" bg="red.400" borderRadius="10px">
        {error && (
          <Text
            marginX="0.4rem"
            marginY="0.3rem"
            color="white"
            maxW="14rem"
            textAlign="center"
          >
            {error}
          </Text>
        )}
      </Box>
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
      onClick={handleSubmit}
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
const Register = ({ handleGoRegister }) => {
  return (
    <Text
      fontSize="1.5rem"
      fontWeight="bold"
      color="white"
      as="button"
      textDecoration="underline"
      onClick={handleGoRegister}
    >
      Registrate
    </Text>
  );
};
const Form = ({ handleSubmit, handleEmailChange, handlePasswordChange }) => {
  return (
    <Flex as="form" direction="column" marginTop="4rem">
      <Title>Inicia sesion</Title>
      <Input
        ph="bautista@gmail.com"
        title="Email"
        onChange={handleEmailChange}
        type="email"
      ></Input>
      <Box marginY="0.75rem"></Box>
      <Input
        ph="Pepe1234"
        title="Contraseña"
        onChange={handlePasswordChange}
        type="password"
      ></Input>
      <Box marginY="1.34rem"></Box>
      <LoginButton handleSubmit={handleSubmit} />
    </Flex>
  );
};
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      console.log(email, "  ", password);
    } catch (e) {
      setError(e.message);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleGoRegister = (event) => {
    event.preventDefault();
    history.push("/register");
  };

  const variants = {
    hidden: {
      opacity: 0,
      x: "100px",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.1, type: "spring", stiffness: 100 },
    },
    exit: {
      opacity: 0,
      x: "-100px",
      transition: { duration: 0.1, type: "spring", stiffness: 100 },
    },
  };

  return (
    <Flex overflowX="hidden" justifyContent="center">
      <Background></Background>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Flex
          h="100vh"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          overflowX="scroll"
        >
          <Form
            handleEmailChange={handleEmailChange}
            handlePasswordChange={handlePasswordChange}
            handleSubmit={handleSubmit}
          ></Form>
          <ErrorDisplay error={error} />
          <Register handleGoRegister={handleGoRegister} />
        </Flex>
      </motion.div>
    </Flex>
  );
};
