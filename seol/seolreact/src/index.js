import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer/rootreducer';
import axios from 'axios';
import JoinTest from './component/JoinTest';
import Splice from './component/Splice';
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
  <Splice />, document.getElementById('root')
)