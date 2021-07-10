import allAnimeLogo from '../pictures/allAnimeLogo.png'
import './Landingpage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom'
//bootstrap
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
function Landingpage(){
    const history = useHistory();
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
        <img src={allAnimeLogo} alt='anime-ranker logo'style={{width:'100%', height:'20rem'}}/>
            <div className='main-container'>
                What would you like to rate?
            </div>
            <div id="buttons">
                <Button variant='primary' style={{marginRight:'1rem'}} onClick={()=>history.push('/rankmovies')}>Top Anime Movies</Button>
                <Button variant='secondary' onClick={()=>history.push('/rankshows')}>Top Anime Shows</Button>
            </div>
        </div>
        </>
    )
}

export default Landingpage;