import './RankShows.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import ItemCard from './ItemCard'
function RankMovies() {
    const [list, setList] = useState([])
    useEffect(()=>{
        fetch('https://anime-rankr.herokuapp.com/genres/').then(resp=>resp.json()).then(data=>{
            console.log(data.data.slice(0,20));
            setList(data.data.slice(0,20));
        })
    })
    return (
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
                    <div className='tierRank' style={{backgroundColor:'orange'}}><p className="tierLetter">A</p></div>
                    <div className="tier"></div>
                </div>
                <div className='tierContainer'>
                    <div className='tierRank' style={{backgroundColor:'rgb(197, 161, 0)'}}><p className="tierLetter">B</p></div>
                    <div className="tier"></div>
                </div>
                <div className='tierContainer'>
                    <div className='tierRank' style={{backgroundColor:'yellow'}}><p className="tierLetter">C</p></div>
                    <div className="tier"></div>
                </div>
                <div className='tierContainer'>
                    <div className='tierRank' style={{backgroundColor:'green'}}><p className="tierLetter">D</p></div>
                    <div className="tier"></div>
                </div>
            </div>
            {list.map(item=>(
                
                <ItemCard key={item.id}imgUrl={item.attributes.image_url}/>
                
            ))}
        </>
    )
}

export default RankMovies