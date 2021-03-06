# 스코프

```
var x = 'global';

function foo () {
    var x = 'function scope';
    console.log(x);
}
foo();      //  function scope
console.log(x); //global
```

> 스코프는 참조 대상 식별자를 찾아내기 위한 규칙이다. 자바스크립트는 이 규칙대로 식별자를 찾는다.

프로그래밍은 변수를 선언하고 값을 할당하며 변수를 참조하는 기본적인 기능을 제공하며 이것으로 프로그램의 상태를 관리할 수 있다. 변수는 전역 또는 코드블록이나 함수 내에 선언하며 코드 블록이나 함수는 중첩될 수 있다. 식별자는 자신이 어디에서 선언됐는지에 의해 자신이 유효한 범위를 갖는다.

# 스코프의 구분
- 전역 스코프 : 코드 어디서든지 참조할 수 있다.
- 지역 스코프 : 함수 코드 블록이 만든 스코프로 함수 자신과 하위 함수에서만 참조할 수 있다.

변수의 스코프
- 전역 변수 : 전역에서 선언된 변수이며 어디에든 참조할 수 있다.
- 지역 변수 : 지역 내에서 선언된 변수이며 그 지역과 그 지역의 하부 지역에서만 참조할 수 있다.

> 변수는 선언 위치에 의해 스코프를 가지게 된다. 즉, 전역에서 선언된 변수는 전역 스코프를 갖는 전역 변수이고, 지역에서 선언된 변수는 지역 스코프를 갖는 지역 변수가 된다. 전역 스코프를 갖는 전역 변수는 전역에서 참조할 수 있다. 지역에서 선언된 지역 변수는 그 지역과 그 지역의 하부 지역에서만 참조할 수 있다.

# 자바스크립트 스코프의 특징
> 자바스크립트는 <b>함수 레벨 스코프</b>를 따른다. 함수레벨 스코프란 함수 코드 블록 내에서 선언된 변수는 함수 코드 블록 내에서만 유효하고 함수 외부에서는 유효하지 않다.는 것이다.

단, ECMAScript 6에서 도입된 `let`,`const`의 경우 keyword를 사용하면 블록 레벨 스코프를 사용할 수 있다.

```
var x = 0;
{
    var x = 1;
    console.log(x); // 1
}
console.log(x); // 1

let y = 0;
{
    let y = 1;
    console.log(y); //1
}
console.log(y);     //0
```

# 전역 스코프
전역에 변수를 선언하면 이 변수는 어디서든지 참조할 수 있는 전역 스코프를 갖는 전역 변수가 된다. var 키워드로 선언한 전역 변수는 `전역 객체의 프로퍼티이다.`

```
var global = 'global';

function foo() {
    var local = 'local';
    console.log(global);
    console.log(local);
}
foo();

console.log(global);
console.log(local);

```


자바스크립트는 다른 C-family language와는 달리 특별한 시작점이 없으며 코드가 나타나는 즉시 해석되고 실행된다. 따라서 전역에 변수를 선언하기 쉬우며 이것은 전역 변수를 남발하게 되는 문제를 야기한다.
전역 변수의 사용은 `변수 이름이 중복`될 수 있고, 의도치 않은 재할당에 의한 상태 변화로 코드를 예측하기 어렵게 만드므로 사용을 억제하여야 한다.

# 비 블록 레벨 스코프
```
if(true){
    var x = 5;
}
console.log(x);
```
변수 x는 코드 블록 내에서 선언되었지만 `함수 레벨 스코프에 해당하지 않기 때문에` 전역 스코프를 갖게 된다.


# 함수 레벨 스코프
```
var a = 10;

(function () {
    var b = 20;
})();           // 1

console.log(a); // 2
console.log(b); // 3
```
- 즉시 실행 함수를 사용했다. 따라서 b는 지역 변수이다.
- a의 경우 전역변수로 선언되어있다.
- b는 지역변수이기 때문에 "b" is not defined가 나온다.


