# String 래퍼 객체

String 객체는 원시 타입인 문자열을 다룰 때 유용한 프로퍼티와 메소드를 제공하는 래퍼 객체이다. 변수 또는 객체 프로퍼티가 문자열을 값으로 가지고 있다면 String 객체의 별도 생성없이 String 객체의 프로퍼티와 메소드를 사용할 수 있다.

```
const str = 'Hello world!';
console.log(str.toUpperCase());
```

# String Constructor
```
new String(value);

lett strObj = new String('Lee');
console.log(strObj);

strObj = new String(1);
console.log(strObj);

strObj = new String(undefined);
console.log(strObj);
```
new 연산자를 사용하지 않고 String 생성자 함수를 호출하면 String 객체가 아닌 문자열 리터럴을 반환한다. 이때 형 변환이 발생할 수 있다.
```
const str = 'Lee';
const strObj = new String('Lee');
```
일반적으로 문자열을 사용할 때는 원시타입 문자열을 사용한다.
```
const str = 'Lee';
const str = new String('Lee');

console.log(str == strObj);
console.log(str === strObj);

console.log(typeof str);
console.log(typeof strObj);
```

# String Property

## String.length
문자열 내의 문자 갯수를 반환한다.<b>String 객체는 length 프로퍼티를 소유하고 있으므로 유사 배열 객체이다.</b>
```
const str1 = 'Hello'
console.log(str1.length);
```

# String Method

## String.prototype.charAt
인수로 전달한 index를 사용하여 index에 해당하는 위치의 문자를 반환한다. 범위를 벗어날 시 빈문자열을 반환한다.

```
const str = 'Hi im seol';

//String method를 사용하는 방식
for(let i =0;i<str.length; i++){
    console.log(str.charAt(i));
}

//유사 배열 객체를 순회하는 방식
for(let i =0;i<str.length; i++){
    console.log(str[i]);
}

```


## String.prototype.concat
인수로 전달한 1개 이상의 문자열과 연결하여 새로운 문자열을 반환한다.
```
const str = 'test';
const str2 = 'test22';
console.log('Hello '.concat('Lee'));
console.log(str.concat('Lee'));
console.log(str.concat(str2));
```

## String.prototype.indexOf // String.prototype.lastIndexOf
인수로 전달한 문자 또는 문자열을 대상 문자열에서 검색하여 처음 발견된 곳의 index를 반환한다. 발견하지 못한 경우 -1을 반환한다.

lastIndexOf의 경우 시작위치로부터 역방향으로 탐색하게 된다.

```
const str = 'hi im seol';

console.log(str.indexOf('l'));
console.log(str.indexOf('eo'));
console.log(str.indexOf('im',5));

if(str.indexOf('Hello') === -1){
    console.log("not exist")
}

if(str.includes('im')){
    console.log("exist")
}

console.log(str.lastIndexOf('i'))
console.log(str.lastIndexOf('i',4))

```

## String.prototype.replace
> 정규 표현식을 공부한 이후 작성해야함
첫번째 인수로 전달한 문자열 또는 정규표현식을 대상 문자열에서 검색하여 두번째 인수로 전달한 문자열로 대체한다. 원본 문자열은 변경되지 않고 결과가 반영된 새로운 문자열을 반환한다.


## String.prototype.split
첫번째 인수로 전달한 문자열 또는 정규표현식을 대상 문자열에서 검색하여 문자열을 구분한 후 분리된 각 문자열로 이루어진 배열을 반환한다.<b>원본 문자열은 변경되지 않는다.</b>
인수가 없는 경우, 대상 문자열 전체를 단일 요소로 하는 배열을 반환한다.

```
const str = 'hi im seol';

console.log(str.split(' '));

console.log(str.split(/\s/));

console.log(str.split());

console.log(str.split(''));

console.log(str.split(' ',1));
```

## String.prototype.substring
첫번째 인수로 전달한 start 인덱스에 해당하는 문자부터 두번재 인자에 전달된 end 인덱스에 해당하는 문자의 바로 이전 문자까지를 모두 반환한다. 이때 첫번째 인수 < 두번째 인수의 관계가 성립된다.

- 첫번째 인수 > 두번째 인수 : 두 인수가 교환
- 두번째 인수가 생략된 경우 : 해당 문자열의 끝까지 반환
- 인수 < 0 또는 NaN인 경우: 0으로 취급된다.
- 인수 > 문자열의 길이 : 인수는 문자열의 길이로 취급된다.

## String.prototype.slice
substring과 동일하되 음수의 인수를 전달할 수 있다.



## String.prototype.toLowerCase() // String.prototype.toUpperCase()
대상 문자열의 모든 문자를 대/소문자로 변경한다.
```
console.log(`Hi, I'm Seol`.toLowerCase());
console.log(`Hi, I'm Seol`.toUpperCase());
```

## String.prototype.trim()
대상 문자열의 양쪽 공백을 제거하고 문자열을 반환한다.

```
const str = '    seol    ';

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());
```


## String.prototype.repeat
인수로 전달한 숫자만큼 반복해 연결한 새로운 문자열을 반환한다. 0일시엔 빈문자열을 반환, 음수일 땐 RangeError를 반환한다.

## String.prototype.includes
인수로 전달한 문자열이 포함되어 있는지를 검사하고 결과를 불리언 값으로 반환한다. 두 번째 인수는 옵션으로 검색할 위치를 나타내는 정수이다.
