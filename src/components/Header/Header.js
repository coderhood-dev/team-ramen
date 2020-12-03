import { Flex, Text } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const Title = () => {
  return (
    <Text
      fontSize={{ base: "2rem" }}
      fontWeight="bold"
      color="#C53030"
      textShadow="0px 4px 4px rgba(0, 0, 0, 0.25"
    >
      Title
    </Text>
  );
};

const TitleBox = () => {
  return (
    <Flex
      h={{ base: "2.65rem" }}
      w={{ base: "8rem" }}
      borderRadius="4px 20px;"
      bg="rgba(0, 0, 0, 0.71)"
      marginBottom={{ base: "0.93rem" }}
      marginLeft={{ base: "1.25rem" }}
      align="center"
      justifyContent="center"
    >
      <Title />
    </Flex>
  );
};
const Buttons = ({ children }) => {
  return (
    <Flex
      bg={{ base: "#C53030" }}
      borderRadius="4px 39px 4px 37px"
      w={{ base: "13.75rem" }}
      h={{ base: "3.4rem" }}
      align="center"
      justifyContent="center"
      marginBottom="2rem"
    >
      <Text
        w={{ base: "91%" }}
        textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        fontWeight="bold"
        fontSize={{ base: "2rem" }}
        lineHeight={{ base: "22px" }}
        textAlign="center"
      >
        {children}
      </Text>
    </Flex>
  );
};
const SideMenuButton = ({ handleSideMenu }) => {
  return (
    <Flex
      onClick={(e) => {
        handleSideMenu();
      }}
      fontSize="2.8rem"
      w={{ base: "3rem" }}
      marginBottom={{ base: "0.93rem" }}
      marginRight={{ base: "1.25rem" }}
      textShadow="0px 4px 4px rgba(0, 0, 0, 0.25"
    >
      <FaBars />
    </Flex>
  );
};
const SideMenu = () => {
  return (
    <Flex
      w={{ base: "17.35rem" }}
      h={{ base: "29.93rem" }}
      bg={{ base: "black" }}
      border={{ base: "3px solid #C53030" }}
      borderRadius={{ base: "0px 0px 0px 93px" }}
      top="-4.68rem"
      left="0"
      position="absolute"
      align="center"
      justifyContent="center"
    >
      <Flex flexDir="column">
        <Buttons children={"Funciones"} />
        <Buttons children={"Ofertas"} />
        <Buttons children={"Coderhood"} />
        <Buttons children={"Contacto"} />
      </Flex>
    </Flex>
  );
};
const BlackBackground = ({ handleSideMenu }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.2 }}
        variants={variants}
        exit={{ opacity: 0 }}
      >
        {" "}
        <Flex
          position="fixed"
          w="100vw"
          h="100vh"
          bg="rgba(1, 1, 1, 0.61)"
          left="0"
          top="0"
          onClick={handleSideMenu}
        ></Flex>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: "-9.68rem" }}
        variants={variants}
        transition={{ delay: 0.1, duration: 0.25 }}
      >
        <SideMenu />
      </motion.div>
    </>
  );
};
export const Header = () => {
  const [sideMenu, setSideMenu] = useState(false);

  const handleSideMenu = () => {
    setSideMenu(!sideMenu);
  };

  return (
    <Flex
      h={{ base: "4.75rem" }}
      w={{ base: "100%" }}
      bg={{
        base:
          "linear-gradient(180deg, #8E2B2B 0%, rgba(3, 2, 2, 0.0208333) 99.99%, rgba(197, 48, 48, 0) 100%)",
      }}
      align={{ base: "flex-end" }}
      justifyContent={{ base: "space-between" }}
      position={{ base: "fixed" }}
      top={{ base: "0" }}
      left={{ base: "0" }}
    >
      <TitleBox />
      {sideMenu ? <BlackBackground handleSideMenu={handleSideMenu} /> : ""}
      <SideMenuButton handleSideMenu={handleSideMenu} />
    </Flex>
  );
};
