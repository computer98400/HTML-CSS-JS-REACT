# ReactStudy


## websocket
소켓통신이란? 서버와 클라이언트 양방향 연결이 이루어지는 통신
클라이언트도 서버로 요청을 보낼 수 있고 서버도 클라이언트로 요청을 보낼 수 있는 통신이다.
보통 스트리밍 혹은 실시간 ㅊ팅등과 같은 실시간으로 데이터를 주고 받아야 하는 경우 http통신에 비해 적합하다

Connection을 유지해야되기때문에 http통신에 비해 많은 리소스가 소모된다.


  
## 모달창
간단한 데이터 표현하던가 디자인적인 요소를 위해서 모달창을 추가했다.
useState를 사용해서 모달창이 나와야할 순간을 확인하고 boolean값에 따라서 모달창을 띄울지 말지를 결정하게 된다.

모달은 그저 모든 페이지의 위에 나올 수 있는 alert와 비슷한 역할을 한다고 생각된다.
따라서 양식이 있는게 아닌 html 내용일 뿐이다.
이후 css 공부중에서 내용을 추가하는게 맞다고 생각된다.

## redux공부
react의 경우 다중 컴포넌트를 이용해서 페이지를 렌더하게 된다.
때문에 각 컴포넌트의 데이터를 넘겨줄때마다 각각의 깊이를 도달할때까지 데이터를 계속해서 상위컴포넌트로부터 하위컴포넌트로 넘겨주는 작업을 하게 되는데 이는 페이지의 단계가 많아질수록 더욱 복잡하고 어렵게 된다.
따라서 이때 쓰는 공용저장소의 개념으로 redux를 사용하게 된다.

만약 페이지 전체를 redux를 통해서 만들 경우엔 모든 컴포넌트는 redux의 접근만으로 페이지를 표현할 수 있게 되고 이는 데이터 전달에 큰 도움이 된다.

redux의 구성은 5개로 보여줄 수 있다.
1. action 상태를 정의한다.

```
const EXAMPLE_ACTION = "EXAMPLE_ACTION";
```
위와 같이 상수로 표현한다. 개발자는 해당 상수를 앞으로 creater의 type으로 사용하게 된다.


2. actioncreater 상태 정의를 좀 더 손쉽게 하기위한 중간 단계

```
export const exampleAction = (anydata) => {type:EXAMPLE_ACTION, data : anydata};
```
액션은 store에 저장된 state값을 변경하는 작업을 하게 된다. 따라서 함수를 통해 <b>원본state에 영향을 줄만한 데이터</b>를 받게 된다.


3. dispatch 컴포넌트내에서 store를 접근하기 위한 함수
```
//사용을 위해서 useDispatch hook을 설정해준다.
const dispatch = useDispatch();

//실제로 사용하게 된다면 내가 원하는 데이터를 보내게 된다.
dispatch(exampleAction(anydata));
```
dispatch hook에 대해선 다음에 더 기술해야겠다. 하지만 당장에 사용을 위해서는 useDispatch() hook을 통해서 사용하게된다.


4. store redux를 사용하는 핵심. 저장소

```
const initState = {
  token : ''
}
```
필자의 경우 store에 jwt 토큰 저장을 위해서 사용했기때문에 token이라 정의해두었다.
필요에 따라서 객체 형식이 아닌 자유로운 형태의 데이터를 지정해도 된다.

5. reducer action을 모아둔 곳
```
export reducerName = (state='이곳엔 초기 상태를 정의합니다', action) => {
  switch(action.type){
    case 액션타입:
      return state.데이터 = action.data;
    default:
      return state;
  }
}
```

reducer의 경우는 그저 action 타입에 대한 행동을 써주는 것이다.
중요한 점은 action에 따라서 값을 변화를 정의해 주는것이며 이후 동작을 관여하진 않는다. -> 좀더 검색할 필요가있다.


## useReducer 공부 (다시 공부할 필요가 있는 hook)
reducer란 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수이다.
이 reducer를 사용하는 hook이 useReducer이다.
기본적으로 컴포넌트에 사용 할 수 있는 상태를 가르키고 이후 액션을 발생시키는 함수를 넣어서 표현해준다.

