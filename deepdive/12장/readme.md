# 함수 호이스팅

함수 선언문의 경우 함수가 정의되기 이전에 함수 호출이 간으하다. 함수 선언문의 경우, 함수 선언의 위치와는 상관없이 코드 내 어느 곳에서든지 호출이 가능한데 이것을 <b>함수 호이스팅</b>이라 한다.
자바스크립트는 ES6의 let, const를 포함하여 모든 선언(var, let, const, function, function*, class)을 호이스팅 한다.

> 호이스팅이란 var 선언문이나 function 선언문 등 모든 선언문이 해당 Scope의 선두로 옮겨진 것처럼 동작하는 특성을 말한다. 즉, 자바스크립트는 모든 선언문이 선언되기 이전에 참조 가능하다.

```
var res = square(5);    //25 //이후 실행됨

var square = function(number){ //함수 선언문의 경우 먼저 실행됨
    return number * number;
}

```


함수 표현식의 경우이다.

```
var res = square(5);    //TypeError

var square = function(number){
    return number * number;
}

```
<b>함수 표현식의 경우 함수 호이스팅이 아니라 `변수 호이스팅`이 발생한다.</b>
> 함수 표현식은 함수 선언문과 달리 스크립트 로딩 시점에 변수 객체(VO)에 함수를 할당하지 않고 runtime에 해석되고 실행되므로 이 두가지를 구분하는 것은 중요하다.

>> 함수 선언문으로 정의하게 된다면 모든 함수가 VO에 들어가게된다 = 즉 실행하지 않을 함수까지 모두 VO에 저장하게 됨으로 애플리케이션의 응답속도를 떨어트리는 이유가 된다. 따라서 함수표현식 사용을 권고한다.


# First-class object(일급 객체)

<b>일급 객체란 생성, 대입, 연산, 인자 또는 반환값으로서의 전달 등 프로그래밍 언어의 기본적 조작을 제한없이 사용할 수 있는 대상을 의미한다.</b>

```
var increase = function (num){ //함수 표현식 1
    return ++num;
}

var decrease = function (num){  //함수 표현식 1
    return --num;
}

var predicates = { increase, decrease};  // 2

function makeCounter(predicate){    // 3
    var num = 0;

    return function(){              // 4
        num = predicate(num);
        return num;
    }
}

var increaser = makeCounter(predicates.increase);
console.log(increaser()); //1
console.log(increaser()); //2

var decreaser = makeCounter(predicates.decrease);
console.log(decreaser()); //-1
console.log(decreaser()); //-2

```

- 함수 표현식을 상단에 선언한 부분이다. 따라서 이후 코드에서 해당 변수를 사용할 시에 TypeError가 안나오게 된다.
- 단순히 보면 안되는 문이다. 해당 predicates를 통해서 increase와 decrease를 객체 안에 넣어줬다. 이는 자바스크립트에선 함수또한 객체이기 때문에 가능한 것이다. 따라서 객체를 접근하기위한 마침표 표기법을 통해서 접근할수있게 된다.
- 매개변수로 함수를 넣어준 모습이다. 자세히 얘기하자면 매개변수에 변수를 넣어주었는데 해당 변수가 함수인 모습이다.

# 매개변수
함수의 작업 실행을 위해 추가적인 정보가 필요할 경우, 매개변수를 지정한다. 매개변수는 함수 내에서 변수와 동일하게 동작한다.

## 매개변수 vs 인수
매개변수는 함수 내에서 변수와 동일하게 메모리 공간을 확보하며 함수에 전달한 인수는 매개변수에 할당된다. 만약 인수를 전달하지 않으면 매개변수는 undefined로 초기화된다.
> 매개변수가 필요한 함수의 경우에서 해당 매개변수를 넣지않는다면 함수내에서 받아야할 인수가 undefined가 된다는 의미이다.

```
var foo = function(p1, p2){
    console.log(p1,p2);
}
foo(1) // 1
```
- foo라는 함수를 실행하기위해서 매개변수로 p1과 p2가 필요하다 하지만 아래서의 호출에선 p1에 해당하는 인수만을 적어준 모습이다. 따라서 p2의 경우 undefined로 초기화됨을 볼수있다.


## Call-by-value
원시 타입 인수는 Call-by-value로 동작한다. 이는 함수 호출 시 원시 타입 인수를 함수에 매개변수로 전달할 때 매개변수에 값을 복사하여 함수로 전달하는 방식이다. 이때 함수 내에서 매개변수를 통해 값이 변경되어도 전달이 완료된 원시 타입 값은 변경되지 않는다.
```
function foo(primitive){
    primitive += 1;
    return primitive;
}

var x = 0;

console.log(foo(x));    // 1
console.log(x);         // 2
```
- foo(x)를 실행하여 변수 x에 대해서 값을 변경했다고 생각할 수 있지만 원시타입의 경우 메모리에 새로운 값을 만들어 참조할 뿐이다.
- 따라서 기존의 x의 값은 변하지 않는다.


