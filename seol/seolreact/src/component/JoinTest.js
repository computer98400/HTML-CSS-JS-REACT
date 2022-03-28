import React, { useEffect, useState} from 'react';
import styled from 'styled-components'

export default function JoinTest() {
    
    //리팩토링 하겠다..
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    //member라는덩어리로 만들어주는 작업.

    const [idmention, setIdmention] = useState('');
    const [pwmention, setPwmention] = useState('');
    const [emailmention, setEmailmention] = useState('');
    
    const [idcheck, setIdcheck] = useState(false)
    const [pwcheck, setPwcheck] = useState(false)
    const [emailcheck, setEmailcheck] = useState(false)

    const [total, setTotal] = useState(false)

    
    useEffect(() => {
        if (idcheck, pwcheck, emailcheck) {
            setTotal(true)
        } else {
            
            setTotal(false)
        }
    },[idcheck,pwcheck,emailcheck])


    //아이디 유효성 검사    
    useEffect(() => {
        const regSize = /.{4,10}$/;
        const regID = /[^A-Za-z0-9]/gi; // \w
        if (!regID.test(id) && regSize.test(id)) {
            setIdcheck(true);
            setIdmention('');
        } else {
            if (!regSize.test(id)) {
                setIdmention('글자수 확인');
            } else {
                setIdmention('유효 글자 확인');
            }
            setIdcheck(false);
        }
    },[id])
    
    //비밀번호 유효성 검사    
    useEffect(() => {
        const regPW = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{10,15}$/;

        if (regPW.test(password)) {
            setPwcheck(true)
            setPwmention('')
        } else {
            setPwmention('패스워드 확인')
        }
    }, [password])
    

    //이메일 검사
    useEffect(() => {
        const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        
        if (regEmail.test(email)) {
            setEmailcheck(true)
            setEmailmention('')
        } else {
            setEmailmention('정확한 이메일 형식을 확인해주세요')
            setEmailcheck(false)
        }
    },[email])
    
    const inputid = (e) => {
        // console.log(e.target.value);
        setId(e.target.value)
    }
    const inputpw = (e) => {
        // console.log(e.target.value);
        setPassword(e.target.value)
    }
    const inputemail = (e) => {
        // console.log(e.target.value);
        setEmail(e.target.value)
    }

    const join = () => {
        console.log("회원가입 완료되었습니다!");
    }

    return (
        <Initial>
            <input onChange={ inputid }></input>
            {idmention}
            <input onChange={ inputpw }></input>
            {pwmention}
            <input onChange={inputemail}></input>
            {emailmention}
            {total?<button onClick={join}>회원가입 활성화</button> : ``}
        </Initial>
    )

}

const Initial = styled.div`
display:flex;
flex-direction: column;
align-items: center;
    input{
        width: 200px;
    }
`