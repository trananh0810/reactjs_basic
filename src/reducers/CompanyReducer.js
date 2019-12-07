const companyInitialState = ["Logitech", "Samsung"];
const companyReducer = (state = companyInitialState, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.newItem];
        case "DELETE":
            return state.filter((value, index) => index !== action.index);
        default:
            return state
    }
}

export default companyReducer;