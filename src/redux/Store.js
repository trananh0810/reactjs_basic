import displayReducer from './../reducers/IsDisplayReducer';
import companyReducer from './../reducers/CompanyReducer';

let redux = require('redux');

const allReducer = redux.combineReducers({
    displayReducer,
    companyReducer
});

const store = redux.createStore(allReducer);

export default store;
