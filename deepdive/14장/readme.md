# 프로토타입

# 프로토타입 객체
자바스크립트의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되어 있다. 그리고 이것은 마치 객체 지향의 상속 개념과 같이 부모 객체의 프로퍼티 또는 메소드를 상속받아 사용할 수 있게 한다. 이러한 부모 객체를 Prototype 객체라 한다.

```
var student = {
    name : 'Lee',
    score: 90
}

console.log(student.hasOwnProperty('name'));    // 1
console.dir(student);
```
- hasOwnProperty는 student객체의 메소드가 아니지만 동작하는 모습을 볼 수 있다.

ECMAScript spec에서는 
> 자바스크립트의 모든 객체는 [[Prototype]]이라는 인터널 슬롯을 가진다. [[Prototype]]의 값은 null 또는 객체이며 상속을 구현하는데 사용된다. [[Prototype]]객체의 데이터 프로퍼티는 get 액세스를 위해 상속되어 자식 객체의 프로퍼티처럼 사용할 수 있다. 하지만 set액세스는 허용되지 않는다.
```
라고 되어있다.
var student ={
    name: 'Lee',
    score: 90
}
console.log(student.__proto__ === Object.prototype); //true
```
<b>객체를 생성할 때 프로토타입은 결정된다. 결정된 프로토타입 객체는 다른 임의의 객체로 변경할 수 있다. 이것은 부모 객체인 프로토타입을 동적으로 변경할 수 있다는 것을 의미한다. 이러한 특징을 활용하여 객체의 상속을 구현할 수 있다.</b>

# [[Prototype]] vs prototype 프로펕
모든 객체는 자신의 프로토타입 객체를 가르키는 [[prototype]]인터널 슬롯을 갖으며 상속을 위해 사용된다.
함수도 객체이므로 [[Prototype]] 인터널 슬롯을 갖는다. 그런데 함수 객체는 일반 객체와는 달리 prototype 프로퍼티도 소유하게 된다.
> 주의해야 할 것은 prototype 프로퍼티는 프로토타입 객체를 가르키는 [[Prototype]] 인터널 슬롯은 다르다는 것이다. prototype 프로퍼티와 [[Prototype]]은 모두 프로토타입 객체를 가리키지만 관점의 차이가 있다.

```
function Person(name){
    this.name = name;
}

var foo = new Person('Lee');

console.dir(Person);    //prototype 프로퍼티가 있다.
console.dir(foo);       //prototype 프로퍼티가 없다.

```

## [[Prototype]]
- 함수를 포함한 모든 객체가 가지고 있는 인터널 슬롯이다.
- 객체의 입장에서 자신의 부모 역할을 하는 프로토타입 객체를 가리키며 함수 객체의 경우 `Function.prototype`을 가르킨다.
```
console.log(Person.__proto__ === Function.prototype)
```
## prototype 프로퍼티
- 함수 객체만 가지고 있는 프로퍼티이다.
- 함수 객체가 생성자로 사용될 때 이 함수를 통해 생성될 객체의 부모 역할을 하는 객체를 가르킨다.
```
console.log(Person.prototype === foo.__proto__);
```

# constructor 프로퍼티
프로토타입 객체는 constructor 프로퍼티를 갖는다. 이 constructor 프로퍼티는 객체의 입장에서 자신을 생성한 객체를 가리킨다.

```
function Person(name){
    this.name = name;
}

var foo = new Person('Lee');

console.log(Person.prototype);
console.log(foo);
console.log(Person.prototype.constructor === Person);   //true

console.log(foo.constructor === Person);        //true

console.log(Person.constructor === Function);   //true

```

# Prototype chain

자바스크립트는 특정 객체의 프로퍼티나 메소드에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티 또는 메소드가 없다면 [[Prototype]]이 가리키는 링크를 따라 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티나 메소드를 차례대로 검색한다. 이것을 프로토타입 체인이라 한다.
```
var student = {
    name: 'Lee',
    score: 90
}
console.log(student.hasOwnProperty('name')) //true

```

student 객체는 hasOwnProperty 메소드를 가지고 있지 않지만 부모의 메소드 즉, Object의 메소드를 호출하기 때문에 사용이 가능하다.
>  `console.log(student.__proto__)` student객체의 프로토타입을 확인할 수 있다.


## 객체 리터럴 방식으로 생성된 객체의 프로토타입 체인
객체 생성 방법은 3가지가 있다.
- 객체 리터럴
- 생성자 함수
- Object() 생성자 함수

객체 리터럴 방식으로 생성된 객체는 결국 Object() 생성자 함수로 객체를 생성하는 것을 단순화(short-hand)시킨 것이다. 자바스크립트 엔진은 객체 리터럴로 객체를 생성하는 코드를 만나면 내부적으로 Object()생성자 함수를 사용하여 객체를 생성한다.
Object() 생성자 함수는 물론 함수이다. 따라서 함수 객체인 Object() 생성자 함수는 일반 객체와 달리 prototype 프로퍼티가 잇다.

