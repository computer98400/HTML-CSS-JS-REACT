# 실행 컨텍스트
실행 컨텍스트는 scope, hoisting, this, function, closure 등의 동작원리를 담고 있는 자바스크립트의 핵심 원리이다.
ECMAScript 스펙에 따르면 실행 컨텍스트를 실행 가능한 코드를 형상화하고 구분하는 추상적인 개념이라 정의한다.
> 실행 컨텍스트는 실행 가능한 코드가 실행되기 위해 필요한 환경이라고 말할 수 있겟다.

- 전역 코드 : 전역 영역에 존재하는 코드
- Eval 코드 : eval 함수로 실행되는 코드
- 함수 코드 : 함수 내에 존재하는 코드

자바스크립트 엔진은 코드를 실행하기 위하여 실행에 필요한 여러가지 정보를 알고 있어야한다. 실행에 필요한 여러가지 정보란 아래와 같은 것들이 있다.

- 변수 : 전역변수, 지역변수, 매개변수, 객체의 프로퍼티
- 함수 선언
- 변수의 유효범위
- this

```
var x = 'xxx';

function foo() {
    var y = 'yyy';

    function bar() {
        var z = 'zzz';
        console.log(x+y+z);
    }
    bar();
}
foo();
```

- 자바스크립트 엔진 내부의 콜 스택엔 global -> foo -> bar -> foo -> global 순으로 반환된다.



# 실행 컨텍스트의 3가지 객체
실행 컨텍스트는 실행 가능한 코드를 형상화하고 구분하는 추상적인 개념이지만 물리적으로는 객체의 형태를 가지며 아래의 3가지 프로퍼티를 소유한다.



## Variable Object(VO, 변수객체)
- 변수
- 매개변수와 인수 정보
- 함수 선언

Varialbe Object 는 실행 컨텍스트의 프로퍼티이기 때문에 값을 갖는데 이 값은 다른 객체를 가리킨다. 그런데 전역 코드 실행시 생성되는 전역 컨텍스트의 경우 함수를 실행할 때 생성되는 함수 컨텍스트의 경우, 가리키는 객체가 다르다. 이는 전역 코드와 함수의 내용이 다르기 때문이다.

> 전역 컨텍스트의 경우
Variable Object는 유일하며 최상위에 위치하고 모든 전역 변수, 전역 함수 등을 포함하는 전역객체를 가리킨다. 전역 객체는 전역에 선언된 전역 변수와 전역 함수를 프로퍼티로 소유한다.

