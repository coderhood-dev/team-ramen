import { Flex, Image, Text } from "@chakra-ui/react";
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

const Film = () => {
  const film = {
    title: "Capitan america",
    price: "400",
    date: "19/4",
    img:
      "https://www.cinemascomics.com/wp-content/uploads/2014/03/Capitan-America-el-Soldado-de-invierno.jpg",
  };
  return (
    <Flex h="4.62rem" justifyContent="space-between">
      <Image
        borderRadius="36px 10px"
        src={film.img}
        h="4.62rem"
        w="80%"
        fit="cover"
        position="absolute"
        zIndex="-50"
      ></Image>
      <Flex borderRadius="36px 10px" bg="rgba(0, 0, 0, 0.61)" h="100%" w="100%">
        HOLA
      </Flex>
    </Flex>
  );
};

export const History = () => {
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
      <Background />
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Flex direction="column" marginTop="6.87rem" overflowX="scroll">
          <Flex
            direction={["column", "row"]}
            justifyContent="center"
            maxW="80vw"
          >
            <BackButton />
            <Title />
          </Flex>
          <Flex direction="column" justifyContent="center">
            <Film></Film>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
};
