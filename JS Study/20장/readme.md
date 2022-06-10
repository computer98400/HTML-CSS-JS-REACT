# 객체지향 프로그래밍 개요
객체지향이라는 개념은 불행히도 명확한 정의가 없는 것이 특징이다. 우리가 어떠한 개념을 이해하려할 때, 그 개념의 특성을 통해 이해하는 것처럼 객체지향도 객체지향의 특성을 통해 이해할 수 밖에 없다.

객체 지향 프로그래밍은 실세계에 존재하고 인지하고 있는 객체를 소프트웨어의 세계에서 표현하기 위해 객체의 핵심적인 개념 또는 기능만을 추출하는 추상화를 통해 모델링하려는 프로그래밍 패러다임을 말한다.

객체 지향 프로그램이은 함수들의 집합 혹은 단순한 컴퓨터의 명령어들의 목록이라는 전통적인 절차지향 프로그래밍과는 다른, 관계성있는 객체들의 집합이라는 관점으로 접근하는 소프트웨어 디자인으로 볼 수 
있다.

각 객체는 메시지를 받을 수도 있고, 데이터를 처리할 수도 있으며, 또다른 객체에게 메시지를 전달할 수도 있다. 각 객체는 별도의 역할이나 책임을 갖는 작은 독립적인 기계 또는 부품으로 볼 수 있다.

객체지향 프로그래밍은 보다 유연하고 유지보수하기 쉬우며 확장성 측면에서도 유리한 프로그래밍을 하도록 의도되었고, 대규모 소프트웨어 개발에 널리 사용되고 있다.

# 클래스 기반 VS 프로토타입 기반

## 클래스 기반 언어
클래스로 객체의 자료구조와 기능을 정의하고 생성자를 통해 인스턴스를 생성한다. 클래스란 같은 종류의 집단에 속하는 속성과 행위를 정의한 것으로 객체지향 프로그램의 기본적인 사용자 정의 데이터형이라고 할 수 있다. 결국 클래스는 객체 생성에 사용되는 패턴 혹은 청사진일 뿐이며 new 연산자를 통한 인스턴스화 과정이 필요하다.

모든 인스턴스는 오직 클래스에서 정의된 범위 내에서만 작동하며 런타임에 그 구조를 변경할 수 없다. 이러한 특성은 정확성, 안정성, 예측성 측면에서 클래스 기반 언어가 프로토타입 기반 언어보다 좀 더 나은 결과를 보장한다.

## 프로토타입 기반 언어
자바스크립트는 멀티-패러다임 언어로 명령형, 함수형, 프로토타입 기반 객체지향 언어다. 비록 다른 객체지향 언더르과의 차이점에 대한 논쟁들이 있긴 하지만, 자바스크립트는 강력한 객체지향 프로그래밍 능력들을 지니고 있다. 간혹 클래스가 없어서 객체지향이 아니라고 생각하는 사람들도 있으나 프로토타입 기반의 객체지향 언어다.

```
var obj1 = {};
obj1.name = 'Lee';

var obj2 = new Object();
obj2.name = 'Lee';

function F() {}
var obj3 = new F();
obj3.name = 'Lee';
```
- 자바스크립트는 이미 생성된 인스턴스의 자료구조와 기능을 동적으로 변경할 수 있다. 이는 클래스 기반 언어에 익숙한 프로그래머들에게 혼란을 가져오게 되는데 자바스크립트에서는 함수 객체로 클래스, 생성자, 메소드 모두 구현이 가능하다.

> 프로토타입 체인을 통해서 함수객체를 생성자로 만들기도 하고, 클래스(객체 리터럴 + 생성자함수), 메소드를 생성하기도 한다.


# 생성자 함수와 인스턴스의 생성
```
function Person(name){
    this.name = name;

    this.setName = function(name){
        this.name =name;
    };

    this.getName = function(){
        return this.name;
    };
    
}

var me = new Person('Lee');
console.log(me.getName());

me.setName('Kim');
console.log(me.getName());

```
- 위의 코드는 setName과 getName이라는 메소드가 중복되어 생성된다. 이는 메모리 낭비가 이뤄지기 때문에 문제가 된다.

> 이를 해결하기 위해서 프로토타입을 사용하게 된다.

# 프로토타입 체인과 메소드의 정의

모든 객체는 프로토타입이라는 다른 객체를 가리키는 내부 링크를 가지고 있다. 즉, 프로토타입을 통해 직접 객체를 연결할 수 있는데 이를 프로토타입 체인이라 한다.

