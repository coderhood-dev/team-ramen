import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Header,
  Body,
  About,
  FooterAbout,
  FooterBody,
  DetailsMovies,
  FooterDetailsMovies,
  Login,
} from "./components/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Body />
          <FooterBody />
        </Route>
        <Route exact path="/about">
          <Header />
          <About />
          <FooterAbout />
        </Route>
        <Route exact path="/details/:id">
          <Header />
          <DetailsMovies />
          <FooterDetailsMovies />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
