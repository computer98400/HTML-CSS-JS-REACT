import React, { useEffect, useState} from 'react';


export default function JoinTest() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [email , setEmail] = useState('');
    const [idcheck, setIdcheck] = useState(false)
    const [pwcheck, setPwcheck] = useState(false)
    const [emailcheck, setEmailcheck] = useState(false)
    useEffect(() => {

        const regID = /[A-Za-z0-9]+/g;
        
        if (regID.test(id)) {
            setIdcheck(true);
        } else {
            setIdcheck(false);
        }



    },[id])

    useEffect(() => {
        
    },[password])

    useEffect(() => {
        
    },[email])
    
    const inputid = (e) => {
        console.log(e.target.value);
        setId(e.target.value)
    }


    return (
        <>
            <input onChange={ inputid }></input>
            { idcheck ? `` : <div>입력값을 확인해주세요!</div> }
            <input></input>
            <input></input>
        </>
    )

}