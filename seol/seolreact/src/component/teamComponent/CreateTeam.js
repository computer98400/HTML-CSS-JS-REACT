import React, { useEffect, useState } from 'react';
import { myTeamCheck } from '../../axios/api';
import Team from '../Team';

export default function CreateTeam() {

    const [hasTeam, setHasTeam] = useState(false);
    
    const [myteamData, setMyteamData] = useState([]);

    
    useEffect(() => {
        myTeamCheck(1, (response) => { 
            setMyteamData(response.data);
        }, (error) => {
            console.log(error)
        });
    }, []);

    return (
        <>
            {!hasTeam ?
            (<div style={{ width: "500px", height: "500px"}}>
                    새로운 팀을 만들겠습니까?
                    <Team profileid={1}/>
            </div>)
                : <h3>안녕하세요 팀입니다!</h3>}
        </>

    )


}