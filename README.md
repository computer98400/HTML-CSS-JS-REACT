# ReactStudy

## useState공부

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
 
 
