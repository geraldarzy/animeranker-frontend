import './Landingpage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//bootstrap
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
function Landingpage(){

    return(
        <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Anime-Ranker</Navbar.Brand>
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
        <div id='landingpage' >
            <div>
                animeranker logo goes here
            </div>
            <br/>
            <div>
                What would you like to rate?
            </div>
            <div id="buttons">
                <button>Top 20 Anime Movies</button>
                <button>Top 12 Trending Anime Shows</button>
            </div>
        </div>
        </>
    )
}

export default Landingpage;