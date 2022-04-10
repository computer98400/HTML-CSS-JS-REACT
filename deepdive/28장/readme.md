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
// 매개변수로 숫자값을 하나만 입력한 경우 length가 2에 해당하는 배열이 만들어지게된다.
const arr = new Array(2);
console.log(arr);

//매개변수로 두개 이상의 값을 입력한 경우 해당 매개변수에 해당하는 배열이 만들어지게 된다.
const arr2 = new Array({"test":11},"asdfasdf",3);
console.log(arr2);

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


//값이 할당되지 않는 인덱스 위치의 요소는 생성되지 않는다. 존재하지 않는 요소를 참조하면 undefined가 뜨게된다.
console.log(Object.keys(arr));
console.log(arr[0]);

```

## 배열 요소의 삭제
배열의 요소를 삭제하기 위해선 `delete`연산자를 사용할 수 있다. 이때 length에는 변함이 없다. 해당 요소를 완전히 삭제하여 length에도 반영되게 하기 위해서는 `Array.prototype.splice` 메소드를 사용한다.

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

# Array Property

## Array.length
요소의 개수를 나타낸다. 배열 인덱스는 32bit 양의 정수로 처리된다. 따라서 양의 정수 2<sup>32</sup>-1 미만이다.

> 주의할 점으로 배열 요소의 개수와 length 프로퍼티의 값은 반드시 일치하지 않는다. 이는 <b>희소 배열</b>이라 한다. 일반 배열의 경우 배열의 요소 개수와 length프로퍼티의 값이 언제나 일치하지만 희소 배열은 배열의 요소 개수보다 length 프로퍼티의 값이 언제나 크다.



```
const arr = [];
console.log(arr);
arr[1000]= true;

console.log(arr);
console.log(arr.length);

//배열 길이를 명시적으로 변경함으로써 사용할 수 도 있다. 이후 인덱스에 해당하는 값들은 사라지게 된다.
arr.length = 3;
console.log(arr);
```



# Array Method

## Array.isArray(boolean)
정적 메소드 Array.isArray는 주어진 인수가 배열이면 true, 배열이 아니면 false를 반환한다.

## Array.from 
ES6에서 새롭게 도입된 Array.from 메소드는 유사 배열 객체 또는 이터러블 객체를 변환하여 새로운 배열을 생성한다.

```
const arr1 = Array.from('Hello');
console.log(arr1);

const arr2 = Array.from({length: 2, 0: 'a', 1:'b'});
console.log(arr2);

const arr3 = Array.from({length: 5}, function(v,i){ return il});
console.log(arr3);
```


## Array.of
ES6에서 새롭게 도입된 Array.of 메소드는 전달된 인수를 요소로 갖는 배열을 생성한다.
Array.of는 Array 생서자 함수와 다르게 전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성한다.

```
const arr1 = Array.of(1);
console.log(arr1);

const arr2 = Array.of(1,2,3);
console.log(arr2);


const arr3 = Array.of('string');
console.log(arr3);

```
> 기존에 new Array()에서 동작하던 매개변수가 숫자값 하나인 경우에도 배열로 생성된다.

## Array.prototype.indexOf(원본배열을 변경하지 않는다.)
원본 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환한다.
- 중복되는 요소가 있는 경우, 첫번째 인덱스를 반환한다.
- 해당하는 요소가 없는 경우, -1을 반환한다.
두번째 인자로 검색을 시작할 인덱스 값을 넣어서 탐색할 수 있다.

```
const arr = [1,2,2,4];

arr.indexOf(2);
arr.indexOf(4);
arr.indexOf(2,2);

if(arr.indexOf('4') === -1){
    console.log("4가 비었습니다.")
}


//ES7 includes

if(!arr.includes('7')){
    console.log("7이 없습니다");
}

```

> indexOf 메소드는 배열에 요소가 존재하는지 여부를 확인할 때 유용하다.
> ES7에선 Array.prototype.includes 메소드를 사용하면 보다 가독성이 좋다.


## Array.prototype.concat(원본배열을 건들지 않는다.)
인수로 전달된 값들을 원본배열의 마지막 요소로 추가한 새로운 배열을 반환한다.
인수로 전달한 값이 배열인 경우 배열을 해체하여 새로운 배열의 요소로 추가한다.


## Array.prototype.join
원본 배열의 모든 요소를 문자열로 변환한 후, 인수로 전달받은 값, 즉 구분자로 연결한 문자열을 반환한다. 구분자는 생략 가능하며 기본 구분자는 `,`이다.

```
const arr = [1,2,3,4];

