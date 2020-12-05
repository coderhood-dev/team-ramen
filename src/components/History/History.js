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
        zIndex="-100"></Flex>
    </>
  );
};
const BackButton = ({ handleGoBack }) => {
  return (
    <Flex
      padding="2px"
      bg="linear-gradient(180deg, #B92929 0%, #C53030 15.62%, #A22424 100%)"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="full"
      maxW="2.3rem"
      maxH="2.3rem"
      marginTop="0.75rem"
      justifyContent="center"
      align="center"
      as="button"
      onClick={handleGoBack}>
      <HiOutlineArrowCircleLeft style={{ color: "black", fontSize: "3rem" }} />
    </Flex>
  );
};
const Title = ({ ...props }) => {
  return (
    <Text
      fontWeight="bold"
      textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      color="white"
      fontSize="1.75rem"
      marginBottom="3.37rem"
      maxW="auto">
      Las funciones que compraste
    </Text>
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
        exit="exit">
        <Flex direction="column" marginTop="6.87rem" overflowX="scroll">
          <Flex direction="column" justifyContent="center" maxW="80vw">
            <BackButton />
            <Title />
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
};
