# 클로저
클로저는 자바스크립트 고유의 개념이 아니라 함수를 일급객체로 취급하는 함수형 프로그래밍 언어에서 사용되는 중요한 특성이다.

클로저에 대한 MDN은 아래와 같이 정의하고 있다.
> 클로저는 함수와 그 함수가 선언됐을 때의 렉시컬 환경과의 조합이다.

```
function outerFunc(){
    var x = 10;
    var innerFunc = function(){
        console.log(x);
    }
    innerFunc();
}
outerFunc();
```
- innerFunc 함수 스코프 내에서 변수 x를 검색한다.
- innerFunc 함수를 포함하는 외부 함수 outerFunc의 스코프에서 변수 x를 검색한다. 검색에 성공한다.

```
function outerFunc(){
    var x = 10;
    var innerfunc = function() { console.log(x);}
    return innerFunc;
}
var inner = outerFunc();
inner();
```
- 실행 컨텍스트 스택에서 제거된 함수 outerFunc의 지역변수 x가 다시 살아난듯 동작한다.

> 이처럼 자신을 포함하고 잇는 외부함수보다 내부함수가 더 오래 유지되는 경우, 외부 함수 밖에서 내부함수가 호출되더라도 외부함수의 지역 변수에 접근할 수 있는데 이러한 함수를 <b>클로저</b> 라고 한다.

`함수`란 반환된 내부함수를 의미하고 그 함수가 선언될 때의 렉시컬 환경이란 내부함수가 선언됐을 때의 스코프를 의미한다.


> 즉, 클로저는 반환된 내부함수가 자신이 선언됐을 때의 환경인 스코프를 기억하여 자신이 선언됐을 때의 환경밖에서 호출되어도 그 환경에 접근할 수 있는 함수를 말한다. <b>클로저는 자신이 생성될 때의 환경을 기억하는 함수</b>이다.

