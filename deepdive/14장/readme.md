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
라고 되어있다.
```
var student ={
    name: 'Lee',
    score: 90
}
console.log(student.__proto__ === Object.prototype); //true
```
<b>객체를 생성할 때 프로토타입은 결정된다. 결정된 프로토타입 객체는 다른 임의의 객체로 변경할 수 있다. 이것은 부모 객체인 프로토타입을 동적으로 변경할 수 있다는 것을 의미한다. 이러한 특징을 활용하여 객체의 상속을 구현할 수 있다.</b>

