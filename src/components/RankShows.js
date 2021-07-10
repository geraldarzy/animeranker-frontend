import './RankShows.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
function RankShows(){
    
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
            <div style={{marginTop:'4rem'}}>
                <div className='tierContainer'>
                    <div className='tierRank' style={{backgroundColor:'red'}}><p className="tierLetter">S</p></div>
                    <div className="tier"></div>
                </div>
                <div className='tierContainer'>
                    <div className='tierRank' style={{backgroundColor:'orange'}}>A</div>
                    <div className="tier"></div>
                </div>
                <div className='tierContainer'>
                    <div className='tierRank' style={{backgroundColor:'rgb(197, 161, 0)'}}>B</div>
                    <div className="tier"></div>
                </div>
                <div className='tierContainer'>
                    <div className='tierRank' style={{backgroundColor:'yellow'}}>C</div>
                    <div className="tier"></div>
                </div>
                <div className='tierContainer'>
                    <div className='tierRank' style={{backgroundColor:'green'}}>D</div>
                    <div className="tier"></div>
                </div>
            </div>
        </>
    )
}
export default RankShows;