![image](https://user-images.githubusercontent.com/62691610/156944679-c944d0f1-80cc-4770-80d2-4331d2f56375.png)

- 활성 객체가 함수가 끝난 이후에도 내부함수의 스코프체인에 따라서 존재하는 경우를 의미. 이럴 때 아직 존재하는 변수에 대해 자유변수라 칭함.

# 클로저의 활용
클로저는 자신이 생성될 때의 환경을 기억해야 하므로 메모리 차원에서 손해를 볼 수 있다. 하지만 클로저는 자바스크립트의 강력한 기능으로 이를 적극적으로 사용해야 한다.

## 상태 유지
클로저가 가장 유용하게 사용되는 상황은 현재 상태를 기억하고 변경된 최신 상태를 유지하는 것이다.

```
<!DOCTYPE html>
<html>
<body>
  <button class="toggle">toggle</button>
  <div class="box" style="width: 100px; height: 100px; background: red;"></div>

  <script>
    var box = document.querySelector('.box');
    var toggleBtn = document.querySelector('.toggle');

    var toggle = (function () {
      var isShow = false;

      return function () {
        box.style.display = isShow ? 'block' : 'none';
        isShow = !isShow;
      };
    })();

    // ② 이벤트 프로퍼티에 클로저를 할당
    toggleBtn.onclick = toggle;
  </script>
</body>
</html>
```
- 즉시실행함수는 함수를 반환하고 즉시 소멸한다. 즉시실행함수가 반환한 함수는 자신이 생성됐을 때의 렉시컬 환경에 속한 변수 isShow를 기억하는 클로저이다.
- 클로저를 이벤트 핸들러로서 이벤트 프로퍼티에 할당했다. 이벤트 프로퍼티에서 이벤트 핸들러인 클로저를 제거하지 않는 한 클로저가 기억하는 렉시컬 환경의 변수 isShow는 소멸하지 않는다.
- 버튼을 클릭하면 이벤트 프로퍼티에 할당한 이벤트 핸들러인 클로저가 호출된다. 이때 .box 요소의 표시 상태를 나타내는 변수 isShow의 값이 변경된다. 

이처럼 클로저는 현재 상태를 기억하고 이 상태가 변경되어도 최신 상태를 유지해야 하는 상황에 매우 유용하다. 만약 자바스크립트에 클로저라는 기능이 없다면 상태를 유지하기 위해 전역 변수를 사용할 수 밖에 없다. 전역 변수는 언제든지 누구나 접근할 수 잇고 변경할 수 있기 때문에 많은 부작용을 유발해 오류의 원인이 되므로 사용을 억제해야 한다.

## 전역 변수의 사용 억제
```
    var counter = 0;

    function increase() {
        return ++counter;
    }

    increaseBtn.onclick = function () {
        count.innerHTML = increase();
    };
```
- 해당 구문의 경우 언제든 counter변수에 접근할 수 있다. 따라서 오류를 유발할 수 있는 코드가 되기 때문에 권장하지 않는다.

```
    function increase() {
        var counter = 0;
        return ++counter;
    }

    increaseBtn.onclick = function () {
        count.innerHTML = increase();
    };
```
- 지역변수로 변경하였지만 이는 increase함수가 호출될때마다 지역변수를 0으로 초기화하기때문에 <b>변경된 이전 상태를 기억하지 못한다.</b>

```
var increase = (function() {
    var counter = 0;
    return function () {
        return ++counter;
    };
}());

increaseBtn.onClick = function () {
    count.innerHTML = increase();
}
```
- 즉시 실행함수를 사용해서 만든 increase의 경우 내부에 있는 익명함수가 즉시실행함수를 통해서 클로저가 된다. 따라서 counter의 상태를 유지시킬수있고 따라서 counter의 값을 전역변수를 사용하지 않고 유지시킬 수 있다.

> 변수의 값은 누군가에 의해 언제든지 변경될 수 있어 오류 발생의 근본적 원인이 될 수 있다. 상태 변경이나 가변 데이터를 피하고 불변성을 지향하는 함수형 프로그래밍에서 부수효과를 최대한 억제하여 오류를 피하고 프로그램의 안정성을 높이기 위해 클로저는 적극적으로 사용된다.


```
function makeCounter(predicate){
    var counter = 0;

    return function () {
        counter = predicate(counter);
        return counter;
    };
}

function increacse(n){
    return ++n;
}

function decreacse(n){
    return --n;
}

const increaser = makeCounter(increase);
console.log(increaser());
console.log(increaser());

const decreaser = makeCounter(decrease);
console.log(decreaser());
console.log(decreaser());

```
- 해당 코드를 볼시에 makeCounter의 내부에선 return을 통해 익명함수를 클로저함수로 만들었다.
- makeCounter라는 함수를 할당받은 increaser의 경우 내부에 counter로 0을 가지게 된다. 따라서 두번의 실행에서 2로 변화한다.
- makeCounter라는 함수를 할당받은 decreaser의 경우 내부에 counter로 0을 가지게 된다. 따라서 두번의 실행에서 -2로 변화한다.


## 정보의 은닉
```
function Counter(){
    var counter = 0;

    this.increase = function() {
        return ++ counter;
    }

    this.decrease = function() {
        return --counter;
    }

}

const show = new Counter();

console.log(show.increase());
console.log(show.decrease());
```
- 두가지 메소드의 경우에도 자신이 생성될 당시의 counter값을 가지게 된다. 따라서 Counter를 할당받은 show의 경우 내부적으로 counter라는 변수값을 가진 increase, decrease 메소드는 클로저가 된다. 

## 자주 발생하는 실수
```
var arr = [];
for(var i =0; i< 5; i++){
    arr[i] = function () {
        return i;
    };
}

for(var j = 0; j < arr.length; j++){
    console.log(arr[j]());
}
```
- 해당 결과는 모두 5를 출력하게 된다. i가 전역 변수이기 때문이다.

```
var arr = [];

for(var i =0; i <5; i++){
    arr[i]  = (function (id){
        return function () {
            return id;
        };
    }(i));
}

for(var j = 0 ;j<arr.length; j++){
    console.log(arr[j]());
}
```

