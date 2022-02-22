# 객체

자바 스크립트는 원시 타입을 제외한 나머지 값들 모두가 객체이다.

자바스크립트의 객체는 키(key)와 값(value)으로 구성된 프로퍼티(Property)들의 집합이다. 프로퍼티의 값으로 자바스크립트에서 사용할 수 있는 모든 값을 사용할 수 있다. `자바스크립트는 일급 객체이므로 값으로 취급할 수 있다. 따라서 프로퍼티 값으로 함수를 사용할 수도 있으며` 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기위해 메소드라 부른다.

- 여기서 일급 객체란.
다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체를 가르킴. 
함수에 인자로 넘기기, 수정하기, 변수에 대입하기와 같은 연산을 지원한다는 의미

- 메소드란 프로퍼티 값이 함수로 이뤄진 경우를 의미한다.

## 프로퍼티
프로퍼티 키와 프로퍼티 값으로 구성되며 프로퍼티 키는 프로퍼티를 식별하기 위한 식별자이다.
프로퍼티 키의 경우 빈 문자열을 포함하는 모든 문자열 또는 symbol 값이다.

<b>프로퍼티 키에 문자열이나 symbol 값 이외의 값을 지정하면 암묵적으로 타입이 변환되어 문자열이 된다.</b> 중복 선언시 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮어쓰며, 열거시에 순서를 보장하지 않는다.


# 객체 생성 방법
자바스크립트는 프로토타입 기반 객체 지향 언어로서 클래스라는 개념이 없고 별도의 객체 생성 방법이 존재한다.

> 프로토타입 기반 프로그래밍은 클래스가 존재하지 않는 객체지향 프로그래밍 스타일이다. 클래스없이 프로토타입 체인과 클로저 등으로 객체 지향 언어의 상송, 캡슐화 등의 개념을 구현한다. ES6의 클래스가 새로운 객체지향 모델을 제공하는 것이 아니며 클래스도 사실 함수이고 기존 프로토타입 기반 패턴의 <b>문법적 설탕</b> 이다

## 객체 리터럴
중괄호를 사용하여 객체를 생성하는데 {} 내에 1개 이상의 프로퍼티를 기술하면 해당 프로퍼티가 추가된 객체를 생성할 수 있다.
```
var empty = {};
console.log(typeof emptyObject); //Ojbect

var person = {
    name: 'Lee',
    gender: 'male',

    //메소드(프로퍼티값이 함수임)
    sayHello: function() {
        console.log('Hi! My name is ' + this.name);
    }
};
console.log(typeof person);
console.log(person);

person.sayHello(); //Hi! My name is Lee
```

## Object 생성자 함수
new 연산자와 Object 생성자 함수를 호출하여 빈 객체를 생성할 수 있다.
이후 프로퍼티 또는 메소드를 추가하여 객체를 완성하는 방법이다.

생성자 함수란 <b>new 키워드와 함께 객체를 생성하고 초기화하는 함수</b>를 말한다. 생성자 함수를 통해 생성된 객체를 인스턴스라 한다.
> Object 생성자 함수 이외에도 String, Number, Boolean, Array, Date, RegExp 등의 빌트인 생성자 함수를 제공한다.

객체 리터럴 방식으로 생성된 객체는 결국 빌트인 함수인 Object 생성자 함수로 객체를 생성하는 것을 단순화시킨 축약 표현이다.

## 생성자 함수
객체를 생성하기 위한 템플릿처럼 사용하여 프로퍼티가 동일한 객체 여러 개를 간편하게 생성할 수 있다.


생성자 함수 이름은 일반적으로 대문자로 시작한다. 이것은 생성자 함수임을 인식하도록 도움을 준다.
프로퍼티 또는 메소드명 앞에 기술한 `this`는 생성자 함수가 생성할 인스턴스를 가리킨다.
this에 연결되어 있는 프로퍼티와 메소드는 `public`하다.
생성자 함수 내에서 선언된 일반 변수는 `private`하다. 


```
function Person(name, gender){
    //private
    var married = true;
    //public
    this.name = name;
    this.gender = gender;
    this.sayHello = function(){
        console.log('Hi! My name is ' + this.name);
    };
}

var person1 = new Person('Lee','male');
var person2 = new Person('Kim','female');
```

> 생성자 함수가 아닌 일반 함수에 new 연산자를 붙여 호출하면 생성자 함수처럼 동작하게 된다. 따라서 일반적으로 생성자 함수명은 첫문자를 대문자로 기술하여 혼란을 방지하려는 노력을 한다.

# 객체 프로퍼티 접근

## 프로퍼티 키
프로퍼티 키는 일반적으로 문자열을 지정한다. 문자열 symbol이외의 값을 지정하면 암묵적 타입 변환이 일어난다. 
```
var person = {
    //문법 오류( 표현식으로 작성됨)
    first-name: 'Ung-mo', // SyntaxError
    //유효한 이름
    first_name: 'Ung-mo', // 'Ung-mo'
    //first의 name을 찾게된다.
    [first-name]: 'Ung-mo' // ReferenceError

    //예약어를 프로퍼티 키로 사용하면 안된다.
}
```


