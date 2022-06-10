# 네이티브 객체
네이티브 객체는 애플리케이션의 환경과 관계없이 언제나 사용할 수 있는 객체이다.

Object, String, Number, Function, Array, RegExp, Date, Math와 같은 객체 생성에 관계가 있는 함수 객체와 메소드로 구성된다.
네이티브 객체를 Global Objects라고 부르기도 하는데 이것은 전역 객체와 다른 의미로 사용되므로 혼동에 주의하여야한다.

## Object
Object() 생성자 함수는 객체를 생성한다. 만약 생성자 인수값이 null이거나 undefined이면 빈 객체를 반환한다.

```
var o = new Object();
console.log(typeof o + ':', o);

o = new Object(undefined);
console.log(typeof o + ': ', o);

o = new Object(null);
console.log(typeof o + ': ', o);
```
- 그 외의 경우에는 생성자 함수의 인수값에 따라 강제 형변환된 객체가 반환된다. 이때 반환된 객체의 [[Prototype]] 프로퍼티에 바인딩된 객체는 Object.prototype이 아니다.

```
var obj = new Object('String');
console.log(typeof obj + ': ', obj);
console.dir(obj);

var strObj = new String('String');
console.log(typeof strObj + ': ', strObj);

var obj = new Object(123);
console.log(typeof obj + ': ', obj);

var numObj = new Number(123);
console.log(typeof numObj + ': ', numObj);

var obj = new Object(true);
console.log(typeof obj + ': ', obj);

var boolObj = new Boolean(123);
console.log(typeof boolObj + ': ', boolObj);
```


> 객체 생성시 특수한 상황이 아니라면 객체리터럴 방식을 사용하는것이 일반적이다.

## Function
자바스크립트의 모든 함수는 Function 객체이다. 다른 객체들처럼 new 연산자를 통해서 생성할수잇다.

```
var adder = new Function('a', 'b', 'return a + b');

adder(2, 6);
```

## Boolean
```
//Truly
var foo = new Boolean(true);    
var foo = new Boolean('false'); 
//falsy
var foo = new Boolean(false); 
var foo = new Boolean();      
var foo = new Boolean('');    
var foo = new Boolean(0);    
var foo = new Boolean(null); 
```
> Boolean값은 Truly한값과 falsy 한 값을 의미한다. 따라서 원시타입 boolean과 혼동하기 쉽다.


## Number
## Math
## Date
## String
## RegExp
## Array
## Error
Error 생성자는 error 객체를 생성한다. error 객체의 인스턴스는 런타임 에러가 발생하였을때 throw된다.

```
try{
    throw new Error('Whoops!');
}catch(e){
    console.log(e.name + ":"+ e.message);
}
```
Error 이외에 Error에 관련한 객체는 아래와 같다.
- EvalError
- InternalError
- RangeError
- ReferenceError
- SyntaxError
- TypeError
- URLError


## Symbol
Symbol은 ECMAScript 6에서 추가된 유일하고 변경 불가능한 원시타입으로 Symbol 객체는 원시 타입 Symbol 값을 생성한다.

## 원시타입과 래퍼객체
각 네이티브 객체는 각자의 프로퍼티와 메소드를 가진다. 정적 프로퍼티, 메소드는 해당 인스턴스를 생성하지 않아도 사용할 수 있고 prototype에 속해있는 메소드는 해당 prototype을 상속받는 인스턴스가 있어야만 사용할 수 있다.

```
var str = 'Hello world';
var res = str.toUpperCase();
console.log(res);

var num = 1.5;

console.log(num.toFixed());
```
이는 <b>원시 타입 값에 대해 표준 빌트인 객체의 메소드를 호출할 때, 원시 타입 값은 연관된 객체로 일시 변환 되기 때문에 가능하다.</b> 그리고 메소드 호출이 종료되면 객체로 변환된 원시 타입 값은 다시 원시 타입 값으로 복귀한다.
Wrapper 객체는 String, Number, Boolean이 있다.

# 호스트 객체
브라우저 환경에서 제공하는 window, XmlHttpRequest, HTMLElement 등의 DOM 노드 객체와 같이 호스트 환경에 정의된 객체를 말한다.

## 전역객체
모든 객체의 유일한 최상위 객체를 의미하며 일반적으로 Browser-side에서는 window, Server-side에서는 global객체를 의미한다.

## BOM
window 객체로 현재 브라우저 창 또는 탭을 표현하는 객체이다.

- window
    - document
    - history
    - location
    - navigator
    - screen

## DOM
문서 객체 모델은 현재 웹페이지의 모델을 생성한다. 최상위 객체는 document 객체로 전체 문서를 표현한다.

- document 
    - html
        - head - title
        - body - `<div>`, `<p>`, text
