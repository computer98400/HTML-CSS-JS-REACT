import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../axios/api';
import { ADDTK,DELETETK } from '../reducer/reduce';

export default function LoginForm() {
    
    const dispatch = useDispatch();
    
    const tokenCHECK = useSelector(state => state.tokenCHECK.token);
    
    const onLogin = () => {
        //store 초기값 가져오기
        console.log(tokenCHECK);
        signin({ email: "choi@ssafy.com", password: "asdf12345" },
            (response) => {
                console.log("cheeeck");
                console.log(response);

                dispatch(ADDTK(response.data["access-token"]));
            },
            (error) => { console.log(error) });
    }
    
    const onLogout = () => {
        dispatch(DELETETK());
    }
    
    
    return (
        <div>
            { tokenCHECK }
            <input name='id' ></input><br></br>
            <input name='password' ></input><br></br>
            <button onClick={onLogin}>로그인</button>
            <button onClick={onLogout}>로그아웃</button>
        </div>
    )
}
