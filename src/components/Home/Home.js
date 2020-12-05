import { Flex } from "@chakra-ui/react";
import { Header, NavBar, Body, FooterBody } from "../index.js";

const Background = () => {
  return (
    <Flex>
      <Flex
        h="100vh"
        w="100vw"
        top="0"
        left="0"
        bg="linear-gradient(180deg, #AF1B1B 2.09%, #470909 90.11%)"
        position="fixed"
        zIndex="-100"></Flex>
    </Flex>
  );
};
export const Home = () => {
  return (
    <>
      <Background />
      <Header />
      <Flex
        direction="column"
        marginTop="6.68rem"
        justifyContent="center"
        alignItems="center"
        w={["100%", "100%"]}></Flex>
      <Flex justifyContent="center">
        <NavBar />
      </Flex>
      <Body />
      <FooterBody />
    </>
  );
};
