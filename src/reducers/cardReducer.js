const cardReducer = (state = { cards: [], loading: false}, action) => {
    switch(action.type) {

        case 'ADD_CARDS':
            return {
                ...state,
                cards: action.res, 
                loading: false
            }

        default: 
            return state;
        }
    }
export default cardReducer