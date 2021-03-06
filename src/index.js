import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import 'semantic-ui-css/semantic.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducer/rootReducer';
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from "react-redux"
import { BrowserRouter } from 'react-router-dom';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';


/*const allExtensions = compose(applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())*/

const allExtensions = composeWithDevTools(applyMiddleware(thunk,promise,logger))

const myStore = createStore(rootReducer,allExtensions)
ReactDOM.render(
  //<React.StrictMode>     -Kullanimdan kaldirilmiş-
    <BrowserRouter>
     <Provider store={myStore}>
    <App />
    </Provider> 
    </BrowserRouter> ,  
  //</React.StrictMode>
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
