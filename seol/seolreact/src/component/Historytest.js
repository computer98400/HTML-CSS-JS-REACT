import React from 'react';
import {useLocation} from 'react-router';
export default function Historytest() {
    const history = useLocation();

    const movePage = () => {
        console.log();
    }
    
    return (
        <>
            <button onClick={movePage}>이동하기</button>
        </>


    )


}