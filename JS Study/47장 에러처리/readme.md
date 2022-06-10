# 에러 처리의 필요성

에러가 발생하지 않는 코드를 작성하는 것은 불가능하다. 발생한 에러에 대해 대처하지 않고 방치하면 프로그램은 강제 종료된다.

또한 직접적인 에러를 발생시키지 않는 예외적인 상황이 발생할 수도 있다. 예외적인 상황에 적절하게 대응하지 않으면 에러로 이어질 가능성이 크다.

```
const $button = document.querySelector('button');

$button.classList.add('disabled');



```
위 예제의 querySelector 메서드는 인수로 전달한 문자열이 CSS 선택자 문법에 맞지 않는 경우 에러를 발생시킨다.
하지만 querySelector 메서드는 인수로 전달한 CSS 선택자 문자열로 DOM에서 요소 노드를 찾을 수 없는 경우 에러를 발생하지 않고 `null`을 반환한다.

# try...catch ... finally 문
에러 처리 구현에 방법 2가지가 있다.
예외적인 상황이 발생하면 반환되는 값을 if문 혹은 단축 평가 또는 옵셔널 체이닝 연산자를 통해 확인해서 처리하는 방법
에러 처리 코드를 미리 등록해 두고 에러가 발생하면 에러 처리 코드로 점프하도록 하는 방법이 있다.

try..catch문은 두번째 방법이다.

실행시 try 코드 블록이 실행된다. try문의 실행시 발생하는 에러에 대해선 catch문의 err 변수에 전달되고 catch 코드 블록이 실행된다. catch문의 err 변수는 try 코드 블록에 포함된 문 중에서 에러가 발생하면 생성되고 catch 코드 블록에서만 유효하다. 이는 <b>프로그램이 강제 종료되지 않는다.</b>

```
console.log('[start]');

try{
    foo();
}catch (e){
    console.error(e);
}finally{
    console.log('finally');
}

console.log('[end]');
```

# Error 객체
Error 생성자 함수는 에러 객체를 생성한다. Error 생성자 함수에는 에러를 상세히 설명하는 에러 메세지를 인수로 전달할 수 있다.

```
const error = new Error('invalid');
```
Error 생성자 함수가 생성한 에러 객체는 message 프로퍼티와 stack 프로퍼티를 갖는다. message 프로퍼티의 값은 Error 생성자 함수에 인수로 전달한 에러 메세지이고,stack 프로퍼티의 값은 에러를 발생시킨 콜스택의 호출 정보를 나타내는 문자열이며 디버깅 목적으로 사용한다.

자바스크립트의 에러는 7가지의 에러 객체를 생성할 수 있는 Error 생성자 함수를 제공한다.
- Error 일반적 에러 객체
- SyntaxError 자바스크립트 문법에 맞지 않는 문을 해석할 때 발생하는 에러 객체
- ReferenceError 참조할 수 없는 식별자를 참조했을 때 발생하는 에러 객체
- TypeError 피연산자 또는 인수의 데이터 타입이 유효하지 않을 때 발생하는 에러 객체
- RangeError 숫자값의 허용 범위를 벗어났을 때 발생하는 에러 객체
- URIError encodeURI 또는 decodeURI 함수에 부적절한 인수를 전달했을 때 발생하는 에러 객체
- EvalError eval 함수에서 발생하는 에러 객체
```
1 @ 1;
foo();
null.foo;
new Array(-1);
decodeURIComponent('%');
```


# throw 문
Error 생성자 함수로 에러 객체를 생성한다고 에러가 발생하는 것은 아니다. 즉 에러 객체 생성과 에러 발생은 의미가 다르다.

try문 내에서 에러를 발생시키기 위해선 throw를 사용하여야한다.

```
const repeat = (n, f)=>{
    if(typeof f !== 'function' ) throw new TypeError('f must be a function');

for(var i =0; i< n; i++){
    f(i);
}

}

try{
    repeat(2,1);
}catch(err){
    console.error(err);
}

```
# 에러의 전파

에러의 경우 호출자 방향으로 전파된다. 즉, 콜 스택의 아래 방향으로 전파된다.

```
const foo = () =>{
    throw Error('에러가 발생했습니다.');
}

const bar = () =>{
    foo();
}

const baz = () =>{
    bar();
}

try{
    baz();
}catch(err){
    console.error(err);
}

```
각 함수가 끝나기 전에 에러가 발생했기 때문에 콜스택상의 순서를 볼 수 있다.

> 비동기 함수인 setTimeout이나 프로미스 후속 처리 메서드의 콜백 함수는 호출자가 없다. 따라서 에러를 전파할 호출자가 존재하지 않는다.


