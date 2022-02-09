import react, { useState } from 'react';
import Teaminput from './teamComponent/Teaminput';

export default function Team({props}) {    

    const [data, setData] = useState({
        title: '',
        content: ''
    });

    const createTeam = () => {
        
    }

    const inputData = (name,value) => {
        setData({ ...data, [name]: value });
    }

    return (
        <>
            <Teaminput name={"title"} input={inputData}/>
            <Teaminput name={"content"} input={inputData}/>
            <button onClick={createTeam}>팀만들기</button>
        </>
    )


}