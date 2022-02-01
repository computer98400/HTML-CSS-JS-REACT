import React, { useEffect, useState } from 'react';



export default function Effecttest() {
    
    const [count, setCount] = useState(0);
    const [obj, setObj] = useState([]);

    function clicktest() {
        setCount(count+1);
    }


    //객체 형태에서 값 변경하기?
    function clicktest2() {
        if (!obj.length) {
            setObj([
                ...obj,
                {
                    id: Math.random(),
                    test:Math.random(),
                }
            ]);
        } else {
            setObj([{
                id: Math.random(),
                test: Math.random(),
            }
            ])
        }
    }
    
    function clicktest3() {
        console.log("cheeck!", obj[0].id);
    }


    useEffect(() => {
        console.log(obj);
        console.log("objchangeTest");
    },[obj])
    useEffect(() => {
        console.log(count);
        console.log("countchangeTest");
    },[count])

    return (
        <>
            <button onClick={clicktest}>{ count }</button>
            <button onClick={clicktest2}>test2</button>
            <button onClick={clicktest3}>test3</button>
        </>
    )
}