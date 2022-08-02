# 객체

자바스크립트는 객체 기반의 프로그래밍 언어이며, 자바스크립트를 구성하는 <b>거의 모든 것</b>(원시타입을 제외한 나머지)이 객체다.
원시타입은 단 하나의 값만 나타내지만 객체 타입은 다양한 타입의 값을 하나의 단위로 구성한 복합적인 자료구조다. 

자바스크립트의 객체는 키(key)와 값(value)으로 구성되어 객체의 상태를 나타내는 <b>프로퍼티(Property)</b>와 내부에 프로퍼티를 참조하고 조작할 수 있는 <b>메서드(Method)</b> 집합이다. 
프로퍼티의 값으로 자바스크립트에서 사용할 수 있는 모든 값을 사용할 수 있다. 이는 프로퍼티 값으로 함수를 사용할 수 있다는 말이다.
```
//java
int[] array = new int[3];
array[0] = 1;
array[1] = "test";

ArrayList<Integer> array = new ArrayList<>();
array.add(1);
array.add("test");

//JS
var array = new Array();
array.push(1);
array.push("test");
array.push(false);

var counter = {
    num: 0, //프로퍼티
    increase : function (){     //메서드
        this.num++;
    }
}

```
> 일급 객체란? 다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체를 가르킨다. 함수에 인자로 넘기기, 수정하기, 변수에 대입하기와 같은 연산을 지원한다는 의미


## 객체 리터럴에 의한 객체 생성
정적 언어의 경우 클래스를 사전에 정의하고 필요한 시점에서 new 연산자와 함께 생성자를 호출하여 인스턴스를 생성하는 방식으로 객체를 생성한다.
```
//java

public class node{
    String name;
    int age;
    public node(String name, age){
        this.name = name;
        this.age = age;
    }
}

//java - main
node test = new node("hyeonSong", 34);

```

> 인스턴스란? 객체지향 프로그래밍에서 객체는 클래스와 인스턴스를 포함한 개념이다. 클래스는 인스턴스를 생성하기 위한 템플릿의 역할을 하며, 인스턴스는 객체가 메모리에 저장되어 실제로 존재하는 것에 초점을 맞춘 용어다.


그에 비해 자바스크립트의 경우 프로토타입 기반 객체지향 언어로서 클래스 기반 객체지향 언어와는 달리 다양한 객체 생성 방식을 지원한다.
- 객체 리터럴
- Object 생성자 함수
- 생성자 함수
- Object.create 메서드
- 클래스

객체 리터럴은 객체를 생성하기 위한 표기법이다. 중괄호 내에 0개 이상의 프로퍼티를 정의한다. 변수에 할당되는 시점에서 자바스크립트 엔진은 객체리터럴을 해석해 객체를 생성한다.
```
var person = {
    //프로퍼티를 나열할 때는 쉼표로 구분된다.
    name : 'Lee',
    name : 'seol',
    
    'first-name': 'yun',
    //last-name: 'kim',
    
    0 : 1,
    1 : 2,
    
    //var : '',
    //function: '',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`);
    }
};
var key = 'hello';

person[key] = 'world';

console.log(person);
```
> 해당 코드의 경우 초기값이 지정된 경우이며 생성자가 포함되지 않는다. 따라서 해당 객체는 그저 템플릿의 모습을 띄울 뿐이다.

객체 리터럴은 값으로 평가되는 표현식이다. 따라서 객체 리터럴의 닫는 괄호 뒤에는 세미콜론을 붙인다.


## 프로퍼티
객체는 프로퍼티의 집합이며, 프로퍼티는 `key`와 `value`으로 구성된다.
프로퍼티는 `key`와 `value`으로 구성되며 `key`는 프로퍼티를 식별하기 위한 식별자이다.
`key`값을 지정할 때 주의할 점은 `빈 문자열을 포함하는 모든 문자열` 또는 `symbol` 값이다.

<b>프로퍼티 키에 문자열이나 symbol 값 이외의 값을 지정하면 암묵적으로 타입이 변환되어 문자열이 된다.</b> 중복 선언시 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮어쓰며, 열거시에 순서를 보장하지 않는다.

또한 문자열 또는 문자열로 평가할 수 있는 표현식을 사용해 `key`를 동적으로 생성할 수 있다.
```

var obj = {};


console.log(obj);
```
## 메서드
자바스크립트에서 사용할 수 있는 모든 값은 프로퍼티 값으로 사용할 수 있다고 했다. 따라서 함수는 값으로 취급할 수 있기 때문에 프로퍼티 값으로 사용할 수 있다.

## 프로퍼티 접근
프로퍼티 키가 식별자 네이밍 규칙을 준수하는 이름이라면 두가지 표기법 모두를 사용할 수 있다.
`.`을 기점으로 좌측에는 객체로 평가되는 표현식을 넣고, 우측에는 객체 내부의 `key`값을 지정한다.
```

//마침표 표기법
console.log(person.name);


//대괄호 표기법
//식별자 네이밍 규칙을 준수하지 않는 key값의 경우 반드시 대괄호 표기법을 사용해야 한다.다만 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.
console.log(person['name']);

```

## 프로퍼티 값 갱신, 동적 생성, 삭제
```
//프로퍼티 키에 접근가능하기 때문에 해당 키의 참조를 변경하게 되면 값이 갱신된다.
person.name = 'hyeonSong';


//존재하지 않는 프로퍼티키의 경우 동적으로 생성되어 추가되고 프로퍼티 값이 할당된다.
person.study = "very good";

//delete 연산자를 통해서 프로퍼티를 삭제할 수있다.
```

## ES6에서 추가된 객체 리터럴 확장기능

```

let x =1, y = 2;
//프로퍼티 축약 표현
const obj = {x,y};

console.log(obj);

const prefix = 'prop';
let i =0;

const obj2 = {
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
}

console.log(obj2);

## 메서드 축약 표현

const obj3 = {
    name : 'lee',
    sayHi(){
        console.log('Hi!'+this.name);
    }
}
```

