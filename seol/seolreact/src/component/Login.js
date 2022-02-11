import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import LoginForm from './LoginForm';
import { signin,profile } from '../axios/api';
import Modal from './Modal';



export default function Login(props) {
    const [input, setInput] = useState({
        email: 'lee@ssafy.com',
        password: 'asdf12345',
    });    
    useEffect(() => { console.log(input) }, [input]);

    const changeCheck = (e) => {
        const { name, value } = e.target;
        console.log(name + " " + value);
        setInput({
            ...input,
            [name]: value,
        }); 
    }
    const [test, setTest] = useState('');
    const navigate = useNavigate();
    //이부분 
    const onLogin = (e) => {
        signin(input, (response) => { console.log(response) }, (error) => { console.log(error) });
        //login test
        //header에 담기는지
        // profile('1', (response) => { console.log(response) }, (error) => { console.log(error) });
        //공통 데이터로 올리고, 이후에 페이지 동작?
        // fetch(`http://localhost:3001/login`)
        //     .then(response => {
        //         return response.json()
        //     })
        //     .then(data => {
        //         setTest(data[0].token);
        //         setChecklogin(true);
        //     }).then(() => {
        //         navigate('/afterLogin', {replace: true});
        //     })
    };
    //이부분
    
    const [checklogin, setChecklogin] = useState(false);

    useEffect(() => {
        localStorage.setItem("token", test);
    }, [test]);

 
    return (
        <>
            
            <LoginForm onChange={changeCheck} onLogin={onLogin} />
            {/* {checklogin ? <LoginCheckingtest /> : ``} */}
        </>
    )

}