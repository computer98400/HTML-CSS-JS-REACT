# strict mode란?

```
function foo(){
    x = 10;
}
console.log(x);
```
foo 함수 내에서 선언하지 않은 변수 x에 값 10을 할당하였다. 이때 변수 x를 찾아야 x에 값을 할당할 수 있기 때문에 자바스크립트 엔진은 변수 x가 어디에서 선언되었는지 스코프 체인을 통해 검색하기 시작한다.

foo 함수의 스코프에는 변수 x의 선언이 없으므로 검색에 실패할 것이고, 자바스크립트 엔진은 변수 x를 검색하기 위해 foo 함수 컨텍스트의 상위 스코프에서 변수 x의 선언을 검색한다.

전역 스코프에도 변수 x의 선언이 존재하지 않기 때문에 자바스크립트 엔진은 <b>암묵적으로 전역 객체에 프로퍼티 x를 동적으로 생성한다.</b>
결국 식별자 x는 전역 변수가 된다. 이렇게 전역 변수가 된 변수를 <b>암묵적 전역 변수</b>라 한다.

개발자의 의도와는 상관없이 자바스크립트 엔진이 생성한 암묵적 전역 변수는 오류를 발생시키는 원인이 되기 때문에 `var`,`let`,`const` 키워드를 사용하여 변수를 선언한 다음 변수를 사용해야 한다.

ES5부터 strict mode가 추가되었다. strict mode는 자바스크립트 언어의 문법을 보다 엄격히 적용하여 기존에는 무시되던 오류를 발생시킬 가능성이 높으나 자바스크립트 엔진의 최적화 작업에 문제를 일으킬 수 있는 코드에 대해 명시적인 에러를 발생시킨다.

ESLint와 같은 린트 도구를 사용하여도 strict mode와 유사한 효과를 얻을 수 있다.
> 린트 도구는 정적 분석기능을 통해 소스 코드를 실행하기 전에 소스 코드를 스캔하여 문법적 오류만이 아니라 잠재적 오류까지 찾아내고 오류의 이유를 리포팅해주는 유용한 도구이다. strict mode가 제한하는 오류는 물론 코딩 컨벤션을 설정 파일 형태로 정의하고 강제할 수 있기 때문에 보다 강력한 효과를 얻을 수 있다.

# strict mode의 적용
전역의 선두 또는 함수 몸체의 선두에 `'use strict'`를 추가한다.

```
'use strict';

function foo(){
    x = 10;
}
foo();
```
- 기존에 코드를 실행하게 된다면 x는 암묵적 전역변수로 선언된다. 하지만 strict mode를 사용할 경우 x의 값은 not defined가 뜨게 된다.

함수 몸체의 선두에 추가하면 해당 함수와 중첩된 내부 함수에 strict mode가 적용된다.
```
function foo() {
    x = 10; //에러가 발생하지않는다.
    'use strict';
}
foo();
```
- use strict는 이후 구문부터 적용이 되게 된다. 따라서 위의 예시의 경우 x는 에러를 발생하지 않는다.


# 전역에 strict mode를 적용하는 것은 피하자.
```
<html>
<body>
    <script>
    'use strict';
    </script>
    <script>
        x = 1;
        console.log(x);
    </script>
    <script>
        'use strict';

        y = 1;
        console.log(y);
    </script>
<body>
<html>
```
- 위의 예제의 경우 스크립트 단위로 적용된 strict mode는 다른 스크립트에 영향을 주지 않고 자신의 스크립트에 한정되어 적용된다.
- 하지만 strict mode 스크립트와 non-strict mode 스크립트를 혼용하는 것은 오류가 발생시킬 수 있다. 특히 외부 서드 파티 라이브러리를 사용하는 경우, 라이브러리가 non-strict mode일 경우도 있기 때문에 전역에 strict mode를 적용하는 것은 바람직하지 않다. 이러한 경우 즉시 실행 함수로 스크립트 전체를 감싸서 스코프를 구분하고 즉시 실행 함수의 선두에 strict mode를 적용한다.

```
(function () {
    'use strict';
}());
```

# 함수 단위로 strict mode를 적용하는 것도 피하자.
앞서 말한 바와 같이 함수 단위로 strict mode를 적용할 수 있다. 그러나 어떤 함수는 strict mode를 적용하고 어떤 함수는 strict mode를 적용하지 않는 것은 바람직하지 않으며 모든 함수에 일일이 strict mode를 적용하는 것은 번거로운 일이다. 그리고 strict mode가 적용된 함수가 참조할 함수 외부의 컨텍스트에 strict mode를 적용하지 않는다면 이 또한 문제가 발생할 수 있다.
```
(function () {
    var let = 10;
    function foo(){
        'use strict';
        let = 20;
    }
    foo();
}());
```

#strict mode가 발생시키는 에러

## 암묵적 전역 변수
```
(function () {
    'use strict';
    x=  1;
    console.log(x);
}());
```

## 변수, 함수, 매개변수의 삭제
```
(function () {
    'use strict';
    var x = 1;
    delete x;

    function foo(a){
        delete a;

    }
    delete foo;
}());
```

## 매개변수 이름의 중복
```
(function () {
    'use strict;
    function foo(x, x){
        return x + x;
    }
    console.log(foo(1,2));
}());
```

## with 문의 사용
```
(function () {
    'use strict';

    with({ x: 1}){
        console.log(x);
    }
}());
```

## 일반 함수의 this
strict mode에서 함수를 일반 함수로서 호출하면 this에 undefined가 바인딩된다. 생성자 함수가 아닌 일반 함수 내부에서는 this를 사용할 필요가 없기 때문이다.
```
(function () {
    'use strict';

    function foo(){
        console.log(this);
    }
    foo();

    function Foo(){
        console.log(this); //Foo
    }
    new Foo();
})
```