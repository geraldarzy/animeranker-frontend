import {url} from '../index'

export function fetchCards() {
    return (dispatch) => {
        // dispatch({ type: 'LOADING_CARDS' });

        fetch(`${url}/genres/Movie`)
        .then(r => r.json())
        .then(res => dispatch({ type: 'ADD_CARDS', res }));
        
        // fetch('http://localhost:3000/trips')
        // .then(response => response.json())
        // .then(trips => dispatch({ type: 'FETCH_TRIPS', trips }));

    }
}