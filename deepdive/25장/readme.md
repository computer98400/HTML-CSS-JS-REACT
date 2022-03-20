# Date

Date 객체는 날씨와 시간을 위한 메소드를 제공하는 빌트인 객체이면서 생성자 함수이다.

Date 생성자 함수로 생성한 Date 객체는 내부적으로 숫자값을 갖는다. 이 값은 1970년 1월 1일 00:00(UTC)을 기점으로 현재 시간까지의 밀리초를 나타낸다.

UTC(협정 세계시)는 GMT(그리니치 평균시)로 불리기도 하는데 UTC와 GMT는 초의 소숫점 단위에서만 차이가 나기때문에 일상에서는 혼용되어 사용된다.

KST(한국 평균시)는 UTC/GMT에 9시간을 더한 시간이다. 즉, UTC/GMT보다 9시간이 빠르다. 예를 들어, UTC 00:00 AM은 KST 09:00 AM이다.

현재의 날짜와 시간은 자바스크립트 코드가 동작한 시스템의 시간에 의해 결정된다. 시스템 시계의 설정에 따라 서로 다른 값을 가질 수 있다.

> 1970년 1월 1일이전의 값은 어떻게 표현할까?
> 간단함. 음수로 표현하면 됨.

![image](https://user-images.githubusercontent.com/62691610/159157037-2d74b02f-c033-4a79-8de0-14ef3daecfc0.png)


# Date Constructor
Date 객체는 생성자 함수이다. Date 생성자 함수는 날짜와 시간을 가지는 인스턴스를 생성한다. 생성된 인스턴스는 기본적으로 현재 날짜와 시간을 나타내는 값을 가진다. 현재 날짜와 시간이 아닌 다른 날짜와 시간을 다루고 싶은 경우, Date 생성자 함수에 명시적으로 해당 날짜와 시간 정보를 인수로 지정한다.

## 생성방식
```
//현재 시간을 반환하는 new Date()
console.log(new Date());

//1970/01/01 00:00 시를 기점으로 밀리초 단위로 시간을 표현함.
console.log(new Date(60000));

//문자열을 통해서 표현할 수 있다. 단, date.parse()를 통해 해석 가능한 형식이어야 한다.
console.log(new Date('March 20, 2022 19:39:00'));

//년, 월, 일, 시, 분, 초, 밀리초를 의미하는 숫자를 전달하면 지정된 날짜와 시간을 가지는 인스턴스를 반환한다.
console.log(new Date(2022,3));

//생성자 함수 없이 호출할 시
console.log(Date());
```

# Date 메소드

## Date.now
1970년 1월 1일 00:00:00(UTC)를 기점으로 현재 시간까지 경과한 밀리초를 숫자로 반환한다.

## Date.parse
1970년 1월 1일 00:00:00을 기점으로 인수로 전달된 지정 시간까지의 밀리초를 숫자로 반환한다.
```
console.log(Date.parse('1960/01/01/09:00:00'));
```
## Date.UTC
1970년 1월 1일 00:00:00을 기점으로 인수로 전달된 지정 시간까지의 밀리초를 숫자로 반환한다.
단 형식은 `new Date(year, month[, day, hour, minute, second, millisecond])`와 같은 형식의 인수를 사용하여야 한다.
또한 KST가 아닌 UTC를 기준으로 표현된다.
```
let d = Date.UTC(1970,0,2);
console.log(d);
```
- 형식이 맞지 않은 경우 NaN을 반환한다.


## Date.prototype.getFullYear // Date.prototype.setFullYear
년도를 4자리 숫자로 반환한다.
set 사용시 년 이외에 월과 일도 설정할 수 있다.
```
const today = new Date();
const year = today.getFullYear();

console.log(today);
console.log(year);

today.setFullYear(1998,2,20);

console.log(today);
```

## Date.prototype.getMonth // Date.prototype.setMonth 
해당 시간의 월을 0~11의 정수로 반환한다.
set을 사용시 월 이외에 일도 설정할 수 있다.
```
console.log(new Date().getMonth())

var today = new Date();
today.setMonth(5);
console.log(today);
```

## Date.prototype.getDate // Date.prototype.setDate
해당 시간의 날짜를 반환한다.
```
console.log(new Date().getDate())

var today = new Date();
today.setDate(22);
console.log(today)
```

## Date.prototype.getDay
요일을 나타내는 정수를 반환한다. 이때 일요일(0)부터 시작하여 토요일(6)으로 끝난다.
다른 메소드들과 달리 setDay는 존재하지 않는다.
```
console.log(new Date().getDay());
```

## Date.prototype.getHours // Date.prototype.setHours
해당 시간의 시간을 나타내는 정수를 반환한다.


## Date.prototype.getMinutes // Date.prototype.setMinutes
해당 시간의 분을 나타내는 정수를 반환한다.

## Date.prototype.getSeconds // Date.prototype.setSeconds
해당 시간의 초를 나타내는 정수를 반환한다.

## Date.prototype.getMilliSeconds // Date.prototype.setMilliSeconds
해당 시간의 밀리초를 나타내는 정수를 반환한다.


```
var today = new Date();

console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMilliSeconds());

today.setHours(23,21,21,333);
today.setMinutes(23,21,21);
today.setSeconds(21,655);
```

## Date.prototype.getTime // Date.prototype.setTime
1970년 1월 1일 00:00:00(UTC)를 기점으로 현재 시간까지 경과된 밀리초를 반환한다.
```
console.log(new Date().getTime());

var today = new Date(1970,0,1);
today.setTime(1647775694488)
```

## Date.prototype.getTimezoneOffset
UTC와 지정 로케일 시간과의 차이를 분단위로 반환한다.
```
var pre = new Date(1970,0,1);

var x = pre.getTimezoneOffset();
console.log(x);

```
- 일수가 넘어가는 값에 대해선 나타나지 않는다.



## Date.prototype.toDateString // Date.prototype.toTimeString
사람이 읽을 수 있는 형식의 문자열로 날짜를 반환한다.
```
console.log(new Date().toString());
console.log(new Date().toDateString());
console.log(new Date().toTimeString());
```