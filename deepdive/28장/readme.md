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

# 배열 요소의 추가와 삭제

## 배열 요소의 추가
객체가 동적으로 프로퍼티를 추가할 수 있는 것처럼 배열도 동적으로 요소를 추가할 수 있다. 이때 순서에 맞게 값을 할당할 필요는 없고 인덱스를 사용하여 필요한 위치에 값을 할당한다. 배열의 길이는 마지막 인덱스를 기준으로 산정된다.

```
const arr = [];
console.log(arr[0]);

arr[1] = 1;
arr[3] = 3;


console.log(arr)
console.log(arr.length)

console.log(Object.keys(arr));

console.log(arr[0]);

```

## 배열 요소의 삭제
배열의 요소를 삭제하기 위해선 `delete`연산자를 사용할 수 있다. 이때 length에는 변함이 없다. 해당 요소를 완전히 삭제하여 length에도 반영되게 하기 위해서는 Array.prototype.splice 메소드를 사용한다.

```
const numberArr = ['zero', 'one', 'two', 'three'];

delete numbersArr[2];
console.log(numbersArr);

numbersArr.splice(2,1);
console.log(numbersArr);
```

# 배열의 순회
객체의 프로퍼티를 순회할 때 for..in 문을 사용한다. 배열 역시 객체이므로 for..in문을 사용할 수 있다. 그러나 배열은 객체이기 때문에 프로퍼티를 가질 수 있다. for..in문을 사용하면 배열 요소뿐만 아니라 불필요한 프로퍼티까지 출력될 수 있고 요소들의 순서를 보장하지 않으므로 배열을 순회하는데 적합하지 않다.

따라서 배열의 순회에는 forEach 메소드, for 문, for..of 문을 사용하는 것이 좋다.

```
const arr = [0,1,2,3];
arr.foo = 10;

for(const key in arr){
    console.log('key :' + key, 'value: '+arr[key]);
}

arr.forEach((item, index)=> console.log(index, item));
for(let i=0; i < arr.length; i++){
    console.log(i,arr[i]);
}
for(const item of arr){
    console.log(item);
}
```

