import React, { useState} from 'react';

export default function Splice() {
    const [value, setValue] = useState([]);
    const [lastvalue, setLastvalue] = useState(0);

    const addBtn = () => {

        const temp = value;
        let tempvalue = 0;
        if (temp.length) {
        tempvalue = temp[temp.length - 1];    
        }
        temp.push(parseInt(tempvalue) + 1);
        setLastvalue(parseInt(tempvalue) + 1);
        setValue(temp);

    }

    const addfrontBtn = () => {

        const temp = value;
        let tempvalue = 0;
        if (temp.length) {
            tempvalue = temp[temp.length - 1];    
        }
        temp.unshift(parseInt(lastvalue) + 1);
        setLastvalue(parseInt(lastvalue) + 1);
        setValue(temp);

    }

    const shiftBtn = () => {

        const temp = value;
        if (temp.length) {
            temp.shift();
        }
        setValue(temp);

    }

    const popBtn = () => {

        const temp = value;
        
        if (temp.length) {
            const check = temp.pop();
            setLastvalue(check-1);
        }
        setValue(temp);
        
    }

    return (
        <>
            {value.map(single => single+", ") }
            <button onClick={addBtn}>뒤에 추가하기</button>
            <button onClick={addfrontBtn}>앞에서 추가하기</button>
            <button onClick={popBtn}>뒤에서부터 삭제하기</button>
            <button onClick={shiftBtn}>앞에서부터 삭제하기</button>
        </>
    )


}