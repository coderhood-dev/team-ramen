import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { customTheme } from './theme/customTheme';
import { PopularMoviesProvider, UserContextProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <UserContextProvider>
        <PopularMoviesProvider>
          <Router>
            <App />
          </Router>
        </PopularMoviesProvider>
      </UserContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
