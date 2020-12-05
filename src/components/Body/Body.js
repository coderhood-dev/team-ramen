import { Box } from "@chakra-ui/react";

export const Body = () => {
  return (
    <Box>
      Body
      {`https://api.themoviedb.org/3/movie/99999?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`}
    </Box>
  );
};
