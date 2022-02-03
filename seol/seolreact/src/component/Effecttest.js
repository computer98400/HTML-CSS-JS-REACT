import React, { useEffect, useState } from 'react';
import { Link, Routes } from 'react-router-dom';


export default function Effecttest() {
    
    const [count, setCount] = useState(0);
    const [obj, setObj] = useState([]);
    const [testobj, setTestobj] = useState([]);
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

    function checkingData() {
        console.log(testobj);
    }

    function clicktest3() {
        console.log("cheeck!", obj[0].id);
    }
    //처음 컴포넌트를 표출할 때 실행되는 함수.
    useEffect(() => {
        console.log("처음에만 실행되나요? ")
        fetch(`http://localhost:3001/days`)
        .then(response => {
            return response.json();
            })
            .then(data => {
                setCount(data.length);
                setTestobj(data);
            })
            .catch(() => {
            console.log("error");
        });
    }, []);

    function postTest() {
        fetch(`http://localhost:3001/days`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: 8,
                day: 8,
            })
        }).then(() => {
            fetch(`http://localhost:3001/days`).then(response => {
                return response.json();
            }).then(data => {
                setTestobj(data);
            })
        });
    }

    function deleteTest() {
        fetch(`http://localhost:3001/days/4`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(() => { console.log("delete complete !") });
    }
    // useEffect(() => {
    //     console.log(obj);
    //     console.log("objchangeTest");
    // },[obj])
    useEffect(() => {
        console.log(testobj);
        console.log("testobjchangeTest2222");
    },[testobj])
    // useEffect(() => {
    //     console.log(count);
    //     console.log("countchangeTest");
    // },[count])

    return (
        <>
            <br/>
            <button onClick={clicktest}>{count}</button><br />
            <button onClick={clicktest2}>test2</button><br/>
            <button onClick={clicktest3}>test3</button><br />
            {
                testobj.map(data =>(
                    <a to="#" key={data.id}>test{data.day}  </a>
                )
                )
            }
            <br/>
            get button<button onClick={checkingData}>checking</button><br/>
            post button<button onClick={postTest}>post</button><br/>
            delete button<button onClick={deleteTest}>delete</button><br/>
        </>
    )
}