- prototype 프로퍼티는 함수 객체가 생성자로 사용될 대 이 함수를 통해 생성된 객체의 부모 역할을 하는 객체, 즉 프로토타입 객체를 가리킨다.
- [[prototpye]]은 객체의 입장에서 자신의 부모 역할을 하는 객체, 즉 프로토타입 객체를 가리킨다.


## 생성자 함수로 생성된 객체의 프로토타입 체인
> 즉, 3가지 함수 정의 방식은 결국 Function() 생성자 함수를 통해 함수 객체를 생성한다. 따라서 어떠한 방식으로 함수 객체를 생성하여도 모든 함수 객체의  prototype 객체는 Function.prototype이다. 생성자 함수도 함수 객체이므로 생성자 함수의 prototype 객체는 Function.prototype이다.

```
function Person(name, gender){
    this.name = name;
    this.gender = gender;
    this.sayHello = function(){
        console.log('Hi! my name is '+this.name);
    };
}

var foo = new Person('Lee','male');

console.dir(Person);
console.dir(foo);

console.log(foo.__proto__ === Person.prototype);
console.log(Person.prototype.__proto__ === Object.prototype);
console.log(Person.prototype.constructor === Person);
console.log(Person.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
```

foo 객체의 프로토타입 객체 Person.prototype 객체와 Person() 생성자 함수의 프로토타입 객체인 Function.prototype의 프로토타입 객체는 Object.prototype 객체이다.

이는 객체 리터럴 방식이나 생성자 함수 방식이나 결국은 `모든 객체의 부모 객체인 Object.prototype`객체에서 프로토타입 체인이 끝나기 때문이다. 이때 Object.prototype 객체를 `프로토타입 체인의 종점` 이라 한다.

# 프로토타입 객체의 확장
프로토타입 객체도 객체이므로 일반 객체와 같이 프로퍼티를 추가/삭제할 수 있다. 그리고 이렇게 추가/삭제된 프로퍼티는 즉시 프로토타입 체인에 반영된다.

```
function Person(name){
    this.name = name;
}

var foo = new Person('Lee');

Person.prototype.sayHello = function(){
    console.log('Hi! my name is '+ this.name);
};  // 생성

foo.sayHello();

delete(Person.prototype.sayHello); // 삭제

foo.sayHello();
```


> 같은 프로토타입으로 묶여있는 객체의 경우 부모격인 프로토타입의 프로퍼티를 모두 사용할 수 있게 된다.

# 원시 타입의 확장
```
var str = 'test';
console.log(typeof str);
console.log(str.constructor === String);
console.dir(str);

var strObj = new String('test');
console.log(typeof strObj);
console.log(strObj.contructor === String);
console.dir(strObj);

console.log(str.toUpperCase());
console.log(strObj.toUpperCase());
```
원시타입 문자열과 String() 생성자 함수로 생성한 문자열 객체의 타입은 분명히 다르다. 원시 타입은 객체가 아니므로 프로퍼티나 메소드를 가질 수 없다. 하지만 <b>원시 타입으로 프로퍼티나 메소드를 호출할 때 원시 타입과 연관된 객체로 일시적으로 변환되어 프로토타입 객체를 공유하게 된다.</b>

> 원시타입 문자열을 만드는 방법은 prototype을 포함하여 생성자 함수를 통해 만드는 방법과 원시타입을 정의하는 방법으로 나눠진다. 전자의 경우 String.prototype의 메소드를 사용할 수 있게된다.

```
var str = 'test';

String.prototype.myMethod = function () {
    return 'myMethod';
}

console.log(str.myMethod());
console.log('string'.myMethod());
console.dir(STring.prototype);
```

> 내장객체의 Global objects인 String, Number, Array 객체 등이 가지고 있는 표준 메소드는 프로토타입객체인 String.prototype, Nuber.prototype, Array.prototype 등에 정의되어 있다. 이들은 또한 Object.prototype을 프로토타입 체인에 의해 자신의 프로토타입 객체로 연결한다(프로토타입의 종점까지 연결되어있다)

# 프로토타입 객체의 변경
```
function Person(name){
    this.name = name;
}

var foo = new Person('Lee');

Person.prototype = {gender : 'male'};

var bar = new Person('Kim');

console.log(foo.gender);        //undefined
console.log(bar.gender);        //'male'

console.log(foo.constructor);   // Person(name)
console.log(bar.constructor);   // Object()

```

# 프로토타입 체인 동작 조건
객체의 프로퍼티를 참조하는 경우, 해당 객체에 프로퍼티가 없는 경우, 프로토타입 체인이 동작한다.

```
function Person(name){
    this.name = name;
}

console.dir(Person.prototype);
Person.prototype.gender = 'male';
console.dir(Person.prototype);

var foo = new Person('Lee');
var bar = new Person('Kim');

console.log(foo.gender);
console.log(bar.gender);
foo.gender = 'female';

console.log(foo.gender);
console.log(bar.gender);
```