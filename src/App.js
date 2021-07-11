import './App.css';
import {Switch, Route} from 'react-router-dom';
import Landingpage from './components/Landingpage';
import RankList from './components/RankList';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
          <Container>
              <Navbar.Brand href="/">Anime-Ranker</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="#link">Rankings</Nav.Link>
                  <NavDropdown title="Categories" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Top 20 Anime Movies</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Top 12 Anime Shows</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
              </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
    <Switch>
      <Route exact path='/'>
        <Landingpage />
      </Route>

      <Route exact path='/rankshows'>
        <RankList genre="TV"/>
        {/* <RankShows/> */}
      </Route>

      <Route exact path='/rankmovies'>
        <RankList genre="Movie"/>
        {/* <RankMovies/> */}
      </Route>

    </Switch>
    </>
  );
}

export default App;
