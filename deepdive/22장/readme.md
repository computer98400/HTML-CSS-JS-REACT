# 전역 객체
모든 객체의 유일한 최상위 객체를 의미하며 일반적으로 browser-side에선 window, server-side에선 global 객체를 의미한다.

전역객체의 특징
- 전역 객체는 실행 컨텍스트에 컨트롤이 들어가기 이전에 생성되며 constructor가 없기 때문에 new 연산자를 이용하여 새롭게 생성할 수 없다.
- 전역 객체는 전역 스코프를 갖게 된다.
- 전역 객체의 자식 객체를 사용할 때 전역 객체의 기술은 생략할 수 있다.
```
document.getElementById('foo').style.display = 'none';
window.document.getElementById('foo').style.display = 'none';
```


그러나 사용자가 정의한 변수와 전역 객체의 자식 객체의 이름이 충돌할 경우 명확히 전역 객체를 기술하여 혼동을 방지할 수 있다.
```
function moveTo(url){
    var location = {'href':'move to'};
    alert(location.href + url);
    window.location.href = url;
}
moveTo('http://www.google.com');
```

전역 변수는 전역객체의 프로퍼티가 된다.
```
var ga = 'Global variable';
console.log(ga);
console.log(window.ga);
```

글로벌 영역에 선언한 함수도 전역 객체의 프로퍼티로 접근할수있으며 이는 전역 함수는 전역 객체의 메소드임을 말한다.
```
function foo() {
    console.log('invoked!');
}
window.foo();
```
빌트인 객체도 역시 전역 객체의 자식 객체이다. 전역 객체의 자식 객체를 사용할 때 전역 객체의 기술은 생략할 수 있으므로 표준 빌트인 객체도 전역 객체의 기술을 생략할 수 있다.

```
alert('Hello');
```

# 전역 프로퍼티
전역 프로퍼티는 전역 객체의 프로퍼티를 의미한다. 애플리케이션 전역에서 사용하는 값들을 나타내기 위해 사용한다.
- Infinity
- NaN : 숫자가 아님을 나타내는 숫자값 NaN을 갖는다. Number.NaN과 같다.
- undefined : 원시타입 undefined가 존재

# 전역 함수
## eval()
매개변수에 전달된 문자열 구문 또는 표현식을 평가 또는 실행한다. 사용자로부터 입력받은 콘텐츠를 eval()로 실행하는 것은 보안에 취약하기 때문에 가급적 사용을 금지한다.

## isFinite()
매개변수에 전달된 값이 정상적인 유한수인지 검사하고 그 결과를 Boolean으로 반환한다. 숫자로 강제 형변환이 일어나게되고 검사가 수행된다.
```
isFinite(testValue);
isFinite(null) // 0으로 변환하여 검사를 수행하기때문에 true값이다.
```
## isNaN()
매개변수에 전달된 값이 NaN인지 검사하여 그 결과를 Boolean으로 반환한다. 이또한 강제 형변환이 일어나게된다.
```
isNaN(NaN)
isNaN(undefined)
isNaN({})
isNaN('blabla')
isNaN(null) //isFinite와 같이 null은 0으로 수행된다.
```
## parseFloat()
매개변수에 전달된 문자열을 부동소수점 숫자로 변환하여 반환한다.
- 문자열을 받는경우 첫 숫자만 반환되며 전후 공백은 무시된다. 이후 첫 문자를 숫자로 변환할 수 없다면 NaN을 반환한다.
## parseInt()
매개변수에 전달된 문자열을 정수형 숫자로 해석하여 반환한다.

## encodeURL()/decodeURL()
매개변수로 전달된 URL을 인코딩한다.
![image](https://user-images.githubusercontent.com/62691610/157780927-b455c87e-b01e-4255-b5a7-f229ba6cea0d.png)

> 이스케이프 처리
네트워크를 통해 정보를 공유할 때 어떤 시스템에서도 읽을 수 있는 ASCII Character-set으로 변환하는 것이다. UTF-8 특수문자의 경우 1문자당 1~3byte, UTF-8 한글 표현의 경우, 1문자당 3byte이다.

> 이스케이프 처리 이유
URI 문법 형식 표준 RFC3986에 따르면 URL은 ASCII Character-set으로만 구성되어야 하며 한글을 포함한 대부분의 외국어나 ASCII에 정의되지 않은 특수문자의 경우 URL에 포함될수없다. 따라서 각종 문자들에 대해 이스케이프 처리를 하여 야기될 수 있는 문제를 예방하기 위함이다.


## encodeURLComponent()/decodeURLComponent()
매개변수로 전달된 URL component를 인코딩한다. 