import axios from 'axios';
import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataTest, signin } from '../axios/api';
import { getCookie, removeCookie, setCookie } from '../config/cookie';
import { ADDTK,DELETETK } from '../reducer/reduce';
import Modal from './Modal';
export default function LoginForm() {
    
    const dispatch = useDispatch();
    
    const tokenCHECK = useSelector(state => state.tokenCHECK.token);



    const onLogin = () => {
        //store 초기값 가져오기
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 1);

        console.log(tokenCHECK);
        signin({ email: "choi@ssafy.com", password: "asdf12345" },
            (response) => {
                console.log("cheeeck");
                console.log(response);
                
                dispatch(ADDTK(response.data["access-token"]));
                setCookie("token", response.data["access-token"], {
                    expires,
                });

                axios.defaults.headers.common["Authorization"] = getCookie("token");
                console.log(axios.defaults.headers.common["Authorization"]);
            },
            (error) => { console.log(error) });
        }
        
        const onLogout = () => {
            dispatch(DELETETK());
            removeCookie();
        }
        const [modalopen, setModalppen] = useState(false);
        
        const openModal = () => {
            setModalppen(true);
        }
        const closeModal = () => {
            setModalppen(false);
        }
        
    const sendData = () => {
        console.log("check");
            console.log(axios.defaults.headers.common["Authorization"]);
            dataTest("test",tokenCHECK, (response) => {
                console.log("success");
                console.log(response)
            }, (error) => {
            console.log("fail");
            console.log(error)
        });
    }

    const sendData2 = () => {

        dataTest(tokenCHECK, (response) => { console.log(response) }, (error) => { console.log(error) });

    }


    return (
        <div>
            { tokenCHECK }
            <input name='id' ></input><br></br>
            <input name='password' ></input><br></br>
            <button onClick={onLogin}>로그인</button>
            <button onClick={onLogout}>로그아웃</button>
            <button onClick={sendData}>데이터 보내기 버튼</button>
            <button onClick={sendData2}>데이터 보내기 버튼222</button>

        </div>

    )
}