프로토타입을 이용하여 생성자 함수 내부의 메소드를 생성자 함수의 prototype 프로퍼티가 가리키는 프로토타입 객체로 이동시키면 생성자 함수에 의해 생성된 모든 인스턴스는 프로토타입 체인을 통해 프로토타입 객체의 메소드를 참조할 수 있다.

```
function Person(name){
    this.name = name;
}

Person.prototype.setName = function(name){
    this.name = name;
}

Person.prototype.getName = function(){
    return this.name;
}

var me = new Person('Lee');
var you = new Person('Kim');
var him = new Person('Choi');

console.log(Person.prototype);


console.log(me);
console.log(you);
console.log(him);
```


![image](https://user-images.githubusercontent.com/62691610/157139081-eac3c5df-9725-4b3a-908b-56493c1bddd4.png)

- Person.prototype에 setName과 getName이 들어가 있는 경우와 각각의 인스턴스에 setName과 getName이 들어가있는 경우를 생각해보자.


아래 내용은 더글라스 크락포드가 제안한 프로토타입 객체에 메소드를 추가하는 방식이다.

```
Function.prototype.method = function( name, func){
    if(!this.prototype[name]){
        this.prototype[name] = func;
    }
}

function Person(name){
    this.name = name;
}


Person.method('setName' , function( name){
    this.name = name;
});

Person.method('getName' , function(){
    return this.name;
});

var me = new Person('Lee');
var you = new Person('Kim');
var him = new Person('choi');

console.log(Person.prototype);

console.log(me);
console.log(you);
console.log(him);
```
- 모든 함수의 경우 Function.prototype을 가지게 된다. 따라서 Function.prototype에 메소드를 생성하여 접근하는 방식이다. Person 함수를 만들게 되면서 해당 함수에 setName과 getName을 넣어주었고, 이후 다른 함수를 만들시에도 자유롭게 메소드를 추가할 수 있으며 중복되는 메소드 없이 사용이 가능해진다.


# 상속
Java같은 클래스 기반 언어에서 상속은 코드 재사용의 관점에서 매우 유용하다. 새롭게 정의할 클래스가 기존에 있는 클래스와 매우 유사하다면, 상속을 통해 다른 점만 구현하면 된다. 코드 재사용은 개발 비용을 현저히 줄일 수 있는 잠재력이 있기 때문에 매우 중요하다.

클래스 기반 언어에서 객체는 클래스의 인스턴스이며 클래스는 다른 클래스로 상속될 수 있다. 자바스크립트는 기본적으로 프로토타입을 통해 상속을 구현한다. 이것은 <b>프로토타입을 통해 객체가 다른 객체에 직접 상속된다는 의미</b>이다.

# 의사 클래스 패턴 상속
자식 생성자 함수의 prototype 프로퍼티를 부모 생성자 함수의 인스턴스로 교체하여 상속을 구현하는 방법이다.

```
var Parent = (function () {
    function Parent(name){
        this.name = name;
    }

    Parent.prototype.sayHi = function () {
        console.log('Hi! ' + this.name);
    }
    return Parent;
})

var Child = (function () {
    function Child(name){
        this.name = name;
    }
    Child.prototype = new Parent();

    Child.prototype.sayHi = function () {
        console.log('안녕하세요! ' + this.name);
    };

    Child.prototype.sayBye = function () {
        console.log('안녕히가세요! ' + this.name);
    };
    

    return Child
})

var child = new Child ('child');

console.log(child);
console.log(Child.prototype); //대문자 Child

child.sayHi();
child.sayBye();

console.log(child instanceof Parent);
console.log(child instanceof Child);

```
- Child를 정의할 때 Child.prototype으로 Parent를 연결해준다. (프로토타입 체인)
- Child의 sayHi는 사실 Parent의 sayHi로 정의되어있지만 Child를 정의하게 되면서 오버라이딩 된다. 이후 sayBye또한 추가해준다.

![image](https://user-images.githubusercontent.com/62691610/157140696-e6a62310-bab4-49a8-bff3-97adf5fa27ac.png)

이렇게 의사 클래스 패턴은 클래스 기반 언어의 상속을 흉내내어 상속을 구현하였다. 다만 문제가 발생한다.

1. new 연산자를 통해 인스턴스를 생성한다.
이는 자바스크립트의 프로토타입 본질에 모순되는 것이다. 프로토타입 본성에 맞게 객체에서 다른 객체로 직접 상속하는 방법을 갖는 대신 생성자 함수와 new 연산자를 통해 객체를 생성하는 불필요한 간접적인 단계가 있다. 클래스와 비슷하게 보이는 일부 복잡한 구문은 프로토타입 메커니즘을 명확히 나타내지 못하게 한다.


2. 생성자 링크의 파괴
child 객체의 프로토타입 객체는 Parent 생성자 함수가 생성한 new Parent() 객체이다. 프로토타입 객체는 내부 프로퍼티로 constructor를 가지며 이는 생성자 함수를 가리킨다. 하지만 의사 클래스 패턴 상속은 프로토타입 객체를 인스턴스로 교체하는 과정에서 constructor의 연결이 깨지게 된다. 즉, child 객체를 생성한 것은 Child 생성자 함수이지만 child.constructor의 출력 결과는 Child 생성자 함수가 아닌 Parent 생성자 함수를 나타낸다.

3. 객체리터럴
의사 클래스 패턴 상속은 기본적으로 생성자 함수를 사용하기 때문에 객체리터럴 패턴으로 생성한 객체의 상속에는 적합하지 않다. 이는 객체리터럴 패턴으로 생성한 객체의 생성자 함수는 Object()이고 이를 변경할 방법이 없기 때문이다.

## 프로토타입 패턴 상속
프로토타입 패턴 상속은 Object.create 함수를 사용하여 객체에서 다른 객체로 직접 상속을 구현하는 방식이다. 프로토타입 패턴 상속은 의삿 클래스 패턴의 단점인 new 연산자가 필요없으며, 생성자 링크도 파괴되지 않으며, 객체리터럴에도 사용할 수 있다.
```
var Parent = (function () {
    function Parent(name){
        this.name = name;
    }

    Parent.prototype.sayHi = function () {
        console.log('Hi'+ this.name);
    }
    return Parent;
}());

var child = Object.create(Parent.prototype);
child.name = 'child';
child.sayHi();

console.log(child instanceof Parent);
```

![image](https://user-images.githubusercontent.com/62691610/157142460-41c93411-4ae7-415e-9e9d-ad9e93f9ea1d.png)

다음은 객체리터럴 패턴을 ㅗ생성한 객체에도 프로토타입 패턴 상속을 사용할 수 있다.
```
var parent = {
    name: 'parent',
    sayHi: function() {
        console.log('Hi !+this.name);
    }
};

var child = Object.create(parent);
child.name = 'child';

parent.sayHi();
child.sayHi();

console.log(parent.isPrototypeOf(child));
```

![image](https://user-images.githubusercontent.com/62691610/157142660-fcc20efd-a4ea-439d-83cc-3f693134d555.png)


> Object.create 함수는 매개변수에 프로토타입으로 설정할 객체 또는 인스턴스를 전달하고 이를 상속하는 새로운 객체를 생성한다. Object.create 함수는 표준에 비교적 늦게 추가되어 IE9 이상에서 정상적으로 동작한다. 이때 폴리필코드가 나오게 되는데 이는 `특정 기능이 지원되지 않는 브라우저를 위해 사용할 수 있는 코드 조각이나 플러그인`이다.

```
if(!Object.create){
    Object.create =function (o){
        function F() {}
        F.prototype = o;
        return new F();
    }
}
```

# 캡슐화와 모듈 패턴
캡슐화는 정보은닉이다. 멤버변수와 메소드를 클래스와 같은 하나의 틀에 담아두고 공개될 필요가없는 정보는 숨기는 것을 말한다.

자바스크립트의 기준에선 접근 제어자(`public`,`private`)가 없기때문에 클로저를 통해서 정보은닉을 만들게 된다.

```
var Person = function(arg){
    var name = arg ? arg : '';

    this.getName = function(){
        return name;
    }

    this.setName = function(arg){
        name = arg;
    }
}

var me = new Person('Lee');

var name = me.getName();

console.log(name);

me.setName('Kim');
name = me.getName();

console.log(name);
```

- 함수레벨 스코프를 다시 떠올리자. 해당 Person 함수에서의 var는 지역변수가 된다. 따라서 this를 사용하면 안된다 => 전역변수가 되기때문
-  getName과 setName을 통해 name은 자유변수가 된다. 따라서 정보은닉에 성공한 모습니다.


> private 맴버가 객체나 배열일 경우엔 반환되는 해당 멤버의 변경이 가능해진다. 따라서 객체나 배열을 반환할 경우엔 함수로 반환하여야 한다.

```
var Person = (function(){
    var name;

    var F = function(arg){ name = arg ? arg : ''};

    F.prototype = {
        getName: function(){
            return name;
        },
        setName : function(arg){
            name = arg;
        }
    }
    return F;
})();

var me = new Person('Lee');

console.log(Person.prototype === me.__proto__);

console.log(me.getName());
me.setName('Kim');
console.log(me.getName());
```


