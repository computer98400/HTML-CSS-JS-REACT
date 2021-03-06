# shallow copy와 deep copy
- shallow copy : 객체가 가지고 있는 필드값을 단순히 복사하게된다. 이때 참조형 변수는 같은 객체를 가리키게 된다.
- deep copy : 객체가 가지고 있는 필드의 값을 복사해준다. 이 때, 기본형 값들은 그대로 복사가 되며 참조형 변수의 경우 변수가 참조하는 객체에 대해서도 새롭게 복사해서 만들어준다.


# push와 concat
```
const arr = new Array(3,4);
const arr2 = new Array(1,2);

let result1 = arr.concat(arr2);
console.log(result1);

let result2 = arr.push(arr2);
console.log(result2);

```


# for..in문과 for..of문
## for..in문
열거할 수 있는 프로퍼티를 순회할 수 있도록 해준다.
> 열거할 수 있는 프로퍼티? : 내부적으로 enumerable 플래그가 true로 설정된 프로퍼티를 의미한다.

## for..of문(explorer 지원 X)
반복할수잇는 객체를 순회할 수 있도록 해주는 반복문이다.
> 반복할수 있는 객체? : Array, Map, Set, arguments 객체 등등..



# 유사배열
length를 포함하고 있는 배열과 유사한 형태의 객체
대표적인 유사배열 객체 DOM, arguments...
선언시
```
const test = {
0:'a',
1:'b',
2:'c',
length:4
}
console.log(test)
```
기본적으로 `배열`이 아니기 때문에 배열 메소드를 사용할 수 없다 이땐 [apply, call, bind](#apply,-call,-bind)를 통해서 프로토타입 체인을 연결할 수 있다.


# 원시타입들이 wrapper 객체의 메소드를 사용할 수 있는 이유
원시타입과 관련된 wrapper 객체로 일시적 변환이 일어난 뒤 변환되어 프로토타입 객체를 공유하기 때문이다.


# apply, call, bind
Function.prototype의 메소드로써 모두 상위 객체와 하위 객체를 연결하는 역할을 하게된다.
이때 차이점으론 apply과 call의 경우 첫번째 인자로 상위 객체를 넣어주고, 이후 해당 하위 객체에 필요한 인수들을 표시를 하면 된다.
```
child.apply(parent, a, b);
child.call(parent, [a, b]);
```
이후 해당 함수를 실행하게 된다.

하지만 bind의 경우엔 함수를 실행하진 않는다. 따라서 변수를 정의해주고 이후 언제든 불러서 사용하게 된다.
```
var bindTest = child.bind(parent)
bindTest("인수");
```







## 220210

자바스크립트는 가비지 콜렉터를 내장하는 매니지드 언어이다.

가비지 콜렉터 : 애플리케이션이 할당된 공간을 주기적으로 검사하여 더이상 사용되지않는 메모리를 자동으로 정리해주는 기능

리터럴 : 사람이 이해할 수 있는 문자또는 약속된 기호를 사용해 값을 생성하는 표기법
js 기본 문자열 표시 : 작은 따옴표('')
ES6에서 추가된 템플릿 리터럴 : 백틱(``)
백틱 내부에 데이터를 넣을 수 있으며 이러할땐
```
const test = `테스트용 문장입니다 ${data}`
```
이런식으로 표시하게 된다.

표현식 : 값으로 평가될 수 있는 문
= 표현식이 평가되면 새로운 값을 생성하거나 기존값을 참조하게된다.

문 : 프로그램을 구성하는 기본단위이자 최소 실행 단위
토큰 : 문법적인 의미를 가지며, 문법적으로 더이상 나눌수 없는 코드의 기본 요소
ASI : 세미콜론을 자동으로 삽입해주는 기능 - 다만 사용자가 의도한 바와 다르게 세미콜론이 삽입되는 경우가 있기 때문에 협업의 과정에서는 컨벤션이 꼭 필요한 부분이다.

원시타입
number String boolean undefined null symbol object





