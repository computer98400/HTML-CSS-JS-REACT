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

위의 코드에서 접근자 프로퍼티 fullName으로 접근시 내부적으로 메서드가 호출되는 동작은 다음과 같다.
1. 프로퍼티키가 유효한지 확인한다.
2. 프로토타입 체인에서 프로퍼티를 검색한다.
3. 검색된 fullName 프로퍼티가 데이터 프로퍼티인지 접근자 프로퍼티인지 확인한다.
4. 접근자 프로퍼티 fullName의 프로퍼티 어트리뷰트 [[Get]]의 값, 즉 getter 함수를 호출하여 그 결과를 반환한다.

## 프로퍼티 정의
새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명식적으로 정의하거나, 기존 프로퍼티의 프로퍼티 어트리뷰트를 재정의하는 것을 말한다. 
```
const person = {};
Object.defineProperty(person, 'firstName',{
  value : 'Ungmo',
  writable : true,
  enumerable: true,
  configurable: true
});
```
프로퍼티는 defineProperty를 통해 정의할 수 있다. 이는 해당 프로퍼티의 어트리뷰트값을 임의적으로 정의할 수 있다. 이때 각 어트리튜브값은 생략될 수 있으며 기본값으로 undefined 혹은 false 값이 추가되게 된다.

|프로퍼티 디스크립터 객체의 프로퍼티|대응하는 프로퍼티 어트리뷰트|생략했을 때의 기본값|
|-|-|-|
|value|[[Value]]|undefined|
|get|[[Get]]|undefined|
|set|[[Set]]|undefined|
|writable|[[Writable]]|false|
|enumerable|[[Enumerable]]|false|
|configurable|[[Configurable]]|false|

## 객체 변경 방지
객체는 변경 가능한 값이므로 재할당 없이 직접 변경할 수 있다. 즉, 프로퍼티를 추가하거나 삭제할 수 있고, 프로퍼티 값을 갱신할 수 있으며, Object.defineProperty또는 Object.defineProperties 메서드를 사용하여 프로퍼티 어트리뷰트를 재정의할 수도 있다.

객체의 변경 방지를 위해 자바스크립트는 다양한 메서드를 제공한다. 해당 메서드들은 객체의 변경을 금지하는 강도에 따라 다르다.
|구분|메서드|추가|삭제|값 읽기|값 쓰기|어트리뷰트 재정의|
|-|-|-|-|-|-|-|
|객체 확장 금지|Object.preventExtensions|X|O|O|O|O|
|객체 밀봉|Object.seal|X|X|O|O|X|
|객체 동결|Object.freeze|X|X|O|X|X|

### 객체 확장 금지
객체의 확장 금지란 프로퍼티 추가 금지를 의미한다. 해당 객체가 확장 간으한 객체인지 여부는 Object.isExtensible 메서드로 확인할 수 있다.
```
//객체 확장 금지 여부 확인.
Object.isExtensible(객체);

//객체 확장 금지 적용
Object.preventExtensions(객체);

```

### 객체 밀봉
객체 밀봉이란 프로퍼티 추가 및 삭제와 프로퍼티 어트리뷰트 재정의를 금지한다. 즉 읽기 쓰기만 가능하다.
```
//객체 밀봉 여부 확인 메서드
Object.isSealed(객체);

//객체 밀봉 적용
Object.seal(객체);

```

### 객체 동결
프로퍼티 추가 및 삭제와 프로퍼티 어트리뷰트 재정의 금지, 프로퍼티 값 갱신 금지를 의미한다. 즉, 동결된 객체는 읽기만 가능하다.
```
//객체 동결 여부 확인 메서드
Object.isFrozen(객체);

//객체 동결 적용
Object.freeze(객체);
```

### 불변 객체
지금까지의 변경방지 메서드는 직속 프로퍼티만 변경이 방지되고 중첩 객체까지는 영향을 주지는 못한다. 따라서 중첩 객체까지의 변경을 불가능하게 만들려면 재귀적으로 모든 프로퍼티에 Object.freeze 메서드를 호출해야한다.
```
function deepFreeze(target){
  if(target && typeof target == 'object' && !Object.isFrozen(target)){
    Object.freeze(target);
    Object.keys(target).foreach(key => deepFreeze(target[key]));
  }
}
```
