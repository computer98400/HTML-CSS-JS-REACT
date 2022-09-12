# 프로퍼티 어트리뷰트
## 내부 슬롯과 내부 메서드
프로퍼티 어트리뷰트를 이해하기에 앞서 내부 슬롯과 내부 메서드의 개념에 대해 먼저 알고 가야한다.

내부 슬롯과 내부 메서드는 ECMAScript 사양에서 사용하는 의사 프로퍼티와 의사 메서드다. ECMAScript 사양에 등장하는 이중 대괄호([[]])로 감싼 이름들이 내부 슬롯과 내부 메서드다.

>의사(pseudo)란? 프로그램이나 알고리즘이 수행해야할 내용을 우리가 사용하는 언어로 간략히 서술해 놓은 것을 말한다.

예를 들어 모든 객체는 [[prototype]]이라는 내부 슬롯을 갖는다. 내부 슬롯은 자바스크립트 엔진의 내부로직이므로 원칙적으로 직접 접근할 수 없지만
`[[prototype]]` 내부 슬롯의 경우, `__proto__`를 통해 간접적으로 접근할 수 있다.

```
const o  = {};

o.[[prototype]]

o.__proto__
```

## 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체
자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동정의한다.
프로퍼티의 상태란 프로퍼티의 값, 값의 갱신 가능 여부, 열거 가능 여부, 재정의 가능 여부를 말한다.

프로퍼티 어트리뷰트는 자바스크립트 엔진이 관리하는 내부 상태 값인 내부 슬롯[[value]], [[Writable]],[[Enumerable]],[[Configurable]]이다.
따라서 프로퍼티 어트리뷰트에 직접 접근할 수 없지만 Object.getOwnPropertyDescriptor  메서드를 사용하여 간접적으로 확인할 수 있다.

```
const person = {
  name: 'Lee'
};

console.log(Object.getOwnPropertyDescriptor(person,'name'));
console.log(Object.getOwnPropertyDescriptors(person));

```
첫번째 매개변수에 객체의 참조를 전달하고, 두번째 매개변수에는 프로퍼티 키를 문자열로 전달한다. 이때 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
만약 존재하지 않는 프로퍼티나 상속받은 프로퍼티에 대한 프로퍼티 디스크립터를 요구하면 undefined가 반환된다.


## 데이터 프로퍼티와 접근자 프로퍼티
프로퍼티는 데이터 프로퍼티와 접근자 프로퍼티로 구분할 수 있다.
데이터 프로퍼티 : 키와 값으로 구성된 일반적인 프로퍼티다. 지금까지 살펴본 모든 프로퍼티는 데이터 프로퍼티다.
접근자 프로퍼티 : 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수로 구성된 프로퍼티다.

### 데이터 프로퍼티
|프로퍼티 어트리뷰트|프로퍼티 디스크립터 객체의 프로퍼티|설명|
|-|-|-|
|`[[value]]`|`value`|프로퍼티 키를 통해 프로퍼티 값에 접근하면 반환되는 값이다. 이때 프로퍼티가 없으면 프로퍼티를 동적 생성하고 생성된 프로퍼티의 [[value]]에 값을 저장한다.|
|`[[Writable]]`|`writable`|프로퍼티 값의 변경 가능 여부를 나타내며 불리언 값을 갖는다.|
|`[[Enumerable]]`|`enumerable`|프로퍼티의 열거 가능 여부를 나타내며 불리언 값을 갖는다.|
|`[[Configurable]]`|`configurable`|프로퍼티의 재정의 가능 여부를 나타내며 불리언 값을 갖는다.|

### 접근자 프로퍼티
접근자 프로퍼티는 자체적으로 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수로 구성된 프로퍼티다.
|프로퍼티 어트리뷰트|프로퍼티 디스크립터 객체의 프로퍼티|설명|
|-|-|-|
|`[[Get]]`|`get`|접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 읽을 때 호출되는 접근자 함수다. 즉, 접근자 프로퍼티 키로 프로퍼티 값에 접근하면 어트리뷰트 [[get]]의 값, 즉 getter 함수가 호출되고 그 결과가 프로퍼티 값으로 반환된다.|
|`[[Set]]`|`set`|접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 저장할 때 호출되는 접근자 함수다. 즉, 접근자 프로퍼티 키로 프로퍼티 값을 저장하면 프로퍼티 어트리뷰트 [[Set]]의 값, 즉 setter 함수가 호출되고 그 결과가 프로퍼티 값으로 저장된다. |
|`[[Enumerable]]`|`enumerable`|데이터 프로퍼티의 [[Enumerable]]과 같다.|
|`[[Configurable]]`|`configurable`|데이터 프로퍼티의 [[Configurable]]과 같다.|

```
const person = {
  firstName : 'Ungmo',
  lastName : 'Lee',
  
  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name){
    [this.firstName, this.lastName] = name.split(' ');
  }
}

person.fullName v= 'Heegun Lee';
console.log(person);

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName'));
console.log(descriptor);

descriptor = Object.getOwnPropertyDescriptor(person,'fullName');

console.log(descriptor);
```