## call-by-reference
객체형 인수는 Call-by-reference로 동작한다. 이는 함수 호출 시 참조 타입 인수를 함수에 매개변수로 전달할 때 매개변수에 값이 복사되지 않고 객체의 참조값이 매개변수에 저장되어 함수로 전달되는 방식이다. 이때 함수 내에서 매개변수의 참조값이 이용하여 객체의 값을 변경했을 때 전달되어진 참조형의 인수값도 같이 변경된다.

```
function changeVal(primitive, obj){
    primitive += 100;
    obj.name = 'Kim';
    obj.gender = 'female';
}

var num = 100;
var testobj = {
    name : 'Lee',
    gender: 'male'
}
console.log(num);       // 1
console.log(testobj);   // 2

changeVal(num, testObj);

console.log(num);       // 3
console.log(testobj);   // 4

```

- 100 선언된 num의 경우 원시타입임을 기억하면된다.
- Object {name: 'Lee', gender: 'male' } 선언된 num의 경우 객체임을 기억하면된다.
- 100 원시타입의 경우 위의 예제(Call-by-value)에서와 마찬가지로 메모리에 새로운 값을 만들어 참조하기 때문에 변하지 않는 것을 확인할 수 있다.
- Object {name: 'Kim', gender: 'female' } 객체타입의 경우 값이 변경됨을 알 수 있다.


> 원시타입의 경우 Call-by-value가 일어나게 되고 객체 타입의 경우 Call-by-reference가 일어난다는것을 확인할 수 있다.


# 반환값
함수는 자신을 호출한 코드에게 수행한 결과를 반환할 수 있다. 이때 반환된 값을 반환값이라 한다.
1. `return`키워드는 함수를 호출한 코드에게 값을 반환할 때 사용한다.
2. 함수는 배열 등을 이용하여 한 번에 여러 개의 값을 리턴할 수 있다.
3. 함수는 반환을 생략할 수 있다. 이때 함수는 암묵적으로 undefined를 반환한다.
4. 자바스크립트 해석기는 `return`키워드를 만나면 함수의 실행을 중단한 후, 함수를 호출한 코드로 되돌아간다. 

```
function calculateArea(width, height){
    var area = width * height;
    return area;
}

console.log(calculateArea(3,5));    
console.log(calculateArea(8,5));

function getSize(width, height, depth){
    var area = width * height;
    var volume = width * height * depth;
    return [area, value];   //1

}

console.log('area is'+getSize(3,2,3)[0]);
console.log('area is'+getSize(3,2,3)[1]);
```
- 복수의 값을 반환한 경우이다. 해당 예제에선 area, value값을 반환하게 된다. 배열로 반환하는게 아닌 객체형태로 반환하는 경우는 test.js에 작성하였다.

# 함수 객체의 프로퍼티
함수또한 객체이기 때문에 프로퍼티를 가질 수 있다.

```
function square(number){
    return number * number;
}
square.x = 10;
square.y = 20;

console.log(square.x, square.y);    //10 20
```

## arguments 프로퍼티
arguments 객체는 함수 호출 시 전달된 인수들의 정보를 담고 잇는 순회가능한 유사 배열 객체이며 함수 내부에서 지역변수처럼 사용된다. 즉 함수 외부에서는 사용할 수 없다.

```
function multiply(x,y){
    console.log(arguments);
    return x*y;
}
multiply();
multiply(1);
multiply(1,2);
multiply(1,2,3);

```

매개변수는 인수로 초기화된다.
적을 경우 : 인수가 전달되지 않는 매개변수는 `undefined`로 초기화 된다.
많을 경우 : 무시된다.
> 이러한 자바스크립트의 특성때문에 런타임 시에 호출된 함수의 인자 갯수를 확인하고 이에 따라 동작을 달리 정의할 필요가 있을 수 잇다. 이때 유용한 것이 arguments 객체이다.

```
function sum() {
    var res = 0;

    for(var i =0; i < arguments.length; i++){
        res += arguments[i];
    }
    return res;
}
console.log(sum());
console.log(sum(1,2));
console.log(sum(1,2,3));
```
- 어떤 매개변수를 받았는가에 대한 예시를 test.js에 넣어뒀다.


자바스크립트는 함수를 호출할 대 인수들과 함께 암묵적으로 arguments 객체가 함수 내부로 전달된다. arguments 객체는 배열의 형태로 인자값 정보를 담고있지만 실제 배열이 아닌 유사배열객체이다.

`유사배열객체`란 length 프로퍼티를 가진 객체를 말한다. 배열은 아니므로 배열 메소드를 사용하는 경우 에러가 발생한다. 배열메소드를 사용하려면 Function.prototype.call, Function.prototype.apply를 사용하여야 하는 번거로움이 있다.

```
function sum(...args){
    if(!args.length) return 0;
    return args.reduc((pre, cur) => pre + cur);
}
console.log(sum(1,2,3,4,5));
```


## caller 프로퍼티
자신을 호출한 함수를 의미한다.
```
function foo(func){
    var res = func();
    return res;
}

function bar(){
    return 'caller :'+bar.caller;
}
console.log(foo(bar));  //caller: function foo(func) {...}
console.log(bar());     //null

```
  