```
var x = 'global';
function foo() {
    var x = 'local';
    console.log(x);
}
foo();
console.log(x); 
```
- 첫 예시이다. 두번째 x가 함수안에 선언되있음을 보아야한다. 따라서 첫번째 x와 두번째 x의 스코프가 다름을 알수있다.


```
var x = 'global';

function foo(){
    var x = 'local';
    console.log(x);             

    function bar() {
        console.log(x);         
    }

    bar();                      //2
}
foo();                          //1
console.log(x);                 //3
```
- 처음 문장이 실행되게 되면 foo()안에 잇는 console.log(x)가 실행된다. 이는 함수레벨 스코프를 생각한다면 x의 값은 local이다.
- bar()함수를 실행했을 경우 가장 가까운 x를 찾아서 출력하게 된다 따라서 x의 값은 local이다.
- local의경우는 함수레벨에 따라서 지역변수로 선언되있는걸 읽지 못한다. 따라서 global이 출력된다.

```
var x = 10;
function foo(){
    x = 100;
    console.log(x);
}

foo();
console.log(x);
```
- 함수 영역에서 전역변수를 참조할 수 있으며 전역변수의 값을 변경할 수 도 있다. 내부 함수의 경우, 전역변수는 물론 상위 함수에서 선언한 변수에 접근/변경이 간으하다.

```
var x = 10;

function foo(){
    var x = 100;
    console.log(x);
    function bar() {
        x =1000;
        console.log(x); 
    }
    bar();              //2
}
foo();                  //1
console.log(x);         //3
```
- foo()함수가 실행됨에 따라서 x의 값을 출력하게 된다. 함수내부의 x값인 100을 출력한다.
- bar()함수를 실행했을때 foo()함수 내부의 x값이 1000으로 변경된다. 이후 출력되어 foo()함수 내부의 x값인 1000이 출력된다.
- 전역변수 x의 값 10이 출력된다.



# 렉시컬 스코프
렉시컬 스코프란 <b>함수를 어디서 호출하는지가 아니라 어디에 선언하였는지에 따라 결정된다.</b> 자바스크립트는 렉시컬 스코프를 따르므로 함수를 선언한 시점에 상위 스코프가 결정된다. 함수를 어디에서 호출 하였는지는 스코프 결정에 아무런 의미를 주지 않는다.
```
var x = 1;

function foo(){
    var x = 10;
    bar();
}

function bar(){
    console.log(x);

}

foo(); //1
bar(); //2
```
- foo()에서 bar()를 호출하게 된다 다만 bar()의 선언위치는 전역스코프에 있다. 따라서 출력되는 x의 값은 1이다.
- foo()를 호출했을 때와 같다. 따라서 출력값은 1이다.



# 암묵적 전역
자바스크립트 엔진의 경우 스코프 체인을 통해 선언된 변수인지 확인한뒤, 지역, 전역 스코프 어디에도 해당 변수가 없을시에 프로퍼티로 인식하여 동적으로 생성한뒤 참조하게 된다. 따라서 선언되지 않은 변수일지라도 전역변수처럼 동작하게 된다. 이런 현상을 `암묵적 전역`이라 한다.
```
var x = 10;

function foo(){
    y = 20;

    console.log(x+y);
}
foo();

```

# 최소한의 전역변수 사용
애플리케이션에서 전역변수 사용을 위해 다음과 같이 전역변수 객체 하나를 만들어 사용하는 것이다.(더글라스 크락포드의 제안)
```
var MYAPP = {};

MYAPP.student = {
    name: 'Lee',
    gender: 'male'
};

console.log(MYAPP.student.name);
```

# 즉시실행함수를 이용한 전역변수 사용 억제
위와 같은 방법이라 할 수 있다. 전역변수를 만들지 않으므로 라이브러리 등에 자주 사용된다. 즉시 실행 함수는 즉시 실행되고 그 후 전역에서 바로 사라진다.
```
(function () {
    var MYAPP = {};

    MYAPP.student = {
        name: 'Lee',
        gender: 'male'
    };

    console.log(MYAPP.student.name);
}());

console.log(MYAPP.student.name);
```