# 데이터 타입
데이터 타입이란 값의 종류를 말한다. JS의 모든 값은 데이터 타입을 갖는다.

자바스클비트(ES6)에선 7개의 데이터 타입을 제공한다. 데이터 타입은 원시 타입과 객체 타입으로 분류된다.
|구분|데이터타입|설명|
|--|--|--|
|원시타입|숫자|정수와 실수 구분없는 하나의 숫자 타입|
|원시타입|문자열|문자열|
|원시타입|불리언|논리적 참과 거짓|
|원시타입|undefined|var 키워드로 선언된 변수에 암묵적으로 할당된 값|
|원시타입|null|값이 없다는 것을 의도적으로 명시할 때 사용하는 값 타입|
|원시타입|심벌|ES6에서 추가된 7번째 타입|
|객체타입||객체, 함수, 배열등|

숫자 1과 문자열 '1'은 비슷하지만 전혀 다른 값이다. 개발자는 명확한 의도를 가지고 타입을 구별해서 값을 생성해야하며, 자바스크립트 엔진은 타입을 구별해서 값을 취급하게 된다.

## 숫자 타입
정적언어의 경우 int, long, float, double등과 같은 여러 숫자 타입을 제공하지만 JS의 경우 number하나만의 타입을 가진다.
ECMAScript 사양에 따르면 숫자 타입의 값은 배정밀도 64비트 부동소숫점 형식을 따른다.

정수, 실수, 2진수, 8진수, 16진수 리터럴은 모두 메모리에 배정밀도 64비트 부동소수점 형식의 2진수로 저장된다. 따라서 이 모든 값을 참조하게 되면 모두 10진수로 해석된다.
```
var binary = 0b1000001;
var octal = 0o101;
var hex = 0x41;

console.log(binary);
console.log(octal);
console.log(hex);
console.log(binary === octal);
console.log(octal === hex);
```
기존의 정적 언어들의 경우 정수와 정수의 나눗셈을 하게되면 정수의 데이터가 나온다. 허나 64비트 부동소수점 형식의 2진수를 사용하는 JS의 경우 정수와 정수의 나눗셈을 통해 실수를 만들어 낼수있다.
```
console.log(3/2);
```
추가적으로 세가지 특별한 값도 표현할 수 있다.
- Infinity:양의 무한대
- -Infinity: 음의 무한대
- NaN : 산술 연산 불가

> 자바스크립트는 대소문자를 구별하기 때문에 NaN의 경우 주의해야 한다.


## 문자열 타입
텍스트 데이터를 나타내는 데 사용한다. 문자열은 0개 이상의 16비트 유니코드 문자의 집합으로 전 세계 대부분의 문자를 표현할 수 있다.
작은따옴표, 큰따옴표, 백틱으로 텍스트를 감싸게 된다.
```
var string;
string = '문자열';
string = "문자열";
string = `문자열`;
```

C에선 문자열 타입을 제공하지 않고 문자의 배열로 문자열을 표현하고, 자바는 문자열을 객체로 표현한다. 그러나 자바스크립트의 문자열은 원시 타입이며, 변경 불가능한 값이다.이는 문자열이 생성될시 해당 문자열을 변경할 수 없다는 것을 의미한다.


> 따옴표로 감싸는 이유는 키워드나 식별자와 같은 토큰과 구분하기 위해서다.


## 템플릿 리터럴
ES6에 추가된 템플릿 리터널은 멀티라인 문자열, 표현식 삽입, 태그드 템플릿 등 편리한 문자열 처리 기능을 제공한다. 이는 런타임에 일반 문자열로 변환되어 처리된다.
```
var str = `hello
world`

var str2 = `hello \r world`
```
템플릿 리터럴을 사용하는 예시론 html파일에 코드를 입력할 시의 값이다.<br>
추가적으로 템플릿 리터럴 내에서 표현식을 삽입할 수 있으며 이는 높은 가독성을 가지고 있다.
```
var templete = `<ul>
  <li><a href="#">HOME</a></li>
</ul>`;
console.log(templete);

var expr1 = "it's first";
var expr2 = "it's second";



console.log(`test sentence first = ${expr1} and second= ${expr2}`

```

## 불리언 타입
논리적 참 거짓을 나타내는 true와 false이다.

