import React from 'react';
import { Image as ChakraImage, Spinner, Flex } from '@chakra-ui/react';

export const Image = (props) => {
  const [loading, isLoading] = React.useState(true);

  const handleOnLoad = () => {
    isLoading(false);
  };
  return (
    <Flex bg="black" width={props.w} height={props.h}>
      <ChakraImage onLoad={handleOnLoad} {...props} />
      {loading && (
        <Flex
          width="1,5rem"
          height={props.h}
          position="absolute"
          justify="center"
          align="center"
          bg="black"
        >
          <Spinner color="red.500" />
        </Flex>
      )}
    </Flex>
  );
};
