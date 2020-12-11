import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";

const Background = () => {
  return (
    <>
      <Flex
        h="100vh"
        w="100vw"
        bg="linear-gradient(180deg, #2D0101 2.09%, #600505 78.14%, #4B0404 102.09%)"
        position="fixed"
        zIndex="-100"
      ></Flex>
    </>
  );
};
const BackButton = ({ handleGoBack }) => {
  return (
    <Flex
      marginBottom="1rem"
      padding="2px"
      bg="linear-gradient(180deg, #B92929 0%, #C53030 15.62%, #A22424 100%)"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="full"
      w="2.3rem"
      h="2.3rem"
      marginTop="0.75rem"
      justifyContent="center"
      align="center"
      as="button"
      onClick={handleGoBack}
    >
      <HiOutlineArrowCircleLeft style={{ color: "black", fontSize: "3rem" }} />
    </Flex>
  );
};
const Title = ({ ...props }) => {
  return (
    <Text
      marginLeft={["0", "1rem"]}
      fontWeight="bold"
      textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      color="white"
      fontSize="1.75rem"
      marginBottom="3.37rem"
      maxW="auto"
    >
      Las funciones que compraste
    </Text>
  );
};
const Film = ({ props, film }) => {
  return (
    <Flex
      borderRadius="36px 10px"
      bg="rgba(0, 0, 0, 0.61)"
      minH="4.62rem"
      boxShadow="lg"
      alignItems="baseline"
      justifyContent="space-between"
      minW="15rem"
      color="white"
      paddingY="1rem"
      {...props}
      marginBottom="1.5rem"
    >
      <Text
        marginX="1.5rem"
        marginRight="1rem"
        flex="1"
        fontWeight="bold"
        fontSize="1.25rem"
      >
        {film.title}
      </Text>
      <Flex marginRight="1rem" flexDir="column">
        <Text fontSize="1rem">${film.price}</Text>
        <Text fontSize="0.75rem">{film.date}</Text>
      </Flex>
    </Flex>
  );
};

export const History = () => {
  const history = useHistory();

  //aca se debe llamar al contexto del gusuario logeado

  const handleGoBack = (e) => {
    e.preventDefault();
    history.push("/profile");
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

  //dummie
  const film = {
    title: "Capitan america",
    price: "400",
    date: "19/4",
    img:
      "https://www.cinemascomics.com/wp-content/uploads/2014/03/Capitan-America-el-Soldado-de-invierno.jpg",
  };
  const peliculas = [film, film, film, film, film, film];
  const user = {
    name: "dummie",
    purchasedFilms: peliculas,
  };
  //dummie

  return (
    <Flex justifyContent="center" w="100vw">
      <Background></Background>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Flex
          alignItems="center"
          direction="column"
          marginTop="6.87rem"
          w="100%"
        >
          <Flex
            direction={["column", "row"]}
            justifyContent="center"
            maxW="80vw"
          >
            <BackButton handleGoBack={handleGoBack} />
            <Title />
          </Flex>
          <Flex direction="column" alignItems="center">
            {user.purchasedFilms.map((f) => (
              <Film key={f.title} film={f} />
            ))}
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
};
