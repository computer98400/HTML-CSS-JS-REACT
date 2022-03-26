import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer/rootreducer';
import axios from 'axios';
import JoinTest from './component/JoinTest';
//react를 벗어난 범위
// const store = createStore(rootReducer);

// ReactDOM.render(
//   <Provider store={ store}>
//   <React.StrictMode>
//     <App />
//     </React.StrictMode>
//     </Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <JoinTest />, document.getElementById('root')
)