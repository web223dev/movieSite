import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { HashRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux'; 
import { Provider } from 'react-redux';
import reducers from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';

//Thunk
import thunk from 'redux-thunk';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// Slick Slider CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// rc-menu CSS
import "rc-menu/assets/index.css";

import './index.css';


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
