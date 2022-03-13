# Number 래퍼 객체

Number 객체는 원시 타입 number를 다룰 때 유용한 프로퍼티와 메소드를 제공하는 레퍼 객체이다. 변수 또는 객체의 프로퍼티가 숫자를 값을 ㅗ가지고 있다면 Number 객체의 별도 생성없이 Number 객체의 프로퍼티와 메소드를 사용할 수 있다.

> 원시타입으로 할당할 경우 해당 원시타입 객체에 따른 변환이 이뤄지고 다시 복귀 되기때문이다.


## Number Constructor
Number 객체는 Number() 생성자 함수를 통해 생성할 수 있다.

```
var y = new Number(123);
var x = new Number('str');
var z = Number('123');

var q = 123;
var p = new number(123);

console.log(q == p);
console.log(q === p);

console.log(typeof q);
console.log(typeof p);
```
- 숫자로 형 변환이 가능하지 않다면 NaN으로 반환된다.
- new 연산자를 붙이지 않아 생성자로 사용하지 않으면 Number 객체를 반환하지 않고 원시 타입 숫자를 반환한다. 이때 형 변환이 발생할 수 있다.

> 따라서 일반적으로 숫자를 사용할땐 원시타입 숫자를 사용한다.


# Number Property
원시 타입 숫자는 Number 객체를 생성할 필요없이 `Number.propertyName`을 사용할 수 있다.

## Number.EPSILON
Javascript에서 표현할 수 있는 가장 작은 수이다. 2 <sup>-52</sup>
> 부동소수점 산술 연산 비교는 정확한 값을 기대하기 어렵다. 부동소수점을 표현하는 IEEE 754는 2진법으로 변환시 무한소수가 되어 미세한 오차가 발생할 수 밖에 없는 구조적 한계를 갖는다. 따라서 부동소수점의 비교는 Number.EPSILON을 사용하여 비교 기능을 갖는 함수를 작성하여야 한다.
```
function isEqual(a, b){
    return Math.abs(a -b) < Number.EPSILON;
}
```

## Number.MAX_VALUE
Javascript에서 사용가능한 가장 큰 숫자를 반환한다. 더 큰 숫자론 `Infinity`이다.
## Number.MIN_VALUE
Javascript에서 사용가능한 가장 작은 숫자를 반환한다. 더 작은 숫자는 0으로 변환된다.

## Number.POSITIVE_INFINITY
양의 무한대 `Infinity`를 반환한다.

## Number.NEGATIVE_INFINITY
음의 무한대 `-Infinity`를 반환한다.

## Number.NaN
숫자가 아닌 값을 나타내는 숫자값이다. `window.NaN`프로퍼티와 같다.

# Number Method

## Number.isFinite
매개변수에 전달된 값이 정상적인 유한수인지를 검사하여 그 결과를 Boolean으로 반환한다.
- Number.isFinite()는 전역 함수 isFinite()와 다르다.
## Number.isInteger
매개변수에 전달된 값이 정수인지 검사하여 그 결과를 Boolean으로 변환한다.


## Number.isNaN
매개 변수에 전달된 값이 NaN인지를 검사하여 그 결과를 Boolean으로 반환한다.

## Number.isSafeInteger
매개변수에 전달된 값이 안전한 정수값인지 검사하여 그 결과를 Boolean으로 반환한다.
- 안전한 정수값은 -(2<sup>53</sup>-1)~ 2<sup>53</sup>-1까지의 정수값이다.
>  Number에 속해 있는 메소드들의 경우에 암묵적 형변환이 일어나지 않는다. 따라서 인수가 숫자가 아닐경우엔 언제나 false가 반환된다.


## Number.prototype.toExponential
대상을 지수 표기법으로 변환하여 문자열로 반환한다.
```
var x = 1234;
1234 = 1.234e+3

console.log(x.toExponential());

console.log(1234.toExponential()); 
console.log(1234.toExponential()); 
console.log(1.23.toString());
```
- 숫자뒤의 .은 소수 구분 기호일 수도 있고 마침표 표기법일 수도 있다. 따라서 자바스크립트엔진은 숫자 뒤의 `.`을 부동 소숫점 숫자의 일부로 해석한다.
- 부동소수점이 확인된 경우 이후에 나오는 `.`의 경우는 마침표 표기법으로 해석된다.


## Number.prototype.toFixed
매개변수로 지정된 소숫점자리를 반올림하여 문자열로 반환한다.

## Number.prototype.toPrecision
매개변수로 지정된 전체 자릿수까지 유효하도록 나머지 자릿수를 반올림하여 반환한다. 지정된 전체 자릿수로 표현할 수 없는 경우 지수 표기법으로 결과를 반환한다.

## Number.prototype.toString
숫자를 문자열로 변환하여 반환한다.
- 옵션을 통해서 2~36진법으로 나타낼수있다.

## Number.prototype.valueOf
Number 객체의 우너시타입값을 반환한다.

