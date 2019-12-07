const displayInitialState = true;
const displayReducer = (state = displayInitialState, action) => {
    switch (action.type) {
        case "CHANGE_DISPLAY":
            return !state;
        default:
            return state
    }
}

export default displayReducer;