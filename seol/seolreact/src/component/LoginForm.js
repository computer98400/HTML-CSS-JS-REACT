import React from 'react';



export default function LoginForm({ onChange, onLogin }) {
    
    return (
        <div>
            <input name='id' onChange={onChange}></input>
            <input name='password' onChange={onChange}></input>
            <button onClick={onLogin}>로그인</button>
        </div>
    )
}