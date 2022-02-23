# immutable value vs mutable value(변경불가성)

javascript의 원시 타입은 변경 불가능한 값이다.
원시타입 이외의 모든 값은 객체 타입이며 객체 타입은 변경 가능한 값이다. 즉, 객체는 새로운 값을 다시 만들 필요없이 직접 변경이 가능하다.

## 첫번째 예시
```
var str = 'Hello';
str = 'world';
```
> 첫번째 구문이 실행될때 메모리에 문자열 'Hello'가 생성되고 식별자 str은 메모리에 저장된 'Hello'를 가르키게 된다.두번째 문장에서 메모리에 'world'라는 문자열이 생성되고 str는 기존의 'Hello'가 아닌 'world'를 가르키게 된다.
<b>메모리상에선 Hello와 world가 공존하는 상태가 된것이다.</b>

## 두번째 예시
```
var statement = 'I am an immutable value';
var otherStr = statement.slice(8,17);
console.log(otherStr);  // 'immutable'
console.log(statement); //'I am an immutable value'

```
> 위의 예시도 같은 방식이다. `statement.slice`를 하여 메모리에 새로운 문자열이 저장되는 것이다.

## 세번째 예시
다음 예시는mutable한 값을 변경하는 예시이다.

```
var arr = [];
console.log(arr.length);//0

var v2 = arr.push(2);   // arr.push()는 메소드 실행 후 arr.length를 반환
console.log(arr.length) //1
```
> arr의 경우 배열로 선언되어있다. 이는 자바스크립트에선 객체로 선언되어있다는 의미이며 mutable한 값이기 때문에 <b>메모리에 있는 기존의 객체를 변경하게 된다</b>
## 네번째 예시
다음은 조금 더 복잡한 예시이다.

```
var user = {
    name: 'Lee',
    address: {
        city: 'Seoul'
    }
}

var myName = user.name;

user.name = 'Kim';
console.log(myName);  //Lee

myName = user.name;
console.log(myName); //Kim
```

> `var myName = user.name`에 속으면 안된다. 처음 문자열 예시와 마찬가지로 user.name은 'Lee'라는 문자열을 메모리에 저장하게 된다. 따라서 myName의 경우는 <b>메모리에 남아있는 'Lee'를 가르키고 있는 상태이다.</b>이후 myName = user.name을 다시 실행했을 때를 보자. 이때 user라는 mutable한 객체의 name을 다시 참조하기 때문에 myName은 <b>기존의 문자열(Lee)말고 새로운 문자열(Kim)을 가르키게 되는것이다.</b>

## 다섯번째 예시
다음 예시는 같은 객체를 가르키는 예시이다.
```
var user1 = {
    name: 'Lee',
    address: {
        city: 'Seoul'
    } 
};


var user2 = user1;

user2.name = 'Kim';
console.log(user1.name) //Kim
console.log(user2.name) //Kim
```

> <b>var user2는 메모리상의 user1과 같은 값을 가르키게 된다.</b> 따라서 user2의 값을 변경하게 되더라도 user1과 같은 값을 출력하게 되는것이다.

# 불변 데이터 패턴
의도하지 않은 객체의 변경이 발생하는 원인의 대다수는 "래퍼런스를 참조한 다른 객체에서 객체를 변경"하기 때문이다.(다섯번째 예시)
이 문제의 해결방법은 비용이 들긴하지만 객체를 불변객체로 만들어 프로퍼티의 변경을 방지하며 객체의 변경이 필요한 경우에는 참조가 아닌 객체의 방어적 복사를 통해 새로운 객체를 생성한 후 변경한다.

- 객체의 방어적 복사(Object.assign)
- 불변객체화를 통한 객체 변경 방지(Object.freeze)


## Object.assign
타깃 객체로 소스 객체의 프로퍼티를 복사한다. 이때 소스 객체의 프로퍼티와 동일한 프로퍼티를 가진 타겟 객체의 프로퍼티들은 소스 객체의 프로퍼티로 덮어쓰기된다. 리턴 값으로 타깃 객체를 반환한다. ES6에서 추가된 메소드이며 Internet Explorer는 지원하지 않는다.

```
const obj = {a: 1};
const copy = objet.assign({}, obj);

console.log(copy);
console.log(obj === copy);


cosnt o1 = {a : 1};
cosnt o2 = {b : 2};
cosnt o3 = {c : 3};

const merge1 = Object.assign(o1,o2,o3);

console.log(merge1);//{a:1,b:2,c:3}
console.log(o1)//{a:1,b:2,c:3}


cosnt o4 = {a : 1};
cosnt o5 = {b : 2};
cosnt o6 = {c : 3};

const merge2 = Object.assign({}, o1,o2,o3);

console.log(merge2);//{a:1,b:2, c:3}
console.log(o4) // {a:1}

```
> merge1의 경우는 기존 객체들 모두가 변경됨을 확인할 수 있다. 그에 비해 merge2의 경우 기존 객체를 변경하지않으며 새로운 객체를 생성하게 된다. 다만, <b>객체 내부의 객체는 Shallow copy(얕은 복사)된다.</b>
```
const user1 = {
    name: 'Lee',
    address: {
        city: 'Seoul'
    }
};

const user2 = Object.assign({}, user1);

console.log(user1 === user2);

user2.name = 'Kim';
console.log(user1.name); //Lee
console.log(user2.name); //Kim

console.log(user1.address === user2.address) //true
user1.address.city = 'Busan';
console.log(user1.address.city) //Busan
console.log(user1.address.city) //Busan
```

> user1을 복사하여 user2를 생성하였다. 하지만 내부에 존재하는 address객체의 경우 deep copy(깊은 복사)가 이뤄지지않았음을 알 수 있다.<b>또한 user1객체는 const로 선언되어 재할당은 할 수 없지만 객체의 프로퍼티는 보호되지 않는다.</b>

## Object.freeze
Object.freeze()를 사용하여 불변 객체로 만들 수 있다.


```
const user1 = {
    name: 'Lee',
    address: {
        city: 'Seoul'
    }
}

const user2 = Object.assign({}, user1, {name: 'Kim'}); //해당 문에서 user2의 name을 Kim으로 갱신한 것이다.

console.log(user1.name);
console.log(user2.name);

Object.freeze(user1);

user1.name = 'Kim'; //freeze를 한 상태이다! 무시된다.

console.log(user1);

console.log(Object.isFrozen(user1)) //true
```
하지만 객체 내부의 객체는 변경가능하다.
따라서 내부 객체까지 변경 불가능하게 만들려면 Deep freeze를 하여야 한다.
deep freeze의 경우 재귀를 통해서 만들게 된다.
> 이는 실습을 따로하는거루..


## Immutable.js
Object.assign과 Object.freez을 사용하여 불변 객체를 만드는 방법은 번거러울 뿐더러 성능상 이슈가 있어서 큰 객체에는 사용하지 않는 것이 좋다.
대안으로 Facebook이 제공하는 Immutable.js를 사용하는 방법이 있다.
List, Stack, Map, OrderedMap, Set, OrderedSet, Record와 같은 영구 불변 데이터 구조를 제공한다.
