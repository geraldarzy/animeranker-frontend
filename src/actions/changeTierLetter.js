
export function changeTierLetter(letter,id) {
    return (dispatch) => {
        dispatch({ type: 'CHANGE_LETTER', letter,id });
        
        // fetch('http://localhost:3000/trips')
        // .then(response => response.json())
        // .then(trips => dispatch({ type: 'FETCH_TRIPS', trips }));

    }
}