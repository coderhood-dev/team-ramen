import React from 'react';
import { Image as ChakraImage, Spinner, Flex } from '@chakra-ui/react';

export const Image = ({
  w, h, cursor, key, src, alt, onClick,
}) => {
  const [loading, isLoading] = React.useState(true);

  const handleOnLoad = () => {
    isLoading(false);
  };
  return (
    <Flex bg="black" width={w} height="17.40rem">
      <ChakraImage
        onLoad={handleOnLoad}
        cursor={cursor}
        key={key}
        src={src}
        alt={alt}
        onClick={onClick}
      />
      {loading && (
        <Flex
          width="1,5rem"
          height={h}
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