## length 프로퍼티
length 프로퍼티는 함수 정의 시 작성된 매개변수 갯수를 의미한다.

## name 프로퍼티
함수명을 나타내며 기명함수의 경우 함수명을 값으로 갖고 익명함수의 경우 빈문자열을 값으로 갖는다.

## __proto__ 접근자 프로퍼티
프로토타입 객체란 프로토타입 기반 객체 지향 프로그래밍의 근간을 이루는 객체로서 객체간의 상속을 구현하기 위해 사용된다. 즉, 프로토타입 객체는 다른 객체에 공유 프로퍼티를 제공하는 객체를 말한다.
__proto__프로퍼티는 [[Prototype]] 내부 슬롯은 프로토타입 객체를 가르킨다. 
```
console.log({}.__proto__ === Object.prototype) // true
```
__proto__ 프로퍼티는 객체가 직접 소유하는 프로퍼티가 아니라 모든 객체의 프로토타입 객체인 Object.prototype 객체의 프로퍼티이다. 모든 객체는 상속을 통해 __proto__접근자 프로퍼티는 사용할 수 있다.

> 함수형 언어에서의 상속은 __proto__를통해서 접근한다고 생각하자.

## prototype 프로퍼티
prototype 프로퍼티는 함수 객체만이 소유하는 프로퍼티이다. 즉 일반 객체에는 prototype 프로퍼티가 없다.
```
//함수 객체는 prototype 프로퍼티를 소유한다.
console.log(Object.getOwnPropertyDescriptor(function() {}, 'prototype'));
//{value: {...}, writable: true, enumerable: false, configurable: false}

//일반 객체의 경우는 prototype 프로퍼티를 소유하지 않는다.
console.log(Object.getOwnPropertyDescriptor({}, 'prototype'));
//undefined
```


# 함수의 다양한 형태

## 즉시 실행 함수
함수의 정의와 동시에 실행되는 함수를 즉시 실행 함수라고 한다. 최초 한번만 호출되며 다시 호출할 수는 없다. 이러한 특징을 이용하여 최초 한번만 실행이 필요한 초기화 처리등에 사용할 수 있다.


```
(function myFunction(){ //기명 즉시 실행 함수
    var a = 3;
    var b = 5;
    return a * b;
}());

(function (){           //익명 즉시 실행 함수
    var a = 3;
    var b = 5;
    return a * b;
}());

//SyntaxError : Unexpected token // 1
function () {

}();

// 따라서 즉시 실행 함수는 소괄호로 감싸준다.
(function () {

}())

(function () {})();
```
- 함수 선언문은 자바스크립트 엔진에 의해 함수 몸체를 닫는 중괄호 뒤에 ;가 자동 추가된다.

자바스크립트에서 가장 큰 문제점 중의 하나는 파일이 분리되어 있다하여도 글로벌 스코프가 하나이며 글로벌 스코프에 선언된 변수나 함수는 코드 내의 어디서든지 접근이 가능하다는 것이다.
따라서 다른 스크립트 파일 내에서 동일한 이름으로 명명된 변수나 함수가 같은 스코프 내에 존재할 경우 원치 않는 결과를 가져올 수 있다.

> jQuery와 같은 라이브러리의 경우, 코드를 즉시 실행 함수 내에 정의해 두면 라이브러리의 변수들이 독립된 영역 내에 있게 되므로 여러 라이브러리들은 동시에 사용하더라도 변수명 충돌과 같은 문제를 방지할 수 있다.

## 내부 함수
함수 내부에 정의된 함수를 내부함수라 한다.
내부함수 child는 자신을 포함하고 있는 부모함수 parent의 변수에 접근할 수 있다. 하지만 부모함수는 자식함수(내부함수)의 변수에 접근할 수 없다.
또한 내부함수는 부모함수의 외부에서 접근할 수 없다.
```
function parent(param){
    var parentVar = param;
    function child() {
        var childVar = 'lee';
        console.log(parentVar + ' ' + childVar); // Hello lee
    }
    child();
    console.log(parentVar + ' '+childVar);  // Uncaught ReferenceError
}
parent('hello');
child() //child is not defined
```

## 재귀 함수
자기 자신을 호출하는 함수를 말한다.

```
fibonacci(n){
    if(n <2) return n;
    return fibonacci(n-1)+fibonacci(n-2);
}
```

> 대부분의 재귀함수는 for나 while문으로 구현이 가능하다. 반복문보다 재귀함수를 통해 보다 직관적으로 이해하기 쉬운 구현이 가능한 경우에만 한정적으로 적용하는 것이 바람직하다.


## 콜백 함수
함수를 명시적으로 호출하는 방식이 아니라 특정 이벤트가 발생했을 때 시스템에 의해 호출되는 함수를 말한다.
콜백함수는 주로 이벤트 핸들러 처리이다.
```
var button = document.getElementById('myButton');
button.addEventListener('click', function(){
    console.log('button clicked!');
})
```
> 콜백함수에 대해선 더욱 정확한 이해가필요하다. 이후에 다시 다뤄야겠다.


