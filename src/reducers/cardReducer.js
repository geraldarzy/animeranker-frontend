const cardReducer = (state = { cards: [], loading: false}, action) => {
    switch(action.type) {

        case 'LOADING_CARDS':
            return {
                ...state,
                cards: state.cards,
                loading: true
            }

        case 'ADD_CARDS':
            return {
                ...state,
                cards: action.list, 
                loading: false
            }

        case 'CHANGE_LETTER':
            state.cards.filter(item=>item.id==action.id)[0].tierLetter=action.letter
            return {
                ...state,
                // cards: (Object.assign(state.cards.filter(item=>item.id!==action.id),(state.cards.filter(item=>item.id==action.id)))[0].tierLetter=action.letter), 
                cards: state.cards, 
                loading: false
            }

        default: 
            return state;
        }
    }
export default cardReducer