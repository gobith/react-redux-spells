import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import allReducers from './reducers/all-reducers';
import axios from 'axios';
import thunk from 'redux-thunk';
import App from "./components/app";

const middleware = applyMiddleware(thunk);
const store = createStore(allReducers, middleware);


store.dispatch((dispatch) => {
    dispatch({type: "FETCH_SPELLS_START"});
    axios.get("spells.json").then((response) => {

        dispatch({type: "RECEIVED_SPELLS", payload: response.data});
    })

})

store.dispatch((dispatch) => {
    dispatch({type: "FETCH_FILTERS_START"});
    axios.get("filters.json").then((response) => {

        dispatch({type: "RECEIVED_FILTERS", payload: response.data});
    })

})

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
    , document.getElementById('root'));
