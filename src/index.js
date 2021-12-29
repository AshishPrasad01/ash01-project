import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import myStore from './Components/ReduxStore/Store';
import {Provider} from "react-redux"


ReactDOM.render(
 <Provider store = {myStore}>
   <App />
 </Provider>
    
  , document.getElementById('root')
);


