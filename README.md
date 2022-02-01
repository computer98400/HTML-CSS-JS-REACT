# ReactStudy


## useEffect 공부
useEffect의 경우 컴포넌트가 리렌더링될경우 실행되게 된다.
또한 해당 컴포넌트의 어떤 값을 가르키면서 실행될수있다.
-> 이는 useState와 함께 사용하여 생각하면 쉽다?

첫번째엔 매개변수가 들어오고, 두번재엔 의존성 배열이 들어온다.
의존성배열의 경우 어떤값을 가르키는지를 확인하기위해서 표현해준다.
없을경우 리렌더링될때 처음 호출되고 동작하지않는다.





## useState공부

## 상위 컴포넌트 -> 하위 컴포넌트
상위에서 하위로 보낼땐 컴포넌트에 props를 붙여서 표현하게 된다.

```
<Inputboxtest datas={data} testfunction={bottomup} testfunction2={bottomup2} testfunction3={bottomup3} testfunction4={ testfunction4 } inputcheck={ inputTest}/> 
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
  const inputTest = (testvalue) => {
    console.log("check input", testvalue);    
  }
```
이후 상위컴포넌트 -> 하위컴포넌트로 보내는 형식은 같다.

다만 하위컴포넌트에선 
```
    const checking = (e) => {
        props.testfunction4(e.target.value);
    }
```    
 props를 통해 상위 컴포넌트의 함수를 접근하여 값을 넘겨주게 된다.
 
 
