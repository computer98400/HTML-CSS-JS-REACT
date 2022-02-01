import { useState} from 'react';

export default function Inputboxtest(props) {
    
    const [input1, setInput1] = useState("");
    //지역변수
    //채킹이라는 함수안에 담는다.
    //onchange == 값이 변할때마다 동작하는 이벤트


    // 지금현재상태인경우에는 input1에 갱신시켜주는것.
    const checking = (e) => {
        //setInput1의 경우는 현재 컴포넌트의 state를 변경한것.
        //setInput1(e.target.value);
        //상위컴포넌트에 있는 inputcheck를 실행시킨것.
        //props.inputcheck(e.target.value);
        props.testfunction4(e.target.value);
    }


    return (
        <>
            <input type="text" onChange={checking}></input><br/>
            <input type="text" onChange={props.testfunction2}></input><br/>
            <input type="text" onChange={props.testfunction3}></input><br/>
        </>


    )


}
