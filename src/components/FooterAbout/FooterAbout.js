import { Flex, Text } from "@chakra-ui/react";
import { HiArrowCircleRight } from "react-icons/hi";

const Title = () => {
  return (
    <Text
      as="h1"
      textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      fontWeight="bold"
      color="#C53030"
      display="inline"
      fontSize={{ base: "2rem" }}
      marginBottom={{ base: "1rem" }}
    >
      Presentation
    </Text>
  );
};

const TextInfo = () => {
  return (
    <Flex
      bg={{ base: "#C53030" }}
      borderRadius="0px 39px 0px 37px"
      w={{
        base: "15rem",
      }}
      h={{
        base: "7.2rem",
      }}
      align="center"
      justify="center"
    >
      <Text
        w={{
          base: "91%",
        }}
        textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        fontWeight="bold"
        marginLeft={{
          base: "0.5rem",
        }}
        fontSize={{
          base: "18px",
        }}
        lineHeight={{
          base: "22px",
        }}
        color="black"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempo
      </Text>
    </Flex>
  );
};
export const FooterAbout = () => {
  return (
    <Flex
      h={{
        base: "41%",
      }}
      bg="linear-gradient(180deg, rgba(84, 19, 19, 0.87) 0%, #621717 7.55%, #360D0D 20.56%, #000000 60.94%);"
      flexDir={{
        base: "row",
      }}
      justifyContent={{
        base: "space-between",
      }}
    >
      <Flex
        flexDir={{
          base: "column",
        }}
        justifyContent={{ base: "flex-end" }}
        marginLeft={{ base: "2rem" }}
        marginBottom={{ base: "3.5rem" }}
      >
        <Title />
        <TextInfo />
      </Flex>
      <HiArrowCircleRight
        style={{
          color: "#C53030",
          alignSelf: "flex-end",
          fontSize: "3rem",
          marginBottom: "3.1rem",
          marginRight: "1.2rem",
        }}
      />
    </Flex>
  );
};