```
const [state, dispatch] = useReducer(reducer, initState);
```
위와 같은 형태로 작성하되, dispatch는 미리 지정해둔 함수를 넣어주게 된다.

## fetch 공부
api를 전달받는 과정에서 꼭 axios를 사용해야하는것은 아니다.
테스트를 하는 과정 혹은 작은 프로젝트의 경우에서 axios를 사용하게 되면 라이브러리를 무조건적으로 추가해야하기 때문에 대신 브라우저 API인 fetch를 통해서 실행 가능한 점이 있다.

```
  fetch().then().catch();
```
기본 문법은 promise 형식을 따른다.



## useEffect 공부
useEffect의 경우 컴포넌트가 렌더링될경우 실행되게 된다.
또한 해당 컴포넌트의 어떤 값을 가르키면서 실행될수있다.
-> 이는 useState와 함께 사용하여 생각하면 쉽다?

```
useEffect(첫번째,[두번째]);
```

첫번째엔 <b>매개변수</b>가 들어오고, 두번째엔 <b>의존성 배열</b>이 들어온다.
의존성배열의 경우 어떤값을 가르키는지를 확인하기위해서 표현해준다.
의존성 배열이 빈배열로 되있을때 ( ex. [] ) 리렌더링될때 처음 호출되고 동작하지않는다.
```
useEffect(() => { 이곳에 동작을 설정해주세요 }, [])
```
데이터를 지정하는경우

```
useEffect(()=> { 이곳에 동작을 설정해주세요 },[데이터])
```

## 컴포넌트 내의 inputBox 여러개 한번에 저장해두기



## useState공부
컴포넌트 안에서 데이터를 지정할 때 사용된다.

useState hook의 경우 해당 컴포넌트에서 데이터를 저장하는 수단이라 생각하면 쉽다.

요번 프로젝트 진행하면서 가장 짧은 형태의 useState hook사용법을 익혔다.
좀더 공부를 해야될 내용이긴 하다.
비구조적 할당을 통해서 useState를 정의해준다.

```
const [data, setData ] = useState(이곳에 데이터의 초기값을 지정해줍니다);
```
이후 <b>data</b>를 접근할시엔 setData를 통해서 접근하게된다.

프로젝트에 사용된 useState()의 형태는 객체 형태가 많았다.

```
const [data, setData] = useState({ 
  data1 : '', 
  data2: ''
})
```
따라서 위와 같이 중괄호를 통해서 표현했고, 이후에 접근시엔

```
setData([data1] : '변경할 데이터값입니다');

//console.log(data) // {data1: '변경할 데이터값입니다',data2:''}
```
위와같은 결과값을 확인할 수 있었다.
이는 각종 이벤트들에 따라서 해당 페이지 내에 데이터를 저장하는데에 큰 도움이 되었다.


## 상위 컴포넌트 -> 하위 컴포넌트
상위에서 하위로 보낼땐 컴포넌트에 props를 붙여서 표현하게 된다.

```
<하위컴포넌트 하위컴포넌트에서 사용할 이름={상위컴포넌트의 데이터} /> 
<Inputboxtest data={ testData1 } />
```
<br>
상위에 있는 컴포넌트 혹은 데이터를 하위컴포넌트에

```
변수명={상위컴포넌트의 변수 혹은 함수}
```

의 형식으로 데이터를 "내려준다."

이후 하위 컴포넌트에선 매개변수로 받은 props에 대해서 접근이 가능해진다.



## 하위 컴포넌트 -> 상위 컴포넌트
하위에서 상위로 보낼땐 직접적인 방법이 없다.

따라서 상위 컴포넌트에 콜백함수형태로 보낸 props에 값을 받아오게 된다.
```
  const 돌려받을함수 = (테스트용값) => {
    console.log("하위 컴포넌트 전달내용 확인용 : ", 테스트용값);
  }

const inputTest = (testvalue) => {
    console.log("check input", testvalue);    
  }
```
이후 상위컴포넌트 -> 하위컴포넌트로 보내는 형식은 같다.

다만 하위컴포넌트에선 
```
const checking = (data) => {
  props.testFunction(data);
}
```    
 props를 통해 상위 컴포넌트의 함수를 접근하여 값을 넘겨주게 된다.
 
 
