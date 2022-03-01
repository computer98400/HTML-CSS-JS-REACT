# 함수 호출 방식에 의해 결정되는 this
자바스크립트의 함수는 호출될 때, 매개변수로 전달되는 인자값 이외에 `arguments 객체`와 `this`를 암묵적으로 전달 받는다.

```
function square(number){
    console.log(arguments);
    console.log(this);

    return number* number;
}
square(2);
```
자바스크립트의 `this` 키워드는 java와 같은 익숙한 언어의 개념과 달리 개발자에게 혼란을 준다.

javascript의 경우 java와 같이 this에 바인딩되는 객체는 한가지가 아니라 해당 함수 호출 방식에 따라 this에 바인딩되는 객체가 달라진다.

# 함수 호출 방식과 this 바인딩
자바스크립트의 경우 함수 호출 방식에 의해 `this`에 바인딩할 어떤 객체가 동적으로 결정된다. 다시 말해, 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니고, 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다.

```
var foo = function () {
    console.dir(this);
}


1. 함수호출
foo();

2. 메소드 호출
var obj = {foo: foo};
obj.foo();

3. 생성자 함수 호출
var instance = new foo();

4. apply/call/bind 호출
var bar = {name: 'bar'};
foo.call(bar);
foo.apply(bar);
foo.bind(bar)();
```


# 함수 호출
전역 객체는 모든 객체의 유일한 최상위 객체를 의미하며 일반적으로 Browser-side에서는 `window`, server-side에서는 `global`객체를 의미한다.

```
//browser
this === window

//node
this === global
```
전역객체는 전역 스코프를 갖는 전역변수를 프로퍼티로 소유한다. 글로벌 영역에서 선언한 함수는 전역객체의 프로퍼티로 접근할 수 있는 전역 변수의 메소드이다.

```
function foo(){
    console.log("foo's this"+this);
    function bar() {
        console.log("bar's this"+this);
    }
    bar();
}
foo();
```

> console.log(window)와 console.log(this)를 작성해보았을때 두가지가 같다는 점을 볼수있다. 따라서 this는 언제든 window를 가르키고 있다 생각하면 된다.

```
var value = 1;
var obj = {
    value: 100,
    foo: function() {
        console.log("foo's this: ", this);
        console.log("foo's this.value:", this.value);
        function bar() {
            console.log("bar's this:", this);
            console.log("bar's this.value: " , this.value);
        }
        bar();
    }
};
obj.foo();
```

- this는 전역객체에 바인딩된다. 전역함수는 물론이고 심지어 내부함수의 경우도 this는 외부함수가 아닌 전역객체에 바인딩된다.

```
var value = 1;

var obj = {
    value: 100,
    foo: function() {
        setTimeout(function() {
            console.log("callback's this: " , this);
            console.log("callback's this.value:", this.value);
        }, 100);
    }
};
obj.foo();
```

> 이상하지 않은가? 콜백함수와 내부함수의 경우 this가 가르키는 부분은 자신의 부모 객체를 가르키는것이 정상이다. 이에 더글라스 크락포드는 <b> 설계 단계의 결함으로 메소드가 내부함수를 사용하여 자신의 작업을 돕게 할 수 없다는 것이다.</b>라고 말한다. 따라서 회피 방법이 존재하며 아래 코드는 회피하는 방법이다.


```
var value = 1;
var obj = {
    value: 100,
    foo: function(){
        var that = this;
        console.log("foo's this: ", this);
        console.log("foo's this.value : ", this.value);
        function bar() {
            console.log("bar's this: ", this);
            console.log("bar's this.value:", this.value);
        
            console.log("bar's that: ", that);
            console.log("bar's that.value:", that.value);
        }
        bar();
    }
};

obj.foo();
```

이외에 this를 명시적으로 바인딩할 수 있는 `apply`,`call`,`bind` 메소드를 제공한다.

```
var value = 1;
var obj = {
    value: 100,
    foo: function () {
        console.log("foo's this: ", this);
        console.log("foo's this.value:", this.value );
        function bar(a,b){
            console.log("bar's this: ", this);
            console.log("bar's this.value: ", this.value);
            console.log("bar's arguments: ", arguments);
        }
        bar.apply(obj, [1,2]);
        bar.call(obj, 1,2);
        bar.bind(obj)(1,2);
    }
}
obj.foo();
```


# 메소드 호출
함수가 객체의 프로퍼티 값이면 메소드로서 호출된다. 이때 메소드 내부의 this는 해당 메소드를 소유한 객체, 즉 해당 메소드를 호출한 객체에 바인딩된다.

```
var obj1 = {
    name: 'Lee',
    sayName: function(){
        console.log(this.name);
    }
}

var obj2 = {
    name: 'Kim'
}

obj2.sayName = obj1.sayName;

obj1.sayName();
obj2.sayName();
```

- obj1의 sayName의 경우 obj1.name을 가르키게 된다.
- obj2는 sayName이 없지만 obj1.sayName프로퍼티를 가져오면서 obj2.name을 가르키게 된다.

프로토타입 객체도 메소드를 가질 수 있다. 프로토타입 객체 메소드 내부에서 사용된 this도 일반 메소드 방식과 마찬가지로 해당 메소드를 호출한 객체에 바인딩된다.

```
function Person(name){
    this.name = name;
}

Person.prototype.getName = function(){
    return this.name;
}

var me = new Person('Lee');
console.log(me.getName());

Person.prototype.name = 'Kim';
console.log(Person.prototype.getName());
```

> 프로토타입또한 전역 객체에서 시작된다(프로토타입 체인 종점). 따라서 Person.prototype.getName은 Kim을 가르키게 되었지만 me.getName의 경우 Lee를 가르킴을 볼 수 있다.


# 생성자 함수 호출
자바와 같은 객체지향 언어의 생성자 함수와는 다르게 그 형식이 정해져 잇는 것이 아니라 기존 함수에 new 연산자를 붙여서 호출하면 해당 함수는 생성자 함수로 동작한다.