import react, { useState } from 'react';
import Teaminput from './teamComponent/Teaminput';

export default function Team({props}) {    

    const [data, setData] = useState({
        title: '',
        content: ''
    });

    const createTeam = () => {
    //insertTeam(, (response) => { console.log(response) }, (error) => { console.log(error) });
    //팀 데이터 받아야되는것
    //profile_ID, 조회,수정 삭제시 team_ID 
    //
    //팀프로필 수정하기 /team/profile/`team_ID`
    //title, content
        console.log(data);
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