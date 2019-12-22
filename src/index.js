import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import tripReducer from './reducers/tripReducer'
import tripInput2 from './reducers/tripInput2'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

const reducer = combineReducers({
    tripReducer,
    tripInput2
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <Router>
         <App />   
        </Router>
    </Provider>
, 
document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
