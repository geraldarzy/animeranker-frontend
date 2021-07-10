import logo from '../cover.png'

function Landingpage(){

    return(        
        <div id='landingpage' >
            <div className='heading'>
                <img src={logo} alt='anime-ranker logo'style={{width:'100%', height:'20rem'}}/>
            </div>
            <div className='main-container'>
                What would you like to rate?
            </div>
            <button></button>
        </div>
    )
}

export default Landingpage;