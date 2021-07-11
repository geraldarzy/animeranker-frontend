export function clearStore() {
    return (dispatch) => {
        dispatch({ type: 'CLEAR_STORE' });
    }
}