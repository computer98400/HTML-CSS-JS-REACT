import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Historytest from './component/Historytest';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer/rootreducer';

//react를 벗어난 범위
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={ store}>
  <React.StrictMode>
    <App />
    </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);
// ReactDOM.render(
//     <Historytest />,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
