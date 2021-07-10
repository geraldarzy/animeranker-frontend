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