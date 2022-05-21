// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";
// import App from "./app"
// import {Provider} from "react-redux";
// // import { createStore } from "redux";
// import { PersistGate } from 'redux-persist/integration/react';
// import rootReducer from "./reducers/index";

// import {store, persistor} from "./store"
// // const store = createStore(rootReducer) 
// ReactDOM.render(
    

//         <Provider store ={store}>
//                 <PersistGate loading={null} persistor={persistor}><App /></PersistGate>
                
//         </Provider>        
 
 
// ,document.getElementById("root"));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);