## undefined 타입
var 키워드로 선언한 변수는 암묵적으로 undefined로 초기화된다. 다시 말해, 변수 선언에 의해 확보된 메모리 공간을 처음 할당이 이뤄질 때까지 빈 상태로 내버려두지 않고 자바스크립트 엔진이 undefined로 초기화한다.
```
var foo;
console.log(foo);
```
이처럼 개발자의 의도와 상관없이 JS엔진에 의해서 초기화가 이뤄진 값이다. 개발자는 이를 보며 초기화되지 않은 변수임을 간파할 수 있는것이다. 만약 개발자가 의도적으로 undefined를 할당했을 시엔 데이터타입의 의도와 다르기때문에 권장하지 않는다.

> ECMAScript 사양에선 변수는 선언한다(declare)라고 표현하고, 함수는 정의한다(defined)라고 표현한다.

## null 타입
null은 변수에 값이 없다는 것을 의도적으로 명시할 때 사용한다. 변수에 null을 할당하는 것은 변수가 이전에 차몾하던 값을 더 이상 참조하지 않겠다는 의미다.

## 심벌 타입
ES6에서 추가된 7번째 타입으로, 변경 불가능한 원시 타입의 값이다. 심벌 값은 다른 값과 중복되지 않는 유일무이한 값이다. 따라서 주로 이름이 충돌할 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용한다.심벌 이외의 원시 값은 리터럴을 통해 생성하지만 심벌은 Symbol 함수를 호출해 생성한다.

```
var key = Symbol('key');
console.log(typeof key);
var obj = {};

obj[key] = 'value';
console.log(obj[key]); //key라는 심볼을 넣으므로써 obj내부의 프로퍼티에 해당하는 key라는 값은 유일무이한 값이 된다.

```

## 객체 타입
자바스크립트를 이루고 이는 거의 모든것은 객체다.

## 데이터 타입의 필요성
### 데이터 타입에 의한 메모리 공간의 확보와 참조
값은 메모리에 저장하고 참조할 수 있어야한다. 메모리에 값을 저장하려면 먼저 확보해야 할 메모리 공간의 크기를 결정해야 한다.
```
var score=  100;
```
위의 코드에서 100이란 숫자를 메모리 공간안에 넣으려면 일정한 크기가 필요한 것이다. 이에 자바스크립트 엔진은 해당 데이터타입에 맞춰 크기를 지정하는 것이다. 따라서 숫자의 경우 8byte를 지정하게 되고 공간을 확보하게 된다.

### 데이터 타입에 의한 값의 해석
또한 데이터 타입에 의해서 값을 판단한다. 이는 0100 0001이란 숫자를 해석하게 된다면 65지만 문자열로 해석한다면 'A'이다. 이처럼 개발자의 의도에 맞는 데이터를 가져오기 위해 데이터 타입이 필요한 것이다.

## 동적 타이핑
정적 타입의 언어의 경우에 컴파일 시점에서 타입 체크를 수행한다. 이때 타입 체크를 통과하지 못한 경우 프로그램 실행을 막게된다. 허나 자바스크립트의 경우 타입을 선언하지 않는다. 자바스크립트의 변수는 선언이 아닌 할당에 의해 타입이 결정된다.이런 특징을 동적 타이핑이라하며 자바스크립트를 동적 타입 언어라고 한다.


### 동적 타입 언어와 변수
모든 소프트웨어 아키텍처에는 트레이드오프가 존재하며, 모든 애플리케이션에 적합한 은탄환은 없듯이 동적 타입 언어 또한 구조적 단점이 있다. 변수 값은 언제든지 변경될 수 있기 때문에 복잡한 프로그램에선 변화하는 변수 값을 추적하기 어려울 수 있다. 변수의 타입이 고정디어 있지 않고 동적으로 변하는 동적 타입 언어의 변수는 값의 변경에 의해 타입도 언제든지 변경될 수 잇다. 따라서 동적 타입 언어의 변수는 값을 확인하기 전에는 타입을 확신할 수 없다.

결국 동적 타입 언어는 유연성은 높지만 신뢰성은 떨어진다.

> 컴퓨터가 이해하는 코드는 어떤 바보도 쓸 수 잇따. 하지만 훌륭한 프로그래머는 사람이 이해할 수 잇는 코드를 쓴다.