let result = arr.join();
console.log(result);

```

## Array.prototype.push(원본배열을 변경한다.)
인수로 전달받은 모든 값을 원본 배열의 마지막에 요소로 추가하고 변경된 length 값을 반환한다. push 메소드는 원본 배열을 직접 변경한다.
```
const arr =[1,2];

//전달받은 모든 값을 원본 배열의 마지막에 요소로 추가하고 변경된  length값을 반환한다.
let result = arr.push(3,4);

//push메소드는 성능면에서 좋지 않다. 따라서 배열의 마지막에 요소를 추가하므로 length 프로퍼티를 사용하여 직접 요소를 추가할 수 있다.
const arr4 = [1,2];

arr4[arr4.length] = 3;
console.log(arr4);

```
push의 경우엔 원본배열을 직접 변경하는 효과가 있기때문에 안정성을 위해서 spread기법을 사용하는 것이 좋다.

```
const arr = [1,2];

const newArr = [...arr, 3];
console.log(newArr);

```


## Array.prototype.pop(원본배열을 변경한다.)
배열 요소의 마지막 요소를 추출한다. 원본 배열이 빈 배열일 경우엔 undefined를 반환한다.



## Array.prototype.reverse (원본배열을 변경한다.)
배열 요소의 순서를 반대로 변경한다. 이때 원본 배열이 변경된다.
```
const a = [1,2,3];
a.reverse();
console.log(a);
```

## Array.prototype.shift(원본배열을 변경한다.)
배열에서 첫 요소를 제거하고 제거한 요소를 반환한다. pop과 마찬가지로 요소를 하나 빼오는 메소드인데 이때 원본배열을 변경하게된다.

```
const a = [1,2,3];
console.log(a.shift());
console.log(a);
```

## Array.prototype.unshift(원본배열을 변경한다.)
배열에서 첫 요소에 요소를 추가시킨다.
```
const a = [1,2,3];
console.log(a.shift());
console.log(a);

a.unshift(1);
console.log(a);

```

## Array.prototype.slice(원본배열을 변경하지 않는다.)
인자로 지정된 배열의 부분을 복사하여 반환한다. 첫번째 매개변수 start에 해당하는 인덱스를 갖는 요소부터 매개변수 end에 해당하는 인덱스를 가진 요소 전까지 복사된다.
- start : 복사를 시작할 인덱스. 음수인 경우 배열의 끝에서의 인덱스를 나타낸다. 
- end : 옵션이며 기본값은 length 값이다.

```
const items = ['a','b','c'];

let res = items.slice(0,1);
console.log(res);

res = items.slice(1,2);
console.log(res);

res = items.slice(1);
console.log(res);

res = items.slice(-1);
console.log(res);

res = items.slice(-2);
console.log(res);

console.log(items);

const arr = [1,2,3];

const copy = arr.slice();
console.log(copy, copy === arr);


const todos = [
    {id: 1, content: 'HTML', completed: false},
    {id: 2, content: 'CSS', completed: true},
    {id: 3, content: 'Javascript', completed: false}
]

const _todos = todos.slice();
console.log(_todos === todos);
console.log(_todos[0] === todos[0]);

```


> Spread 문법과 Object.assign는 원본을 shallow copy한다. Deep copy를 위해서는 lodash의 deepClone을 사용하는 것을 추천한다.


이를 이용하여 arguments,HTMLCollection, NodeList와 같은 유사 배열 객체를 배열로 변환할 수 있다.




## Array.prototype.splice(원본배열을 변경한다.)
기존의 배열의 요소를 제거하고 그 위치에 새로운 요소를 추가한다. 배열 중간에 새로운 요소를 추가할 때도 사용된다.

가장 일반적으로 배열에서 요소를 삭제할때 사용된다.

```
const items1 = [1,2,3,4];
const res1 = items1.splice(1,2);
console.log(items1);
console.log(res1);

const items2 = [1,2,3,4];

const res2 = items2.splice(1);

console.log(items2);
console.log(res2);

const items = [1,2,3,4];
const res = items.splice(1,0,100);
console.log(items);
console.log(res);

```


