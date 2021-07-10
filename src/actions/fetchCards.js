import {url} from '../index'

export function fetchCards(genre) {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CARDS' });

        fetch(`${url}/genres/${genre}`)
        .then(r => r.json())
        .then(res => {
            let list = res.data.map(show=>(Object.assign(show, {tierLetter: ""})));
            dispatch({ type: 'ADD_CARDS', list })
        });
        
        // fetch('http://localhost:3000/trips')
        // .then(response => response.json())
        // .then(trips => dispatch({ type: 'FETCH_TRIPS', trips }));

    }
}