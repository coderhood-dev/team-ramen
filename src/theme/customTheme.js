import { extendTheme } from '@chakra-ui/react';

export const customTheme = extendTheme({
  fonts: {
    body: 'Montserrat, sans-serif',
    heading: 'Montserrat, serif',
    mono: 'Montserrat, monospace',
  },
  colors: {
    background: '#14213d',
  },
});
