import React, { useEffect, useState } from 'react';
import { myTeamCheck } from '../../axios/api';
import Team from '../Team';

export default function CreateTeam() {

    const [hasTeam, setHasTeam] = useState(false);
    
    const [myteamData, setMyteamData] = useState([]);
    //자기 팀을 불러오는것.
    //api.get(/team/myteam)
    useEffect(() => {
        
        myTeamCheck(12, (response) => { 
            console.log(response);
            if (response.data.length !== 0) {
                setHasTeam(true);
                setMyteamData(response.data);
                console.log(myteamData);
            }
        }, (error) => {
            console.log(error)
        });
    },[]);
    return (
        <>
            {!hasTeam ?
            (<div style={{ width: "500px", height: "500px"}}>
                    새로운 팀을 만들겠습니까?
                    <Team profileid={1}/>
            </div>)
                : <h3>안녕하세요 { myteamData.title }팀입니다!</h3>}
        </>

    )


}