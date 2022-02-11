// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Inputboxtest from './component/Inputboxtest';
import Effecttest from './component/Effecttest';
import Counter from './reducer/Counter';
import Login from './page/Login';
import { BrowserRouter } from 'react-router-dom';
import TestRouter from './router/TestRouter';
import Signup from './component/Signup';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Team from './component/Team';
import CreateTeam from './component/teamComponent/CreateTeam';
import Flexcss from './component/Flexcss';
// import ArrayTest from './component/ArrayTest';

function App() {
  // const [data, setData] = useState({
  //   name: "",
  //   age: "",
  //   grade: "",
  // });

  // const [checkfunc, setCheckfunc] = useState("");
  // const [checkfunc2, setCheckfunc2] = useState("");
  // const [checkfunc3, setCheckfunc3] = useState("");
  // //컴포넌트가 처음 불러와졌을 경우
  // //useEffect(() => { console.log(data) }, [data]);
  // const bottomup = (e) => {
  //   setCheckfunc(e.target.value);
  // }
  
  // const bottomup2 = (e) => {
  //   setCheckfunc2(e.target.value);
  // }
  // const bottomup3 = (e) => {
  //   setCheckfunc3(e.target.value);
  // }
  // //빈상자 && 보낼 함수.
  // //내가 어떤 값을 받았을 때 지금 컴포넌트의 어떤 값을 받은 값으로 바꾸고싶다.  
  // //자바스크립트는 변수에 함수를 담을 수 있다.
  // const inputTest = (testvalue) => {
  //   console.log("check input", testvalue);    
  // }

  // const testfunction4 = (test) => {
  //   console.log("testfunction4가 실행됫습니다",test);
  // }
  // //상위(큰 컴포넌트)컴포넌트에서 하위(작은 컴포넌트)컴포넌트로 데이터를 전달하는 방법.
  // //props
  
  // //

  // //하위컴포넌트에서 상위컴포넌트로 데이터를 전달하는 방법.

  // console.log(checkfunc,checkfunc2,checkfunc3 );
  return (
    <div className="App">
      {/* 인풋 박스에서 값을 받아와야돼  하위컴포넌트에서 상위컴포넌트로 값을 전달하는 방법. */}
      {/* <Inputboxtest datas={data} testfunction={bottomup} testfunction2={bottomup2} testfunction3={bottomup3} testfunction4={ testfunction4 } inputcheck={ inputTest}/> */}
      {/* <button>확인하기.</button> */}
      {/* <Effecttest /> */}
      {/* <Login /> */}
      {/* <CreateTeam /> */}
      {/* <ArrayTest/> */}
      <Flexcss/>
      {/* <BrowserRouter>
        <TestRouter />
      </BrowserRouter> */}
      {/* <Signup /> */}
    </div>
  );
}

export default App;