## 프로퍼티 값 읽기
객체의 프로퍼티 값에 접근하는 방법으로 마침표 표기법과 대괄호 표기법이 있다.

```
var person = {
    'first-name': 'Ung-mo',
    'last-name':'Lee',
    gender: 'male',
    1: 10
}


console.log(person.first-name);//NaN
console.log(person[first-name]);//ReferenceError
console.log(person['first-name'])//'Ung-mo'


console.log(person.gender);     //male
console.log(person[gender]);    //ReferenceError
console.log(person.['gender']); // male

console.log(person['1']); //10
console.log(person[1]); //10 : 암묵적 타입 변환
console.log(person.1); //SyntaxError


```

## 프로퍼티 값 갱신, 프로퍼티 동적 생성, 프로퍼티 삭제
1. 프로퍼티 값 갱신 : 객체가 소유하고 잇는 프로퍼티에 새로운 값을 할당하면 프로퍼티 값은 갱신된다.

2. 프로퍼티 동적 생성 : 소유하고 있지 않은 프로퍼티 키에 값을 할당하면 주어진 키와 값으로 프로퍼티를 생성하여 객체에 추가한다.

3. 프로퍼티 삭제 : `delete` 연산자를 사용하면 객체의 프로퍼티를 삭제할수있으며, 이때 피연산자는 프로퍼티 키이여야 한다.


```
var person = {
    'first-name': 'Ung-mo',
    'last-name':'Lee',
    gender: 'male',
    1: 10
}

person['first-name'] = 'Kim';
console.log(person['first-name']) // 'Kim'
person.createdynamic = 'it's work';
console.log(person[createdynamic]) //'it's work';
delete person.gender;
console.log(person);    //Object {first-name: 'Ung-mo',last-name: 'Lee', createdynamic: 'it's work'}
```

## for-in 문
객체에 포함된 모든 프로퍼티에 대한 루프를 수행할 수 있다.
```
var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male'
};

for(var prop in person){
    console.log(prop+': '+ person[prop]);
}

var array = ['one', 'two'];

for(var index in array){
    console.log(index + ': '+ array[index]);
}
```
배열엔 for-in문을 사용하지 않는 것이 좋다. 
1. 객체의 경우, 프로퍼티의 순서가 보장되지 않는다. 배열은 순서를 보장하는 데이터 구조이지만 객체와 마찬가지로 순서를 보장하지 않는다.
2. 배열 요소들만을 순회하지 않는다.


> 이를 극복하기 위해 ES6에선 for-of문이 추가되었다.

# Pass-by-reference
object type을 객체 타입 또는 참조 타입이라 한다. 참조 타입이란 객체의 모든 연산이 실제값이 아닌 참조값으로 처리됨을 의미한다. 원시 타입은 값이 한번 정해지면 변경할 수 없지만(immutable), 객체는 프로퍼티를 변경, 추가, 삭제가 가능하므로 변경 가능(mutable)한 값이라 할 수 있다.

따라서 객체 타입은 동적으로 변화할 수 있으므로 어느 정도의 메모리 공간을 확보해야 하는지 예측할 수 없기 때문에 런타임에 메모리 공간을 확보하고 메모리의 힙 영역에 저장된다.

이에 반해 원시 타입은 값으로 전달된다. 즉, 복사되어 전달된다. 이를 pass-by-value라 한다.


```
var foo = {
    val: 10
}


var bar = foo;

console.log(foo.val, bar.val);
console.log(foo === bar);

bar.val = 20;
console.log(foo.val, bar.val);
console.log(foo === bar);
```
foo 객체를 객체 리터럴 방식으로 생성하였고, 이때 foo는 객체자체가 저장된 것이 아니라 생성된 객체의 참조값을 저장하고 있다.
따라서 bar의 경우 bar = foo를 할시에 같은 참조값이 저장된다.
- 따라서 bar의 값을 변경하든 foo를 변경하든 같은 값을 참조하기때문에 같은 변화가 이뤄지게 된다.
> 이는 복사가 되지 않는다고 봐야한다.

```
var foo = { val: 10};

var bar = { val: 10};

console.log(foo.val, bar.val); // 10  10 
console.log(foo === bar); // false


var a = {}, b = {}, c = {}
console.log(a ===b, b ===c , c === a) // false false false

a =b=c= {}
console.log(a ===b, b ===c , c === a) // true, true, true
```


# 객체의 분류 
객체는 두가지로 분류된다.
- built-in object : 브라우저에 의해 로드되자마자 별다른 행위없이 사용가능
- Host Ojbect : 사용자가 생성한 객체