![image](https://user-images.githubusercontent.com/62691610/156292297-8d3b959a-60af-4d02-869c-e1617e75d200.png)



> 함수 컨텍스트의 경우
Variable Object는 Activation Object를 가리키며 매개변수와 인수들의 정보를 배열의 형태로 담고 있는 객체인 arguments object가 추가된다.

![image](https://user-images.githubusercontent.com/62691610/156292336-61947317-70ea-4b48-8f2e-0a73259a9c57.png)



## Scope Chain(SC)
일종의 리스트로서 전역 객체와 중첩된 함수의 스코프의 레퍼런스를 차례로 저장하고 있다. 다시 말해, 스코프 체인은 해당 전역 또는 함수가 참조할 수 있는 변수, 함수 선언 등의 정보를 담고 있는 전역 객체(GO) 또는 활성 객체(AO)의 리스트를 가리킨다.

현재 실행 컨텍스트의 활성 객체(AO)를 선두로 하여 순차적으로 상위 컨텍스트의 활성 객체(AO)를 가리키며 마지막 리스트는 전역 객체(GO)를 가리킨다.

![image](https://user-images.githubusercontent.com/62691610/156292745-a03d11c4-3bbc-4da4-8da1-adb1c4c8c3ce.png)


> 스코프 체인은 식별자 중에서 객체의 프로퍼티가 아닌 식별자, 즉 변수를 검색하는 메커니즘이다. 식별자 중에서 변수가 아닌 객체의 프로퍼티를 검색하는 메커니즘은 프로토타입 체인이다.

엔진은 스코프 체인을 통해 렉시컬 스코프를 파악한다. 함수가 중첩 상태일 때 하위함수 내에서 상위함수의 스코프와 전역 스코프까지 참조 할 수 있는데 이것은 스코프 체인 검색을 통해 가능하다. 함수가 중첩되어 있으면 중첩될 때마다 부모 함수의 Scope가 자식 함수의 스코프 체인에 포함된다. 함수 실행중에 변수를 만나면 그 변수를 우선 현재 scope, 즉 Activation Object에서 검색해보고, 만약 검색에 실패하면 스코프 체인에 담겨진 순서대로 그 검색을 이어가게 되는 것이다. 이것이 스코프 체인이라고 불리는 이유이다.



## this value
this 프로퍼티에는 this 값이 할당된다. `this`에 할당되는 값은 함수 호출 패턴에 의해 결정된다.



# 실행 컨텍스트의 생성과정
실행 컨텍스트의 생성과정과 실행은 다르다.

```
var x = 'xxx';

function foo(){
    var y = 'yyy';

    function bar() {
        var z = 'zzz';
        console.log(x+y+z);
    }
    bar();
}
foo();
```



## 전역 코드 진입
컨트롤이 실행 컨텍스트에 진입하기 이전에 유일한 전역 객체가 생성된다. 전역 객체는 단일 사본으로 존재하며 이 객체의 프로퍼티는 코드의 어떠한 곳에서도 접근할 수 있다. 초기 상태의 전역 객체에는 빌트인 객체와 BOM, DOM이 설정되어있다.
> window.innerHeight, window.innerWidth등과같은 객체들을 의미


이후 전역 실행 컨텍스트가 생성되고 실행 컨텍스트 스택에 쌓이게 된다.

이후 과정은 이러하다.

> 스코프 체인의 생성과 초기화 Variable Instantiation 실행 - this value 결정



### 스코프 체인의 생성과 초기화
실행 컨텍스트가 생성된 이후 가장 먼저 스코프 체인의 생성과 초기화가 실행된다. 이때 스코프 체인은 전역 객체의 레퍼런스를 포함하는 리스트가 된다.


![image](https://user-images.githubusercontent.com/62691610/156358063-321360d2-70fc-4059-bbd7-944c6d67f8f8.png)

> 스코프는 함수를 호출할 때가 아니라 선언할 때 생긴다. 이를 정적 스코프라고도 부른다.

```
var name = 'zero';      //1
function log() {
  console.log(name);    //3
}

function wrapper() {
  name = 'nero';        //2
  log();
}
wrapper();
```
- 선언시에 name은 undefined로 선언된다. 스코프는 전역을 가르키며 name은 window에 속하게 된다.
- 함수 wrapper을 선언하게 되며 wrapper의 AO에선 name이라는 변수를 찾게된다. 스코프체인에 의해 wrapper에서 먼저 찾게되고 탐색 실패이후 전역으로 넘어가게 된다.
- 함수 log를 선언하게 될때 name의 값은 zero를 가르키게 된다.



### Variable Instantiation(변수 객체화) 실행
스코프 체인의 생성과 초기화가 종료하면 변수 객체화가 실행된다.
Variable Instantiation은 Variable Object에 프로퍼티와 값을 추가하는 것을 의미한다.
> 각자의 상위 객체에 프로퍼티를 추가하는 형식이다.

![image](https://user-images.githubusercontent.com/62691610/156357937-47ca989a-add0-4116-aca4-cb3ca742ed02.png)
- VO와 GO가 연결된다.

> 1. (Function Code인 경우)매개변수가 Variable Object의 프로퍼티로, 인수가 값으로 설정된다.
> 2. 대상 코드 내의 함수 선언을 대상으로 함수명이 Variable Object의 프로퍼티로, 생성된 함수 객체가 값으로 설정된다.(함수 호이스팅)
> 3. 대상 코드 내의 변수 선언을 대상으로 변수명이 Variable Object의 프로퍼티로, undefined가 값으로 설정된다.(변수 호이스팅)



#### 함수 foo의 선언 처리
선언된 함수명 foo가 Variable Object의 프로퍼티로 생성된 함수 객체가 값으로 설정된다.

![image](https://user-images.githubusercontent.com/62691610/156358297-1caf14d2-4248-4afa-b4d3-404868dc7a19.png)
- 생성된 함수 객체는 `[[Scope]]` 프로퍼티를 가지게 된다. `[[Scope]]` 프로퍼티는 함수 객체만이 소유하는 내부 프로퍼티로서 함수 객체가 실행되는 환경을 가리킨다.


>> [[Scope]]는 함수 객체의 경우에서 스코프체인을 가르키게 된다.

> 함수선언식의 경우, 변수 객체에 함수표현식과 동일하게 함수명을 프로퍼티로 함수 객체를 할당한다는 것이다. 단, 함수선언식은 변수 객체에 함수명을 프로퍼티로 추가하고 즉시 함수 객체를 즉시 할당하지만 함수 표현식은 일반 변수의 방식을 따른다. 따라서 함수선언식의 경우, 선언문 이전에 함수를 호출할 수 있다. 이를 `함수 호이스팅`이라 한다.



#### 변수 x의 선언처리
변수 선언은 Variable Instantiation로 실행 순서 3.과 같이 선언된 변수명이 Variable Object의 프로퍼티로, undefined가 값으로 설정된다.

> 선언 단계 : 변수 객체에 변수를 등록한다. 이 변수 객체는 스코프가 참조할 수 있는 대상이 된다.
> 초기화 단계 : 변수 객체에 등록된 변수를 메모리에 할당한다. 이 단계에서 변수는 undefined로 초기화된다.
> 할당 단계 : undefined로 초기화된 변수에 실제값을 할당한다.

var 키워드로 선언된 변수는 선언 단계와 초기화 단계가 한번에 이루어진다. 다시 말해 스코프 체인이 가리키는 변수 객체에 변수가 등록되고 변수는 undefined로 초기화 된다. 따라서 변수 선언문 이전에 변수에 접근하여도 Variable Object에 변수가 존재하기 때문에 에러가 발생하지 않는다. 이를 `변수 호이스팅`이라 한다.



### this value 결정
변수 선언 처리가 끝나면 다음은 this value가 결정된다. this value가 결정되기 이전에 this는 전역 객체를 가리키고 있다가 함수 호출 패턴에 의해 this에 할당되는 값을 결정된다. 전역코드의 경우 this는 전역객체를 가리킨다.



## 전역 코드의 실행
```
var x = 'xxx';

function foo(){
    var y = 'yyy';

    function bar() {
        var z = 'zzz';
        console.log(x+y+z);
    }
    bar();
}
foo();

```

### 변수 값의 할당
전역 변수 x에 문자열 'xxx'를 할당할 때, 현재 실행 컨텍스트의 스코프 체인이 참조하고 있는 variable Object를 선두부터 검색하여변수명에 해당하는 프로퍼티가 발견되면 값 xxx를 할당한다.


### 함수 foo의 실행
전역 코드의 함수 foo가 실행되기 시작하면 새로운 함수 실행 컨텍스트가 생성된다. 함수 foo의 실행 컨텍스트로 컨트롤이 이동하면 전역 코드의 경우와 마찬가지로
1. 스코프 체인의 생성과 초기화
2. Variable Instantiaion 실행
3. this value 결정
이 순차적으로 실행된다.


#### 스코프 체인의 생성과 초기화
Activation Object에 대한 레퍼런스를 스코프 체인의 선두에 설정하는 것으로 시작된다.

우선 argumnets 프로퍼티의 초기화를 실행하고 그 후, Variable Instantiation가 실행된다. Activation Object는 스펙 상의 개념으로 프로그램이 Activation Object에 직접 접근할 수 없다.

![image](https://user-images.githubusercontent.com/62691610/156465141-d1ffb51c-764f-471a-8888-cbe3a6df749e.png)

그후, Caller의 Scope Chain이 참조하고 잇는 객체가 스코프 체인에 push된다. 따라서 이 경우 함수 foo를 실행한 직후 실행 컨텍스트의 스코프 체인은 Activation Object와 전역 객체를 순차적으로 참조하게 된다.

![image](https://user-images.githubusercontent.com/62691610/156465165-3902ab08-6584-42e4-9d3c-5a7ffdb6d9b5.png)


#### Variable Instantiation 실행
Function Code의 경우, Activation Object를 Variable Object로서 Variable Instantiation가 실행된다.

![image](https://user-images.githubusercontent.com/62691610/156465509-28f64f45-57fc-4ae0-beca-09253df013de.png)

> 함수 객체를 먼저 바인딩하게 되고, 이후 변수를 바인딩하게 되는것.

변수 y를 Variable Object에 설정한다. 이때 프로퍼티는 y, 값은 undefined이다.

![image](https://user-images.githubusercontent.com/62691610/156465580-8c9bbfe5-186b-4340-8c22-4bb27f52c569.png)


#### this value 결정

함수 호출 패턴에 의해 결정된다.
내부 함수의 경우, this의 value는 전역 객체이다.

![image](https://user-images.githubusercontent.com/62691610/156465652-73f434a4-49c7-46f8-b8bf-d72a4f4b48cf.png)


## foo 함수 코드의 실행

### 변수 값의 할당
지역 변수 y에 문자열 'yyy'를 할당할 때, 현재 실행 컨텍스트의 스코프 체인이 참조하고 있는 Variable Object를 선두부터 검색하여 변수명에 해당하는 프로퍼티가 발견되면 값 'yyy'를 할당한다.

![image](https://user-images.githubusercontent.com/62691610/156465768-73e9389b-abf3-4593-a6c0-cdda9f1d059a.png)

### 함수 bar의 실행
같은 방식으로 
1. 스코프 체인의 생성과 초기화
2. Variable Instantiation 실행
3. this value 결정
이 순차적으로 실행된다.

![image](https://user-images.githubusercontent.com/62691610/156465833-5d1b02d7-0f35-44b3-87e6-9e6dc649be37.png)