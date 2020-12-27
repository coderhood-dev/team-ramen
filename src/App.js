import React from 'react';
import {
  Switch, Route, useLocation,
} from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import {
  Header,
  About,
  FooterAbout,
  Login,
  Register,
  Profile,
  Genre,
  Home,
  DetailMovie,
  Purchase,
  Logout,
} from './components';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      {' '}
      {/* exitBeforeEnter */}
      <Switch location={location} key={location.key}>
        <Route exact path={['/', '/home']}>
          <Home />
        </Route>
        <Route exact path="/about">
          <Flex direction="column" h="100vh" fontSize="1rem">
            <Header />
            <About />
            <FooterAbout />
          </Flex>
        </Route>
        <Route exact path="/details/:id">
          <DetailMovie />
        </Route>
        <Route exact path="/genre/:id">
          <Genre />
        </Route>
        <Route exact path="/profile">
          <Header />
          <Profile />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/purchase/:id">
          <Purchase />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default App;
