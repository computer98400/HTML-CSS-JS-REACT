# Ajax

자바스크립트를 사요여하여 브라우저가 서버에게 비동기 방식으로 데이터를 요청하고 서버가 응답한 데이터를 수신하여 웹페이지를 동적으로 갱신하는 방식.

브라우저에서 제공하는 Web API인 XMLHttpRequest 객체를 기반으로 동작한다.

기존의 웹페이지 경우엔 html 파일 전체를 다시 렌더링 하는 방식으로 동작했다.

이전 방식의 단점
1. 이전 웹페이지와 차이가 없어서 변경할 필요가 없는 부분까지 포함된 완전한 HTML을 서버로부터 매번 다시 전송받기 때문에 불필요한 데이터 통신이 발생한다.
2. 변경할 필요가 없는 부분까지 처음부터 다시 렌더링한다. 이로 인해 화면 전환이 일어나면 화면이 순간적으로 깜빡이는 현상이 발생한다.
3. 클라이언트와 서버와의 통신이 동기 방식으로 동작하기 때문에 서버로부터 응답이 있을때까지 블로킹된다.

그에 비해 Ajax의 경우 부분적인 변환이 가능하며, 변환이 필요없는 부분에 대해선 변하지 않는다.

그에 따른 장점
1. 변경할 부분을 갱신하는 데 필요한 데이터만 서버로부터 전송받기 때문에 불필요한 데이터 통신이 발생하지 않는다.
2. 변경할 필요가 없는 부분은 다시 렌더링하지 않는다.
3. 클라이언트와 서버와의 통신이 비동기 방식으로 동작하기 때문에 서버에게 요청을 보낸 이후 블로킹이 발생하지 않는다.


## JSON
클라이언트와 서버 간의 HTTP 통신을 위한 텍스트 데이터 포멧이다.

### JSON 표기 방식
객체 리터럴과 유사하게 키와 값으로 구성된 순수한 텍스트이다.

```
{

    "name": "Lee",
    "age": 20,
    "alive": true,
    "hobby": ["traveling","tennis"]
}
```

### JSON.stringify
객체를 JSON 포맷의 문자열로 변환한다. 서버로 객체를 전송하기 위해 문자열화하는 것이며 이를 <b>직렬화</b>라고 한다.



```
const obj = {

    "name": "Lee",
    "age": 20,
    "alive": true,
    "hobby": ["traveling","tennis"]
}


const prettyJson = JSON.stringify(obj, null, 2);
console.log(prettyJson);
```

JSON.stringify의 경우 가운데 값으로 replacer를 통해 필터링이 가능하다.

```
function filter(key, value){
    return typeof value == 'number' ? undefined:value;
}
```

### JSON.parse

JSON 포멧의 문자열을 객체로 변환한다. 기본적으로 서버는 문자열 데이터를 보내기때문에 <b>역직렬화</b>가 필요하다.


## XMLHttpRequest
브라우저는 주소창이나 HTML의 form 태그 또는 a 태그를 통해 HTTP 요청 전송 기능을 기본 제공한다. 자바스크립트를 사용하여 HTTP 요청을 전송하려면 XMLHttpRequest 객체를 사용한다.

### XMLHttpRequest 객체 생성
XMLHttpRequest 생성자 함수를 호출하여 생성한다. 이는 브라우저에서 제공하는 Web API이기 때문에 브라우저에서만 실행된다.

### XMLHttpRequest 객체의 프로퍼티와 메서드

- 객체의 프로토타입 프로퍼티
readyState : HTTP 요청의 현재 상태를 나타내는 정수.<br> ex) UNSENT: 0, OPENED: 1, HEADERS_RECEIVED: 2, LOADING: 3, DONE: 4<br>
status : HTTP 요청에 대한 응답 상태를 나타내는 정수<br>
statusText : HTTP 요청에 대한 응답 메시지를 나타내는 문자열<br>
responseType : HTTP 응답 타입<br>
response : HTTP 요청에 대한 응답 몸체<br>
responseText : 서버가 전송한 HTTP 요청에 대한 응답 문자열<br>

- 객체의 이벤트 핸들러 프로퍼티
onreadystatechange : readyState 프로퍼티 값이 변경된 경우<br>
onloadstart : HTTP 요청에 대한 응답을 받기 시작한 경우<br>
onprogress : HTTP 요청에 대한 응답을 받는 도중 주기적으로 발생<br>
onabort : abort 메서드에 의해 HTTP 요청이 중단된 경우<br>
onerror : HTTP 요청에 에러가 발생한 경우<br>
onload : HTTP 요청이 성공적으로 완료한 경우<br>
ontimeout : HTTP 요청 시간이 초과한 경우<br>
onloadend : HTTP 요청이 완료한 경우<br>

- 객체의 메서드
open : HTTP 요청 초기화<br>
send : HTTP 요청 전송<br>
abort : 이미 전송된 요청 중단<br>
setRequestHeader : 특정 HTTP 요청 헤더의 값을 설정<br>
getResponseHeader : 특정 HTTP 요청 헤더의 값을 문자열로 변환<br>

### HTTP 요청 전송
다음과 같은 순서에 의해 요청이 전송된다.

1. XMLHttpRequest.prototype.open 메서드로 HTTP 요청을 초기화한다.
2. 필요에 따라 XMLHttpRequest.prototype.setRequestHeader 메서드로 특정 HTTP 요청의 헤더 값을 설정한다.
3. XMLHttpRequest.prototype.send 메서드로 HTTP 요청을 전송한다.

```
const xhr = new XMLHttpRequest();

xhr.open('GET','/users');
xhr.setRequestHeader('content-type', application/json');
xhr.send();
```


# cors
protocol과 host와 포트 번호까지 모두 합한걸 출처라고 이야기한다.

cors 오류가 뜨는 이유는 `같은 출처`가 아니기 때문이라고 한다.

추가적으로 SOP라는 정책이 있는데 두개가 맞물려서 엄청나게 골치아픈 정책들로 진화함..<br>

> 그래서 같은 출처란?
`Scheme`, `Host`, `Port`가 동일하다면 같은 출처로 판단된다.

예제를 만드는 도중 문제가 됬던건 PORT값이 다르기 때문에 cors 오류가 뜬것이다.

CORS는 브라우저의 구현 스펙에 포함되는 정책이기 때문에 브라우저를 통하지 않는 서버 간의 통신에는 이 정책이 적용되지 않는다. 또한 cors 정책을 위반하는 리소스 요청 때문에 에러가 발생했다고 해도 서버 쪽 로그에는 정상적으로 응답을 했다는 로그가 남기때문에 에러 확인이 어렵다.

## 그래서 CORS 오류를 해결하는 방법은?
기본적으로 웹 클라이언트 어플리케이션이 다른 출처의 리소스를 요청할 때는 HTTP 프로토콜을 사용하여 요청을 보내게 되는데 이때 브라우저는 요청 헤더에 `Origin`이라는 필드에 요청을 보내는 출처를 함께 담아보내면 된다.

이후 서버가 이 요청에 대한 응답을 할 때 응답 헤더에 `Access-Control-Allow-Origin이라는 값에 접근 허용된 출처를 내려주고`, 응답 받은 브라우저는 자신이 보냈던 요청의 Origin과 서버가 보내준 응답의 Access-Control-Allow-Origin을 비교하여 유효한 응답인지 확인한다.