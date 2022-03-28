배열은 1개의 변수에 여러 개의 값을 순차적으로 저장할 때 사용한다. 자바스크립트의 배열은 객체이며 유용한 내장 메소드를 포함하고 있다.

배열은 Array 생성자로 생성된 Array 타입의 객체이며 프로토타입 객체는 Array.prototype이다.

# 배열의 생성

## 배열 리터럴
0개 이상의 값을 쉼표로 구분하여 대괄호로 묶는다. 첫번째 값은 인덱스 '0'으로 읽을 수 있다. 존재하지 않는 요소에 접근하면 `undefined`를 반환한다.

```
const emptyArr = [];

console.log(emptyArr[1]);
console.log(emptyArr.length);

const arr = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
];

console.log(arr[1]);
console.log(arr.length);
console.log(typeof arr);
```

객체 리터럴의 경우 프로퍼티명이 없고 각 요소의 값만이 존재한다.
객체는 프로퍼티 값에 접근하기 위해 대괄호 표기법 또는 마침표 표기법을 사용하는 반면 배열은 요소에 접근하기 위해 대괄호 표기법만을 사용하여 대괄호 내에 접근하고자하는 요소의 인덱스를 넣어준다.


```
const emptyArr = [];
const emptyObj = {};

console.dir(emptyArr.__proto__);
console.dir(emptyObj.__proto__);

const misc = [
'string',
10,
true,
null,
undefined,
NaN,
Infinity,
['nested array'],
{object: true},
function () {}
];

console.log(misc.length);
```

## Array() 생성자 함수
배열은 일반적으로 배열 리터럴 방식으로 생성하지만 배열 리터럴 방식도 결국 내장 함수 Array() 생성자 함수로 배열을 생성하는 것을 단순화시킨 것이다. Array() 생성자 함수는 Array.prototype.constructor 프로퍼티로 접근할 수 있다.


```
const arr = new Array(2);
console.log(arr);


```