## 9장 타입 변환과 단축 평가

자바스크립트의 모든 값은 타입이 있다. 값의 타입은 개발자의 의도에 따라 다른 타입으로 변환할 수 있다. 
<b>명시적 타입 변환 또는 타입 캐스팅</b> 개발자가 의도적으로 값의 타입을 변환하는 것

```
var x = 10;
var str = x.toString();
console.log(typeof str, str);   //명시적 타입변환
console.log(typeof x, x);   //

var y = 10;
var str2 = y+'';

console.log(typeof str2, str2);
console.log(typeof y, y);
```
명시적 타입 변환과 암묵적 타입 변환은 코드의 예측이 가능하다는 점에서 명시적 타입변환을 쓰는 것이 좋다.
하지만 협업의 과정에서 꼭 명시적 타입변환만을 사용해야하는것은 아니다.
때로 명시적 타입 변환보다 암묵적 타입 변환이 가독성 측면에서 더 좋을 수 있다.

중요한 것은 코드를 예측할 수 있어야 한다는 것

<b>암묵적 타입 변환</b><br>
표현식을 평가 할 때 개발자의 의도와는 상관없이 코드의 문맥을 고려해 암묵적으로 데이터 타입을 강제 변환 할때가 있다.
```
'10'+ 2 //피연산자가 모두 문자열 타입이어야 하는 문맥

5 * '10' // 피연산자가 모두 숫자 타입이어야 하는 문맥

!0       //피연산자 또는 표현식이 불리언 타입이어야 하는 문맥
if(1){}
```
암묵적 타입 변환이 발생하면 문자열, 숫자, 불리언과 원시 타입중 하나로 타입을 자동 변환한다.

<b>문자열 타입 변환</b> +연산자의 경우 피연산자 중 하나 이상이 문자열이므로 문자열 연결 연산자로 동작한다.
문자열 연결 연산자의 모든 피연산자는 코드의 문맥상 모두 문자열 타입이어야 한다.
자바 스크립트 엔진은 문자열 연결 연산자 표현식을 평가하기 위해 문자열 연결 연산자의 피연산자 중에서 문자열 타입이 아닌 피연산자를 문자열 타입으로 암묵적 타입 변환한다.

ES6에서 도입된 템플릿 리터럴의 표현식 삽입은 표현식의 평가 결과를 문자열 타입으로 암묵적 타입 변환 된다.
```
`1 + 1 = ${1 + 1}` //-> "1+1 = 2
```
-    중요한 점은 평가 결과를 문자열 타입으로 변환하게 된다는 것<br>


<table>
<tr>
<td>
숫자 타입<br>
0 + ' ' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // "0"<br>
-0 + ' '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // "0"<br>
1+' '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // "1"<br>
-1+' '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // "-1"<br>
NaN+' '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // "NaN"<br>
Infinity+' '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // "Infinity"<br>
-Infinity+' '&nbsp;&nbsp;&nbsp;&nbsp; // "-Infinity"<br>
</td>
<td>
불리언 타입<br>
true + ' ' // true<br>
false+' ' //false<br><br>
null 타입<br>
null + ' ' //"null"<br><br>
undefined 타입<br>
undefined + ' ' //"undefined"
</td>
<td>
심벌 타입<br>
(Symbol()) + ' ' // TypeError<br>
<br>
객체타입<br>
({})+' '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//"[Object, Object]"<br>
Math+' ' //"[Object Math]"<br>
[]+ ' ' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// " " <br>
[10,20]+' ' //"10,20"<br>
(function(){})+' ' //"function(){}"<br>
Array + ' ' //"function Array() {[native code]}
</td>
</tr>
</table>

<b>숫자 타입으로 변환</b><br>
```
사칙연산의 기호중 +를 제외한 값이 들어올 경우 기본적으로 숫자 타입으로 암묵적 타입 변환이 일어난다.

1 - '1' // 0
1 * '10'// 10
1 / 'one'// NaN
피연산자를 숫자 타입으로 변환할 수 없는 경우 NaN을 반환하게 된다
```


비교 연산자의 역할을 불리언 값을 만드는 것이다.
`>` 비교 연산자의 경우 숫자 타입이 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환을 하게된다.
`+` 단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입으로 암묵적 타입 변환을 실행하게 된다.

```
빈문자열, 빈 배열,null, false 는 0으로 true는 1로 반환하며 이후 다른 값들에 대해선 NaN으로 변환된다.
```

불리언 타입으로 변환<br>
if문을 사용하는 경우에 제어문의 조건식은 불리언 값, 논리적 참, 거짓을 반환해야 하는 표현식이다. 이때 자바스크립트 엔진은 불리언 타입이 아닌 값을 <b>Truthy</b>한 값과 <b>Falsy</b>한 값으로 구분한다.
```
false, undefined, null, 0, -0, NaN, "(빈문자열)
```
위의 예시들을 제외한 나머지 값들의 경우 <b>Truthy</b>한 값이다.


### <b>명시적 타입변환</b>
개발자의 의도에 의해 명시적으로 타입을 변경하는 방법이다. 래퍼 객체 생성자 함수를 new 연산자 없이 호출하는 방법과 자바스크립트에서 제공하는 빌트인 메소드를 사용하는 방법, 앞에서 살펴본 암묵적 타입 변환을 사용하는 방법이 있다.

문자열
1. String 생성자 함수를 new 없이 사용
2. Object.prototype.toString 메서드를 사용하는 방법
3. 문자열 연결 연산자를 이용하는 방법
```
String(1); (1).toString();  1+'';
```
숫자
1.`Number` 생성자 함수를 `new` 없이 사용<br>
2. `parseInt, parseFloat`함수를 사용하는 방법<br>
3. 단항 연결 연산자를 사용하는 방법<br>
4. 산술 연산자를 사용하는 방법<br>






## 220210

자바스크립트는 가비지 콜렉터를 내장하는 매니지드 언어이다.

가비지 콜렉터 : 애플리케이션이 할당된 공간을 주기적으로 검사하여 더이상 사용되지않는 메모리를 자동으로 정리해주는 기능

리터럴 : 사람이 이해할 수 있는 문자또는 약속된 기호를 사용해 값을 생성하는 표기법
js 기본 문자열 표시 : 작은 따옴표('')
ES6에서 추가된 템플릿 리터럴 : 백틱(``)
백틱 내부에 데이터를 넣을 수 있으며 이러할땐
```
const test = `테스트용 문장입니다 ${data}`
```
이런식으로 표시하게 된다.

표현식 : 값으로 평가될 수 있는 문
= 표현식이 평가되면 새로운 값을 생성하거나 기존값을 참조하게된다.

문 : 프로그램을 구성하는 기본단위이자 최소 실행 단위
토큰 : 문법적인 의미를 가지며, 문법적으로 더이상 나눌수 없는 코드의 기본 요소
ASI : 세미콜론을 자동으로 삽입해주는 기능 - 다만 사용자가 의도한 바와 다르게 세미콜론이 삽입되는 경우가 있기 때문에 협업의 과정에서는 컨벤션이 꼭 필요한 부분이다.

원시타입
number String boolean undefined null symbol object

 