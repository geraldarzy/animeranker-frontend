import './RankShows.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import ItemCard from './ItemCard'
import TierRows from './TierRows';
function RankShows(){
    const [list, setList] = useState([])
    useEffect(()=>{
        fetch('https://anime-rankr.herokuapp.com/genres/').then(resp=>resp.json()).then(data=>{
            console.log(data.data.slice(0,20)[0]);
            let list = data.data.slice(0,20).map(show=>(Object.assign(show, {tierLetter: ""})))
            setList(list);
        })
    },[])
    // const markAsDone = (id) =>{
    //     const show = list.filter(show=>show.id===id);
    //     show[0].status='done';
    //     setTaskList(taskList.filter((task)=>task.id!=id).concat(task[0]))
    // }
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
                <TierRows/>
            </div>
            {list.map(item=>(
                
                <ItemCard key={item.id}imgUrl={item.attributes.image_url} tierLetter=''/>
                
            ))}
            <button onClick={()=>{console.log(list);debugger}}>DEBUGGGGGER</button>
        </>
    )
}
export default RankShows;